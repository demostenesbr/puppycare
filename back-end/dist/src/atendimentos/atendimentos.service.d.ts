import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { AtendimentoSyncBatchRequestDto } from './dto/atendimento-sync.dto';
import { Decimal } from '@prisma/client/runtime/library';
export declare class AtendimentosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAtendimentoDto: CreateAtendimentoDto): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
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
            VALOR: Decimal;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
        };
        PET: {
            NOME: string;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            ID_PET: number;
            RACA: string | null;
            DATA_NASC: Date | null;
        };
        IMAGENS: {
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_ATENDIMENTO: number;
            CAMINHO_IMAGEM: string;
            DATA_UPLOAD: Date;
            ID_IMAGEM: number;
        }[];
    } & {
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
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
            VALOR: Decimal;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
        };
        PET: {
            NOME: string;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            ID_PET: number;
            RACA: string | null;
            DATA_NASC: Date | null;
        };
        IMAGENS: {
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_ATENDIMENTO: number;
            CAMINHO_IMAGEM: string;
            DATA_UPLOAD: Date;
            ID_IMAGEM: number;
        }[];
    } & {
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
    update(id: number, updateAtendimentoDto: UpdateAtendimentoDto): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
    remove(id: number): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
    getChanges(since?: string): Promise<{
        ID_SERVICO: number;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }[]>;
    batchUpsert(body: AtendimentoSyncBatchRequestDto): Promise<{
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
        ID_PET: number;
        VALOR_COBRADO: Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
}
