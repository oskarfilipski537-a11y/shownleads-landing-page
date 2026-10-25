import React from 'react';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { ViewMode } from '../types';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
            <Shield className="w-4 h-4" />
            Compliance & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
            <span>Effective Date: October 2026</span>
            <span>·</span>
            <span>Version: 1.0 (Demonstration & Intake Model)</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          {/* Section 1: Demonstration Status of This Website */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-blue-500/30">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">1.</span> Demonstration Status of This Website
            </h2>
            <p>
              This website serves as an interactive commercial presentation and technical demonstration of the 
              <strong>ShownLeads Pay Per Shown Appointment (PPSA)</strong> workflow and compliant lead intake model.
            </p>
            <p>
              In this current demonstration mode:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Form submissions on this demonstration website are processed entirely within the client application environment.</li>
              <li>No personal information is dispatched to third-party telemarketing services, automated dialers, or external commercial databases.</li>
              <li>No live strategy calls or appointments are booked on external contractor scheduling systems through this demonstration.</li>
            </ul>
          </section>

          {/* Section 2: What Information a Production Service Collects */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">2.</span> Information Collected in Production Operations
            </h2>
            <p>
              When operating under a live service agreement, ShownLeads collects business-to-business (B2B) information voluntarily submitted by contracting principals and their authorized representatives, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Identification:</strong> Full name, professional title, business name, and corporate website.</li>
              <li><strong>Direct Communication Details:</strong> Business email address and mobile telephone number.</li>
              <li><strong>Contractor Qualifications:</strong> Primary home-service trade niche, designated geographic service territories, approximate revenue tiers, and sales capacity.</li>
              <li><strong>Technical Metadata:</strong> IP address hash, submission timestamp in UTC, user-agent string, and source URL for compliance verification.</li>
            </ul>
          </section>

          {/* Section 3: Use of Business Enquiry Information */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">3.</span> How Business Enquiries Are Used
            </h2>
            <p>
              We use information collected through business enquiries exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluate whether a contracting business meets the geographic and project economics criteria for a PPSA partnership.</li>
              <li>Conduct scheduled strategy consultations and discuss marketing scope with authorized contractor personnel.</li>
              <li>Provide customized fee schedules and written service proposals based on confirmed territory boundaries.</li>
              <li>Maintain immutable compliance records proving affirmative consent under applicable consumer protection frameworks.</li>
            </ul>
          </section>

          {/* Section 4: SMS Consent & Messaging Standards (10DLC / CTIA Compliance) */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-[#263247]">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">4.</span> SMS Consent & Mobile Messaging Practices
            </h2>
            <p>
              ShownLeads adheres to strict principles regarding mobile communication and SMS consent:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Affirmative, Voluntary Opt-In:</strong> SMS consent is never presumed. Consent checkboxes are unchecked by default. You are never required to consent to SMS messaging as a condition of purchasing services or submitting an inquiry.
              </li>
              <li>
                <strong>No Mobile Information Sharing:</strong> Mobile telephone numbers and recorded SMS opt-in consent data are never sold, rented, leased, or shared with third-party organizations for their promotional or marketing purposes.
              </li>
              <li>
                <strong>Message Types & Frequency:</strong> Where transactional consent is given, messages are strictly limited to enquiry follow-ups, appointment confirmations, and scheduling reminders. Message frequency varies based on active meeting scheduling. Message and data rates may apply.
              </li>
              <li>
                <strong>Opt-Out Mechanism:</strong> You may revoke SMS consent at any time by replying <strong>STOP</strong> to any message received. Reply <strong>HELP</strong> for operational assistance.
              </li>
            </ul>
          </section>

          {/* Section 5: Third-Party Service Providers */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">5.</span> Sharing with Infrastructure Service Providers
            </h2>
            <p>
              In production operations, ShownLeads utilizes vetted technology providers to host systems and transmit communications (such as cloud hosting providers, transactional email relays, calendar APIs, and telecommunication carriers). These providers are contractually restricted from using your business data for any purpose other than providing specified infrastructure support.
            </p>
          </section>

          {/* Section 6: Data Retention & Security Practices */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">6.</span> Data Retention & Security Practices
            </h2>
            <p>
              We maintain reasonable technical and organizational safeguards designed to protect business information against unauthorized access, loss, or alteration. Audit logs recording affirmative consent decisions are retained for compliance audit verification during the active business relationship and as required by regulatory guidance.
            </p>
          </section>

          {/* Section 7: Cookies and Analytics */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">7.</span> Cookies & Analytics
            </h2>
            <p>
              This demonstration site uses standard functional browser storage and memory state to render dynamic demo outputs. No tracking cookies or behavioral advertising pixels are loaded by this demonstration page without your knowledge.
            </p>
          </section>

          {/* Section 8: Legal Entity & Contact Information */}
          <section className="space-y-3 p-5 rounded-xl bg-[#111827] border border-[#263247]">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">8.</span> Business Identification & Privacy Inquiries
            </h2>
            <p>
              For questions regarding this Privacy Policy, your recorded preferences, or data management practices, please contact our compliance desk:
            </p>
            <div className="p-3 rounded bg-[#0B1020] border border-[#263247] font-mono text-xs text-slate-300 space-y-1">
              <div>Entity: ShownLeads Operations</div>
              <div>Compliance Desk: [privacy@shownleads.com — Insert confirmed business email upon launch]</div>
              <div>Physical Address: [Insert confirmed registered office address upon corporate entity filing]</div>
              <div>Governing Jurisdiction: United States</div>
            </div>
          </section>

          {/* Section 9: Policy Updates */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="font-mono text-cyan-400">9.</span> Updates to This Policy
            </h2>
            <p>
              ShownLeads may revise this policy periodically to reflect changes in regulatory guidance or operational architecture. The revised policy will be posted on this page with an updated effective date.
            </p>
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
