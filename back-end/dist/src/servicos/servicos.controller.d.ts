import { ServicosService } from './servicos.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { ServicoSyncBatchRequestDto } from './dto/servico-sync.dto';
export declare class ServicosController {
    private readonly servicosService;
    constructor(servicosService: ServicosService);
    create(createServicoDto: CreateServicoDto): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    }>;
    findAll(): Promise<({
        ATENDIMENTOS: {
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
        }[];
        PACOTES: {
            ID_SERVICO: number;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            QTD_BANHOS: number;
            ID_ASSINATURA: number;
        }[];
    } & {
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    })[]>;
    findOne(id: number): Promise<{
        ATENDIMENTOS: {
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
        }[];
        PACOTES: {
            ID_SERVICO: number;
            PUBLIC_ID: string;
            CREATED_AT: Date;
            UPDATED_AT: Date;
            DELETED_AT: Date | null;
            VERSION: number;
            ID_CLIENTE: number;
            QTD_BANHOS: number;
            ID_ASSINATURA: number;
        }[];
    } & {
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    }>;
    update(id: number, updateServicoDto: UpdateServicoDto): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    }>;
    remove(id: number): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    }>;
    getChanges(since?: string): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    }[]>;
    batch(body: ServicoSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
    }>;
}
