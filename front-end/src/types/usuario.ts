export type UsuarioType = 'administrador' | 'funcionario' | 'condutor';

export interface Usuario {
    id: number;
    name: string;
    image: string;
    email: string;
    type: UsuarioType[];
}
