import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { retrievalCard } from "../../data/retrievalCard"
import { retrieval } from "../../lib/actions/actions"

export default async function Page() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center relative gap-20">
            <Link href={"/menu"} className="flex items-center hover:text-gray-400 transition duration-500 absolute top-6 left-5">
                <ChevronLeft />
                <span>Menu</span>
            </Link>

            <div className="flex items-center gap-2 absolute top-6">
                <Image src={"/athonfav.png"} width={30} height={30} alt="Athon telecom Icon" />
                <h1>Reagendamento de retiradas</h1>
            </div>

            <div className="flex flex-col gap-4 items-center text-lg">
                <p>Clique no botão abaixo <span className="text-blue-500">para ativar o script</span>.</p>
                <button onClick={retrieval} className="hover:bg-blue-950">Ativar Robo</button>
            </div>

            <div>
                <ul className="flex items-center gap-10">
                    {retrievalCard.map((item, index) => (
                        <li key={index} className="border-1 border-gray-400 p-4 w-[300px] h-[200px] max-w-[300px] flex items-center justify-center flex-col gap-5 rounded-sm">
                            <h1 className="text-center">{item.title}</h1>
                            <item.icon size={50} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
