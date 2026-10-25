import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Check, 
  HelpCircle, 
  FileText, 
  DollarSign, 
  Calculator, 
  ArrowRight,
  Sliders
} from 'lucide-react';

interface OfferTransparencyProps {
  onDiscussPricing: () => void;
}

export const OfferTransparencySection: React.FC<OfferTransparencyProps> = ({ onDiscussPricing }) => {
  // Configurable fields for contract negotiation
  const [setupFeeConfirmed, setSetupFeeConfirmed] = useState(false);
  const [ppsaFeeConfirmed, setPpsaFeeConfirmed] = useState(false);

  // Interactive Scenario Simulator state
  const [estimatedAppointments, setEstimatedAppointments] = useState<number>(10);
  const [averageProjectValue, setAverageProjectValue] = useState<number>(12000);
  const [closingRate, setClosingRate] = useState<number>(25);

  const estimatedCloses = Math.round((estimatedAppointments * (closingRate / 100)) * 10) / 10;
  const estimatedGrossRevenue = Math.round(estimatedCloses * averageProjectValue);

  return (
    <section id="pricing" className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Commercial Terms & Structure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            A Commercial Model Built Around Attended Appointments.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            “Under a Pay Per Shown Appointment arrangement, the agency fee is linked to qualifying appointments that actually show up, as defined in the agreement.”
          </p>
        </div>

        {/* 2-Column: Left Offer Matrix, Right Interactive Economics Scenario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurable Offer Card */}
          <div className="lg:col-span-7 rounded-xl border border-[#263247] bg-[#111827] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#263247] pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  PPSA Service Agreement Scope
                </h3>
                <p className="text-xs text-slate-400">
                  Standard terms outline before contract execution
                </p>
              </div>
              <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                PPSA Master Spec
              </span>
            </div>

            {/* Structured Specifications Matrix */}
            <div className="space-y-4">
              
              {/* Setup Fee */}
              <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Initial Campaign Setup & Tech Integration
                  </div>
                  <div className="text-xs text-slate-400">
                    Funnel development, CRM integration, tracking pixels & qualification rules
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-medium text-slate-300 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                    Customized per market scope
                  </span>
                </div>
              </div>

              {/* Fee Per Qualifying Shown Appointment */}
              <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Fee Per Qualifying Shown Appointment
                  </div>
                  <div className="text-xs text-slate-400">
                    Payable only when an appointment meets all agreed criteria and attends
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-medium text-cyan-300 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-500/30">
                    Tied to contractor niche
                  </span>
                </div>
              </div>

              {/* Advertising Spend */}
              <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white uppercase tracking-wider">Advertising Spend Management</span>
                  <span className="text-slate-300 font-mono">100% Direct to Meta</span>
                </div>
                <p className="text-xs text-slate-400">
                  Paid directly by the contractor to Meta through their own ad account. ShownLeads does not mark up media spend or conceal cost per click.
                </p>
              </div>

              {/* Qualification Criteria */}
              <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] space-y-2">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Agreed Qualification Criteria
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 pl-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Verified owner of the residential property.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Within agreed geographic radius / active service territory.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Project scope meets minimum agreed ticket threshold.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Decision maker present at consultation time.</span>
                  </li>
                </ul>
              </div>

              {/* No-Show, Cancellation & Credit Policy */}
              <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] space-y-1">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  No-Show, Cancellation & Credit Policy
                </div>
                <p className="text-xs text-slate-400">
                  If a prospect cancels or fails to attend a scheduled appointment, or if during the meeting they are discovered not to meet agreed criteria, zero PPSA agency fee is owed. Any disputed appointment is reviewed against recorded calendar and CRM timestamps.
                </p>
              </div>

            </div>

            {/* Written confirmation note */}
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Written Contract Requirement:</strong> Final pricing, setup fees, and qualifying appointment criteria are confirmed in writing before any campaign launch or ad spend begins.
              </div>
            </div>

            {/* Neutral CTA */}
            <div className="pt-2">
              <button
                onClick={onDiscussPricing}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all cursor-pointer shadow-md shadow-blue-600/20"
              >
                Discuss Your Business and Pricing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Scenario Explorer & Commercial Transparency Checklist */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Scenario Explorer */}
            <div className="rounded-xl border border-[#263247] bg-[#111827] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#263247] pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    PPSA Scenario Explorer
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Interactive Modeling</span>
              </div>

              <p className="text-xs text-slate-400">
                Adjust sliders to model how appointment volume and closing rate impact your contracting business.
              </p>

              {/* Slider 1: Target Shown Appointments */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Monthly Target Shown Appointments:</span>
                  <span className="font-mono font-bold text-cyan-300">{estimatedAppointments} appointments</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  step="1"
                  value={estimatedAppointments}
                  onChange={(e) => setEstimatedAppointments(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Slider 2: Average Project Value */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Average Contract Value:</span>
                  <span className="font-mono font-bold text-cyan-300">${averageProjectValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="40000"
                  step="1000"
                  value={averageProjectValue}
                  onChange={(e) => setAverageProjectValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Slider 3: In-House Close Rate */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Your Sales Closing Rate:</span>
                  <span className="font-mono font-bold text-cyan-300">{closingRate}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={closingRate}
                  onChange={(e) => setClosingRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Calculated Scenario Result Box */}
              <div className="p-4 rounded-lg bg-[#0B1020] border border-blue-500/30 space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Illustrative Scenario Estimate
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-300">Est. Closed Projects:</span>
                  <span className="font-mono font-bold text-white text-sm">~{estimatedCloses} jobs</span>
                </div>
                <div className="flex justify-between items-baseline border-t border-slate-800 pt-2">
                  <span className="text-xs text-slate-300">Potential Gross Pipeline:</span>
                  <span className="font-mono font-bold text-cyan-400 text-base">
                    ${estimatedGrossRevenue.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 pt-1 leading-tight">
                  * Illustrative planning calculator only. Actual sales closing rates depend entirely on contractor estimating, pricing, and sales execution.
                </p>
              </div>

            </div>

            {/* Truth in Advertising Transparency Box */}
            <div className="rounded-xl border border-[#263247] bg-[#111827] p-5 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
                What ShownLeads Does NOT Claim
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">✕</span>
                  <span>We do not claim “zero risk” or “free appointments”.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">✕</span>
                  <span>We do not promise guaranteed sales closing or guaranteed revenue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">✕</span>
                  <span>We do not disguise advertising costs inside marked-up lead fees.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
