import Link from "next/link";

export default function AdminMenuItem({
    icon,
    label,
    href,
    isOpen,
    danger = false,
    className,
    active = false,
    onClick
}: {
    icon: React.ReactNode;
    label: string;
    href?: string;
    isOpen: boolean;
    danger?: boolean;
    className?: string;
    active?: boolean;
    onClick?: () => void;
}) {

    const baseClasses = `
        flex items-center gap-3 rounded-md px-4 py-2
        transition-all duration-300
       ${danger
            ? "bg-[#E45C5C] hover:bg-[#F63434] text-black hover:text-white"
            : active
                ? "bg-[#333] text-white"
                : "bg-[#d1d6d2] hover:bg-[#444]"
        }
    ${className || ""}
    `;

    return href ? (
        <Link href={href} className={baseClasses}>
            {icon}
            {isOpen && <span>{label}</span>}
        </Link>
    ) : (
        <div onClick={onClick} className={`cursor-pointer text-currentColor hover:text-white ${baseClasses}`}>
            {icon}
            {isOpen && <span>{label}</span>}
        </div>
    );
}

