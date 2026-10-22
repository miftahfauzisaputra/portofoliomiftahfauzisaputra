import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCvFile } from '../utils/downloadCv';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['beranda', 'tentang', 'layanan', 'resume', 'sertifikat', 'portofolio', 'kontak'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang', id: 'tentang' },
    { label: 'Layanan', href: '#layanan', id: 'layanan' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Sertifikat', href: '#sertifikat', id: 'sertifikat' },
    { label: 'Portofolio', href: '#portofolio', id: 'portofolio' },
    { label: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#beranda"
            className="group flex items-baseline gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold tracking-tighter text-white group-hover:text-zinc-200 transition-colors">
              MIFTAH
            </span>
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="hidden sm:inline-block text-[11px] font-medium tracking-widest uppercase text-zinc-400 pl-1.5 border-l border-zinc-800">
              Digital Marketing
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFilename}
              onClick={(e) => {
                e.preventDefault();
                downloadCvFile();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-3.5 py-2 rounded border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
              title="Unduh CV Miftah Fauzi Saputra (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-red-500" />
              <span>Unduh CV</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded transition-all shadow-md shadow-red-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-zinc-800 bg-[#0e0e11] rounded-xl p-5 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    activeSection === link.id
                      ? 'bg-zinc-800 text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download={PERSONAL_INFO.cvFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    downloadCvFile();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow-md cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Unduh CV (PDF)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full text-center py-2 text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 rounded border border-zinc-800 cursor-pointer"
                >
                  Pratinjau CV di Layar
                </button>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase py-2.5 rounded shadow-md shadow-red-950/40"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
