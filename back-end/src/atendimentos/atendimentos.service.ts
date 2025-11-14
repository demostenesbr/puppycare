import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { AtendimentoSyncBatchRequestDto, AtendimentoSyncItemDto } from './dto/atendimento-sync.dto';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class AtendimentosService {
  constructor(private prisma: PrismaService) {}

  async create(createAtendimentoDto: CreateAtendimentoDto) {
    return this.prisma.aTENDIMENTOS.create({
      data: createAtendimentoDto,
    });
  }

  async findAll() {
    return this.prisma.aTENDIMENTOS.findMany({
      include: {
        CLIENTE: true,
        PET: true,
        SERVICO: true,
        IMAGENS: true,
      },
    });
  }

  async findOne(id: number) {
    const atendimento = await this.prisma.aTENDIMENTOS.findUnique({
      where: { ID_ATENDIMENTO: id },
      include: {
        CLIENTE: true,
        PET: true,
        SERVICO: true,
        IMAGENS: true,
      },
    });

    if (!atendimento) {
      throw new NotFoundException(`Atendimento com ID ${id} não encontrado`);
    }

    return atendimento;
  }

  async update(id: number, updateAtendimentoDto: UpdateAtendimentoDto) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTOS.update({
      where: { ID_ATENDIMENTO: id },
      data: updateAtendimentoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTOS.delete({
      where: { ID_ATENDIMENTO: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.aTENDIMENTOS.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: AtendimentoSyncBatchRequestDto) {
    const results = [] as Array<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(item: AtendimentoSyncItemDto): Promise<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }> {
    const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, ID_CLIENTE, ID_PET, ID_SERVICO, VALOR_COBRADO, TIPO, NOTAS } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.aTENDIMENTOS.create({
        data: {
          ID_CLIENTE: ID_CLIENTE!,
          ID_PET: ID_PET!,
          ID_SERVICO: ID_SERVICO!,
          VALOR_COBRADO: VALOR_COBRADO ? new Decimal(VALOR_COBRADO.toString()) : new Decimal(0),
          TIPO: TIPO ?? 'Atendimento',
          NOTAS: NOTAS ?? null,
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.aTENDIMENTOS.findUnique({ where: { PUBLIC_ID } });
    if (!existing) {
      const created = await this.prisma.aTENDIMENTOS.create({
        data: {
          PUBLIC_ID,
          ID_CLIENTE: ID_CLIENTE!,
          ID_PET: ID_PET!,
          ID_SERVICO: ID_SERVICO!,
          VALOR_COBRADO: VALOR_COBRADO ? new Decimal(VALOR_COBRADO.toString()) : new Decimal(0),
          TIPO: TIPO ?? 'Atendimento',
          NOTAS: NOTAS ?? null,
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.aTENDIMENTOS.update({
        where: { PUBLIC_ID },
        data: {
          ID_CLIENTE: ID_CLIENTE ?? existing.ID_CLIENTE,
          ID_PET: ID_PET ?? existing.ID_PET,
          ID_SERVICO: ID_SERVICO ?? existing.ID_SERVICO,
          VALOR_COBRADO: typeof VALOR_COBRADO !== 'undefined' ? new Decimal(VALOR_COBRADO.toString()) : existing.VALOR_COBRADO,
          TIPO: TIPO ?? existing.TIPO,
          NOTAS: typeof NOTAS !== 'undefined' ? NOTAS : existing.NOTAS,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (!incomingUpdated && (ID_CLIENTE !== undefined || ID_PET !== undefined || ID_SERVICO !== undefined || typeof VALOR_COBRADO !== 'undefined' || TIPO !== undefined || typeof NOTAS !== 'undefined' || typeof DELETED_AT !== 'undefined')) {
      const updated = await this.prisma.aTENDIMENTOS.update({
        where: { PUBLIC_ID },
        data: {
          ID_CLIENTE: ID_CLIENTE ?? existing.ID_CLIENTE,
          ID_PET: ID_PET ?? existing.ID_PET,
          ID_SERVICO: ID_SERVICO ?? existing.ID_SERVICO,
          VALOR_COBRADO: typeof VALOR_COBRADO !== 'undefined' ? new Decimal(VALOR_COBRADO.toString()) : existing.VALOR_COBRADO,
          TIPO: TIPO ?? existing.TIPO,
          NOTAS: typeof NOTAS !== 'undefined' ? NOTAS : existing.NOTAS,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.aTENDIMENTOS.findUnique({ where: { PUBLIC_ID: publicId } });
    if (!existing) throw new NotFoundException(`Atendimento com PUBLIC_ID ${publicId} não encontrado`);
    return this.prisma.aTENDIMENTOS.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}
