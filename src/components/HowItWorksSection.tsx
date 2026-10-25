import React from 'react';
import { Megaphone, Filter, CalendarCheck2, ShieldCheck, Check } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Generate Enquiries',
      description: "Meta advertising is used to attract relevant prospects in the contractor's service area.",
      details: [
        'Geo-fenced campaign delivery tailored to specific zip codes or mile radius',
        'Direct-response creative focusing on specific high-ticket project types',
        'Direct billing: Advertising spend is paid by the contractor directly to Meta'
      ],
      icon: Megaphone,
      accent: 'border-blue-500/30 text-blue-400'
    },
    {
      stepNumber: '02',
      title: 'Capture and Qualify',
      description: 'Enquiries are collected and assessed against the qualification criteria agreed with the contractor.',
      details: [
        'Homeownership verification (renters automatically filtered out)',
        'Project scope assessment (minimum project budget requirements)',
        'Timeline validation (identifying active decision makers ready to meet)'
      ],
      icon: Filter,
      accent: 'border-cyan-500/30 text-cyan-400'
    },
    {
      stepNumber: '03',
      title: 'Book the Appointment',
      description: 'Suitable prospects are guided through the appointment-booking process, with confirmations and appropriate reminders where consent has been obtained.',
      details: [
        'Direct calendar synchronization with your estimator or sales reps',
        'Automated calendar invites with full homeowner address and notes',
        'Multi-touch confirmations with optional, compliant SMS reminders'
      ],
      icon: CalendarCheck2,
      accent: 'border-blue-500/30 text-blue-400'
    },
    {
      stepNumber: '04',
      title: 'Track Shown Appointments',
      description: 'Appointments are tracked against the agreed definition of a qualifying shown appointment. Billing follows the actual commercial agreement.',
      details: [
        'Verified attendance at scheduled in-home or virtual consultation',
        'Agreed credit terms for verifiable no-shows or disqualified meetings',
        'Performance-based invoice generated strictly for shown, qualifying meetings'
      ],
      icon: ShieldCheck,
      accent: 'border-cyan-500/30 text-cyan-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Our 4-Step Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            How Pay Per Shown Appointment (PPSA) Works
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A disciplined, multi-stage delivery process designed to eliminate wasted estimator trips and align agency incentives with real consultations.
          </p>
        </div>

        {/* Process Flow: Grid on Desktop, Timeline on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.stepNumber}
                className="relative rounded-xl border border-[#263247] bg-[#111827] p-6 flex flex-col justify-between hover:border-slate-600 transition-all"
              >
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-slate-600">
                      {step.stepNumber}
                    </span>
                    <div className={`p-2 rounded-lg bg-slate-900 border ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    “{step.description}”
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Execution Details:
                  </div>
                  {step.details.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Clarification Notice */}
        <div className="mt-12 p-4 rounded-lg bg-slate-900/80 border border-[#263247] text-xs text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          <strong className="text-slate-200">Commercial Transparency Note:</strong> Advertising spend is paid by the client directly to the advertising platform (Meta). Initial campaign setup, technical integration fees, target appointment volume, and precise qualification criteria are customized and set forth in your written service agreement.
        </div>

      </div>
    </section>
  );
};
