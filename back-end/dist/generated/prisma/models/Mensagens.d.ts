import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MensagensModel = runtime.Types.Result.DefaultSelection<Prisma.$MensagensPayload>;
export type AggregateMensagens = {
    _count: MensagensCountAggregateOutputType | null;
    _min: MensagensMinAggregateOutputType | null;
    _max: MensagensMaxAggregateOutputType | null;
};
export type MensagensMinAggregateOutputType = {
    id: string | null;
    cliente_id: string | null;
    canal: string | null;
    template: string | null;
    conteudo: string | null;
    status: string | null;
    meta_message_id: string | null;
    erro: string | null;
    createdAt: Date | null;
};
export type MensagensMaxAggregateOutputType = {
    id: string | null;
    cliente_id: string | null;
    canal: string | null;
    template: string | null;
    conteudo: string | null;
    status: string | null;
    meta_message_id: string | null;
    erro: string | null;
    createdAt: Date | null;
};
export type MensagensCountAggregateOutputType = {
    id: number;
    cliente_id: number;
    canal: number;
    template: number;
    conteudo: number;
    status: number;
    meta_message_id: number;
    erro: number;
    createdAt: number;
    _all: number;
};
export type MensagensMinAggregateInputType = {
    id?: true;
    cliente_id?: true;
    canal?: true;
    template?: true;
    conteudo?: true;
    status?: true;
    meta_message_id?: true;
    erro?: true;
    createdAt?: true;
};
export type MensagensMaxAggregateInputType = {
    id?: true;
    cliente_id?: true;
    canal?: true;
    template?: true;
    conteudo?: true;
    status?: true;
    meta_message_id?: true;
    erro?: true;
    createdAt?: true;
};
export type MensagensCountAggregateInputType = {
    id?: true;
    cliente_id?: true;
    canal?: true;
    template?: true;
    conteudo?: true;
    status?: true;
    meta_message_id?: true;
    erro?: true;
    createdAt?: true;
    _all?: true;
};
export type MensagensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MensagensWhereInput;
    orderBy?: Prisma.MensagensOrderByWithRelationInput | Prisma.MensagensOrderByWithRelationInput[];
    cursor?: Prisma.MensagensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MensagensCountAggregateInputType;
    _min?: MensagensMinAggregateInputType;
    _max?: MensagensMaxAggregateInputType;
};
export type GetMensagensAggregateType<T extends MensagensAggregateArgs> = {
    [P in keyof T & keyof AggregateMensagens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMensagens[P]> : Prisma.GetScalarType<T[P], AggregateMensagens[P]>;
};
export type MensagensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MensagensWhereInput;
    orderBy?: Prisma.MensagensOrderByWithAggregationInput | Prisma.MensagensOrderByWithAggregationInput[];
    by: Prisma.MensagensScalarFieldEnum[] | Prisma.MensagensScalarFieldEnum;
    having?: Prisma.MensagensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MensagensCountAggregateInputType | true;
    _min?: MensagensMinAggregateInputType;
    _max?: MensagensMaxAggregateInputType;
};
export type MensagensGroupByOutputType = {
    id: string;
    cliente_id: string;
    canal: string;
    template: string | null;
    conteudo: string;
    status: string;
    meta_message_id: string | null;
    erro: string | null;
    createdAt: Date;
    _count: MensagensCountAggregateOutputType | null;
    _min: MensagensMinAggregateOutputType | null;
    _max: MensagensMaxAggregateOutputType | null;
};
type GetMensagensGroupByPayload<T extends MensagensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MensagensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MensagensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MensagensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MensagensGroupByOutputType[P]>;
}>>;
export type MensagensWhereInput = {
    AND?: Prisma.MensagensWhereInput | Prisma.MensagensWhereInput[];
    OR?: Prisma.MensagensWhereInput[];
    NOT?: Prisma.MensagensWhereInput | Prisma.MensagensWhereInput[];
    id?: Prisma.StringFilter<"Mensagens"> | string;
    cliente_id?: Prisma.StringFilter<"Mensagens"> | string;
    canal?: Prisma.StringFilter<"Mensagens"> | string;
    template?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    conteudo?: Prisma.StringFilter<"Mensagens"> | string;
    status?: Prisma.StringFilter<"Mensagens"> | string;
    meta_message_id?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    erro?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Mensagens"> | Date | string;
    clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
};
export type MensagensOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    template?: Prisma.SortOrderInput | Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    meta_message_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    erro?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    clientes?: Prisma.ClientesOrderByWithRelationInput;
};
export type MensagensWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MensagensWhereInput | Prisma.MensagensWhereInput[];
    OR?: Prisma.MensagensWhereInput[];
    NOT?: Prisma.MensagensWhereInput | Prisma.MensagensWhereInput[];
    cliente_id?: Prisma.StringFilter<"Mensagens"> | string;
    canal?: Prisma.StringFilter<"Mensagens"> | string;
    template?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    conteudo?: Prisma.StringFilter<"Mensagens"> | string;
    status?: Prisma.StringFilter<"Mensagens"> | string;
    meta_message_id?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    erro?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Mensagens"> | Date | string;
    clientes?: Prisma.XOR<Prisma.ClientesScalarRelationFilter, Prisma.ClientesWhereInput>;
}, "id">;
export type MensagensOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    template?: Prisma.SortOrderInput | Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    meta_message_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    erro?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MensagensCountOrderByAggregateInput;
    _max?: Prisma.MensagensMaxOrderByAggregateInput;
    _min?: Prisma.MensagensMinOrderByAggregateInput;
};
export type MensagensScalarWhereWithAggregatesInput = {
    AND?: Prisma.MensagensScalarWhereWithAggregatesInput | Prisma.MensagensScalarWhereWithAggregatesInput[];
    OR?: Prisma.MensagensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MensagensScalarWhereWithAggregatesInput | Prisma.MensagensScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Mensagens"> | string;
    cliente_id?: Prisma.StringWithAggregatesFilter<"Mensagens"> | string;
    canal?: Prisma.StringWithAggregatesFilter<"Mensagens"> | string;
    template?: Prisma.StringNullableWithAggregatesFilter<"Mensagens"> | string | null;
    conteudo?: Prisma.StringWithAggregatesFilter<"Mensagens"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Mensagens"> | string;
    meta_message_id?: Prisma.StringNullableWithAggregatesFilter<"Mensagens"> | string | null;
    erro?: Prisma.StringNullableWithAggregatesFilter<"Mensagens"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Mensagens"> | Date | string;
};
export type MensagensCreateInput = {
    id?: string;
    canal: string;
    template?: string | null;
    conteudo: string;
    status?: string;
    meta_message_id?: string | null;
    erro?: string | null;
    createdAt?: Date | string;
    clientes: Prisma.ClientesCreateNestedOneWithoutMensagensInput;
};
export type MensagensUncheckedCreateInput = {
    id?: string;
    cliente_id: string;
    canal: string;
    template?: string | null;
    conteudo: string;
    status?: string;
    meta_message_id?: string | null;
    erro?: string | null;
    createdAt?: Date | string;
};
export type MensagensUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientes?: Prisma.ClientesUpdateOneRequiredWithoutMensagensNestedInput;
};
export type MensagensUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MensagensCreateManyInput = {
    id?: string;
    cliente_id: string;
    canal: string;
    template?: string | null;
    conteudo: string;
    status?: string;
    meta_message_id?: string | null;
    erro?: string | null;
    createdAt?: Date | string;
};
export type MensagensUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MensagensUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MensagensListRelationFilter = {
    every?: Prisma.MensagensWhereInput;
    some?: Prisma.MensagensWhereInput;
    none?: Prisma.MensagensWhereInput;
};
export type MensagensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MensagensCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    meta_message_id?: Prisma.SortOrder;
    erro?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MensagensMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    meta_message_id?: Prisma.SortOrder;
    erro?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MensagensMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cliente_id?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    template?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    meta_message_id?: Prisma.SortOrder;
    erro?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MensagensCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.MensagensCreateWithoutClientesInput, Prisma.MensagensUncheckedCreateWithoutClientesInput> | Prisma.MensagensCreateWithoutClientesInput[] | Prisma.MensagensUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.MensagensCreateOrConnectWithoutClientesInput | Prisma.MensagensCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.MensagensCreateManyClientesInputEnvelope;
    connect?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
};
export type MensagensUncheckedCreateNestedManyWithoutClientesInput = {
    create?: Prisma.XOR<Prisma.MensagensCreateWithoutClientesInput, Prisma.MensagensUncheckedCreateWithoutClientesInput> | Prisma.MensagensCreateWithoutClientesInput[] | Prisma.MensagensUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.MensagensCreateOrConnectWithoutClientesInput | Prisma.MensagensCreateOrConnectWithoutClientesInput[];
    createMany?: Prisma.MensagensCreateManyClientesInputEnvelope;
    connect?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
};
export type MensagensUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.MensagensCreateWithoutClientesInput, Prisma.MensagensUncheckedCreateWithoutClientesInput> | Prisma.MensagensCreateWithoutClientesInput[] | Prisma.MensagensUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.MensagensCreateOrConnectWithoutClientesInput | Prisma.MensagensCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.MensagensUpsertWithWhereUniqueWithoutClientesInput | Prisma.MensagensUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.MensagensCreateManyClientesInputEnvelope;
    set?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    disconnect?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    delete?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    connect?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    update?: Prisma.MensagensUpdateWithWhereUniqueWithoutClientesInput | Prisma.MensagensUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.MensagensUpdateManyWithWhereWithoutClientesInput | Prisma.MensagensUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.MensagensScalarWhereInput | Prisma.MensagensScalarWhereInput[];
};
export type MensagensUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: Prisma.XOR<Prisma.MensagensCreateWithoutClientesInput, Prisma.MensagensUncheckedCreateWithoutClientesInput> | Prisma.MensagensCreateWithoutClientesInput[] | Prisma.MensagensUncheckedCreateWithoutClientesInput[];
    connectOrCreate?: Prisma.MensagensCreateOrConnectWithoutClientesInput | Prisma.MensagensCreateOrConnectWithoutClientesInput[];
    upsert?: Prisma.MensagensUpsertWithWhereUniqueWithoutClientesInput | Prisma.MensagensUpsertWithWhereUniqueWithoutClientesInput[];
    createMany?: Prisma.MensagensCreateManyClientesInputEnvelope;
    set?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    disconnect?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    delete?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    connect?: Prisma.MensagensWhereUniqueInput | Prisma.MensagensWhereUniqueInput[];
    update?: Prisma.MensagensUpdateWithWhereUniqueWithoutClientesInput | Prisma.MensagensUpdateWithWhereUniqueWithoutClientesInput[];
    updateMany?: Prisma.MensagensUpdateManyWithWhereWithoutClientesInput | Prisma.MensagensUpdateManyWithWhereWithoutClientesInput[];
    deleteMany?: Prisma.MensagensScalarWhereInput | Prisma.MensagensScalarWhereInput[];
};
export type MensagensCreateWithoutClientesInput = {
    id?: string;
    canal: string;
    template?: string | null;
    conteudo: string;
    status?: string;
    meta_message_id?: string | null;
    erro?: string | null;
    createdAt?: Date | string;
};
export type MensagensUncheckedCreateWithoutClientesInput = {
    id?: string;
    canal: string;
    template?: string | null;
    conteudo: string;
    status?: string;
    meta_message_id?: string | null;
    erro?: string | null;
    createdAt?: Date | string;
};
export type MensagensCreateOrConnectWithoutClientesInput = {
    where: Prisma.MensagensWhereUniqueInput;
    create: Prisma.XOR<Prisma.MensagensCreateWithoutClientesInput, Prisma.MensagensUncheckedCreateWithoutClientesInput>;
};
export type MensagensCreateManyClientesInputEnvelope = {
    data: Prisma.MensagensCreateManyClientesInput | Prisma.MensagensCreateManyClientesInput[];
};
export type MensagensUpsertWithWhereUniqueWithoutClientesInput = {
    where: Prisma.MensagensWhereUniqueInput;
    update: Prisma.XOR<Prisma.MensagensUpdateWithoutClientesInput, Prisma.MensagensUncheckedUpdateWithoutClientesInput>;
    create: Prisma.XOR<Prisma.MensagensCreateWithoutClientesInput, Prisma.MensagensUncheckedCreateWithoutClientesInput>;
};
export type MensagensUpdateWithWhereUniqueWithoutClientesInput = {
    where: Prisma.MensagensWhereUniqueInput;
    data: Prisma.XOR<Prisma.MensagensUpdateWithoutClientesInput, Prisma.MensagensUncheckedUpdateWithoutClientesInput>;
};
export type MensagensUpdateManyWithWhereWithoutClientesInput = {
    where: Prisma.MensagensScalarWhereInput;
    data: Prisma.XOR<Prisma.MensagensUpdateManyMutationInput, Prisma.MensagensUncheckedUpdateManyWithoutClientesInput>;
};
export type MensagensScalarWhereInput = {
    AND?: Prisma.MensagensScalarWhereInput | Prisma.MensagensScalarWhereInput[];
    OR?: Prisma.MensagensScalarWhereInput[];
    NOT?: Prisma.MensagensScalarWhereInput | Prisma.MensagensScalarWhereInput[];
    id?: Prisma.StringFilter<"Mensagens"> | string;
    cliente_id?: Prisma.StringFilter<"Mensagens"> | string;
    canal?: Prisma.StringFilter<"Mensagens"> | string;
    template?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    conteudo?: Prisma.StringFilter<"Mensagens"> | string;
    status?: Prisma.StringFilter<"Mensagens"> | string;
    meta_message_id?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    erro?: Prisma.StringNullableFilter<"Mensagens"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Mensagens"> | Date | string;
};
export type MensagensCreateManyClientesInput = {
    id?: string;
    canal: string;
    template?: string | null;
    conteudo: string;
    status?: string;
    meta_message_id?: string | null;
    erro?: string | null;
    createdAt?: Date | string;
};
export type MensagensUpdateWithoutClientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MensagensUncheckedUpdateWithoutClientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MensagensUncheckedUpdateManyWithoutClientesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    template?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    erro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MensagensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    canal?: boolean;
    template?: boolean;
    conteudo?: boolean;
    status?: boolean;
    meta_message_id?: boolean;
    erro?: boolean;
    createdAt?: boolean;
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mensagens"]>;
export type MensagensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    canal?: boolean;
    template?: boolean;
    conteudo?: boolean;
    status?: boolean;
    meta_message_id?: boolean;
    erro?: boolean;
    createdAt?: boolean;
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mensagens"]>;
export type MensagensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cliente_id?: boolean;
    canal?: boolean;
    template?: boolean;
    conteudo?: boolean;
    status?: boolean;
    meta_message_id?: boolean;
    erro?: boolean;
    createdAt?: boolean;
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mensagens"]>;
export type MensagensSelectScalar = {
    id?: boolean;
    cliente_id?: boolean;
    canal?: boolean;
    template?: boolean;
    conteudo?: boolean;
    status?: boolean;
    meta_message_id?: boolean;
    erro?: boolean;
    createdAt?: boolean;
};
export type MensagensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cliente_id" | "canal" | "template" | "conteudo" | "status" | "meta_message_id" | "erro" | "createdAt", ExtArgs["result"]["mensagens"]>;
export type MensagensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
};
export type MensagensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
};
export type MensagensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clientes?: boolean | Prisma.ClientesDefaultArgs<ExtArgs>;
};
export type $MensagensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mensagens";
    objects: {
        clientes: Prisma.$ClientesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cliente_id: string;
        canal: string;
        template: string | null;
        conteudo: string;
        status: string;
        meta_message_id: string | null;
        erro: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["mensagens"]>;
    composites: {};
};
export type MensagensGetPayload<S extends boolean | null | undefined | MensagensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MensagensPayload, S>;
export type MensagensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MensagensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MensagensCountAggregateInputType | true;
};
export interface MensagensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mensagens'];
        meta: {
            name: 'Mensagens';
        };
    };
    findUnique<T extends MensagensFindUniqueArgs>(args: Prisma.SelectSubset<T, MensagensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MensagensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MensagensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MensagensFindFirstArgs>(args?: Prisma.SelectSubset<T, MensagensFindFirstArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MensagensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MensagensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MensagensFindManyArgs>(args?: Prisma.SelectSubset<T, MensagensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MensagensCreateArgs>(args: Prisma.SelectSubset<T, MensagensCreateArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MensagensCreateManyArgs>(args?: Prisma.SelectSubset<T, MensagensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MensagensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MensagensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MensagensDeleteArgs>(args: Prisma.SelectSubset<T, MensagensDeleteArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MensagensUpdateArgs>(args: Prisma.SelectSubset<T, MensagensUpdateArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MensagensDeleteManyArgs>(args?: Prisma.SelectSubset<T, MensagensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MensagensUpdateManyArgs>(args: Prisma.SelectSubset<T, MensagensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MensagensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MensagensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MensagensUpsertArgs>(args: Prisma.SelectSubset<T, MensagensUpsertArgs<ExtArgs>>): Prisma.Prisma__MensagensClient<runtime.Types.Result.GetResult<Prisma.$MensagensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MensagensCountArgs>(args?: Prisma.Subset<T, MensagensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MensagensCountAggregateOutputType> : number>;
    aggregate<T extends MensagensAggregateArgs>(args: Prisma.Subset<T, MensagensAggregateArgs>): Prisma.PrismaPromise<GetMensagensAggregateType<T>>;
    groupBy<T extends MensagensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MensagensGroupByArgs['orderBy'];
    } : {
        orderBy?: MensagensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MensagensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MensagensFieldRefs;
}
export interface Prisma__MensagensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clientes<T extends Prisma.ClientesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientesDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientesClient<runtime.Types.Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MensagensFieldRefs {
    readonly id: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly cliente_id: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly canal: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly template: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly conteudo: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly status: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly meta_message_id: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly erro: Prisma.FieldRef<"Mensagens", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Mensagens", 'DateTime'>;
}
export type MensagensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    where: Prisma.MensagensWhereUniqueInput;
};
export type MensagensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    where: Prisma.MensagensWhereUniqueInput;
};
export type MensagensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MensagensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MensagensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MensagensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MensagensCreateInput, Prisma.MensagensUncheckedCreateInput>;
};
export type MensagensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MensagensCreateManyInput | Prisma.MensagensCreateManyInput[];
};
export type MensagensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    data: Prisma.MensagensCreateManyInput | Prisma.MensagensCreateManyInput[];
    include?: Prisma.MensagensIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MensagensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MensagensUpdateInput, Prisma.MensagensUncheckedUpdateInput>;
    where: Prisma.MensagensWhereUniqueInput;
};
export type MensagensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MensagensUpdateManyMutationInput, Prisma.MensagensUncheckedUpdateManyInput>;
    where?: Prisma.MensagensWhereInput;
    limit?: number;
};
export type MensagensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MensagensUpdateManyMutationInput, Prisma.MensagensUncheckedUpdateManyInput>;
    where?: Prisma.MensagensWhereInput;
    limit?: number;
    include?: Prisma.MensagensIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MensagensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    where: Prisma.MensagensWhereUniqueInput;
    create: Prisma.XOR<Prisma.MensagensCreateInput, Prisma.MensagensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MensagensUpdateInput, Prisma.MensagensUncheckedUpdateInput>;
};
export type MensagensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
    where: Prisma.MensagensWhereUniqueInput;
};
export type MensagensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MensagensWhereInput;
    limit?: number;
};
export type MensagensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MensagensSelect<ExtArgs> | null;
    omit?: Prisma.MensagensOmit<ExtArgs> | null;
    include?: Prisma.MensagensInclude<ExtArgs> | null;
};
export {};
