import { useState } from "react";

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100dvh-90px-60px)] flex items-center justify-center bg-[#f6f6f6] w-full">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm  p-6">
        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-1.5 text-xs font-medium rounded-full transition-all ${
              isLogin ? "bg-white text-black shadow-sm" : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-1.5 text-xs font-medium rounded-full transition-all ${
              !isLogin ? "bg-white text-black shadow-sm" : "text-gray-500"
            }`}
          >
            Cadastro
          </button>
        </div>

        {/* Content Wrapper (static height) */}
        <div className="relative h-105">
          {/* Login */}
          <div
            className={`absolute inset-0 transition-opacity duration-200 ${
              isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-lg font-semibold mb-1">Entrar na sua conta</h2>
            <p className="text-xs text-gray-500 mb-4">
              Use seu usuário ou email para acessar
            </p>

            <div className="space-y-3">
              <label className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Nome de usuário ou email</label>
              <input
                type="text"
                placeholder="Usuário ou email"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
              />

              <label className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Senha</label>
              <input
                type="password"
                placeholder="Senha"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
              />

              <button className="w-full bg-black text-white py-2 rounded-md text-xs font-medium">
                Entrar
              </button>
            </div>
          </div>

          {/* Register */}
          <div
            className={`absolute inset-0 transition-opacity duration-200 ${
              !isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-lg font-semibold mb-1">Criar conta</h2>
            <p className="text-xs text-gray-500 mb-4">
              Preencha os dados abaixo
            </p>

            <div className="space-y-3">
              <label className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nome completo</label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
              />

              <label className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nome de usuário</label>
              <input
                type="text"
                placeholder="Usuário"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
              />

              <label className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
              />

              <label className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Senha</label>
              <input
                type="password"
                placeholder="Senha"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
              />

              <label className="flex items-start gap-2 text-[10px] text-gray-500 leading-snug">
                <input type="checkbox" className="mt-0.5" />
                <span>
                  Li e aceito os <b>Termos de Uso</b> e a <b>Política de Privacidade</b>
                </span>
              </label>

              <button className="w-full bg-black text-white py-2 rounded-md text-xs font-medium">
                Criar conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
