
import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const timestamp = new Date().toISOString()

    const values = [[
      timestamp,
      body.name,
      body.email,
      body.roomType,
      body.message,
      body.entryUrl,
      body.referral,
      body.source,
    ]]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Contact!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("ERROR:", error)
    return NextResponse.json({ success: false })
  }
}