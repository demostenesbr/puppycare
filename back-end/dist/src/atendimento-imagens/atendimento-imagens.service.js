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
exports.AtendimentoImagensService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AtendimentoImagensService = class AtendimentoImagensService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAtendimentoImagemDto) {
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
    async findOne(id) {
        const imagem = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({
            where: { ID_IMAGEM: id },
            include: {
                ATENDIMENTO: true,
            },
        });
        if (!imagem) {
            throw new common_1.NotFoundException(`Imagem com ID ${id} não encontrada`);
        }
        return imagem;
    }
    async update(id, updateAtendimentoImagemDto) {
        await this.findOne(id);
        return this.prisma.aTENDIMENTO_IMAGENS.update({
            where: { ID_IMAGEM: id },
            data: updateAtendimentoImagemDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.aTENDIMENTO_IMAGENS.delete({
            where: { ID_IMAGEM: id },
        });
    }
    async getChanges(since) {
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
    async batchUpsert(body) {
        const results = [];
        for (const item of body.items) {
            const res = await this.applyOne(item);
            results.push(res);
        }
        return { results };
    }
    async applyOne(item) {
        const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, ID_ATENDIMENTO, CAMINHO_IMAGEM } = item;
        if (!PUBLIC_ID) {
            const created = await this.prisma.aTENDIMENTO_IMAGENS.create({
                data: {
                    ID_ATENDIMENTO: ID_ATENDIMENTO,
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
                    ID_ATENDIMENTO: ID_ATENDIMENTO,
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
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Imagem com PUBLIC_ID ${publicId} não encontrada`);
        return this.prisma.aTENDIMENTO_IMAGENS.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.AtendimentoImagensService = AtendimentoImagensService;
exports.AtendimentoImagensService = AtendimentoImagensService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AtendimentoImagensService);
//# sourceMappingURL=atendimento-imagens.service.js.map