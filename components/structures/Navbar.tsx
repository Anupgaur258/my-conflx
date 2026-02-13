export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4">

        {/* Logo */}
        <div className="flex  justify-center md:justify-start flex-1">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-36 cursor-pointer sm:w-44 md:w-52 lg:w-60 object-contain"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4 sm:gap-6 flex-1 text-sm sm:text-base">
          <a href="/#rooms" className="hover:text-blue-700 transition cursor-pointer">Rooms</a>
          <a href="/#gallery" className="hover:text-blue-700 transition cursor-pointer">Gallery</a>
          <a href="/#facilities" className="hover:text-blue-700 transition cursor-pointer ">Amenities</a>
          <a href="/contact" className="hover:text-blue-700 cursor-pointer   transition">Contacts</a>
        </div>

        {/* Connect Button */}
        <div className="flex justify-center md:justify-end flex-1">
          <a href="/contact"><button className="cursor-pointer bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-sm sm:text-base">
            Connect Now
          </button></a>

        </div>

      </div>
    </nav>
  );
}
