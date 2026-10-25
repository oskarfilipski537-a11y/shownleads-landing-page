import React from 'react';
import { ArrowLeft, Scale, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { ViewMode } from '../types';

interface TermsAndConditionsProps {
  onBack: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#0B1020] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mb-8 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to ShownLeads Overview
        </button>

        {/* Header Block */}
        <div className="space-y-4 border-b border-[#263247] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <Scale className="w-4 h-4" />
            Commercial Agreement Framework
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Terms & Conditions
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
            <span>Last Updated: October 2026</span>
            <span>·</span>
            <span>Standard Commercial Terms</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          {/* Section 1: Purpose & Demonstration Status */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-blue-500/30">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">1.</span> Purpose and Demonstration Status
            </h2>
            <p>
              This website is operated by ShownLeads to illustrate our performance-based marketing methodology, 
              specifically the <strong>Pay Per Shown Appointment (PPSA)</strong> commercial structure.
            </p>
            <p>
              These Terms and Conditions govern your access to and review of this website. Use of this website does not 
              constitute a binding contract to provide advertising services or appointment generation. A binding relationship 
              is established only upon bilateral execution of a formalized, written Master Services Agreement (MSA).
            </p>
          </section>

          {/* Section 2: Enquiry Submissions */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">2.</span> Enquiry Submissions
            </h2>
            <p>
              By submitting an enquiry form on this website, you represent that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are an authorized principal, officer, or representative of the contracting business named in the submission.</li>
              <li>The information provided is truthful, current, and representative of your commercial capacity.</li>
              <li>You are requesting exploratory discussions regarding whether your territory and business model qualify for PPSA marketing.</li>
            </ul>
            <p className="text-slate-400 text-xs">
              Submission of an inquiry does not guarantee that ShownLeads will offer services or accept your business as an active partner.
            </p>
          </section>

          {/* Section 3: No Guarantee of Business Results */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-[#263247]">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">3.</span> Explicit Disclaimer: No Guarantees of Revenue or Closed Jobs
            </h2>
            <p>
              ShownLeads explicitly disclaims any representation or guarantee that our marketing services will generate 
              specific revenue amounts, gross profit, return on investment (ROI), or closed client contracts.
            </p>
            <p>
              The outcome of a sales consultation depends entirely on factors within the contractor’s sole control, including estimator sales acumen, bidding competitiveness, craftsmanship reputation, licensing, material availability, and customer financing terms.
            </p>
          </section>

          {/* Section 4: Pay Per Shown Appointment (PPSA) Model */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">4.</span> PPSA Commercial Structure
            </h2>
            <p>
              Under a PPSA agreement:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Trigger Event:</strong> ShownLeads performance fees are billed strictly upon the verified occurrence of a qualifying shown appointment, as defined in the applicable schedule of work.
              </li>
              <li>
                <strong>No-Show Protection:</strong> If a scheduled homeowner cancels in advance, fails to appear, or is unreachable at the agreed appointment window, no PPSA performance fee is incurred by the contractor.
              </li>
              <li>
                <strong>Primacy of the Written Agreement:</strong> Precise definitions of attendee presence, physical vs. remote consultations, verification logs, and credit claim timelines are set forth exclusively in the written contract.
              </li>
            </ul>
          </section>

          {/* Section 5: Advertising Spend & Platform Policies */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">5.</span> Advertising Media Spend
            </h2>
            <p>
              All advertising expenditures on Meta (Facebook and Instagram) or other ad networks are billed directly to the contractor’s payment method on file with the respective ad network. The contractor maintains full ownership and audit visibility of their advertising account. Advertising spend is independent of agency service fees and is non-refundable by ad networks once deployed.
            </p>
          </section>

          {/* Section 6: SMS Programme Terms & Disclosures (CTIA / 10DLC) */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-[#263247]">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">6.</span> SMS Messaging Programme Terms
            </h2>
            <p>
              Where you affirmatively opt into SMS messages on our website:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Programme Description:</strong> ShownLeads sends transactional notifications related to your direct enquiry, strategy call confirmations, calendar updates, and appointment reminders.
              </li>
              <li>
                <strong>Message Frequency:</strong> Message frequency varies depending on consultation activity and scheduling needs.
              </li>
              <li>
                <strong>Rates:</strong> Message and data rates may apply depending on your wireless carrier plan.
              </li>
              <li>
                <strong>Opt-Out (STOP):</strong> You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any text received. A confirmation message confirming removal will be sent.
              </li>
              <li>
                <strong>Customer Assistance (HELP):</strong> Reply <strong>HELP</strong> for operational assistance or contact our support team.
              </li>
              <li>
                <strong>Carriers:</strong> Wireless carriers are not liable for delayed or undelivered messages.
              </li>
              <li>
                <strong>Condition of Purchase:</strong> Consent to receive SMS messages is never a condition of purchase or agreement.
              </li>
            </ul>
          </section>

          {/* Section 7: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">7.</span> Proprietary Assets & Intellectual Property
            </h2>
            <p>
              All content, visual pipeline designs, website code, trademarks, and documentation on this website are the property of ShownLeads and are protected by applicable intellectual property laws. You may not copy, reverse engineer, or scrape content without prior written authorization.
            </p>
          </section>

          {/* Section 8: Legal Entity & Contact */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-[#263247]">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">8.</span> Inquiries and Notices
            </h2>
            <div className="p-3 rounded bg-[#0B1020] border border-[#263247] font-mono text-xs text-slate-300 space-y-1">
              <div>Entity: ShownLeads Operations</div>
              <div>Notice Email: [legal@shownleads.com — Insert confirmed business email upon launch]</div>
              <div>Jurisdiction: United States</div>
            </div>
          </section>

        </div>

        {/* Bottom Back Action */}
        <div className="mt-12 pt-8 border-t border-[#263247] flex justify-between items-center">
          <button
            onClick={onBack}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"
          >
            Return to Homepage
          </button>
          <span className="text-xs text-slate-400">
            ShownLeads · Commercial Demonstration
          </span>
        </div>

      </div>
    </div>
  );
};
