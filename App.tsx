import React from 'react';
import MorseTranslator from './components/MorseTranslator';
import Documentation from './components/Documentation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-cyan-500 selection:text-black">
      {/* HUD Header */}
      <header className="border-b border-cyan-500/10 py-4 px-8 sticky top-0 bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-cyan-500 text-black font-black px-2 py-0.5 text-[10px] tracking-tighter">NODE_001</div>
            <h1 className="text-sm font-black tracking-widest text-cyan-400 uppercase glitch-text">Morse.Machine.API</h1>
          </div>
          <nav className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.3em]">
            <a href="#converter" className="text-zinc-600 hover:text-cyan-400 transition-colors">Converter</a>
            <a href="#docs" className="text-zinc-600 hover:text-magenta-400 transition-colors">Documentation</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-20 pb-40 space-y-48">
        {/* Hero Section */}
        <section id="converter" className="relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full"></div>
          
          <div className="space-y-8 relative z-10">
            <div className="space-y-1">
              <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">System_Ready</p>
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4 glitch-text">
                Morse<br/>Machine
              </h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest max-w-lg border-l-2 border-magenta-500 pl-4">
                convert morse to text and vice versa
              </p>
            </div>
            <MorseTranslator />
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="border-t border-zinc-900 pt-24 relative">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-magenta-500/5 blur-[80px] rounded-full"></div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 italic flex items-center gap-4">
              <span className="w-8 h-[2px] bg-magenta-500"></span>
              API_Documentation
            </h2>
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Developer_Guide // Public_Endpoint_v1</p>
          </div>
          <Documentation />
        </section>
      </main>
    </div>
  );
};

export default App;