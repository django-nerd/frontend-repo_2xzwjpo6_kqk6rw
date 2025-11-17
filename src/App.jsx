import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import OpenSource from './components/OpenSource'
import CTA from './components/CTA'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <OpenSource />
        <Testimonials />
        <CTA />
        <Faq />
      </main>
      <footer className="py-10 text-center text-sm text-slate-400 border-t border-white/10">
        © {new Date().getFullYear()} OpenTrade AI — Built by the community.
      </footer>
    </div>
  )
}

export default App
