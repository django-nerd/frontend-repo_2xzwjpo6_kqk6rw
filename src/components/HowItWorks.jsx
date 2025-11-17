import { Network, Brain, Lock, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Network className="h-5 w-5" />, title: 'Ingest', desc: 'Stream ticks, fundamentals, and news into a unified event bus.'
    },
    {
      icon: <Brain className="h-5 w-5" />, title: 'Plan', desc: 'Reason over context windows with ToT and tool-use to form a trade plan.'
    },
    {
      icon: <Lock className="h-5 w-5" />, title: 'Guard', desc: 'Risk checks, position sizing, and circuit breakers at every hop.'
    },
    {
      icon: <Rocket className="h-5 w-5" />, title: 'Execute', desc: 'Route orders to your broker and monitor with live PnL telemetry.'
    }
  ]

  return (
    <section id="how" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">A minimal, modular pipeline from data to execution.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-violet-300">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
