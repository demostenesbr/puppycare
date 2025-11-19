import { Children } from "react";

export function AdminBlock({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#BCBCBC] p-20 mt-10 rounded-md">
            {children}
        </div>
    );
}

export function AdminBlockTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="flex justify-left text-7xl mb-5">
            {children}
        </h2>
    );
}

