'use client';

import React from 'react';

const photographyServices = [
  'Product Photography',
  'Event Coverage',
  'Fashion Shoots',
  'Architectural Photography',
  'Behind the Scenes Shoots',
  'Corporate Portraits',
  'Food & Beverage Photography',
  'Lifestyle Shoots',
  'Real Estate Shoots',
  'Candid Photography',
  'Model Portfolio Shoots',
  '360° Product Spins',
  'E-commerce Photography',
  'High-Resolution Edits',
  'Photo Album Design',
];

const PhotographyPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          📸 Photography
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          Freeze your moments with stunning precision — our photography services deliver beauty, emotion, and professionalism in every frame.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photographyServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-5 border border-gray-200"
            >
              <div className="text-gray-800 text-lg font-semibold mb-1">{service}</div>
              <p className="text-sm text-gray-600">
                Expert lighting, composition & edits tailored for your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PhotographyPage;
