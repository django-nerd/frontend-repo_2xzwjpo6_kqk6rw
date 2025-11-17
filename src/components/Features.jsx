import { Shield, LineChart, PlugZap, Workflow } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <LineChart className="h-5 w-5 text-slate-700" />,
      title: 'Alpha Streams',
      desc: 'Multi-asset market data, embeddings, and signal pipelines optimized for low latency.'
    },
    {
      icon: <Workflow className="h-5 w-5 text-slate-700" />,
      title: 'Reasoning Engine',
      desc: 'Tree-of-thought planning with backtesting hooks and human-in-the-loop checkpoints.'
    },
    {
      icon: <Shield className="h-5 w-5 text-slate-700" />,
      title: 'Risk Guardrails',
      desc: 'Position sizing, max drawdown, stop logic, and circuit breakers baked in.'
    },
    {
      icon: <PlugZap className="h-5 w-5 text-slate-700" />,
      title: 'Plugin Ecosystem',
      desc: 'Bring your own broker, data vendor, or model weights with simple adapters.'
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for real markets</h2>
          <p className="mt-3 text-slate-600">Thoughtful defaults, clean APIs, and production-grade primitives so you can ship with confidence.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-black/5 bg-slate-50 p-5 hover:bg-white transition shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-white border border-black/5 flex items-center justify-center shadow-sm">
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
