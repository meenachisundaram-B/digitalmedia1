'use client';

import React from 'react';
import ServiceCard from '@/components/ServiceCard';

const BookDesignsPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          📚 Book Design Services
        </h1>

        <p className="text-center text-gray-700 mb-8 text-lg">
          We offer comprehensive book design solutions, combining aesthetics and readability for every genre.
        </p>

        <ServiceCard
          icon="📚"
          title="Book Design"
          description="We craft every page with precision—from covers to content layout."
          items={[
            'Cover Design',
            'Inner Layouts',
            'Print-ready Formatting',
            'ISBN & Barcode Integration',
            'Author Branding Assets',
            'Typography Design',
            'Table of Contents',
            'Spine Design',
            'Children’s Book Layouts',
            'Poetry & Anthology Styling',
          ]}
        />
      </div>
    </main>
  );
};

export default BookDesignsPage;
