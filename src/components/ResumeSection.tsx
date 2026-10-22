import { EXPERIENCES, EDUCATION_LIST, PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, GraduationCap, Download, MapPin, Calendar, FileText } from 'lucide-react';
import { downloadCvFile } from '../utils/downloadCv';

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export default function ResumeSection({ onOpenCvModal }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-24 relative border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Rekam Jejak Profesional</span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              EXPERIENCE <br />
              <span className="text-zinc-500 font-light">&amp; EDUCATION.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFilename}
              onClick={(e) => {
                e.preventDefault();
                downloadCvFile();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md shadow-red-950/40 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Unduh CV (PDF)</span>
            </a>
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase px-4 py-3 rounded border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>Pratinjau CV</span>
            </button>
          </div>
        </div>

        {/* Two Column Grid: Experience on left, Education on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded bg-zinc-900 text-red-500 border border-zinc-800">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                Pengalaman Kerja (Experience)
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-black border-2 border-red-600 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 group-hover:border-red-600/50 transition-all">
                    
                    {/* Period & Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400 font-medium px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1">
                      {exp.role}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
                      <span className="text-white font-semibold">{exp.company}</span>
                      <span aria-hidden="true" className="text-red-500">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Language Column */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded bg-zinc-900 text-red-500 border border-zinc-800">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                  Pendidikan (Education)
                </h3>
              </div>

              <div className="space-y-6">
                {EDUCATION_LIST.map((edu, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-red-600/50 transition-all"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      <span>{edu.period}</span>
                    </div>

                    <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1">
                      {edu.school}
                    </h4>

                    <div className="text-xs text-zinc-400 mb-3">
                      <span className="text-white font-medium">{edu.degree} · {edu.major}</span>
                      <span className="mx-2 text-red-500">·</span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80">
              <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase tracking-wider mb-4">
                Penguasaan Bahasa
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-200 font-medium">Bahasa Indonesia</span>
                  <span className="text-red-500 font-semibold">Native / Penutur Asli</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full w-full" />
                </div>

                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-zinc-200 font-medium">Bahasa Sunda</span>
                  <span className="text-zinc-400 font-semibold">Native Kedaerahan</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-zinc-500 h-full rounded-full w-full" />
                </div>

                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-zinc-200 font-medium">Bahasa Inggris (Digital &amp; Marketing Terms)</span>
                  <span className="text-zinc-400 font-semibold">Teknis &amp; Komunikasi Bisnis</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-zinc-500 h-full rounded-full w-3/4" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
