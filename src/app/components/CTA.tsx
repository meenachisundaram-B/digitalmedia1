// components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-16 bg-teal-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
      <p className="mb-6 text-gray-300">Let’s create something amazing together.</p>
      <a href="/contact" className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
        Contact Us
      </a>
    </section>
  )
}
