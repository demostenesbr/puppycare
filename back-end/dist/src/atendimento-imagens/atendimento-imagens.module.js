"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtendimentoImagensModule = void 0;
const common_1 = require("@nestjs/common");
const atendimento_imagens_controller_1 = require("./atendimento-imagens.controller");
const atendimento_imagens_service_1 = require("./atendimento-imagens.service");
let AtendimentoImagensModule = class AtendimentoImagensModule {
};
exports.AtendimentoImagensModule = AtendimentoImagensModule;
exports.AtendimentoImagensModule = AtendimentoImagensModule = __decorate([
    (0, common_1.Module)({
        controllers: [atendimento_imagens_controller_1.AtendimentoImagensController],
        providers: [atendimento_imagens_service_1.AtendimentoImagensService]
    })
], AtendimentoImagensModule);
//# sourceMappingURL=atendimento-imagens.module.js.map