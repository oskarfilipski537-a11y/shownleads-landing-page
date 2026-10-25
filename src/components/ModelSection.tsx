import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  CalendarCheck, 
  Layers, 
  Target, 
  PhoneCall, 
  DollarSign, 
  Bell 
} from 'lucide-react';

export const ModelSection: React.FC = () => {
  return (
    <section id="model" className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Agency Comparison & Alignment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Why Contractors Choose Pay Per Shown Appointment
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Comparing conventional lead brokers and monthly retainer agencies against the performance-aligned PPSA model.
          </p>
        </div>

        {/* 3-Column Model Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Col 1: Traditional Retainer Agency */}
          <div className="rounded-xl border border-[#263247] bg-[#111827] p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                Conventional Model A
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Monthly Retainer Agencies
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Charge $3,000–$6,000 every 30 days regardless of how many appointments attend or whether leads convert.
              </p>

              <div className="space-y-3 text-xs border-t border-slate-800/80 pt-4">
                <div className="flex items-start gap-2 text-slate-300">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Fixed monthly fee paid even during slow months.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Agency focuses on "Clicks" and "Impressions".</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>No financial accountability for no-shows.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              Agency Risk: Zero · Contractor Risk: High
            </div>
          </div>

          {/* Col 2: Shared Lead Brokers */}
          <div className="rounded-xl border border-[#263247] bg-[#111827] p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                Conventional Model B
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Shared Lead Marketplaces
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Sell raw contact data to 4–6 local competitors simultaneously, sparking a race to the bottom on price.
              </p>

              <div className="space-y-3 text-xs border-t border-slate-800/80 pt-4">
                <div className="flex items-start gap-2 text-slate-300">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Leads shared with competing contractors.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Homeowners bombarded with unsolicited calls.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>You pay per lead form, even if fake phone numbers.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              Lead Quality: Diluted · Customer Experience: Poor
            </div>
          </div>

          {/* Col 3: ShownLeads PPSA */}
          <div className="rounded-xl border-2 border-blue-500 bg-gradient-to-b from-blue-950/40 via-[#111827] to-[#111827] p-6 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
              ShownLeads Structure
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 mb-2">
                Performance-Aligned
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Pay Per Shown Appointment (PPSA)
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-6">
                Exclusive Meta advertising generating dedicated appointments. Agency fee is owed only when the qualifying appointment actually shows up.
              </p>

              <div className="space-y-3 text-xs border-t border-blue-500/30 pt-4">
                <div className="flex items-start gap-2 text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>100% Exclusive:</strong> Campaigns run under your brand.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Pre-Screened:</strong> Homeownership & minimum budget verified.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Show-Up Tied:</strong> Zero agency fee for no-shows or invalid meetings.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-500/30 text-xs text-cyan-300 font-medium">
              Aligns Agency Effort Directly With Real Sales Opportunities
            </div>
          </div>

        </div>

        {/* Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-lg bg-[#111827] border border-[#263247] space-y-2">
            <Target className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-bold text-white">Direct Meta Targeting</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Targeted property owners in your chosen postal zip codes looking for full replacements or high-ticket installs.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#111827] border border-[#263247] space-y-2">
            <PhoneCall className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-bold text-white">Qualification Protocol</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Inquiries are filtered against your exact criteria so your sales team never drives to a rental or out-of-budget estimate.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#111827] border border-[#263247] space-y-2">
            <Bell className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-bold text-white">Reminder Automation</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Calendar synchronization with consent-based reminders dramatically reduces no-show rates on booked slots.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#111827] border border-[#263247] space-y-2">
            <CalendarCheck className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-bold text-white">Verified Attendance Billing</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clear billing milestones: agency performance invoices are submitted only for attended, qualifying consultations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
