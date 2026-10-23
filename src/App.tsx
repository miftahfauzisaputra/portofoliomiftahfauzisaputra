import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';
import CvModal from './components/CvModal';
import PhotoFolderModal from './components/PhotoFolderModal';
import { Project, Certificate, PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isPhotoFolderOpen, setIsPhotoFolderOpen] = useState(false);

  const handleSelectProject = (project: Project) => {
    if (project.isFolder) {
      setIsPhotoFolderOpen(true);
    } else {
      setSelectedProject(project);
    }
  };

  const handleWatchFilm = () => {
    const filmProject = PROJECTS.find((p) => p.id === 'film-karya') || PROJECTS[0];
    setSelectedProject(filmProject);
  };

  return (
    <div className="min-h-screen bg-black text-[#f4f4f5] selection:bg-red-600 selection:text-white font-sans">
      {/* Top Fixed Header */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onWatchFilm={handleWatchFilm} />

        {/* Marquee Banner 1 */}
        <MarqueeTicker />

        {/* About Section & Philosophy */}
        <AboutSection />

        {/* Services & Capabilities Matrix */}
        <ServicesSection />

        {/* Marquee Banner 2 (Reverse kinetic motion) */}
        <MarqueeTicker reverse className="bg-black" />

        {/* Experience & Education Timelines */}
        <ResumeSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Certificates & Accreditations Showcase */}
        <CertificatesSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Portofolio Karya & Dokumentasi Resmi */}
        <PortfolioSection
          onSelectProject={handleSelectProject}
          onOpenPhotoFolder={() => setIsPhotoFolderOpen(true)}
        />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PhotoFolderModal
        isOpen={isPhotoFolderOpen}
        onClose={() => setIsPhotoFolderOpen(false)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
