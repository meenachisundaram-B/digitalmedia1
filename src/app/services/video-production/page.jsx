'use client';

import React from 'react';

const videoProductionServices = [
  'Ad Film Making',
  'Explainer Videos',
  'Motion Graphics',
  '2D/3D Animation',
  '3D Product Demo',
  'YouTube Content Creation',
  'Video Editing & Post Production',
  'Voice Over Integration',
  'Script Writing for Videos',
  'Corporate Video Production',
  'Event Videography',
  'Product Showcases',
  'Social Media Reels & Shorts'
];

const VideoProductionPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          🎬 Video Production Services
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We bring stories to life through powerful visuals, expert editing, and professional production. Our team works with creative precision to deliver exceptional content.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videoProductionServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoProductionPage;
