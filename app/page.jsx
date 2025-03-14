import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">

          <div className='flex items-center gap-5'>
            <Image src={"/athonfav.png"} width={40} height={40} alt='Athon Telecom Icon' />
            <h1 className="text-5xl font-medium text-white font-light mb-2">Athon Tools</h1>
          </div>

          <h1 className="text-2xl text-white font-light mb-2">
            Suas ferramentas, sua gestão, sua vida mais facil.
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[780px] bg-zinc-800/40 backdrop-blur-sm p-12 flex flex-col justify-center">

        <h2 className="text-2xl text-white font-medium mb-2">Seja bem vindo athon colaborador! ✨</h2>
        <p className="text-gray-400 mb-8">
          Insira suas credenciais para continuar ou entre em contato com nossa{' '}
          <a href="#" className="text-[#3182ce] hover:underline">
            equipe de suporte
          </a>
          .
        </p>


        <Link href={"/menu"}>
          <button type="submit" className="btn-primary hover:bg-zinc-800 transition-700">
            Entrar →
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;