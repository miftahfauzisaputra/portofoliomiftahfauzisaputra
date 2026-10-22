import {
  CheckCircle2,
  Award,
  Briefcase,
  GraduationCap,
  Video,
  Layers,
  Download,
  MessageCircle,
  MapPin,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_CATEGORIES } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 relative border-t border-zinc-900 bg-black">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Tentang Miftah Fauzi Saputra</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              HERE&#39;S WHO I AM <br />
              <span className="text-zinc-500 font-light">&amp; WHAT I DO.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Menjembatani keindahan visual sinematik dengan akurasi analitik kampanye iklan digital modern untuk menghasilkan konversi dan pertumbuhan nyata.
          </p>
        </div>

        {/* Narrative & Bio grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Portrait Photo & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Photo Showcase Card */}
            <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950 border border-zinc-800 relative group shadow-2xl overflow-hidden">
              
              {/* Sleek red corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-600 rounded-tr-2xl pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-zinc-800 rounded-bl-2xl pointer-events-none z-20" />

              {/* Portrait Frame - Optimized for mobile and desktop viewports so portrait is not cropped */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-900 shadow-inner">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-[center_30%] sm:object-[center_28%] filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Refined gradient vignette: subtle bottom fade so the subject is clearly visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-35% to-transparent pointer-events-none" />

                {/* Top Badge: Availability */}
                <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-zinc-700/70 text-white text-[11px] sm:text-xs font-medium shadow-lg">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>Open for Projects</span>
                  </div>
                </div>

                {/* Bottom Overlay Card: Compact and refined on mobile to avoid covering the portrait */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-10">
                  <div className="p-2.5 sm:p-4 rounded-xl bg-black/75 backdrop-blur-md border border-zinc-800/80 text-white shadow-xl">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-white tracking-tight">
                        {PERSONAL_INFO.name}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-2 rounded bg-red-600/20 text-red-400 border border-red-500/30 shrink-0">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-zinc-300 font-medium mt-0.5">
                      Digital Advertising &amp; Marketing Specialist
                    </p>

                    <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-zinc-800/70 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-700/60">
                        3+ Thn Exp
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-700/60">
                        Interior &amp; Retail
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons under photo */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 grid grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download={PERSONAL_INFO.cvFilename}
                  onClick={(e) => {
                    e.preventDefault();
                    downloadCvFile();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
                  title="Unduh file CV Miftah Fauzi Saputra (PDF)"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh CV (PDF)</span>
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Konsultasi WA</span>
                </a>
              </div>

              {/* Location and Education subtitle */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Garut / Bandung, Jawa Barat</span>
                </div>
                <span className="text-zinc-500 font-mono text-[11px]">LP3I Tasikmalaya</span>
              </div>
            </div>

            {/* Quick credentials snippet */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Status Profesional</p>
                  <p className="text-sm font-bold text-white mt-0.5">Interiorlab &amp; Konsultan Lepas</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-semibold px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Terverifikasi</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Berfokus pada strategi kampanye iklan berbayar terukur, creative production berkualitas tinggi, dan optimasi konversi penjualan bisnis interior &amp; retail.
              </p>
            </div>

          </div>

          {/* Right Column: Narrative Story, Pillars, and Skills */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Story Narrative */}
            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-950/15 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Filosofi &amp; Pendekatan Kerja</span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-4">
                Dedikasi pada Performa Iklan &amp; Pertumbuhan Bisnis
              </h3>
              
              <p className="text-zinc-300 leading-relaxed text-base mb-6">
                {PERSONAL_INFO.bioFull}
              </p>

              {/* 4 Pillars Grid */}
              <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="p-2 rounded bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Spesialis Industri Interior</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Berpengalaman 3+ tahun menangani interior custom, furniture, &amp; home living.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="p-2 rounded bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Visual &amp; Sinematografi</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Fondasi kuat di videografi, pencahayaan komersial, dan Adobe Creative Suite.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="p-2 rounded bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Pendidikan Terarah</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">D3 Digital Marketing (LP3I) &amp; Multimedia Audio-Visual (SMKN 7 Garut).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="p-2 rounded bg-zinc-900 text-red-500 border border-zinc-800 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sertifikasi BNSP &amp; MarkPlus</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">Tersertifikasi resmi standar nasional BNSP, MarkPlus Institute, dan kejuaraan karya.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote banner */}
            <div className="p-6 rounded-xl bg-zinc-950 border-l-4 border-l-red-600 border-y border-r border-zinc-800">
              <p className="text-sm sm:text-base italic text-zinc-200">
                &ldquo;Iklan terbaik bukan hanya yang menarik mata, melainkan yang sanggup menggerakkan audiens untuk mengambil keputusan dan menghasilkan return on investment yang nyata.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-wider text-zinc-400 mt-2 font-semibold">
                — Miftah Fauzi Saputra
              </p>
            </div>

            {/* Skills & Toolsets Matrix */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-red-500" />
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    Keahlian &amp; Penguasaan Alat
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                  <span>Standard Industri</span>
                </div>
              </div>

              <div className="space-y-5">
                {SKILLS_CATEGORIES.map((cat, i) => (
                  <div key={i} className="pb-4 border-b border-zinc-900 last:border-b-0 last:pb-0">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-red-600/50 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
