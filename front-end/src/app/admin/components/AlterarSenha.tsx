import { useState } from "react";

interface Props {
  nome: string;
  onPasswordChange: (novaSenha: string) => Promise<void>;
}

export default function AlterarSenha({ nome, onPasswordChange }: Props) {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem("");
    if (novaSenha !== confirmacao) {
      setMensagem("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    try {
      await onPasswordChange(novaSenha);
      setMensagem("Senha alterada com sucesso!");
      setNovaSenha("");
      setConfirmacao("");
    } catch {
      setMensagem("Erro ao alterar senha.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Alterar senha de {nome}</h2>
      <input
        type="password"
        placeholder="Nova senha"
        className="w-full p-2 mb-2 border rounded"
        value={novaSenha}
        onChange={e => setNovaSenha(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirme a nova senha"
        className="w-full p-2 mb-4 border rounded"
        value={confirmacao}
        onChange={e => setConfirmacao(e.target.value)}
        required
      />
      {mensagem && <div className="mb-2 text-center text-blue-600">{mensagem}</div>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Alterando..." : "Alterar Senha"}
      </button>
    </form>
  );
}
