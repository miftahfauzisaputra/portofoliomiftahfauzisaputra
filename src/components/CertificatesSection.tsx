import { CERTIFICATES, Certificate } from '../data/portfolioData';
import { Award, ZoomIn, ShieldCheck } from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export default function CertificatesSection({ onSelectCertificate }: CertificatesSectionProps) {
  return (
    <section id="sertifikat" className="py-24 relative border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Kredensial Resmi</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CERTIFICATES <br />
              <span className="text-zinc-500 font-light">&amp; ACCREDITATION.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Dokumentasi sertifikasi kompetensi resmi BNSP, MarkPlus Institute, penghargaan juara film pendek, kejuaraan fotografi, dan uji kompetensi multimedia.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertificate(cert)}
              className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-red-600/70 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image */}
                <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors" />

                  {/* Zoom badge */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
                    <ShieldCheck className="w-3 h-3 text-red-500" />
                    <span>{cert.year}</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium mb-1">
                    <Award className="w-3.5 h-3.5 shrink-0 text-red-500" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-2 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* ID footer */}
              {cert.credentialId && (
                <div className="px-5 py-2.5 border-t border-zinc-900 bg-zinc-950 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>ID:</span>
                  <span className="text-zinc-300">{cert.credentialId}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
