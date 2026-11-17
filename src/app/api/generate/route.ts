import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { getOpenRouterClient, DEFAULT_MODEL, PIXARTUAL_SYSTEM_PROMPT, SupportedModelId } from '@/lib/ai/openrouter';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { prompt, modelId = DEFAULT_MODEL, existingFiles, history = [] } = await req.json();

    if (!prompt && (!history || history.length === 0)) {
      return new Response(JSON.stringify({ error: 'Prompt or conversation history is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    // Fallback: If user hasn't set OPENROUTER_API_KEY yet, provide a guided fallback stream
    if (!apiKey) {
      const fallbackStream = createFallbackStream(prompt);
      return new Response(fallbackStream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Pixartual-Mode': 'simulation',
        },
      });
    }

    const openrouter = getOpenRouterClient();
    const model = openrouter(modelId as SupportedModelId);

    // Build context with existing files if provided
    let contextPrompt = '';
    if (existingFiles && Object.keys(existingFiles).length > 0) {
      contextPrompt = `\n\n### CURRENT PROJECT FILES:\n` +
        Object.entries(existingFiles)
          .map(([path, content]) => `File: ${path}\n\`\`\`tsx\n${content}\n\`\`\``)
          .join('\n\n');
    }

    const messages = [
      ...history,
      {
        role: 'user' as const,
        content: `${prompt}${contextPrompt}`,
      },
    ];

    const result = streamText({
      model,
      system: PIXARTUAL_SYSTEM_PROMPT,
      messages,
      temperature: 0.3,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error('Error in /api/generate:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal AI generation error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Deterministic fallback generator for instant out-of-the-box local testing
 */
function createFallbackStream(prompt: string): ReadableStream {
  const encoder = new TextEncoder();
  const cleanTitle = prompt ? prompt.slice(0, 40) : 'Next-Gen Experience';

  const mockAppCode = `import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Zap, Globe, Layers, Moon, Sun } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={\`min-h-screen transition-colors duration-200 \${isDark ? 'bg-[#0a0a0c] text-white' : 'bg-white text-neutral-900'}\`}>
      {/* Navbar */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FE3200] to-[#FC8C04] flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
            P
          </div>
          <span className="font-semibold tracking-tight text-lg">Pixartual</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>
          <button className="bg-gradient-to-r from-[#FE3200] to-[#FC8C04] text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-95 transition-opacity shadow-lg shadow-orange-500/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Generated live with PixartualAI</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          ${cleanTitle}
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          A high-performance digital application scaffolded live inside your sandboxed Vite runtime. Ready to edit, customize, and launch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
            <span>Explore Features</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto border border-white/15 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
            View Source Code
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Lightning Velocity", desc: "Sub-second live hot-module reloading directly inside the browser." },
            { icon: Shield, title: "Air-Gapped Isolation", desc: "Secure in-browser execution with zero sandbox perimeter leaks." },
            { icon: Layers, title: "Multi-Model AI", desc: "Powered by Claude 3.7 Sonnet, GPT-4o, and Gemini 2.0 Flash." },
          ].map((feat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/40 transition-colors group">
              <feat.icon className="w-6 h-6 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">{feat.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`;

  const streamText = `Here is your generated application scaffold:\n\n\`\`\`tsx file="/App.tsx"\n${mockAppCode}\n\`\`\`\n\nYour application is running live in the Sandpack sandbox!`;

  return new ReadableStream({
    async start(controller) {
      const chunks = streamText.split(' ');
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk + ' '));
        await new Promise((res) => setTimeout(res, 20));
      }
      controller.close();
    },
  });
}
