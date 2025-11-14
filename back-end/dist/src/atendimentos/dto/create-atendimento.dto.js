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
exports.CreateAtendimentoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAtendimentoDto {
    ID_CLIENTE;
    ID_PET;
    ID_SERVICO;
    VALOR_COBRADO;
    TIPO;
    NOTAS;
}
exports.CreateAtendimentoDto = CreateAtendimentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do cliente' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAtendimentoDto.prototype, "ID_CLIENTE", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do pet' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAtendimentoDto.prototype, "ID_PET", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do serviço' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAtendimentoDto.prototype, "ID_SERVICO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valor cobrado', example: 79.90 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateAtendimentoDto.prototype, "VALOR_COBRADO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de atendimento', example: 'banho' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "TIPO", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notas sobre o atendimento' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAtendimentoDto.prototype, "NOTAS", void 0);
//# sourceMappingURL=create-atendimento.dto.js.map