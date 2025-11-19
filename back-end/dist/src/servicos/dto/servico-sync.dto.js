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
exports.ServicoSyncBatchRequestDto = exports.ServicoSyncItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ServicoSyncItemDto {
    PUBLIC_ID;
    NOME;
    DESCRICAO;
    VALOR;
    UPDATED_AT;
    VERSION;
    DELETED_AT;
}
exports.ServicoSyncItemDto = ServicoSyncItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServicoSyncItemDto.prototype, "PUBLIC_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ServicoSyncItemDto.prototype, "NOME", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], ServicoSyncItemDto.prototype, "DESCRICAO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Valor como string para Decimal' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ServicoSyncItemDto.prototype, "VALOR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ISO timestamp of the update' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], ServicoSyncItemDto.prototype, "UPDATED_AT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ServicoSyncItemDto.prototype, "VERSION", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ISO timestamp for soft delete or null' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Object)
], ServicoSyncItemDto.prototype, "DELETED_AT", void 0);
class ServicoSyncBatchRequestDto {
    items;
}
exports.ServicoSyncBatchRequestDto = ServicoSyncBatchRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ServicoSyncItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ServicoSyncItemDto),
    __metadata("design:type", Array)
], ServicoSyncBatchRequestDto.prototype, "items", void 0);
//# sourceMappingURL=servico-sync.dto.js.map