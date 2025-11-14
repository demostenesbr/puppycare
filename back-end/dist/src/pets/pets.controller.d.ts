import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetSyncBatchRequestDto } from './dto/pet-sync.dto';
export declare class PetsController {
    private readonly petsService;
    constructor(petsService: PetsService);
    create(createPetDto: CreatePetDto): Promise<{
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
    } & {
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
    } & {
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
    }>;
    update(id: number, updatePetDto: UpdatePetDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
    getChanges(since?: string): Promise<{
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
    }[]>;
    batch(body: PetSyncBatchRequestDto): Promise<{
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
        ID_PET: number;
        RACA: string | null;
        DATA_NASC: Date | null;
    }>;
}
