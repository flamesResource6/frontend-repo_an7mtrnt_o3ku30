const tiers = [
  {
    name: 'Starter',
    price: '€1.250',
    tagline: 'Perfect voor kleine projecten en MVP’s',
    features: ['1-5 pagina’s', 'Responsief design', 'Basis SEO', 'Contactformulier', 'Snelle levering'],
    cta: 'Kies Starter',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '€2.950',
    tagline: 'Meest gekozen – klaar voor groei en conversie',
    features: ['Tot 15 pagina’s', 'Custom componenten', 'Conversieblokken', 'Blog of cases', 'Technische SEO & performance'],
    cta: 'Kies Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Op maat',
    tagline: 'Enterprise eisen en integraties',
    features: ['Groot aantal pagina’s', 'API-koppelingen', 'Meertaligheid', 'Design system', 'Migratie & begeleiding'],
    cta: 'Plan gesprek',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="prijzen" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_20%_100%,rgba(56,189,248,0.08),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Pakketten & prijzen</h2>
          <p className="mt-3 text-slate-300/90">Kies wat past bij jouw ambitie. Transparant, zonder verrassingen.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.highlight
                  ? 'border-blue-400/30 bg-slate-900/70'
                  : 'border-white/10 bg-slate-900/60'
              } rounded-2xl border backdrop-blur p-6 relative`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 px-3 py-1 text-xs text-white shadow">
                  Populair
                </div>
              )}

              <h3 className="text-white text-xl font-semibold">{tier.name}</h3>
              <p className="mt-1 text-slate-300/90 text-sm">{tier.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-white">{tier.price}</span>
                {tier.price !== 'Op maat' && <span className="text-slate-400">excl. btw</span>}
              </div>

              <ul className="mt-6 space-y-2 text-slate-300/90 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold shadow transition ${
                  tier.highlight
                    ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 text-white'
                    : 'border border-white/10 bg-white/5 text-white/90 hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-slate-400 text-sm">Alle prijzen zijn indicatief. We leveren altijd maatwerk op basis van jouw doelen.</p>
      </div>
    </section>
  )
}
