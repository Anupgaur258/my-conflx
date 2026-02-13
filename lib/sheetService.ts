import { formatInTimeZone } from "date-fns-tz"
import { JWT } from "google-auth-library"
import { GoogleSpreadsheet } from "google-spreadsheet"

class SheetService {
  doc: GoogleSpreadsheet

  constructor() {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    this.doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      serviceAccountAuth
    )
  }

  async addContactForm(
    Name: string,
    Email: string,
    RoomType: string,
    Message: string,
    EntryUrl: string,
    Referral: string,
    Source: string,
    IP: string,
    Location: string
  ) {
    await this.doc.loadInfo()


    const sheet = this.doc.sheetsByTitle["Dummy"]

    await sheet.addRow({
      Date: formatInTimeZone(
        new Date(),
        "Asia/Kolkata",
        "dd/MM/yyyy hh:mm aa"
      ),
      Name,
      Email,
      "Room Type": RoomType,
      Message,
      "Entry URL": EntryUrl,
      Referral,
      Source,
      IP,
      Location,
    })
  }
}

export default new SheetService()
