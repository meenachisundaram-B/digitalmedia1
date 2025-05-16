'use client';

import { useState } from 'react';

// Define the Project type
export type Project = {
  title: string;
  category: string;
  subcategory?: string;
  image: string;
  link: string;
  video?: boolean;
};

// Define available categories and subcategories
export const categories = [
  { name: 'All', subcategories: [] },
  { name: 'Branding', subcategories: ['Logo', 'Label', 'Packing'] },
  { name: 'Advertising', subcategories: ['Content', 'Production'] },
  { name: 'Web Design', subcategories: ['Portfolio', 'Ecommerce', 'Blogs'] },
  { name: 'Video Production', subcategories: ['Cinematography', 'Production'] },
  { name: 'Book Layout', subcategories: ['Wrapper', 'Inner'] },
  { name: 'Strategy', subcategories: [] },
];

// Main generator function
export const generateProjects = (): Project[] => {
  const projects: Project[] = [];

  // Branding Projects (Sample: Logo)
  for (let i = 1; i <= 50; i++) {
    projects.push({
      title: `Branding Project ${i}`,
      category: 'Branding',
      subcategory: 'Logo',
      image: `/projects/branding/LOGO/logo${i}.jpg`,
      link: '#',
    });
  }

  // Advertising Content Projects with Vimeo Videos
  const advertisingContentVideos = [
    {
      title: 'Aadaigal Sudiya Maharani Jingle for Saravana Store',
      link: 'https://vimeo.com/272954304',
      thumb: '/projects/advertising/content/CW1.jpg',
    },
    {
      title: 'AZHAGO AZHKU NEEYAZHAKU JINGLE FOR LUCKY SILK',
      link: 'https://vimeo.com/274694737',
      thumb: '/projects/advertising/content/CW2.jpg',
    },
    // ... (you can keep extending this array)
    {
      title: 'Ad Content Video 41',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW42.jpg',
    },
    {
      title: 'Ad Content Video 43',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW43.jpg',
    },
  ];

  // Add video projects to main list
  advertisingContentVideos.forEach((video) => {
    projects.push({
      title: video.title,
      category: 'Advertising',
      subcategory: 'Content',
      image: video.thumb,
      link: video.link,
      video: true,
    });
  });

  return projects;
};
