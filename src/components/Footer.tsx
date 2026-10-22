import { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(now.toLocaleTimeString('id-ID', options) + ' WIB');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-black pt-20 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Call to Action */}
        <div className="pb-16 border-b border-zinc-900 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Mulai Langkah Baru</span>
            </p>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              READY TO SCALE <br />
              <span className="text-zinc-500 hover:text-red-500 transition-colors cursor-pointer">
                YOUR BRAND?
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-colors shadow-lg shadow-red-950/40"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Sekarang</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded hover:bg-zinc-800 hover:border-red-600/50 transition-colors"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span>Kirim Email</span>
            </a>
          </div>
        </div>

        {/* Links & Brand Matrix */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-zinc-900">
          
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-baseline gap-1.5">
              <span className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter text-white">
                MIFTAH
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600" />
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-normal">
              Portofolio profesional Miftah Fauzi Saputra — Digital Advertising, Media Buying &amp; Creative Videography.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span>JAKARTA / GARUT, ID:</span>
              <span className="text-white font-bold">{timeStr || '12:00:00 WIB'}</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portofolio" className="hover:text-red-500 transition-colors">Portofolio &amp; Karya</a></li>
              <li><a href="#tentang" className="hover:text-red-500 transition-colors">Tentang Profil</a></li>
              <li><a href="#layanan" className="hover:text-red-500 transition-colors">Layanan &amp; Kompetensi</a></li>
              <li><a href="#resume" className="hover:text-red-500 transition-colors">Pengalaman &amp; Edukasi</a></li>
              <li><a href="#sertifikat" className="hover:text-red-500 transition-colors">Sertifikasi BNSP</a></li>
              <li><a href="#kontak" className="hover:text-red-500 transition-colors">Kontak Langsung</a></li>
              <li>
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download={PERSONAL_INFO.cvFilename}
                  onClick={(e) => {
                    e.preventDefault();
                    downloadCvFile();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors inline-flex items-center gap-1 text-red-500 font-medium cursor-pointer"
                >
                  <span>Unduh CV Resmi (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Spesialisasi &amp; Industri
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Meta Ads &amp; TikTok Ads Specialization</li>
              <li>Marketplace Ads (Shopee &amp; Tokopedia)</li>
              <li>Pemasaran Furniture &amp; Interior Custom</li>
              <li>Commercial Videography &amp; Sinematografi</li>
              <li>Conversion Funneling &amp; ROAS Scale-up</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Sosial Media
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-1 text-zinc-400"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-1 text-zinc-400"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-1 text-zinc-400"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-1 text-zinc-400"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Miftah Fauzi Saputra. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <div className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
