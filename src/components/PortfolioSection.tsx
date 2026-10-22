import { useState } from 'react';
import { PROJECTS, Project, PHOTOGRAPHY_COLLECTION } from '../data/portfolioData';
import {
  Play,
  ArrowUpRight,
  Sparkles,
  FolderOpen,
  TrendingUp,
  ShoppingBag,
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenPhotoFolder?: () => void;
}

export default function PortfolioSection({
  onSelectProject,
  onOpenPhotoFolder,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Semua Karya' },
    { id: 'branding', label: 'Social Media & Brand' },
    { id: 'folder', label: 'Folder Fotografi' },
    { id: 'film', label: 'Karya Film' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (activeFilter === 'folder') return p.isFolder;
          return p.category === activeFilter;
        });

  const handleCardClick = (project: Project) => {
    if (project.isFolder && onOpenPhotoFolder) {
      onOpenPhotoFolder();
    } else {
      onSelectProject(project);
    }
  };

  return (
    <section id="portofolio" className="py-24 relative border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Dokumentasi &amp; Bukti Karya</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              PORTOFOLIO KARYA <br />
              <span className="text-zinc-500 font-light">&amp; DOKUMENTASI RESMI.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Kumpulan bukti pengelolaan media sosial organik di industri interior, arsip folder fotografi komersial, dan karya sinematografi orisinal.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-zinc-900 text-white border border-red-600 shadow-md shadow-red-950/30'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className={`group cursor-pointer rounded-2xl bg-zinc-950 border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                project.isFolder
                  ? 'border-red-900/60 hover:border-red-500 hover:shadow-xl hover:shadow-red-950/20'
                  : 'border-zinc-800/80 hover:border-red-600/70'
              }`}
            >
              <div>
                {/* 1. Folder Card Media Display */}
                {project.isFolder ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#121216] via-zinc-950 to-black p-4 flex flex-col justify-between border-b border-zinc-900">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-600/20 border border-red-600/40 text-red-400 text-[11px] font-semibold uppercase tracking-wider">
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>Satu Folder · 5 Foto</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        ARSIP FOTOGRAFI
                      </span>
                    </div>

                    {/* Staged 3-Photo Mini Previews */}
                    <div className="grid grid-cols-3 gap-2 my-2">
                      {PHOTOGRAPHY_COLLECTION.slice(0, 3).map((photo, i) => (
                        <div
                          key={photo.id}
                          className="relative aspect-square rounded-lg overflow-hidden border border-zinc-800 bg-black shadow"
                        >
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          {i === 2 && (
                            <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-bold font-mono">
                              +4 Foto
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                      <span className="text-[11px] text-zinc-400">Interior, Produk &amp; Staging</span>
                      <span className="inline-flex items-center gap-1 text-red-400 group-hover:text-red-300 font-semibold text-xs">
                        Buka Folder <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ) : project.image ? (
                  /* 2. Card with Image (Official Social Media Screenshot Proofs) */
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Category Tag */}
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-zinc-700 text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      {project.categoryLabel}
                    </div>

                    <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-500 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                ) : project.youtubeId ? (
                  /* 3. Short Film Showcase Card (Video Embed / Play Slate, No Stock Photo) */
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-5 flex flex-col justify-between border-b border-zinc-900">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-600/20 border border-red-600/40 text-red-400 text-[11px] font-semibold uppercase tracking-wider">
                        <Play className="w-3 h-3 fill-current" />
                        <span>Karya Film Orisinal</span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">YouTube Premiere</span>
                    </div>

                    <div className="my-auto flex items-center justify-center py-2">
                      <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-950/60 group-hover:scale-110 group-hover:bg-red-500 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                      <span className="text-[11px] text-zinc-400">Putar Video Sinematik</span>
                      <span className="text-red-400 group-hover:text-white flex items-center gap-1 text-xs font-semibold">
                        Tonton <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ) : (
                  /* 4. Strategy & Performance Campaigns (Data-Driven, No Stock Photo) */
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5 flex flex-col justify-between border-b border-zinc-900">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                        {project.category === 'ecommerce' ? (
                          <ShoppingBag className="w-3 h-3 text-red-500" />
                        ) : (
                          <TrendingUp className="w-3 h-3 text-red-500" />
                        )}
                        <span>{project.categoryLabel}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">{project.year}</span>
                    </div>

                    <div className="my-auto py-3">
                      <div className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
                        {project.metrics?.split('·')[0]?.trim() || 'Performance Strategy'}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                        {project.client}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-zinc-900/80">
                      <span className="text-[11px] text-zinc-400">Case Study &amp; Strategy</span>
                      <span className="text-red-400 group-hover:text-white flex items-center gap-1 font-semibold text-xs">
                        Lihat Strategi <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                )}

                {/* Content Box */}
                <div className="p-6">
                  {/* Clean unboxed metadata with subtle separator */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <span className="text-zinc-300 font-medium">{project.client}</span>
                    <span aria-hidden="true" className="text-red-500">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-2 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metrics Strip */}
              {project.metrics && (
                <div className="px-6 py-3 border-t border-zinc-900 bg-zinc-950 flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  <span className="truncate">{project.metrics}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
