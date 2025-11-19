import { useState, useRef } from "react";

type AlterarSenhaProps = {
  nome: string;
  onPasswordChange: (novaSenha: string) => Promise<void> | void;
};

function AlterarSenha({ nome, onPasswordChange }: AlterarSenhaProps) {
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!senha) return;
        setLoading(true);
        try {
          await onPasswordChange(senha);
          setSenha("");
          inputRef.current?.blur();
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-2"
    >
      <div className="text-center font-medium">Alterar senha de {nome}</div>
      <input
        ref={inputRef}
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Nova senha"
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded px-3 py-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Alterando..." : "Alterar senha"}
      </button>
    </form>
  );
}

export default function UsuariosPage() {
  // Simulação: nome do usuário logado
  const nomeUsuario = typeof window !== 'undefined' ? (JSON.parse(atob((localStorage.getItem('admin_token')||'').split('.')[1]||''))?.nome || "Usuário") : "Usuário";
  const [senhaAlterada, setSenhaAlterada] = useState(false);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Usuários</h2>
      <AlterarSenha
        nome={nomeUsuario}
        onPasswordChange={async (novaSenha: string) => {
          // Chamada para backend alterar senha
          const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
          const res = await fetch("http://localhost:4000/usuarios/nova-senha", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ nome: nomeUsuario, novaSenha }),
          });
          if (!res.ok) throw new Error("Erro ao alterar senha");
          setSenhaAlterada(true);
        }}
      />
      {senhaAlterada && (
        <div className="mt-4 text-green-600 text-center font-bold">Senha alterada com sucesso!</div>
      )}
    </div>
  );
}
