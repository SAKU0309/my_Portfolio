import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { ProfileData, ExperienceItem, Project } from '../types/portfolio';
import { EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: ExperienceItem[];
  projects: Project[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  projects
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${profile.name}
${profile.title}
Email: ${profile.email} | Location: ${profile.location}
GitHub: ${profile.githubUrl} | LinkedIn: ${profile.linkedinUrl}

ABOUT & SUMMARY
${profile.bioSummary}

EXPERIENCE
${experiences.map((exp) => `
${exp.role} — ${exp.company} (${exp.period})
Location: ${exp.location}
${exp.summary}
Key Accomplishments:
${exp.achievements.map((a) => `• ${a}`).join('\n')}
Core Stack: ${exp.technologies.join(', ')}
`).join('\n')}

FLAGSHIP PROJECTS
${projects.slice(0, 3).map((p) => `
• ${p.title} (${p.category}, ${p.year}): ${p.description}
  Metrics: ${p.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
  Stack: ${p.tags.join(', ')}
`).join('\n')}

EDUCATION
${EDUCATION.degree} — ${EDUCATION.institution} (${EDUCATION.year})
Honors: ${EDUCATION.honors}
Coursework: ${EDUCATION.coursework.join(', ')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/60 dark:bg-slate-950/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Vitae"
      >
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Curriculum Vitae</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">Software Engineer @ Accenture</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors shadow-2xs"
              title="Copy plain-text formatted resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
              title="Print to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 print:bg-white print:text-black space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 print:border-black/30">
            <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white print:text-black">
              {profile.name}
            </h1>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 print:text-blue-700 mt-1">
              {profile.title}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 print:text-neutral-700">
              <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
              <span>·</span>
              <span>{profile.location}</span>
              <span>·</span>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">github.com/sakshichoudhary</a>
              <span>·</span>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/sakshichoudhary</a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 print:border-black/20">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-neutral-800 leading-relaxed">
              {profile.bioSummary}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-4 print:border-black/20">
              Experience & Employment
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                        {exp.role}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 print:text-blue-800 ml-2">
                        — {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-neutral-700 tabular-nums">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 print:text-neutral-700 italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-neutral-800">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-slate-500 print:text-neutral-600 pt-1">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Technologies:</span> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 print:border-black/20">
              Education & Academic Credentials
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">{EDUCATION.degree}</span>
                <span className="text-slate-600 dark:text-slate-400 print:text-neutral-700 ml-2">— {EDUCATION.institution}</span>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-neutral-700">{EDUCATION.year}</span>
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 print:text-emerald-800 mt-0.5 font-medium">
              {EDUCATION.honors}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              <span className="font-medium text-slate-600 dark:text-slate-400">Key Coursework:</span> {EDUCATION.coursework.join(', ')}
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 print:border-black/20">
              Selected Technical Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 print:border-neutral-300 bg-slate-50 dark:bg-slate-900/50 print:bg-white">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white print:text-black">
                    <span>{p.title}</span>
                    <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 print:text-neutral-600">{p.year}</span>
                  </div>
                  <div className="text-[11px] text-blue-600 dark:text-blue-400 print:text-blue-800 mt-0.5 font-medium">
                    {p.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 print:text-neutral-800 mt-1 leading-snug">
                    {p.description}
                  </p>
                  <div className="mt-2 text-[10px] text-slate-500 font-mono">
                    {p.tags.slice(0, 4).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
