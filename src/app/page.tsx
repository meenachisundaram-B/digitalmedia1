// app/page.tsx
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import CTA from './components/CTA'



export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CTA />
    </div>
  )
}
