import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

export const Terminal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'ArktosumOS v1.0.0 (tty1)' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `guest@arktosum:~$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Available commands:' });
        newHistory.push({ type: 'output', text: '  whoami    - About me' });
        newHistory.push({ type: 'output', text: '  skills    - List core technologies' });
        newHistory.push({ type: 'output', text: '  clear     - Clear terminal output' });
        newHistory.push({ type: 'output', text: '  exit      - Close terminal' });
        break;
      case 'whoami':
        newHistory.push({ type: 'output', text: 'Arktosum - Systems & AI Engineer building complex digital experiences.' });
        break;
      case 'skills':
        newHistory.push({ type: 'output', text: '> Python, TypeScript, React, PyTorch, Supabase, C, OpenGL, Docker' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        setInput('');
        return;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', text: `bash: ${cmd}: command not found` });
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed z-[100] bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl flex flex-col font-mono text-sm overflow-hidden transition-all duration-300 ${
      isMaximized ? 'inset-4' : 'bottom-4 right-4 w-[400px] h-[300px] md:w-[600px] md:h-[400px]'
    }`}>
      {/* Terminal Header */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2 text-gray-400">
          <TerminalIcon size={14} />
          <span>guest@arktosum:~</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMaximized(!isMaximized)} className="text-gray-400 hover:text-white transition-colors">
            {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-red-400 transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-4 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${
            line.type === 'error' ? 'text-red-400' : 
            line.type === 'input' ? 'text-gray-300' : 
            line.type === 'system' ? 'text-primary' : 'text-green-400'
          }`}>
            {line.text}
          </div>
        ))}
        
        <div className="flex items-center mt-2">
          <span className="text-green-400 mr-2">guest@arktosum:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand(input);
            }}
            className="flex-1 bg-transparent outline-none text-gray-300 border-none focus:ring-0 p-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};
