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
exports.RotasParadasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RotasParadasService = class RotasParadasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRotasParadaDto) {
        return this.prisma.rotasParadas.create({
            data: createRotasParadaDto,
        });
    }
    async findAll() {
        return this.prisma.rotasParadas.findMany({
            include: {
                rota: true,
                ordem: true,
            },
        });
    }
    async findOne(id) {
        const parada = await this.prisma.rotasParadas.findUnique({
            where: { id },
            include: {
                rota: true,
                ordem: true,
            },
        });
        if (!parada) {
            throw new common_1.NotFoundException(`Parada com ID ${id} não encontrada`);
        }
        return parada;
    }
    async update(id, updateRotasParadaDto) {
        await this.findOne(id);
        return this.prisma.rotasParadas.update({
            where: { id },
            data: updateRotasParadaDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.rotasParadas.delete({
            where: { id },
        });
    }
};
exports.RotasParadasService = RotasParadasService;
exports.RotasParadasService = RotasParadasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RotasParadasService);
//# sourceMappingURL=rotas-paradas.service.js.map