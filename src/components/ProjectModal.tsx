import { X, ExternalLink, Sparkles, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 hover:bg-red-600 text-white border border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
          aria-label="Tutup jendela proyek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Player or Banner */}
        <div className="relative w-full bg-black aspect-video overflow-hidden">
          {project.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-600/15 border border-red-600/40 flex items-center justify-center text-red-500 mb-3 shadow-lg shadow-red-950/40">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-red-500 font-semibold mb-1">
                {project.categoryLabel}
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-white max-w-md">
                {project.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-2 font-mono">
                {project.client} · {project.year}
              </p>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-2">
              <span className="text-white font-semibold uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span aria-hidden="true" className="text-red-500">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-red-500" />
                {project.year}
              </span>
              <span aria-hidden="true" className="text-red-500">·</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-red-500" />
                {project.client}
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          {/* Metrics highlight */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-black border border-zinc-800 flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-semibold">
              <Sparkles className="w-4 h-4 shrink-0 text-red-500" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Ringkasan Proyek
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Cakupan Pekerjaan / Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Miftah Fauzi Saputra Portfolio
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded bg-zinc-900 hover:bg-red-600 text-xs font-semibold uppercase tracking-wider text-white transition-colors border border-zinc-800 cursor-pointer"
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
