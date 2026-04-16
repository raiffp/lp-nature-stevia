import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosBar from './components/LogosBar'
import PainSolution from './components/PainSolution'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Proof from './components/Proof'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="bg-surface text-on-surface antialiased">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <LogosBar />
        <PainSolution />
        <Benefits />
        <HowItWorks />
        <Proof />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
