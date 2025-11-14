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
exports.AtendimentosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
let AtendimentosService = class AtendimentosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAtendimentoDto) {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Atendimento com ID ${id} não encontrado`);
        }
        return atendimento;
    }
    async update(id, updateAtendimentoDto) {
        await this.findOne(id);
        return this.prisma.aTENDIMENTOS.update({
            where: { ID_ATENDIMENTO: id },
            data: updateAtendimentoDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.aTENDIMENTOS.delete({
            where: { ID_ATENDIMENTO: id },
        });
    }
    async getChanges(since) {
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
    async batchUpsert(body) {
        const results = [];
        for (const item of body.items) {
            const res = await this.applyOne(item);
            results.push(res);
        }
        return { results };
    }
    async applyOne(item) {
        const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, ID_CLIENTE, ID_PET, ID_SERVICO, VALOR_COBRADO, TIPO, NOTAS } = item;
        if (!PUBLIC_ID) {
            const created = await this.prisma.aTENDIMENTOS.create({
                data: {
                    ID_CLIENTE: ID_CLIENTE,
                    ID_PET: ID_PET,
                    ID_SERVICO: ID_SERVICO,
                    VALOR_COBRADO: VALOR_COBRADO ? new library_1.Decimal(VALOR_COBRADO.toString()) : new library_1.Decimal(0),
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
                    ID_CLIENTE: ID_CLIENTE,
                    ID_PET: ID_PET,
                    ID_SERVICO: ID_SERVICO,
                    VALOR_COBRADO: VALOR_COBRADO ? new library_1.Decimal(VALOR_COBRADO.toString()) : new library_1.Decimal(0),
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
                    VALOR_COBRADO: typeof VALOR_COBRADO !== 'undefined' ? new library_1.Decimal(VALOR_COBRADO.toString()) : existing.VALOR_COBRADO,
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
                    VALOR_COBRADO: typeof VALOR_COBRADO !== 'undefined' ? new library_1.Decimal(VALOR_COBRADO.toString()) : existing.VALOR_COBRADO,
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
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.aTENDIMENTOS.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Atendimento com PUBLIC_ID ${publicId} não encontrado`);
        return this.prisma.aTENDIMENTOS.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.AtendimentosService = AtendimentosService;
exports.AtendimentosService = AtendimentosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AtendimentosService);
//# sourceMappingURL=atendimentos.service.js.map