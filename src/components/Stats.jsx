export default function Stats() {
  const items = [
    { val: '12k+', label: 'GitHub Stars' },
    { val: '50ms', label: 'Signal Latency' },
    { val: '20+', label: 'Providers' },
    { val: '99.9%', label: 'Uptime' },
  ]

  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{i.val}</div>
              <div className="mt-1 text-sm text-slate-300">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
