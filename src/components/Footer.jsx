export default function Footer() {
  return (
    <footer id="contact" className="relative pt-14 pb-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white text-2xl font-bold">Klaar om te starten?</h3>
              <p className="mt-2 text-slate-300/90 max-w-md">
                Vertel kort wat je nodig hebt en we sturen binnen 24 uur een voorstel.
              </p>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400" placeholder="Naam" />
              <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400" placeholder="E-mail" />
              <input className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400" placeholder="Bedrijf / website" />
              <textarea className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400" placeholder="Vertel kort over je project" rows="4" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow hover:opacity-95">
                Verstuur aanvraag
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Spectux. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-6">
              <a href="#diensten" className="hover:text-white">Diensten</a>
              <a href="#prijzen" className="hover:text-white">Prijzen</a>
              <a href="#top" className="hover:text-white">Naar boven</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
