import React, { useState } from 'react';
import { Search, Code2, Sparkles, Server, CheckSquare, ArrowUpRight } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Code2;
      case 1: return Sparkles;
      case 2: return Server;
      default: return CheckSquare;
    }
  };

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((cat) => cat.skills.length > 0);

  // Find info for selected skill
  const activeSkillDetails = categories
    .flatMap((c) => c.skills)
    .find((s) => s.name === selectedSkill);

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Quick Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Technical Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Engineering Stack
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Core programming languages, full-stack frameworks, database systems, and software engineering methodologies.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search stack (e.g. React, Java, SQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, catIdx) => {
            const Icon = getCategoryIcon(catIdx);
            return (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/40 p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List with clean unboxed metadata */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                          className={`group p-2.5 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 border-blue-600/80 dark:bg-blue-950/40 dark:border-blue-600/60 shadow-xs'
                              : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
                              {skill.experienceYears}y exp
                            </span>
                          </div>

                          <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                            <span className="capitalize">{skill.level}</span>
                            {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                              <span className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate max-w-[120px]">
                                {skill.relatedProjects[0]}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Project Link Drawer (if active) */}
        {activeSkillDetails && (
          <div className="mt-8 p-5 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Technology Spotlight
                </span>
                <span className="text-slate-300 dark:text-slate-500">·</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{activeSkillDetails.name}</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-mono tabular-nums">
                  ({activeSkillDetails.experienceYears} Years Experience)
                </span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300">
                {activeSkillDetails.relatedProjects && activeSkillDetails.relatedProjects.length > 0 ? (
                  <>
                    Applied in projects:{' '}
                    <span className="text-slate-900 dark:text-white font-semibold">
                      {activeSkillDetails.relatedProjects.join(', ')}
                    </span>
                  </>
                ) : (
                  'Utilized across enterprise software modules, academic coursework, and system design benchmarks.'
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
