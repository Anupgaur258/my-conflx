import Image from "next/image"

export default function GridImage() {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Header  here*/}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Look Inside Our PG
          </h2>

          <p className="text-gray-500 mt-3 md:mt-0">
            Rooms, dining area and common spaces
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Image */}
          <div className="relative h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/image.webp"
              alt="PG Balcony"
              fill
              className="cursor-pointer object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[215px] rounded-2xl overflow-hidden">
              <Image
                src="/imagetwo.webp"
                alt="PG Balcony Small"
                fill
                className="cursor-pointer object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="relative h-[215px] rounded-2xl overflow-hidden">
              <Image
                src="/imagetwo.webp"
                alt="PG Common Area"
                fill
                className="cursor-pointer object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/image.webp"
              alt="PG Dining Area"
              fill
              className="cursor-pointer object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
