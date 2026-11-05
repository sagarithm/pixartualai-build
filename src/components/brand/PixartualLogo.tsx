'use client';

import React from 'react';

interface PixartualLogoProps {
  variant?: 'auto' | 'symbol-black' | 'symbol-white' | 'badge-dark' | 'symbol-gradient';
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const PixartualLogo: React.FC<PixartualLogoProps> = ({
  variant = 'auto',
  size = 28,
  className = '',
  showWordmark = false,
  wordmarkClassName = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {variant === 'auto' ? (
        <>
          <img
            src="/pixartual/svg/pixartual-symbol-black.svg"
            alt="PixartualAI"
            style={{ width: size, height: size }}
            className="shrink-0 object-contain dark:hidden"
          />
          <img
            src="/pixartual/svg/pixartual-symbol-white.svg"
            alt="PixartualAI"
            style={{ width: size, height: size }}
            className="shrink-0 object-contain hidden dark:block"
          />
        </>
      ) : variant === 'symbol-gradient' ? (
        <div
          style={{ width: size, height: size }}
          className="relative shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-[#fe3200] via-[#fc8c04] to-[#f28a6f] p-[5px] shadow-sm"
        >
          <img
            src="/pixartual/svg/pixartual-symbol-white.svg"
            alt="PixartualAI"
            className="w-full h-full object-contain"
          />
        </div>
      ) : variant === 'badge-dark' ? (
        <div className="relative shrink-0 inline-flex items-center justify-center">
          <img
            src="/pixartual/svg/pixartual-badge-dark.svg"
            alt="PixartualAI"
            style={{ width: size, height: size }}
            className="shrink-0 object-contain rounded-lg shadow-sm border border-black/5 dark:border-white/20 transition-colors"
          />
        </div>
      ) : variant === 'symbol-white' ? (
        <img
          src="/pixartual/svg/pixartual-symbol-white.svg"
          alt="PixartualAI"
          style={{ width: size, height: size }}
          className="shrink-0 object-contain"
        />
      ) : (
        <img
          src="/pixartual/svg/pixartual-symbol-black.svg"
          alt="PixartualAI"
          style={{ width: size, height: size }}
          className="shrink-0 object-contain"
        />
      )}

      {showWordmark && (
        <span
          className={`font-['Neutralsans',sans-serif] font-medium tracking-tight text-[19px] leading-none ${
            wordmarkClassName || 'text-neutral-900'
          }`}
        >
          Pixartual<span className="text-[#fc8c04] font-semibold">AI</span>
        </span>
      )}
    </div>
  );
};
