'use client';

import React from 'react';

const webDesignItems = [
  'Business Website',
  'Ecommerce Website',
  'Portfolio Website',
  'Personal Blog',
  'Landing Pages',
  'UI/UX Design',
  'Web App Design',
  'Responsive Design',
  'WordPress Themes',
  'Corporate Websites',
  'One Page Websites',
  'Interactive Experiences',
  'Booking Systems',
  'Multilingual Sites',
  // ✅ Newly added
  'SEO Optimization',
  'Website Maintenance',
  'Accessibility Design',
];

const WebDesignPage = () => {
  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
          🌐 Web Design Services
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          We create engaging, user-friendly and scalable websites to suit your brand and business needs. From landing pages to complex web apps, we've got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {webDesignItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition duration-300 rounded-xl p-5 shadow-md hover:shadow-xl border border-blue-200"
            >
              <h3 className="text-lg font-semibold text-blue-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WebDesignPage;
