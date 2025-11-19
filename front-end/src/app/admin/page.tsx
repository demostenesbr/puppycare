"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Users, ChartNoAxesColumn, Notebook, Settings, X, ChevronLeft, ChevronRight, CircleQuestionMark } from "lucide-react";
import AdminMenuItem from "../../components/ui/custom/AdminMenuItem";
import AgendamentoPage from "./agendamento/page";
import ClientesPage from "./clientes/page";
import AnalisePage from "./analise/page";
import { UsuariosPage } from "./usuarios/page";
import AdminHomeLoading from "@/components/ui/custom/AdminHomeLoading";

export default function AdminPage() {
    const [isOpen, setIsOpen] = useState(true);
    const [paginaAtual, setPaginaAtual] = useState<"agendamentos" | "clientes" | "analise" | "usuarios" | "opcoes" | null>("agendamentos");

    return (
        <div>
            <div className="text-white">
                <AdminHomeLoading loaded={true} />
            </div>

            <div className="relative flex min-h-screen bg-[#E3E3E3] text-black font-bold">

                <aside
                    className={`relative z-10 bg-[#1A112E] shadow-lg py-4 px-4 transition-all duration-300 ${isOpen ? "w-[250px]" : "w-[125px]"
                        }`}
                >

                    <div className="sticky top-5 flex flex-col gap-4">
                        <header className="relative flex items-center gap-4 min-h-[50px]">

                            {/* Logozinha */}
                            <button className="rounded-md focus:outline-none" onClick={() => "/"}>
                                <Image
                                    src="/logos/brand/logo-redondo-maior-rosa.png"
                                    alt="Petshop Puppy Care"
                                    width={50}
                                    height={50}
                                    className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0"
                                        }`}
                                />
                            </button>

                            {/* Botao amarelo Admin */}
                            <span className={"bg-[#FECE14] text-black px-3 py-1 rounded-md transition-all duration-300"}>
                                Admin
                            </span>

                            {/* Texto Puppy Care */}
                            <p
                                className={`text-white transition-all duration-300 overflow-hidden ${isOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                                    }`}
                            >
                                Puppy Care
                            </p>

                            {/* Botão Chevron alinhado ao Admin */}
                            <button
                                className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-3 bg-[#333] hover:bg-white focus:outline-none rounded-md border-2 border-[#AAAAAA] cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? (
                                    <ChevronLeft color="currentColor" className="text-white hover:text-black" />
                                ) : (
                                    <ChevronRight color="currentColor" className="text-white hover:text-black" />
                                )}
                            </button>
                        </header>


                        <div className="p-2 bg-[#E3E3E3] rounded-md flex flex-col gap-2 transition-all duration-300">

                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<CalendarDays color="currentColor" />}
                                    label="Agendamentos"
                                    href=""
                                    isOpen={isOpen}
                                    className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                    active={paginaAtual === "agendamentos"}
                                    onClick={() => setPaginaAtual("agendamentos")}

                                />
                            </div>

                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<Users color="currentColor" />}
                                    label="Clientes"
                                    href=""
                                    isOpen={isOpen}
                                    className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                    active={paginaAtual === "clientes"}
                                    onClick={() => setPaginaAtual("clientes")}

                                />
                            </div>

                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<ChartNoAxesColumn color="currentColor" />}
                                    className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                    label="Análise"
                                    href=""
                                    isOpen={isOpen}
                                    active={paginaAtual === "analise"}
                                    onClick={() => setPaginaAtual("analise")}

                                />
                            </div>

                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<Notebook color="currentColor" />}
                                    className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                    label="Usuários"
                                    href=""
                                    isOpen={isOpen}
                                    active={paginaAtual === "usuarios"}
                                    onClick={() => setPaginaAtual("usuarios")}

                                />
                            </div>

                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<Settings color="currentColor" />}
                                    className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                    label="Opções"
                                    href="#"
                                    isOpen={isOpen}
                                    active={paginaAtual === "opcoes"}
                                    onClick={() => setPaginaAtual("opcoes")}

                                />
                            </div>


                        </div>
                        <div className="text-black hover:text-white transition-all duration-300">
                            <AdminMenuItem
                                icon={<X color="currentColor" />}
                                className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                label="Sair"
                                href="/"
                                isOpen={isOpen}
                                danger

                            />
                        </div>
                    </div>
                </aside>

                <main className="flex-1 p-6">

                    <section className="">

                        {paginaAtual === "agendamentos" && <AgendamentoPage />}
                        {paginaAtual === "clientes" && <ClientesPage />}
                        {paginaAtual === "analise" && <AnalisePage />}
                        {paginaAtual === "usuarios" && <UsuariosPage />}

                    </section>

                </main>
            </div>
        </div>
    );
}