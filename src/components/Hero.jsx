import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-24 pb-20 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0f] to-black">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark veil with radial focus */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 [background:radial-gradient(800px_circle_at_center,rgba(124,58,237,0.12)_0%,rgba(59,130,246,0.08)_35%,rgba(0,0,0,0.7)_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1 text-xs sm:text-sm font-medium text-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            Open Source AI Trading Agent
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Automate Your Trading with an Intelligent, Transparent Agent
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300/90 max-w-2xl">
            A community-driven agent that streams market insights, plans strategies, and executes with guardrails. Fully auditable, modular, and tuned for equities, crypto, and futures.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-black bg-white hover:bg-slate-100 shadow-sm text-sm font-semibold transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-white/10 hover:bg-white/15 border border-white/10 shadow-sm text-sm font-semibold transition">
              Explore Features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="rounded-lg bg-white/5 backdrop-blur border border-white/10 p-3">
              <p className="font-semibold text-white">Live Data</p>
              <p className="text-slate-300">Real-time feeds</p>
            </div>
            <div className="rounded-lg bg-white/5 backdrop-blur border border-white/10 p-3">
              <p className="font-semibold text-white">Strategy Graph</p>
              <p className="text-slate-300">Plan & simulate</p>
            </div>
            <div className="rounded-lg bg-white/5 backdrop-blur border border-white/10 p-3">
              <p className="font-semibold text-white">Guardrails</p>
              <p className="text-slate-300">Risk-managed</p>
            </div>
            <div className="rounded-lg bg-white/5 backdrop-blur border border-white/10 p-3">
              <p className="font-semibold text-white">Pluggable</p>
              <p className="text-slate-300">Open adapters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
