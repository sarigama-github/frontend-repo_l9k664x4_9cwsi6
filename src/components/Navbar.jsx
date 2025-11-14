import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Maison', href: '#maison' },
    { label: 'Collection', href: '#collection' },
    { label: 'Craft', href: '#craft' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Fragrance', href: '#fragrance' },
    { label: 'Bespoke', href: '#bespoke' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/10 backdrop-blur-xl border-b border-white/30" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-200/60 via-fuchsia-200/60 to-indigo-200/60 border border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_10px_30px_-10px_rgba(99,102,241,0.35)] backdrop-blur-md flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-indigo-600" />
          </div>
          <span className="text-xl font-semibold tracking-wide bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Maison Éclat</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700/80 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#bespoke" className="px-4 py-2 rounded-full bg-white/60 hover:bg-white/80 border border-white/40 shadow-sm backdrop-blur-md text-slate-800 text-sm transition">Book Atelier</a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/60 border border-white/40 backdrop-blur-md" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden relative mx-4 mt-2 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden">
          <div className="px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-3 text-slate-800/90 border-b border-white/40 last:border-none" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#bespoke" className="mt-2 py-3 text-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-white font-medium shadow-lg" onClick={() => setOpen(false)}>
              Book Atelier
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
