import React from 'react';
import { ShieldCheck, Cpu, Sparkles, GraduationCap, ArrowRight, Award, Building2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { EDUCATION } from '../data/portfolioData';

interface AboutProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenResume }) => {
  const pillars = [
    {
      icon: Building2,
      title: 'Enterprise Software at Accenture',
      description: 'Applying clean software engineering practices, modular architectural patterns, and agile methodologies to develop robust enterprise digital applications.'
    },
    {
      icon: Cpu,
      title: 'Full-Stack Modern Engineering',
      description: 'Crafting responsive user interfaces with React, TypeScript, and Tailwind CSS while building reliable backend services and REST APIs with Node.js and Java.'
    },
    {
      icon: ShieldCheck,
      title: 'Strong Academic Foundations',
      description: 'Grounded in core Computer Science fundamentals—Data Structures, Algorithms, Database Management Systems, and Object-Oriented Software Design.'
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            About Me & Background
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white max-w-2xl">
            Software Engineer at Accenture · Computer Science Graduate (India, 2025)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {profile.bioFull.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}

            {/* Academic background & honors */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {EDUCATION.degree}
                    </h4>
                    <span className="text-xs text-slate-400" aria-hidden="true">·</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-mono tabular-nums">{EDUCATION.year}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Graduated in India — <span className="text-emerald-600 dark:text-emerald-400 font-medium">{EDUCATION.honors}</span>
                  </div>
                  <div className="text-xs text-slate-500 pt-1 flex flex-wrap gap-x-2 gap-y-1">
                    <span className="font-medium text-slate-600 dark:text-slate-400">Core Subjects:</span>
                    {EDUCATION.coursework.map((course, idx) => (
                      <span key={course} className="text-slate-600 dark:text-slate-400">
                        {course}{idx < EDUCATION.coursework.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
              >
                <span>View full academic records & verified CV</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Core Tenets & Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Focus Areas & Capabilities
            </h3>
            
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}

            {/* Quick trust banner */}
            <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/20 flex items-center gap-3 shadow-xs">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <div className="text-xs text-slate-700 dark:text-slate-300">
                Driven by continuous skill advancement, clean modular code design, and enterprise problem solving at Accenture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
