'use client';

import React from 'react';
import Image from 'next/image';

interface PixartualLogoProps {
  variant?: 'symbol-black' | 'symbol-white' | 'badge-dark' | 'symbol-gradient';
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const PixartualLogo: React.FC<PixartualLogoProps> = ({
  variant = 'symbol-black',
  size = 28,
  className = '',
  showWordmark = false,
  wordmarkClassName = '',
}) => {
  const getLogoSrc = () => {
    switch (variant) {
      case 'badge-dark':
        return '/pixartual/svg/pixartual-badge-dark.svg';
      case 'symbol-white':
        return '/pixartual/svg/pixartual-symbol-white.svg';
      case 'symbol-black':
      default:
        return '/pixartual/svg/pixartual-symbol-black.svg';
    }
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {variant === 'symbol-gradient' ? (
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
        <img
          src="/pixartual/svg/pixartual-badge-dark.svg"
          alt="PixartualAI"
          style={{ width: size, height: size }}
          className="shrink-0 object-contain rounded-lg shadow-sm"
        />
      ) : (
        <img
          src={getLogoSrc()}
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

