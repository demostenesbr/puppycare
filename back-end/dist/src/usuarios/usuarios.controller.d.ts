import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioSyncBatchRequestDto } from './dto/usuario-sync.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    findAll(): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }[]>;
    findOne(id: number): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    getChanges(since?: string): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }[]>;
    batch(body: UsuarioSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    remove(id: number): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    softDeleteByPublicId(publicId: string): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        PUBLIC_ID: string;
        CREATED_AT: Date;
        UPDATED_AT: Date;
        DELETED_AT: Date | null;
        VERSION: number;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
}
