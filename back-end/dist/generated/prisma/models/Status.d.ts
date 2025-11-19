import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StatusModel = runtime.Types.Result.DefaultSelection<Prisma.$StatusPayload>;
export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null;
    _min: StatusMinAggregateOutputType | null;
    _max: StatusMaxAggregateOutputType | null;
};
export type StatusMinAggregateOutputType = {
    id: string | null;
    ordem_id: string | null;
    status: string | null;
    timestamp: Date | null;
};
export type StatusMaxAggregateOutputType = {
    id: string | null;
    ordem_id: string | null;
    status: string | null;
    timestamp: Date | null;
};
export type StatusCountAggregateOutputType = {
    id: number;
    ordem_id: number;
    status: number;
    timestamp: number;
    _all: number;
};
export type StatusMinAggregateInputType = {
    id?: true;
    ordem_id?: true;
    status?: true;
    timestamp?: true;
};
export type StatusMaxAggregateInputType = {
    id?: true;
    ordem_id?: true;
    status?: true;
    timestamp?: true;
};
export type StatusCountAggregateInputType = {
    id?: true;
    ordem_id?: true;
    status?: true;
    timestamp?: true;
    _all?: true;
};
export type StatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatusWhereInput;
    orderBy?: Prisma.StatusOrderByWithRelationInput | Prisma.StatusOrderByWithRelationInput[];
    cursor?: Prisma.StatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StatusCountAggregateInputType;
    _min?: StatusMinAggregateInputType;
    _max?: StatusMaxAggregateInputType;
};
export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
    [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStatus[P]> : Prisma.GetScalarType<T[P], AggregateStatus[P]>;
};
export type StatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatusWhereInput;
    orderBy?: Prisma.StatusOrderByWithAggregationInput | Prisma.StatusOrderByWithAggregationInput[];
    by: Prisma.StatusScalarFieldEnum[] | Prisma.StatusScalarFieldEnum;
    having?: Prisma.StatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatusCountAggregateInputType | true;
    _min?: StatusMinAggregateInputType;
    _max?: StatusMaxAggregateInputType;
};
export type StatusGroupByOutputType = {
    id: string;
    ordem_id: string;
    status: string;
    timestamp: Date;
    _count: StatusCountAggregateOutputType | null;
    _min: StatusMinAggregateOutputType | null;
    _max: StatusMaxAggregateOutputType | null;
};
type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatusGroupByOutputType[P]>;
}>>;
export type StatusWhereInput = {
    AND?: Prisma.StatusWhereInput | Prisma.StatusWhereInput[];
    OR?: Prisma.StatusWhereInput[];
    NOT?: Prisma.StatusWhereInput | Prisma.StatusWhereInput[];
    id?: Prisma.StringFilter<"Status"> | string;
    ordem_id?: Prisma.StringFilter<"Status"> | string;
    status?: Prisma.StringFilter<"Status"> | string;
    timestamp?: Prisma.DateTimeFilter<"Status"> | Date | string;
    ordem?: Prisma.XOR<Prisma.OrdensServicosScalarRelationFilter, Prisma.OrdensServicosWhereInput>;
};
export type StatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    ordem?: Prisma.OrdensServicosOrderByWithRelationInput;
};
export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StatusWhereInput | Prisma.StatusWhereInput[];
    OR?: Prisma.StatusWhereInput[];
    NOT?: Prisma.StatusWhereInput | Prisma.StatusWhereInput[];
    ordem_id?: Prisma.StringFilter<"Status"> | string;
    status?: Prisma.StringFilter<"Status"> | string;
    timestamp?: Prisma.DateTimeFilter<"Status"> | Date | string;
    ordem?: Prisma.XOR<Prisma.OrdensServicosScalarRelationFilter, Prisma.OrdensServicosWhereInput>;
}, "id">;
export type StatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    _count?: Prisma.StatusCountOrderByAggregateInput;
    _max?: Prisma.StatusMaxOrderByAggregateInput;
    _min?: Prisma.StatusMinOrderByAggregateInput;
};
export type StatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatusScalarWhereWithAggregatesInput | Prisma.StatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatusScalarWhereWithAggregatesInput | Prisma.StatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Status"> | string;
    ordem_id?: Prisma.StringWithAggregatesFilter<"Status"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Status"> | string;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"Status"> | Date | string;
};
export type StatusCreateInput = {
    id?: string;
    status: string;
    timestamp?: Date | string;
    ordem: Prisma.OrdensServicosCreateNestedOneWithoutStatusesInput;
};
export type StatusUncheckedCreateInput = {
    id?: string;
    ordem_id: string;
    status: string;
    timestamp?: Date | string;
};
export type StatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordem?: Prisma.OrdensServicosUpdateOneRequiredWithoutStatusesNestedInput;
};
export type StatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusCreateManyInput = {
    id?: string;
    ordem_id: string;
    status: string;
    timestamp?: Date | string;
};
export type StatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusListRelationFilter = {
    every?: Prisma.StatusWhereInput;
    some?: Prisma.StatusWhereInput;
    none?: Prisma.StatusWhereInput;
};
export type StatusOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type StatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type StatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordem_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type StatusCreateNestedManyWithoutOrdemInput = {
    create?: Prisma.XOR<Prisma.StatusCreateWithoutOrdemInput, Prisma.StatusUncheckedCreateWithoutOrdemInput> | Prisma.StatusCreateWithoutOrdemInput[] | Prisma.StatusUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.StatusCreateOrConnectWithoutOrdemInput | Prisma.StatusCreateOrConnectWithoutOrdemInput[];
    createMany?: Prisma.StatusCreateManyOrdemInputEnvelope;
    connect?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
};
export type StatusUncheckedCreateNestedManyWithoutOrdemInput = {
    create?: Prisma.XOR<Prisma.StatusCreateWithoutOrdemInput, Prisma.StatusUncheckedCreateWithoutOrdemInput> | Prisma.StatusCreateWithoutOrdemInput[] | Prisma.StatusUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.StatusCreateOrConnectWithoutOrdemInput | Prisma.StatusCreateOrConnectWithoutOrdemInput[];
    createMany?: Prisma.StatusCreateManyOrdemInputEnvelope;
    connect?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
};
export type StatusUpdateManyWithoutOrdemNestedInput = {
    create?: Prisma.XOR<Prisma.StatusCreateWithoutOrdemInput, Prisma.StatusUncheckedCreateWithoutOrdemInput> | Prisma.StatusCreateWithoutOrdemInput[] | Prisma.StatusUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.StatusCreateOrConnectWithoutOrdemInput | Prisma.StatusCreateOrConnectWithoutOrdemInput[];
    upsert?: Prisma.StatusUpsertWithWhereUniqueWithoutOrdemInput | Prisma.StatusUpsertWithWhereUniqueWithoutOrdemInput[];
    createMany?: Prisma.StatusCreateManyOrdemInputEnvelope;
    set?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    disconnect?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    delete?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    connect?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    update?: Prisma.StatusUpdateWithWhereUniqueWithoutOrdemInput | Prisma.StatusUpdateWithWhereUniqueWithoutOrdemInput[];
    updateMany?: Prisma.StatusUpdateManyWithWhereWithoutOrdemInput | Prisma.StatusUpdateManyWithWhereWithoutOrdemInput[];
    deleteMany?: Prisma.StatusScalarWhereInput | Prisma.StatusScalarWhereInput[];
};
export type StatusUncheckedUpdateManyWithoutOrdemNestedInput = {
    create?: Prisma.XOR<Prisma.StatusCreateWithoutOrdemInput, Prisma.StatusUncheckedCreateWithoutOrdemInput> | Prisma.StatusCreateWithoutOrdemInput[] | Prisma.StatusUncheckedCreateWithoutOrdemInput[];
    connectOrCreate?: Prisma.StatusCreateOrConnectWithoutOrdemInput | Prisma.StatusCreateOrConnectWithoutOrdemInput[];
    upsert?: Prisma.StatusUpsertWithWhereUniqueWithoutOrdemInput | Prisma.StatusUpsertWithWhereUniqueWithoutOrdemInput[];
    createMany?: Prisma.StatusCreateManyOrdemInputEnvelope;
    set?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    disconnect?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    delete?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    connect?: Prisma.StatusWhereUniqueInput | Prisma.StatusWhereUniqueInput[];
    update?: Prisma.StatusUpdateWithWhereUniqueWithoutOrdemInput | Prisma.StatusUpdateWithWhereUniqueWithoutOrdemInput[];
    updateMany?: Prisma.StatusUpdateManyWithWhereWithoutOrdemInput | Prisma.StatusUpdateManyWithWhereWithoutOrdemInput[];
    deleteMany?: Prisma.StatusScalarWhereInput | Prisma.StatusScalarWhereInput[];
};
export type StatusCreateWithoutOrdemInput = {
    id?: string;
    status: string;
    timestamp?: Date | string;
};
export type StatusUncheckedCreateWithoutOrdemInput = {
    id?: string;
    status: string;
    timestamp?: Date | string;
};
export type StatusCreateOrConnectWithoutOrdemInput = {
    where: Prisma.StatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatusCreateWithoutOrdemInput, Prisma.StatusUncheckedCreateWithoutOrdemInput>;
};
export type StatusCreateManyOrdemInputEnvelope = {
    data: Prisma.StatusCreateManyOrdemInput | Prisma.StatusCreateManyOrdemInput[];
};
export type StatusUpsertWithWhereUniqueWithoutOrdemInput = {
    where: Prisma.StatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.StatusUpdateWithoutOrdemInput, Prisma.StatusUncheckedUpdateWithoutOrdemInput>;
    create: Prisma.XOR<Prisma.StatusCreateWithoutOrdemInput, Prisma.StatusUncheckedCreateWithoutOrdemInput>;
};
export type StatusUpdateWithWhereUniqueWithoutOrdemInput = {
    where: Prisma.StatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.StatusUpdateWithoutOrdemInput, Prisma.StatusUncheckedUpdateWithoutOrdemInput>;
};
export type StatusUpdateManyWithWhereWithoutOrdemInput = {
    where: Prisma.StatusScalarWhereInput;
    data: Prisma.XOR<Prisma.StatusUpdateManyMutationInput, Prisma.StatusUncheckedUpdateManyWithoutOrdemInput>;
};
export type StatusScalarWhereInput = {
    AND?: Prisma.StatusScalarWhereInput | Prisma.StatusScalarWhereInput[];
    OR?: Prisma.StatusScalarWhereInput[];
    NOT?: Prisma.StatusScalarWhereInput | Prisma.StatusScalarWhereInput[];
    id?: Prisma.StringFilter<"Status"> | string;
    ordem_id?: Prisma.StringFilter<"Status"> | string;
    status?: Prisma.StringFilter<"Status"> | string;
    timestamp?: Prisma.DateTimeFilter<"Status"> | Date | string;
};
export type StatusCreateManyOrdemInput = {
    id?: string;
    status: string;
    timestamp?: Date | string;
};
export type StatusUpdateWithoutOrdemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusUncheckedUpdateWithoutOrdemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusUncheckedUpdateManyWithoutOrdemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordem_id?: boolean;
    status?: boolean;
    timestamp?: boolean;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["status"]>;
export type StatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordem_id?: boolean;
    status?: boolean;
    timestamp?: boolean;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["status"]>;
export type StatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordem_id?: boolean;
    status?: boolean;
    timestamp?: boolean;
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["status"]>;
export type StatusSelectScalar = {
    id?: boolean;
    ordem_id?: boolean;
    status?: boolean;
    timestamp?: boolean;
};
export type StatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordem_id" | "status" | "timestamp", ExtArgs["result"]["status"]>;
export type StatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
};
export type StatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
};
export type StatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordem?: boolean | Prisma.OrdensServicosDefaultArgs<ExtArgs>;
};
export type $StatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Status";
    objects: {
        ordem: Prisma.$OrdensServicosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ordem_id: string;
        status: string;
        timestamp: Date;
    }, ExtArgs["result"]["status"]>;
    composites: {};
};
export type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatusPayload, S>;
export type StatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatusCountAggregateInputType | true;
};
export interface StatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Status'];
        meta: {
            name: 'Status';
        };
    };
    findUnique<T extends StatusFindUniqueArgs>(args: Prisma.SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StatusFindFirstArgs>(args?: Prisma.SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StatusFindManyArgs>(args?: Prisma.SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StatusCreateArgs>(args: Prisma.SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StatusCreateManyArgs>(args?: Prisma.SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StatusDeleteArgs>(args: Prisma.SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StatusUpdateArgs>(args: Prisma.SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StatusUpdateManyArgs>(args: Prisma.SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StatusUpsertArgs>(args: Prisma.SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma.Prisma__StatusClient<runtime.Types.Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StatusCountArgs>(args?: Prisma.Subset<T, StatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatusCountAggregateOutputType> : number>;
    aggregate<T extends StatusAggregateArgs>(args: Prisma.Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>;
    groupBy<T extends StatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatusGroupByArgs['orderBy'];
    } : {
        orderBy?: StatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StatusFieldRefs;
}
export interface Prisma__StatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordem<T extends Prisma.OrdensServicosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdensServicosDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdensServicosClient<runtime.Types.Result.GetResult<Prisma.$OrdensServicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StatusFieldRefs {
    readonly id: Prisma.FieldRef<"Status", 'String'>;
    readonly ordem_id: Prisma.FieldRef<"Status", 'String'>;
    readonly status: Prisma.FieldRef<"Status", 'String'>;
    readonly timestamp: Prisma.FieldRef<"Status", 'DateTime'>;
}
export type StatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    where: Prisma.StatusWhereUniqueInput;
};
export type StatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    where: Prisma.StatusWhereUniqueInput;
};
export type StatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatusCreateInput, Prisma.StatusUncheckedCreateInput>;
};
export type StatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StatusCreateManyInput | Prisma.StatusCreateManyInput[];
};
export type StatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    data: Prisma.StatusCreateManyInput | Prisma.StatusCreateManyInput[];
    include?: Prisma.StatusIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatusUpdateInput, Prisma.StatusUncheckedUpdateInput>;
    where: Prisma.StatusWhereUniqueInput;
};
export type StatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StatusUpdateManyMutationInput, Prisma.StatusUncheckedUpdateManyInput>;
    where?: Prisma.StatusWhereInput;
    limit?: number;
};
export type StatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatusUpdateManyMutationInput, Prisma.StatusUncheckedUpdateManyInput>;
    where?: Prisma.StatusWhereInput;
    limit?: number;
    include?: Prisma.StatusIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    where: Prisma.StatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatusCreateInput, Prisma.StatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StatusUpdateInput, Prisma.StatusUncheckedUpdateInput>;
};
export type StatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
    where: Prisma.StatusWhereUniqueInput;
};
export type StatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatusWhereInput;
    limit?: number;
};
export type StatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatusSelect<ExtArgs> | null;
    omit?: Prisma.StatusOmit<ExtArgs> | null;
    include?: Prisma.StatusInclude<ExtArgs> | null;
};
export {};
