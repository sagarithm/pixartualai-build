'use client';

import React, { useState } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from '@codesandbox/sandpack-react';
import {
  Desktop,
  DeviceTablet,
  DeviceMobile,
  Code,
  Eye,
  ArrowsClockwise,
  ArrowSquareOut,
} from '@phosphor-icons/react';

interface SandpackCanvasProps {
  files: Record<string, string>;
  activeFile?: string;
  onFileChange?: (path: string, newCode: string) => void;
  viewport?: 'desktop' | 'tablet' | 'mobile';
  onViewportChange?: (vp: 'desktop' | 'tablet' | 'mobile') => void;
}

export const SandpackCanvas: React.FC<SandpackCanvasProps> = ({
  files,
  activeFile = '/App.tsx',
  viewport: externalViewport,
  onViewportChange,
}) => {
  const [internalViewport, setInternalViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [viewMode, setViewMode] = useState<'preview' | 'code' | 'split'>('preview');

  const currentViewport = externalViewport || internalViewport;
  const setViewport = onViewportChange || setInternalViewport;

  // Viewport width constraints for responsive testing
  const viewportStyles: Record<'desktop' | 'tablet' | 'mobile', string> = {
    desktop: 'w-full max-w-full h-full',
    tablet: 'w-[768px] h-full shadow-2xl rounded-2xl border border-white/10 overflow-hidden my-4',
    mobile: 'w-[375px] h-full shadow-2xl rounded-3xl border border-white/10 overflow-hidden my-4',
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0A0A0C] text-white">
      {/* Top Toolbar for Canvas Mode & Viewport Controls */}
      <div className="h-12 border-b border-neutral-800/80 px-4 flex items-center justify-between bg-[#111113] select-none">
        {/* Left: View Mode Toggle (Preview vs Code vs Split) */}
        <div className="flex items-center gap-1 bg-[#18181B] p-1 rounded-xl border border-neutral-800">
          <button
            type="button"
            onClick={() => setViewMode('preview')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
              viewMode === 'preview'
                ? 'bg-gradient-to-r from-[#FE3200] to-[#FC8C04] text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Eye size={14} weight="bold" />
            <span>Preview</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('code')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
              viewMode === 'code'
                ? 'bg-gradient-to-r from-[#FE3200] to-[#FC8C04] text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Code size={14} weight="bold" />
            <span>Code</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer ${
              viewMode === 'split'
                ? 'bg-gradient-to-r from-[#FE3200] to-[#FC8C04] text-white shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Split</span>
          </button>
        </div>

        {/* Center: Viewport Switcher */}
        <div className="flex items-center gap-1 bg-[#18181B] p-1 rounded-xl border border-neutral-800">
          <button
            type="button"
            title="Desktop View"
            onClick={() => setViewport('desktop')}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              currentViewport === 'desktop' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <Desktop size={16} />
          </button>
          <button
            type="button"
            title="Tablet View"
            onClick={() => setViewport('tablet')}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              currentViewport === 'tablet' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <DeviceTablet size={16} />
          </button>
          <button
            type="button"
            title="Mobile View"
            onClick={() => setViewport('mobile')}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              currentViewport === 'mobile' ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            <DeviceMobile size={16} />
          </button>
        </div>

        {/* Right: Sandbox Status Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Vite Sandbox Active</span>
          </div>
        </div>
      </div>

      {/* Main Sandbox Area */}
      <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-[#070709]">
        <SandpackProvider
          template="react"
          theme="dark"
          files={files}
          options={{
            activeFile,
            recompileMode: 'delayed',
            recompileDelay: 250,
          }}
          customSetup={{
            dependencies: {
              'lucide-react': '^0.468.0',
              clsx: '^2.1.1',
              'tailwind-merge': '^2.5.5',
            },
          }}
        >
          <div className="w-full h-full flex flex-col">
            <SandpackLayout className="!border-0 !rounded-none !bg-transparent w-full h-full flex-1">
              {/* Code Mode: File Explorer & Code Editor */}
              {(viewMode === 'code' || viewMode === 'split') && (
                <div className={`h-full flex ${viewMode === 'split' ? 'w-1/2 border-r border-neutral-800' : 'w-full'}`}>
                  <SandpackFileExplorer className="!h-full !border-r !border-neutral-800/80 !bg-[#0D0D0F]" />
                  <SandpackCodeEditor
                    showLineNumbers
                    showInlineErrors
                    wrapContent
                    closableTabs
                    className="!h-full !bg-[#0A0A0C] flex-1"
                  />
                </div>
              )}

              {/* Preview Mode: Centered responsive iframe */}
              {(viewMode === 'preview' || viewMode === 'split') && (
                <div
                  className={`h-full flex items-center justify-center p-2 bg-[#070709] overflow-auto transition-all ${
                    viewMode === 'split' ? 'w-1/2' : 'w-full'
                  }`}
                >
                  <div className={`transition-all duration-300 ${viewportStyles[currentViewport]}`}>
                    <SandpackPreview
                      showOpenInCodeSandbox={false}
                      showRefreshButton
                      className="!h-full !w-full !border-0 !rounded-xl"
                    />
                  </div>
                </div>
              )}
            </SandpackLayout>
          </div>
        </SandpackProvider>
      </div>
    </div>
  );
};
