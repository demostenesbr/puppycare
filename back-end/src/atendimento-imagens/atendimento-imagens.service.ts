import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';
import { AtendimentoImagemSyncBatchRequestDto, AtendimentoImagemSyncItemDto } from './dto/atendimento-imagem-sync.dto';

@Injectable()
export class AtendimentoImagensService {
  constructor(private prisma: PrismaService) {}

  async create(createAtendimentoImagemDto: CreateAtendimentoImagemDto) {
    return this.prisma.aTENDIMENTO_IMAGENS.create({
      data: createAtendimentoImagemDto,
    });
  }

  async findAll() {
    return this.prisma.aTENDIMENTO_IMAGENS.findMany({
      include: {
        ATENDIMENTO: true,
      },
    });
  }

  async findOne(id: number) {
    const imagem = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({
      where: { ID_IMAGEM: id },
      include: {
        ATENDIMENTO: true,
      },
    });

    if (!imagem) {
      throw new NotFoundException(`Imagem com ID ${id} não encontrada`);
    }

    return imagem;
  }

  async update(
    id: number,
    updateAtendimentoImagemDto: UpdateAtendimentoImagemDto,
  ) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTO_IMAGENS.update({
      where: { ID_IMAGEM: id },
      data: updateAtendimentoImagemDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTO_IMAGENS.delete({
      where: { ID_IMAGEM: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.aTENDIMENTO_IMAGENS.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: AtendimentoImagemSyncBatchRequestDto) {
    const results = [] as Array<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(item: AtendimentoImagemSyncItemDto): Promise<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }> {
    const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, ID_ATENDIMENTO, CAMINHO_IMAGEM } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.aTENDIMENTO_IMAGENS.create({
        data: {
          ID_ATENDIMENTO: ID_ATENDIMENTO!,
          CAMINHO_IMAGEM: CAMINHO_IMAGEM ?? '',
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({ where: { PUBLIC_ID } });
    if (!existing) {
      const created = await this.prisma.aTENDIMENTO_IMAGENS.create({
        data: {
          PUBLIC_ID,
          ID_ATENDIMENTO: ID_ATENDIMENTO!,
          CAMINHO_IMAGEM: CAMINHO_IMAGEM ?? '',
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.aTENDIMENTO_IMAGENS.update({
        where: { PUBLIC_ID },
        data: {
          ID_ATENDIMENTO: ID_ATENDIMENTO ?? existing.ID_ATENDIMENTO,
          CAMINHO_IMAGEM: CAMINHO_IMAGEM ?? existing.CAMINHO_IMAGEM,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (!incomingUpdated && (ID_ATENDIMENTO !== undefined || CAMINHO_IMAGEM !== undefined || typeof DELETED_AT !== 'undefined')) {
      const updated = await this.prisma.aTENDIMENTO_IMAGENS.update({
        where: { PUBLIC_ID },
        data: {
          ID_ATENDIMENTO: ID_ATENDIMENTO ?? existing.ID_ATENDIMENTO,
          CAMINHO_IMAGEM: CAMINHO_IMAGEM ?? existing.CAMINHO_IMAGEM,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({ where: { PUBLIC_ID: publicId } });
    if (!existing) throw new NotFoundException(`Imagem com PUBLIC_ID ${publicId} não encontrada`);
    return this.prisma.aTENDIMENTO_IMAGENS.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}
