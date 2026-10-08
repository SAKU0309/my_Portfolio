import React from 'react';
import { Calendar, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceItem[];
  onOpenResume: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ experiences, onOpenResume }) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-50/60 dark:bg-slate-950/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Professional Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Work History & Experience
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              From graduating in 2025 in India to engineering enterprise solutions at Accenture, focusing on scalable full-stack applications and quality code delivery.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
          >
            <span>Download Formatted PDF / CV</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-px before:bg-slate-200 dark:before:bg-slate-800/80 before:hidden md:before:block">
          {experiences.map((exp) => {
            const isAccenture = exp.company.toLowerCase().includes('accenture');
            return (
              <div
                key={exp.id}
                className={`relative rounded-2xl border bg-white dark:bg-slate-900/50 p-6 sm:p-8 hover:shadow-md transition-all shadow-xs ${
                  isAccenture
                    ? 'border-blue-300 dark:border-blue-900/80 ring-1 ring-blue-500/10'
                    : 'border-slate-200 dark:border-slate-800/90'
                }`}
              >
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {isAccenture && (
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800/60">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                      <span className="flex items-center gap-1">
                        {isAccenture && <Building2 className="w-3.5 h-3.5" />}
                        {exp.company}
                      </span>
                      <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{exp.period}</span>
                    <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                    <span className="text-slate-500">{exp.type}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Measurable Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Used */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/70 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-slate-600 dark:text-slate-500 font-medium">Stack & Tools:</span>
                  {exp.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-mono text-slate-700 dark:text-slate-300">{tech}</span>
                      {idx < exp.technologies.length - 1 && (
                        <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
