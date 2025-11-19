"use client";

import { useState } from "react";
import { Dog } from "lucide-react";
import Image from "next/image";

export function Atendendo() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    }

    return (
        <div>
            <div className="p-2 border-2 border-black rounded-md w-max mx-auto">
                <div className="flex flex-col items-center justify-center gap-2">
                    {/* input escondido */}
                    <input
                        id="pet-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {/* label que engloba a imagem: clique nela abre o input */}
                    <label htmlFor="pet-photo" className="cursor-pointer">
                        <div className="w-[300px] h-[300px] relative">
                            <Image
                                src={previewUrl || "https://placehold.co/300x300.png?text=Imagem"}
                                alt="Dog"
                                className="object-cover rounded-md border"
                                fill
                            />
                        </div>
                    </label>

                    <div className="flex flex-row gap-2 items-center">
                        <Dog className="w-8 h-8" />
                        <span className="font-bold text-lg">Malu</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
