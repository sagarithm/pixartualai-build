'use client';

import React, { useState } from 'react';
import { SectionNode } from '@/types/ast';
import { CheckCircle, ArrowRight, ArrowCounterClockwise, Sparkle } from '@phosphor-icons/react';

interface QuizRendererProps {
  section: SectionNode;
  primaryColor?: string;
}

export const QuizRenderer: React.FC<QuizRendererProps> = ({
  section,
  primaryColor = '#171717',
}) => {
  const { title, subtitle, props } = section;
  const questions: Array<{ question: string; options: Array<{ text: string; points: number }> }> =
    props?.questions || [
      {
        question: '1. What is the current maturity of your concept?',
        options: [
          { text: 'A raw idea in my head', points: 10 },
          { text: 'Rough wireframes and written notes', points: 20 },
          { text: 'A validated problem with eager initial testers', points: 30 },
        ],
      },
      {
        question: '2. What is your primary distribution channel?',
        options: [
          { text: 'Word of mouth and organic social', points: 20 },
          { text: 'Existing newsletter / community audience', points: 30 },
          { text: 'Paid acquisition and cold sales', points: 15 },
        ],
      },
    ];

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (points: number) => {
    const updated = [...selectedAnswers, points];
    setSelectedAnswers(updated);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  const totalScore = selectedAnswers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 30;
  const percentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800/60 mb-3">
          <Sparkle size={14} weight="fill" />
          <span>Interactive Diagnostic</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
            {subtitle}
          </p>
        )}
      </div>

      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6 sm:p-8">
        {!isCompleted ? (
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep) / questions.length) * 100)}% Complete</span>
            </div>

            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
              {questions[currentStep]?.question}
            </h3>

            <div className="space-y-3">
              {questions[currentStep]?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(opt.points)}
                  className="w-full text-left p-4 rounded-[10px] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-all text-sm font-medium text-neutral-800 dark:text-neutral-200 flex items-center justify-between group"
                >
                  <span>{opt.text}</span>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="size-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={36} weight="fill" />
            </div>

            <span className="text-xs uppercase font-mono font-semibold tracking-wider text-neutral-500">
              Viability Assessment Score
            </span>
            <div className="font-display font-black text-5xl text-neutral-900 dark:text-white mt-2">
              {percentage}%
            </div>

            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
              {percentage >= 75
                ? 'High viability trajectory. Your foundation and distribution strategy are solid.'
                : 'Promising potential with clear optimization opportunities in distribution and focus.'}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[7px] border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <ArrowCounterClockwise size={14} />
                <span>Retake Diagnostic</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

