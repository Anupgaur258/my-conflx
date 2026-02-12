"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3E3A7A] py-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm font-medium">
            <Link href="#" className="hover:text-gray-300 transition">
              About Us
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Workspace Solutions
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Contact
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white">
            <Link href="#">
              <Linkedin className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#">
              <Instagram className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
