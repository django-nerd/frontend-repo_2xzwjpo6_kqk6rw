import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import OpenSource from './components/OpenSource'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OpenSource />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} OpenTrade AI. Built by the community.
      </footer>
    </div>
  )
}

export default App
