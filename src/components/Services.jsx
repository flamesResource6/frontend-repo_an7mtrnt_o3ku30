import { Rocket, Brush, Code, Gauge, Search, Settings } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Webdesign & Strategie',
    desc: 'Pixel-perfect design dat aansluit op jouw merk en doelen. Wij vertalen doelstellingen naar een duidelijke UX.',
  },
  {
    icon: Code,
    title: 'Webdevelopment',
    desc: 'Snelle, schaalbare websites met moderne technologie. SEO-vriendelijk en eenvoudig uit te breiden.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimalisatie',
    desc: 'Lichtsnel laadtijden, Core Web Vitals op orde en een vlotte beleving op elk device.',
  },
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Technische SEO, contentstructuur en on-page optimalisaties voor betere vindbaarheid.',
  },
  {
    icon: Settings,
    title: 'Onderhoud & Support',
    desc: 'Doorlopend beheer, monitoring en updates zodat jouw site veilig en stabiel blijft.',
  },
  {
    icon: Brush,
    title: 'Branding & UI Kit',
    desc: 'Kleurpalet, typografie en componentbibliotheek voor consistente merkbeleving.',
  },
]

export default function Services() {
  return (
    <section id="diensten" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Wat we voor je doen</h2>
          <p className="mt-3 text-slate-300/90">Een compleet pakket van ontwerp tot lancering en alles daarna.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 hover:bg-slate-900/70 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow ring-1 ring-white/20">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
