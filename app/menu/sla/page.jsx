"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft } from "lucide-react"
import Image from "next/image"

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) return alert("Escolha um arquivo!");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);
    alert(result ? "Upload concluído!" : "Erro no upload");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative gap-20">
      <Link
        href={"/menu"}
        className="flex items-center hover:text-gray-400 transition duration-500 absolute top-6 left-5"
      >
        <ChevronLeft />
        <span>Menu</span>
      </Link>

      <div className="flex items-center gap-2 absolute top-6">
        <Image
          src={"/athonfav.png"}
          width={30}
          height={30}
          alt="Athon telecom Icon"
        />
        <h1>Acompanhamento SLA</h1>
      </div>


        <p className="text-orange-300">
          Selecione um arquivo ou arraste clicando abaixo...
        </p>


      <div className="w-100 flex items-center gap-2">
        <input
          type="file"
          accept=".xls,.xlsx"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="border-2 border-dashed p-10"
        />

        <button className="p-8 hover:bg-sky-950" onClick={handleUpload} disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
