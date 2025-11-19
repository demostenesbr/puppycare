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
exports.AtendimentoImagensController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const atendimento_imagens_service_1 = require("./atendimento-imagens.service");
const create_atendimento_imagem_dto_1 = require("./dto/create-atendimento-imagem.dto");
const update_atendimento_imagem_dto_1 = require("./dto/update-atendimento-imagem.dto");
const atendimento_imagem_sync_dto_1 = require("./dto/atendimento-imagem-sync.dto");
let AtendimentoImagensController = class AtendimentoImagensController {
    atendimentoImagensService;
    constructor(atendimentoImagensService) {
        this.atendimentoImagensService = atendimentoImagensService;
    }
    create(createAtendimentoImagemDto) {
        return this.atendimentoImagensService.create(createAtendimentoImagemDto);
    }
    findAll() {
        return this.atendimentoImagensService.findAll();
    }
    findOne(id) {
        return this.atendimentoImagensService.findOne(id);
    }
    update(id, updateAtendimentoImagemDto) {
        return this.atendimentoImagensService.update(id, updateAtendimentoImagemDto);
    }
    remove(id) {
        return this.atendimentoImagensService.remove(id);
    }
    getChanges(since) {
        return this.atendimentoImagensService.getChanges(since);
    }
    batch(body) {
        return this.atendimentoImagensService.batchUpsert(body);
    }
    softDeleteByPublicId(publicId) {
        return this.atendimentoImagensService.softDeleteByPublicId(publicId);
    }
};
exports.AtendimentoImagensController = AtendimentoImagensController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova imagem de atendimento' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Imagem criada com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atendimento_imagem_dto_1.CreateAtendimentoImagemDto]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as imagens de atendimentos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de imagens retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma imagem por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da imagem' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Imagem encontrada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Imagem não encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma imagem' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da imagem' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Imagem atualizada com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Imagem não encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_atendimento_imagem_dto_1.UpdateAtendimentoImagemDto]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma imagem' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da imagem' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Imagem removida com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Imagem não encontrada.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('changes'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar alterações de imagens desde um timestamp' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mudanças retornadas com sucesso.' }),
    __param(0, (0, common_1.Query)('since')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "getChanges", null);
__decorate([
    (0, common_1.Post)('batch'),
    (0, swagger_1.ApiOperation)({ summary: 'Aplicar lote de alterações de imagens (upsert por PUBLIC_ID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Resultados do processamento do lote.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atendimento_imagem_sync_dto_1.AtendimentoImagemSyncBatchRequestDto]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "batch", null);
__decorate([
    (0, common_1.Delete)('public/:publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' }),
    (0, swagger_1.ApiParam)({ name: 'publicId', description: 'PUBLIC_ID da imagem' }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtendimentoImagensController.prototype, "softDeleteByPublicId", null);
exports.AtendimentoImagensController = AtendimentoImagensController = __decorate([
    (0, swagger_1.ApiTags)('atendimento-imagens'),
    (0, common_1.Controller)('atendimento-imagens'),
    __metadata("design:paramtypes", [atendimento_imagens_service_1.AtendimentoImagensService])
], AtendimentoImagensController);
//# sourceMappingURL=atendimento-imagens.controller.js.map