// components/PortfolioGrid.tsx

const portfolioItems = [
  {
    title: 'Ad Campaign for Eco Shoes',
    image: '/portfolio/eco-shoes.jpg',
    category: 'Advertising',
  },
  {
    title: 'Music Video – Dreamscape',
    image: '/portfolio/dreamscape.jpg',
    category: 'Video Production',
  },
  {
    title: 'Luxury Brand Identity',
    image: '/portfolio/lux-brand.jpg',
    category: 'Branding',
  },
  {
    title: 'Responsive Web Design for StartupX',
    image: '/portfolio/startupx.jpg',
    category: 'Web Design',
  },
  {
    title: 'Art Book Layout – “Colours of Mind”',
    image: '/portfolio/artbook.jpg',
    category: 'Book Layout',
  },
]

export default function PortfolioGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item, index) => (
        <div key={index} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-gray-500">{item.category}</p>
            <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
