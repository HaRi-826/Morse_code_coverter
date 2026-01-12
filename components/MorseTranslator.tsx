import React, { useState, useEffect } from 'react';
import { translate, playMorseAudio } from '../utils/morse-logic';
import { InputType } from '../types';

const MorseTranslator: React.FC = () => {
  const [input, setInput] = useState('SYNC NEURAL LINK');
  const [output, setOutput] = useState('');
  const [detected, setDetected] = useState<InputType>('text');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  useEffect(() => {
    const result = translate(input);
    setOutput(result.output);
    setDetected(result.detectedType);
  }, [input]);

  const handleAudio = async () => {
    if (isAudioPlaying) return;
    setIsAudioPlaying(true);
    const morseString = detected === 'text' ? output : input;
    await playMorseAudio(morseString);
    setIsAudioPlaying(false);
  };

  const apiPreview = JSON.stringify({
    session: "active",
    payload: output,
    origin: detected,
    id: "TRANS-" + Math.floor(Math.random() * 1000)
  }, null, 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-3 space-y-4">
        {/* Input Card */}
        <div className="bg-zinc-950 border border-cyan-500/10 neon-border rounded-sm overflow-hidden transition-all hover:border-cyan-500/40">
          <div className="bg-cyan-500/5 px-4 py-2 border-b border-cyan-500/10 flex justify-between items-center">
            <span className="text-[9px] font-black text-cyan-800 uppercase tracking-widest">source</span>
            <span className="text-[8px] font-black text-cyan-400 bg-cyan-950 border border-cyan-400/20 px-2 py-0.5 rounded-full">
              {detected.toUpperCase()}
            </span>
          </div>
          <textarea
            className="w-full h-32 bg-transparent p-6 text-2xl text-cyan-100 placeholder-zinc-800 focus:outline-none resize-none font-mono tracking-tighter"
            placeholder="ENTER_DATA..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Output Card */}
        <div className="bg-zinc-950 border border-magenta-500/10 neon-border rounded-sm overflow-hidden transition-all hover:border-magenta-500/40">
          <div className="bg-magenta-500/5 px-4 py-2 border-b border-magenta-500/10 flex justify-between items-center">
            <span className="text-[9px] font-black text-magenta-800 uppercase tracking-widest">output</span>
            <button 
              onClick={() => navigator.clipboard.writeText(output)}
              className="text-[8px] font-black text-magenta-400 hover:text-white transition-colors"
            >
              [ COPY_DATA ]
            </button>
          </div>
          <div className="w-full min-h-[8rem] p-6 text-2xl text-magenta-500 font-mono break-all leading-snug bg-black/50">
            {output || <span className="animate-pulse text-magenta-950">_IDLE_</span>}
          </div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={handleAudio}
            disabled={isAudioPlaying || !output}
            className="col-span-2 bg-white text-black font-black py-4 rounded-sm transition-all hover:bg-cyan-400 active:scale-95 text-[10px] uppercase tracking-[0.4em] relative overflow-hidden group"
          >
            <span className="relative z-10">{isAudioPlaying ? 'Playing...' : 'PLAY_MORSE_AUDIO'}</span>
            <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <button 
            onClick={() => setInput(output)}
            className="border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-400 font-black text-[10px] uppercase tracking-widest transition-all"
          >
            Switch
          </button>
        </div>
      </div>

      {/* Side Status Monitor */}
      <div className="bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden flex flex-col font-mono">
        <div className="bg-zinc-900 px-3 py-2 border-b border-zinc-800">
          <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">API_Response_Preview</span>
        </div>
        <div className="p-4 flex-1 text-[10px] text-cyan-800 space-y-6">
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-zinc-700">JSON_OUTPUT</p>
            <pre className="text-cyan-400/60 leading-tight">
              {apiPreview}
            </pre>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-zinc-900">
            <div className="flex justify-between items-center text-[8px]">
              <span>SERVER_LOAD</span>
              <span className="text-magenta-500">OPTIMAL</span>
            </div>
            <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[99%]" style={{boxShadow: '0 0 10px #00ffff'}}></div>
            </div>
          </div>
        </div>
        <div className="bg-black p-3 text-[8px] text-zinc-800 font-black border-t border-zinc-900 uppercase">
          Status: Operational
        </div>
      </div>
    </div>
  );
};

export default MorseTranslator;