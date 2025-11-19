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
exports.UsuarioSyncBatchRequestDto = exports.UsuarioSyncItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UsuarioSyncItemDto {
    PUBLIC_ID;
    NOME;
    DESCRICAO;
    SENHA_HASH;
    UPDATED_AT;
    VERSION;
    DELETED_AT;
}
exports.UsuarioSyncItemDto = UsuarioSyncItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UsuarioSyncItemDto.prototype, "PUBLIC_ID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UsuarioSyncItemDto.prototype, "NOME", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UsuarioSyncItemDto.prototype, "DESCRICAO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UsuarioSyncItemDto.prototype, "SENHA_HASH", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ISO timestamp of the update' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], UsuarioSyncItemDto.prototype, "UPDATED_AT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UsuarioSyncItemDto.prototype, "VERSION", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ISO timestamp for soft delete or null' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Object)
], UsuarioSyncItemDto.prototype, "DELETED_AT", void 0);
class UsuarioSyncBatchRequestDto {
    items;
}
exports.UsuarioSyncBatchRequestDto = UsuarioSyncBatchRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [UsuarioSyncItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UsuarioSyncItemDto),
    __metadata("design:type", Array)
], UsuarioSyncBatchRequestDto.prototype, "items", void 0);
//# sourceMappingURL=usuario-sync.dto.js.map