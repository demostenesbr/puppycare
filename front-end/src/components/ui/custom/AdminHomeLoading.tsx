import { useEffect, useState } from "react";
import { Typewriter } from "./Typewriter";
import "../dog-loader.css"; // conforme já está certo

export default function AdminHomeLoading({ loaded, funcionario }: { loaded: boolean, funcionario: string }) {
    const [visible, setVisible] = useState(true);
    const [minPassed, setMinPassed] = useState(false);

    // Timer de 7 segundos
    useEffect(() => {
        const timer = setTimeout(() => setMinPassed(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    // Reage quando ambos: página carregada E mínimo atingido
    useEffect(() => {
        if (loaded && minPassed) {
            setVisible(false);
        }
    }, [loaded, minPassed]);

    // Bloqueia scroll durante loading
    useEffect(() => {
        if (visible) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex flex-col bg-[#1A112E] h-screen justify-center items-center z-50">
            <Typewriter
                texts={[`Bem vindo(a) ${funcionario}!`]}
                typeSpeed={100}
                deleteSpeed={50}
                pauseBetween={4000}
                className="typewriter-font text text-7xl"
            />
            {/* Loader dog animado */}
            {/* From Uiverse.io by Emmaline-ozi */}
            <div className="main relative">
                <div className="dog absolute inset-0 z-0">
                    <div className="dog__paws">
                        <div className="dog__bl-leg leg">
                            <div className="dog__bl-paw paw"></div>
                            <div className="dog__bl-top top"></div>
                        </div>
                        <div className="dog__fl-leg leg">
                            <div className="dog__fl-paw paw"></div>
                            <div className="dog__fl-top top"></div>
                        </div>
                        <div className="dog__fr-leg leg">
                            <div className="dog__fr-paw paw"></div>
                            <div className="dog__fr-top top"></div>
                        </div>
                    </div>

                    <div className="dog__body">
                        <div className="dog__tail"></div>
                    </div>

                    <div className="dog__head">
                        <div className="dog__snout">
                            <div className="dog__eyes">
                                <div className="dog__eye-l"></div>
                                <div className="dog__eye-r"></div>
                            </div>
                        </div>
                    </div>

                    <div className="dog__head-c">
                        <div className="dog__ear-r"></div>
                        <div className="dog__ear-l"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
