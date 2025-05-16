'use client';

import React from 'react';

const ServiceCard = ({ icon, title, description, items }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300">
    <div className="flex items-center mb-4">
      <div className="text-3xl mr-3">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-500 text-sm mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
