export declare class ServicoSyncItemDto {
    PUBLIC_ID?: string;
    NOME?: string;
    DESCRICAO?: string | null;
    VALOR?: string | number;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class ServicoSyncBatchRequestDto {
    items: ServicoSyncItemDto[];
}
