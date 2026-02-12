"use client"

import { Sparkles, Users, ShieldCheck, Home, Utensils, Wind } from "lucide-react"

export default function Facilities() {

  const facilities = [
    {
      icon: Sparkles,
      title: "Daily Cleaning Staff",
      desc: "Regular professional cleaning maintains hygiene, cleanliness.",
    },
    {
      icon: Users,
      title: "Only Female Staff",
      desc: "Trained female staff ensure safety and comfort.",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Security",
      desc: "Round-the-clock surveillance for security.",
    },
    {
      icon: Home,
      title: "Fully Furnished Rooms",
      desc: "Rooms are fully furnished with essential furniture.",
    },
    {
      icon: Utensils,
      title: "3 Times Meal (Home-made)",
      desc: "Fresh hygienic meals served daily.",
    },
    {
      icon: Wind,
      title: "Fully Air-Conditioned",
      desc: "Comfortable living in all seasons.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-100">

      <div className="max-w-6xl mx-auto bg-yellow-100 p-8 rounded-3xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Amenities & Facilities
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {facilities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}
