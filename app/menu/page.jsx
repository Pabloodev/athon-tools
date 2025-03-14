import Link from "next/link";
import { cardData } from "../data/menuCard";
import { ChevronRight } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center flex flex-wrap gap-8 p-8">

      <div className="flex flex-col items-center fixed top-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-medium">A</span>
          <span className="text-xl font-medium">T</span>
          <span className="text-xl font-medium">H</span>
          <Image src={"/athonfav.png"} width={20} height={20} alt="letter Icon"/>
          <span className="text-xl font-medium">N</span>
        </div>
        <p className="font-medium tracking-widest">MENU</p>
      </div>

      <ul className="flex items-center gap-10">
        {cardData.map((card, index) => (
          <li key={index} className="p-5 border-1 border-gray-400 rounded-lg max-w-[350px] flex flex-col gap-4 items-center">
            <h1>{card.title}</h1>
            <p className="text-gray-300 text-center">{card.description}</p>
            <card.icon size={50}/>
            <Link href={card.link} className="flex items-center gap-1 hover:text-blue-400  transition duration-400">
              <span>Acessar App</span>
              <ChevronRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}