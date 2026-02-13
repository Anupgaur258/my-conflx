
import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "127.0.0.1"

    //  Location here
    let country = ""
    let region = ""

    try {
      const geoRes = await fetch(`http://ip-api.com/json/${ip}`)
      const geoData = await geoRes.json()
      country = geoData.country || ""
      region = geoData.regionName || ""
    } catch (err) {}

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Timestamp here
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })

    const values = [[
      timestamp,
      body.name,
      body.email,
      body.roomType,
      body.message,
      ip,
      region && country ? `${region}, ${country}` : "",
      body.entryUrl || "",
      body.referral || "",
      body.source || "",
    ]]

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Contact!A:J",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("ERROR:", error)
    return NextResponse.json({ success: false })
  }
}