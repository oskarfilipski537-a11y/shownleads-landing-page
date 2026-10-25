import React, { useState } from 'react';
import { 
  Send, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Eye, 
  FileCode2, 
  Sparkles,
  PhoneCall,
  Calendar,
  Building2,
  Lock,
  RotateCcw
} from 'lucide-react';
import { EnquiryFormData, ConsentRecord, ViewMode } from '../types';

interface EnquiryFormSectionProps {
  onNavigatePolicy: (view: ViewMode) => void;
  onOpenAuditRecord?: (record: ConsentRecord) => void;
}

const EXACT_TRANSACTIONAL_SMS_CONSENT_TEXT = 
  "By checking this box, I agree to receive SMS messages from ShownLeads about my enquiry, strategy-call confirmations, and appointment reminders. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of purchase.";

const EXACT_MARKETING_SMS_CONSENT_TEXT = 
  "Optional: By checking this box, I also agree to receive occasional updates, contracting case study breakdowns, and industry insights from ShownLeads via SMS. Message frequency varies. Reply STOP to opt out.";

export const EnquiryFormSection: React.FC<EnquiryFormSectionProps> = ({ 
  onNavigatePolicy,
  onOpenAuditRecord 
}) => {
  const initialFormData: EnquiryFormData = {
    firstName: '',
    lastName: '',
    businessName: '',
    businessEmail: '',
    phone: '',
    website: '',
    contractorNiche: 'Roofing Contractor',
    serviceArea: '',
    revenueRange: '$500k - $1M / year',
    biggestChallenge: '',
    priorityGoal: '',
    preferredCallTime: 'Morning (9am - 12pm EST)',
    transactionalSmsConsent: false, // MANDATORY: UNCHECKED BY DEFAULT
    marketingSmsConsent: false     // MANDATORY: UNCHECKED BY DEFAULT
  };

  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ConsentRecord | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Contracting business name is required';
    }
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid business email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Please provide a valid 10-digit US phone number';
      }
    }
    if (!formData.contractorNiche.trim()) {
      newErrors.contractorNiche = 'Please select your contracting niche';
    }
    if (!formData.serviceArea.trim()) {
      newErrors.serviceArea = 'Primary metro or service area is required';
    }
    if (!formData.revenueRange) {
      newErrors.revenueRange = 'Please select a revenue or project-value tier';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate safe local demo submission processing
    setTimeout(() => {
      const generatedRecord: ConsentRecord = {
        submissionId: `SL-DEMO-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
        timestampUtc: new Date().toISOString(),
        contactDetails: {
          fullName: `${formData.firstName} ${formData.lastName}`,
          businessName: formData.businessName,
          email: formData.businessEmail,
          phone: formData.phone,
          niche: formData.contractorNiche,
          serviceArea: formData.serviceArea,
          revenueRange: formData.revenueRange,
          website: formData.website || undefined,
        },
        consentDecisions: {
          transactionalSmsConsent: formData.transactionalSmsConsent,
          exactTransactionalTextShown: EXACT_TRANSACTIONAL_SMS_CONSENT_TEXT,
          marketingSmsConsent: formData.marketingSmsConsent,
          exactMarketingTextShown: EXACT_MARKETING_SMS_CONSENT_TEXT,
          consentVersion: '1.0-2026-US-10DLC'
        },
        technicalMetadata: {
          sourceUrl: window.location.href,
          sourcePage: 'ShownLeads PPSA Landing Page',
          submissionSource: 'Primary Enquiry Form',
          userAgent: navigator.userAgent,
          isDemoSubmission: true,
          messagesSent: false,
          realAppointmentBooked: false
        }
      };

      setSubmissionResult(generatedRecord);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <section id="enquiry-form" className="py-20 bg-[#0B1020] border-t border-[#263247]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Contractor Consultation Intake
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Let's See If PPSA Is a Fit for Your Business
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tell us a little about your contracting business so we can understand your service area, goals, and appointment requirements.
          </p>
        </div>

        {/* Demo Mode Notice Banner */}
        <div className="mb-8 p-3.5 rounded-lg bg-blue-950/30 border border-blue-500/30 text-xs text-slate-300 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Demonstration Environment:</strong> This interactive form models ShownLeads’ compliant lead capture, field validation, and affirmative SMS opt-in workflow. No live appointment will be created and no messages will be dispatched.
          </div>
        </div>

        {/* Form or Success State */}
        {submissionResult ? (
          /* Success State in Safe Demo Mode */
          <div className="rounded-xl border border-cyan-500/40 bg-[#111827] p-8 space-y-6 shadow-xl">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Demo Submission Complete
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto">
                Thank you, <strong className="text-white">{submissionResult.contactDetails.fullName}</strong>. 
                Your simulated inquiry for <strong className="text-white">{submissionResult.contactDetails.businessName}</strong> has been logged to the demo state.
              </p>
            </div>

            {/* Crucial Safe Disclaimers */}
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Demo Execution Safeguards:
              </div>
              <ul className="text-slate-300 space-y-1.5 pl-5 list-disc">
                <li><strong className="text-white">No real appointment has been booked.</strong></li>
                <li><strong className="text-white">No real SMS messages or automated texts have been sent.</strong></li>
                <li>This interface demonstrates the intended intake data model and separate consent verification.</li>
              </ul>
            </div>

            {/* Submitted Preferences Summary */}
            <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] space-y-3">
              <div className="text-xs font-semibold text-white uppercase tracking-wider flex items-center justify-between">
                <span>Recorded Communication Preferences</span>
                <span className="font-mono text-[11px] text-slate-400">ID: {submissionResult.submissionId}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400">Email Contact:</div>
                  <div className="text-white font-medium">{submissionResult.contactDetails.email}</div>
                  <div className="text-[11px] text-cyan-400 mt-1">✓ Primary Enquiry Channel</div>
                </div>

                <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400">Transactional SMS Consent:</div>
                  <div className="text-white font-medium">
                    {submissionResult.consentDecisions.transactionalSmsConsent ? (
                      <span className="text-cyan-400 font-semibold">Consented (Affirmative Opt-In)</span>
                    ) : (
                      <span className="text-slate-400">Declined / Not Selected</span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {submissionResult.consentDecisions.transactionalSmsConsent 
                      ? 'Would receive appointment confirmations & reminders'
                      : 'No SMS would be sent under production terms'}
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Trail Inspector Trigger */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenAuditRecord && onOpenAuditRecord(submissionResult)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <FileCode2 className="w-4 h-4 text-cyan-400" />
                View Production Compliance Audit Record
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Test Another Submission
              </button>
            </div>

          </div>
        ) : (
          /* Intake Form */
          <form 
            onSubmit={handleSubmit}
            noValidate
            className="rounded-xl border border-[#263247] bg-[#111827] p-6 sm:p-8 space-y-6 shadow-xl"
          >
            {/* Required Fields Section */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-[#263247] pb-2">
                Primary Business Information (Required)
              </div>

              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-slate-200 mb-1.5">
                    First Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. John"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border ${
                      errors.firstName ? 'border-rose-500' : 'border-[#263247]'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-rose-400">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Last Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Miller"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border ${
                      errors.lastName ? 'border-rose-500' : 'border-[#263247]'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-rose-400">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-xs font-medium text-slate-200 mb-1.5">
                  Contracting Business Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Miller Elite Roofing LLC"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border ${
                    errors.businessName ? 'border-rose-500' : 'border-[#263247]'
                  } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-rose-400">{errors.businessName}</p>
                )}
              </div>

              {/* Business Email & Mobile Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="businessEmail" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Business Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="businessEmail"
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="john@millerroofing.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border ${
                      errors.businessEmail ? 'border-rose-500' : 'border-[#263247]'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.businessEmail && (
                    <p className="mt-1 text-xs text-rose-400">{errors.businessEmail}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Mobile Phone Number <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border ${
                      errors.phone ? 'border-rose-500' : 'border-[#263247]'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>
                  ) : (
                    <p className="mt-1 text-[11px] text-slate-400">Used for strategy call coordination.</p>
                  )}
                </div>
              </div>

              {/* Contractor Niche & Main Service Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contractorNiche" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Contractor Niche <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="contractorNiche"
                    value={formData.contractorNiche}
                    onChange={(e) => setFormData({ ...formData, contractorNiche: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border border-[#263247] text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Roofing Contractor">Roofing Contractor</option>
                    <option value="Custom Cabinets & Kitchens">Custom Cabinets & Kitchens</option>
                    <option value="Countertop Installer">Countertop Installer / Fabricator</option>
                    <option value="Pergola & Outdoor Living">Pergola & Outdoor Living Builder</option>
                    <option value="Bathroom Remodeler">Bathroom Remodeler</option>
                    <option value="Windows & Doors">High-End Windows & Doors</option>
                    <option value="Other High-Ticket Home Services">Other High-Ticket Home Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceArea" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Main Service Area / City, State <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="serviceArea"
                    type="text"
                    required
                    value={formData.serviceArea}
                    onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                    placeholder="e.g. Dallas-Fort Worth Metro, TX"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border ${
                      errors.serviceArea ? 'border-rose-500' : 'border-[#263247]'
                    } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                  />
                  {errors.serviceArea && (
                    <p className="mt-1 text-xs text-rose-400">{errors.serviceArea}</p>
                  )}
                </div>
              </div>

              {/* Monthly Revenue / Project-Value Range */}
              <div>
                <label htmlFor="revenueRange" className="block text-xs font-medium text-slate-200 mb-1.5">
                  Approx. Monthly Revenue or Project-Value Range <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="revenueRange"
                  value={formData.revenueRange}
                  onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border border-[#263247] text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Under $30k / month">Under $30k / month (Exploring viability)</option>
                  <option value="$30k - $75k / month">$30k - $75k / month</option>
                  <option value="$75k - $150k / month">$75k - $150k / month</option>
                  <option value="$150k - $300k / month">$150k - $300k / month</option>
                  <option value="$300k+ / month">$300k+ / month (Multi-crew operations)</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

            </div>

            {/* Optional Context Information Section */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-[#263247] pb-2 flex items-center justify-between">
                <span>Optional Details</span>
                <span className="text-[11px] text-slate-400 font-normal">Helps us prepare for your consultation</span>
              </div>

              {/* Website URL */}
              <div>
                <label htmlFor="website" className="block text-xs font-medium text-slate-200 mb-1.5">
                  Business Website (if available)
                </label>
                <input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://www.yourcompany.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border border-[#263247] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Biggest Lead Gen Challenge & Preferred Call Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="biggestChallenge" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Biggest Lead-Gen Challenge
                  </label>
                  <input
                    id="biggestChallenge"
                    type="text"
                    value={formData.biggestChallenge}
                    onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                    placeholder="e.g. Too many unqualified tire-kickers"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border border-[#263247] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="preferredCallTime" className="block text-xs font-medium text-slate-200 mb-1.5">
                    Preferred Strategy Call Time
                  </label>
                  <select
                    id="preferredCallTime"
                    value={formData.preferredCallTime}
                    onChange={(e) => setFormData({ ...formData, preferredCallTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1020] border border-[#263247] text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Morning (9am - 12pm EST)">Morning (9am - 12pm EST)</option>
                    <option value="Afternoon (12pm - 3pm EST)">Afternoon (12pm - 3pm EST)</option>
                    <option value="Late Afternoon (3pm - 6pm EST)">Late Afternoon (3pm - 6pm EST)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CRITICAL SECTION 11: SMS CONSENT BLOCK */}
            <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Communication Preferences & SMS Consent
                </div>
                <span className="text-[11px] text-slate-400">Optional · Unchecked by Default</span>
              </div>

              {/* Primary Transactional SMS Consent Checkbox - UNCHECKED BY DEFAULT */}
              <div className="flex items-start gap-3">
                <input
                  id="transactionalSmsConsent"
                  name="transactionalSmsConsent"
                  type="checkbox"
                  checked={formData.transactionalSmsConsent}
                  onChange={(e) => setFormData({ ...formData, transactionalSmsConsent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                />
                <label 
                  htmlFor="transactionalSmsConsent" 
                  className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none"
                >
                  By checking this box, I agree to receive SMS messages from ShownLeads about my enquiry, 
                  strategy-call confirmations, and appointment reminders. Message frequency varies. 
                  Message and data rates may apply. Reply STOP to opt out or HELP for assistance. 
                  Consent is not a condition of purchase.
                </label>
              </div>

              {/* Separate Secondary Promotional Checkbox - UNCHECKED BY DEFAULT */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/80">
                <input
                  id="marketingSmsConsent"
                  name="marketingSmsConsent"
                  type="checkbox"
                  checked={formData.marketingSmsConsent}
                  onChange={(e) => setFormData({ ...formData, marketingSmsConsent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                />
                <label 
                  htmlFor="marketingSmsConsent" 
                  className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none"
                >
                  (Optional) Also notify me about contractor growth insights and PPSA case studies via SMS. 
                  Reply STOP at any time to unsubscribe.
                </label>
              </div>

              {/* Adjacent Legal Links */}
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/60 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>By submitting this enquiry, you acknowledge our</span>
                <button
                  type="button"
                  onClick={() => onNavigatePolicy('privacy')}
                  className="text-cyan-400 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span>and</span>
                <button
                  type="button"
                  onClick={() => onNavigatePolicy('terms')}
                  className="text-cyan-400 hover:underline cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <span>. Consent is voluntary.</span>
              </div>
            </div>

            {/* Submission Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-blue-600/25"
              >
                {isSubmitting ? (
                  <>Processing Demo Intake...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Contractor Strategy Enquiry
                  </>
                )}
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              Demo Form Mode · We never sell or share contact details · No payment required
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
