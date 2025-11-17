import { Star, Users, Sparkles, GitFork } from 'lucide-react'

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 bg-gradient-to-b from-black to-[#0a0a0f] relative">
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(600px_circle_at_bottom_right,rgba(59,130,246,0.12)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Community-led, license friendly</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Transparent by design. Reproducible runs, clear audit trails, and an ecosystem built in the open so you can trust and extend every part.</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li className="flex items-start gap-3"><Star className="h-5 w-5 mt-0.5 text-violet-300" /> Permissive license for commercial use</li>
              <li className="flex items-start gap-3"><Users className="h-5 w-5 mt-0.5 text-violet-300" /> Active governance and contributor guide</li>
              <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 mt-0.5 text-violet-300" /> Starter strategies and eval suites included</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-black bg-white hover:bg-slate-100 shadow-sm text-sm font-semibold transition"
              >
                <GitFork className="h-4 w-4 mr-2" /> Fork & contribute
              </a>
              <a
                href="#faq"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-white/10 hover:bg-white/15 border border-white/10 shadow-sm text-sm font-semibold transition"
              >
                Read FAQ
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-orange-400/20 border border-white/10" />
            <p className="mt-4 text-sm text-slate-300">Drop in your own models, brokers, and data providers through a simple adapter interface. Everything is typed, tested, and documented.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
