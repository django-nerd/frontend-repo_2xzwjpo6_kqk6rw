import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for contrast; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white">
        {/* extra subtle radial to frame the orb */}
        <div className="absolute inset-0 [background:radial-gradient(600px_circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_55%,rgba(255,255,255,0.9)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            Open Source AI Trading Agent
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Automate Your Trading with an Intelligent, Transparent Agent
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-700/90 max-w-2xl">
            A community-driven agent that streams market insights, plans strategies, and executes with guardrails. Fully auditable, modular, and tuned for equities, crypto, and futures.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-slate-900 hover:bg-slate-800 shadow-sm text-sm font-semibold transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-slate-900 bg-white/80 hover:bg-white border border-black/10 shadow-sm text-sm font-semibold transition">
              Explore Features
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600">
            <div className="rounded-lg bg-white/70 backdrop-blur border border-black/5 p-3">
              <p className="font-semibold text-slate-800">Live Data</p>
              <p>Real-time feeds</p>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur border border-black/5 p-3">
              <p className="font-semibold text-slate-800">Strategy Graph</p>
              <p>Plan & simulate</p>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur border border-black/5 p-3">
              <p className="font-semibold text-slate-800">Guardrails</p>
              <p>Risk-managed</p>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur border border-black/5 p-3">
              <p className="font-semibold text-slate-800">Pluggable</p>
              <p>Open adapters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
