import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "clientes" | "pets" | "ordensServicos" | "rotas" | "rotasParadas" | "mensagens" | "funcionarios" | "status";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Clientes: {
            payload: Prisma.$ClientesPayload<ExtArgs>;
            fields: Prisma.ClientesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                findFirst: {
                    args: Prisma.ClientesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                findMany: {
                    args: Prisma.ClientesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>[];
                };
                create: {
                    args: Prisma.ClientesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                createMany: {
                    args: Prisma.ClientesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>[];
                };
                delete: {
                    args: Prisma.ClientesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                update: {
                    args: Prisma.ClientesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClientesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>[];
                };
                upsert: {
                    args: Prisma.ClientesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientesPayload>;
                };
                aggregate: {
                    args: Prisma.ClientesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClientes>;
                };
                groupBy: {
                    args: Prisma.ClientesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientesCountAggregateOutputType> | number;
                };
            };
        };
        Pets: {
            payload: Prisma.$PetsPayload<ExtArgs>;
            fields: Prisma.PetsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PetsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PetsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>;
                };
                findFirst: {
                    args: Prisma.PetsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PetsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>;
                };
                findMany: {
                    args: Prisma.PetsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>[];
                };
                create: {
                    args: Prisma.PetsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>;
                };
                createMany: {
                    args: Prisma.PetsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PetsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>[];
                };
                delete: {
                    args: Prisma.PetsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>;
                };
                update: {
                    args: Prisma.PetsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>;
                };
                deleteMany: {
                    args: Prisma.PetsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PetsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PetsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>[];
                };
                upsert: {
                    args: Prisma.PetsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PetsPayload>;
                };
                aggregate: {
                    args: Prisma.PetsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePets>;
                };
                groupBy: {
                    args: Prisma.PetsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PetsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PetsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PetsCountAggregateOutputType> | number;
                };
            };
        };
        OrdensServicos: {
            payload: Prisma.$OrdensServicosPayload<ExtArgs>;
            fields: Prisma.OrdensServicosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrdensServicosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrdensServicosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>;
                };
                findFirst: {
                    args: Prisma.OrdensServicosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrdensServicosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>;
                };
                findMany: {
                    args: Prisma.OrdensServicosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>[];
                };
                create: {
                    args: Prisma.OrdensServicosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>;
                };
                createMany: {
                    args: Prisma.OrdensServicosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrdensServicosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>[];
                };
                delete: {
                    args: Prisma.OrdensServicosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>;
                };
                update: {
                    args: Prisma.OrdensServicosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>;
                };
                deleteMany: {
                    args: Prisma.OrdensServicosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrdensServicosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrdensServicosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>[];
                };
                upsert: {
                    args: Prisma.OrdensServicosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdensServicosPayload>;
                };
                aggregate: {
                    args: Prisma.OrdensServicosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrdensServicos>;
                };
                groupBy: {
                    args: Prisma.OrdensServicosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdensServicosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrdensServicosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdensServicosCountAggregateOutputType> | number;
                };
            };
        };
        Rotas: {
            payload: Prisma.$RotasPayload<ExtArgs>;
            fields: Prisma.RotasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RotasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RotasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>;
                };
                findFirst: {
                    args: Prisma.RotasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RotasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>;
                };
                findMany: {
                    args: Prisma.RotasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>[];
                };
                create: {
                    args: Prisma.RotasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>;
                };
                createMany: {
                    args: Prisma.RotasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RotasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>[];
                };
                delete: {
                    args: Prisma.RotasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>;
                };
                update: {
                    args: Prisma.RotasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>;
                };
                deleteMany: {
                    args: Prisma.RotasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RotasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RotasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>[];
                };
                upsert: {
                    args: Prisma.RotasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasPayload>;
                };
                aggregate: {
                    args: Prisma.RotasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRotas>;
                };
                groupBy: {
                    args: Prisma.RotasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RotasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RotasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RotasCountAggregateOutputType> | number;
                };
            };
        };
        RotasParadas: {
            payload: Prisma.$RotasParadasPayload<ExtArgs>;
            fields: Prisma.RotasParadasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RotasParadasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RotasParadasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>;
                };
                findFirst: {
                    args: Prisma.RotasParadasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RotasParadasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>;
                };
                findMany: {
                    args: Prisma.RotasParadasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>[];
                };
                create: {
                    args: Prisma.RotasParadasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>;
                };
                createMany: {
                    args: Prisma.RotasParadasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RotasParadasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>[];
                };
                delete: {
                    args: Prisma.RotasParadasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>;
                };
                update: {
                    args: Prisma.RotasParadasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>;
                };
                deleteMany: {
                    args: Prisma.RotasParadasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RotasParadasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RotasParadasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>[];
                };
                upsert: {
                    args: Prisma.RotasParadasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RotasParadasPayload>;
                };
                aggregate: {
                    args: Prisma.RotasParadasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRotasParadas>;
                };
                groupBy: {
                    args: Prisma.RotasParadasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RotasParadasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RotasParadasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RotasParadasCountAggregateOutputType> | number;
                };
            };
        };
        Mensagens: {
            payload: Prisma.$MensagensPayload<ExtArgs>;
            fields: Prisma.MensagensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MensagensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MensagensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>;
                };
                findFirst: {
                    args: Prisma.MensagensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MensagensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>;
                };
                findMany: {
                    args: Prisma.MensagensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>[];
                };
                create: {
                    args: Prisma.MensagensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>;
                };
                createMany: {
                    args: Prisma.MensagensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MensagensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>[];
                };
                delete: {
                    args: Prisma.MensagensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>;
                };
                update: {
                    args: Prisma.MensagensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>;
                };
                deleteMany: {
                    args: Prisma.MensagensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MensagensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MensagensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>[];
                };
                upsert: {
                    args: Prisma.MensagensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MensagensPayload>;
                };
                aggregate: {
                    args: Prisma.MensagensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMensagens>;
                };
                groupBy: {
                    args: Prisma.MensagensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MensagensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MensagensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MensagensCountAggregateOutputType> | number;
                };
            };
        };
        Funcionarios: {
            payload: Prisma.$FuncionariosPayload<ExtArgs>;
            fields: Prisma.FuncionariosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FuncionariosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FuncionariosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>;
                };
                findFirst: {
                    args: Prisma.FuncionariosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FuncionariosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>;
                };
                findMany: {
                    args: Prisma.FuncionariosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>[];
                };
                create: {
                    args: Prisma.FuncionariosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>;
                };
                createMany: {
                    args: Prisma.FuncionariosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FuncionariosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>[];
                };
                delete: {
                    args: Prisma.FuncionariosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>;
                };
                update: {
                    args: Prisma.FuncionariosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>;
                };
                deleteMany: {
                    args: Prisma.FuncionariosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FuncionariosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FuncionariosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>[];
                };
                upsert: {
                    args: Prisma.FuncionariosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuncionariosPayload>;
                };
                aggregate: {
                    args: Prisma.FuncionariosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFuncionarios>;
                };
                groupBy: {
                    args: Prisma.FuncionariosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FuncionariosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FuncionariosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FuncionariosCountAggregateOutputType> | number;
                };
            };
        };
        Status: {
            payload: Prisma.$StatusPayload<ExtArgs>;
            fields: Prisma.StatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>;
                };
                findFirst: {
                    args: Prisma.StatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>;
                };
                findMany: {
                    args: Prisma.StatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>[];
                };
                create: {
                    args: Prisma.StatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>;
                };
                createMany: {
                    args: Prisma.StatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>[];
                };
                delete: {
                    args: Prisma.StatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>;
                };
                update: {
                    args: Prisma.StatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>;
                };
                deleteMany: {
                    args: Prisma.StatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>[];
                };
                upsert: {
                    args: Prisma.StatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPayload>;
                };
                aggregate: {
                    args: Prisma.StatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStatus>;
                };
                groupBy: {
                    args: Prisma.StatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    clientes?: Prisma.ClientesOmit;
    pets?: Prisma.PetsOmit;
    ordensServicos?: Prisma.OrdensServicosOmit;
    rotas?: Prisma.RotasOmit;
    rotasParadas?: Prisma.RotasParadasOmit;
    mensagens?: Prisma.MensagensOmit;
    funcionarios?: Prisma.FuncionariosOmit;
    status?: Prisma.StatusOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
