import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Systems & Cloud', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-50/60 dark:bg-slate-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header & Segmented Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Featured Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected Systems & Projects
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Full-stack web applications, real-time telemetry pipelines, and developer tooling built with clean architecture and modern frameworks.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 rounded-xl overflow-x-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 dark:bg-blue-600 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isWide = project.featured && (index === 0 || index === 1);
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:bg-slate-900 transition-all duration-300 flex flex-col cursor-pointer shadow-xs ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media frame */}
                <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/60 ${isWide ? 'aspect-[21/9]' : 'aspect-video'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed category kicker over media */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-white bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/80 backdrop-blur-sm shadow-xs">
                    <span className="font-medium">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-400">·</span>
                    <span className="font-mono tabular-nums text-slate-300">{project.year}</span>
                  </div>

                  {/* Top-right open action indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-white/90 dark:bg-slate-950/80 text-slate-700 dark:text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                      {project.subtitle}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Quantified Metrics Highlight (Tabular Numerals) */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 p-3 mb-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/70">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx}>
                            <div className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Stack Tags (Unboxed clean inline text with dots) */}
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 truncate max-w-[80%]">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <React.Fragment key={tag}>
                          <span className="font-mono text-slate-600 dark:text-slate-400">{tag}</span>
                          {i < Math.min(project.tags.length, 3) - 1 && (
                            <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">+{project.tags.length - 3}</span>
                      )}
                    </div>

                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Case Study
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
