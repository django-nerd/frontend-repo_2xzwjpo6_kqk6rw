import { Shield, LineChart, PlugZap, Workflow, Gauge, Boxes } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <LineChart className="h-5 w-5 text-violet-300" />,
      title: 'Alpha Streams',
      desc: 'Multi-asset market data, embeddings, and signal pipelines optimized for low latency.'
    },
    {
      icon: <Workflow className="h-5 w-5 text-violet-300" />,
      title: 'Reasoning Engine',
      desc: 'Tree-of-thought planning with backtesting hooks and human-in-the-loop checkpoints.'
    },
    {
      icon: <Shield className="h-5 w-5 text-violet-300" />,
      title: 'Risk Guardrails',
      desc: 'Position sizing, max drawdown, stop logic, and circuit breakers baked in.'
    },
    {
      icon: <PlugZap className="h-5 w-5 text-violet-300" />,
      title: 'Plugin Ecosystem',
      desc: 'Bring your own broker, data vendor, or model weights with simple adapters.'
    },
    {
      icon: <Gauge className="h-5 w-5 text-violet-300" />,
      title: 'Latency-aware',
      desc: 'Streaming I/O, batchless inference, and event-driven execution.'
    },
    {
      icon: <Boxes className="h-5 w-5 text-violet-300" />,
      title: 'Modular Core',
      desc: 'Composable nodes for data, policy, execution, and evaluation.'
    },
  ]

  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(600px_circle_at_top_left,rgba(124,58,237,0.12)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for real markets</h2>
          <p className="mt-3 text-slate-300">Thoughtful defaults, clean APIs, and production-grade primitives so you can ship with confidence.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08] hover:border-white/20">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
