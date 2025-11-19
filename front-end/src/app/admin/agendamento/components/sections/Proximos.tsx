import { Dog, Play, Settings2, UserRound } from "lucide-react";

type AgendaItem = {
    time: string;
    pet: string;
    owner: string;
    services: string[];
    price: string;
};

const ITEMS: AgendaItem[] = [
    {
        time: "09:00",
        pet: "Jujuba",
        owner: "Maria Zezinha",
        services: ["Banho", "Tosa"],
        price: "R$ 120,00",
    },
    {
        time: "10:00",
        pet: "Bolt",
        owner: "Joel Miller",
        services: ["Banho"],
        price: "R$ 80,00",
    },
    {
        time: "11:00",
        pet: "Flash",
        owner: "Barry Allen",
        services: ["Banho"],
        price: "R$ 80,00",
    },
];

function AgendaRow({ item }: { item: AgendaItem }) {
    return (
        <div className="flex flex-row p-2 border-2 border-black rounded-md mt-10">

            <div>
                {/* horário */}
                <span className="text-3xl p-4 bg-gray-200 border-2 border-black rounded-md text-center mr-2">
                    {item.time}
                </span>
            </div>

            {/* play */}
            <button className="bg-primary p-2 rounded-md text-white font-bold hover:bg-primary/80 transition-colors cursor-pointer flex items-center justify-center mr-2">
                <Play size={20} />
            </button>


            <div className="grid grid-cols-[80px_100px_200px] items-center mx-auto gap-4">

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

            <button className="bg-primary p-2 rounded-md text-white font-bold hover:bg-primary/80 transition-colors cursor-pointer flex items-center justify-center ml-auto">
                <Settings2 size={20} />
            </button>

        </div>
    );
}

export function Proximos() {

    return (
        <div className="space-y-4">
            {ITEMS.map(item => (
                <AgendaRow key={`${item.time}-${item.pet}-${item.owner}`} item={item} />
            ))}
        </div>
    );
}
