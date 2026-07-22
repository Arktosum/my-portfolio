import rubiksImg from '../assets/rubiks_solver_1784723109677.jpg';
import slmImg from '../assets/slm_finetune_1784723122047.jpg';
import makonomeImg from '../assets/makonome_1784723134640.jpg';
import stellarImg from '../assets/stellar_16_1784723147643.jpg';
import quantImg from '../assets/quant_dash_1784724138131.jpg';
import nanoImg from '../assets/nano_mind_1784724147320.jpg';

export const projects = [
  {
    id: 'quant-dash',
    title: 'QuantDash',
    description: 'A real-time algorithmic trading terminal with an XGBoost directional classifier and a fully vectorized arena simulator.',
    tags: ['TypeScript', 'Machine Learning', 'TradingView'],
    link: 'https://github.com/Arktosum/quant-dash',
    image: quantImg,
    featured: true,
    caseStudy: {
      problem: "Traditional backtesting loops in Python are notoriously slow, and visualizing multiple live ML models trading simultaneously requires a decoupled architecture so the UI doesn't freeze.",
      solution: "Engineered a custom vectorised arena simulator capable of evaluating multiple strategies on 10 days of 1-min OHLC data instantly. The frontend leverages Canvas-based TradingView charts isolated from data ingestion.",
      architecture: "React + Vite frontend, TradingView Lightweight Charts, XGBoost gradient-boosted classifier.",
      lessons: "Decoupling the chart rendering loop from the data-fetching layer was critical. State management in real-time trading systems requires extreme care to prevent UI blocking."
    }
  },
  {
    id: 'nano-mind',
    title: 'Nano·Mind',
    description: 'An interactive, rigorously accurate in-browser visualization of a decoder-only transformer. Features a custom PyTorch-trained mini-GPT running in pure JS.',
    tags: ['JavaScript', 'PyTorch', 'Transformers'],
    link: 'https://github.com/Arktosum/nano-mind',
    image: nanoImg,
    featured: true,
    caseStudy: {
      problem: "Understanding how Transformers work is incredibly difficult when the math is obscured behind massive frameworks and black-box tensors.",
      solution: "Trained a tiny GPT from scratch on 'Alice in Wonderland', exported the exact weights, and built a bespoke vanilla JavaScript visualizer that executes the forward pass entirely in the browser, showing every calculation.",
      architecture: "PyTorch (Training) -> JSON Weights -> Vanilla JS + SVG/Canvas (Inference/Visualization)",
      lessons: "Visualizing 64-dimensional vectors on-screen required highly optimized Canvas rendering and custom colour maps to keep the application 60FPS while teaching the user."
    }
  },
  {
    id: 'rubiks-solver-rl',
    title: 'Rubik\'s Solver RL',
    description: "A from-scratch Rubik's Cube solver using Proximal Policy Optimization, Reverse Curriculum Learning, and a massively parallel GPU physics engine.",
    tags: ['Python', 'Reinforcement Learning', 'GPU'],
    link: 'https://github.com/Arktosum/rubiks-solver-rl',
    image: rubiksImg,
    featured: false,
    caseStudy: {
      problem: "Standard Reinforcement Learning environments for the Rubik's Cube suffer from the 'Python loop bottleneck', making gathering experience agonizingly slow.",
      solution: "Wrote a fully vectorized GPU physics engine in pure PyTorch that can simulate 1,024 Rubik's cubes simultaneously. Combined this with a Reverse Curriculum Learning approach for the PPO agent.",
      architecture: "Pure PyTorch, PPO algorithm, Vectorized Environment, 3D Visualizer.",
      lessons: "Bypassing Python loops for tensor-native operations (`torch.gather`) yielded an order of magnitude speedup in environment simulation."
    }
  },
  {
    id: 'makonome',
    title: 'Makonome',
    description: 'An advanced JARVIS-inspired assistant with episodic memory (pgvector), heartbeat scheduling, tool calling, and self-reflection.',
    tags: ['Python', 'Supabase', 'Flutter'],
    link: 'https://github.com/Arktosum/makonome',
    image: makonomeImg,
    featured: false,
    caseStudy: {
      problem: "Standard AI assistants are purely reactive and have no sense of long-term identity or memory of past interactions.",
      solution: "Built a persistent agent architecture with episodic memory using Supabase pgvector. Implemented a 'heartbeat' scheduler that allows the agent to initiate conversations autonomously, and a background curator that evolves its personality over time.",
      architecture: "Python Backend, Groq/OpenAI adapters, Supabase pgvector, Flask Dashboard, Flutter Mobile App.",
      lessons: "Designing an agent that 'texts first' requires very careful prompting and taste-filters so it only speaks when it genuinely has something to say."
    }
  },
  {
    id: 'stellar-16',
    title: 'Stellar 16',
    description: 'A 16-bit virtual computer and CPU emulator built entirely from scratch using Logic Gates, ALUs, and Memory modules.',
    tags: ['TypeScript', 'Systems'],
    link: 'https://github.com/Arktosum/stellar-16',
    image: stellarImg,
    featured: false,
    caseStudy: {
      problem: "Modern web developers rarely interact with the silicon-level fundamentals of how computers actually compute.",
      solution: "Built a 16-bit virtual machine architecture starting from raw logic gates (NAND, AND, OR), up to an Arithmetic Logic Unit (ALU), and finally a full CPU cycle engine, visualized on the web.",
      architecture: "TypeScript, OOP Simulation, Web Frontend.",
      lessons: "Simulating hardware clocks and bus states in JavaScript requires careful management of object references and execution order to avoid race conditions."
    }
  },
  {
    id: 'slm-finetune',
    title: 'SLM Fine-tune',
    description: 'An end-to-end pipeline for memory-optimized LoRA fine-tuning, GGUF quantization, and edge deployment of a Small Language Model.',
    tags: ['Python', 'LoRA', 'Docker'],
    link: 'https://github.com/Arktosum/slm-finetune',
    image: slmImg,
    featured: false,
    caseStudy: {
      problem: "Running Large Language Models locally is expensive. Fine-tuning them requires massive VRAM.",
      solution: "Created an end-to-end pipeline using Unsloth and 4-bit quantization to fine-tune the TinyLlama-1.1B model on consumer hardware (<4GB VRAM), exporting to GGUF format for fast edge deployment.",
      architecture: "HuggingFace, Unsloth, llama.cpp, Ollama, Docker.",
      lessons: "Gradient checkpointing and 8-bit AdamW optimizers are absolute necessities when squeezing LLM training onto standard GPUs."
    }
  }
];
