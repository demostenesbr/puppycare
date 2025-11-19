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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsuariosService = class UsuariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUsuarioDto) {
        return this.prisma.uSUARIOS.create({
            data: createUsuarioDto,
        });
    }
    async findAll() {
        return this.prisma.uSUARIOS.findMany();
    }
    async findOne(id) {
        const usuario = await this.prisma.uSUARIOS.findUnique({
            where: { ID_USUARIO: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        return usuario;
    }
    async update(id, updateUsuarioDto) {
        await this.findOne(id);
        return this.prisma.uSUARIOS.update({
            where: { ID_USUARIO: id },
            data: updateUsuarioDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.uSUARIOS.delete({
            where: { ID_USUARIO: id },
        });
    }
    async getChanges(since) {
        const sinceDate = since ? new Date(since) : new Date(0);
        return this.prisma.uSUARIOS.findMany({
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
        const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, NOME, DESCRICAO, SENHA_HASH } = item;
        if (!PUBLIC_ID) {
            const created = await this.prisma.uSUARIOS.create({
                data: {
                    NOME: NOME ?? 'Sem nome',
                    DESCRICAO: DESCRICAO ?? null,
                    SENHA_HASH: SENHA_HASH ?? '',
                    DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
                },
            });
            return { publicId: created.PUBLIC_ID, status: 'applied' };
        }
        const existing = await this.prisma.uSUARIOS.findUnique({ where: { PUBLIC_ID } });
        if (!existing) {
            const created = await this.prisma.uSUARIOS.create({
                data: {
                    PUBLIC_ID,
                    NOME: NOME ?? 'Sem nome',
                    DESCRICAO: DESCRICAO ?? null,
                    SENHA_HASH: SENHA_HASH ?? '',
                    DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
                },
            });
            return { publicId: created.PUBLIC_ID, status: 'applied' };
        }
        const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
        if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
            const updated = await this.prisma.uSUARIOS.update({
                where: { PUBLIC_ID },
                data: {
                    NOME: NOME ?? existing.NOME,
                    DESCRICAO: typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
                    SENHA_HASH: typeof SENHA_HASH !== 'undefined' ? SENHA_HASH : existing.SENHA_HASH,
                    DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
                    VERSION: { increment: 1 },
                },
            });
            return { publicId: updated.PUBLIC_ID, status: 'applied' };
        }
        if (!incomingUpdated && (NOME !== undefined || DESCRICAO !== undefined || SENHA_HASH !== undefined || typeof DELETED_AT !== 'undefined')) {
            const updated = await this.prisma.uSUARIOS.update({
                where: { PUBLIC_ID },
                data: {
                    NOME: NOME ?? existing.NOME,
                    DESCRICAO: typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
                    SENHA_HASH: typeof SENHA_HASH !== 'undefined' ? SENHA_HASH : existing.SENHA_HASH,
                    DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
                    VERSION: { increment: 1 },
                },
            });
            return { publicId: existing.PUBLIC_ID, status: 'applied' };
        }
        return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
    }
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.uSUARIOS.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Usuário com PUBLIC_ID ${publicId} não encontrado`);
        return this.prisma.uSUARIOS.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map