export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A112E]">
      <div className="bg-[#E3E3E3] rounded-xl shadow-md w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Recuperar Senha</h2>
        <p className="mb-4 text-center text-gray-700">Digite seu e-mail cadastrado para receber instruções de recuperação.</p>
        <form>
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-2 mb-4 border-2 border-gray-400 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
