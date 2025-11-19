import { AtendimentoImagensService } from './atendimento-imagens.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';
import { AtendimentoImagemSyncBatchRequestDto } from './dto/atendimento-imagem-sync.dto';
export declare class AtendimentoImagensController {
    private readonly atendimentoImagensService;
    constructor(atendimentoImagensService: AtendimentoImagensService);
    create(createAtendimentoImagemDto: CreateAtendimentoImagemDto): Promise<{
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    findAll(): Promise<({
        ATENDIMENTO: {
            ID_SERVICO: number;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        };
    } & {
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    })[]>;
    findOne(id: number): Promise<{
        ATENDIMENTO: {
            ID_SERVICO: number;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        };
    } & {
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    update(id: number, updateAtendimentoImagemDto: UpdateAtendimentoImagemDto): Promise<{
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    remove(id: number): Promise<{
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    getChanges(since?: string): Promise<{
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }[]>;
    batch(body: AtendimentoImagemSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<{
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
}
