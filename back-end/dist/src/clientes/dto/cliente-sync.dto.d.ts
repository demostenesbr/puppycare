export declare class ClienteSyncItemDto {
    PUBLIC_ID?: string;
    NOME?: string;
    TELEFONE?: string;
    ENDERECO?: string;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class ClienteSyncBatchRequestDto {
    items: ClienteSyncItemDto[];
}
