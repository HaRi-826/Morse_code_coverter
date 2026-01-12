
import React, { useState } from 'react';

interface TerminalProps {
  title: string;
  code: string;
}

const Terminal: React.FC<TerminalProps> = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden border border-white/10 shadow-xl">
      <div className="bg-neutral-900 px-4 py-2 flex justify-between items-center border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
        </div>
        <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">{title}</span>
        <button 
          onClick={handleCopy}
          className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
