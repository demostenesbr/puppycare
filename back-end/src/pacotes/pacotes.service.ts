import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';
import { PacoteSyncBatchRequestDto, PacoteSyncItemDto } from './dto/pacote-sync.dto';

@Injectable()
export class PacotesService {
  constructor(private prisma: PrismaService) {}

  async create(createPacoteDto: CreatePacoteDto) {
    return this.prisma.pACOTES.create({
      data: {
        ID_CLIENTE: createPacoteDto.ID_CLIENTE,
        ID_SERVICO: createPacoteDto.ID_SERVICO,
        QTD_BANHOS: createPacoteDto.QTD_BANHOS ?? 0,
      },
    });
  }

  async findAll() {
    return this.prisma.pACOTES.findMany({
      include: {
        CLIENTE: true,
        SERVICO: true,
      },
    });
  }

  async findOne(id: number) {
    const pacote = await this.prisma.pACOTES.findUnique({
      where: { ID_ASSINATURA: id },
      include: {
        CLIENTE: true,
        SERVICO: true,
      },
    });

    if (!pacote) {
      throw new NotFoundException(`Pacote com ID ${id} não encontrado`);
    }

    return pacote;
  }

  async update(id: number, updatePacoteDto: UpdatePacoteDto) {
    await this.findOne(id);
    return this.prisma.pACOTES.update({
      where: { ID_ASSINATURA: id },
      data: {
        ID_CLIENTE: (updatePacoteDto as any).ID_CLIENTE ?? undefined,
        ID_SERVICO: (updatePacoteDto as any).ID_SERVICO ?? undefined,
        QTD_BANHOS: (updatePacoteDto as any).QTD_BANHOS ?? undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pACOTES.delete({
      where: { ID_ASSINATURA: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.pACOTES.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: PacoteSyncBatchRequestDto) {
    const results = [] as Array<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(item: PacoteSyncItemDto): Promise<{ publicId: string; status: 'applied' | 'conflict' | 'skipped'; server?: any }> {
    const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, ID_CLIENTE, ID_SERVICO, QTD_BANHOS } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.pACOTES.create({
        data: {
          ID_CLIENTE: ID_CLIENTE!,
          ID_SERVICO: ID_SERVICO!,
          QTD_BANHOS: QTD_BANHOS ?? 0,
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.pACOTES.findUnique({ where: { PUBLIC_ID } });
    if (!existing) {
      const created = await this.prisma.pACOTES.create({
        data: {
          PUBLIC_ID,
          ID_CLIENTE: ID_CLIENTE!,
          ID_SERVICO: ID_SERVICO!,
          QTD_BANHOS: QTD_BANHOS ?? 0,
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.pACOTES.update({
        where: { PUBLIC_ID },
        data: {
          ID_CLIENTE: ID_CLIENTE ?? existing.ID_CLIENTE,
          ID_SERVICO: ID_SERVICO ?? existing.ID_SERVICO,
          QTD_BANHOS: QTD_BANHOS ?? existing.QTD_BANHOS,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (!incomingUpdated && (ID_CLIENTE !== undefined || ID_SERVICO !== undefined || QTD_BANHOS !== undefined || typeof DELETED_AT !== 'undefined')) {
      const updated = await this.prisma.pACOTES.update({
        where: { PUBLIC_ID },
        data: {
          ID_CLIENTE: ID_CLIENTE ?? existing.ID_CLIENTE,
          ID_SERVICO: ID_SERVICO ?? existing.ID_SERVICO,
          QTD_BANHOS: QTD_BANHOS ?? existing.QTD_BANHOS,
          DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.pACOTES.findUnique({ where: { PUBLIC_ID: publicId } });
    if (!existing) throw new NotFoundException(`Pacote com PUBLIC_ID ${publicId} não encontrado`);
    return this.prisma.pACOTES.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}


            


            
