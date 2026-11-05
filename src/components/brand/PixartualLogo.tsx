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
      {variant === 'auto' || variant === 'badge-dark' ? (
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
            wordmarkClassName || 'text-neutral-900 dark:text-white'
          }`}
        >
          Pixartual<span className="text-[#fc8c04] font-semibold">AI</span>
        </span>
      )}
    </div>
  );
};
