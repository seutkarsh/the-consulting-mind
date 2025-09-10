import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, business, phone, message } = await req.json();

        const auth = new google.auth.GoogleAuth({
            credentials: {
                type: process.env.GOOGLE_TYPE,
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = process.env.SHEET_ID;

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:F", // adjust if your sheet name differs
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[name, email, business, phone, message, new Date().toISOString()]],
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Google Sheets Error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
