import React from 'react';
import { 
  Home, 
  Layers, 
  Sparkles, 
  SunMedium, 
  Wrench, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export const WhoWeHelpSection: React.FC = () => {
  const niches = [
    {
      title: 'Roofing Contractors',
      tagline: 'Residential roof replacements, storm restoration, and premium standing-seam metal roofing.',
      typicalProjects: ['Full roof replacements', 'Insurance restoration', 'Premium tile / metal systems'],
      icon: Home
    },
    {
      title: 'Custom Cabinets & Kitchen Remodelers',
      tagline: 'Comprehensive kitchen transformations, bespoke cabinetry, and structural layout reconfigurations.',
      typicalProjects: ['Full kitchen renovations', 'Custom cabinetry installations', 'High-end design-build packages'],
      icon: Layers
    },
    {
      title: 'Countertop Fabricators & Installers',
      tagline: 'Precision quartz, granite, marble, and porcelain surface fabrication for residential properties.',
      typicalProjects: ['Whole-home countertop packages', 'Kitchen island upgrades', 'Custom stone fabrication'],
      icon: Sparkles
    },
    {
      title: 'Pergola & Outdoor Living Builders',
      tagline: 'Louvered pergola systems, covered patios, outdoor kitchens, and four-season outdoor spaces.',
      typicalProjects: ['Automated louvered pergolas', 'Hardscape & outdoor kitchen builds', 'Screened patio enclosures'],
      icon: SunMedium
    },
    {
      title: 'High-Ticket Home Services',
      tagline: 'Selective home improvement contractors with substantial average job values and dedicated sales teams.',
      typicalProjects: ['Bathroom master suite renovations', 'Whole-home window replacements', 'Basement finishing'],
      icon: Wrench
    }
  ];

  return (
    <section id="who-we-help" className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Target Contractor Niches
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Specialized for High-Ticket Home-Service Contractors
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The PPSA commercial model thrives in contracting categories where individual project values support dedicated advertising and rigorous appointment qualification.
          </p>
        </div>

        {/* Niche Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, idx) => {
            const Icon = niche.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#263247] bg-[#111827] p-6 hover:border-slate-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {niche.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {niche.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Typical Project Scope:
                  </div>
                  {niche.typicalProjects.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Qualification Criteria Checklist Card */}
          <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-blue-950/30 via-[#111827] to-[#0B1020] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Partner Suitability Factors
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                What Determines PPSA Fit?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Suitability depends on service area, project economics, sales capacity, demand, and campaign viability.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Defined territory with at least 150k+ population</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Average project transaction value of $5,000+</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dedicated sales estimator with fast response capability</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Non-Endorsement Notice */}
        <div className="mt-8 text-center text-xs text-slate-400">
          * Note: Industry categories listed above represent target application niches. ShownLeads does not publish client logos or imply existing client relationships without explicit written consent.
        </div>

      </div>
    </section>
  );
};
