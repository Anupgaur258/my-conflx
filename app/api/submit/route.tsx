import { NextResponse } from "next/server"
import SheetService from "@/lib/sheetService"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "127.0.0.1"


    let finalSource = body.source

    if (!finalSource || finalSource === "") {
      if (body.referral) {
        try {
          finalSource = new URL(body.referral).hostname
        } catch {
          finalSource = "Direct"
        }
      } else {
        finalSource = "Direct"
      }
    }

    await SheetService.addContactForm(
      body.name || "",
      body.email || "",
      body.roomType || "",
      body.message || "",
      body.entryUrl || "",
      body.referral || "",
      finalSource,
      ip,
      ""
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false })
  }
}
