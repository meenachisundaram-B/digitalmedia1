'use client';

import React from 'react';

const packageDesignServices = [
  'Product Packaging',
  'Label Design',
  'Gift Packaging',
  'Retail Display Design',
  'Festival Packaging',
  'Eco-friendly Packaging',
  'Luxury Packaging Concepts',
  '3D Mockups & Prototypes',
  'Custom Box Design',
  'Food Packaging Design',
  'Minimalistic Label Art',
  'Bottle & Jar Labeling',
  'Health & Beauty Product Packaging',
  'Packaging Material Consultation',
  'Export/Shipping Friendly Packaging',
  'Kids & Toy Packaging',
  'Pet Product Packaging',
  'Seasonal Edition Packaging',
];

const PackageDesignsPage = () => {
  return (
    <main className="bg-orange-50 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-800 mb-12">
          📦 Package Designs
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          From concept to shelf, we deliver packaging that pops! Our creative packaging designs blend functionality with visual appeal to help your product stand out and sell better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packageDesignServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-4 border border-gray-200"
            >
              <div className="text-orange-600 text-xl mb-2 font-semibold">{service}</div>
              <p className="text-sm text-gray-600">
                High-quality, brand-specific design that captures your product’s unique value.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PackageDesignsPage;
