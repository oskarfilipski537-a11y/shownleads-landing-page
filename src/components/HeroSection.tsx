import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { QuizLeadForm } from './QuizLeadForm';
import { ConsentRecord, ViewMode } from '../types';

interface HeroSectionProps {
  onNavigatePolicy: (view: ViewMode) => void;
  onOpenAuditRecord?: (record: ConsentRecord) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onNavigatePolicy, 
  onOpenAuditRecord 
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-20">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-blue-600/10 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-20 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centre: Eyebrow, H1, reduced H2, and 3 benefits */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span className="inline-block w-2 h-0.5 bg-cyan-400"></span>
            PERFORMANCE-BASED APPOINTMENT GENERATION
            <span className="inline-block w-2 h-0.5 bg-cyan-400"></span>
          </div>

          {/* Centered H1 Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Stop Paying for Leads That Never Turn Into Conversations.
          </h1>

          {/* Reduced H2 Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ShownLeads helps home-service contractors turn paid advertising into qualified sales appointments. 
            Under our <strong className="text-white font-semibold">Pay Per Shown Appointment (PPSA)</strong> model, 
            fees are tied to qualifying appointments that actually attend.
          </p>

          {/* 3 Concise Benefits with typographic separators */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Performance-based pricing
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Appointment-focused delivery
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Clear qualification criteria
            </span>
          </div>

        </div>

        {/* Quiz-Based Qualification Lead Form Positioned Just Below */}
        <QuizLeadForm 
          onNavigatePolicy={onNavigatePolicy}
          onOpenAuditRecord={onOpenAuditRecord}
        />

        {/* Commercial Clarification Footnote */}
        <p className="text-center text-[11px] text-slate-400 mt-6 max-w-xl mx-auto">
          * Note: Advertising spend, implementation setup fees, and specific appointment qualification rules are established in the written service contract.
        </p>

      </div>
    </section>
  );
};
