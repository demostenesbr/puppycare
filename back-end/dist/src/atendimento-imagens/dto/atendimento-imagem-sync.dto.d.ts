export declare class AtendimentoImagemSyncItemDto {
    PUBLIC_ID?: string;
    ID_ATENDIMENTO?: number;
    CAMINHO_IMAGEM?: string;
    UPDATED_AT?: string;
    VERSION?: number;
    DELETED_AT?: string | null;
}
export declare class AtendimentoImagemSyncBatchRequestDto {
    items: AtendimentoImagemSyncItemDto[];
}
