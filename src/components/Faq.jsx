export default function Faq() {
  const faqs = [
    {
      q: 'Is this production-ready?',
      a: 'Yes. It ships with risk guardrails, typed interfaces, and testable modules. You own your infra and brokers.'
    },
    {
      q: 'Which markets are supported?',
      a: 'Equities, crypto, and futures out of the box. You can add adapters for others via the plugin system.'
    },
    {
      q: 'What models can I use?',
      a: 'Any. Local, hosted, or API-based. Use the tool interface to register new models and tools.'
    },
    {
      q: 'Do I need a GPU?',
      a: 'No for hosted models. For local inference and backtests, a recent GPU is recommended but optional.'
    }
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
          <p className="mt-3 text-slate-300">Answers to common questions.</p>
        </div>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 open:bg-white/5">
              <summary className="cursor-pointer list-none font-medium text-white flex items-center justify-between">
                <span>{f.q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
