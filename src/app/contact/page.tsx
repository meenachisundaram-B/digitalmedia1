'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    if (data.success) {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('Error sending message. Please try again later.')
    }
  }

  return (
    <div
      className="min-h-screen bg-teal-600 bg-cover bg-center p-6 md:p-12"
      // style={{
      //   backgroundImage: "url('/image/BI1.jpg')",
      // }}
    >
      <div className="max-w-6xl mx-auto my-20 bg-white bg-opacity-90 rounded-xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800"
            >
              Send Message
            </button>
            {status && <p className="text-center text-lg">{status}</p>}
          </form>
        </div>

        {/* Address + Map */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
          <p className="text-lg text-gray-700 mb-2">123 Innovation Street</p>
          <p className="text-lg text-gray-700 mb-2">Chennai, Tamil Nadu 600001</p>
          <p className="text-lg text-gray-700 mb-2">Email: support@example.com</p>
          <p className="text-lg text-gray-700 mb-6">Phone: +91 98765 43210</p>

          <div className="aspect-video rounded-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4660833504816!2d80.24054807502241!3d13.084622013341682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661b2ef6f3db%3A0xa0f2f8c7b73cfc88!2sChennai%20Central!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
