import { google } from "googleapis"

export async function POST(req) {
  const body = await req.json()

  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  )

  const sheets = google.sheets({ version: "v4", auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        body.name,
        body.email,
        body.phone,
        body.message,
        body.ip,
        body.source,
        body.referrer,
        body.entry,
        new Date().toLocaleString()
      ]]
    }
  })

  return Response.json({ success: true })
}