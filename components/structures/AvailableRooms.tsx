 "use client"

import Image from "next/image"
import { BedDouble, Wifi, Bath } from "lucide-react"

export default function AvailableRooms() {

  const rooms = [
    {
      title: "Double Sharing Room",
      price: "₹13,000/month",
      image: "/image.webp",
      features: ["1 Bed", "Wifi", "+ 3 more"],
    },
    {
      title: "Double Sharing Room",
      price: "₹10,000/month",
      image: "/imagetwo.webp",
      features: ["1 Bed", "Attached Bathroom"],
    },
    {
      title: "Single Sharing Room",
      price: "₹9,000/month",
      image: "/imagetwo.webp",
      features: ["1 Bed", "Attached Bathroom"],
    },
    {
      title: "Double Sharing Room",
      price: "₹13,000/month",
      image: "/imagetwo.webp",
      features: ["1 Bed", "Wifi", "+ 3 more"],
    },
    {
      title: "Single Sharing Room",
      price: "₹9,000/month",
      image: "/imagetwo.webp",
      features: ["1 Bed", "Attached Bathroom"],
    },
    {
      title: "Double Sharing Room",
      price: "₹10,000/month",
      image: "/imagetwo.webp",
      features: ["1 Bed", "Attached Bathroom"],
    },
  ]

  return (
    <section id="rooms" className="py-16 px-4 bg-gray-10">

      <div className="max-w-7xl mx-auto">

        {/* Header  here*/}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Available Rooms
          </h2>

          <p className="text-gray-500 mt-2 md:mt-0">
            Comfortable, secure, and fully furnished room options designed for girls’ living
          </p>
        </div>

        {/* Grid  apply*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >

              {/* Image  here*/}
              <div className="relative w-full h-56">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover cursor-pointer"
                />
              </div>

              {/* Content here*/}
              <div className="p-5">

                <h3 className="text-lg font-semibold mb-3">
                  {room.title}
                </h3>

                {/* Features here */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg">
                    {room.price}
                  </p>

                  <button className=" cursor-pointer text-blue-600 font-medium hover:underline">
                    Book Visit
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
