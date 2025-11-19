import { Dog, Play, Settings2, UserRound } from "lucide-react";
import { useState } from "react";
import { ToggleSwitchButton } from "./ui/ToggleSwitchButton";



type AgendaItem = {
    time: string;
    day: string;
    pet: string;
    owner: string;
    services: string[];
    price: string;
};

const ITEMS: AgendaItem[] = [
    {
        time: "09:00",
        day: "14/11/2025",
        pet: "Pakun",
        owner: "Kakashi",
        services: ["Banho", "Tosa"],
        price: "R$ 120,00",
    },
    {
        time: "10:00",
        day: "15/11/2025",
        pet: "Scooby Doo",
        owner: "Salsicha",
        services: ["Banho", "Tosa"],
        price: "R$ 80,00",
    },
    {
        time: "11:00",
        day: "17/11/2025",
        pet: "Kripto",
        owner: "Superman",
        services: ["Banho"],
        price: "R$ 80,00",
    },
    {
        time: "12:00",
        day: "17/11/2025",
        pet: "Bruce",
        owner: "Wayne",
        services: ["Tosa"],
        price: "R$ 80,00",
    },
    {
        time: "13:00",
        day: "17/11/2025",
        pet: "Lassie",
        owner: "Wayne",
        services: ["Banho"],
        price: "R$ 80,00",
    },
    {
        time: "14:00",
        day: "17/11/2025",
        pet: "Garfield",
        owner: "Wayne",
        services: ["Banho"],
        price: "R$ 80,00",
    },
];

function AgendaRow({ item }: { item: AgendaItem }) {
    const STATES: Array<"-50%" | "0%" | "50%"> = ["-50%", "0%", "50%"];

    const [shift, setShift] = useState<"-50%" | "0%" | "50%">("0%");
    return (
        <div className="flex flex-row p-2 border-2 border-black rounded-md mt-10">

            <div>
                {/* horário */}

                <div>
                    <span className="text-2xl pt-4 pb-10 px-5 bg-gray-200 border-2 border-black rounded-md items-center">
                        {item.time}

                    </span>
                    <br />
                    <span className="flex justify-center">
                        {item.day}
                    </span>
                </div>

            </div>



            <div className="grid grid-cols-[80px_100px_200px] items-center gap-4 mx-auto">

                {/* pet */}
                <span className="flex flex-row items-center gap-2 text-sm">
                    <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                        <Dog size={20} />
                    </span>
                    <span className="truncate">{item.pet}</span>
                </span>


                {/* tutor */}
                <span className="flex flex-row items-center gap-2 text-sm">
                    <span className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                        <UserRound size={20} />
                    </span>
                    <span className="truncate">{item.owner}</span>
                </span>

                {/* serviços + valor */}
                <div className="flex flex-row items-center gap-1 bg-green-400 rounded-md">
                    <div className="flex flex-row">
                        {item.services.map(service => (
                            <span
                                key={service}
                                className="bg-white rounded-md text-xs text-black m-1 p-2"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <span className="font-bold text-sm whitespace-nowrap ml-auto m-2">
                        {item.price}
                    </span>
                </div>


            </div>

            {/* settings */}

            <div className="flex my-auto">
                <ToggleSwitchButton />
            </div>



        </div>
    );
}

export function Revisar() {

    return (
        <div className="space-y-4">
            {ITEMS.map(item => (
                <AgendaRow key={`${item.time}-${item.pet}-${item.owner}`} item={item} />
            ))}
        </div>
    );
}
