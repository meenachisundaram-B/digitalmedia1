// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { GoogleAnalytics } from 'nextjs-google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Agency Name',
  description: 'Creative Agency for Advertising, Video & Branding',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <GoogleAnalytics strategy="afterInteractive" /> */}
        <main className="min-h-screen bg-white text-black">
          {children}
        </main>
         <Footer />
      </body>
    </html>
  )
}


