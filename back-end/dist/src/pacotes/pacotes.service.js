"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacotesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PacotesService = class PacotesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPacoteDto) {
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
    async findOne(id) {
        const pacote = await this.prisma.pACOTES.findUnique({
            where: { ID_ASSINATURA: id },
            include: {
                CLIENTE: true,
                SERVICO: true,
            },
        });
        if (!pacote) {
            throw new common_1.NotFoundException(`Pacote com ID ${id} não encontrado`);
        }
        return pacote;
    }
    async update(id, updatePacoteDto) {
        await this.findOne(id);
        return this.prisma.pACOTES.update({
            where: { ID_ASSINATURA: id },
            data: {
                ID_CLIENTE: updatePacoteDto.ID_CLIENTE ?? undefined,
                ID_SERVICO: updatePacoteDto.ID_SERVICO ?? undefined,
                QTD_BANHOS: updatePacoteDto.QTD_BANHOS ?? undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pACOTES.delete({
            where: { ID_ASSINATURA: id },
        });
    }
    async getChanges(since) {
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
    async batchUpsert(body) {
        const results = [];
        for (const item of body.items) {
            const res = await this.applyOne(item);
            results.push(res);
        }
        return { results };
    }
    async applyOne(item) {
        const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, ID_CLIENTE, ID_SERVICO, QTD_BANHOS } = item;
        if (!PUBLIC_ID) {
            const created = await this.prisma.pACOTES.create({
                data: {
                    ID_CLIENTE: ID_CLIENTE,
                    ID_SERVICO: ID_SERVICO,
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
                    ID_CLIENTE: ID_CLIENTE,
                    ID_SERVICO: ID_SERVICO,
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
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.pACOTES.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Pacote com PUBLIC_ID ${publicId} não encontrado`);
        return this.prisma.pACOTES.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.PacotesService = PacotesService;
exports.PacotesService = PacotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PacotesService);
//# sourceMappingURL=pacotes.service.js.map