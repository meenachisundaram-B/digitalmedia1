'use client'

import React from 'react'

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Clients on Collaborative Projects</h2>
        <p className="text-lg text-gray-700">We are delighted to have worked together with our clients on various projects.</p>
      </div>

      {/* Our Client Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-teal-800">Projects We Have Worked On</h2>
      </div>

      {/* Client Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="flex justify-center">
          <img src="/clients/CL1.jpg" alt="Client 1" className="h-26" />
        </div>
        <div className="flex justify-center">
          <img src="/clients/CL2.jpg" alt="Client 2" className="h-26" />
        </div>
        <div className="flex justify-center">
          <img src="/clients/Cl3.jpg" alt="Client 3" className="h-26" />
        </div>
        <div className="flex justify-center">
          <img src="/clients/CL4.jpg" alt="Client 4" className="h-26" />
        </div>
        <div className="flex justify-center">
          <img src="/clients/CL5.png" alt="Client 5" className="h-26" />
        </div>
        <div className="flex justify-center">
          <img src="/clients/CL6.jpg" alt="Client 6" className="h-26" />
        </div>
        {/* Add more client logos as necessary */}
      </div>

      {/* Message Section */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-teal-800 mb-4">We are pleased to have worked with the following clients:</h3>
        <p className="text-lg text-gray-700">
          "It has been a pleasure working with these wonderful companies on various projects. Their collaboration and trust have been instrumental in achieving mutual success."
        </p>
      </div>
    </div>
  )
}
