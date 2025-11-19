import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RotasParadasModel = runtime.Types.Result.DefaultSelection<Prisma.$RotasParadasPayload>;
export type AggregateRotasParadas = {
    _count: RotasParadasCountAggregateOutputType | null;
    _avg: RotasParadasAvgAggregateOutputType | null;
    _sum: RotasParadasSumAggregateOutputType | null;
    _min: RotasParadasMinAggregateOutputType | null;
    _max: RotasParadasMaxAggregateOutputType | null;
};
export type RotasParadasAvgAggregateOutputType = {
    sequencia: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type RotasParadasSumAggregateOutputType = {
    sequencia: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type RotasParadasMinAggregateOutputType = {
    id: string | null;
    rota_id: string | null;
    ordem_id: string | null;
    sequencia: number | null;
    latitude: number | null;
    longitude: number | null;
    status: string | null;
};
export type RotasParadasMaxAggregateOutputType = {
    id: string | null;
    rota_id: string | null;
    ordem_id: string | null;
    sequencia: number | null;
    latitude: number | null;
    longitude: number | null;
    status: string | null;
};
export type RotasParadasCountAggregateOutputType = {
    id: number;
    rota_id: number;
    ordem_id: number;
    sequencia: number;
    latitude: number;
    longitude: number;
    status: number;
    _all: number;
};
export type RotasParadasAvgAggregateInputType = {
    sequencia?: true;
    latitude?: true;
    longitude?: true;
};
export type RotasParadasSumAggregateInputType = {
    sequencia?: true;
    latitude?: true;
    longitude?: true;
};
export type RotasParadasMinAggregateInputType = {
    id?: true;
    rota_id?: true;
    ordem_id?: true;
    sequencia?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
};
export type RotasParadasMaxAggregateInputType = {
    id?: true;
    rota_id?: true;
    ordem_id?: true;
    sequencia?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
};
export type RotasParadasCountAggregateInputType = {
    id?: true;
    rota_id?: true;
    ordem_id?: true;
    sequencia?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    _all?: true;
};
export type RotasParadasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasParadasWhereInput;
    orderBy?: Prisma.RotasParadasOrderByWithRelationInput | Prisma.RotasParadasOrderByWithRelationInput[];
    cursor?: Prisma.RotasParadasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RotasParadasCountAggregateInputType;
    _avg?: RotasParadasAvgAggregateInputType;
    _sum?: RotasParadasSumAggregateInputType;
    _min?: RotasParadasMinAggregateInputType;
    _max?: RotasParadasMaxAggregateInputType;
};
export type GetRotasParadasAggregateType<T extends RotasParadasAggregateArgs> = {
    [P in keyof T & keyof AggregateRotasParadas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRotasParadas[P]> : Prisma.GetScalarType<T[P], AggregateRotasParadas[P]>;
};
export type RotasParadasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasParadasWhereInput;
    orderBy?: Prisma.RotasParadasOrderByWithAggregationInput | Prisma.RotasParadasOrderByWithAggregationInput[];
    by: Prisma.RotasParadasScalarFieldEnum[] | Prisma.RotasParadasScalarFieldEnum;
    having?: Prisma.RotasParadasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RotasParadasCountAggregateInputType | true;
    _avg?: RotasParadasAvgAggregateInputType;
    _sum?: RotasParadasSumAggregateInputType;
    _min?: RotasParadasMinAggregateInputType;
    _max?: RotasParadasMaxAggregateInputType;
};
export type RotasParadasGroupByOutputType = {
    id: string;
    rota_id: string;
    ordem_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status: string;
    _count: RotasParadasCountAggregateOutputType | null;
    _avg: RotasParadasAvgAggregateOutputType | null;
    _sum: RotasParadasSumAggregateOutputType | null;
    _min: RotasParadasMinAggregateOutputType | null;
    _max: RotasParadasMaxAggregateOutputType | null;
};
type GetRotasParadasGroupByPayload<T extends RotasParadasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RotasParadasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RotasParadasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RotasParadasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RotasParadasGroupByOutputType[P]>;
}>>;
export type RotasParadasWhereInput = {
    AND?: Prisma.RotasParadasWhereInput | Prisma.RotasParadasWhereInput[];
    OR?: Prisma.RotasParadasWhereInput[];
    NOT?: Prisma.RotasParadasWhereInput | Prisma.RotasParadasWhereInput[];
    id?: Prisma.StringFilter<"RotasParadas"> | string;
    rota_id?: Prisma.StringFilter<"RotasParadas"> | string;
    ordem_id?: Prisma.StringFilter<"RotasParadas"> | string;
    sequencia?: Prisma.IntFilter<"RotasParadas"> | number;
    latitude?: Prisma.FloatFilter<"RotasParadas"> | number;
    longitude?: Prisma.FloatFilter<"RotasParadas"> | number;
    status?: Prisma.StringFilter<"RotasParadas"> | string;
    rota?: Prisma.XOR<Prisma.RotasScalarRelationFilter, Prisma.RotasWhereInput>;
    ordem?: Prisma.XOR<Prisma.OrdensServicosScalarRelationFilter, Prisma.OrdensServicosWhereInput>;
};
export type RotasParadasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rota_id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rota?: Prisma.RotasOrderByWithRelationInput;
    ordem?: Prisma.OrdensServicosOrderByWithRelationInput;
};
export type RotasParadasWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RotasParadasWhereInput | Prisma.RotasParadasWhereInput[];
    OR?: Prisma.RotasParadasWhereInput[];
    NOT?: Prisma.RotasParadasWhereInput | Prisma.RotasParadasWhereInput[];
    rota_id?: Prisma.StringFilter<"RotasParadas"> | string;
    ordem_id?: Prisma.StringFilter<"RotasParadas"> | string;
    sequencia?: Prisma.IntFilter<"RotasParadas"> | number;
    latitude?: Prisma.FloatFilter<"RotasParadas"> | number;
    longitude?: Prisma.FloatFilter<"RotasParadas"> | number;
    status?: Prisma.StringFilter<"RotasParadas"> | string;
    rota?: Prisma.XOR<Prisma.RotasScalarRelationFilter, Prisma.RotasWhereInput>;
    ordem?: Prisma.XOR<Prisma.OrdensServicosScalarRelationFilter, Prisma.OrdensServicosWhereInput>;
}, "id">;
export type RotasParadasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rota_id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.RotasParadasCountOrderByAggregateInput;
    _avg?: Prisma.RotasParadasAvgOrderByAggregateInput;
    _max?: Prisma.RotasParadasMaxOrderByAggregateInput;
    _min?: Prisma.RotasParadasMinOrderByAggregateInput;
    _sum?: Prisma.RotasParadasSumOrderByAggregateInput;
};
export type RotasParadasScalarWhereWithAggregatesInput = {
    AND?: Prisma.RotasParadasScalarWhereWithAggregatesInput | Prisma.RotasParadasScalarWhereWithAggregatesInput[];
    OR?: Prisma.RotasParadasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RotasParadasScalarWhereWithAggregatesInput | Prisma.RotasParadasScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RotasParadas"> | string;
    rota_id?: Prisma.StringWithAggregatesFilter<"RotasParadas"> | string;
    ordem_id?: Prisma.StringWithAggregatesFilter<"RotasParadas"> | string;
    sequencia?: Prisma.IntWithAggregatesFilter<"RotasParadas"> | number;
    latitude?: Prisma.FloatWithAggregatesFilter<"RotasParadas"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"RotasParadas"> | number;
    status?: Prisma.StringWithAggregatesFilter<"RotasParadas"> | string;
};
export type RotasParadasCreateInput = {
    id?: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
    rota: Prisma.RotasCreateNestedOneWithoutParadasInput;
    ordem: Prisma.OrdensServicosCreateNestedOneWithoutParadasInput;
};
export type RotasParadasUncheckedCreateInput = {
    id?: string;
    rota_id: string;
    ordem_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
};
export type RotasParadasUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    rota?: Prisma.RotasUpdateOneRequiredWithoutParadasNestedInput;
    ordem?: Prisma.OrdensServicosUpdateOneRequiredWithoutParadasNestedInput;
};
export type RotasParadasUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rota_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasCreateManyInput = {
    id?: string;
    rota_id: string;
    ordem_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
};
export type RotasParadasUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rota_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasListRelationFilter = {
    every?: Prisma.RotasParadasWhereInput;
    some?: Prisma.RotasParadasWhereInput;
    none?: Prisma.RotasParadasWhereInput;
};
export type RotasParadasOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RotasParadasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rota_id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type RotasParadasAvgOrderByAggregateInput = {
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type RotasParadasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rota_id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type RotasParadasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rota_id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type RotasParadasSumOrderByAggregateInput = {
    sequencia?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type RotasParadasCreateNestedManyWithoutOrdemInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutOrdemInput, Prisma.RotasParadasUncheckedCreateWithoutOrdemInput> | Prisma.RotasParadasCreateWithoutOrdemInput[] | Prisma.RotasParadasUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutOrdemInput | Prisma.RotasParadasCreateOrConnectWithoutOrdemInput[];
    createMany?: Prisma.RotasParadasCreateManyOrdemInputEnvelope;
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
};
export type RotasParadasUncheckedCreateNestedManyWithoutOrdemInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutOrdemInput, Prisma.RotasParadasUncheckedCreateWithoutOrdemInput> | Prisma.RotasParadasCreateWithoutOrdemInput[] | Prisma.RotasParadasUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutOrdemInput | Prisma.RotasParadasCreateOrConnectWithoutOrdemInput[];
    createMany?: Prisma.RotasParadasCreateManyOrdemInputEnvelope;
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
};
export type RotasParadasUpdateManyWithoutOrdemNestedInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutOrdemInput, Prisma.RotasParadasUncheckedCreateWithoutOrdemInput> | Prisma.RotasParadasCreateWithoutOrdemInput[] | Prisma.RotasParadasUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutOrdemInput | Prisma.RotasParadasCreateOrConnectWithoutOrdemInput[];
    upsert?: Prisma.RotasParadasUpsertWithWhereUniqueWithoutOrdemInput | Prisma.RotasParadasUpsertWithWhereUniqueWithoutOrdemInput[];
    createMany?: Prisma.RotasParadasCreateManyOrdemInputEnvelope;
    set?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    disconnect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    delete?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    update?: Prisma.RotasParadasUpdateWithWhereUniqueWithoutOrdemInput | Prisma.RotasParadasUpdateWithWhereUniqueWithoutOrdemInput[];
    updateMany?: Prisma.RotasParadasUpdateManyWithWhereWithoutOrdemInput | Prisma.RotasParadasUpdateManyWithWhereWithoutOrdemInput[];
    deleteMany?: Prisma.RotasParadasScalarWhereInput | Prisma.RotasParadasScalarWhereInput[];
};
export type RotasParadasUncheckedUpdateManyWithoutOrdemNestedInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutOrdemInput, Prisma.RotasParadasUncheckedCreateWithoutOrdemInput> | Prisma.RotasParadasCreateWithoutOrdemInput[] | Prisma.RotasParadasUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutOrdemInput | Prisma.RotasParadasCreateOrConnectWithoutOrdemInput[];
    upsert?: Prisma.RotasParadasUpsertWithWhereUniqueWithoutOrdemInput | Prisma.RotasParadasUpsertWithWhereUniqueWithoutOrdemInput[];
    createMany?: Prisma.RotasParadasCreateManyOrdemInputEnvelope;
    set?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    disconnect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    delete?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    update?: Prisma.RotasParadasUpdateWithWhereUniqueWithoutOrdemInput | Prisma.RotasParadasUpdateWithWhereUniqueWithoutOrdemInput[];
    updateMany?: Prisma.RotasParadasUpdateManyWithWhereWithoutOrdemInput | Prisma.RotasParadasUpdateManyWithWhereWithoutOrdemInput[];
    deleteMany?: Prisma.RotasParadasScalarWhereInput | Prisma.RotasParadasScalarWhereInput[];
};
export type RotasParadasCreateNestedManyWithoutRotaInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutRotaInput, Prisma.RotasParadasUncheckedCreateWithoutRotaInput> | Prisma.RotasParadasCreateWithoutRotaInput[] | Prisma.RotasParadasUncheckedCreateWithoutRotaInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutRotaInput | Prisma.RotasParadasCreateOrConnectWithoutRotaInput[];
    createMany?: Prisma.RotasParadasCreateManyRotaInputEnvelope;
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
};
export type RotasParadasUncheckedCreateNestedManyWithoutRotaInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutRotaInput, Prisma.RotasParadasUncheckedCreateWithoutRotaInput> | Prisma.RotasParadasCreateWithoutRotaInput[] | Prisma.RotasParadasUncheckedCreateWithoutRotaInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutRotaInput | Prisma.RotasParadasCreateOrConnectWithoutRotaInput[];
    createMany?: Prisma.RotasParadasCreateManyRotaInputEnvelope;
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
};
export type RotasParadasUpdateManyWithoutRotaNestedInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutRotaInput, Prisma.RotasParadasUncheckedCreateWithoutRotaInput> | Prisma.RotasParadasCreateWithoutRotaInput[] | Prisma.RotasParadasUncheckedCreateWithoutRotaInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutRotaInput | Prisma.RotasParadasCreateOrConnectWithoutRotaInput[];
    upsert?: Prisma.RotasParadasUpsertWithWhereUniqueWithoutRotaInput | Prisma.RotasParadasUpsertWithWhereUniqueWithoutRotaInput[];
    createMany?: Prisma.RotasParadasCreateManyRotaInputEnvelope;
    set?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    disconnect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    delete?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    update?: Prisma.RotasParadasUpdateWithWhereUniqueWithoutRotaInput | Prisma.RotasParadasUpdateWithWhereUniqueWithoutRotaInput[];
    updateMany?: Prisma.RotasParadasUpdateManyWithWhereWithoutRotaInput | Prisma.RotasParadasUpdateManyWithWhereWithoutRotaInput[];
    deleteMany?: Prisma.RotasParadasScalarWhereInput | Prisma.RotasParadasScalarWhereInput[];
};
export type RotasParadasUncheckedUpdateManyWithoutRotaNestedInput = {
    create?: Prisma.XOR<Prisma.RotasParadasCreateWithoutRotaInput, Prisma.RotasParadasUncheckedCreateWithoutRotaInput> | Prisma.RotasParadasCreateWithoutRotaInput[] | Prisma.RotasParadasUncheckedCreateWithoutRotaInput[];
    connectOrCreate?: Prisma.RotasParadasCreateOrConnectWithoutRotaInput | Prisma.RotasParadasCreateOrConnectWithoutRotaInput[];
    upsert?: Prisma.RotasParadasUpsertWithWhereUniqueWithoutRotaInput | Prisma.RotasParadasUpsertWithWhereUniqueWithoutRotaInput[];
    createMany?: Prisma.RotasParadasCreateManyRotaInputEnvelope;
    set?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    disconnect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    delete?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    connect?: Prisma.RotasParadasWhereUniqueInput | Prisma.RotasParadasWhereUniqueInput[];
    update?: Prisma.RotasParadasUpdateWithWhereUniqueWithoutRotaInput | Prisma.RotasParadasUpdateWithWhereUniqueWithoutRotaInput[];
    updateMany?: Prisma.RotasParadasUpdateManyWithWhereWithoutRotaInput | Prisma.RotasParadasUpdateManyWithWhereWithoutRotaInput[];
    deleteMany?: Prisma.RotasParadasScalarWhereInput | Prisma.RotasParadasScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RotasParadasCreateWithoutOrdemInput = {
    id?: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
    rota: Prisma.RotasCreateNestedOneWithoutParadasInput;
};
export type RotasParadasUncheckedCreateWithoutOrdemInput = {
    id?: string;
    rota_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
};
export type RotasParadasCreateOrConnectWithoutOrdemInput = {
    where: Prisma.RotasParadasWhereUniqueInput;
    create: Prisma.XOR<Prisma.RotasParadasCreateWithoutOrdemInput, Prisma.RotasParadasUncheckedCreateWithoutOrdemInput>;
};
export type RotasParadasCreateManyOrdemInputEnvelope = {
    data: Prisma.RotasParadasCreateManyOrdemInput | Prisma.RotasParadasCreateManyOrdemInput[];
};
export type RotasParadasUpsertWithWhereUniqueWithoutOrdemInput = {
    where: Prisma.RotasParadasWhereUniqueInput;
    update: Prisma.XOR<Prisma.RotasParadasUpdateWithoutOrdemInput, Prisma.RotasParadasUncheckedUpdateWithoutOrdemInput>;
    create: Prisma.XOR<Prisma.RotasParadasCreateWithoutOrdemInput, Prisma.RotasParadasUncheckedCreateWithoutOrdemInput>;
};
export type RotasParadasUpdateWithWhereUniqueWithoutOrdemInput = {
    where: Prisma.RotasParadasWhereUniqueInput;
    data: Prisma.XOR<Prisma.RotasParadasUpdateWithoutOrdemInput, Prisma.RotasParadasUncheckedUpdateWithoutOrdemInput>;
};
export type RotasParadasUpdateManyWithWhereWithoutOrdemInput = {
    where: Prisma.RotasParadasScalarWhereInput;
    data: Prisma.XOR<Prisma.RotasParadasUpdateManyMutationInput, Prisma.RotasParadasUncheckedUpdateManyWithoutOrdemInput>;
};
export type RotasParadasScalarWhereInput = {
    AND?: Prisma.RotasParadasScalarWhereInput | Prisma.RotasParadasScalarWhereInput[];
    OR?: Prisma.RotasParadasScalarWhereInput[];
    NOT?: Prisma.RotasParadasScalarWhereInput | Prisma.RotasParadasScalarWhereInput[];
    id?: Prisma.StringFilter<"RotasParadas"> | string;
    rota_id?: Prisma.StringFilter<"RotasParadas"> | string;
    ordem_id?: Prisma.StringFilter<"RotasParadas"> | string;
    sequencia?: Prisma.IntFilter<"RotasParadas"> | number;
    latitude?: Prisma.FloatFilter<"RotasParadas"> | number;
    longitude?: Prisma.FloatFilter<"RotasParadas"> | number;
    status?: Prisma.StringFilter<"RotasParadas"> | string;
};
export type RotasParadasCreateWithoutRotaInput = {
    id?: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
    ordem: Prisma.OrdensServicosCreateNestedOneWithoutParadasInput;
};
export type RotasParadasUncheckedCreateWithoutRotaInput = {
    id?: string;
    ordem_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
};
export type RotasParadasCreateOrConnectWithoutRotaInput = {
    where: Prisma.RotasParadasWhereUniqueInput;
    create: Prisma.XOR<Prisma.RotasParadasCreateWithoutRotaInput, Prisma.RotasParadasUncheckedCreateWithoutRotaInput>;
};
export type RotasParadasCreateManyRotaInputEnvelope = {
    data: Prisma.RotasParadasCreateManyRotaInput | Prisma.RotasParadasCreateManyRotaInput[];
};
export type RotasParadasUpsertWithWhereUniqueWithoutRotaInput = {
    where: Prisma.RotasParadasWhereUniqueInput;
    update: Prisma.XOR<Prisma.RotasParadasUpdateWithoutRotaInput, Prisma.RotasParadasUncheckedUpdateWithoutRotaInput>;
    create: Prisma.XOR<Prisma.RotasParadasCreateWithoutRotaInput, Prisma.RotasParadasUncheckedCreateWithoutRotaInput>;
};
export type RotasParadasUpdateWithWhereUniqueWithoutRotaInput = {
    where: Prisma.RotasParadasWhereUniqueInput;
    data: Prisma.XOR<Prisma.RotasParadasUpdateWithoutRotaInput, Prisma.RotasParadasUncheckedUpdateWithoutRotaInput>;
};
export type RotasParadasUpdateManyWithWhereWithoutRotaInput = {
    where: Prisma.RotasParadasScalarWhereInput;
    data: Prisma.XOR<Prisma.RotasParadasUpdateManyMutationInput, Prisma.RotasParadasUncheckedUpdateManyWithoutRotaInput>;
};
export type RotasParadasCreateManyOrdemInput = {
    id?: string;
    rota_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
};
export type RotasParadasUpdateWithoutOrdemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    rota?: Prisma.RotasUpdateOneRequiredWithoutParadasNestedInput;
};
export type RotasParadasUncheckedUpdateWithoutOrdemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rota_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasUncheckedUpdateManyWithoutOrdemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rota_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasCreateManyRotaInput = {
    id?: string;
    ordem_id: string;
    sequencia: number;
    latitude: number;
    longitude: number;
    status?: string;
};
export type RotasParadasUpdateWithoutRotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.OrdensServicosUpdateOneRequiredWithoutParadasNestedInput;
};
export type RotasParadasUncheckedUpdateWithoutRotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasUncheckedUpdateManyWithoutRotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sequencia?: Prisma.IntFieldUpdateOperationsInput | number;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RotasParadasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rota_id?: boolean;
    ordem_id?: boolean;
    sequencia?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    rota?: boolean | Prisma.RotasDefaultArgs<ExtArgs>;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rotasParadas"]>;
export type RotasParadasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rota_id?: boolean;
    ordem_id?: boolean;
    sequencia?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    rota?: boolean | Prisma.RotasDefaultArgs<ExtArgs>;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rotasParadas"]>;
export type RotasParadasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rota_id?: boolean;
    ordem_id?: boolean;
    sequencia?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    rota?: boolean | Prisma.RotasDefaultArgs<ExtArgs>;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rotasParadas"]>;
export type RotasParadasSelectScalar = {
    id?: boolean;
    rota_id?: boolean;
    ordem_id?: boolean;
    sequencia?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
};
export type RotasParadasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rota_id" | "ordem_id" | "sequencia" | "latitude" | "longitude" | "status", ExtArgs["result"]["rotasParadas"]>;
export type RotasParadasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rota?: boolean | Prisma.RotasDefaultArgs<ExtArgs>;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
};
export type RotasParadasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rota?: boolean | Prisma.RotasDefaultArgs<ExtArgs>;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
};
export type RotasParadasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rota?: boolean | Prisma.RotasDefaultArgs<ExtArgs>;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
};
export type $RotasParadasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RotasParadas";
    objects: {
        rota: Prisma.$RotasPayload<ExtArgs>;
        ordem: Prisma.$OrdensServicosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rota_id: string;
        ordem_id: string;
        sequencia: number;
        latitude: number;
        longitude: number;
        status: string;
    }, ExtArgs["result"]["rotasParadas"]>;
    composites: {};
};
export type RotasParadasGetPayload<S extends boolean | null | undefined | RotasParadasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload, S>;
export type RotasParadasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RotasParadasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RotasParadasCountAggregateInputType | true;
};
export interface RotasParadasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RotasParadas'];
        meta: {
            name: 'RotasParadas';
        };
    };
    findUnique<T extends RotasParadasFindUniqueArgs>(args: Prisma.SelectSubset<T, RotasParadasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RotasParadasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RotasParadasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RotasParadasFindFirstArgs>(args?: Prisma.SelectSubset<T, RotasParadasFindFirstArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RotasParadasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RotasParadasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RotasParadasFindManyArgs>(args?: Prisma.SelectSubset<T, RotasParadasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RotasParadasCreateArgs>(args: Prisma.SelectSubset<T, RotasParadasCreateArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RotasParadasCreateManyArgs>(args?: Prisma.SelectSubset<T, RotasParadasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RotasParadasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RotasParadasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RotasParadasDeleteArgs>(args: Prisma.SelectSubset<T, RotasParadasDeleteArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RotasParadasUpdateArgs>(args: Prisma.SelectSubset<T, RotasParadasUpdateArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RotasParadasDeleteManyArgs>(args?: Prisma.SelectSubset<T, RotasParadasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RotasParadasUpdateManyArgs>(args: Prisma.SelectSubset<T, RotasParadasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RotasParadasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RotasParadasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RotasParadasUpsertArgs>(args: Prisma.SelectSubset<T, RotasParadasUpsertArgs<ExtArgs>>): Prisma.Prisma__RotasParadasClient<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RotasParadasCountArgs>(args?: Prisma.Subset<T, RotasParadasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RotasParadasCountAggregateOutputType> : number>;
    aggregate<T extends RotasParadasAggregateArgs>(args: Prisma.Subset<T, RotasParadasAggregateArgs>): Prisma.PrismaPromise<GetRotasParadasAggregateType<T>>;
    groupBy<T extends RotasParadasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RotasParadasGroupByArgs['orderBy'];
    } : {
        orderBy?: RotasParadasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RotasParadasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRotasParadasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RotasParadasFieldRefs;
}
export interface Prisma__RotasParadasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rota<T extends Prisma.RotasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RotasDefaultArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ordem<T extends Prisma.OrdensServicosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdensServicosDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RotasParadasFieldRefs {
    readonly id: Prisma.FieldRef<"RotasParadas", 'String'>;
    readonly rota_id: Prisma.FieldRef<"RotasParadas", 'String'>;
    readonly ordem_id: Prisma.FieldRef<"RotasParadas", 'String'>;
    readonly sequencia: Prisma.FieldRef<"RotasParadas", 'Int'>;
    readonly latitude: Prisma.FieldRef<"RotasParadas", 'Float'>;
    readonly longitude: Prisma.FieldRef<"RotasParadas", 'Float'>;
    readonly status: Prisma.FieldRef<"RotasParadas", 'String'>;
}
export type RotasParadasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    where: Prisma.RotasParadasWhereUniqueInput;
};
export type RotasParadasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    where: Prisma.RotasParadasWhereUniqueInput;
};
export type RotasParadasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RotasParadasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RotasParadasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RotasParadasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RotasParadasCreateInput, Prisma.RotasParadasUncheckedCreateInput>;
};
export type RotasParadasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RotasParadasCreateManyInput | Prisma.RotasParadasCreateManyInput[];
};
export type RotasParadasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    data: Prisma.RotasParadasCreateManyInput | Prisma.RotasParadasCreateManyInput[];
    include?: Prisma.RotasParadasIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RotasParadasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RotasParadasUpdateInput, Prisma.RotasParadasUncheckedUpdateInput>;
    where: Prisma.RotasParadasWhereUniqueInput;
};
export type RotasParadasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RotasParadasUpdateManyMutationInput, Prisma.RotasParadasUncheckedUpdateManyInput>;
    where?: Prisma.RotasParadasWhereInput;
    limit?: number;
};
export type RotasParadasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RotasParadasUpdateManyMutationInput, Prisma.RotasParadasUncheckedUpdateManyInput>;
    where?: Prisma.RotasParadasWhereInput;
    limit?: number;
    include?: Prisma.RotasParadasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RotasParadasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    where: Prisma.RotasParadasWhereUniqueInput;
    create: Prisma.XOR<Prisma.RotasParadasCreateInput, Prisma.RotasParadasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RotasParadasUpdateInput, Prisma.RotasParadasUncheckedUpdateInput>;
};
export type RotasParadasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
    where: Prisma.RotasParadasWhereUniqueInput;
};
export type RotasParadasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasParadasWhereInput;
    limit?: number;
};
export type RotasParadasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasParadasSelect<ExtArgs> | null;
    omit?: Prisma.RotasParadasOmit<ExtArgs> | null;
    include?: Prisma.RotasParadasInclude<ExtArgs> | null;
};
export {};
