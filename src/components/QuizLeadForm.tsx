import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  Lock, 
  RotateCcw, 
  FileCode2,
  Building2,
  Home,
  Layers,
  Sparkles,
  SunMedium,
  Wrench,
  TrendingUp,
  Award,
  FilterX,
  CalendarX2,
  DollarSign,
  Users
} from 'lucide-react';
import { ConsentRecord, ViewMode } from '../types';

interface QuizLeadFormProps {
  onNavigatePolicy: (view: ViewMode) => void;
  onOpenAuditRecord?: (record: ConsentRecord) => void;
}

const EXACT_TRANSACTIONAL_SMS_CONSENT_TEXT = 
  "By checking this box, I agree to receive SMS messages from ShownLeads about my enquiry, strategy-call confirmations, and appointment reminders. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of purchase.";

const EXACT_MARKETING_SMS_CONSENT_TEXT = 
  "Optional: By checking this box, I also agree to receive occasional updates, contracting case study breakdowns, and industry insights from ShownLeads via SMS. Message frequency varies. Reply STOP to opt out.";

export const QuizLeadForm: React.FC<QuizLeadFormProps> = ({
  onNavigatePolicy,
  onOpenAuditRecord
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 4;

  // Quiz Selections
  const [selectedTrade, setSelectedTrade] = useState<string>('Roofing Contractor');
  const [selectedRevenue, setSelectedRevenue] = useState<string>('$75k - $150k / month');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('Unqualified tire-kickers');

  // Final Step Contact Form Fields
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    businessEmail: '',
    phone: '',
    serviceArea: '',
    website: '',
    preferredCallTime: 'Morning (9am - 12pm EST)',
    transactionalSmsConsent: false, // MANDATORY: UNCHECKED BY DEFAULT
    marketingSmsConsent: false      // MANDATORY: UNCHECKED BY DEFAULT
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<ConsentRecord | null>(null);

  const tradeOptions = [
    { id: 'roofing', label: 'Roofing Contractor', icon: Home, desc: 'Replacements & storm repair' },
    { id: 'cabinets', label: 'Custom Cabinets & Kitchens', icon: Layers, desc: 'Kitchen transformations' },
    { id: 'countertops', label: 'Countertops & Stone', icon: Sparkles, desc: 'Quartz & granite installs' },
    { id: 'pergolas', label: 'Pergola & Outdoor Living', icon: SunMedium, desc: 'Louvered roofs & patios' },
    { id: 'bathrooms', label: 'Bathroom Remodeling', icon: Wrench, desc: 'Full master suite renovations' },
    { id: 'other', label: 'Other High-Ticket Trade', icon: Building2, desc: 'Windows, siding, HVAC' }
  ];

  const revenueOptions = [
    { id: 'under30', label: 'Under $30k / month', icon: TrendingUp, desc: 'Exploring PPSA viability' },
    { id: '30to75', label: '$30k – $75k / month', icon: Building2, desc: 'Growing installation team' },
    { id: '75to150', label: '$75k – $150k / month', icon: Award, desc: 'Established sales capacity' },
    { id: '150plus', label: '$150k+ / month', icon: DollarSign, desc: 'Multi-crew operations' }
  ];

  const challengeOptions = [
    { id: 'tire_kickers', label: 'Unqualified tire-kickers', icon: FilterX, desc: 'Renters & sub-minimum budgets' },
    { id: 'no_shows', label: 'No-shows on booked estimates', icon: CalendarX2, desc: 'Homeowners missing consultations' },
    { id: 'retainer_burn', label: 'Burning money on agency retainers', icon: DollarSign, desc: 'Paying $4k/mo for zero accountability' },
    { id: 'shared_leads', label: 'Fighting for shared leads', icon: Users, desc: 'Competing with 5 other contractors' }
  ];

  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateContactForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!contactData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!contactData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!contactData.businessName.trim()) newErrors.businessName = 'Contracting business name is required';
    if (!contactData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.businessEmail)) {
      newErrors.businessEmail = 'Enter a valid email address';
    }
    if (!contactData.phone.trim()) {
      newErrors.phone = 'Mobile phone number is required';
    } else {
      const cleanPhone = contactData.phone.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Enter a valid 10-digit US phone number';
      }
    }
    if (!contactData.serviceArea.trim()) {
      newErrors.serviceArea = 'Primary service area / city & state is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContactForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRecord: ConsentRecord = {
        submissionId: `SL-DEMO-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
        timestampUtc: new Date().toISOString(),
        contactDetails: {
          fullName: `${contactData.firstName} ${contactData.lastName}`,
          businessName: contactData.businessName,
          email: contactData.businessEmail,
          phone: contactData.phone,
          niche: selectedTrade,
          serviceArea: contactData.serviceArea,
          revenueRange: selectedRevenue,
          website: contactData.website || undefined,
        },
        consentDecisions: {
          transactionalSmsConsent: contactData.transactionalSmsConsent,
          exactTransactionalTextShown: EXACT_TRANSACTIONAL_SMS_CONSENT_TEXT,
          marketingSmsConsent: contactData.marketingSmsConsent,
          exactMarketingTextShown: EXACT_MARKETING_SMS_CONSENT_TEXT,
          consentVersion: '1.0-2026-US-10DLC'
        },
        technicalMetadata: {
          sourceUrl: window.location.href,
          sourcePage: 'Hero Quiz Qualification Form',
          submissionSource: 'PPSA Qualification Quiz',
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
    setCurrentStep(1);
    setSelectedTrade('Roofing Contractor');
    setSelectedRevenue('$75k - $150k / month');
    setSelectedChallenge('Unqualified tire-kickers');
    setContactData({
      firstName: '',
      lastName: '',
      businessName: '',
      businessEmail: '',
      phone: '',
      serviceArea: '',
      website: '',
      preferredCallTime: 'Morning (9am - 12pm EST)',
      transactionalSmsConsent: false,
      marketingSmsConsent: false
    });
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Quiz Container Card - Tailored to landing page Midnight Navy & Charcoal */}
      <div className="rounded-2xl border border-[#263247] bg-[#111827] text-slate-100 shadow-2xl p-6 sm:p-8 relative backdrop-blur-sm">
        
        {submissionResult ? (
          /* Safe Demo Submission Completed Screen */
          <div className="space-y-6 text-left py-2">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Demo Qualification Complete
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{submissionResult.contactDetails.fullName}</strong>. 
                Your simulated qualification for <strong className="text-white">{submissionResult.contactDetails.businessName}</strong> ({submissionResult.contactDetails.niche}) has been logged in demo mode.
              </p>
            </div>

            {/* Safe Demo Notice Banner */}
            <div className="p-4 rounded-xl bg-[#0B1020] border border-blue-500/30 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Demonstration Guardrails
              </div>
              <ul className="text-slate-300 space-y-1 pl-4 list-disc">
                <li><strong className="text-white">No real appointment has been booked</strong> on any live calendar.</li>
                <li><strong className="text-white">No automated SMS messages</strong> have been sent to {submissionResult.contactDetails.phone}.</li>
                <li>This interface demonstrates the contractor intake schema and separate SMS opt-in workflow.</li>
              </ul>
            </div>

            {/* Recorded Preferences */}
            <div className="p-4 rounded-xl bg-[#0B1020] border border-[#263247] space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
                <span>Recorded Preferences</span>
                <span className="font-mono text-[11px] text-slate-400">ID: {submissionResult.submissionId}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#111827] border border-[#263247]">
                  <span className="text-slate-400 block mb-0.5">Trade & Market:</span>
                  <span className="font-bold text-white">{submissionResult.contactDetails.niche}</span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">{submissionResult.contactDetails.serviceArea}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#111827] border border-[#263247]">
                  <span className="text-slate-400 block mb-0.5">Transactional SMS Consent:</span>
                  <span className={`font-bold ${submissionResult.consentDecisions.transactionalSmsConsent ? 'text-cyan-400' : 'text-slate-400'}`}>
                    {submissionResult.consentDecisions.transactionalSmsConsent ? 'Consented (Affirmative Opt-In)' : 'Unchecked / No SMS'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenAuditRecord && onOpenAuditRecord(submissionResult)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-700"
              >
                <FileCode2 className="w-4 h-4 text-cyan-400" />
                Inspect Compliance Audit Record
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors cursor-pointer shadow-md shadow-blue-500/20"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Quiz
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Quiz Card */
          <div>
            {/* Top Header of Card */}
            <div className="text-left mb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Check PPSA Territory Qualification
                </h3>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Takes about 60 seconds • Instant booking
              </p>
            </div>

            {/* Progress Bar (Tailored to Electric Blue & Cyan palette) */}
            <div className="w-full bg-[#0B1020] border border-[#263247] h-2.5 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* STEP 1: Contracting Trade */}
            {currentStep === 1 && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    What type of home-service trade do you offer?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    This helps us verify campaign demand and project economics in your market.
                  </p>
                </div>

                {/* 2x3 Grid of Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tradeOptions.map((opt) => {
                    const isSelected = selectedTrade === opt.label;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedTrade(opt.label)}
                        className={`p-3.5 rounded-xl border transition-all flex items-center gap-3 text-left cursor-pointer ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-950/40 shadow-sm ring-1 ring-blue-500/50' 
                            : 'border-[#263247] hover:border-slate-600 bg-[#0B1020]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-blue-600/20 text-cyan-400' : 'bg-slate-800 text-slate-300'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate">
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Continue Button in Electric Blue */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 text-base transition-all cursor-pointer"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Legal disclaimer below button */}
                <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
                  By continuing, you agree to explore ShownLeads PPSA appointment generation. Demo mode is active. See our{' '}
                  <button type="button" onClick={() => onNavigatePolicy('privacy')} className="text-cyan-400 hover:underline">
                    Privacy Policy
                  </button>{' '}
                  and{' '}
                  <button type="button" onClick={() => onNavigatePolicy('terms')} className="text-cyan-400 hover:underline">
                    Terms & Conditions
                  </button>.
                </p>
              </div>
            )}

            {/* STEP 2: Monthly Sales Revenue */}
            {currentStep === 2 && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    What is your approximate monthly sales volume?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    PPSA campaigns thrive when contractors have dedicated sales estimating capacity.
                  </p>
                </div>

                {/* 2x2 Grid of Revenue Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {revenueOptions.map((opt) => {
                    const isSelected = selectedRevenue === opt.label;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedRevenue(opt.label)}
                        className={`p-3.5 rounded-xl border transition-all flex items-center gap-3 text-left cursor-pointer ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-950/40 shadow-sm ring-1 ring-blue-500/50' 
                            : 'border-[#263247] hover:border-slate-600 bg-[#0B1020]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-blue-600/20 text-cyan-400' : 'bg-slate-800 text-slate-300'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Continue Button */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 text-base transition-all cursor-pointer"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
                  We verify contractor capacity so we don't overwhelm your sales pipeline.
                </p>
              </div>
            )}

            {/* STEP 3: Biggest Challenge */}
            {currentStep === 3 && (
              <div className="space-y-5 text-left">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    What is your biggest lead-generation hurdle right now?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    We tailor our pre-qualification filters around your primary bottleneck.
                  </p>
                </div>

                {/* 2x2 Grid of Challenges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {challengeOptions.map((opt) => {
                    const isSelected = selectedChallenge === opt.label;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedChallenge(opt.label)}
                        className={`p-3.5 rounded-xl border transition-all flex items-center gap-3 text-left cursor-pointer ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-950/40 shadow-sm ring-1 ring-blue-500/50' 
                            : 'border-[#263247] hover:border-slate-600 bg-[#0B1020]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-blue-600/20 text-cyan-400' : 'bg-slate-800 text-slate-300'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Continue Button */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 text-base transition-all cursor-pointer"
                  >
                    Continue to Final Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
                  Under PPSA, you only pay for appointments that attend and meet your qualification rules.
                </p>
              </div>
            )}

            {/* STEP 4: Contact & Territory Details with the SAME TICK THE BOX COPY FROM PREVIOUS LEAD FORM */}
            {currentStep === 4 && (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Final Step: Where should we send your territory analysis?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    We'll check territory exclusivity for <strong className="text-cyan-400">{selectedTrade}</strong> in your metro.
                  </p>
                </div>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">
                      First Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.firstName}
                      onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })}
                      placeholder="e.g. John"
                      className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B1020] border ${
                        errors.firstName ? 'border-rose-500' : 'border-[#263247]'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500`}
                    />
                    {errors.firstName && <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.firstName}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">
                      Last Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.lastName}
                      onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })}
                      placeholder="e.g. Miller"
                      className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B1020] border ${
                        errors.lastName ? 'border-rose-500' : 'border-[#263247]'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500`}
                    />
                    {errors.lastName && <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Contracting Business Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.businessName}
                    onChange={(e) => setContactData({ ...contactData, businessName: e.target.value })}
                    placeholder="e.g. Miller Elite Roofing LLC"
                    className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B1020] border ${
                      errors.businessName ? 'border-rose-500' : 'border-[#263247]'
                    } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500`}
                  />
                  {errors.businessName && <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.businessName}</span>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">
                      Business Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={contactData.businessEmail}
                      onChange={(e) => setContactData({ ...contactData, businessEmail: e.target.value })}
                      placeholder="john@millerroofing.com"
                      className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B1020] border ${
                        errors.businessEmail ? 'border-rose-500' : 'border-[#263247]'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500`}
                    />
                    {errors.businessEmail && <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.businessEmail}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">
                      Mobile Phone <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B1020] border ${
                        errors.phone ? 'border-rose-500' : 'border-[#263247]'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500`}
                    />
                    {errors.phone && <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.phone}</span>}
                  </div>
                </div>

                {/* Primary Service Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Primary Service Area / Metro & State <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactData.serviceArea}
                    onChange={(e) => setContactData({ ...contactData, serviceArea: e.target.value })}
                    placeholder="e.g. Dallas-Fort Worth Metro, TX"
                    className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B1020] border ${
                      errors.serviceArea ? 'border-rose-500' : 'border-[#263247]'
                    } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500`}
                  />
                  {errors.serviceArea && <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.serviceArea}</span>}
                </div>

                {/* CRITICAL SMS CONSENT BLOCK: IDENTICAL COPY & TICK THE BOX FROM PREVIOUS LEAD FORM */}
                <div className="p-4 rounded-lg bg-[#0B1020] border border-[#263247] space-y-4 mt-3">
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
                      id="quizTransactionalSmsConsent"
                      name="transactionalSmsConsent"
                      type="checkbox"
                      checked={contactData.transactionalSmsConsent}
                      onChange={(e) => setContactData({ ...contactData, transactionalSmsConsent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <label 
                      htmlFor="quizTransactionalSmsConsent" 
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
                      id="quizMarketingSmsConsent"
                      name="marketingSmsConsent"
                      type="checkbox"
                      checked={contactData.marketingSmsConsent}
                      onChange={(e) => setContactData({ ...contactData, marketingSmsConsent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <label 
                      htmlFor="quizMarketingSmsConsent" 
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

                {/* Big Submit Button in Landing Page Blue */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 transition-all cursor-pointer shadow-lg shadow-blue-600/25"
                  >
                    {isSubmitting ? (
                      <span>Processing Demo Intake...</span>
                    ) : (
                      <>
                        <span>Submit Contractor Strategy Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
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
        )}

      </div>
    </div>
  );
};
