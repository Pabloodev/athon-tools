import React from 'react';
import { Eye } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h1 className="text-5xl font-medium text-white font-light mb-2">Athon Tools</h1>
          <h1 className="text-4xl text-white font-light mb-2">
            Suas ferramentas, sua gestão, sua vida mais facil.
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[780px] bg-[#0a192f]/80 backdrop-blur-sm p-12 flex flex-col justify-center">

        <h2 className="text-2xl text-white font-medium mb-2">Seja bem vindo athon colaborador! ✨</h2>
        <p className="text-gray-400 mb-8">
          Insira suas credenciais para continuar ou entre em contato com nossa{' '}
          <a href="#" className="text-[#3182ce] hover:underline">
            equipe de suporte
          </a>
          .
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">E-mail</label>
            <input
              type="email"
              className="input-style"
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Senha</label>
            <div className="relative">
              <input
                type="password"
                className="input-style pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Entrar →
          </button>
        </form>

      </div>
    </div>
  );
}

export default Home;