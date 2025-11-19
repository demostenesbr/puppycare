"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { User, CarFront, ShieldUser } from "lucide-react"
import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings"
import UsuariosCard from "@/components/ui/custom/UsuarioCard";
import AdminTypeEmployee from "@/components/ui/custom/AdminTypeEmployee";
import { Usuario, UsuarioType } from "@/types/usuario";
import { useEffect, useState } from "react"

type Checked = DropdownMenuCheckboxItemProps["checked"]


export function UsuariosPage() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    // Estado para buscas
    const [searchName, setSearchName] = React.useState("");
    const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);

    // Estado para armazenar os usuários
    const [usuarios, setUsuarios] = React.useState<Usuario[]>([]);
    const [loading, setLoading] = React.useState(true);

    const [reload, setReload] = useState(false);

    // Buscar usuários do back-end
    const fetchUsuarios = () => {
        setLoading(true);
        fetch('/api/usuarios')
            .then(res => res.json())
            .then(data => {
                setUsuarios(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erro ao buscar usuários:', err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsuarios();
    }, [reload]);


    // Calcular quantidades por tipo automaticamente
    const numFuncionarios = usuarios.filter(u => u.type.includes('funcionario' as UsuarioType)).length;
    const condutores = usuarios.filter(u => u.type.includes('condutor' as UsuarioType)).length;
    const administradores = usuarios.filter(u => u.type.includes('administrador' as UsuarioType)).length;
    const totalUsuarios = usuarios.length;


    // Busca por nome
    const searchUsuarios = usuarios.filter((usuario) => {
        return usuario.name.toLowerCase().includes(searchName.toLowerCase())
    })

    // Busca por filtro do type
    const filteredUsuarios = usuarios
        .filter(usuario => usuario.name.toLowerCase().includes(searchName.toLowerCase()))
        .filter(usuario => {
            if (selectedTypes.length === 0) return true;
            return usuario.type.some(t => selectedTypes.includes(t));
        });


    if (loading) {
        return <div className="text-center p-10">Carregando...</div>;
    }

    return (
        <div className="flex flex-col gap-10">
            <AdminBlock>
                <AdminBlockTitle>Gerenciamento de Usuários</AdminBlockTitle>

                <div className="flex justify-center">
                    <div className="flex flex-row gap-10">
                        <div className="bg-white p-10 rounded-md flex flex-col items-center text-center w-40">
                            <User className="flex" width="40px" height="40px" />
                            <h1>Funcionários</h1>
                            <p>{numFuncionarios}</p>
                        </div>

                        <div className="bg-white p-10 rounded-md flex flex-col items-center text-center w-40">
                            <CarFront className="flex" width="40px" height="40px" />
                            <h1>Condutores</h1>
                            <p>{condutores}</p>
                        </div>

                        <div className="bg-white p-10 rounded-md flex flex-col items-center text-center w-40">
                            <ShieldUser className="flex" width="40px" height="40px" />
                            <h1>Administradores</h1>
                            <p>{administradores}</p>
                        </div>
                    </div>
                </div>

                <hr className="h-1 bg-white mx-auto rounded-full my-6 w-3/4" />

                <h2 className="text-center">Total de usuários: {totalUsuarios}</h2>

            </AdminBlock>

            <AdminBlock>
                <AdminBlockTitle>Usuários</AdminBlockTitle>

                <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
                    <div>
                        {/* BUSCA: Nome do usuário */}
                        <h2>Nome</h2>
                        <input
                            type="text"
                            placeholder="Digite o nome..."
                            className="bg-[#D9D9D9] p-2 rounded-sm outline-none focus:ring-2 focus:ring-[#2A2D34] hover:bg-white text-sm font-bold leading-5 w-80 h-10"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>

                    <div>
                        {/* BUSCA: Tipo de usuário */}
                        <h2>Tipo de usuário</h2>
                        <AdminTypeEmployee
                            value={selectedTypes}
                            onChange={setSelectedTypes}
                        />
                    </div>
                </div>

                {/* Lista dos usuários */}
                <div>
                    <UsuariosCard
                        usuarios={filteredUsuarios}
                        onUpdated={() => setReload(r => !r)}
                    />
                </div>

            </AdminBlock>
        </div>
    )
}
