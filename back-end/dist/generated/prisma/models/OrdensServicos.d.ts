import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrdensServicosModel = runtime.Types.Result.DefaultSelection<Prisma.$OrdensServicosPayload>;
export type AggregateOrdensServicos = {
    _count: OrdensServicosCountAggregateOutputType | null;
    _avg: OrdensServicosAvgAggregateOutputType | null;
    _sum: OrdensServicosSumAggregateOutputType | null;
    _min: OrdensServicosMinAggregateOutputType | null;
    _max: OrdensServicosMaxAggregateOutputType | null;
};
export type OrdensServicosAvgAggregateOutputType = {
    preco: runtime.Decimal | null;
};
export type OrdensServicosSumAggregateOutputType = {
    preco: runtime.Decimal | null;
};
export type OrdensServicosMinAggregateOutputType = {
    id: string | null;
    cliente_id: string | null;
    pet_id: string | null;
    tipo: string | null;
    status: string | null;
    data_agendada: Date | null;
    preco: runtime.Decimal | null;
    observacoes: string | null;
};
export type OrdensServicosMaxAggregateOutputType = {
    id: string | null;
    cliente_id: string | null;
    pet_id: string | null;
    tipo: string | null;
    status: string | null;
    data_agendada: Date | null;
    preco: runtime.Decimal | null;
    observacoes: string | null;
};
export type OrdensServicosCountAggregateOutputType = {
    id: number;
    cliente_id: number;
    pet_id: number;
    tipo: number;
    status: number;
    data_agendada: number;
    preco: number;
    observacoes: number;
    _all: number;
};
export type OrdensServicosAvgAggregateInputType = {
    preco?: true;
};
export type OrdensServicosSumAggregateInputType = {
    preco?: true;
};
export type OrdensServicosMinAggregateInputType = {
    id?: true;
    cliente_id?: true;
    pet_id?: true;
    tipo?: true;
    status?: true;
    data_agendada?: true;
    preco?: true;
    observacoes?: true;
};
export type OrdensServicosMaxAggregateInputType = {
    id?: true;
    cliente_id?: true;
    pet_id?: true;
    tipo?: true;
    status?: true;
    data_agendada?: true;
    preco?: true;
    observacoes?: true;
};
export type OrdensServicosCountAggregateInputType = {
    id?: true;
    cliente_id?: true;
    pet_id?: true;
    tipo?: true;
    status?: true;
    data_agendada?: true;
    preco?: true;
    observacoes?: true;
    _all?: true;
};
export type OrdensServicosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdensServicosWhereInput;
    orderBy?: Prisma.OrdensServicosOrderByWithRelationInput | Prisma.OrdensServicosOrderByWithRelationInput[];
    cursor?: Prisma.OrdensServicosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrdensServicosCountAggregateInputType;
    _avg?: OrdensServicosAvgAggregateInputType;
    _sum?: OrdensServicosSumAggregateInputType;
    _min?: OrdensServicosMinAggregateInputType;
    _max?: OrdensServicosMaxAggregateInputType;
};
export type GetOrdensServicosAggregateType<T extends OrdensServicosAggregateArgs> = {
    [P in keyof T & keyof AggregateOrdensServicos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrdensServicos[P]> : Prisma.GetScalarType<T[P], AggregateOrdensServicos[P]>;
};
export type OrdensServicosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdensServicosWhereInput;
    orderBy?: Prisma.OrdensServicosOrderByWithAggregationInput | Prisma.OrdensServicosOrderByWithAggregationInput[];
    by: Prisma.OrdensServicosScalarFieldEnum[] | Prisma.OrdensServicosScalarFieldEnum;
    having?: Prisma.OrdensServicosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdensServicosCountAggregateInputType | true;
    _avg?: OrdensServicosAvgAggregateInputType;
    _sum?: OrdensServicosSumAggregateInputType;
    _min?: OrdensServicosMinAggregateInputType;
    _max?: OrdensServicosMaxAggregateInputType;
};
export type OrdensServicosGroupByOutputType = {
    id: string;
    cliente_id: string;
    pet_id: string;
    tipo: string;
    status: string;
    data_agendada: Date;
    preco: runtime.Decimal | null;
    observacoes: string | null;
    _count: OrdensServicosCountAggregateOutputType | null;
    _avg: OrdensServicosAvgAggregateOutputType | null;
    _sum: OrdensServicosSumAggregateOutputType | null;
    _min: OrdensServicosMinAggregateOutputType | null;
    _max: OrdensServicosMaxAggregateOutputType | null;
};
type GetOrdensServicosGroupByPayload<T extends OrdensServicosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrdensServicosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrdensServicosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrdensServicosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrdensServicosGroupByOutputType[P]>;
}>>;
export type OrdensServicosWhereInput = {
    AND?: Prisma.OrdensServicosWhereInput | Prisma.OrdensServicosWhereInput[];
    OR?: Prisma.OrdensServicosWhereInput[];
    NOT?: Prisma.OrdensServicosWhereInput | Prisma.OrdensServicosWhereInput[];
    id?: Prisma.StringFilter<"OrdensServicos"> | string;
    cliente_id?: Prisma.StringFilter<"OrdensServicos"> | string;
    pet_id?: Prisma.StringFilter<"OrdensServicos"> | string;
    tipo?: Prisma.StringFilter<"OrdensServicos"> | string;
    status?: Prisma.StringFilter<"OrdensServicos"> | string;
    data_agendada?: Prisma.DateTimeFilter<"OrdensServicos"> | Date | string;
    preco?: Prisma.DecimalNullableFilter<"OrdensServicos"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.StringNullableFilter<"OrdensServicos"> | string | null;
    clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
    pet?: Prisma.XOR<Prisma.PetsScalarRelationFilter, Prisma.PetsWhereInput>;
    paradas?: Prisma.RotasParadasListRelationFilter;
    statuses?: Prisma.StatusListRelationFilter;
};
export type OrdensServicosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_agendada?: Prisma.SortOrder;
    preco?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacoes?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientes?: Prisma.ClientesOrderByWithRelationInput;
    pet?: Prisma.PetsOrderByWithRelationInput;
    paradas?: Prisma.RotasParadasOrderByRelationAggregateInput;
    statuses?: Prisma.StatusOrderByRelationAggregateInput;
};
export type OrdensServicosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrdensServicosWhereInput | Prisma.OrdensServicosWhereInput[];
    OR?: Prisma.OrdensServicosWhereInput[];
    NOT?: Prisma.OrdensServicosWhereInput | Prisma.OrdensServicosWhereInput[];
    cliente_id?: Prisma.StringFilter<"OrdensServicos"> | string;
    pet_id?: Prisma.StringFilter<"OrdensServicos"> | string;
    tipo?: Prisma.StringFilter<"OrdensServicos"> | string;
    status?: Prisma.StringFilter<"OrdensServicos"> | string;
    data_agendada?: Prisma.DateTimeFilter<"OrdensServicos"> | Date | string;
    preco?: Prisma.DecimalNullableFilter<"OrdensServicos"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.StringNullableFilter<"OrdensServicos"> | string | null;
    clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
    pet?: Prisma.XOR<Prisma.PetsScalarRelationFilter, Prisma.PetsWhereInput>;
    paradas?: Prisma.RotasParadasListRelationFilter;
    statuses?: Prisma.StatusListRelationFilter;
}, "id">;
export type OrdensServicosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_agendada?: Prisma.SortOrder;
    preco?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacoes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrdensServicosCountOrderByAggregateInput;
    _avg?: Prisma.OrdensServicosAvgOrderByAggregateInput;
    _max?: Prisma.OrdensServicosMaxOrderByAggregateInput;
    _min?: Prisma.OrdensServicosMinOrderByAggregateInput;
    _sum?: Prisma.OrdensServicosSumOrderByAggregateInput;
};
export type OrdensServicosScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrdensServicosScalarWhereWithAggregatesInput | Prisma.OrdensServicosScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrdensServicosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrdensServicosScalarWhereWithAggregatesInput | Prisma.OrdensServicosScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrdensServicos"> | string;
    cliente_id?: Prisma.StringWithAggregatesFilter<"OrdensServicos"> | string;
    pet_id?: Prisma.StringWithAggregatesFilter<"OrdensServicos"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"OrdensServicos"> | string;
    status?: Prisma.StringWithAggregatesFilter<"OrdensServicos"> | string;
    data_agendada?: Prisma.DateTimeWithAggregatesFilter<"OrdensServicos"> | Date | string;
    preco?: Prisma.DecimalNullableWithAggregatesFilter<"OrdensServicos"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.StringNullableWithAggregatesFilter<"OrdensServicos"> | string | null;
};
export type OrdensServicosCreateInput = {
    id?: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    clientes: Prisma.ClientesCreateNestedOneWithoutOrdensInput;
    pet: Prisma.PetsCreateNestedOneWithoutOrdensInput;
    paradas?: Prisma.RotasParadasCreateNestedManyWithoutOrdemInput;
    statuses?: Prisma.StatusCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosUncheckedCreateInput = {
    id?: string;
    cliente_id: string;
    pet_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    paradas?: Prisma.RotasParadasUncheckedCreateNestedManyWithoutOrdemInput;
    statuses?: Prisma.StatusUncheckedCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientes?: Prisma.ClientesUpdateOneRequiredWithoutOrdensNestedInput;
    pet?: Prisma.PetsUpdateOneRequiredWithoutOrdensNestedInput;
    paradas?: Prisma.RotasParadasUpdateManyWithoutOrdemNestedInput;
    statuses?: Prisma.StatusUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    pet_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paradas?: Prisma.RotasParadasUncheckedUpdateManyWithoutOrdemNestedInput;
    statuses?: Prisma.StatusUncheckedUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosCreateManyInput = {
    id?: string;
    cliente_id: string;
    pet_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
};
export type OrdensServicosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrdensServicosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    pet_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrdensServicosListRelationFilter = {
    every?: Prisma.OrdensServicosWhereInput;
    some?: Prisma.OrdensServicosWhereInput;
    none?: Prisma.OrdensServicosWhereInput;
};
export type OrdensServicosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrdensServicosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_agendada?: Prisma.SortOrder;
    preco?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type OrdensServicosAvgOrderByAggregateInput = {
    preco?: Prisma.SortOrder;
};
export type OrdensServicosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_agendada?: Prisma.SortOrder;
    preco?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type OrdensServicosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    pet_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    data_agendada?: Prisma.SortOrder;
    preco?: Prisma.SortOrder;
    observacoes?: Prisma.SortOrder;
};
export type OrdensServicosSumOrderByAggregateInput = {
    preco?: Prisma.SortOrder;
};
export type OrdensServicosScalarRelationFilter = {
    is?: Prisma.OrdensServicosWhereInput;
    isNot?: Prisma.OrdensServicosWhereInput;
};
export type OrdensServicosCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutClientesInput, Prisma.OrdensServicosUncheckedCreateWithoutClientesInput> | Prisma.OrdensServicosCreateWithoutClientesInput[] | Prisma.OrdensServicosUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutClientesInput | Prisma.OrdensServicosCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.OrdensServicosCreateManyClientesInputEnvelope;
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
};
export type OrdensServicosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutClientesInput, Prisma.OrdensServicosUncheckedCreateWithoutClientesInput> | Prisma.OrdensServicosCreateWithoutClientesInput[] | Prisma.OrdensServicosUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutClientesInput | Prisma.OrdensServicosCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.OrdensServicosCreateManyClientesInputEnvelope;
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
};
export type OrdensServicosUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutClientesInput, Prisma.OrdensServicosUncheckedCreateWithoutClientesInput> | Prisma.OrdensServicosCreateWithoutClientesInput[] | Prisma.OrdensServicosUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutClientesInput | Prisma.OrdensServicosCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.OrdensServicosUpsertWithWhereUniqueWithoutClientesInput | Prisma.OrdensServicosUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.OrdensServicosCreateManyClientesInputEnvelope;
    set?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    disconnect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    delete?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    update?: Prisma.OrdensServicosUpdateWithWhereUniqueWithoutClientesInput | Prisma.OrdensServicosUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.OrdensServicosUpdateManyWithWhereWithoutClientesInput | Prisma.OrdensServicosUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.OrdensServicosScalarWhereInput | Prisma.OrdensServicosScalarWhereInput[];
};
export type OrdensServicosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutClientesInput, Prisma.OrdensServicosUncheckedCreateWithoutClientesInput> | Prisma.OrdensServicosCreateWithoutClientesInput[] | Prisma.OrdensServicosUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutClientesInput | Prisma.OrdensServicosCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.OrdensServicosUpsertWithWhereUniqueWithoutClientesInput | Prisma.OrdensServicosUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.OrdensServicosCreateManyClientesInputEnvelope;
    set?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    disconnect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    delete?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    update?: Prisma.OrdensServicosUpdateWithWhereUniqueWithoutClientesInput | Prisma.OrdensServicosUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.OrdensServicosUpdateManyWithWhereWithoutClientesInput | Prisma.OrdensServicosUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.OrdensServicosScalarWhereInput | Prisma.OrdensServicosScalarWhereInput[];
};
export type OrdensServicosCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutPetInput, Prisma.OrdensServicosUncheckedCreateWithoutPetInput> | Prisma.OrdensServicosCreateWithoutPetInput[] | Prisma.OrdensServicosUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutPetInput | Prisma.OrdensServicosCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.OrdensServicosCreateManyPetInputEnvelope;
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
};
export type OrdensServicosUncheckedCreateNestedManyWithoutPetInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutPetInput, Prisma.OrdensServicosUncheckedCreateWithoutPetInput> | Prisma.OrdensServicosCreateWithoutPetInput[] | Prisma.OrdensServicosUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutPetInput | Prisma.OrdensServicosCreateOrConnectWithoutPetInput[];
    createMany?: Prisma.OrdensServicosCreateManyPetInputEnvelope;
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
};
export type OrdensServicosUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutPetInput, Prisma.OrdensServicosUncheckedCreateWithoutPetInput> | Prisma.OrdensServicosCreateWithoutPetInput[] | Prisma.OrdensServicosUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutPetInput | Prisma.OrdensServicosCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.OrdensServicosUpsertWithWhereUniqueWithoutPetInput | Prisma.OrdensServicosUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.OrdensServicosCreateManyPetInputEnvelope;
    set?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    disconnect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    delete?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    update?: Prisma.OrdensServicosUpdateWithWhereUniqueWithoutPetInput | Prisma.OrdensServicosUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.OrdensServicosUpdateManyWithWhereWithoutPetInput | Prisma.OrdensServicosUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.OrdensServicosScalarWhereInput | Prisma.OrdensServicosScalarWhereInput[];
};
export type OrdensServicosUncheckedUpdateManyWithoutPetNestedInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutPetInput, Prisma.OrdensServicosUncheckedCreateWithoutPetInput> | Prisma.OrdensServicosCreateWithoutPetInput[] | Prisma.OrdensServicosUncheckedCreateWithoutPetInput[];
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutPetInput | Prisma.OrdensServicosCreateOrConnectWithoutPetInput[];
    upsert?: Prisma.OrdensServicosUpsertWithWhereUniqueWithoutPetInput | Prisma.OrdensServicosUpsertWithWhereUniqueWithoutPetInput[];
    createMany?: Prisma.OrdensServicosCreateManyPetInputEnvelope;
    set?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    disconnect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    delete?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    connect?: Prisma.OrdensServicosWhereUniqueInput | Prisma.OrdensServicosWhereUniqueInput[];
    update?: Prisma.OrdensServicosUpdateWithWhereUniqueWithoutPetInput | Prisma.OrdensServicosUpdateWithWhereUniqueWithoutPetInput[];
    updateMany?: Prisma.OrdensServicosUpdateManyWithWhereWithoutPetInput | Prisma.OrdensServicosUpdateManyWithWhereWithoutPetInput[];
    deleteMany?: Prisma.OrdensServicosScalarWhereInput | Prisma.OrdensServicosScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrdensServicosCreateNestedOneWithoutParadasInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutParadasInput, Prisma.OrdensServicosUncheckedCreateWithoutParadasInput>;
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutParadasInput;
    connect?: Prisma.OrdensServicosWhereUniqueInput;
};
export type OrdensServicosUpdateOneRequiredWithoutParadasNestedInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutParadasInput, Prisma.OrdensServicosUncheckedCreateWithoutParadasInput>;
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutParadasInput;
    upsert?: Prisma.OrdensServicosUpsertWithoutParadasInput;
    connect?: Prisma.OrdensServicosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdensServicosUpdateToOneWithWhereWithoutParadasInput, Prisma.OrdensServicosUpdateWithoutParadasInput>, Prisma.OrdensServicosUncheckedUpdateWithoutParadasInput>;
};
export type OrdensServicosCreateNestedOneWithoutStatusesInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutStatusesInput, Prisma.OrdensServicosUncheckedCreateWithoutStatusesInput>;
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutStatusesInput;
    connect?: Prisma.OrdensServicosWhereUniqueInput;
};
export type OrdensServicosUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: Prisma.XOR<Prisma.OrdensServicosCreateWithoutStatusesInput, Prisma.OrdensServicosUncheckedCreateWithoutStatusesInput>;
    connectOrCreate?: Prisma.OrdensServicosCreateOrConnectWithoutStatusesInput;
    upsert?: Prisma.OrdensServicosUpsertWithoutStatusesInput;
    connect?: Prisma.OrdensServicosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdensServicosUpdateToOneWithWhereWithoutStatusesInput, Prisma.OrdensServicosUpdateWithoutStatusesInput>, Prisma.OrdensServicosUncheckedUpdateWithoutStatusesInput>;
};
export type OrdensServicosCreateWithoutClientesInput = {
    id?: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    pet: Prisma.PetsCreateNestedOneWithoutOrdensInput;
    paradas?: Prisma.RotasParadasCreateNestedManyWithoutOrdemInput;
    statuses?: Prisma.StatusCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosUncheckedCreateWithoutClientesInput = {
    id?: string;
    pet_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    paradas?: Prisma.RotasParadasUncheckedCreateNestedManyWithoutOrdemInput;
    statuses?: Prisma.StatusUncheckedCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosCreateOrConnectWithoutClientesInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutClientesInput, Prisma.OrdensServicosUncheckedCreateWithoutClientesInput>;
};
export type OrdensServicosCreateManyClientesInputEnvelope = {
    data: Prisma.OrdensServicosCreateManyClientesInput | Prisma.OrdensServicosCreateManyClientesInput[];
};
export type OrdensServicosUpsertWithWhereUniqueWithoutClientesInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutClientesInput, Prisma.OrdensServicosUncheckedUpdateWithoutClientesInput>;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutClientesInput, Prisma.OrdensServicosUncheckedCreateWithoutClientesInput>;
};
export type OrdensServicosUpdateWithWhereUniqueWithoutClientesInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutClientesInput, Prisma.OrdensServicosUncheckedUpdateWithoutClientesInput>;
};
export type OrdensServicosUpdateManyWithWhereWithoutClientesInput = {
    where: Prisma.OrdensServicosScalarWhereInput;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateManyMutationInput, Prisma.OrdensServicosUncheckedUpdateManyWithoutClientesInput>;
};
export type OrdensServicosScalarWhereInput = {
    AND?: Prisma.OrdensServicosScalarWhereInput | Prisma.OrdensServicosScalarWhereInput[];
    OR?: Prisma.OrdensServicosScalarWhereInput[];
    NOT?: Prisma.OrdensServicosScalarWhereInput | Prisma.OrdensServicosScalarWhereInput[];
    id?: Prisma.StringFilter<"OrdensServicos"> | string;
    cliente_id?: Prisma.StringFilter<"OrdensServicos"> | string;
    pet_id?: Prisma.StringFilter<"OrdensServicos"> | string;
    tipo?: Prisma.StringFilter<"OrdensServicos"> | string;
    status?: Prisma.StringFilter<"OrdensServicos"> | string;
    data_agendada?: Prisma.DateTimeFilter<"OrdensServicos"> | Date | string;
    preco?: Prisma.DecimalNullableFilter<"OrdensServicos"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.StringNullableFilter<"OrdensServicos"> | string | null;
};
export type OrdensServicosCreateWithoutPetInput = {
    id?: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    clientes: Prisma.ClientesCreateNestedOneWithoutOrdensInput;
    paradas?: Prisma.RotasParadasCreateNestedManyWithoutOrdemInput;
    statuses?: Prisma.StatusCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosUncheckedCreateWithoutPetInput = {
    id?: string;
    cliente_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    paradas?: Prisma.RotasParadasUncheckedCreateNestedManyWithoutOrdemInput;
    statuses?: Prisma.StatusUncheckedCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosCreateOrConnectWithoutPetInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutPetInput, Prisma.OrdensServicosUncheckedCreateWithoutPetInput>;
};
export type OrdensServicosCreateManyPetInputEnvelope = {
    data: Prisma.OrdensServicosCreateManyPetInput | Prisma.OrdensServicosCreateManyPetInput[];
};
export type OrdensServicosUpsertWithWhereUniqueWithoutPetInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutPetInput, Prisma.OrdensServicosUncheckedUpdateWithoutPetInput>;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutPetInput, Prisma.OrdensServicosUncheckedCreateWithoutPetInput>;
};
export type OrdensServicosUpdateWithWhereUniqueWithoutPetInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutPetInput, Prisma.OrdensServicosUncheckedUpdateWithoutPetInput>;
};
export type OrdensServicosUpdateManyWithWhereWithoutPetInput = {
    where: Prisma.OrdensServicosScalarWhereInput;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateManyMutationInput, Prisma.OrdensServicosUncheckedUpdateManyWithoutPetInput>;
};
export type OrdensServicosCreateWithoutParadasInput = {
    id?: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    clientes: Prisma.ClientesCreateNestedOneWithoutOrdensInput;
    pet: Prisma.PetsCreateNestedOneWithoutOrdensInput;
    statuses?: Prisma.StatusCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosUncheckedCreateWithoutParadasInput = {
    id?: string;
    cliente_id: string;
    pet_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    statuses?: Prisma.StatusUncheckedCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosCreateOrConnectWithoutParadasInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutParadasInput, Prisma.OrdensServicosUncheckedCreateWithoutParadasInput>;
};
export type OrdensServicosUpsertWithoutParadasInput = {
    update: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutParadasInput, Prisma.OrdensServicosUncheckedUpdateWithoutParadasInput>;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutParadasInput, Prisma.OrdensServicosUncheckedCreateWithoutParadasInput>;
    where?: Prisma.OrdensServicosWhereInput;
};
export type OrdensServicosUpdateToOneWithWhereWithoutParadasInput = {
    where?: Prisma.OrdensServicosWhereInput;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutParadasInput, Prisma.OrdensServicosUncheckedUpdateWithoutParadasInput>;
};
export type OrdensServicosUpdateWithoutParadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientes?: Prisma.ClientesUpdateOneRequiredWithoutOrdensNestedInput;
    pet?: Prisma.PetsUpdateOneRequiredWithoutOrdensNestedInput;
    statuses?: Prisma.StatusUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateWithoutParadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    pet_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statuses?: Prisma.StatusUncheckedUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosCreateWithoutStatusesInput = {
    id?: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    clientes: Prisma.ClientesCreateNestedOneWithoutOrdensInput;
    pet: Prisma.PetsCreateNestedOneWithoutOrdensInput;
    paradas?: Prisma.RotasParadasCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosUncheckedCreateWithoutStatusesInput = {
    id?: string;
    cliente_id: string;
    pet_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
    paradas?: Prisma.RotasParadasUncheckedCreateNestedManyWithoutOrdemInput;
};
export type OrdensServicosCreateOrConnectWithoutStatusesInput = {
    where: Prisma.OrdensServicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutStatusesInput, Prisma.OrdensServicosUncheckedCreateWithoutStatusesInput>;
};
export type OrdensServicosUpsertWithoutStatusesInput = {
    update: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutStatusesInput, Prisma.OrdensServicosUncheckedUpdateWithoutStatusesInput>;
    create: Prisma.XOR<Prisma.OrdensServicosCreateWithoutStatusesInput, Prisma.OrdensServicosUncheckedCreateWithoutStatusesInput>;
    where?: Prisma.OrdensServicosWhereInput;
};
export type OrdensServicosUpdateToOneWithWhereWithoutStatusesInput = {
    where?: Prisma.OrdensServicosWhereInput;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateWithoutStatusesInput, Prisma.OrdensServicosUncheckedUpdateWithoutStatusesInput>;
};
export type OrdensServicosUpdateWithoutStatusesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientes?: Prisma.ClientesUpdateOneRequiredWithoutOrdensNestedInput;
    pet?: Prisma.PetsUpdateOneRequiredWithoutOrdensNestedInput;
    paradas?: Prisma.RotasParadasUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateWithoutStatusesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    pet_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paradas?: Prisma.RotasParadasUncheckedUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosCreateManyClientesInput = {
    id?: string;
    pet_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
};
export type OrdensServicosUpdateWithoutClientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pet?: Prisma.PetsUpdateOneRequiredWithoutOrdensNestedInput;
    paradas?: Prisma.RotasParadasUpdateManyWithoutOrdemNestedInput;
    statuses?: Prisma.StatusUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateWithoutClientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pet_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paradas?: Prisma.RotasParadasUncheckedUpdateManyWithoutOrdemNestedInput;
    statuses?: Prisma.StatusUncheckedUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateManyWithoutClientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pet_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrdensServicosCreateManyPetInput = {
    id?: string;
    cliente_id: string;
    tipo: string;
    status?: string;
    data_agendada: Date | string;
    preco?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: string | null;
};
export type OrdensServicosUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientes?: Prisma.ClientesUpdateOneRequiredWithoutOrdensNestedInput;
    paradas?: Prisma.RotasParadasUpdateManyWithoutOrdemNestedInput;
    statuses?: Prisma.StatusUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paradas?: Prisma.RotasParadasUncheckedUpdateManyWithoutOrdemNestedInput;
    statuses?: Prisma.StatusUncheckedUpdateManyWithoutOrdemNestedInput;
};
export type OrdensServicosUncheckedUpdateManyWithoutPetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    data_agendada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preco?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observacoes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrdensServicosCountOutputType = {
    paradas: number;
    statuses: number;
};
export type OrdensServicosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paradas?: boolean | OrdensServicosCountOutputTypeCountParadasArgs;
    statuses?: boolean | OrdensServicosCountOutputTypeCountStatusesArgs;
};
export type OrdensServicosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosCountOutputTypeSelect<ExtArgs> | null;
};
export type OrdensServicosCountOutputTypeCountParadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasParadasWhereInput;
};
export type OrdensServicosCountOutputTypeCountStatusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatusWhereInput;
};
export type OrdensServicosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    pet_id?: boolean;
    tipo?: boolean;
    status?: boolean;
    data_agendada?: boolean;
    preco?: boolean;
    observacoes?: boolean;
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    pet?: boolean | Prisma.PetsDefaultArgs<ExtArgs>;
    paradas?: boolean | Prisma.OrdensServicos$paradasArgs<ExtArgs>;
    statuses?: boolean | Prisma.OrdensServicos$statusesArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdensServicosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordensServicos"]>;
export type OrdensServicosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    pet_id?: boolean;
    tipo?: boolean;
    status?: boolean;
    data_agendada?: boolean;
    preco?: boolean;
    observacoes?: boolean;
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    pet?: boolean | Prisma.PetsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordensServicos"]>;
export type OrdensServicosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    pet_id?: boolean;
    tipo?: boolean;
    status?: boolean;
    data_agendada?: boolean;
    preco?: boolean;
    observacoes?: boolean;
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    pet?: boolean | Prisma.PetsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordensServicos"]>;
export type OrdensServicosSelectScalar = {
    id?: boolean;
    cliente_id?: boolean;
    pet_id?: boolean;
    tipo?: boolean;
    status?: boolean;
    data_agendada?: boolean;
    preco?: boolean;
    observacoes?: boolean;
};
export type OrdensServicosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cliente_id" | "pet_id" | "tipo" | "status" | "data_agendada" | "preco" | "observacoes", ExtArgs["result"]["ordensServicos"]>;
export type OrdensServicosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    pet?: boolean | Prisma.PetsDefaultArgs<ExtArgs>;
    paradas?: boolean | Prisma.OrdensServicos$paradasArgs<ExtArgs>;
    statuses?: boolean | Prisma.OrdensServicos$statusesArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdensServicosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrdensServicosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    pet?: boolean | Prisma.PetsDefaultArgs<ExtArgs>;
};
export type OrdensServicosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
    pet?: boolean | Prisma.PetsDefaultArgs<ExtArgs>;
};
export type $OrdensServicosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrdensServicos";
    objects: {
        clientes: Prisma.$ClientesPayload<ExtArgs>;
        pet: Prisma.$PetsPayload<ExtArgs>;
        paradas: Prisma.$RotasParadasPayload<ExtArgs>[];
        statuses: Prisma.$StatusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cliente_id: string;
        pet_id: string;
        tipo: string;
        status: string;
        data_agendada: Date;
        preco: runtime.Decimal | null;
        observacoes: string | null;
    }, ExtArgs["result"]["ordensServicos"]>;
    composites: {};
};
export type OrdensServicosGetPayload<S extends boolean | null | undefined | OrdensServicosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload, S>;
export type OrdensServicosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrdensServicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdensServicosCountAggregateInputType | true;
};
export interface OrdensServicosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrdensServicos'];
        meta: {
            name: 'OrdensServicos';
        };
    };
    findUnique<T extends OrdensServicosFindUniqueArgs>(args: Prisma.SelectSubset<T, OrdensServicosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrdensServicosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrdensServicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrdensServicosFindFirstArgs>(args?: Prisma.SelectSubset<T, OrdensServicosFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrdensServicosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrdensServicosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrdensServicosFindManyArgs>(args?: Prisma.SelectSubset<T, OrdensServicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrdensServicosCreateArgs>(args: Prisma.SelectSubset<T, OrdensServicosCreateArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrdensServicosCreateManyArgs>(args?: Prisma.SelectSubset<T, OrdensServicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrdensServicosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrdensServicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrdensServicosDeleteArgs>(args: Prisma.SelectSubset<T, OrdensServicosDeleteArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrdensServicosUpdateArgs>(args: Prisma.SelectSubset<T, OrdensServicosUpdateArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrdensServicosDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrdensServicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrdensServicosUpdateManyArgs>(args: Prisma.SelectSubset<T, OrdensServicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrdensServicosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrdensServicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrdensServicosUpsertArgs>(args: Prisma.SelectSubset<T, OrdensServicosUpsertArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrdensServicosCountArgs>(args?: Prisma.Subset<T, OrdensServicosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrdensServicosCountAggregateOutputType> : number>;
    aggregate<T extends OrdensServicosAggregateArgs>(args: Prisma.Subset<T, OrdensServicosAggregateArgs>): Prisma.PrismaPromise<GetOrdensServicosAggregateType<T>>;
    groupBy<T extends OrdensServicosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrdensServicosGroupByArgs['orderBy'];
    } : {
        orderBy?: OrdensServicosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrdensServicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdensServicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrdensServicosFieldRefs;
}
export interface Prisma__OrdensServicosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clientes<T extends Prisma.ClientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientesDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pet<T extends Prisma.PetsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PetsDefaultArgs<ExtArgs>>): Prisma.Prisma__PetsClient<runtime.Types.Result.GetResult<Prisma.$PetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paradas<T extends Prisma.OrdensServicos$paradasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdensServicos$paradasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    statuses<T extends Prisma.OrdensServicos$statusesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdensServicos$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrdensServicosFieldRefs {
    readonly id: Prisma.FieldRef<"OrdensServicos", 'String'>;
    readonly cliente_id: Prisma.FieldRef<"OrdensServicos", 'String'>;
    readonly pet_id: Prisma.FieldRef<"OrdensServicos", 'String'>;
    readonly tipo: Prisma.FieldRef<"OrdensServicos", 'String'>;
    readonly status: Prisma.FieldRef<"OrdensServicos", 'String'>;
    readonly data_agendada: Prisma.FieldRef<"OrdensServicos", 'DateTime'>;
    readonly preco: Prisma.FieldRef<"OrdensServicos", 'Decimal'>;
    readonly observacoes: Prisma.FieldRef<"OrdensServicos", 'String'>;
}
export type OrdensServicosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    where: Prisma.OrdensServicosWhereUniqueInput;
};
export type OrdensServicosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    where: Prisma.OrdensServicosWhereUniqueInput;
};
export type OrdensServicosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrdensServicosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrdensServicosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrdensServicosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrdensServicosCreateInput, Prisma.OrdensServicosUncheckedCreateInput>;
};
export type OrdensServicosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrdensServicosCreateManyInput | Prisma.OrdensServicosCreateManyInput[];
};
export type OrdensServicosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    data: Prisma.OrdensServicosCreateManyInput | Prisma.OrdensServicosCreateManyInput[];
    include?: Prisma.OrdensServicosIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrdensServicosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateInput, Prisma.OrdensServicosUncheckedUpdateInput>;
    where: Prisma.OrdensServicosWhereUniqueInput;
};
export type OrdensServicosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrdensServicosUpdateManyMutationInput, Prisma.OrdensServicosUncheckedUpdateManyInput>;
    where?: Prisma.OrdensServicosWhereInput;
    limit?: number;
};
export type OrdensServicosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrdensServicosUpdateManyMutationInput, Prisma.OrdensServicosUncheckedUpdateManyInput>;
    where?: Prisma.OrdensServicosWhereInput;
    limit?: number;
    include?: Prisma.OrdensServicosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrdensServicosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    where: Prisma.OrdensServicosWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdensServicosCreateInput, Prisma.OrdensServicosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrdensServicosUpdateInput, Prisma.OrdensServicosUncheckedUpdateInput>;
};
export type OrdensServicosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
    where: Prisma.OrdensServicosWhereUniqueInput;
};
export type OrdensServicosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdensServicosWhereInput;
    limit?: number;
};
export type OrdensServicos$paradasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    where?: Prisma.RotasParadasWhereInput;
    orderBy?: Prisma.RotasParadasOrderByWithRelationInput | Prisma.RotasParadasOrderByWithRelationInput[];
    cursor?: Prisma.RotasParadasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RotasParadasScalarFieldEnum | Prisma.RotasParadasScalarFieldEnum[];
};
export type OrdensServicos$statusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    where?: Prisma.StatusWhereInput;
    orderBy?: Prisma.StatusOrderByWithRelationInput | Prisma.StatusOrderByWithRelationInput[];
    cursor?: Prisma.StatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatusScalarFieldEnum | Prisma.StatusScalarFieldEnum[];
};
export type OrdensServicosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdensServicosSelect<ExtArgs> | null;
    omit?: Prisma.OrdensServicosOmit<ExtArgs> | null;
    include?: Prisma.OrdensServicosInclude<ExtArgs> | null;
};
export {};
