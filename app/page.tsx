import { BookingSection } from '../sections/BookingSection'
import { HeroSection } from '../sections/HeroSection'
import { PortfolioSection } from '../sections/PortfolioSection'
import { PricingSection } from '../sections/PricingSection'
import { ServicesSection } from '../sections/ServicesSection'

export default function HomePage() {
  return (
    <main className="page-shell">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BookingSection />
    </main>
  )
}
