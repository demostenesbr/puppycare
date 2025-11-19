import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PetsModel = runtime.Types.Result.DefaultSelection<Prisma.$PetsPayload>;
export type AggregatePets = {
    _count: PetsCountAggregateOutputType | null;
    _min: PetsMinAggregateOutputType | null;
    _max: PetsMaxAggregateOutputType | null;
};
export type PetsMinAggregateOutputType = {
    id: string | null;
    cliente_id: string | null;
    nome: string | null;
    especie: string | null;
    raca: string | null;
    porte: string | null;
    nascimento: Date | null;
    observacoes: string | null;
};
export type PetsMaxAggregateOutputType = {
    id: string | null;
    cliente_id: string | null;
    nome: string | null;
    especie: string | null;
    raca: string | null;
    porte: string | null;
    nascimento: Date | null;
    observacoes: string | null;
};
export type PetsCountAggregateOutputType = {
    id: number;
    cliente_id: number;
    nome: number;
    especie: number;
    raca: number;
    porte: number;
    nascimento: number;
    observacoes: number;
    _all: number;
};
export type PetsMinAggregateInputType = {
    id?: true;
    cliente_id?: true;
    nome?: true;
    especie?: true;
    raca?: true;
    porte?: true;
    nascimento?: true;
    observacoes?: true;
};
export type PetsMaxAggregateInputType = {
    id?: true;
    cliente_id?: true;
    nome?: true;
    especie?: true;
    raca?: true;
    porte?: true;
    nascimento?: true;
    observacoes?: true;
};
export type PetsCountAggregateInputType = {
    id?: true;
    cliente_id?: true;
    nome?: true;
    especie?: true;
    raca?: true;
    porte?: true;
    nascimento?: true;
    observacoes?: true;
    _all?: true;
};
export type PetsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetsWhereInput;
    orderBy?: Prisma.PetsOrderByWithRelationInput | Prisma.PetsOrderByWithRelationInput[];
    cursor?: Prisma.PetsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PetsCountAggregateInputType;
    _min?: PetsMinAggregateInputType;
    _max?: PetsMaxAggregateInputType;
};
export type GetPetsAggregateType<T extends PetsAggregateArgs> = {
    [P in keyof T & keyof AggregatePets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePets[P]> : Prisma.GetScalarType<T[P], AggregatePets[P]>;
};
export type PetsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetsWhereInput;
    orderBy?: Prisma.PetsOrderByWithAggregationInput | Prisma.PetsOrderByWithAggregationInput[];
    by: Prisma.PetsScalarFieldEnum[] | Prisma.PetsScalarFieldEnum;
    having?: Prisma.PetsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PetsCountAggregateInputType | true;
    _min?: PetsMinAggregateInputType;
    _max?: PetsMaxAggregateInputType;
};
export type PetsGroupByOutputType = {
    id: string;
    cliente_id: string;
    nome: string;
    especie: string;
    raca: string | null;
    porte: string | null;
    nascimento: Date | null;
    observacoes: string | null;
    _count: PetsCountAggregateOutputType | null;
    _min: PetsMinAggregateOutputType | null;
    _max: PetsMaxAggregateOutputType | null;
};
type GetPetsGroupByPayload<T extends PetsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PetsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PetsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PetsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PetsGroupByOutputType[P]>;
}>>;
export type PetsWhereInput = {
    AND?: Prisma.PetsWhereInput | Prisma.PetsWhereInput[];
    OR?: Prisma.PetsWhereInput[];
    NOT?: Prisma.PetsWhereInput | Prisma.PetsWhereInput[];
    id?: Prisma.StringFilter<"Pets"> | string;
    cliente_id?: Prisma.StringFilter<"Pets"> | string;
    nome?: Prisma.StringFilter<"Pets"> | string;
    especie?: Prisma.StringFilter<"Pets"> | string;
    raca?: Prisma.StringNullableFilter<"Pets"> | string | null;
    porte?: Prisma.StringNullableFilter<"Pets"> | string | null;
    nascimento?: Prisma.DateTimeNullableFilter<"Pets"> | Date | string | null;
    observacoes?: Prisma.StringNullableFilter<"Pets"> | string | null;
    cliente?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
    ordens?: Prisma.OrdensServicosListRelationFilter;
};
export type PetsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raca?: Prisma.SortOrderInput | Prisma.SortOrder;
    porte?: Prisma.SortOrderInput | Prisma.SortOrder;
    nascimento?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacoes?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.ClientesOrderByWithRelationInput;
    ordens?: Prisma.OrdensServicosOrderByRelationAggregateInput;
};
export type PetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PetsWhereInput | Prisma.PetsWhereInput[];
    OR?: Prisma.PetsWhereInput[];
    NOT?: Prisma.PetsWhereInput | Prisma.PetsWhereInput[];
    cliente_id?: Prisma.StringFilter<"Pets"> | string;
    nome?: Prisma.StringFilter<"Pets"> | string;
    especie?: Prisma.StringFilter<"Pets"> | string;
    raca?: Prisma.StringNullableFilter<"Pets"> | string | null;
    porte?: Prisma.StringNullableFilter<"Pets"> | string | null;
    nascimento?: Prisma.DateTimeNullableFilter<"Pets"> | Date | string | null;
    observacoes?: Prisma.StringNullableFilter<"Pets"> | string | null;
    cliente?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
    ordens?: Prisma.OrdensServicosListRelationFilter;
}, "id">;
export type PetsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raca?: Prisma.SortOrderInput | Prisma.SortOrder;
    porte?: Prisma.SortOrderInput | Prisma.SortOrder;
    nascimento?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacoes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PetsCountOrderByAggregateInput;
    _max?: Prisma.PetsMaxOrderByAggregateInput;
    _min?: Prisma.PetsMinOrderByAggregateInput;
};
export type PetsScalarWhereWithAggregatesInput = {
    AND?: Prisma.PetsScalarWhereWithAggregatesInput | Prisma.PetsScalarWhereWithAggregatesInput[];
    OR?: Prisma.PetsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PetsScalarWhereWithAggregatesInput | Prisma.PetsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Pets"> | string;
    cliente_id?: Prisma.StringWithAggregatesFilter<"Pets"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Pets"> | string;
    especie?: Prisma.StringWithAggregatesFilter<"Pets"> | string;
    raca?: Prisma.StringNullableWithAggregatesFilter<"Pets"> | string | null;
    porte?: Prisma.StringNullableWithAggregatesFilter<"Pets"> | string | null;
    nascimento?: Prisma.DateTimeNullableWithAggregatesFilter<"Pets"> | Date | string | null;
    observacoes?: Prisma.StringNullableWithAggregatesFilter<"Pets"> | string | null;
};
export type PetsCreateInput = {
    id?: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
    cliente: Prisma.ClientesCreateNestedOneWithoutPetsInput;
    ordens?: Prisma.OrdensServicosCreateNestedManyWithoutPetInput;
};
export type PetsUncheckedCreateInput = {
    id?: string;
    cliente_id: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
    ordens?: Prisma.OrdensServicosUncheckedCreateNestedManyWithoutPetInput;
};
export type PetsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.ClientesUpdateOneRequiredWithoutPetsNestedInput;
    ordens?: Prisma.OrdensServicosUpdateManyWithoutPetNestedInput;
};
export type PetsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordens?: Prisma.OrdensServicosUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetsCreateManyInput = {
    id?: string;
    cliente_id: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
};
export type PetsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PetsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PetsListRelationFilter = {
    every?: Prisma.PetsWhereInput;
    some?: Prisma.PetsWhereInput;
    none?: Prisma.PetsWhereInput;
};
export type PetsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PetsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raca?: Prisma.SortOrder;
    porte?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type PetsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raca?: Prisma.SortOrder;
    porte?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type PetsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raca?: Prisma.SortOrder;
    porte?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type PetsScalarRelationFilter = {
    is?: Prisma.PetsWhereInput;
    isNot?: Prisma.PetsWhereInput;
};
export type PetsCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.PetsCreateWithoutClienteInput, Prisma.PetsUncheckedCreateWithoutClienteInput> | Prisma.PetsCreateWithoutClienteInput[] | Prisma.PetsUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PetsCreateOrConnectWithoutClienteInput | Prisma.PetsCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.PetsCreateManyClienteInputEnvelope;
    connect?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
};
export type PetsUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.PetsCreateWithoutClienteInput, Prisma.PetsUncheckedCreateWithoutClienteInput> | Prisma.PetsCreateWithoutClienteInput[] | Prisma.PetsUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PetsCreateOrConnectWithoutClienteInput | Prisma.PetsCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.PetsCreateManyClienteInputEnvelope;
    connect?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
};
export type PetsUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.PetsCreateWithoutClienteInput, Prisma.PetsUncheckedCreateWithoutClienteInput> | Prisma.PetsCreateWithoutClienteInput[] | Prisma.PetsUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PetsCreateOrConnectWithoutClienteInput | Prisma.PetsCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.PetsUpsertWithWhereUniqueWithoutClienteInput | Prisma.PetsUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.PetsCreateManyClienteInputEnvelope;
    set?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    disconnect?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    delete?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    connect?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    update?: Prisma.PetsUpdateWithWhereUniqueWithoutClienteInput | Prisma.PetsUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.PetsUpdateManyWithWhereWithoutClienteInput | Prisma.PetsUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.PetsScalarWhereInput | Prisma.PetsScalarWhereInput[];
};
export type PetsUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.PetsCreateWithoutClienteInput, Prisma.PetsUncheckedCreateWithoutClienteInput> | Prisma.PetsCreateWithoutClienteInput[] | Prisma.PetsUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PetsCreateOrConnectWithoutClienteInput | Prisma.PetsCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.PetsUpsertWithWhereUniqueWithoutClienteInput | Prisma.PetsUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.PetsCreateManyClienteInputEnvelope;
    set?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    disconnect?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    delete?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    connect?: Prisma.PetsWhereUniqueInput | Prisma.PetsWhereUniqueInput[];
    update?: Prisma.PetsUpdateWithWhereUniqueWithoutClienteInput | Prisma.PetsUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.PetsUpdateManyWithWhereWithoutClienteInput | Prisma.PetsUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.PetsScalarWhereInput | Prisma.PetsScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type PetsCreateNestedOneWithoutOrdensInput = {
    create?: Prisma.XOR<Prisma.PetsCreateWithoutOrdensInput, Prisma.PetsUncheckedCreateWithoutOrdensInput>;
    connectOrCreate?: Prisma.PetsCreateOrConnectWithoutOrdensInput;
    connect?: Prisma.PetsWhereUniqueInput;
};
export type PetsUpdateOneRequiredWithoutOrdensNestedInput = {
    create?: Prisma.XOR<Prisma.PetsCreateWithoutOrdensInput, Prisma.PetsUncheckedCreateWithoutOrdensInput>;
    connectOrCreate?: Prisma.PetsCreateOrConnectWithoutOrdensInput;
    upsert?: Prisma.PetsUpsertWithoutOrdensInput;
    connect?: Prisma.PetsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetsUpdateToOneWithWhereWithoutOrdensInput, Prisma.PetsUpdateWithoutOrdensInput>, Prisma.PetsUncheckedUpdateWithoutOrdensInput>;
};
export type PetsCreateWithoutClienteInput = {
    id?: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
    ordens?: Prisma.OrdensServicosCreateNestedManyWithoutPetInput;
};
export type PetsUncheckedCreateWithoutClienteInput = {
    id?: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
    ordens?: Prisma.OrdensServicosUncheckedCreateNestedManyWithoutPetInput;
};
export type PetsCreateOrConnectWithoutClienteInput = {
    where: Prisma.PetsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetsCreateWithoutClienteInput, Prisma.PetsUncheckedCreateWithoutClienteInput>;
};
export type PetsCreateManyClienteInputEnvelope = {
    data: Prisma.PetsCreateManyClienteInput | Prisma.PetsCreateManyClienteInput[];
};
export type PetsUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.PetsWhereUniqueInput;
    update: Prisma.XOR<Prisma.PetsUpdateWithoutClienteInput, Prisma.PetsUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.PetsCreateWithoutClienteInput, Prisma.PetsUncheckedCreateWithoutClienteInput>;
};
export type PetsUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.PetsWhereUniqueInput;
    data: Prisma.XOR<Prisma.PetsUpdateWithoutClienteInput, Prisma.PetsUncheckedUpdateWithoutClienteInput>;
};
export type PetsUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.PetsScalarWhereInput;
    data: Prisma.XOR<Prisma.PetsUpdateManyMutationInput, Prisma.PetsUncheckedUpdateManyWithoutClienteInput>;
};
export type PetsScalarWhereInput = {
    AND?: Prisma.PetsScalarWhereInput | Prisma.PetsScalarWhereInput[];
    OR?: Prisma.PetsScalarWhereInput[];
    NOT?: Prisma.PetsScalarWhereInput | Prisma.PetsScalarWhereInput[];
    id?: Prisma.StringFilter<"Pets"> | string;
    cliente_id?: Prisma.StringFilter<"Pets"> | string;
    nome?: Prisma.StringFilter<"Pets"> | string;
    especie?: Prisma.StringFilter<"Pets"> | string;
    raca?: Prisma.StringNullableFilter<"Pets"> | string | null;
    porte?: Prisma.StringNullableFilter<"Pets"> | string | null;
    nascimento?: Prisma.DateTimeNullableFilter<"Pets"> | Date | string | null;
    observacoes?: Prisma.StringNullableFilter<"Pets"> | string | null;
};
export type PetsCreateWithoutOrdensInput = {
    id?: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
    cliente: Prisma.ClientesCreateNestedOneWithoutPetsInput;
};
export type PetsUncheckedCreateWithoutOrdensInput = {
    id?: string;
    cliente_id: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
};
export type PetsCreateOrConnectWithoutOrdensInput = {
    where: Prisma.PetsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetsCreateWithoutOrdensInput, Prisma.PetsUncheckedCreateWithoutOrdensInput>;
};
export type PetsUpsertWithoutOrdensInput = {
    update: Prisma.XOR<Prisma.PetsUpdateWithoutOrdensInput, Prisma.PetsUncheckedUpdateWithoutOrdensInput>;
    create: Prisma.XOR<Prisma.PetsCreateWithoutOrdensInput, Prisma.PetsUncheckedCreateWithoutOrdensInput>;
    where?: Prisma.PetsWhereInput;
};
export type PetsUpdateToOneWithWhereWithoutOrdensInput = {
    where?: Prisma.PetsWhereInput;
    data: Prisma.XOR<Prisma.PetsUpdateWithoutOrdensInput, Prisma.PetsUncheckedUpdateWithoutOrdensInput>;
};
export type PetsUpdateWithoutOrdensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.ClientesUpdateOneRequiredWithoutPetsNestedInput;
};
export type PetsUncheckedUpdateWithoutOrdensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PetsCreateManyClienteInput = {
    id?: string;
    nome: string;
    especie: string;
    raca?: string | null;
    porte?: string | null;
    nascimento?: Date | string | null;
    observacoes?: string | null;
};
export type PetsUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordens?: Prisma.OrdensServicosUpdateManyWithoutPetNestedInput;
};
export type PetsUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordens?: Prisma.OrdensServicosUncheckedUpdateManyWithoutPetNestedInput;
};
export type PetsUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.StringFieldUpdateOperationsInput | string;
    raca?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nascimento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PetsCountOutputType = {
    ordens: number;
};
export type PetsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordens?: boolean | PetsCountOutputTypeCountOrdensArgs;
};
export type PetsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsCountOutputTypeSelect<ExtArgs> | null;
};
export type PetsCountOutputTypeCountOrdensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdensServicosWhereInput;
};
export type PetsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    nome?: boolean;
    especie?: boolean;
    raca?: boolean;
    porte?: boolean;
    nascimento?: boolean;
    observacoes?: boolean;
    cliente?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    ordens?: boolean | Prisma.Pets$ordensArgs<ExtArgs>;
    _count?: boolean | Prisma.PetsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pets"]>;
export type PetsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    nome?: boolean;
    especie?: boolean;
    raca?: boolean;
    porte?: boolean;
    nascimento?: boolean;
    observacoes?: boolean;
    cliente?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pets"]>;
export type PetsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    nome?: boolean;
    especie?: boolean;
    raca?: boolean;
    porte?: boolean;
    nascimento?: boolean;
    observacoes?: boolean;
    cliente?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pets"]>;
export type PetsSelectScalar = {
    id?: boolean;
    cliente_id?: boolean;
    nome?: boolean;
    especie?: boolean;
    raca?: boolean;
    porte?: boolean;
    nascimento?: boolean;
    observacoes?: boolean;
};
export type PetsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cliente_id" | "nome" | "especie" | "raca" | "porte" | "nascimento" | "observacoes", ExtArgs["result"]["pets"]>;
export type PetsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    ordens?: boolean | Prisma.Pets$ordensArgs<ExtArgs>;
    _count?: boolean | Prisma.PetsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PetsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
};
export type PetsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
};
export type $PetsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pets";
    objects: {
        cliente: Prisma.$ClientesPayload<ExtArgs>;
        ordens: Prisma.$OrdensServicosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cliente_id: string;
        nome: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
    }, ExtArgs["result"]["pets"]>;
    composites: {};
};
export type PetsGetPayload<S extends boolean | null | undefined | PetsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PetsPayload, S>;
export type PetsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PetsCountAggregateInputType | true;
};
export interface PetsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pets'];
        meta: {
            name: 'Pets';
        };
    };
    findUnique<T extends PetsFindUniqueArgs>(args: Prisma.SelectSubset<T, PetsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PetsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PetsFindFirstArgs>(args?: Prisma.SelectSubset<T, PetsFindFirstArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PetsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PetsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PetsFindManyArgs>(args?: Prisma.SelectSubset<T, PetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PetsCreateArgs>(args: Prisma.SelectSubset<T, PetsCreateArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PetsCreateManyArgs>(args?: Prisma.SelectSubset<T, PetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PetsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PetsDeleteArgs>(args: Prisma.SelectSubset<T, PetsDeleteArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PetsUpdateArgs>(args: Prisma.SelectSubset<T, PetsUpdateArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PetsDeleteManyArgs>(args?: Prisma.SelectSubset<T, PetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PetsUpdateManyArgs>(args: Prisma.SelectSubset<T, PetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PetsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PetsUpsertArgs>(args: Prisma.SelectSubset<T, PetsUpsertArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PetsCountArgs>(args?: Prisma.Subset<T, PetsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PetsCountAggregateOutputType> : number>;
    aggregate<T extends PetsAggregateArgs>(args: Prisma.Subset<T, PetsAggregateArgs>): Prisma.PrismaPromise<GetPetsAggregateType<T>>;
    groupBy<T extends PetsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PetsGroupByArgs['orderBy'];
    } : {
        orderBy?: PetsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PetsFieldRefs;
}
export interface Prisma__PetsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientesDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ordens<T extends Prisma.Pets$ordensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pets$ordensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PetsFieldRefs {
    readonly id: Prisma.FieldRef<"Pets", 'String'>;
    readonly cliente_id: Prisma.FieldRef<"Pets", 'String'>;
    readonly nome: Prisma.FieldRef<"Pets", 'String'>;
    readonly especie: Prisma.FieldRef<"Pets", 'String'>;
    readonly raca: Prisma.FieldRef<"Pets", 'String'>;
    readonly porte: Prisma.FieldRef<"Pets", 'String'>;
    readonly nascimento: Prisma.FieldRef<"Pets", 'DateTime'>;
    readonly observacoes: Prisma.FieldRef<"Pets", 'String'>;
}
export type PetsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    where: Prisma.PetsWhereUniqueInput;
};
export type PetsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    where: Prisma.PetsWhereUniqueInput;
};
export type PetsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PetsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PetsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PetsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetsCreateInput, Prisma.PetsUncheckedCreateInput>;
};
export type PetsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PetsCreateManyInput | Prisma.PetsCreateManyInput[];
};
export type PetsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    data: Prisma.PetsCreateManyInput | Prisma.PetsCreateManyInput[];
    include?: Prisma.PetsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PetsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetsUpdateInput, Prisma.PetsUncheckedUpdateInput>;
    where: Prisma.PetsWhereUniqueInput;
};
export type PetsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PetsUpdateManyMutationInput, Prisma.PetsUncheckedUpdateManyInput>;
    where?: Prisma.PetsWhereInput;
    limit?: number;
};
export type PetsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetsUpdateManyMutationInput, Prisma.PetsUncheckedUpdateManyInput>;
    where?: Prisma.PetsWhereInput;
    limit?: number;
    include?: Prisma.PetsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PetsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    where: Prisma.PetsWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetsCreateInput, Prisma.PetsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PetsUpdateInput, Prisma.PetsUncheckedUpdateInput>;
};
export type PetsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
    where: Prisma.PetsWhereUniqueInput;
};
export type PetsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetsWhereInput;
    limit?: number;
};
export type Pets$ordensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PetsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetsSelect<ExtArgs> | null;
    omit?: Prisma.PetsOmit<ExtArgs> | null;
    include?: Prisma.PetsInclude<ExtArgs> | null;
};
export {};
