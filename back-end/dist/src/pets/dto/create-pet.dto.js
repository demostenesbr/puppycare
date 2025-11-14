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
exports.CreatePetDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePetDto {
    ID_CLIENTE;
    NOME;
    RACA;
    DATA_NASC;
}
exports.CreatePetDto = CreatePetDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID_CLIENTE (inteiro) proprietário do pet' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePetDto.prototype, "ID_CLIENTE", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'NOME do pet' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetDto.prototype, "NOME", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'RACA do pet' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetDto.prototype, "RACA", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'DATA_NASC do pet (ISO string)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePetDto.prototype, "DATA_NASC", void 0);
//# sourceMappingURL=create-pet.dto.js.map