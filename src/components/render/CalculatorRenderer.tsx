'use client';

import React, { useState } from 'react';
import { SectionNode } from '@/types/ast';
import { Calculator, CheckSquare, Square, ArrowClockwise } from '@phosphor-icons/react';

interface CalculatorRendererProps {
  section: SectionNode;
  primaryColor?: string;
}

export const CalculatorRenderer: React.FC<CalculatorRendererProps> = ({
  section,
  primaryColor = '#171717',
}) => {
  const { title, subtitle, props } = section;
  const isSaas = props?.isSaasModel;

  // SaaS ROI State
  const [visitors, setVisitors] = useState(props?.defaultVisitors || 15000);
  const [conversion, setConversion] = useState(props?.defaultConversion || 2.5);
  const [arpu, setArpu] = useState(props?.defaultArpu || 49);

  // Project Estimator State
  const [hourlyRate, setHourlyRate] = useState(props?.hourlyRate || 125);
  const [services, setServices] = useState<Array<{ name: string; hours: number; checked: boolean }>>(
    props?.services || [
      { name: 'Architecture & Strategy Spec', hours: 30, checked: true },
      { name: 'Interactive UI & Component System', hours: 40, checked: true },
      { name: 'Full-Stack Edge Integration', hours: 35, checked: false },
      { name: 'Custom Domain & Analytics Setup', hours: 15, checked: false },
    ]
  );

  // Calculated values
  const monthlyPayingCustomers = Math.round((visitors * (conversion / 100)));
  const projectedMRR = monthlyPayingCustomers * arpu;
  const projectedARR = projectedMRR * 12;

  const totalHours = services.reduce((acc, s) => acc + (s.checked ? s.hours : 0), 0);
  const estimatedCost = totalHours * hourlyRate;

  const toggleService = (index: number) => {
    setServices((prev) =>
      prev.map((s, i) => (i === index ? { ...s, checked: !s.checked } : s))
    );
  };

  return (
    <div className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800/60 mb-3">
          <Calculator size={14} weight="bold" />
          <span>Interactive Live Micro-Tool</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-sans">
            {subtitle}
          </p>
        )}
      </div>

      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6 sm:p-8">
        {isSaas ? (
          /* SaaS Projection Calculator */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-neutral-700 dark:text-neutral-300">Monthly Website Visitors</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">
                    {visitors.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-white cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-neutral-700 dark:text-neutral-300">Visitor-to-Customer Conversion Rate</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">
                    {conversion}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.1"
                  value={conversion}
                  onChange={(e) => setConversion(Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-white cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-neutral-700 dark:text-neutral-300">Average Revenue Per User (Monthly)</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">
                    ${arpu}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={arpu}
                  onChange={(e) => setArpu(Number(e.target.value))}
                  className="w-full accent-neutral-900 dark:accent-white cursor-pointer"
                />
              </div>
            </div>

            {/* Results card */}
            <div className="md:col-span-5 rounded-[14px] bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 p-6 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
                  Projected Compounding ARR
                </span>
                <div className="font-display font-black text-3xl sm:text-4xl text-neutral-900 dark:text-white mt-2">
                  ${projectedARR.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  ~${projectedMRR.toLocaleString()} MRR / mo
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700/80 grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">New Monthly Users</span>
                  <div className="font-mono font-bold text-neutral-800 dark:text-neutral-200 text-lg">
                    {monthlyPayingCustomers}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">Interactive Lift</span>
                  <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                    +38%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Project Budget Estimator */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                Select Scope Requirements:
              </span>
              {services.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleService(idx)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-[10px] border transition-all text-left ${
                    s.checked
                      ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/60'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {s.checked ? (
                      <CheckSquare size={20} weight="fill" className="text-neutral-900 dark:text-white" />
                    ) : (
                      <Square size={20} className="text-neutral-400" />
                    )}
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {s.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400">
                    {s.hours} hrs
                  </span>
                </button>
              ))}
            </div>

            {/* Price Outcome */}
            <div className="md:col-span-5 rounded-[14px] bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 p-6 text-center">
              <span className="text-xs uppercase font-mono font-semibold tracking-wider text-neutral-500 dark:text-neutral-400">
                Estimated Project Total
              </span>
              <div className="font-display font-black text-3xl sm:text-4xl text-neutral-900 dark:text-white mt-2">
                ${estimatedCost.toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
                {totalHours} total dedicated hours @ ${hourlyRate}/hr
              </div>

              <button
                style={{ backgroundColor: primaryColor }}
                className="mt-6 w-full py-2.5 rounded-[7px] text-white font-medium text-sm transition-opacity hover:opacity-90 shadow-sm"
              >
                Lock In Estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

