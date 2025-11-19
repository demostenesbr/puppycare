'use client';

import Image from 'next/image';
import DropdownMenuDialog from './FuncionarioConfig';
import { Funcionario } from '@/types/funcionario';


interface FuncionariosCardProps {
  funcionarios: Funcionario[];  // ← Aceita props
  onUpdated?: () => void;
}

export default function FuncionariosCard({ funcionarios, onUpdated }: FuncionariosCardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {funcionarios.map((func) => (
        <div
          key={func.id}
          className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center relative"
        >
          <div className="flex justify-end p-1 absolute top-0 right-0">
            <DropdownMenuDialog
              funcionario={func}
              onUpdated={onUpdated}
            />
          </div>

          <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
            <Image
              src={func.image}
              width={200}
              height={200}
              alt={func.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col mx-auto">
            <h3 className="mx-auto">{func.name}</h3>
            {/* {func.type} */}
          </div>
        </div>
      ))}
    </div>
  );
}
