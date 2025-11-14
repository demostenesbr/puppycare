'use client';

import Image from 'next/image';
import DropdownMenuDialog from './UsuarioConfig';
import { Usuario } from '@/types/usuario';


interface UsuariosCardProps {
  usuarios: Usuario[];
  onUpdated?: () => void;
}

export default function UsuariosCard({ usuarios, onUpdated }: UsuariosCardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {usuarios.map((usuario) => (
        <div
          key={usuario.id}
          className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center relative"
        >
          <div className="flex justify-end p-1 absolute top-0 right-0">
            <DropdownMenuDialog
              usuario={usuario}
              onUpdated={onUpdated}
            />
          </div>

          <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
            <Image
              src={usuario.image}
              width={200}
              height={200}
              alt={usuario.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col mx-auto">
            <h3 className="mx-auto">{usuario.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
