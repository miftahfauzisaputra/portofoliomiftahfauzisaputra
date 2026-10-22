import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-24 relative border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Layanan Unggulan</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CORE CAPABILITIES <br />
              <span className="text-zinc-500 font-light">&amp; SERVICES.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Solusi periklanan komprehensif dari riset target market, eksekusi visual materi iklan, hingga optimalisasi konversi penjualan.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-red-600/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle hover glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-950/0 group-hover:bg-red-950/20 rounded-bl-full transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-zinc-500 group-hover:text-red-500 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-3">
                  {service.headline}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-6 border-t border-zinc-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                  <span>Cakupan Pekerjaan:</span>
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
