import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { AtendimentoSyncBatchRequestDto } from './dto/atendimento-sync.dto';
export declare class AtendimentosController {
    private readonly atendimentosService;
    constructor(atendimentosService: AtendimentosService);
    create(createAtendimentoDto: CreateAtendimentoDto): Promise<{
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
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
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
            VALOR: import("@prisma/client/runtime/library").Decimal;
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
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
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
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
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
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
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
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }[]>;
    batch(body: AtendimentoSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<{
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
    }>;
}
