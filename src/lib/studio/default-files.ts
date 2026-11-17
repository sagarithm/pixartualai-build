export const DEFAULT_SANDBOX_FILES: Record<string, string> = {
  '/public/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pixartual Live App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              brand: {
                flame: '#FE3200',
                amber: '#FC8C04',
              }
            }
          }
        }
      }
    </script>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body class="bg-black text-white antialiased">
    <div id="root"></div>
  </body>
</html>`,

  '/index.tsx': `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}`,

  '/App.tsx': `import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Layers, Moon, Sun, Check } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={\`min-h-screen transition-colors duration-300 \${isDark ? 'bg-[#0A0A0C] text-white' : 'bg-[#FAFAFA] text-neutral-900'}\`}>
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 dark:border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FE3200] to-[#FC8C04] flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/25">
              P
            </div>
            <span className="font-semibold text-lg tracking-tight">Pixartual</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full border border-neutral-700/60 hover:bg-neutral-800/40 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>
            <button className="bg-gradient-to-r from-[#FE3200] to-[#FC8C04] text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-95 transition-opacity shadow-lg shadow-orange-500/20 cursor-pointer">
              Launch App
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Live In-Browser Code Sandbox</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.12] mb-6">
          Turn your ideas into <span className="bg-gradient-to-r from-[#FE3200] via-[#FC8C04] to-amber-300 bg-clip-text text-transparent">live software</span> instantly.
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Powered by frontier reasoning models and an in-memory client-side Vite runtime. Zero cold-start latency, hot-reloading in milliseconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer">
            <span>Explore Playground</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto border border-neutral-700/80 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-neutral-800/40 transition-colors cursor-pointer">
            Inspect Architecture
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/40 transition-all">
            <Zap className="w-6 h-6 text-orange-500 mb-4" />
            <h3 className="font-semibold text-base mb-2">Sub-second Latency</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">Runs completely client-side in your browser with zero virtual machine spinup wait times.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/40 transition-all">
            <ShieldCheck className="w-6 h-6 text-orange-500 mb-4" />
            <h3 className="font-semibold text-base mb-2">Air-Gapped Sandbox</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">Code compiles within an isolated iframe memory boundary with no host leaks.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/40 transition-all">
            <Layers className="w-6 h-6 text-orange-500 mb-4" />
            <h3 className="font-semibold text-base mb-2">Multi-Model Gateway</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">Choose Claude 3.7 Sonnet, GPT-4o, or Gemini 2.0 Flash dynamically on OpenRouter.</p>
          </div>
        </div>
      </main>
    </div>
  );
}`,
};
