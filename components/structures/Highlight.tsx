import Image from "next/image"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function Highlight() {
  const highlights = [
    {
      img: "/images/user.png",
      alt: "Aadhar Verified",
      text: "Aadhar Verified Residents",
    },
    {
      img: "/images/person-standing.png",
      alt: "Girls Only",
      text: "Girl Only",
    },
    {
      img: "/images/cctv.png",
      alt: "Secure Entry",
      text: "Secure Entry System",
    },
  ]

  return (
    <section className="w-full text-white">
      <div className="max-w-7xl w-full mx-auto bg-blue-900 text-white rounded-lg p-8 grid sm:grid-cols-3 gap-6 text-center">
        {highlights.map((item, i) => (
          <Card
            key={i}
            className="cursor-pointer bg-transparent border-none shadow-none"
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
