import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Clientes: "Clientes";
    readonly Pets: "Pets";
    readonly OrdensServicos: "OrdensServicos";
    readonly Rotas: "Rotas";
    readonly RotasParadas: "RotasParadas";
    readonly Mensagens: "Mensagens";
    readonly Funcionarios: "Funcionarios";
    readonly Status: "Status";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ClientesScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly cpf: "cpf";
    readonly endereco_logradouro: "endereco_logradouro";
    readonly numero: "numero";
    readonly bairro: "bairro";
    readonly cidade: "cidade";
    readonly uf: "uf";
    readonly cep: "cep";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly whatsapp_opt_in: "whatsapp_opt_in";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum];
export declare const PetsScalarFieldEnum: {
    readonly id: "id";
    readonly cliente_id: "cliente_id";
    readonly nome: "nome";
    readonly especie: "especie";
    readonly raca: "raca";
    readonly porte: "porte";
    readonly nascimento: "nascimento";
    readonly observacoes: "observacoes";
};
export type PetsScalarFieldEnum = (typeof PetsScalarFieldEnum)[keyof typeof PetsScalarFieldEnum];
export declare const OrdensServicosScalarFieldEnum: {
    readonly id: "id";
    readonly cliente_id: "cliente_id";
    readonly pet_id: "pet_id";
    readonly tipo: "tipo";
    readonly status: "status";
    readonly data_agendada: "data_agendada";
    readonly preco: "preco";
    readonly observacoes: "observacoes";
};
export type OrdensServicosScalarFieldEnum = (typeof OrdensServicosScalarFieldEnum)[keyof typeof OrdensServicosScalarFieldEnum];
export declare const RotasScalarFieldEnum: {
    readonly id: "id";
    readonly data: "data";
    readonly tipo: "tipo";
    readonly status: "status";
    readonly motorista: "motorista";
    readonly kilometragem_prevista: "kilometragem_prevista";
    readonly tempo_previsto: "tempo_previsto";
};
export type RotasScalarFieldEnum = (typeof RotasScalarFieldEnum)[keyof typeof RotasScalarFieldEnum];
export declare const RotasParadasScalarFieldEnum: {
    readonly id: "id";
    readonly rota_id: "rota_id";
    readonly ordem_id: "ordem_id";
    readonly sequencia: "sequencia";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly status: "status";
};
export type RotasParadasScalarFieldEnum = (typeof RotasParadasScalarFieldEnum)[keyof typeof RotasParadasScalarFieldEnum];
export declare const MensagensScalarFieldEnum: {
    readonly id: "id";
    readonly cliente_id: "cliente_id";
    readonly canal: "canal";
    readonly template: "template";
    readonly conteudo: "conteudo";
    readonly status: "status";
    readonly meta_message_id: "meta_message_id";
    readonly erro: "erro";
    readonly createdAt: "createdAt";
};
export type MensagensScalarFieldEnum = (typeof MensagensScalarFieldEnum)[keyof typeof MensagensScalarFieldEnum];
export declare const FuncionariosScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly cargo: "cargo";
    readonly ativo: "ativo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FuncionariosScalarFieldEnum = (typeof FuncionariosScalarFieldEnum)[keyof typeof FuncionariosScalarFieldEnum];
export declare const StatusScalarFieldEnum: {
    readonly id: "id";
    readonly ordem_id: "ordem_id";
    readonly status: "status";
    readonly timestamp: "timestamp";
};
export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
