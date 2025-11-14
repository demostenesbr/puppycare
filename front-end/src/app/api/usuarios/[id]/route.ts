import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
    
    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/usuarios/${params.id}`);

    if (!res.ok) {
        return NextResponse.json({ error: 'Usuário não encontrado' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
    const body = await request.json();

    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/usuarios/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/usuarios/${params.id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        return NextResponse.json({ error: 'Erro ao deletar usuário' }, { status: res.status });
    }

    return NextResponse.json({ success: true });
}
