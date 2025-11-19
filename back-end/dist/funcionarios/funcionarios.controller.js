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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosController = void 0;
const common_1 = require("@nestjs/common");
const funcionarios_service_1 = require("./funcionarios.service");
let FuncionariosController = class FuncionariosController {
    funcionariosService;
    constructor(funcionariosService) {
        this.funcionariosService = funcionariosService;
    }
    findAll() {
        return this.funcionariosService.findAll();
    }
    update(id, body) {
        return this.funcionariosService.updateFuncionario(Number(id), body);
    }
};
exports.FuncionariosController = FuncionariosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "update", null);
exports.FuncionariosController = FuncionariosController = __decorate([
    (0, common_1.Controller)('funcionarios'),
    __metadata("design:paramtypes", [funcionarios_service_1.FuncionariosService])
], FuncionariosController);
//# sourceMappingURL=funcionarios.controller.js.map