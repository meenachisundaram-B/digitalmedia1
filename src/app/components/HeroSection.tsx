'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-teal-200">
      {/* Background Image */}
      <div
        className="relative top-0 z-1 -0 h-full w-[60%] bg-contain bg-no-repeat bg-top"
        style={{
          backgroundImage: `url('./hero/hero-bg-3.png')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-700/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We Craft Brands, Stories & Experiences
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Advertising, Video Production, Branding & Digital Design — All in One Creative House.
        </p>
        <a
          href="/contact"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-800 transition"
        >
          Let's Talk
        </a>
        {/* <Link
  href="/services/advertising"
  className="inline-block mt-6 text-white underline hover:text-teal-300 transition"
>
  Learn More About Advertising →
</Link> */}
      </div>
    </section>
  )
}
