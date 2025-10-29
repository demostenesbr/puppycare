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
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FuncionariosService = class FuncionariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createFuncionarioDto) {
        return this.prisma.funcionarios.create({
            data: createFuncionarioDto,
        });
    }
    async findAll() {
        return this.prisma.funcionarios.findMany();
    }
    async findOne(id) {
        const funcionario = await this.prisma.funcionarios.findUnique({
            where: { id },
        });
        if (!funcionario) {
            throw new common_1.NotFoundException(`ID do funcionario ${id} não encontrada`);
        }
        return funcionario;
    }
    async update(id, updateFuncionarioDto) {
        await this.findOne(id);
        return this.prisma.funcionarios.update({
            where: { id },
            data: updateFuncionarioDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.funcionarios.delete({
            where: { id },
        });
    }
};
exports.FuncionariosService = FuncionariosService;
exports.FuncionariosService = FuncionariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FuncionariosService);
//# sourceMappingURL=funcionarios.service.js.map