import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { Terminal, ChevronDown, Rocket, ExternalLink, Code2 } from 'lucide-react';

const Github = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22" />
  </svg>
);

import { Terminal as TerminalComponent } from '../components/Terminal';
import { projects } from '../data/projects';

export const Home = () => {
  const observerRef = useRef(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    // Keyboard shortcut for Terminal (Ctrl + `)
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === '`') {
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <TerminalComponent isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="animate-fade-in-up text-center max-w-3xl mx-auto">
          <button 
            onClick={() => setIsTerminalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/30 text-primary hover:bg-primary/10 transition-colors cursor-pointer group"
          >
            <Terminal size={16} className="group-hover:animate-pulse" />
            <span className="text-sm font-medium">Click me or press Ctrl + `</span>
          </button>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6">
            I'm <span className="text-gradient">Arktosum</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build complex, abstract, and highly optimized digital experiences. 
            Exploring the intersection of AI, physics engines, and modern web development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Explore My Work
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Living Skills & Timeline */}
      <section id="stats" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* GitHub Activity */}
          <div className="glass p-8 rounded-3xl animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-primary" /> Live Contributions
            </h3>
            <div className="overflow-x-auto pb-4 custom-scrollbar">
              <GitHubCalendar 
                username="Arktosum" 
                colorScheme="dark"
                theme={{
                  dark: ['#1a1a2e', '#4a00e0', '#6b21a8', '#9333ea', '#c084fc']
                }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-4">Real-time commit graph fetched from GitHub API.</p>
          </div>

          {/* Career Timeline */}
          <div className="glass p-8 rounded-3xl animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-6">Milestones</h3>
            <div className="space-y-6 border-l border-primary/30 pl-4 ml-2">
              <div className="relative">
                <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                <h4 className="font-semibold text-lg">Massively Parallel RL Engine</h4>
                <p className="text-sm text-gray-400">Bypassed the Python loop using PyTorch tensor operations.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-accent mt-1.5"></div>
                <h4 className="font-semibold text-lg">Stellar-16 Architecture</h4>
                <p className="text-sm text-gray-400">Built a 16-bit virtual CPU from logic gates in TypeScript.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-purple-500 mt-1.5"></div>
                <h4 className="font-semibold text-lg">Nano·Mind Transformer</h4>
                <p className="text-sm text-gray-400">Visualized the forward pass of a mini-GPT in vanilla JS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Deep Dives</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Select projects with full architectural case studies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className={`animate-on-scroll opacity-0 group relative rounded-3xl overflow-hidden glass hover:border-primary/50 transition-colors duration-500 ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''} h-full`}>
                <div className={`relative ${project.featured ? 'lg:w-1/2' : 'w-full'} h-64 lg:h-auto overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 lg:bg-gradient-to-r"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className={`p-8 md:p-12 flex flex-col justify-center ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket size={16} className="text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Case Study</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white text-xs font-bold px-2">Read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* The Playground Section */}
      <section id="playground" className="py-20 px-4 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-serif font-bold mb-4">The Interactive Lab</h2>
          <p className="text-gray-400">Raw experiments and visual algorithms.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "WaveFunction-Collapse", desc: "Procedurally generated hand-drawn terrain using WFC.", link: "https://github.com/Arktosum/WaveFunction-Collapse" },
            { title: "Pathfinding Visualizer", desc: "Interactive grid visualizing Dijkstra, A*, etc.", link: "https://github.com/Arktosum/Visualizer-Pathfinding" },
            { title: "K-Means Visualizer", desc: "Processing sketch animating data clustering.", link: "https://github.com/Arktosum/Visualizer-K-Means-Clustering" }
          ].map(lab => (
            <a key={lab.title} href={lab.link} target="_blank" rel="noreferrer" className="glass p-6 rounded-2xl hover:border-accent/50 transition-colors group animate-on-scroll opacity-0">
              <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{lab.title}</h4>
              <p className="text-sm text-gray-400">{lab.desc}</p>
              <ExternalLink size={14} className="mt-4 text-gray-500 group-hover:text-white" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};
