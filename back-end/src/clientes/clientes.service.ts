import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteSyncBatchRequestDto, ClienteSyncItemDto } from './dto/cliente-sync.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.cLIENTES.create({
      data: createClienteDto,
    });
  }

  async findAll() {
    return this.prisma.cLIENTES.findMany({
      include: {
        PETS: true,
        PACOTES: true,
        ATENDIMENTOS: true,
      },
    });
  }

  async findOne(id: number) {
    const cliente = await this.prisma.cLIENTES.findUnique({
      where: { ID_CLIENTE: id },
      include: {
        PETS: true,
        PACOTES: true,
        ATENDIMENTOS: true,
      },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    await this.findOne(id); // Check if exists
    return this.prisma.cLIENTES.update({
      where: { ID_CLIENTE: id },
      data: updateClienteDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Check if exists
    return this.prisma.cLIENTES.delete({
      where: { ID_CLIENTE: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.cLIENTES.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: ClienteSyncBatchRequestDto) {
    const results = [] as Array<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(item: ClienteSyncItemDto): Promise<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }> {
    const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, NOME, TELEFONE, ENDERECO } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.cLIENTES.create({
        data: {
          NOME: NOME ?? 'Sem nome',
          TELEFONE: TELEFONE ?? '',
          ENDERECO: ENDERECO ?? '',
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.cLIENTES.findUnique({ where: { PUBLIC_ID } });
    if (!existing) {
      const created = await this.prisma.cLIENTES.create({
        data: {
          PUBLIC_ID,
          NOME: NOME ?? 'Sem nome',
          TELEFONE: TELEFONE ?? '',
          ENDERECO: ENDERECO ?? '',
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.cLIENTES.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          TELEFONE: typeof TELEFONE !== 'undefined' ? TELEFONE : existing.TELEFONE,
          ENDERECO: typeof ENDERECO !== 'undefined' ? ENDERECO : existing.ENDERECO,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (!incomingUpdated && (NOME !== undefined || TELEFONE !== undefined || ENDERECO !== undefined || typeof DELETED_AT !== 'undefined')) {
      const updated = await this.prisma.cLIENTES.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          TELEFONE: typeof TELEFONE !== 'undefined' ? TELEFONE : existing.TELEFONE,
          ENDERECO: typeof ENDERECO !== 'undefined' ? ENDERECO : existing.ENDERECO,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.cLIENTES.findUnique({ where: { PUBLIC_ID: publicId } });
    if (!existing) throw new NotFoundException(`Cliente com PUBLIC_ID ${publicId} não encontrado`);
    return this.prisma.cLIENTES.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}
