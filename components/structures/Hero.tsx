import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 w-full">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-yellow-100 p-6 md:p-12 rounded-xl">

        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <Badge
            variant="secondary"
            className="bg-white text-orange-500 border rounded-full px-4 py-1"
          >
            Trusted by 500+ Women Residents
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            A Safe and Comfortable PG for Girls in <br />
            <span className="text-blue-900">Dwarka Mor</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base">
            Girls-only PG with 24/7 security, verified management, and all essential amenities for peaceful living.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm sm:text-base">
            <span>✔ Girls-Only</span>
            <span>✔ 24/7 Security</span>
            <span>✔ Verified Owner</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button className="bg-blue-900 text-white">View Available Rooms</Button>
            <Button variant="outline">Schedule a Call</Button>
          </div>

          {/* Price, Rating, Trust */}
          <div className="flex flex-wrap sm:flex-nowrap gap-6 justify-center md:justify-start mt-4 text-sm">
            <div className="flex flex-col">
              <h3 className="font-bold text-black text-lg">Rs. 8,000</h3>
              <p>starting from/month</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">4.3💥</h3>
              <p>Resident Rating</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">3+</h3>
              <p>Years Trusted</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <Card className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/home.jpg"
            alt="PG Room"
            width={600}
            height={400}
            className="object-cover w-full h-64 sm:h-72 md:h-96"
          />
        </Card>
      </div>
    </section>
  )
}
