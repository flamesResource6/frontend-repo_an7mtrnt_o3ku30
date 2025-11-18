import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Diensten', href: '#diensten' },
    { label: 'Prijzen', href: '#prijzen' },
    { label: 'Werkproces', href: '#proces' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 px-4 py-3 shadow-lg">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow ring-1 ring-white/20" />
            <span className="text-white text-lg font-semibold tracking-tight">Spectux</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-4 py-2 text-white font-medium shadow hover:opacity-95 transition"
            >
              Offerte aanvragen
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur p-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-200/90 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-white bg-gradient-to-tr from-blue-600 to-cyan-500 text-center"
            >
              Offerte aanvragen
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
