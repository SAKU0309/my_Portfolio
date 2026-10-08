import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, FileText, CheckCircle2, Building2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  return (
    <section className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 transition-colors">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Natural status line without pill capsule enclosures */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                Accenture
              </span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-700 dark:text-slate-300">Software Engineer</span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Class of 2025 (India)</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] max-w-2xl">
              {profile.tagline}
            </h1>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.bioSummary}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/15 active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl transition-all shadow-xs active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>View Full CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Contact Direct</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social & Professional Profile Anchors */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Connect
              </span>

              <div className="flex items-center gap-4 text-sm">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform text-slate-600 dark:text-slate-400" />
                  <span className="font-medium">GitHub</span>
                </a>

                <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">LinkedIn</span>
                </a>

                <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-slate-600 dark:text-slate-400" />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Quantitative Rigor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Media container with elegant border and single elevation */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl aspect-square">
                <img
                  src={profile.avatarUrl}
                  alt={`${profile.name} - ${profile.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom photo overlay caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="font-medium">
                    {profile.name}
                  </div>
                  <div className="flex items-center gap-1 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Accenture Engineer</span>
                  </div>
                </div>
              </div>

              {/* Quantified Impact Grid immediately adjacent to claim */}
              <div className="mt-4 grid grid-cols-3 gap-3 p-4 bg-white/95 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs backdrop-blur-sm">
                <div>
                  <div className="font-mono text-xl font-bold text-slate-900 dark:text-white tabular-nums">2025</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">B.Tech Graduate</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">Accenture</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Software Engineer</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-slate-900 dark:text-white tabular-nums">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Clean Code Craft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
