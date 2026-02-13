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

  const row1 = facilities.slice(0, 3)
  const row2 = facilities.slice(3, 6)

  const Card = ({ item }: any) => {
    const Icon = item.icon
    return (
      <div className="min-w-[280px] bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-start gap-3 mb-3">
          <Icon className="w-6 h-6 text-orange-500" />
          <h3 className="font-semibold text-lg">{item.title}</h3>
        </div>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    )
  }

  return (
    <section id="facilities" className="py-16 px-4 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto bg-yellow-100 p-8 rounded-3xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Amenities & Facilities
        </h2>

        {/* Row 1 - LEFT */}
        <div className="overflow-hidden mb-8">
          <div className="flex gap-6 animate-slideLeft">
            {[...row1, ...row1].map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - RIGHT */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-slideRight">
            {[...row2, ...row2].map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>

      </div>

      {/* css here */}
      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-slideLeft {
          animation: slideLeft 15s linear infinite;
        }

        .animate-slideRight {
          animation: slideRight 15s linear infinite;
        }
      `}</style>

    </section>
  )
}
