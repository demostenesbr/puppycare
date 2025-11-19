import { FuncionariosService } from './funcionarios.service';
export declare class FuncionariosController {
    private readonly funcionariosService;
    constructor(funcionariosService: FuncionariosService);
    findAll(): any;
    update(id: string, body: {
        name?: string;
        email?: string;
        type?: string[];
    }): any;
}
