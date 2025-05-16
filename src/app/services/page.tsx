'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    category: 'CREATIVE DESIGNS',
    icon: '🎨',
    items: [
      'Branding',
      'Logo Design',
      'Brochure Design',
      'Flyer Design',
      'Business Cards',
      'Letterhead',
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
      'Merchandise Design (T-shirts, Mugs, etc.)',
    ],
  },
  {
    category: 'BOOK DESIGNS',
    icon: '📚',
    items: [
      'Cover Design',
      'Inner Layouts',
      'Ebooks',
      'Print-ready Book Formatting',
      'Book Teasers',
      'Typography Design',
      'Content Development',
      'Proof-reading & Editing',
      'Catalog Design',
      'Magazine Layouts',
      'Table of Contents Design',
      'Spine Design',
      'ISBN & Barcode Integration',
      'Author Branding Assets',
      'Audio Book Creation - AI Voice',
      'Audio book Covers',
      'Audio book Teasers',
    ],
  },
  {
    category: 'WEB DESIGNS',
    icon: '💻',
    items: [
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
      'Website Maintanance',
      'Accessibility Websites',
      'Product-based Websites',

    ],
  },
  {
    category: 'VIDEO PRODUCTION',
    icon: '🎬',
    items: [
      'Ad Film Making',
      'Explainer Videos',
      'Motion Graphics',
      '2D/3D Animation',
      '3D Product Demo',
      'YouTube Content Creation',
    ],
  },
  {
    category: 'PACKAGE DESIGNS',
    icon: '📦',
    items: [
      'Product Packaging',
      'Label Design',
      'Gift Packaging',
      'Retail Display Design',
      'Festival Packaging',
    ],
  },
  {
    category: 'PROMOTIONS',
    icon: '📣',
    items: [
      'TV Commercials',
      'Newspaper Ads',
      'Theatre Ads',
      'Flyer Design',
      'Poster Campaigns',
      'Social Media Ad Packs',
    ],
  },
  {
    category: 'PHOTOGRAPHY',
    icon: '📸',
    items: [
      'Product Photography',
      'Event Coverage',
      'Fashion Shoots',
      'Architectural Photography',
      'Behind the Scenes Shoots',
    ],
  },
  {
    category: 'SPECIAL EVENTS',
    icon: '🎉',
    items: [
      'Entertainment Shows',
      'Conference & Dealer Meets',
      'Model Management',
      'Product Launch Events',
      'Road Shows',
    ],
  },
  {
    category: 'CELEBRATIONS',
    icon: '🎊',
    items: [
      'Musical Nights',
      'Wedding Planning',
      'Birthday Parties',
      'Housewarming Events',
      'Festival Events',
    ],
  },
];

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const ServicesPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h1>

        {/* Category Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${slugify(service.category)}`}
              className="bg-white hover:bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border"
            >
              {service.category}
            </Link>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{service.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800">{service.category}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
