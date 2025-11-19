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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usuarios_service_1 = require("./usuarios.service");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const usuario_sync_dto_1 = require("./dto/usuario-sync.dto");
let UsuariosController = class UsuariosController {
    usuariosService;
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    create(createUsuarioDto) {
        return this.usuariosService.create(createUsuarioDto);
    }
    findAll() {
        return this.usuariosService.findAll();
    }
    findOne(id) {
        return this.usuariosService.findOne(id);
    }
    getChanges(since) {
        return this.usuariosService.getChanges(since);
    }
    batch(body) {
        return this.usuariosService.batchUpsert(body);
    }
    update(id, updateUsuarioDto) {
        return this.usuariosService.update(id, updateUsuarioDto);
    }
    remove(id) {
        return this.usuariosService.remove(id);
    }
    softDeleteByPublicId(publicId) {
        return this.usuariosService.softDeleteByPublicId(publicId);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo usuário' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuário criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de usuários retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um usuário por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do usuário' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('changes'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar alterações de usuários desde um timestamp' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mudanças retornadas com sucesso.' }),
    __param(0, (0, common_1.Query)('since')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "getChanges", null);
__decorate([
    (0, common_1.Post)('batch'),
    (0, swagger_1.ApiOperation)({ summary: 'Aplicar lote de alterações de usuários (upsert por PUBLIC_ID)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Resultados do processamento do lote.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_sync_dto_1.UsuarioSyncBatchRequestDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "batch", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um usuário' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do usuário' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_usuario_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um usuário' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do usuário' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('public/:publicId'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' }),
    (0, swagger_1.ApiParam)({ name: 'publicId', description: 'PUBLIC_ID do usuário' }),
    __param(0, (0, common_1.Param)('publicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "softDeleteByPublicId", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, swagger_1.ApiTags)('usuarios'),
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map