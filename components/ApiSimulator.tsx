
import React, { useState } from 'react';
import { translate } from '../utils/morse-logic';
import Terminal from './Terminal';

const ApiSimulator: React.FC = () => {
  const [method, setMethod] = useState<'POST'>('POST');
  const [endpoint, setEndpoint] = useState('/api/v1/translate');
  const [payload, setPayload] = useState('{\n  "input": "HELLO WORLD"\n}');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        const body = JSON.parse(payload);
        const inputStr = body.input || body.text || body.morse || '';
        const result = translate(inputStr);
        
        setResponse({
          status: 200,
          ok: true,
          data: {
            success: result.success,
            data: result.output,
            detected: result.detectedType,
            timestamp: result.timestamp
          }
        });
      } catch (e) {
        setResponse({
          status: 400,
          ok: false,
          error: "Invalid JSON Payload"
        });
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <div className="bg-neutral-950 p-6 rounded-xl border border-white/10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
          <span className="p-1 bg-white text-black rounded text-xs uppercase font-bold">Playground</span>
          API Simulator
        </h3>
        
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 flex gap-2">
            <select 
              value={method}
              onChange={(e) => setMethod(e.target.value as any)}
              className="bg-black border border-white/10 rounded px-3 py-2 text-white font-bold focus:outline-none focus:ring-1 focus:ring-white"
            >
              <option>POST</option>
            </select>
            <input 
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded px-3 py-2 text-slate-300 focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-white hover:bg-slate-200 disabled:opacity-50 text-black px-6 py-2 rounded font-bold transition-all shadow-lg active:scale-95"
          >
            {loading ? 'Sending...' : 'Send Request'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Request Body (JSON)</label>
            <textarea 
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
              className="w-full h-48 bg-black border border-white/10 rounded p-3 text-sm mono text-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Response</label>
            <div className="w-full h-48 overflow-y-auto bg-black border border-white/10 rounded p-3 text-sm mono">
              {response ? (
                <pre className={response.ok ? 'text-white' : 'text-slate-500'}>
                  {JSON.stringify(response, null, 2)}
                </pre>
              ) : (
                <p className="text-slate-800 italic">Send a request to see output...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSimulator;
