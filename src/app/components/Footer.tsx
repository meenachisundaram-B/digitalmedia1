// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Your Brand</h3>
            <p className="text-gray-400">Innovating the world with creativity.</p>
          </div>

          <div className="space-x-6 mb-6 md:mb-0">
            <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
            <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
            <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md"
            />
            <button className="px-4 py-2 bg-teal-700 text-white rounded-r-md hover:bg-teal-500 hover:text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>© 2025 Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
