import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PlansSection from '@/components/PlansSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PlansSection />
      <AboutSection />
      <Footer />
    </>
  )
}
