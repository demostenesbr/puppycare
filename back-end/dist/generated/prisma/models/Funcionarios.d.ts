import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FuncionariosModel = runtime.Types.Result.DefaultSelection<Prisma.$FuncionariosPayload>;
export type AggregateFuncionarios = {
    _count: FuncionariosCountAggregateOutputType | null;
    _min: FuncionariosMinAggregateOutputType | null;
    _max: FuncionariosMaxAggregateOutputType | null;
};
export type FuncionariosMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    cargo: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FuncionariosMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    cargo: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FuncionariosCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    telefone: number;
    cargo: number;
    ativo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FuncionariosMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    cargo?: true;
    ativo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FuncionariosMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    cargo?: true;
    ativo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FuncionariosCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    cargo?: true;
    ativo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FuncionariosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuncionariosWhereInput;
    orderBy?: Prisma.FuncionariosOrderByWithRelationInput | Prisma.FuncionariosOrderByWithRelationInput[];
    cursor?: Prisma.FuncionariosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FuncionariosCountAggregateInputType;
    _min?: FuncionariosMinAggregateInputType;
    _max?: FuncionariosMaxAggregateInputType;
};
export type GetFuncionariosAggregateType<T extends FuncionariosAggregateArgs> = {
    [P in keyof T & keyof AggregateFuncionarios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFuncionarios[P]> : Prisma.GetScalarType<T[P], AggregateFuncionarios[P]>;
};
export type FuncionariosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuncionariosWhereInput;
    orderBy?: Prisma.FuncionariosOrderByWithAggregationInput | Prisma.FuncionariosOrderByWithAggregationInput[];
    by: Prisma.FuncionariosScalarFieldEnum[] | Prisma.FuncionariosScalarFieldEnum;
    having?: Prisma.FuncionariosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FuncionariosCountAggregateInputType | true;
    _min?: FuncionariosMinAggregateInputType;
    _max?: FuncionariosMaxAggregateInputType;
};
export type FuncionariosGroupByOutputType = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    ativo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: FuncionariosCountAggregateOutputType | null;
    _min: FuncionariosMinAggregateOutputType | null;
    _max: FuncionariosMaxAggregateOutputType | null;
};
type GetFuncionariosGroupByPayload<T extends FuncionariosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FuncionariosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FuncionariosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FuncionariosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FuncionariosGroupByOutputType[P]>;
}>>;
export type FuncionariosWhereInput = {
    AND?: Prisma.FuncionariosWhereInput | Prisma.FuncionariosWhereInput[];
    OR?: Prisma.FuncionariosWhereInput[];
    NOT?: Prisma.FuncionariosWhereInput | Prisma.FuncionariosWhereInput[];
    id?: Prisma.StringFilter<"Funcionarios"> | string;
    nome?: Prisma.StringFilter<"Funcionarios"> | string;
    email?: Prisma.StringFilter<"Funcionarios"> | string;
    telefone?: Prisma.StringFilter<"Funcionarios"> | string;
    cargo?: Prisma.StringFilter<"Funcionarios"> | string;
    ativo?: Prisma.BoolFilter<"Funcionarios"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Funcionarios"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Funcionarios"> | Date | string;
};
export type FuncionariosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuncionariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.FuncionariosWhereInput | Prisma.FuncionariosWhereInput[];
    OR?: Prisma.FuncionariosWhereInput[];
    NOT?: Prisma.FuncionariosWhereInput | Prisma.FuncionariosWhereInput[];
    nome?: Prisma.StringFilter<"Funcionarios"> | string;
    telefone?: Prisma.StringFilter<"Funcionarios"> | string;
    cargo?: Prisma.StringFilter<"Funcionarios"> | string;
    ativo?: Prisma.BoolFilter<"Funcionarios"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Funcionarios"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Funcionarios"> | Date | string;
}, "id" | "email">;
export type FuncionariosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FuncionariosCountOrderByAggregateInput;
    _max?: Prisma.FuncionariosMaxOrderByAggregateInput;
    _min?: Prisma.FuncionariosMinOrderByAggregateInput;
};
export type FuncionariosScalarWhereWithAggregatesInput = {
    AND?: Prisma.FuncionariosScalarWhereWithAggregatesInput | Prisma.FuncionariosScalarWhereWithAggregatesInput[];
    OR?: Prisma.FuncionariosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FuncionariosScalarWhereWithAggregatesInput | Prisma.FuncionariosScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Funcionarios"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Funcionarios"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Funcionarios"> | string;
    telefone?: Prisma.StringWithAggregatesFilter<"Funcionarios"> | string;
    cargo?: Prisma.StringWithAggregatesFilter<"Funcionarios"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"Funcionarios"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Funcionarios"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Funcionarios"> | Date | string;
};
export type FuncionariosCreateInput = {
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    ativo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FuncionariosUncheckedCreateInput = {
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    ativo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FuncionariosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FuncionariosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FuncionariosCreateManyInput = {
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    ativo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FuncionariosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FuncionariosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FuncionariosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuncionariosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuncionariosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuncionariosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cargo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["funcionarios"]>;
export type FuncionariosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cargo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["funcionarios"]>;
export type FuncionariosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cargo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["funcionarios"]>;
export type FuncionariosSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    cargo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FuncionariosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "cargo" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["funcionarios"]>;
export type $FuncionariosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Funcionarios";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        ativo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["funcionarios"]>;
    composites: {};
};
export type FuncionariosGetPayload<S extends boolean | null | undefined | FuncionariosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload, S>;
export type FuncionariosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FuncionariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FuncionariosCountAggregateInputType | true;
};
export interface FuncionariosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Funcionarios'];
        meta: {
            name: 'Funcionarios';
        };
    };
    findUnique<T extends FuncionariosFindUniqueArgs>(args: Prisma.SelectSubset<T, FuncionariosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FuncionariosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FuncionariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FuncionariosFindFirstArgs>(args?: Prisma.SelectSubset<T, FuncionariosFindFirstArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FuncionariosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FuncionariosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FuncionariosFindManyArgs>(args?: Prisma.SelectSubset<T, FuncionariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FuncionariosCreateArgs>(args: Prisma.SelectSubset<T, FuncionariosCreateArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FuncionariosCreateManyArgs>(args?: Prisma.SelectSubset<T, FuncionariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FuncionariosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FuncionariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FuncionariosDeleteArgs>(args: Prisma.SelectSubset<T, FuncionariosDeleteArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FuncionariosUpdateArgs>(args: Prisma.SelectSubset<T, FuncionariosUpdateArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FuncionariosDeleteManyArgs>(args?: Prisma.SelectSubset<T, FuncionariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FuncionariosUpdateManyArgs>(args: Prisma.SelectSubset<T, FuncionariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FuncionariosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FuncionariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FuncionariosUpsertArgs>(args: Prisma.SelectSubset<T, FuncionariosUpsertArgs<ExtArgs>>): Prisma.Prisma__FuncionariosClient<runtime.Types.Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FuncionariosCountArgs>(args?: Prisma.Subset<T, FuncionariosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FuncionariosCountAggregateOutputType> : number>;
    aggregate<T extends FuncionariosAggregateArgs>(args: Prisma.Subset<T, FuncionariosAggregateArgs>): Prisma.PrismaPromise<GetFuncionariosAggregateType<T>>;
    groupBy<T extends FuncionariosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FuncionariosGroupByArgs['orderBy'];
    } : {
        orderBy?: FuncionariosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FuncionariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FuncionariosFieldRefs;
}
export interface Prisma__FuncionariosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FuncionariosFieldRefs {
    readonly id: Prisma.FieldRef<"Funcionarios", 'String'>;
    readonly nome: Prisma.FieldRef<"Funcionarios", 'String'>;
    readonly email: Prisma.FieldRef<"Funcionarios", 'String'>;
    readonly telefone: Prisma.FieldRef<"Funcionarios", 'String'>;
    readonly cargo: Prisma.FieldRef<"Funcionarios", 'String'>;
    readonly ativo: Prisma.FieldRef<"Funcionarios", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Funcionarios", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Funcionarios", 'DateTime'>;
}
export type FuncionariosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where: Prisma.FuncionariosWhereUniqueInput;
};
export type FuncionariosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where: Prisma.FuncionariosWhereUniqueInput;
};
export type FuncionariosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where?: Prisma.FuncionariosWhereInput;
    orderBy?: Prisma.FuncionariosOrderByWithRelationInput | Prisma.FuncionariosOrderByWithRelationInput[];
    cursor?: Prisma.FuncionariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuncionariosScalarFieldEnum | Prisma.FuncionariosScalarFieldEnum[];
};
export type FuncionariosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where?: Prisma.FuncionariosWhereInput;
    orderBy?: Prisma.FuncionariosOrderByWithRelationInput | Prisma.FuncionariosOrderByWithRelationInput[];
    cursor?: Prisma.FuncionariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuncionariosScalarFieldEnum | Prisma.FuncionariosScalarFieldEnum[];
};
export type FuncionariosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where?: Prisma.FuncionariosWhereInput;
    orderBy?: Prisma.FuncionariosOrderByWithRelationInput | Prisma.FuncionariosOrderByWithRelationInput[];
    cursor?: Prisma.FuncionariosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuncionariosScalarFieldEnum | Prisma.FuncionariosScalarFieldEnum[];
};
export type FuncionariosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FuncionariosCreateInput, Prisma.FuncionariosUncheckedCreateInput>;
};
export type FuncionariosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FuncionariosCreateManyInput | Prisma.FuncionariosCreateManyInput[];
};
export type FuncionariosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    data: Prisma.FuncionariosCreateManyInput | Prisma.FuncionariosCreateManyInput[];
};
export type FuncionariosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FuncionariosUpdateInput, Prisma.FuncionariosUncheckedUpdateInput>;
    where: Prisma.FuncionariosWhereUniqueInput;
};
export type FuncionariosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FuncionariosUpdateManyMutationInput, Prisma.FuncionariosUncheckedUpdateManyInput>;
    where?: Prisma.FuncionariosWhereInput;
    limit?: number;
};
export type FuncionariosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FuncionariosUpdateManyMutationInput, Prisma.FuncionariosUncheckedUpdateManyInput>;
    where?: Prisma.FuncionariosWhereInput;
    limit?: number;
};
export type FuncionariosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where: Prisma.FuncionariosWhereUniqueInput;
    create: Prisma.XOR<Prisma.FuncionariosCreateInput, Prisma.FuncionariosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FuncionariosUpdateInput, Prisma.FuncionariosUncheckedUpdateInput>;
};
export type FuncionariosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
    where: Prisma.FuncionariosWhereUniqueInput;
};
export type FuncionariosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuncionariosWhereInput;
    limit?: number;
};
export type FuncionariosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuncionariosSelect<ExtArgs> | null;
    omit?: Prisma.FuncionariosOmit<ExtArgs> | null;
};
export {};
