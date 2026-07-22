import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GitHubCalendar } from 'react-github-calendar';
import { Terminal, ChevronDown, Rocket, ExternalLink, Code2, Cpu } from 'lucide-react';

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

      {/* About the Engineer - Bento Grid */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-serif font-bold mb-4">Engineering Philosophy</h2>
          <p className="text-gray-400">How I approach complex systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll opacity-0">
          {/* Philosophy Card - span 2 */}
          <div className="md:col-span-2 glass p-8 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-primary/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-700"></div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 relative z-10"><Cpu className="text-primary" /> First Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div>
                <h4 className="font-semibold text-lg text-white mb-2 border-b border-white/10 pb-2 inline-block">Understand the Abstraction</h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">If I don't understand the underlying math or logic, I build the engine from scratch. Black boxes are for production, glass boxes are for learning.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-2 border-b border-white/10 pb-2 inline-block">Performance as a Feature</h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">Whether it's bypassing Python loops for raw GPU tensor operations or managing memory in C, optimization isn't an afterthought.</p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="font-semibold text-lg text-white mb-2 border-b border-white/10 pb-2 inline-block">Systems Thinking</h4>
                <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-2xl">A project isn't just a frontend or a model. It's the entire pipeline—from the database architecture to the CI/CD deployment and memory optimization.</p>
              </div>
            </div>
          </div>

          {/* The "Now" Card - span 1 */}
          <div className="glass p-8 rounded-3xl flex flex-col relative overflow-hidden border border-white/5 hover:border-accent/30 transition-colors duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Status: <span className="text-white">Now</span></h3>
              <div className="flex items-center justify-center w-4 h-4">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-6 flex-1">
              <div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest border border-primary/30 px-2 py-0.5 rounded-full mb-2 inline-block">Building</span>
                <p className="text-sm text-gray-300">Local DeepSeek R1 Clone</p>
              </div>
              <div>
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest border border-accent/30 px-2 py-0.5 rounded-full mb-2 inline-block">Reading</span>
                <p className="text-sm text-gray-300">CUDA C Programming Guide</p>
              </div>
              <div>
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest border border-purple-400/30 px-2 py-0.5 rounded-full mb-2 inline-block">Obsessing Over</span>
                <p className="text-sm text-gray-300">Latent Space Visualizations</p>
              </div>
            </div>
          </div>

          {/* IDE Code Window - span 2 */}
          <div className="md:col-span-2 glass rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:border-primary/30 transition-colors duration-500">
            <div className="bg-black/50 px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-gray-500 ml-4 font-mono select-none">rubiks_env.py — Arktosum</span>
            </div>
            <div className="p-6 overflow-x-auto bg-[#0d0d12] flex-1">
              <pre className="text-[13px] md:text-sm font-mono leading-relaxed">
                <span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">gather_state</span><span className="text-gray-300">(env, actions):</span><br/>
                <span className="text-[#5c6370] italic">    """Bypassing Python loops for raw GPU tensor operations."""</span><br/>
                <span className="text-gray-300">    B = env.batch_size</span><br/>
                <span className="text-gray-300">    idx = actions.</span><span className="text-[#56b6c2]">view</span><span className="text-gray-300">(B, </span><span className="text-[#d19a66]">1</span><span className="text-gray-300">, </span><span className="text-[#d19a66]">1</span><span className="text-gray-300">).</span><span className="text-[#56b6c2]">expand</span><span className="text-gray-300">(B, </span><span className="text-[#d19a66]">1</span><span className="text-gray-300">, env.state_dim)</span><br/>
                <span className="text-[#5c6370] italic">    # Massively parallel physics step</span><br/>
                <span className="text-gray-300">    next_state = torch.</span><span className="text-[#56b6c2]">gather</span><span className="text-gray-300">(env.transitions, </span><span className="text-[#d19a66]">dim</span><span className="text-gray-300">=</span><span className="text-[#d19a66]">1</span><span className="text-gray-300">, </span><span className="text-[#d19a66]">index</span><span className="text-gray-300">=idx)</span><br/>
                <span className="text-gray-300">    rewards = </span><span className="text-[#61afef]">compute_rewards_vectorized</span><span className="text-gray-300">(next_state)</span><br/>
                <span className="text-[#c678dd]">    return</span><span className="text-gray-300"> next_state, rewards</span>
              </pre>
            </div>
          </div>

          {/* Tech Stack Visual - span 1 */}
          <div className="glass p-8 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0,transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-8 relative z-10 text-gray-400 group-hover:text-white transition-colors">Core Arsenal</h3>
            <div className="relative w-full h-full min-h-[160px] flex items-center justify-center mt-4">
              <div className="absolute w-16 h-16 rounded-full glass flex items-center justify-center z-20 shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all duration-700">
                <span className="font-bold text-white text-sm">AI</span>
              </div>
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center z-10 transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4">
                <span className="text-[10px] text-gray-400 font-medium">PyTorch</span>
              </div>
              <div className="absolute -top-2 right-0 w-12 h-12 rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center z-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-4">
                <span className="text-[10px] text-gray-400 font-medium">Python</span>
              </div>
              <div className="absolute bottom-0 -left-2 w-12 h-12 rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center z-10 transition-transform duration-700 group-hover:translate-y-4 group-hover:-translate-x-2">
                <span className="text-[10px] text-gray-400 font-medium">React</span>
              </div>
              <div className="absolute -bottom-2 right-2 w-12 h-12 rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center z-10 transition-transform duration-700 group-hover:translate-y-4 group-hover:translate-x-4">
                <span className="text-[10px] text-gray-400 font-medium">C/C++</span>
              </div>
              {/* Lines using inline SVG */}
              <svg className="absolute inset-0 w-full h-full -z-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40">
                <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="currentColor" className="text-purple-400" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="currentColor" className="text-purple-400" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="currentColor" className="text-purple-400" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="currentColor" className="text-purple-400" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
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
