import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClientesModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientesPayload>;
export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null;
    _avg: ClientesAvgAggregateOutputType | null;
    _sum: ClientesSumAggregateOutputType | null;
    _min: ClientesMinAggregateOutputType | null;
    _max: ClientesMaxAggregateOutputType | null;
};
export type ClientesAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type ClientesSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type ClientesMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    cpf: string | null;
    endereco_logradouro: string | null;
    numero: string | null;
    bairro: string | null;
    cidade: string | null;
    uf: string | null;
    cep: string | null;
    latitude: number | null;
    longitude: number | null;
    whatsapp_opt_in: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientesMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    cpf: string | null;
    endereco_logradouro: string | null;
    numero: string | null;
    bairro: string | null;
    cidade: string | null;
    uf: string | null;
    cep: string | null;
    latitude: number | null;
    longitude: number | null;
    whatsapp_opt_in: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientesCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    telefone: number;
    cpf: number;
    endereco_logradouro: number;
    numero: number;
    bairro: number;
    cidade: number;
    uf: number;
    cep: number;
    latitude: number;
    longitude: number;
    whatsapp_opt_in: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClientesAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type ClientesSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type ClientesMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    cpf?: true;
    endereco_logradouro?: true;
    numero?: true;
    bairro?: true;
    cidade?: true;
    uf?: true;
    cep?: true;
    latitude?: true;
    longitude?: true;
    whatsapp_opt_in?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientesMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    cpf?: true;
    endereco_logradouro?: true;
    numero?: true;
    bairro?: true;
    cidade?: true;
    uf?: true;
    cep?: true;
    latitude?: true;
    longitude?: true;
    whatsapp_opt_in?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientesCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    cpf?: true;
    endereco_logradouro?: true;
    numero?: true;
    bairro?: true;
    cidade?: true;
    uf?: true;
    cep?: true;
    latitude?: true;
    longitude?: true;
    whatsapp_opt_in?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClientesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClientesCountAggregateInputType;
    _avg?: ClientesAvgAggregateInputType;
    _sum?: ClientesSumAggregateInputType;
    _min?: ClientesMinAggregateInputType;
    _max?: ClientesMaxAggregateInputType;
};
export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
    [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClientes[P]> : Prisma.GetScalarType<T[P], AggregateClientes[P]>;
};
export type ClientesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithAggregationInput | Prisma.ClientesOrderByWithAggregationInput[];
    by: Prisma.ClientesScalarFieldEnum[] | Prisma.ClientesScalarFieldEnum;
    having?: Prisma.ClientesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientesCountAggregateInputType | true;
    _avg?: ClientesAvgAggregateInputType;
    _sum?: ClientesSumAggregateInputType;
    _min?: ClientesMinAggregateInputType;
    _max?: ClientesMaxAggregateInputType;
};
export type ClientesGroupByOutputType = {
    id: string;
    nome: string;
    email: string | null;
    telefone: string;
    cpf: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude: number | null;
    longitude: number | null;
    whatsapp_opt_in: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ClientesCountAggregateOutputType | null;
    _avg: ClientesAvgAggregateOutputType | null;
    _sum: ClientesSumAggregateOutputType | null;
    _min: ClientesMinAggregateOutputType | null;
    _max: ClientesMaxAggregateOutputType | null;
};
type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientesGroupByOutputType[P]>;
}>>;
export type ClientesWhereInput = {
    AND?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    OR?: Prisma.ClientesWhereInput[];
    NOT?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    id?: Prisma.StringFilter<"Clientes"> | string;
    nome?: Prisma.StringFilter<"Clientes"> | string;
    email?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    telefone?: Prisma.StringFilter<"Clientes"> | string;
    cpf?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    endereco_logradouro?: Prisma.StringFilter<"Clientes"> | string;
    numero?: Prisma.StringFilter<"Clientes"> | string;
    bairro?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    cidade?: Prisma.StringFilter<"Clientes"> | string;
    uf?: Prisma.StringFilter<"Clientes"> | string;
    cep?: Prisma.StringFilter<"Clientes"> | string;
    latitude?: Prisma.FloatNullableFilter<"Clientes"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Clientes"> | number | null;
    whatsapp_opt_in?: Prisma.BoolFilter<"Clientes"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Clientes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clientes"> | Date | string;
    pets?: Prisma.PetsListRelationFilter;
    ordens?: Prisma.OrdensServicosListRelationFilter;
    mensagens?: Prisma.MensagensListRelationFilter;
};
export type ClientesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cpf?: Prisma.SortOrderInput | Prisma.SortOrder;
    endereco_logradouro?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    bairro?: Prisma.SortOrderInput | Prisma.SortOrder;
    cidade?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    whatsapp_opt_in?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pets?: Prisma.PetsOrderByRelationAggregateInput;
    ordens?: Prisma.OrdensServicosOrderByRelationAggregateInput;
    mensagens?: Prisma.MensagensOrderByRelationAggregateInput;
};
export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    cpf?: string;
    AND?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    OR?: Prisma.ClientesWhereInput[];
    NOT?: Prisma.ClientesWhereInput | Prisma.ClientesWhereInput[];
    nome?: Prisma.StringFilter<"Clientes"> | string;
    telefone?: Prisma.StringFilter<"Clientes"> | string;
    endereco_logradouro?: Prisma.StringFilter<"Clientes"> | string;
    numero?: Prisma.StringFilter<"Clientes"> | string;
    bairro?: Prisma.StringNullableFilter<"Clientes"> | string | null;
    cidade?: Prisma.StringFilter<"Clientes"> | string;
    uf?: Prisma.StringFilter<"Clientes"> | string;
    cep?: Prisma.StringFilter<"Clientes"> | string;
    latitude?: Prisma.FloatNullableFilter<"Clientes"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Clientes"> | number | null;
    whatsapp_opt_in?: Prisma.BoolFilter<"Clientes"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Clientes"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Clientes"> | Date | string;
    pets?: Prisma.PetsListRelationFilter;
    ordens?: Prisma.OrdensServicosListRelationFilter;
    mensagens?: Prisma.MensagensListRelationFilter;
}, "id" | "email" | "cpf">;
export type ClientesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cpf?: Prisma.SortOrderInput | Prisma.SortOrder;
    endereco_logradouro?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    bairro?: Prisma.SortOrderInput | Prisma.SortOrder;
    cidade?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    whatsapp_opt_in?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClientesCountOrderByAggregateInput;
    _avg?: Prisma.ClientesAvgOrderByAggregateInput;
    _max?: Prisma.ClientesMaxOrderByAggregateInput;
    _min?: Prisma.ClientesMinOrderByAggregateInput;
    _sum?: Prisma.ClientesSumOrderByAggregateInput;
};
export type ClientesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientesScalarWhereWithAggregatesInput | Prisma.ClientesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientesScalarWhereWithAggregatesInput | Prisma.ClientesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Clientes"> | string | null;
    telefone?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    cpf?: Prisma.StringNullableWithAggregatesFilter<"Clientes"> | string | null;
    endereco_logradouro?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    bairro?: Prisma.StringNullableWithAggregatesFilter<"Clientes"> | string | null;
    cidade?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    uf?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    cep?: Prisma.StringWithAggregatesFilter<"Clientes"> | string;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"Clientes"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"Clientes"> | number | null;
    whatsapp_opt_in?: Prisma.BoolWithAggregatesFilter<"Clientes"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Clientes"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Clientes"> | Date | string;
};
export type ClientesCreateInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pets?: Prisma.PetsCreateNestedManyWithoutClienteInput;
    ordens?: Prisma.OrdensServicosCreateNestedManyWithoutClientesInput;
    mensagens?: Prisma.MensagensCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pets?: Prisma.PetsUncheckedCreateNestedManyWithoutClienteInput;
    ordens?: Prisma.OrdensServicosUncheckedCreateNestedManyWithoutClientesInput;
    mensagens?: Prisma.MensagensUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pets?: Prisma.PetsUpdateManyWithoutClienteNestedInput;
    ordens?: Prisma.OrdensServicosUpdateManyWithoutClientesNestedInput;
    mensagens?: Prisma.MensagensUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pets?: Prisma.PetsUncheckedUpdateManyWithoutClienteNestedInput;
    ordens?: Prisma.OrdensServicosUncheckedUpdateManyWithoutClientesNestedInput;
    mensagens?: Prisma.MensagensUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCreateManyInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    endereco_logradouro?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    bairro?: Prisma.SortOrder;
    cidade?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    whatsapp_opt_in?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientesAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type ClientesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    endereco_logradouro?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    bairro?: Prisma.SortOrder;
    cidade?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    whatsapp_opt_in?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    endereco_logradouro?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    bairro?: Prisma.SortOrder;
    cidade?: Prisma.SortOrder;
    uf?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    whatsapp_opt_in?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientesSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type ClientesScalarRelationFilter = {
    is?: Prisma.ClientesWhereInput;
    isNot?: Prisma.ClientesWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClientesCreateNestedOneWithoutPetsInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutPetsInput, Prisma.ClientesUncheckedCreateWithoutPetsInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutPetsInput;
    connect?: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateOneRequiredWithoutPetsNestedInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutPetsInput, Prisma.ClientesUncheckedCreateWithoutPetsInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutPetsInput;
    upsert?: Prisma.ClientesUpsertWithoutPetsInput;
    connect?: Prisma.ClientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientesUpdateToOneWithWhereWithoutPetsInput, Prisma.ClientesUpdateWithoutPetsInput>, Prisma.ClientesUncheckedUpdateWithoutPetsInput>;
};
export type ClientesCreateNestedOneWithoutOrdensInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutOrdensInput, Prisma.ClientesUncheckedCreateWithoutOrdensInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutOrdensInput;
    connect?: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateOneRequiredWithoutOrdensNestedInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutOrdensInput, Prisma.ClientesUncheckedCreateWithoutOrdensInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutOrdensInput;
    upsert?: Prisma.ClientesUpsertWithoutOrdensInput;
    connect?: Prisma.ClientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientesUpdateToOneWithWhereWithoutOrdensInput, Prisma.ClientesUpdateWithoutOrdensInput>, Prisma.ClientesUncheckedUpdateWithoutOrdensInput>;
};
export type ClientesCreateNestedOneWithoutMensagensInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutMensagensInput, Prisma.ClientesUncheckedCreateWithoutMensagensInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutMensagensInput;
    connect?: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: Prisma.XOR<Prisma.ClientesCreateWithoutMensagensInput, Prisma.ClientesUncheckedCreateWithoutMensagensInput>;
    connectOrCreate?: Prisma.ClientesCreateOrConnectWithoutMensagensInput;
    upsert?: Prisma.ClientesUpsertWithoutMensagensInput;
    connect?: Prisma.ClientesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientesUpdateToOneWithWhereWithoutMensagensInput, Prisma.ClientesUpdateWithoutMensagensInput>, Prisma.ClientesUncheckedUpdateWithoutMensagensInput>;
};
export type ClientesCreateWithoutPetsInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ordens?: Prisma.OrdensServicosCreateNestedManyWithoutClientesInput;
    mensagens?: Prisma.MensagensCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateWithoutPetsInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ordens?: Prisma.OrdensServicosUncheckedCreateNestedManyWithoutClientesInput;
    mensagens?: Prisma.MensagensUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesCreateOrConnectWithoutPetsInput = {
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutPetsInput, Prisma.ClientesUncheckedCreateWithoutPetsInput>;
};
export type ClientesUpsertWithoutPetsInput = {
    update: Prisma.XOR<Prisma.ClientesUpdateWithoutPetsInput, Prisma.ClientesUncheckedUpdateWithoutPetsInput>;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutPetsInput, Prisma.ClientesUncheckedCreateWithoutPetsInput>;
    where?: Prisma.ClientesWhereInput;
};
export type ClientesUpdateToOneWithWhereWithoutPetsInput = {
    where?: Prisma.ClientesWhereInput;
    data: Prisma.XOR<Prisma.ClientesUpdateWithoutPetsInput, Prisma.ClientesUncheckedUpdateWithoutPetsInput>;
};
export type ClientesUpdateWithoutPetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordens?: Prisma.OrdensServicosUpdateManyWithoutClientesNestedInput;
    mensagens?: Prisma.MensagensUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateWithoutPetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordens?: Prisma.OrdensServicosUncheckedUpdateManyWithoutClientesNestedInput;
    mensagens?: Prisma.MensagensUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCreateWithoutOrdensInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pets?: Prisma.PetsCreateNestedManyWithoutClienteInput;
    mensagens?: Prisma.MensagensCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateWithoutOrdensInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pets?: Prisma.PetsUncheckedCreateNestedManyWithoutClienteInput;
    mensagens?: Prisma.MensagensUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesCreateOrConnectWithoutOrdensInput = {
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutOrdensInput, Prisma.ClientesUncheckedCreateWithoutOrdensInput>;
};
export type ClientesUpsertWithoutOrdensInput = {
    update: Prisma.XOR<Prisma.ClientesUpdateWithoutOrdensInput, Prisma.ClientesUncheckedUpdateWithoutOrdensInput>;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutOrdensInput, Prisma.ClientesUncheckedCreateWithoutOrdensInput>;
    where?: Prisma.ClientesWhereInput;
};
export type ClientesUpdateToOneWithWhereWithoutOrdensInput = {
    where?: Prisma.ClientesWhereInput;
    data: Prisma.XOR<Prisma.ClientesUpdateWithoutOrdensInput, Prisma.ClientesUncheckedUpdateWithoutOrdensInput>;
};
export type ClientesUpdateWithoutOrdensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pets?: Prisma.PetsUpdateManyWithoutClienteNestedInput;
    mensagens?: Prisma.MensagensUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateWithoutOrdensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pets?: Prisma.PetsUncheckedUpdateManyWithoutClienteNestedInput;
    mensagens?: Prisma.MensagensUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCreateWithoutMensagensInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pets?: Prisma.PetsCreateNestedManyWithoutClienteInput;
    ordens?: Prisma.OrdensServicosCreateNestedManyWithoutClientesInput;
};
export type ClientesUncheckedCreateWithoutMensagensInput = {
    id?: string;
    nome: string;
    email?: string | null;
    telefone: string;
    cpf?: string | null;
    endereco_logradouro: string;
    numero: string;
    bairro?: string | null;
    cidade: string;
    uf: string;
    cep: string;
    latitude?: number | null;
    longitude?: number | null;
    whatsapp_opt_in?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pets?: Prisma.PetsUncheckedCreateNestedManyWithoutClienteInput;
    ordens?: Prisma.OrdensServicosUncheckedCreateNestedManyWithoutClientesInput;
};
export type ClientesCreateOrConnectWithoutMensagensInput = {
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutMensagensInput, Prisma.ClientesUncheckedCreateWithoutMensagensInput>;
};
export type ClientesUpsertWithoutMensagensInput = {
    update: Prisma.XOR<Prisma.ClientesUpdateWithoutMensagensInput, Prisma.ClientesUncheckedUpdateWithoutMensagensInput>;
    create: Prisma.XOR<Prisma.ClientesCreateWithoutMensagensInput, Prisma.ClientesUncheckedCreateWithoutMensagensInput>;
    where?: Prisma.ClientesWhereInput;
};
export type ClientesUpdateToOneWithWhereWithoutMensagensInput = {
    where?: Prisma.ClientesWhereInput;
    data: Prisma.XOR<Prisma.ClientesUpdateWithoutMensagensInput, Prisma.ClientesUncheckedUpdateWithoutMensagensInput>;
};
export type ClientesUpdateWithoutMensagensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pets?: Prisma.PetsUpdateManyWithoutClienteNestedInput;
    ordens?: Prisma.OrdensServicosUpdateManyWithoutClientesNestedInput;
};
export type ClientesUncheckedUpdateWithoutMensagensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco_logradouro?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    bairro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cidade?: Prisma.StringFieldUpdateOperationsInput | string;
    uf?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    whatsapp_opt_in?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pets?: Prisma.PetsUncheckedUpdateManyWithoutClienteNestedInput;
    ordens?: Prisma.OrdensServicosUncheckedUpdateManyWithoutClientesNestedInput;
};
export type ClientesCountOutputType = {
    pets: number;
    ordens: number;
    mensagens: number;
};
export type ClientesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pets?: boolean | ClientesCountOutputTypeCountPetsArgs;
    ordens?: boolean | ClientesCountOutputTypeCountOrdensArgs;
    mensagens?: boolean | ClientesCountOutputTypeCountMensagensArgs;
};
export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesCountOutputTypeSelect<ExtArgs> | null;
};
export type ClientesCountOutputTypeCountPetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetsWhereInput;
};
export type ClientesCountOutputTypeCountOrdensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdensServicosWhereInput;
};
export type ClientesCountOutputTypeCountMensagensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MensagensWhereInput;
};
export type ClientesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cpf?: boolean;
    endereco_logradouro?: boolean;
    numero?: boolean;
    bairro?: boolean;
    cidade?: boolean;
    uf?: boolean;
    cep?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    whatsapp_opt_in?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pets?: boolean | Prisma.Clientes$petsArgs<ExtArgs>;
    ordens?: boolean | Prisma.Clientes$ordensArgs<ExtArgs>;
    mensagens?: boolean | Prisma.Clientes$mensagensArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clientes"]>;
export type ClientesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cpf?: boolean;
    endereco_logradouro?: boolean;
    numero?: boolean;
    bairro?: boolean;
    cidade?: boolean;
    uf?: boolean;
    cep?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    whatsapp_opt_in?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clientes"]>;
export type ClientesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cpf?: boolean;
    endereco_logradouro?: boolean;
    numero?: boolean;
    bairro?: boolean;
    cidade?: boolean;
    uf?: boolean;
    cep?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    whatsapp_opt_in?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clientes"]>;
export type ClientesSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cpf?: boolean;
    endereco_logradouro?: boolean;
    numero?: boolean;
    bairro?: boolean;
    cidade?: boolean;
    uf?: boolean;
    cep?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    whatsapp_opt_in?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClientesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "cpf" | "endereco_logradouro" | "numero" | "bairro" | "cidade" | "uf" | "cep" | "latitude" | "longitude" | "whatsapp_opt_in" | "createdAt" | "updatedAt", ExtArgs["result"]["clientes"]>;
export type ClientesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pets?: boolean | Prisma.Clientes$petsArgs<ExtArgs>;
    ordens?: boolean | Prisma.Clientes$ordensArgs<ExtArgs>;
    mensagens?: boolean | Prisma.Clientes$mensagensArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClientesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClientesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClientesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Clientes";
    objects: {
        pets: Prisma.$PetsPayload<ExtArgs>[];
        ordens: Prisma.$OrdensServicosPayload<ExtArgs>[];
        mensagens: Prisma.$MensagensPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        email: string | null;
        telefone: string;
        cpf: string | null;
        endereco_logradouro: string;
        numero: string;
        bairro: string | null;
        cidade: string;
        uf: string;
        cep: string;
        latitude: number | null;
        longitude: number | null;
        whatsapp_opt_in: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["clientes"]>;
    composites: {};
};
export type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientesPayload, S>;
export type ClientesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientesCountAggregateInputType | true;
};
export interface ClientesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Clientes'];
        meta: {
            name: 'Clientes';
        };
    };
    findUnique<T extends ClientesFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClientesFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClientesFindManyArgs>(args?: Prisma.SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClientesCreateArgs>(args: Prisma.SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClientesCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClientesDeleteArgs>(args: Prisma.SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClientesUpdateArgs>(args: Prisma.SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClientesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClientesUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClientesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClientesUpsertArgs>(args: Prisma.SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClientesCountArgs>(args?: Prisma.Subset<T, ClientesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientesCountAggregateOutputType> : number>;
    aggregate<T extends ClientesAggregateArgs>(args: Prisma.Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>;
    groupBy<T extends ClientesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientesGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClientesFieldRefs;
}
export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pets<T extends Prisma.Clientes$petsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clientes$petsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordens<T extends Prisma.Clientes$ordensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clientes$ordensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mensagens<T extends Prisma.Clientes$mensagensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Clientes$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClientesFieldRefs {
    readonly id: Prisma.FieldRef<"Clientes", 'String'>;
    readonly nome: Prisma.FieldRef<"Clientes", 'String'>;
    readonly email: Prisma.FieldRef<"Clientes", 'String'>;
    readonly telefone: Prisma.FieldRef<"Clientes", 'String'>;
    readonly cpf: Prisma.FieldRef<"Clientes", 'String'>;
    readonly endereco_logradouro: Prisma.FieldRef<"Clientes", 'String'>;
    readonly numero: Prisma.FieldRef<"Clientes", 'String'>;
    readonly bairro: Prisma.FieldRef<"Clientes", 'String'>;
    readonly cidade: Prisma.FieldRef<"Clientes", 'String'>;
    readonly uf: Prisma.FieldRef<"Clientes", 'String'>;
    readonly cep: Prisma.FieldRef<"Clientes", 'String'>;
    readonly latitude: Prisma.FieldRef<"Clientes", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Clientes", 'Float'>;
    readonly whatsapp_opt_in: Prisma.FieldRef<"Clientes", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Clientes", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Clientes", 'DateTime'>;
}
export type ClientesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type ClientesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type ClientesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where?: Prisma.ClientesWhereInput;
    orderBy?: Prisma.ClientesOrderByWithRelationInput | Prisma.ClientesOrderByWithRelationInput[];
    cursor?: Prisma.ClientesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientesScalarFieldEnum | Prisma.ClientesScalarFieldEnum[];
};
export type ClientesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientesCreateInput, Prisma.ClientesUncheckedCreateInput>;
};
export type ClientesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClientesCreateManyInput | Prisma.ClientesCreateManyInput[];
};
export type ClientesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    data: Prisma.ClientesCreateManyInput | Prisma.ClientesCreateManyInput[];
};
export type ClientesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientesUpdateInput, Prisma.ClientesUncheckedUpdateInput>;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClientesUpdateManyMutationInput, Prisma.ClientesUncheckedUpdateManyInput>;
    where?: Prisma.ClientesWhereInput;
    limit?: number;
};
export type ClientesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClientesUpdateManyMutationInput, Prisma.ClientesUncheckedUpdateManyInput>;
    where?: Prisma.ClientesWhereInput;
    limit?: number;
};
export type ClientesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientesCreateInput, Prisma.ClientesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClientesUpdateInput, Prisma.ClientesUncheckedUpdateInput>;
};
export type ClientesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
    where: Prisma.ClientesWhereUniqueInput;
};
export type ClientesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientesWhereInput;
    limit?: number;
};
export type Clientes$petsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    where?: Prisma.PetsWhereInput;
    orderBy?: Prisma.PetsOrderByWithRelationInput | Prisma.PetsOrderByWithRelationInput[];
    cursor?: Prisma.PetsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetsScalarFieldEnum | Prisma.PetsScalarFieldEnum[];
};
export type Clientes$ordensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    where?: Prisma.OrdensServicosWhereInput;
    orderBy?: Prisma.OrdensServicosOrderByWithRelationInput | Prisma.OrdensServicosOrderByWithRelationInput[];
    cursor?: Prisma.OrdensServicosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdensServicosScalarFieldEnum | Prisma.OrdensServicosScalarFieldEnum[];
};
export type Clientes$mensagensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    where?: Prisma.MensagensWhereInput;
    orderBy?: Prisma.MensagensOrderByWithRelationInput | Prisma.MensagensOrderByWithRelationInput[];
    cursor?: Prisma.MensagensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MensagensScalarFieldEnum | Prisma.MensagensScalarFieldEnum[];
};
export type ClientesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientesSelect<ExtArgs> | null;
    omit?: Prisma.ClientesOmit<ExtArgs> | null;
    include?: Prisma.ClientesInclude<ExtArgs> | null;
};
export {};
