import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustIndicators from '../components/TrustIndicators'
import Technology from '../components/Technology'
import Services from '../components/Services'
import K9Feature from '../components/K9Feature'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Technology />
        <Services />
        <K9Feature />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
