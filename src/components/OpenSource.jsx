import { Star, Users, Sparkles } from 'lucide-react'

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Community-led, license friendly</h2>
            <p className="mt-3 text-slate-600 max-w-xl">Transparent by design. Reproducible runs, clear audit trails, and an ecosystem built in the open so you can trust and extend every part.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><Star className="h-5 w-5 mt-0.5" /> Permissive license for commercial use</li>
              <li className="flex items-start gap-3"><Users className="h-5 w-5 mt-0.5" /> Active governance and contributor guide</li>
              <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 mt-0.5" /> Starter strategies and eval suites included</li>
            </ul>
          </div>
          <div className="relative rounded-2xl border border-black/5 bg-slate-50 p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-orange-400/20 border border-black/5" />
            <p className="mt-4 text-sm text-slate-600">Drop in your own models, brokers, and data providers through a simple adapter interface. Everything is typed, tested, and documented.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
