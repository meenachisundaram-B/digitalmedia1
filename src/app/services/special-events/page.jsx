'use client';

import React from 'react';

const specialEventsServices = [
  'Entertainment Shows',
  'Conference & Dealer Meets',
  'Model Management',
  'Product Launch Events',
  'Road Shows',
  'Award Functions',
  'Annual Day Celebrations',
  'Stage Design & Setup',
  'Celebrity Coordination',
  'Anchors & Emcees',
  'Light & Sound Setup',
  'Event Photography & Videography',
  'Customized Theme Events',
  'Stall Fabrication',
  'Live Streaming Support',
];

const SpecialEventsPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          🎉 Special Events
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          From grand stages to intimate launches, we bring your vision to life with precision and flair.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specialEventsServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-5 border border-gray-200"
            >
              <div className="text-gray-800 text-lg font-semibold mb-1">{service}</div>
              <p className="text-sm text-gray-600">
                Professionally executed event solutions tailored to your goals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SpecialEventsPage;
