import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-[0_0_40px_-10px_rgba(124,58,237,0.8)]" />
          <span className="text-[15px] sm:text-base font-semibold tracking-tight text-slate-100 group-hover:opacity-90">
            OpenTrade AI
          </span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          <a
            href="#features"
            className="hidden md:inline-flex text-slate-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition"
          >
            Features
          </a>
          <a
            href="#how"
            className="hidden md:inline-flex text-slate-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition"
          >
            How it works
          </a>
          <a
            href="#opensource"
            className="hidden md:inline-flex text-slate-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition"
          >
            Open Source
          </a>
          <a
            href="#faq"
            className="hidden md:inline-flex text-slate-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition"
          >
            FAQ
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-slate-100 px-3 sm:px-4 py-2 rounded-lg shadow-sm transition"
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
