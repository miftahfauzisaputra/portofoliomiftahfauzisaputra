import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';

interface HeroProps {
  onWatchFilm?: () => void;
}

export default function Hero({ onWatchFilm: _ }: HeroProps) {
  const scrollToExplora = () => {
    const el = document.getElementById('about-01');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative bg-black pt-28 pb-20 overflow-hidden text-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-950/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Part 1: Centered Oversized Hero Title (Matching user photo) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 flex flex-col items-center text-center">
        {/* Top Kicker */}
        <p className="font-['Space_Grotesk'] text-[11px] sm:text-xs uppercase tracking-[0.28em] text-zinc-500 mb-6 font-medium">
          PORTFOLIO · DIGITAL MARKETING SPECIALIST
        </p>

        {/* Massive Center Headline with Red Dot */}
        <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[1.0] select-none">
          Miftah Fauzi <br />
          Saputra<span className="text-red-600">.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-[0.3em] text-zinc-400 mt-6 font-semibold">
          DIGITAL MARKETING
        </p>

        {/* Explora Scroll Prompt */}
        <button
          onClick={scrollToExplora}
          className="group mt-20 flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
          aria-label="Scroll ke bagian bawah"
        >
          <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.35em] text-zinc-500 group-hover:text-white transition-colors">
            EXPLORA
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-500 group-hover:translate-y-1 transition-all" />
        </button>
      </div>

      {/* Part 2: ABOUT — 01 (Matching user photo layout & color harmony) */}
      <div id="about-01" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-zinc-900">
        
        {/* Section Kicker */}
        <p className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8 font-medium">
          ABOUT — 01
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Editorial Contrast Headline (Identical to screenshot) */}
          <div className="lg:col-span-7">
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06]">
              <span className="text-white">Digital advertising,</span>{' '}
              <span className="text-zinc-600">e-commerce</span>{' '}
              <span className="text-white">&amp;</span>{' '}
              <span className="text-zinc-600">brand</span>{' '}
              <span className="text-white">growth</span>
              <span className="text-red-600">.</span>
            </h2>
          </div>

          {/* Right Column: Editorial Paragraphs and Minimalist Text Nav Links (Identical to screenshot) */}
          <div className="lg:col-span-5 space-y-6 lg:pt-2">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Spesialis digital advertising berpengalaman 3+ tahun di industri interior. Menguasai Meta Ads, Google Ads, TikTok Ads, serta marketplace ads seperti Shopee dan Tokopedia. Menggabungkan videografi, fotografi, dan strategi berbasis data untuk hasil yang terukur.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Lulusan Politeknik LP3I Tasikmalaya program studi Digital Marketing. Fokus mengelola kampanye lintas platform — Meta, Google, TikTok, Shopee, Tokopedia — dan menggabungkan kreativitas visual dengan strategi berbasis data.
            </p>

            {/* Navigation links with underline and arrows */}
            <div className="pt-4 flex items-center gap-8">
              <a
                href={PERSONAL_INFO.cvUrl}
                download={PERSONAL_INFO.cvFilename}
                onClick={(e) => {
                  e.preventDefault();
                  downloadCvFile();
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-white pb-1 border-b border-white hover:text-red-500 hover:border-red-500 transition-colors cursor-pointer"
                title="Unduh CV Miftah Fauzi Saputra (PDF)"
              >
                <span>RESUME (CV)</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-red-500" />
              </a>

              <a
                href="#portofolio"
                className="group inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-white pb-1 border-b border-white hover:text-red-500 hover:border-red-500 transition-colors"
              >
                <span>PROJECTS</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-red-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
