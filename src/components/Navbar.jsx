import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-sm" />
          <span className="text-[15px] sm:text-base font-semibold tracking-tight text-slate-800 group-hover:opacity-90">
            OpenTrade AI
          </span>
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="#features"
            className="hidden md:inline-flex text-slate-700 hover:text-slate-900 text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-100 transition"
          >
            Features
          </a>
          <a
            href="#opensource"
            className="hidden md:inline-flex text-slate-700 hover:text-slate-900 text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-100 transition"
          >
            Open Source
          </a>
          <a
            href="#get-started"
            className="hidden md:inline-flex text-slate-700 hover:text-slate-900 text-sm font-medium px-3 py-2 rounded-lg hover:bg-slate-100 transition"
          >
            Get Started
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 px-3 sm:px-4 py-2 rounded-lg shadow-sm transition"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">Star on GitHub</span>
            <span className="sm:hidden">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
