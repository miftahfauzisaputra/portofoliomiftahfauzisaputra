import { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Check, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, SKILLS_CATEGORIES, CERTIFICATES } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const [viewMode, setViewMode] = useState<'pdf' | 'web'>('pdf');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <div>
              <h3 className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                Curriculum Vitae — Miftah Fauzi Saputra
              </h3>
              <p className="text-[11px] text-zinc-400">Berkas Dokumen Resmi 2026</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* View Mode Toggle */}
            <div className="flex items-center rounded-lg bg-zinc-900 p-0.5 border border-zinc-800">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-zinc-800 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                PDF Asli
              </button>
              <button
                onClick={() => setViewMode('web')}
                className={`px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                  viewMode === 'web'
                    ? 'bg-zinc-800 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Format Web
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFilename}
              onClick={(e) => {
                e.preventDefault();
                downloadCvFile();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md shadow-red-950/40"
              title="Unduh CV Resmi Miftah Fauzi Saputra (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh PDF</span>
            </a>

            {viewMode === 'web' && (
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 text-white font-semibold text-xs tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Cetak CV"
              >
                <Printer className="w-3.5 h-3.5 text-zinc-400" />
                <span>Cetak</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer ml-1"
              aria-label="Tutup modal CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Switch between PDF view and Web CV */}
        {viewMode === 'pdf' ? (
          <div className="flex-1 min-h-[500px] max-h-[75vh] p-4 sm:p-6 bg-zinc-950 flex flex-col overflow-y-auto">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 px-3 py-2.5 bg-zinc-900/80 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-red-500" />
                <span>Berkas PDF Resmi: <strong className="text-white">{PERSONAL_INFO.cvFilename}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => downloadCvFile()}
                  className="text-red-500 hover:text-red-400 inline-flex items-center gap-1.5 font-bold cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh File Sekarang</span>
                </button>
                <span className="text-zinc-600">|</span>
                <a
                  href={PERSONAL_INFO.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white inline-flex items-center gap-1 font-medium"
                >
                  <span>Buka di tab baru</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* High fidelity rendering of official CV */}
            <div className="flex justify-center items-center p-3 bg-black/60 rounded-xl border border-zinc-900 overflow-auto">
              <img
                src={PERSONAL_INFO.cvPreviewImage}
                alt="Dokumen Resmi Curriculum Vitae Miftah Fauzi Saputra"
                className="w-full max-w-2xl h-auto rounded-lg shadow-2xl border border-zinc-800 filter contrast-[1.02]"
              />
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-black text-zinc-200">
            {/* Document Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <h1 className="font-['Space_Grotesk'] text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}<span className="text-red-600">.</span>
              </h1>
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-400 mt-3">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  {PERSONAL_INFO.phoneDisplay}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  Garut &amp; Jakarta, Indonesia
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-20 h-20 rounded-xl object-cover object-top border border-zinc-700"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Ringkasan Profil (Professional Summary)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {PERSONAL_INFO.bioFull}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
              <Briefcase className="w-4 h-4 text-red-500" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                Pengalaman Kerja (Work Experience)
              </h2>
            </div>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} — <span className="text-zinc-400 font-medium">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">{exp.location} · {exp.type}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
              <GraduationCap className="w-4 h-4 text-red-500" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                Pendidikan (Education)
              </h2>
            </div>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">
                      {edu.school} — <span className="text-zinc-300 font-normal">{edu.degree} ({edu.major})</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">{edu.period}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{edu.location}</p>
                  <p className="text-xs text-zinc-300 mt-1 font-normal">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800">
              <Check className="w-4 h-4 text-red-500" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                Keahlian &amp; Software (Skills &amp; Tools)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <h4 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-zinc-200">
                    {cat.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Certifications list */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800">
              <Award className="w-4 h-4 text-red-500" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                Sertifikasi Terverifikasi (Certifications)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATES.slice(0, 6).map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-zinc-200 font-medium">{c.title}</p>
                    <p className="text-[10px] text-zinc-400">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        )}

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-zinc-400">
            Dokumen resmi Portofolio Miftah Fauzi Saputra (CV 2026)
          </p>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFilename}
              onClick={(e) => {
                e.preventDefault();
                downloadCvFile();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md shadow-red-950/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold uppercase tracking-wider text-white border border-zinc-800 transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
