'use client';

import React from 'react';

const celebrationsServices = [
  'Musical Nights',
  'Wedding Planning',
  'Birthday Parties',
  'Housewarming Events',
  'Festival Events',
  'Themed Parties',
  'Engagement Functions',
  'Anniversary Celebrations',
  'Naming Ceremonies',
  'Cultural Events',
  'Traditional Decor & Setup',
  'Live Performances',
  'Event Catering Management',
  'Guest Management',
  'Customized Invitations',
];

const CelebrationsPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          🎊 Celebrations
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          Every celebration deserves a magical touch. We create moments that last a lifetime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {celebrationsServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-5 border border-gray-200"
            >
              <div className="text-gray-800 text-lg font-semibold mb-1">{service}</div>
              <p className="text-sm text-gray-600">
                Designed with love, executed with elegance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CelebrationsPage;
