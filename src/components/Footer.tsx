import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 py-12 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-center sm:text-left">
          <span className="font-display font-bold text-slate-900 dark:text-white text-sm">
            {profile.name}
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
          <span className="text-slate-500 dark:text-slate-400">
            Software Engineer at Accenture · B.Tech CSE Class of 2025 (India)
          </span>
        </div>

        {/* Links & Quick Back to top */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">|</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
