"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:4000/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        router.replace("/admin");
      } else {
        setError(data.message || data.error || "Usuário ou senha inválidos");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao autenticar. Tente novamente.");
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ background: "#1A112E" }}
    >
      <div className="bg-[#E3E3E3] rounded-xl shadow-md w-full max-w-sm p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/brand/logo-redondo-maior-rosa.png"
              alt="Logo Puppy Care"
              width={180}
              height={180}
              style={{ borderRadius: "50%" }}
              priority
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 mb-4 border-1 border-black rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="w-full p-2 border-1 border-black rounded pr-10"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {error && (
            <div className="text-red-600 mb-4 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-700 transition"
          >
            Entrar
          </button>
          <div className="flex justify-between items-center mt-4">
            <span>
              <p className="text-sm text-black">
                <a href="/admin/usuarios/ForgotPassword">
                  Esqueceu a sua senha?
                </a>
              </p>
            </span>
            <span>
              <p className="text-sm text-black">
                <a href="/admin/usuarios/NewAccount">Criar nova conta</a>
              </p>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
