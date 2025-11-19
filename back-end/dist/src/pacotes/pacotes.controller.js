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
exports.PacotesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pacotes_service_1 = require("./pacotes.service");
const create_pacote_dto_1 = require("./dto/create-pacote.dto");
const update_pacote_dto_1 = require("./dto/update-pacote.dto");
const pacote_sync_dto_1 = require("./dto/pacote-sync.dto");
let PacotesController = class PacotesController {
    pacotesService;
    constructor(pacotesService) {
        this.pacotesService = pacotesService;
    }
    create(createPacoteDto) {
        return this.pacotesService.create(createPacoteDto);
    }
    findAll() {
        return this.pacotesService.findAll();
    }
    findOne(id) {
        return this.pacotesService.findOne(id);
    }
    update(id, updatePacoteDto) {
        return this.pacotesService.update(id, updatePacoteDto);
    }
    remove(id) {
        return this.pacotesService.remove(id);
    }
    getChanges(since) {
        return this.pacotesService.getChanges(since);
    }
    batch(body) {
        return this.pacotesService.batchUpsert(body);
    }
    softDeleteByPublicId(publicId) {
        return this.pacotesService.softDeleteByPublicId(publicId);
    }
};
exports.PacotesController = PacotesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo pacote' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pacote criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pacote_dto_1.CreatePacoteDto]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os pacotes' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de pacotes retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um pacote por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do pacote' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pacote encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pacote não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um pacote' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do pacote' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pacote atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pacote não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pacote_dto_1.UpdatePacoteDto]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um pacote' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do pacote' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pacote removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pacote não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('changes'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar alterações de pacotes desde um timestamp' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mudanças retornadas com sucesso.' }),
    __param(0, (0, common_1.Query)('since')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "getChanges", null);
__decorate([
    (0, common_1.Post)('batch'),
    (0, swagger_1.ApiOperation)({ summary: 'Aplicar lote de alterações de pacotes (upsert por PUBLIC_ID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Resultados do processamento do lote.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pacote_sync_dto_1.PacoteSyncBatchRequestDto]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "batch", null);
__decorate([
    (0, common_1.Delete)('public/:publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' }),
    (0, swagger_1.ApiParam)({ name: 'publicId', description: 'PUBLIC_ID do pacote' }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PacotesController.prototype, "softDeleteByPublicId", null);
exports.PacotesController = PacotesController = __decorate([
    (0, swagger_1.ApiTags)('pacotes'),
    (0, common_1.Controller)('pacotes'),
    __metadata("design:paramtypes", [pacotes_service_1.PacotesService])
], PacotesController);
//# sourceMappingURL=pacotes.controller.js.map