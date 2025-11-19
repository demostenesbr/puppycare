export default function NewAccount() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A112E]">
      <div className="bg-[#E3E3E3] rounded-xl shadow-md w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Nova Conta</h2>
        <form>
          <input
            type="text"
            placeholder="Nome Completo"
            className="w-full p-2 mb-4 border-2 border-gray-400 rounded"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 mb-4 border-2 border-gray-400 rounded"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 mb-4 border-2 border-gray-400 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-700 transition"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
}
