import { NextResponse } from "next/server";
import * as xlsx from "xlsx";
import { google } from "googleapis";
import { updateGoogleSheet } from "./../../lib/googleSheets";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
  }

  // Ler o arquivo como buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Processar a planilha
  const workbook = xlsx.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0]; // Pegando a primeira aba
  const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Enviar para Google Sheets
  const response = await updateGoogleSheet(data);
  return NextResponse.json(response);
}
