import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Model',
      question: 'What does Pay Per Shown Appointment mean?',
      answer: 'Pay Per Shown Appointment (PPSA) is a commercial arrangement where the agency fee is tied specifically to qualifying sales appointments that actually attend their scheduled consultation with your team. Unlike traditional retainers where you pay regardless of whether anyone shows up, our performance fee applies to attended, verified prospect meetings that meet predefined qualification criteria.'
    },
    {
      id: 'faq-2',
      category: 'Delivery',
      question: 'How does ShownLeads generate appointments?',
      answer: 'We deploy localized Meta advertising campaigns (Facebook and Instagram) tailored to your specific service radius. Prospective homeowners submit project inquiries through dedicated capture funnels. Inquiries are then filtered against agreed qualification standards (homeownership, project scope, budget threshold) and scheduled onto your calendar with multi-channel confirmations and reminders where consent is obtained.'
    },
    {
      id: 'faq-3',
      category: 'Model',
      question: 'What counts as a qualifying shown appointment?',
      answer: 'A qualifying shown appointment is formally defined in our written service agreement before campaigns launch. Standard qualification factors typically require that the prospect is the confirmed homeowner, resides within your designated service territory, has an active project matching minimum budget scope, and that a key decision maker attends the in-person or virtual consultation. If a prospect fails to attend or does not meet agreed criteria, no PPSA agency fee is owed.'
    },
    {
      id: 'faq-4',
      category: 'Commercials',
      question: 'Who pays for advertising?',
      answer: 'Advertising spend is paid directly by the contracting business to the advertising platform (Meta) using the contractor’s own billing profile. This ensures 100% financial transparency: you always know the exact cost per impression, click, and inquiry without hidden agency media markups.'
    },
    {
      id: 'faq-5',
      category: 'Commercials',
      question: 'Are results guaranteed?',
      answer: 'No. ShownLeads does not guarantee revenue, specific sales closing rates, appointment volume, or closed jobs. Performance depends on regional market demand, season, contractor reputation, and the effectiveness of your sales estimator in the home. What we guarantee is our commercial alignment: you do not pay the PPSA agency fee for appointments that fail to attend or fall outside written qualification standards.'
    },
    {
      id: 'faq-6',
      category: 'Commercials',
      question: 'Is there a setup fee?',
      answer: 'Initial campaign architecture, custom funnel development, CRM integrations, tracking pixels, and qualification rule setup may involve an initial onboarding fee depending on market scope and contractor tech readiness. Any setup fees and ongoing PPSA terms are confirmed in writing prior to signing a service agreement.'
    },
    {
      id: 'faq-7',
      category: 'Consent',
      question: 'Can I submit an enquiry without agreeing to SMS messages?',
      answer: 'Yes, absolutely. SMS consent is completely optional and unchecked by default on all ShownLeads forms. You are welcome to submit an enquiry using your business email address and phone number for manual email coordination without opting into automated text messages. Providing a phone number does not constitute SMS consent.'
    },
    {
      id: 'faq-8',
      category: 'Consent',
      question: 'What messages would I receive if I opted in?',
      answer: 'If you choose to opt into transactional SMS, messages are strictly limited to your direct enquiry: strategy call booking confirmations, appointment reminders, and critical scheduling updates. If you separately opt into our optional promotional updates, you may also receive occasional industry insights and case study breakdowns. Message frequency varies and message & data rates may apply.'
    },
    {
      id: 'faq-9',
      category: 'Consent',
      question: 'How do I opt out of SMS?',
      answer: 'You can opt out at any time by replying STOP to any text message received from ShownLeads. Upon replying STOP, an immediate confirmation of your opt-out will be returned, and no further SMS messages will be transmitted to your number. You can also reply HELP for assistance or contact our support team.'
    },
    {
      id: 'faq-10',
      category: 'Model',
      question: 'Is this a live ShownLeads booking system?',
      answer: 'This initial website functions as a public demonstration and interactive presentation of ShownLeads’ PPSA commercial model, qualification architecture, and compliant SMS opt-in workflow. Inquiries submitted on this page are handled in demonstration mode to showcase intake validation without executing live contracts or sending automated messages.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Clear Answers on PPSA, Delivery, and Compliance
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Everything you need to know about our Pay Per Shown Appointment model and operating standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all ${
                  isOpen 
                    ? 'border-blue-500/50 bg-[#111827] shadow-lg' 
                    : 'border-[#263247] bg-[#111827]/70 hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="font-mono text-xs text-cyan-400 font-semibold shrink-0 mt-0.5 sm:mt-0">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Have an additional question about your territory or trade niche?{' '}
          <a href="#enquiry-form" className="text-cyan-400 font-medium hover:underline">
            Submit an enquiry above
          </a>{' '}
          to schedule a personalized strategy discussion.
        </div>

      </div>
    </section>
  );
};
