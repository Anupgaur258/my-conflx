import Image from "next/image"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function Highlight() {
  const highlights = [
    {
      img: "/next.svg",
      alt: "Aadhar Verified",
      text: "Aadhar Verified Residents",
    },
    {
      img: "/next.svg",
      alt: "Girls Only",
      text: "Girl Only",
    },
    {
      img: "/next.svg",
      alt: "Secure Entry",
      text: "Secure Entry System",
    },
  ]

  return (
    <section className="px-6 py-16 w-full text-white">
      <div className="max-w-4xl w-full mx-auto bg-blue-800 text-white rounded-lg p-8 grid sm:grid-cols-3 gap-6 text-center">
        {highlights.map((item, i) => (
          <Card
            key={i}
            className="bg-transparent border-none shadow-none"
          >
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={item.img}
                width={44}
                height={44}
                alt={item.alt}
              />
              <p className="text-white">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
