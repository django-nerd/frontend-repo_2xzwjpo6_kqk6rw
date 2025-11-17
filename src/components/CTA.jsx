export default function CTA() {
  return (
    <section id="get-started" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 sm:p-12 shadow-[0_0_120px_-40px_rgba(124,58,237,0.5)]">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 opacity-20 blur-3xl" />
          <div className="max-w-2xl relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Start building your AI trading agent</h3>
            <p className="mt-3 text-slate-300">Clone the repo, run the example strategies, and connect your broker in minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-black bg-white hover:bg-slate-100 shadow-sm text-sm font-semibold transition"
              >
                View Documentation
              </a>
              <a
                href="#opensource"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-white/10 hover:bg-white/15 border border-white/10 shadow-sm text-sm font-semibold transition"
              >
                Why Open Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
