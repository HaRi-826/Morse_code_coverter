import React from 'react';

const Documentation: React.FC = () => {
  const curlExample = `curl -X POST https://api.morse.io/v1/translate \\
  -H "Content-Type: application/json" \\
  -d '{"input": "SOS"}'`;

  const responseExample = `{
  "success": true,
  "data": "... --- ...",
  "detected": "text",
  "timestamp": "2026-01-12T..."
}`;

  return (
    <div className="space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Method List */}
        <div className="space-y-12">
          <div className="relative">
            <h3 className="text-[10px] font-black text-cyan-900 uppercase tracking-[0.5em] mb-6 block">
              Endpoints
            </h3>
            
            <div className="space-y-4">
              <div className="group bg-zinc-950 border-l-2 border-cyan-500 p-6 hover:bg-zinc-900 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] bg-cyan-500 text-black px-2 py-0.5 font-black italic">POST</span>
                  <code className="text-xs font-black text-white uppercase tracking-widest">/translate</code>
                </div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold leading-relaxed">
                  Translates input by automatically detecting whether it is Morse code or plain text.
                </p>
              </div>

              <div className="group bg-zinc-950 border-l-2 border-magenta-500 p-6 hover:bg-zinc-900 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] bg-magenta-500 text-black px-2 py-0.5 font-black italic">POST</span>
                  <code className="text-xs font-black text-white uppercase tracking-widest">/encode</code>
                </div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold leading-relaxed">
                  Explicitly converts text to Morse code. Returns error for non-alphanumeric input.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Command Display */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black text-magenta-900 uppercase tracking-[0.5em] mb-6">
            Usage_Examples
          </h3>
          
          <div className="bg-black border border-cyan-500/10 p-6 rounded-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1 h-full bg-cyan-500/20 group-hover:bg-cyan-500 transition-all"></div>
            <p className="text-[9px] text-zinc-800 mb-4 font-black tracking-widest">>> CURL_REQUEST</p>
            <pre className="text-xs text-cyan-400/80 font-mono leading-relaxed whitespace-pre-wrap">
              {curlExample}
            </pre>
          </div>

          <div className="bg-black border border-magenta-500/10 p-6 rounded-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-magenta-500/20 group-hover:bg-magenta-500 transition-all"></div>
            <p className="text-[9px] text-zinc-800 mb-4 font-black tracking-widest">>> JSON_RESPONSE</p>
            <pre className="text-xs text-white/70 font-mono leading-relaxed whitespace-pre-wrap">
              {responseExample}
            </pre>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center py-10 border-t border-zinc-900">
        <div className="text-[8px] text-zinc-800 font-black uppercase tracking-[0.3em]">
          Uplink Status: Operational // v1.0.4
        </div>
        <div className="flex gap-4">
          <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
          <div className="w-1 h-1 bg-magenta-500 rounded-full animate-ping delay-75"></div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;