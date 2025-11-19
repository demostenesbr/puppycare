export declare class AtendimentoSyncItemDto {
    PUBLIC_ID?: string;
    ID_CLIENTE?: number;
    ID_PET?: number;
    ID_SERVICO?: number;
    VALOR_COBRADO?: string | number;
    TIPO?: string;
    NOTAS?: string | null;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class AtendimentoSyncBatchRequestDto {
    items: AtendimentoSyncItemDto[];
}
