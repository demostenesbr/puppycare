import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteSyncBatchRequestDto } from './dto/cliente-sync.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): Promise<{
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
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
        PETS: {
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
        }[];
    } & {
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
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
        PETS: {
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
        }[];
    } & {
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<{
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
    remove(id: number): Promise<{
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
    getChanges(since?: string): Promise<{
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }[]>;
    batch(body: ClienteSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<{
        NOME: string;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
}
