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
exports.CreateServicoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateServicoDto {
    NOME;
    DESCRICAO;
    VALOR;
}
exports.CreateServicoDto = CreateServicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do serviço', example: 'Banho e Tosa' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServicoDto.prototype, "NOME", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Descrição do serviço' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateServicoDto.prototype, "DESCRICAO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valor do serviço', example: 79.90 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateServicoDto.prototype, "VALOR", void 0);
//# sourceMappingURL=create-servico.dto.js.map