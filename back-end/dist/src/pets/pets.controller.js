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
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pets_service_1 = require("./pets.service");
const create_pet_dto_1 = require("./dto/create-pet.dto");
const update_pet_dto_1 = require("./dto/update-pet.dto");
const pet_sync_dto_1 = require("./dto/pet-sync.dto");
let PetsController = class PetsController {
    petsService;
    constructor(petsService) {
        this.petsService = petsService;
    }
    create(createPetDto) {
        return this.petsService.create(createPetDto);
    }
    findAll() {
        return this.petsService.findAll();
    }
    findOne(id) {
        return this.petsService.findOne(id);
    }
    update(id, updatePetDto) {
        return this.petsService.update(id, updatePetDto);
    }
    remove(id) {
        return this.petsService.remove(id);
    }
    getChanges(since) {
        return this.petsService.getChanges(since);
    }
    batch(body) {
        return this.petsService.batchUpsert(body);
    }
    softDeleteByPublicId(publicId) {
        return this.petsService.softDeleteByPublicId(publicId);
    }
};
exports.PetsController = PetsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo pet' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pet criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_dto_1.CreatePetDto]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os pets' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de pets retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um pet por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do pet' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pet encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pet não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um pet' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do pet' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pet atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pet não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pet_dto_1.UpdatePetDto]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um pet' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do pet' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pet removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pet não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('changes'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar alterações de pets desde um timestamp' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mudanças retornadas com sucesso.' }),
    __param(0, (0, common_1.Query)('since')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "getChanges", null);
__decorate([
    (0, common_1.Post)('batch'),
    (0, swagger_1.ApiOperation)({ summary: 'Aplicar lote de alterações de pets (upsert por PUBLIC_ID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Resultados do processamento do lote.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_sync_dto_1.PetSyncBatchRequestDto]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "batch", null);
__decorate([
    (0, common_1.Delete)('public/:publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' }),
    (0, swagger_1.ApiParam)({ name: 'publicId', description: 'PUBLIC_ID do pet' }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "softDeleteByPublicId", null);
exports.PetsController = PetsController = __decorate([
    (0, swagger_1.ApiTags)('pets'),
    (0, common_1.Controller)('pets'),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsController);
//# sourceMappingURL=pets.controller.js.map