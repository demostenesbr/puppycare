import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RotasModel = runtime.Types.Result.DefaultSelection<Prisma.$RotasPayload>;
export type AggregateRotas = {
    _count: RotasCountAggregateOutputType | null;
    _avg: RotasAvgAggregateOutputType | null;
    _sum: RotasSumAggregateOutputType | null;
    _min: RotasMinAggregateOutputType | null;
    _max: RotasMaxAggregateOutputType | null;
};
export type RotasAvgAggregateOutputType = {
    kilometragem_prevista: number | null;
    tempo_previsto: number | null;
};
export type RotasSumAggregateOutputType = {
    kilometragem_prevista: number | null;
    tempo_previsto: number | null;
};
export type RotasMinAggregateOutputType = {
    id: string | null;
    data: Date | null;
    tipo: string | null;
    status: string | null;
    motorista: string | null;
    kilometragem_prevista: number | null;
    tempo_previsto: number | null;
};
export type RotasMaxAggregateOutputType = {
    id: string | null;
    data: Date | null;
    tipo: string | null;
    status: string | null;
    motorista: string | null;
    kilometragem_prevista: number | null;
    tempo_previsto: number | null;
};
export type RotasCountAggregateOutputType = {
    id: number;
    data: number;
    tipo: number;
    status: number;
    motorista: number;
    kilometragem_prevista: number;
    tempo_previsto: number;
    _all: number;
};
export type RotasAvgAggregateInputType = {
    kilometragem_prevista?: true;
    tempo_previsto?: true;
};
export type RotasSumAggregateInputType = {
    kilometragem_prevista?: true;
    tempo_previsto?: true;
};
export type RotasMinAggregateInputType = {
    id?: true;
    data?: true;
    tipo?: true;
    status?: true;
    motorista?: true;
    kilometragem_prevista?: true;
    tempo_previsto?: true;
};
export type RotasMaxAggregateInputType = {
    id?: true;
    data?: true;
    tipo?: true;
    status?: true;
    motorista?: true;
    kilometragem_prevista?: true;
    tempo_previsto?: true;
};
export type RotasCountAggregateInputType = {
    id?: true;
    data?: true;
    tipo?: true;
    status?: true;
    motorista?: true;
    kilometragem_prevista?: true;
    tempo_previsto?: true;
    _all?: true;
};
export type RotasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasWhereInput;
    orderBy?: Prisma.RotasOrderByWithRelationInput | Prisma.RotasOrderByWithRelationInput[];
    cursor?: Prisma.RotasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RotasCountAggregateInputType;
    _avg?: RotasAvgAggregateInputType;
    _sum?: RotasSumAggregateInputType;
    _min?: RotasMinAggregateInputType;
    _max?: RotasMaxAggregateInputType;
};
export type GetRotasAggregateType<T extends RotasAggregateArgs> = {
    [P in keyof T & keyof AggregateRotas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRotas[P]> : Prisma.GetScalarType<T[P], AggregateRotas[P]>;
};
export type RotasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasWhereInput;
    orderBy?: Prisma.RotasOrderByWithAggregationInput | Prisma.RotasOrderByWithAggregationInput[];
    by: Prisma.RotasScalarFieldEnum[] | Prisma.RotasScalarFieldEnum;
    having?: Prisma.RotasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RotasCountAggregateInputType | true;
    _avg?: RotasAvgAggregateInputType;
    _sum?: RotasSumAggregateInputType;
    _min?: RotasMinAggregateInputType;
    _max?: RotasMaxAggregateInputType;
};
export type RotasGroupByOutputType = {
    id: string;
    data: Date;
    tipo: string;
    status: string;
    motorista: string | null;
    kilometragem_prevista: number | null;
    tempo_previsto: number | null;
    _count: RotasCountAggregateOutputType | null;
    _avg: RotasAvgAggregateOutputType | null;
    _sum: RotasSumAggregateOutputType | null;
    _min: RotasMinAggregateOutputType | null;
    _max: RotasMaxAggregateOutputType | null;
};
type GetRotasGroupByPayload<T extends RotasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RotasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RotasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RotasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RotasGroupByOutputType[P]>;
}>>;
export type RotasWhereInput = {
    AND?: Prisma.RotasWhereInput | Prisma.RotasWhereInput[];
    OR?: Prisma.RotasWhereInput[];
    NOT?: Prisma.RotasWhereInput | Prisma.RotasWhereInput[];
    id?: Prisma.StringFilter<"Rotas"> | string;
    data?: Prisma.DateTimeFilter<"Rotas"> | Date | string;
    tipo?: Prisma.StringFilter<"Rotas"> | string;
    status?: Prisma.StringFilter<"Rotas"> | string;
    motorista?: Prisma.StringNullableFilter<"Rotas"> | string | null;
    kilometragem_prevista?: Prisma.FloatNullableFilter<"Rotas"> | number | null;
    tempo_previsto?: Prisma.IntNullableFilter<"Rotas"> | number | null;
    paradas?: Prisma.RotasParadasListRelationFilter;
};
export type RotasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motorista?: Prisma.SortOrderInput | Prisma.SortOrder;
    kilometragem_prevista?: Prisma.SortOrderInput | Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrderInput | Prisma.SortOrder;
    paradas?: Prisma.RotasParadasOrderByRelationAggregateInput;
};
export type RotasWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RotasWhereInput | Prisma.RotasWhereInput[];
    OR?: Prisma.RotasWhereInput[];
    NOT?: Prisma.RotasWhereInput | Prisma.RotasWhereInput[];
    data?: Prisma.DateTimeFilter<"Rotas"> | Date | string;
    tipo?: Prisma.StringFilter<"Rotas"> | string;
    status?: Prisma.StringFilter<"Rotas"> | string;
    motorista?: Prisma.StringNullableFilter<"Rotas"> | string | null;
    kilometragem_prevista?: Prisma.FloatNullableFilter<"Rotas"> | number | null;
    tempo_previsto?: Prisma.IntNullableFilter<"Rotas"> | number | null;
    paradas?: Prisma.RotasParadasListRelationFilter;
}, "id">;
export type RotasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motorista?: Prisma.SortOrderInput | Prisma.SortOrder;
    kilometragem_prevista?: Prisma.SortOrderInput | Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RotasCountOrderByAggregateInput;
    _avg?: Prisma.RotasAvgOrderByAggregateInput;
    _max?: Prisma.RotasMaxOrderByAggregateInput;
    _min?: Prisma.RotasMinOrderByAggregateInput;
    _sum?: Prisma.RotasSumOrderByAggregateInput;
};
export type RotasScalarWhereWithAggregatesInput = {
    AND?: Prisma.RotasScalarWhereWithAggregatesInput | Prisma.RotasScalarWhereWithAggregatesInput[];
    OR?: Prisma.RotasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RotasScalarWhereWithAggregatesInput | Prisma.RotasScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rotas"> | string;
    data?: Prisma.DateTimeWithAggregatesFilter<"Rotas"> | Date | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Rotas"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Rotas"> | string;
    motorista?: Prisma.StringNullableWithAggregatesFilter<"Rotas"> | string | null;
    kilometragem_prevista?: Prisma.FloatNullableWithAggregatesFilter<"Rotas"> | number | null;
    tempo_previsto?: Prisma.IntNullableWithAggregatesFilter<"Rotas"> | number | null;
};
export type RotasCreateInput = {
    id?: string;
    data: Date | string;
    tipo: string;
    status?: string;
    motorista?: string | null;
    kilometragem_prevista?: number | null;
    tempo_previsto?: number | null;
    paradas?: Prisma.RotasParadasCreateNestedManyWithoutRotaInput;
};
export type RotasUncheckedCreateInput = {
    id?: string;
    data: Date | string;
    tipo: string;
    status?: string;
    motorista?: string | null;
    kilometragem_prevista?: number | null;
    tempo_previsto?: number | null;
    paradas?: Prisma.RotasParadasUncheckedCreateNestedManyWithoutRotaInput;
};
export type RotasUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motorista?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kilometragem_prevista?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tempo_previsto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    paradas?: Prisma.RotasParadasUpdateManyWithoutRotaNestedInput;
};
export type RotasUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motorista?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kilometragem_prevista?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tempo_previsto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    paradas?: Prisma.RotasParadasUncheckedUpdateManyWithoutRotaNestedInput;
};
export type RotasCreateManyInput = {
    id?: string;
    data: Date | string;
    tipo: string;
    status?: string;
    motorista?: string | null;
    kilometragem_prevista?: number | null;
    tempo_previsto?: number | null;
};
export type RotasUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motorista?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kilometragem_prevista?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tempo_previsto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type RotasUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motorista?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kilometragem_prevista?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tempo_previsto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type RotasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motorista?: Prisma.SortOrder;
    kilometragem_prevista?: Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrder;
};
export type RotasAvgOrderByAggregateInput = {
    kilometragem_prevista?: Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrder;
};
export type RotasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motorista?: Prisma.SortOrder;
    kilometragem_prevista?: Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrder;
};
export type RotasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motorista?: Prisma.SortOrder;
    kilometragem_prevista?: Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrder;
};
export type RotasSumOrderByAggregateInput = {
    kilometragem_prevista?: Prisma.SortOrder;
    tempo_previsto?: Prisma.SortOrder;
};
export type RotasScalarRelationFilter = {
    is?: Prisma.RotasWhereInput;
    isNot?: Prisma.RotasWhereInput;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RotasCreateNestedOneWithoutParadasInput = {
    create?: Prisma.XOR<Prisma.RotasCreateWithoutParadasInput, Prisma.RotasUncheckedCreateWithoutParadasInput>;
    connectOrCreate?: Prisma.RotasCreateOrConnectWithoutParadasInput;
    connect?: Prisma.RotasWhereUniqueInput;
};
export type RotasUpdateOneRequiredWithoutParadasNestedInput = {
    create?: Prisma.XOR<Prisma.RotasCreateWithoutParadasInput, Prisma.RotasUncheckedCreateWithoutParadasInput>;
    connectOrCreate?: Prisma.RotasCreateOrConnectWithoutParadasInput;
    upsert?: Prisma.RotasUpsertWithoutParadasInput;
    connect?: Prisma.RotasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RotasUpdateToOneWithWhereWithoutParadasInput, Prisma.RotasUpdateWithoutParadasInput>, Prisma.RotasUncheckedUpdateWithoutParadasInput>;
};
export type RotasCreateWithoutParadasInput = {
    id?: string;
    data: Date | string;
    tipo: string;
    status?: string;
    motorista?: string | null;
    kilometragem_prevista?: number | null;
    tempo_previsto?: number | null;
};
export type RotasUncheckedCreateWithoutParadasInput = {
    id?: string;
    data: Date | string;
    tipo: string;
    status?: string;
    motorista?: string | null;
    kilometragem_prevista?: number | null;
    tempo_previsto?: number | null;
};
export type RotasCreateOrConnectWithoutParadasInput = {
    where: Prisma.RotasWhereUniqueInput;
    create: Prisma.XOR<Prisma.RotasCreateWithoutParadasInput, Prisma.RotasUncheckedCreateWithoutParadasInput>;
};
export type RotasUpsertWithoutParadasInput = {
    update: Prisma.XOR<Prisma.RotasUpdateWithoutParadasInput, Prisma.RotasUncheckedUpdateWithoutParadasInput>;
    create: Prisma.XOR<Prisma.RotasCreateWithoutParadasInput, Prisma.RotasUncheckedCreateWithoutParadasInput>;
    where?: Prisma.RotasWhereInput;
};
export type RotasUpdateToOneWithWhereWithoutParadasInput = {
    where?: Prisma.RotasWhereInput;
    data: Prisma.XOR<Prisma.RotasUpdateWithoutParadasInput, Prisma.RotasUncheckedUpdateWithoutParadasInput>;
};
export type RotasUpdateWithoutParadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motorista?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kilometragem_prevista?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tempo_previsto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type RotasUncheckedUpdateWithoutParadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motorista?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kilometragem_prevista?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tempo_previsto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type RotasCountOutputType = {
    paradas: number;
};
export type RotasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paradas?: boolean | RotasCountOutputTypeCountParadasArgs;
};
export type RotasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasCountOutputTypeSelect<ExtArgs> | null;
};
export type RotasCountOutputTypeCountParadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasParadasWhereInput;
};
export type RotasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    tipo?: boolean;
    status?: boolean;
    motorista?: boolean;
    kilometragem_prevista?: boolean;
    tempo_previsto?: boolean;
    paradas?: boolean | Prisma.Rotas$paradasArgs<ExtArgs>;
    _count?: boolean | Prisma.RotasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rotas"]>;
export type RotasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    tipo?: boolean;
    status?: boolean;
    motorista?: boolean;
    kilometragem_prevista?: boolean;
    tempo_previsto?: boolean;
}, ExtArgs["result"]["rotas"]>;
export type RotasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    data?: boolean;
    tipo?: boolean;
    status?: boolean;
    motorista?: boolean;
    kilometragem_prevista?: boolean;
    tempo_previsto?: boolean;
}, ExtArgs["result"]["rotas"]>;
export type RotasSelectScalar = {
    id?: boolean;
    data?: boolean;
    tipo?: boolean;
    status?: boolean;
    motorista?: boolean;
    kilometragem_prevista?: boolean;
    tempo_previsto?: boolean;
};
export type RotasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "data" | "tipo" | "status" | "motorista" | "kilometragem_prevista" | "tempo_previsto", ExtArgs["result"]["rotas"]>;
export type RotasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paradas?: boolean | Prisma.Rotas$paradasArgs<ExtArgs>;
    _count?: boolean | Prisma.RotasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RotasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RotasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RotasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rotas";
    objects: {
        paradas: Prisma.$RotasParadasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        data: Date;
        tipo: string;
        status: string;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }, ExtArgs["result"]["rotas"]>;
    composites: {};
};
export type RotasGetPayload<S extends boolean | null | undefined | RotasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RotasPayload, S>;
export type RotasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RotasCountAggregateInputType | true;
};
export interface RotasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rotas'];
        meta: {
            name: 'Rotas';
        };
    };
    findUnique<T extends RotasFindUniqueArgs>(args: Prisma.SelectSubset<T, RotasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RotasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RotasFindFirstArgs>(args?: Prisma.SelectSubset<T, RotasFindFirstArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RotasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RotasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RotasFindManyArgs>(args?: Prisma.SelectSubset<T, RotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RotasCreateArgs>(args: Prisma.SelectSubset<T, RotasCreateArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RotasCreateManyArgs>(args?: Prisma.SelectSubset<T, RotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RotasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RotasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RotasDeleteArgs>(args: Prisma.SelectSubset<T, RotasDeleteArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RotasUpdateArgs>(args: Prisma.SelectSubset<T, RotasUpdateArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RotasDeleteManyArgs>(args?: Prisma.SelectSubset<T, RotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RotasUpdateManyArgs>(args: Prisma.SelectSubset<T, RotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RotasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RotasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RotasUpsertArgs>(args: Prisma.SelectSubset<T, RotasUpsertArgs<ExtArgs>>): Prisma.Prisma__RotasClient<runtime.Types.Result.GetResult<Prisma.$RotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RotasCountArgs>(args?: Prisma.Subset<T, RotasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RotasCountAggregateOutputType> : number>;
    aggregate<T extends RotasAggregateArgs>(args: Prisma.Subset<T, RotasAggregateArgs>): Prisma.PrismaPromise<GetRotasAggregateType<T>>;
    groupBy<T extends RotasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RotasGroupByArgs['orderBy'];
    } : {
        orderBy?: RotasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RotasFieldRefs;
}
export interface Prisma__RotasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    paradas<T extends Prisma.Rotas$paradasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rotas$paradasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RotasParadasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RotasFieldRefs {
    readonly id: Prisma.FieldRef<"Rotas", 'String'>;
    readonly data: Prisma.FieldRef<"Rotas", 'DateTime'>;
    readonly tipo: Prisma.FieldRef<"Rotas", 'String'>;
    readonly status: Prisma.FieldRef<"Rotas", 'String'>;
    readonly motorista: Prisma.FieldRef<"Rotas", 'String'>;
    readonly kilometragem_prevista: Prisma.FieldRef<"Rotas", 'Float'>;
    readonly tempo_previsto: Prisma.FieldRef<"Rotas", 'Int'>;
}
export type RotasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where: Prisma.RotasWhereUniqueInput;
};
export type RotasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where: Prisma.RotasWhereUniqueInput;
};
export type RotasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where?: Prisma.RotasWhereInput;
    orderBy?: Prisma.RotasOrderByWithRelationInput | Prisma.RotasOrderByWithRelationInput[];
    cursor?: Prisma.RotasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RotasScalarFieldEnum | Prisma.RotasScalarFieldEnum[];
};
export type RotasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where?: Prisma.RotasWhereInput;
    orderBy?: Prisma.RotasOrderByWithRelationInput | Prisma.RotasOrderByWithRelationInput[];
    cursor?: Prisma.RotasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RotasScalarFieldEnum | Prisma.RotasScalarFieldEnum[];
};
export type RotasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where?: Prisma.RotasWhereInput;
    orderBy?: Prisma.RotasOrderByWithRelationInput | Prisma.RotasOrderByWithRelationInput[];
    cursor?: Prisma.RotasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RotasScalarFieldEnum | Prisma.RotasScalarFieldEnum[];
};
export type RotasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RotasCreateInput, Prisma.RotasUncheckedCreateInput>;
};
export type RotasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RotasCreateManyInput | Prisma.RotasCreateManyInput[];
};
export type RotasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    data: Prisma.RotasCreateManyInput | Prisma.RotasCreateManyInput[];
};
export type RotasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RotasUpdateInput, Prisma.RotasUncheckedUpdateInput>;
    where: Prisma.RotasWhereUniqueInput;
};
export type RotasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RotasUpdateManyMutationInput, Prisma.RotasUncheckedUpdateManyInput>;
    where?: Prisma.RotasWhereInput;
    limit?: number;
};
export type RotasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RotasUpdateManyMutationInput, Prisma.RotasUncheckedUpdateManyInput>;
    where?: Prisma.RotasWhereInput;
    limit?: number;
};
export type RotasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where: Prisma.RotasWhereUniqueInput;
    create: Prisma.XOR<Prisma.RotasCreateInput, Prisma.RotasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RotasUpdateInput, Prisma.RotasUncheckedUpdateInput>;
};
export type RotasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
    where: Prisma.RotasWhereUniqueInput;
};
export type RotasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RotasWhereInput;
    limit?: number;
};
export type Rotas$paradasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RotasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RotasSelect<ExtArgs> | null;
    omit?: Prisma.RotasOmit<ExtArgs> | null;
    include?: Prisma.RotasInclude<ExtArgs> | null;
};
export {};
