import { google } from "googleapis";
import credentials from "../../credentials.json"; // ⚠️ Certifique-se de que este arquivo está no .gitignore!

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = "1LKJIeRRsNtY-lRilxCSy-EE7vf3P7gcWRczQF_T0LR4";

export async function updateGoogleSheet(data) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Converter os dados para um formato aceito pelo Google Sheets
  const values = data.map((row) => Object.values(row));

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "A1", // Muda para onde quer inserir os dados
    valueInputOption: "RAW",
    requestBody: { values },
  });

  return response.data;
}
