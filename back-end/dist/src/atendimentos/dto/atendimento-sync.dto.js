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
exports.AtendimentoSyncBatchRequestDto = exports.AtendimentoSyncItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AtendimentoSyncItemDto {
    PUBLIC_ID;
    ID_CLIENTE;
    ID_PET;
    ID_SERVICO;
    VALOR_COBRADO;
    TIPO;
    NOTAS;
    UPDATED_AT;
    VERSION;
    DELETED_AT;
}
exports.AtendimentoSyncItemDto = AtendimentoSyncItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AtendimentoSyncItemDto.prototype, "PUBLIC_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AtendimentoSyncItemDto.prototype, "ID_CLIENTE", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AtendimentoSyncItemDto.prototype, "ID_PET", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AtendimentoSyncItemDto.prototype, "ID_SERVICO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Valor como string para Decimal' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], AtendimentoSyncItemDto.prototype, "VALOR_COBRADO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AtendimentoSyncItemDto.prototype, "TIPO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], AtendimentoSyncItemDto.prototype, "NOTAS", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ISO timestamp of the update' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], AtendimentoSyncItemDto.prototype, "UPDATED_AT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AtendimentoSyncItemDto.prototype, "VERSION", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ISO timestamp for soft delete or null' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Object)
], AtendimentoSyncItemDto.prototype, "DELETED_AT", void 0);
class AtendimentoSyncBatchRequestDto {
    items;
}
exports.AtendimentoSyncBatchRequestDto = AtendimentoSyncBatchRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AtendimentoSyncItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AtendimentoSyncItemDto),
    __metadata("design:type", Array)
], AtendimentoSyncBatchRequestDto.prototype, "items", void 0);
//# sourceMappingURL=atendimento-sync.dto.js.map