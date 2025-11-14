"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const clientes_module_1 = require("./clientes/clientes.module");
const pets_module_1 = require("./pets/pets.module");
const pacotes_module_1 = require("./pacotes/pacotes.module");
const atendimentos_module_1 = require("./atendimentos/atendimentos.module");
const servicos_module_1 = require("./servicos/servicos.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const atendimento_imagens_module_1 = require("./atendimento-imagens/atendimento-imagens.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, clientes_module_1.ClientesModule, pets_module_1.PetsModule, pacotes_module_1.PacotesModule, atendimentos_module_1.AtendimentosModule, servicos_module_1.ServicosModule, usuarios_module_1.UsuariosModule, atendimento_imagens_module_1.AtendimentoImagensModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map