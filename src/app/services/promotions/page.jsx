'use client';

import React from 'react';

const promotionServices = [
  'TV Commercials',
  'Newspaper Ads',
  'Theatre Ads',
  'Flyer Design',
  'Poster Campaigns',
  'Social Media Ad Packs',
  'Radio Jingles',
  'WhatsApp Marketing Creatives',
  'Event Promotion Designs',
  'Transit Advertising (Buses, Autos)',
  'Email Campaign Graphics',
  'Outdoor Banners',
  'In-store Promotions',
  'Launch Campaign Kits',
  'Multilingual Promotion Assets',
];

const PromotionsPage = () => {
  return (
    <main className="bg-yellow-50 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-yellow-800 mb-12">
          📣 Promotions
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          Boost your brand's visibility with our all-around promotional design services. Be it print, screen, or street—we've got your message covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promotionServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 border border-gray-200"
            >
              <div className="text-yellow-600 text-xl mb-2 font-semibold">{service}</div>
              <p className="text-sm text-gray-600">
                Creative solutions to amplify your promotional impact.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PromotionsPage;
