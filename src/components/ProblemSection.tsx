import React from 'react';
import { FilterX, CalendarX2, HelpCircle, ArrowRightCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            The Industry Challenge
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Leads Are Only Valuable When They Turn Into Real Sales Conversations.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In home services, raw lead volume often creates operational noise instead of genuine sales opportunities. 
            Understanding the breakdown between an enquiry and an attended estimate is critical.
          </p>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 — Unqualified Leads */}
          <div className="rounded-xl border border-[#263247] bg-[#111827] p-7 transition-all hover:border-slate-600 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FilterX className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Unqualified Leads
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                An enquiry is not automatically a sales opportunity. Qualification criteria matter. 
                Homeownership, project scale, geographic fit, and realistic budget expectations must be vetted before taking up estimator time.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Key Focus: Strict pre-screening criteria
            </div>
          </div>

          {/* Card 2 — Missed Appointments */}
          <div className="rounded-xl border border-[#263247] bg-[#111827] p-7 transition-all hover:border-slate-600 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <CalendarX2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Missed Appointments
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Booked appointments can fall apart without a structured confirmation and reminder process. 
                Without consent-based SMS reminders, calendar confirmations, and proactive verification, no-show rates drain contractor resources.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Key Focus: Multi-touch confirmation protocols
            </div>
          </div>

          {/* Card 3 — Unclear Agency Economics */}
          <div className="rounded-xl border border-[#263247] bg-[#111827] p-7 transition-all hover:border-slate-600 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-slate-300">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Unclear Agency Economics
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Contractors should understand what they pay for, what counts as a qualifying appointment, and what happens when an appointment does not meet the agreed criteria.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-slate-400">
              Key Focus: Transparent, documented commercial terms
            </div>
          </div>

        </div>

        {/* Follow-up statement */}
        <div className="mt-12 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-[#111827] to-cyan-950/30 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-base sm:text-lg font-medium text-slate-200 text-balance">
            “ShownLeads is designed around the appointment outcome, with transparent terms and a clear delivery process.”
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Every qualifying shown appointment is verified against objective criteria set prior to campaign launch.
          </p>
        </div>

      </div>
    </section>
  );
};
