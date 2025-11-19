export declare class FuncionariosService {
    private funcionarios;
    private loadFuncionarios;
    private saveFuncionarios;
    findAll(): any;
    updateFuncionario(id: number, data: Partial<{
        name: string;
        email: string;
        type: string[];
    }>): any;
}
