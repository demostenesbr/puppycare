"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.SortOrder = exports.StatusScalarFieldEnum = exports.FuncionariosScalarFieldEnum = exports.MensagensScalarFieldEnum = exports.RotasParadasScalarFieldEnum = exports.RotasScalarFieldEnum = exports.OrdensServicosScalarFieldEnum = exports.PetsScalarFieldEnum = exports.ClientesScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    Clientes: 'Clientes',
    Pets: 'Pets',
    OrdensServicos: 'OrdensServicos',
    Rotas: 'Rotas',
    RotasParadas: 'RotasParadas',
    Mensagens: 'Mensagens',
    Funcionarios: 'Funcionarios',
    Status: 'Status'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    Serializable: 'Serializable'
});
exports.ClientesScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    cpf: 'cpf',
    endereco_logradouro: 'endereco_logradouro',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    uf: 'uf',
    cep: 'cep',
    latitude: 'latitude',
    longitude: 'longitude',
    whatsapp_opt_in: 'whatsapp_opt_in',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PetsScalarFieldEnum = {
    id: 'id',
    cliente_id: 'cliente_id',
    nome: 'nome',
    especie: 'especie',
    raca: 'raca',
    porte: 'porte',
    nascimento: 'nascimento',
    observacoes: 'observacoes'
};
exports.OrdensServicosScalarFieldEnum = {
    id: 'id',
    cliente_id: 'cliente_id',
    pet_id: 'pet_id',
    tipo: 'tipo',
    status: 'status',
    data_agendada: 'data_agendada',
    preco: 'preco',
    observacoes: 'observacoes'
};
exports.RotasScalarFieldEnum = {
    id: 'id',
    data: 'data',
    tipo: 'tipo',
    status: 'status',
    motorista: 'motorista',
    kilometragem_prevista: 'kilometragem_prevista',
    tempo_previsto: 'tempo_previsto'
};
exports.RotasParadasScalarFieldEnum = {
    id: 'id',
    rota_id: 'rota_id',
    ordem_id: 'ordem_id',
    sequencia: 'sequencia',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status'
};
exports.MensagensScalarFieldEnum = {
    id: 'id',
    cliente_id: 'cliente_id',
    canal: 'canal',
    template: 'template',
    conteudo: 'conteudo',
    status: 'status',
    meta_message_id: 'meta_message_id',
    erro: 'erro',
    createdAt: 'createdAt'
};
exports.FuncionariosScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    cargo: 'cargo',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StatusScalarFieldEnum = {
    id: 'id',
    ordem_id: 'ordem_id',
    status: 'status',
    timestamp: 'timestamp'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map