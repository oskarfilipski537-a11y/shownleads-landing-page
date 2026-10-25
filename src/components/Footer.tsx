import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, view: ViewMode, sectionId?: string) => {
    e.preventDefault();
    onNavigate(view, sectionId);
  };

  return (
    <footer className="bg-[#080C17] border-t border-[#263247] text-slate-400 text-xs">
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & PPSA Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
              </div>
              <span className="font-bold tracking-tight text-lg text-white">
                Shown<span className="text-cyan-400">Leads</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Performance-based appointment generation for US home-service contractors. 
              Under our Pay Per Shown Appointment (PPSA) model, fees are tied to qualifying 
              appointments that actually attend, according to agreed terms.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Affirmative 10DLC & TCPA compliant opt-in workflow</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleLink(e, 'landing', 'how-it-works')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  How PPSA Works
                </a>
              </li>
              <li>
                <a 
                  href="#model" 
                  onClick={(e) => handleLink(e, 'landing', 'model')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Delivery Model
                </a>
              </li>
              <li>
                <a 
                  href="#who-we-help" 
                  onClick={(e) => handleLink(e, 'landing', 'who-we-help')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Who We Help
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleLink(e, 'landing', 'pricing')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Commercial Terms
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  onClick={(e) => handleLink(e, 'landing', 'faqs')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Compliance & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Governance & Policies
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={(e) => handleLink(e, 'privacy')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleLink(e, 'terms')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <span className="text-slate-400 block pt-1">
                  SMS Opt-Out: Reply STOP
                </span>
              </li>
              <li>
                <span className="text-slate-400 block">
                  SMS Help: Reply HELP
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Placeholder */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Business
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div>ShownLeads Agency Operations</div>
              <div className="text-slate-400 font-mono text-[11px]">
                Inquiries: [contact@shownleads.com]
              </div>
              <div className="text-slate-400 font-mono text-[11px]">
                Support: [support@shownleads.com]
              </div>
              <div className="text-slate-400 text-[11px] pt-1">
                Serving Qualified Home-Service Contractors Nationwide (US)
              </div>
            </div>
          </div>

        </div>

        {/* Demonstration Disclaimer Callout */}
        <div className="mt-10 pt-6 border-t border-[#263247]/70">
          <div className="p-4 rounded-lg bg-[#0B1020] border border-blue-500/20 text-xs text-slate-400 flex items-start gap-3">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-slate-200">Demonstration Notice:</strong> This website is currently operated as an interactive demonstration of the ShownLeads Pay Per Shown Appointment (PPSA) lead capture workflow and SMS consent mechanism. Form submissions demonstrate technical validation and compliance schemas without dispatching real SMS messages or creating binding contracts. Real commercial partnerships require execution of a separate written Master Services Agreement.
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 pt-6 border-t border-[#263247]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} ShownLeads. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleLink(e, 'privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={(e) => handleLink(e, 'terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
