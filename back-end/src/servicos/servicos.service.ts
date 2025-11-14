import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { ServicoSyncBatchRequestDto, ServicoSyncItemDto } from './dto/servico-sync.dto';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class ServicosService {
  constructor(private prisma: PrismaService) {}

  async create(createServicoDto: CreateServicoDto) {
    return this.prisma.sERVICOS.create({
      data: createServicoDto,
    });
  }

  async findAll() {
    return this.prisma.sERVICOS.findMany({
      include: {
        ATENDIMENTOS: true,
        PACOTES: true,
      },
    });
  }

  async findOne(id: number) {
    const servico = await this.prisma.sERVICOS.findUnique({
      where: { ID_SERVICO: id },
      include: {
        ATENDIMENTOS: true,
        PACOTES: true,
      },
    });

    if (!servico) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado`);
    }

    return servico;
  }

  async update(id: number, updateServicoDto: UpdateServicoDto) {
    await this.findOne(id);
    return this.prisma.sERVICOS.update({
      where: { ID_SERVICO: id },
      data: updateServicoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sERVICOS.delete({
      where: { ID_SERVICO: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.sERVICOS.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: ServicoSyncBatchRequestDto) {
    const results = [] as Array<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(item: ServicoSyncItemDto): Promise<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }> {
    const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, NOME, DESCRICAO, VALOR } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.sERVICOS.create({
        data: {
          NOME: NOME ?? 'Serviço',
          DESCRICAO: DESCRICAO ?? null,
          VALOR: VALOR ? new Decimal(VALOR.toString()) : new Decimal(0),
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.sERVICOS.findUnique({ where: { PUBLIC_ID } });
    if (!existing) {
      const created = await this.prisma.sERVICOS.create({
        data: {
          PUBLIC_ID,
          NOME: NOME ?? 'Serviço',
          DESCRICAO: DESCRICAO ?? null,
          VALOR: VALOR ? new Decimal(VALOR.toString()) : new Decimal(0),
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.sERVICOS.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          DESCRICAO: typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
          VALOR: typeof VALOR !== 'undefined' ? new Decimal(VALOR.toString()) : existing.VALOR,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (!incomingUpdated && (NOME !== undefined || typeof DESCRICAO !== 'undefined' || typeof VALOR !== 'undefined' || typeof DELETED_AT !== 'undefined')) {
      const updated = await this.prisma.sERVICOS.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          DESCRICAO: typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
          VALOR: typeof VALOR !== 'undefined' ? new Decimal(VALOR.toString()) : existing.VALOR,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.sERVICOS.findUnique({ where: { PUBLIC_ID: publicId } });
    if (!existing) throw new NotFoundException(`Serviço com PUBLIC_ID ${publicId} não encontrado`);
    return this.prisma.sERVICOS.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}
