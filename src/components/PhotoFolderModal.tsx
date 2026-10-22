import { useState, useEffect } from 'react';
import {
  X,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
} from 'lucide-react';
import { PHOTOGRAPHY_COLLECTION, PhotographyItem } from '../data/portfolioData';

interface PhotoFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhotoId?: string;
}

export default function PhotoFolderModal({
  isOpen,
  onClose,
  initialPhotoId,
}: PhotoFolderModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialPhotoId) {
      const idx = PHOTOGRAPHY_COLLECTION.findIndex((p) => p.id === initialPhotoId);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
    } else {
      setLightboxIndex(null);
    }
  }, [initialPhotoId, isOpen]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % PHOTOGRAPHY_COLLECTION.length : null
        );
      } else if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + PHOTOGRAPHY_COLLECTION.length) % PHOTOGRAPHY_COLLECTION.length
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, lightboxIndex, onClose]);

  if (!isOpen) return null;

  const currentLightboxPhoto: PhotographyItem | null =
    lightboxIndex !== null ? PHOTOGRAPHY_COLLECTION[lightboxIndex] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Topbar / Folder Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-600/40 flex items-center justify-center text-red-500">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-red-500 font-semibold">
                  FOLDER ARSIP FOTOGRAFI
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-[11px] text-zinc-400">
                  {PHOTOGRAPHY_COLLECTION.length} Foto Resolusi Tinggi
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-lg sm:text-2xl font-bold text-white tracking-tight">
                Folder: Hasil Fotografi Saya
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-red-600 text-zinc-400 hover:text-white border border-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
              aria-label="Tutup folder"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Folder Content Grid - Pure Photography Gallery without text captions */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PHOTOGRAPHY_COLLECTION.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-xl bg-zinc-900/60 border border-zinc-800/90 hover:border-red-600/70 overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-red-950/20 aspect-[4/3]"
              >
                <img
                  src={photo.image}
                  alt={`Karya Fotografi ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 shadow-xl">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox / Fullscreen Image Viewer Modal */}
        {currentLightboxPhoto && (
          <div
            className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Lightbox Topbar */}
            <div
              className="flex items-center justify-between max-w-6xl mx-auto w-full z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  Foto {(lightboxIndex ?? 0) + 1} dari {PHOTOGRAPHY_COLLECTION.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentLightboxPhoto.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 flex items-center gap-1.5 border border-zinc-800"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka Ukuran Penuh</span>
                </a>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-zinc-900 hover:bg-red-600 text-white border border-zinc-800 transition-colors cursor-pointer"
                  aria-label="Tutup tampilan pembesar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Center Image with Navigation Arrows */}
            <div
              className="relative max-w-5xl mx-auto w-full my-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + PHOTOGRAPHY_COLLECTION.length) % PHOTOGRAPHY_COLLECTION.length
                      : null
                  )
                }
                className="absolute left-2 sm:-left-12 z-10 p-3 rounded-full bg-black/70 hover:bg-red-600 text-white border border-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="max-h-[80vh] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                <img
                  src={currentLightboxPhoto.image}
                  alt="Karya Fotografi"
                  className="max-h-[80vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % PHOTOGRAPHY_COLLECTION.length : null
                  )
                }
                className="absolute right-2 sm:-right-12 z-10 p-3 rounded-full bg-black/70 hover:bg-red-600 text-white border border-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
