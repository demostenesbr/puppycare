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
exports.ServicosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const servicos_service_1 = require("./servicos.service");
const create_servico_dto_1 = require("./dto/create-servico.dto");
const update_servico_dto_1 = require("./dto/update-servico.dto");
const servico_sync_dto_1 = require("./dto/servico-sync.dto");
let ServicosController = class ServicosController {
    servicosService;
    constructor(servicosService) {
        this.servicosService = servicosService;
    }
    create(createServicoDto) {
        return this.servicosService.create(createServicoDto);
    }
    findAll() {
        return this.servicosService.findAll();
    }
    findOne(id) {
        return this.servicosService.findOne(id);
    }
    update(id, updateServicoDto) {
        return this.servicosService.update(id, updateServicoDto);
    }
    remove(id) {
        return this.servicosService.remove(id);
    }
    getChanges(since) {
        return this.servicosService.getChanges(since);
    }
    batch(body) {
        return this.servicosService.batchUpsert(body);
    }
    softDeleteByPublicId(publicId) {
        return this.servicosService.softDeleteByPublicId(publicId);
    }
};
exports.ServicosController = ServicosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo serviço' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Serviço criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servico_dto_1.CreateServicoDto]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os serviços' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de serviços retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um serviço por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serviço encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um serviço' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serviço atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_servico_dto_1.UpdateServicoDto]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um serviço' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Serviço removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Serviço não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('changes'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar alterações de serviços desde um timestamp' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mudanças retornadas com sucesso.' }),
    __param(0, (0, common_1.Query)('since')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "getChanges", null);
__decorate([
    (0, common_1.Post)('batch'),
    (0, swagger_1.ApiOperation)({ summary: 'Aplicar lote de alterações de serviços (upsert por PUBLIC_ID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Resultados do processamento do lote.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [servico_sync_dto_1.ServicoSyncBatchRequestDto]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "batch", null);
__decorate([
    (0, common_1.Delete)('public/:publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' }),
    (0, swagger_1.ApiParam)({ name: 'publicId', description: 'PUBLIC_ID do serviço' }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicosController.prototype, "softDeleteByPublicId", null);
exports.ServicosController = ServicosController = __decorate([
    (0, swagger_1.ApiTags)('servicos'),
    (0, common_1.Controller)('servicos'),
    __metadata("design:paramtypes", [servicos_service_1.ServicosService])
], ServicosController);
//# sourceMappingURL=servicos.controller.js.map