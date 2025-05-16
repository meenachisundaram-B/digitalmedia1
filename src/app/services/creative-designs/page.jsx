'use client';

import React from 'react';

const creativeDesignItems = [
  'Branding',
  'Logo Design',
  'Brochure Design',
  'Flyer Design',
  'Business Cards',
  'Letterhead & Stationery',
  'Infographics',
  'Social Media Creatives',
  'Poster Design',
  'Sticker & Label Design',
  'Invitation Cards',
  'Print Ads (Newspaper / Magazine)',
  'Billboard Design',
  'Menu Design (Restaurant / Café)',
  'Corporate Presentation Design',
  'Packaging Mockups',
  'Illustration & Sketches',
  'Icon Pack Design',
  'Merchandise Design (T-shirts, Mugs, etc.)'
];

const CreativeDesignPage = () => {
  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
          🎨 Creative Design Services
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          From logo creation to branded merchandise, we craft visuals that communicate your unique identity. Perfect for startups, businesses, and creators looking to make a mark.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {creativeDesignItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition duration-300 rounded-xl p-5 shadow-md hover:shadow-xl border border-pink-200"
            >
              <h3 className="text-lg font-semibold text-pink-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CreativeDesignPage;
