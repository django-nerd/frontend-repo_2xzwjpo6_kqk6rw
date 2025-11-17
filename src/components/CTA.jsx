export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 opacity-20 blur-3xl" />
          <div className="max-w-2xl relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Start building your AI trading agent</h3>
            <p className="mt-3 text-slate-600">Clone the repo, run the example strategies, and connect your broker in minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-slate-900 hover:bg-slate-800 shadow-sm text-sm font-semibold transition"
              >
                View Documentation
              </a>
              <a
                href="#opensource"
                className="inline-flex justify-center items-center px-5 py-3 rounded-lg text-slate-900 bg-white hover:bg-slate-50 border border-black/10 shadow-sm text-sm font-semibold transition"
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
