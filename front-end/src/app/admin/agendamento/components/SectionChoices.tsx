import { useState } from "react";
import { Atendendo } from "./sections/Atendendo";
import { Proximos } from "./sections/Proximos";
import { Revisar } from "./sections/Revisar";
import Disponibilidade from "./sections/Disponiblidade";


const BUTTONS = [
    { id: "Atendendo", label: "Atendendo" },
    { id: "Proximos", label: "Próximos" },
    { id: "Revisar", label: "Revisar" },
    { id: "Disponibilidade", label: "Disponiblidade" }
];

export default function SectionChoices() {
    const [active, setActive] = useState(BUTTONS[0].id);

    return (
        <>
            <div className="flex flex-row gap-20 justify-center mt-[40px] z-[10]">
                {BUTTONS.map(btn => (
                    <div key={btn.id} className="py-3 rounded-full">
                        <button
                            className={`cursor-pointer py-3 transition-all duration-300
                        ${active === btn.id ? "bg-white px-15 bg-[white] rounded-t-full text-black font-extrabold" : "text-black"}
                        `}

                            onClick={() => setActive(btn.id)}
                            // Opcional: bloqueia novamente clique no botão já ativo
                            disabled={active === btn.id}
                            style={active === btn.id ? { opacity: 0.8, cursor: "default" } : {}}
                        >
                            {btn.label}
                        </button>
                    </div>
                ))}


            </div>

            <div className="transition-all">
                <div className="bg-white -mt-[15px] p-[2rem] rounded-[16px]">
                    <div key={active} className="fade-slide-in">
                        {active === "Atendendo" && <Atendendo />}
                        {active === "Proximos" && <Proximos />}
                        {active === "Revisar" && <Revisar />}
                        {active === "Disponibilidade" && <Disponibilidade />}
                    </div>
                </div>
            </div>

        </>


    );
}
