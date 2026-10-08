/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileEditModal } from './components/ProfileEditModal';
import { INITIAL_PROFILE, PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from './data/portfolioData';
import { ProfileData } from './types/portfolio';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('sakshi_portfolio_profile_v2');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_PROFILE;
  });

  // Light theme by default as requested
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('sakshi_portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
    } catch {
      // fallback
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('sakshi_portfolio_theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('sakshi_portfolio_theme', 'light');
      } catch {}
    }
  }, [darkMode]);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('sakshi_portfolio_profile_v2', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetProfile = () => {
    setProfile(INITIAL_PROFILE);
    try {
      localStorage.removeItem('sakshi_portfolio_profile_v2');
    } catch {
      // ignore
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200`}>
      {/* Navigation Top Bar (Zone 1 - Zone 2 - Zone 3) */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Biography & Principles (Updated for Accenture & 2025 India Graduate) */}
        <About
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Projects Showcase Bento Grid */}
        <Projects projects={PROJECTS} />

        {/* Technical Skills & Capabilities */}
        <Skills categories={SKILL_CATEGORIES} />

        {/* Career Experience & Leadership (Accenture Timeline) */}
        <Experience
          experiences={EXPERIENCES}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Contact & Professional Connections */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={EXPERIENCES}
        projects={PROJECTS}
      />

      {/* Interactive Profile Customizer */}
      <ProfileEditModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
