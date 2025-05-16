// components/Navbar.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Your Brand</Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/services" className="hover:text-gray-400">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link>
          <Link href="/client" className="block">clients</Link>
          <Link href="/career" className="block">career</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white space-y-4 px-4 py-6">
          <Link href="/" className="block">Home</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/portfolio" className="block">Portfolio</Link>
          <Link href="/clients" className="block">clients</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/clients" className="block">career</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  )
}
