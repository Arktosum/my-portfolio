import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Terminal, Zap, BookOpen } from 'lucide-react';

const Github = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22" />
  </svg>
);

import { projects } from '../data/projects';

export const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-white pt-20">
      <nav className="fixed top-6 left-6 z-50">
        <Link to="/" className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to Hub
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                {tag}
              </span>
            ))}
            <a href={project.link} target="_blank" rel="noreferrer" className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/50 text-sm text-primary hover:bg-primary/30 transition-colors flex items-center gap-2">
              <Github size={14} /> View Source
            </a>
          </div>

          <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-16 relative glass border border-white/10 p-2">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
          </div>

          <div className="space-y-12">
            <section className="glass p-8 md:p-12 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="text-red-400" /> The Problem
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.caseStudy.problem}
              </p>
            </section>

            <section className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 relative z-10">
                <Zap className="text-yellow-400" /> The Solution
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                {project.caseStudy.solution}
              </p>
            </section>

            <section className="glass p-8 md:p-12 rounded-3xl border border-primary/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-400" /> Architecture & Lessons Learned
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Tech Stack</h4>
                  <p className="text-gray-300">{project.caseStudy.architecture}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Key Takeaway</h4>
                  <p className="text-gray-300">{project.caseStudy.lessons}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
