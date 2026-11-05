'use client';

import React, { useState } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface MfyFaqAccordionProps {
  items: FaqItem[];
}

export const MfyFaqAccordion: React.FC<MfyFaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mfy-faq-list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`mfy-faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="mfy-faq-q"
              aria-expanded={isOpen}
              onClick={() => toggle(idx)}
            >
              <span>{item.q}</span>
              <svg
                aria-hidden="true"
                className="mfy-faq-ic"
                fill="currentColor"
                height="1em"
                viewBox="0 0 256 256"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
              </svg>
            </button>
            <div className="mfy-faq-a">
              <div className="mfy-faq-a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

