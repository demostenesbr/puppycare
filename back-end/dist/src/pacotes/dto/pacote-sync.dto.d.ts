export declare class PacoteSyncItemDto {
    PUBLIC_ID?: string;
    ID_CLIENTE?: number;
    ID_SERVICO?: number;
    QTD_BANHOS?: number;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class PacoteSyncBatchRequestDto {
    items: PacoteSyncItemDto[];
}
