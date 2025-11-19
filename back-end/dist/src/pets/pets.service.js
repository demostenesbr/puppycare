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
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PetsService = class PetsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPetDto) {
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
    async findOne(id) {
        const pet = await this.prisma.pETS.findUnique({
            where: { ID_PET: id },
            include: {
                CLIENTE: true,
                ATENDIMENTOS: true,
            },
        });
        if (!pet) {
            throw new common_1.NotFoundException(`Pet com ID ${id} não encontrado`);
        }
        return pet;
    }
    async update(id, updatePetDto) {
        await this.findOne(id);
        return this.prisma.pETS.update({
            where: { ID_PET: id },
            data: {
                ID_CLIENTE: updatePetDto.ID_CLIENTE ?? undefined,
                NOME: updatePetDto.NOME ?? undefined,
                RACA: updatePetDto.RACA ?? undefined,
                DATA_NASC: updatePetDto.DATA_NASC ? new Date(updatePetDto.DATA_NASC) : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pETS.delete({
            where: { ID_PET: id },
        });
    }
    async getChanges(since) {
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
    async batchUpsert(body) {
        const results = [];
        for (const item of body.items) {
            const res = await this.applyOne(item);
            results.push(res);
        }
        return { results };
    }
    async applyOne(item) {
        const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, NOME, RACA, DATA_NASC, ID_CLIENTE } = item;
        if (!PUBLIC_ID) {
            const created = await this.prisma.pETS.create({
                data: {
                    NOME: NOME ?? 'Pet',
                    RACA: RACA ?? null,
                    DATA_NASC: DATA_NASC ? new Date(DATA_NASC) : null,
                    ID_CLIENTE: ID_CLIENTE,
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
                    ID_CLIENTE: ID_CLIENTE,
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
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.pETS.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Pet com PUBLIC_ID ${publicId} não encontrado`);
        return this.prisma.pETS.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.PetsService = PetsService;
exports.PetsService = PetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PetsService);
//# sourceMappingURL=pets.service.js.map