import { NextResponse } from "next/server";

export async function GET() {
    const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/usuarios`);

    if (!res.ok) {
        return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
    const body = await request.json();

    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        return NextResponse.json({ error: "Erro ao criar usuário" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
