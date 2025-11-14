export declare class UsuarioSyncItemDto {
    PUBLIC_ID?: string;
    NOME?: string;
    DESCRICAO?: string | null;
    SENHA_HASH?: string;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class UsuarioSyncBatchRequestDto {
    items: UsuarioSyncItemDto[];
}
