export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/2 translate-x-1/2 h-[500px] w-[700px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Websites die presteren – snel, schaalbaar en mooi
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Spectux: jouw partner voor moderne websites
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-200/90 max-w-2xl">
              Wij ontwerpen en bouwen conversiegerichte websites die jouw merk laten groeien. Focus op resultaat, performance en een ijzersterke user experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#prijzen" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow hover:opacity-95">
                Bekijk pakketten
              </a>
              <a href="#diensten" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-white/90 hover:text-white">
                Wat we doen
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-slate-300/80">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=12" alt="" className="h-8 w-8 rounded-full border border-white/20" />
                <img src="https://i.pravatar.cc/40?img=32" alt="" className="h-8 w-8 rounded-full border border-white/20" />
                <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" className="h-8 w-8 rounded-full border border-white/20" />
              </div>
              <p><span className="text-white font-semibold">40+ tevreden klanten</span> – gemiddeld 4.9/5 score</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-600/40 to-cyan-400/40 blur-2xl" />
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-4 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop" alt="Showcase" className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
