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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientesService = class ClientesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createClienteDto) {
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
    async findOne(id) {
        const cliente = await this.prisma.cLIENTES.findUnique({
            where: { ID_CLIENTE: id },
            include: {
                PETS: true,
                PACOTES: true,
                ATENDIMENTOS: true,
            },
        });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return cliente;
    }
    async update(id, updateClienteDto) {
        await this.findOne(id);
        return this.prisma.cLIENTES.update({
            where: { ID_CLIENTE: id },
            data: updateClienteDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.cLIENTES.delete({
            where: { ID_CLIENTE: id },
        });
    }
    async getChanges(since) {
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
    async batchUpsert(body) {
        const results = [];
        for (const item of body.items) {
            const res = await this.applyOne(item);
            results.push(res);
        }
        return { results };
    }
    async applyOne(item) {
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
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.cLIENTES.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Cliente com PUBLIC_ID ${publicId} não encontrado`);
        return this.prisma.cLIENTES.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map