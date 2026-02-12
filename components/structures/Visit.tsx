"use client"

import { Button } from "@/components/ui/button"

export default function Visit() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        <div className="rounded-3xl bg-gradient-to-r from-yellow-100 via-yellow-100 to-yellow-200 p-12 md:p-16 shadow-xl text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Book a Visit & Feel Safe <br className="hidden md:block" />
            Like Home
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 mb-8">
            Visit the PG, meet our team, and choose with confidence
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* WhatsApp Button */}
            <Button
              variant="outline"
              className="px-6 py-6 text-base border-2 border-indigo-900 text-indigo-900 rounded-xl hover:bg-indigo-50"
            >
              Chat on WhatsApp
            </Button>

            {/* Schedule Button */}
            <Button
              className="px-6 py-6 text-base bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl"
            >
              Schedule a Visit
            </Button>

          </div>

        </div>
      </div>
    </section>
  )
}
