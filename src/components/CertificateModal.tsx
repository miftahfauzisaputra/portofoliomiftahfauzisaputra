import { X, Award, ShieldCheck, Calendar, Download } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 hover:bg-red-600 text-white border border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
          aria-label="Tutup jendela sertifikat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate High-Res Image with zoom visual */}
        <div className="relative w-full bg-black aspect-[4/3] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Certificate Details */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-zinc-300 font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-red-500" />
            <span>{certificate.issuer}</span>
            <span aria-hidden="true" className="text-red-500">·</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Calendar className="w-3.5 h-3.5" />
              {certificate.year}
            </span>
          </div>

          <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white">
            {certificate.title}
          </h3>

          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            {certificate.description}
          </p>

          {certificate.credentialId && (
            <div className="p-3 rounded-lg bg-black border border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Kredensial Terverifikasi:</span>
              </div>
              <span className="font-mono text-white font-semibold">{certificate.credentialId}</span>
            </div>
          )}

          <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-red-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Buka Gambar Asli Resolusi Penuh</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-zinc-900 hover:bg-red-600 text-xs font-semibold uppercase tracking-wider text-white transition-colors border border-zinc-800 cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
