import React, { useState } from 'react';
import { 
  Megaphone, 
  FileCheck2, 
  Users, 
  Clock, 
  CalendarCheck, 
  Info, 
  ShieldCheck 
} from 'lucide-react';

export const PipelineSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(4); // default on Shown Appointment

  const pipelineStages = [
    {
      id: 0,
      title: 'Meta Advertising',
      shortTitle: 'Paid Ads',
      actor: 'Audience Targeting',
      tagline: 'Targeted local paid campaigns on Facebook & Instagram',
      description: 'Localized Meta campaigns targeting verified property owners in your active service radius with clear scope filters.',
      deliverables: ['Custom geo-radius boundaries', 'Property owner targeting', 'Transparent ad spend billing'],
      icon: Megaphone,
      status: 'Acquisition'
    },
    {
      id: 1,
      title: 'Lead Enquiry',
      shortTitle: 'Enquiry',
      actor: 'Form Submission',
      tagline: 'Capturing homeowner intent with specific project details',
      description: 'Homeowner completes a project-specific enquiry form detailing urgency, project type, and physical address.',
      deliverables: ['Project scope capture', 'Contact verification', 'Territory check'],
      icon: FileCheck2,
      status: 'Intake'
    },
    {
      id: 2,
      title: 'Qualification',
      shortTitle: 'Filter',
      actor: 'Criteria Verification',
      tagline: 'Pre-screening against agreed contractor standards',
      description: 'Prospects are assessed against pre-agreed criteria (e.g., homeownership, budget range, service area, timeline).',
      deliverables: ['Homeowner status confirmed', 'Project minimums verified', 'Decision-maker presence'],
      icon: Users,
      status: 'Screening'
    },
    {
      id: 3,
      title: 'Booked Appointment',
      shortTitle: 'Booking',
      actor: 'Calendar Scheduling',
      tagline: 'Scheduled directly onto your sales team’s calendar',
      description: 'Qualified prospects select a confirmed consultation slot with automated multi-channel confirmations and reminders.',
      deliverables: ['Direct calendar sync', 'Consent-based SMS reminders', 'Email confirmation pack'],
      icon: Clock,
      status: 'Scheduled'
    },
    {
      id: 4,
      title: 'Shown Appointment',
      shortTitle: 'Shown Call',
      actor: 'Sales Conversation',
      tagline: 'The prospect attends the scheduled consultation',
      description: 'Prospect attends the meeting with your sales estimator. Only qualifying appointments that actually show up trigger the PPSA agency fee.',
      deliverables: ['Verified attendance', 'PPSA fee triggered', 'Credit policy for no-shows'],
      icon: CalendarCheck,
      status: 'PPSA Billing Event'
    }
  ];

  return (
    <section className="py-16 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            PPSA Delivery Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
            The 5-Stage Shown Appointment Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            How contractor opportunities progress from local Meta ads to attended sales estimates.
          </p>
        </div>

        {/* Dashboard-style Card */}
        <div className="rounded-xl border border-[#263247] bg-[#111827]/90 shadow-2xl p-5 sm:p-6 backdrop-blur-sm">
          
          {/* Header with Mandatory Illustrative Notice */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#263247] gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                Interactive Stage Explorer
              </span>
            </div>
            {/* Mandatory Disclaimer Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] text-slate-400 bg-slate-800/80 border border-slate-700/60">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Illustrative workflow — not live performance data</span>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="pt-5 pb-3">
            <div className="grid grid-cols-5 gap-1.5 mb-5 bg-[#0B1020] p-1.5 rounded-lg border border-[#263247]">
              {pipelineStages.map((stage, idx) => {
                const isCurrent = activeStage === idx;
                const isShownEvent = idx === 4;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className={`py-2 px-1 rounded text-center transition-all cursor-pointer ${
                      isCurrent 
                        ? isShownEvent 
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'bg-slate-800 text-cyan-300 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="text-[10px] tracking-tight uppercase block truncate">
                      {stage.shortTitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Card */}
            {(() => {
              const current = pipelineStages[activeStage];
              const IconComponent = current.icon;
              const isPpsaBilling = activeStage === 4;

              return (
                <div className={`p-4 sm:p-5 rounded-lg border transition-all ${
                  isPpsaBilling 
                    ? 'bg-blue-950/30 border-blue-600/40' 
                    : 'bg-[#0B1020]/80 border-[#263247]'
                }`}>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-md ${
                        isPpsaBilling ? 'bg-blue-600/20 text-cyan-300' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          {current.title}
                          {isPpsaBilling && (
                            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                              Billing Trigger
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400">
                          Function: {current.actor}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400">
                      Step 0{activeStage + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {current.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Verification Checkpoints:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {current.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Bottom Safeguard Note */}
            <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero agency fee if an appointment fails to attend or falls outside agreed qualification rules.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
