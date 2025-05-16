'use client'

import { useState } from 'react'

type Project = {
  title: string
  category: string
  subcategory?: string
  image: string
  link: string
  video?: boolean
}

const categories = [
  'All',
  'Branding',
  'Advertising',
  'Web Design',
  'Video Production',
  'Book Layout',
  'Strategy',
]

const generateProjects = (): Project[] => {
  const projects: Project[] = []

  // 50 Branding
  for (let i = 1; i <= 50; i++) {
    projects.push({
      title: `Branding Project ${i}`,
      category: 'Branding',
      image: `/projects/branding/LOGO/logo${i}.jpg`,
      link: '#',
    })
  }

  // // 47 Advertising - Content
  // for (let i = 1; i <= 47; i++) {
  //   projects.push({
  //     title: `Advertising Content ${i}`,
  //     category: 'Advertising',
  //     subcategory: 'Content',
  //     image: `/projects/advertising/content/CW${i}.jpg`,
  //     link: '#',
  //   })
  // }

  // Additional Vimeo Videos for Advertising - Content
  const advertisingContentVideos = [
    {
      title: 'Aadaigal Sudiya Maharani Jingle for Saravana Store, the Crown Mall- MEDIA95 ADS - JINGLE',
      link: 'https://vimeo.com/272954304',
      thumb: '/projects/advertising/content/CW1.jpg',
    },
    {
      title: 'AZHAGO AZHKU NEEYAZHAKU JINGLE FOR LUCKY SILK',
      link: 'https://vimeo.com/274694737',
      thumb: '/projects/advertising/content/CW2.jpg',
    },
    {
      title: 'THE LEGEND NEW SARAVANA STORES - DEEPAVALI - TVC',
      link: 'https://vimeo.com/273498572',
      thumb: '/projects/advertising/content/CW3.jpg',
    },
    {
      title: 'Seematti Regular Ad',
      link: 'https://vimeo.com/273501400',
      thumb: '/projects/advertising/content/CW4.jpg',
    },
    {
      title: 'Manjal Neeratta Maalai Malar Kondu jingle song for Saara Fashion 60SEC',
      link: 'https://vimeo.com/273485165',
      thumb: '/projects/advertising/content/CW5.jpg',
    },
    {
      title: 'Mangala Naalinilea Jingle for Shona Silks & Readymades-Tirunelveli 60 SEC',
      link: 'https://vimeo.com/273460210',
      thumb: '/projects/advertising/content/CW6.jpg',
    },
    {
      title: 'IRAIVAN ARULAAL JINGLE FOR SHONA SILKS & READYMADES - RAMZAN',
      link: 'https://vimeo.com/273460067',
      thumb: '/projects/advertising/content/CW7.jpg',
    },
    {
      title: 'Yar Ival yar ival devathai Jingle for Aathikalathu Alangara Maaligai',
      link: 'https://vimeo.com/273458896',
      thumb: '/projects/advertising/content/CW8.jpg',
    },
    {
      title: 'JAI SRI KRISHNAR SILKS IN MANGALAM JINGLE FOR JAI SRI KRISHNAR SILK',
      link: 'https://vimeo.com/274694470',
      thumb: '/projects/advertising/content/CW9.jpg',
    },
    {
      title: 'Pada pada pattasu vedikkuthu jingle for Mura Silk',
      link: 'https://vimeo.com/273457521',
      thumb: '/projects/advertising/content/CW10.jpg',
    },
    {
      title: 'DEEPAVALI DEPAAVALI JINGLE FOR LUCKY SILK',
      link: 'https://vimeo.com/274694573',
      thumb: '/projects/advertising/content/CW11.jpg',
    },
    {
      title: 'ADIYATHI SETHI ONNU KELUNGA JINGLE FOR JAI SRI KRISHNA SILK',
      link: 'https://vimeo.com/274694351',
      thumb: '/projects/advertising/content/CW12.jpg',
    },
    {
      title: 'Jimmy jimmy jimiki kammal jingle for Saravana Store, the Crown Mall',
      link: 'https://vimeo.com/272956228',
      thumb: '/projects/advertising/content/CW13.jpg',
    },
    {
      title: 'Minnum thanga nilavo jingle for Mura Silk',
      link: 'https://vimeo.com/272957830',
      thumb: '/projects/advertising/content/CW14.jpg',
    },
    {
      title: 'RAJA RAJA MAHARAJA JINGLE FOR MAHARAJA',
      link: 'https://vimeo.com/274694245',
      thumb: '/projects/advertising/content/CW15.jpg',
    },
    {
      title: 'AARAMBAM ARAMBAM JINGLE FOR SRI MANJUNAATHA SILK',
      link: 'https://vimeo.com/274694198',
      thumb: '/projects/advertising/content/CW16.jpg',
    },
    {
      title: 'LATCHATHIL ONTRAI LATCHANAMAI JINGLE FOR SRI MANJUNAATHA SILK',
      link: 'https://vimeo.com/274694107',
      thumb: '/projects/advertising/content/CW17.jpg',
    },
    {
      title: 'SEEMATI MAYILADUTHURAI DIWALI',
      link: 'https://vimeo.com/273503820',
      thumb: '/projects/advertising/content/CW18.jpg',
    },
    {
      title: 'SEMA SEMA SEMA THOOL LUCKY SILKS JINGLE FOR LUCKY SILKS',
      link: 'https://vimeo.com/274694011',
      thumb: '/projects/advertising/content/CW19.jpg',
    },
    {
      title: 'Deepangal Eatrida jingle for KV Tex',
      link: 'https://vimeo.com/273459675',
      thumb: '/projects/advertising/content/CW20.jpg',
    },
    {
      title: 'Ad Content Video 21',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW21.jpg',
    },
    {
      title: 'Ad Content Video 22',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW22.jpg',
    },
    {
      title: 'Ad Content Video 23',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW23.jpg',
    },
    {
      title: 'Ad Content Video 24',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW24.jpg',
    },
    {
      title: 'Ad Content Video 25',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW25.jpg',
    },
    {
      title: 'Ad Content Video 26',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW26.jpg',
    },
    {
      title: 'Ad Content Video 27',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW27.jpg',
    },
    {
      title: 'Ad Content Video 28',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW29.jpg',
    },
    {
      title: 'Ad Content Video 30',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW31.jpg',
    },
    {
      title: 'Ad Content Video 32',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW32.jpg',
    },
{
      title: 'Ad Content Video 33',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW33.jpg',
    },
    {
      title: 'Ad Content Video 34',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW34.jpg',
    },
    {
      title: 'Ad Content Video 35',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW35.jpg',
    },
    {
      title: 'Ad Content Video 36',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW36.jpg',
    },
    {
      title: 'Ad Content Video 37',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW27.jpg',
    },
    {
      title: 'Ad Content Video 38',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW38.jpg',
    },
    {
      title: 'Ad Content Video 39',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW39.jpg',
    },
    {
      title: 'Ad Content Video 40',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW40.jpg',
    },
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
    {
      title: 'Ad Content Video 44',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW44.jpg',
    },
    {
      title: 'Ad Content Video 45',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW45.jpg',
    },
    {
      title: 'Ad Content Video 46',
      link: 'https://vimeo.com/user85748189',
      thumb: '/projects/advertising/content/CW46.jpg',
    },
    {
      title: 'Ad Content Video 47',
      // link: 'https://vimeo.com/274694737',
      thumb: '/projects/advertising/content/CW47.jpg',
    },
    // Add more video objects as needed
  ]

  advertisingContentVideos.forEach((video) => {
    projects.push({
      title: video.title,
      category: 'Advertising',
      subcategory: 'Content',
      image: video.thumb,
      link: video.link,
      video: true,
    })
  })

  // 10 Web Design
  for (let i = 1; i <= 5; i++) {
    projects.push({
      title: `Web Design ${i}`,
      category: 'Web Design',
      image: `/projects/web/WD${i}.jpg`,
      link: '#',
    })
  }


const videoproductionMaking = [
    {
      title: 'Where Technology Meets Creativity | Leading Corporate Video Maker in Chennai | Easton Media',
      link: 'https://www.youtube.com/watch?v=-2IssnqUbcc',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Grundfos Water Solutions - Client Testimonial Video from Kashmir farmers-Sustainable Water Solutions',
      link: 'https://www.youtube.com/watch?v=NAskw8MtmVg',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Grundfos Water Systems - Solar pumping stations improve lives in remote Kashmir Valley',
      link: 'https://www.youtube.com/watch?v=JiB1T61QKgE',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Asteria Aerospace - Designs and Develops drone-based solutions - Corporate Video by Easton Media',
      link: 'https://www.youtube.com/watch?v=ybJ6uVnoXho',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Powerol - Concrete Recycling Plant - Product Explainer Video',
      link: 'https://www.youtube.com/watch?v=1R1MayoJcQQ',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Grundfos - Sustainable Water Solutions in Kashmir Valley - Teaser Video - Solar pumping station',
      link: 'https://www.youtube.com/watch?v=AiJVFOYzXMo',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Asteria Aerospace - Inside Asterias - Corporate Work Culture, employee testimonial & speech',
      link: 'https://www.youtube.com/watch?v=SOD5G3g-DN8',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Asteria Aerospace - Corporate Work Culture, Employee Speech and Testimonials',
      link: 'https://www.youtube.com/watch?v=fN5wNOl5uig',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'KPT Pipes - PPR Pipes & Fittings - Indias leading plastic pipes manufacturing company',
      link: 'https://www.youtube.com/watch?v=fKvC4Sq_6Jg',
      thumb: '/projects/video/making/VC.jpg',
    },
    {
      title: 'Panametrics | Flow Measurement Devices - Baker Hughes - Russian Language',
      link: 'https://www.youtube.com/watch?v=ayzYVh3ToUk',
      thumb: '/projects/video/making/VC.jpg',
    },
  ]
  
  videoproductionMaking.forEach((video) => {
    projects.push({
      title: video.title,
      category: 'Video Production',
      subcategory: 'Making',
      image: video.thumb,
      link: video.link,
      video: true,
    })
  })

  
  // // 3 Video Production - Making
  // for (let i = 1; i <= 3; i++) {
  //   projects.push({
  //     title: `Video Making ${i}`,
  //     category: 'Video Production',
  //     subcategory: 'Making',
  //     image: `/projects/video/making/VM${i}.jpg`,
  //     link: '#',
  //   })
  // }

  // 2 Video Production - Production
  for (let i = 1; i <= 2; i++) {
    projects.push({
      title: `Video Production ${i}`,
      category: 'Video Production',
      subcategory: 'Production',
      image: `/projects/video/production/VP${i}.jpg`,
      link: '#',
    })
  }

  // 100 Book Layout
  for (let i = 1; i <= 96; i++) {
    projects.push({
      title: `Book Layout ${i}`,
      category: 'Book Layout',
      image: `/projects/book/book layout-wrapper${i}.jpg`,
      link: '#',
    })
  }

  // 5 Strategy
  for (let i = 1; i <= 4; i++) {
    projects.push({
      title: `Strategy Plan ${i}`,
      category: 'Strategy',
      image: `/projects/strategy/SP${i}.jpg`,
      link: '#',
    })
  }

  return projects
}

const allProjects = generateProjects()

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">


      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>

      {/* Category Filters */}
      <div className="text-center mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === cat
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block shadow-lg rounded overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute bottom-0 bg-black/70 text-white p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm">
                {project.subcategory
                  ? `${project.category} - ${project.subcategory}`
                  : project.category}
              </p>
              {project.video && (
                <span className="text-yellow-300 text-xs">▶ Video</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
