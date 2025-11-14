import { PrismaService } from '../prisma/prisma.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';
import { PacoteSyncBatchRequestDto } from './dto/pacote-sync.dto';
export declare class PacotesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPacoteDto: CreatePacoteDto): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    findAll(): Promise<({
        CLIENTE: {
            NOME: string;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            TELEFONE: string;
            ENDERECO: string;
        };
        SERVICO: {
            ID_SERVICO: number;
            NOME: string;
            DESCRICAO: string | null;
            VALOR: import("@prisma/client/runtime/library").Decimal;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
        };
    } & {
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    })[]>;
    findOne(id: number): Promise<{
        CLIENTE: {
            NOME: string;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            TELEFONE: string;
            ENDERECO: string;
        };
        SERVICO: {
            ID_SERVICO: number;
            NOME: string;
            DESCRICAO: string | null;
            VALOR: import("@prisma/client/runtime/library").Decimal;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
        };
    } & {
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    update(id: number, updatePacoteDto: UpdatePacoteDto): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    remove(id: number): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    getChanges(since?: string): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }[]>;
    batchUpsert(body: PacoteSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    private applyOne;
    softDeleteByPublicId(publicId: string): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
}
