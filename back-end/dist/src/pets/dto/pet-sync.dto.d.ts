export declare class PetSyncItemDto {
    PUBLIC_ID?: string;
    NOME?: string;
    RACA?: string | null;
    DATA_NASC?: string | null;
    ID_CLIENTE?: number;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class PetSyncBatchRequestDto {
    items: PetSyncItemDto[];
}
