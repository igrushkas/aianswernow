import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Guarantee from './components/Guarantee'
import Features from './components/Features'
import AudioDemo from './components/AudioDemo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import AskAI from './components/AskAI'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AudioDemo />
      <Guarantee />
      <Features />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <AskAI />
      <Footer />
    </div>
  )
}
