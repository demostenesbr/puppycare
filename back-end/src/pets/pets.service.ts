import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetSyncBatchRequestDto, PetSyncItemDto } from './dto/pet-sync.dto';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto) {
    return this.prisma.pETS.create({
      data: {
        ID_CLIENTE: createPetDto.ID_CLIENTE,
        NOME: createPetDto.NOME,
        RACA: createPetDto.RACA ?? undefined,
        DATA_NASC: createPetDto.DATA_NASC ? new Date(createPetDto.DATA_NASC) : undefined,
      },
    });
  }

  async findAll() {
    return this.prisma.pETS.findMany({
      include: {
        CLIENTE: true,
        ATENDIMENTOS: true,
      },
    });
  }

  async findOne(id: number) {
    const pet = await this.prisma.pETS.findUnique({
      where: { ID_PET: id },
      include: {
        CLIENTE: true,
        ATENDIMENTOS: true,
      },
    });

    if (!pet) {
      throw new NotFoundException(`Pet com ID ${id} não encontrado`);
    }

    return pet;
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    await this.findOne(id);
    return this.prisma.pETS.update({
      where: { ID_PET: id },
      data: {
        ID_CLIENTE: (updatePetDto as any).ID_CLIENTE ?? undefined,
        NOME: (updatePetDto as any).NOME ?? undefined,
        RACA: (updatePetDto as any).RACA ?? undefined,
        DATA_NASC: (updatePetDto as any).DATA_NASC ? new Date((updatePetDto as any).DATA_NASC) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pETS.delete({
      where: { ID_PET: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.pETS.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: PetSyncBatchRequestDto) {
    const results = [] as Array<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(item: PetSyncItemDto): Promise<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }> {
    const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, NOME, RACA, DATA_NASC, ID_CLIENTE } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.pETS.create({
        data: {
          NOME: NOME ?? 'Pet',
          RACA: RACA ?? null,
          DATA_NASC: DATA_NASC ? new Date(DATA_NASC) : null,
          ID_CLIENTE: ID_CLIENTE!,
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.pETS.findUnique({ where: { PUBLIC_ID } });
    if (!existing) {
      const created = await this.prisma.pETS.create({
        data: {
          PUBLIC_ID,
          NOME: NOME ?? 'Pet',
          RACA: RACA ?? null,
          DATA_NASC: DATA_NASC ? new Date(DATA_NASC) : null,
          ID_CLIENTE: ID_CLIENTE!,
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.pETS.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          RACA: typeof RACA !== 'undefined' ? RACA : existing.RACA,
          DATA_NASC: typeof DATA_NASC !== 'undefined' ? (DATA_NASC ? new Date(DATA_NASC) : null) : existing.DATA_NASC,
          ID_CLIENTE: ID_CLIENTE ?? existing.ID_CLIENTE,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (!incomingUpdated && (NOME !== undefined || typeof RACA !== 'undefined' || typeof DATA_NASC !== 'undefined' || ID_CLIENTE !== undefined || typeof DELETED_AT !== 'undefined')) {
      const updated = await this.prisma.pETS.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          RACA: typeof RACA !== 'undefined' ? RACA : existing.RACA,
          DATA_NASC: typeof DATA_NASC !== 'undefined' ? (DATA_NASC ? new Date(DATA_NASC) : null) : existing.DATA_NASC,
          ID_CLIENTE: ID_CLIENTE ?? existing.ID_CLIENTE,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.pETS.findUnique({ where: { PUBLIC_ID: publicId } });
    if (!existing) throw new NotFoundException(`Pet com PUBLIC_ID ${publicId} não encontrado`);
    return this.prisma.pETS.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}

