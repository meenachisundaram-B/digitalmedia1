'use client'

import Link from 'next/link'

const services = [
  {
    title: 'Advertising',
    desc: 'Creative & strategic campaigns across media.',
    link: '/services/advertising',
  },
  {
    title: 'Video Production',
    desc: 'Script to screen visual storytelling.',
    link: '/services/video-production',
  },
  {
    title: 'Branding',
    desc: 'Identity, logo, and full brand systems.',
    link: '/services/branding',
  },
  {
    title: 'Web Design',
    desc: 'Modern, responsive websites with UX/UI focus.',
    link: '/services/web-design',
  },
  {
    title: 'Book Layout',
    desc: 'Print & digital layout designs for publishers.',
    link: '/services/book-layout',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-teal-600 text-center">
      <h2 className="text-3xl font-bold mb-10 text-white">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-teal-50">
              <h3 className="text-xl font-semibold mb-2 text-teal-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
