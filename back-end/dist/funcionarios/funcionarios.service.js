"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const FILE_PATH = 'src/funcionarios/funcionarios.json';
let FuncionariosService = class FuncionariosService {
    funcionarios = this.loadFuncionarios();
    loadFuncionarios() {
        const fs = require('fs');
        try {
            if (fs.existsSync(FILE_PATH)) {
                const data = fs.readFileSync(FILE_PATH, 'utf-8');
                console.log('LIDO DO JSON:', data);
                return JSON.parse(data);
            }
        }
        catch (e) {
            console.error('Erro ao ler o arquivo de funcionarios:', e);
        }
        return [];
    }
    saveFuncionarios() {
        const fs = require('fs');
        fs.writeFileSync(FILE_PATH, JSON.stringify(this.funcionarios, null, 2), 'utf-8');
    }
    findAll() {
        return this.funcionarios;
    }
    updateFuncionario(id, data) {
        const index = this.funcionarios.findIndex(f => f.id === id);
        if (index === -1)
            return null;
        this.funcionarios[index] = {
            ...this.funcionarios[index],
            ...data,
        };
        this.saveFuncionarios();
        return this.funcionarios[index];
    }
};
exports.FuncionariosService = FuncionariosService;
exports.FuncionariosService = FuncionariosService = __decorate([
    (0, common_1.Injectable)()
], FuncionariosService);
//# sourceMappingURL=funcionarios.service.js.map