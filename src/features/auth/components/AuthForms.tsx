import { useState } from "react";

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100dvh-90px-60px)] flex items-center justify-center bg-[#f6f6f6] w-full">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6">
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

        <div className="relative h-[520px]">
          {/* LOGIN */}
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
              <div>
                <label className="text-[12px] font-medium">
                  Nome de usuário ou email
                </label>
                <input
                  type="text"
                  placeholder="Usuário ou email"
                  className="w-full mt-1 rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-[12px] font-medium">Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full mt-1 rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <button className="w-full bg-black text-white py-2 rounded-md text-xs font-medium">
                Entrar
              </button>
            </div>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                ou continue com
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* LinkedIn */}
            <button className="w-full border border-gray-200 rounded-md py-2 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-[#0A66C2]"
              >
                <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.026-3.036-1.851-3.036-1.852 0-2.135 1.447-2.135 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.368-1.851 3.602 0 4.267 2.372 4.267 5.456v6.284zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.99 20.45H3.683V9H6.99v11.45zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.224.792 24 1.771 24h20.451C23.2 24 24 23.224 24 22.271V1.729C24 .775 23.2 0 22.225 0z" />
              </svg>
              Entrar com LinkedIn
            </button>
          </div>

          {/* REGISTER */}
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
              <div>
                <label className="text-[12px] font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full mt-1 rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-[12px] font-medium">
                  Nome de usuário
                </label>
                <input
                  type="text"
                  placeholder="Usuário"
                  className="w-full mt-1 rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-[12px] font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-1 rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-[12px] font-medium">Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full mt-1 rounded-md border border-gray-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <label className="flex items-start gap-2 text-[10px] text-gray-500 leading-snug">
                <input type="checkbox" className="mt-0.5" />
                <span>
                  Li e aceito os <b>Termos de Uso</b> e a{" "}
                  <b>Política de Privacidade</b>
                </span>
              </label>

              <button className="w-full bg-black text-white py-2 rounded-md text-xs font-medium">
                Criar conta
              </button>
            </div>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                ou continue com
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* LinkedIn */}
            <button className="w-full border border-gray-200 rounded-md py-2 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-[#0A66C2]"
              >
                <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.026-3.036-1.851-3.036-1.852 0-2.135 1.447-2.135 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.368-1.851 3.602 0 4.267 2.372 4.267 5.456v6.284zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.99 20.45H3.683V9H6.99v11.45zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.224.792 24 1.771 24h20.451C23.2 24 24 23.224 24 22.271V1.729C24 .775 23.2 0 22.225 0z" />
              </svg>
              Cadastrar com LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
