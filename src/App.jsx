import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Github = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18.13V22" />
  </svg>
);

import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative selection:bg-primary/30 selection:text-white flex flex-col">
        {/* Background Glowing Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[150px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<CaseStudy />} />
        </Routes>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-12 px-4 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-xl font-serif font-bold">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-sm">A</span>
              Arktosum
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Arktosum. All rights reserved.
              </p>
              <a href="https://hits.sh/arktosum-portfolio.vercel.app/" target="_blank" rel="noreferrer">
                <img 
                  src="https://hits.sh/arktosum-portfolio.vercel.app.svg?style=for-the-badge&label=VISITORS&color=9333ea&labelColor=1a1a2e" 
                  alt="Visitor Count" 
                  className="opacity-50 hover:opacity-100 transition-opacity duration-300 rounded"
                />
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/Arktosum" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
