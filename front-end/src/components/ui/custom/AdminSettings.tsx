import { Children } from "react";

export function AdminBlock({ children, className = " " }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`bg-[#d1d6d2] p-[2rem] mt-10 rounded-[2rem] ${className}`}>
            {children}
        </div>
    );
}

export function AdminBlockTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="flex justify-left text-7xl mb-5 text-[1.85rem]">
            {children}
        </h2>
    );
}

