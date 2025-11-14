import Image from "next/image";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react";
import { Button } from "../button";
import AdminTypeEmployee from "./AdminTypeEmployee";
import { Usuario } from "@/types/usuario";

interface DropdownMenuDialogProps {
    usuario: Usuario;
    onUpdated?: () => void;
}

export default function DropdownMenuDialog({ usuario, onUpdated }: DropdownMenuDialogProps) {
    const [showNewDialog, setShowNewDialog] = useState(false);
    const [name, setName] = useState(usuario.name);
    const [email, setEmail] = useState(usuario.email);
    const [type, setType] = useState<string[]>(usuario.type);

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                    <Button variant="outline" aria-label="Open menu" size="icon-sm">
                        <EllipsisVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => setShowNewDialog(true)} className="cursor-pointer">
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>Excluir</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar o usuário</DialogTitle>
                        <DialogDescription>
                            Edite as informações do usuário abaixo.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup className="pb-3">
                        <Field>
                            <FieldLabel htmlFor="filename">Nome</FieldLabel>
                            <Input
                                id="filename"
                                name="filename"
                                defaultValue={usuario.name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                defaultValue={usuario.email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="type">Tipo de usuário</FieldLabel>
                            <AdminTypeEmployee
                                className="w-full"
                                value={usuario.type}
                                onChange={setType}
                            />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            className="cursor-pointer"
                            onClick={async () => {
                                await fetch(`/api/usuarios/${usuario.id}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        name,
                                        email,
                                        type,
                                    }),
                                });

                                setShowNewDialog(false);
                                if (onUpdated) onUpdated();
                            }}
                        >
                            Salvar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </>
    )
}
