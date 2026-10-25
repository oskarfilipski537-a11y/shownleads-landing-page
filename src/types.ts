export type ViewMode = 'landing' | 'privacy' | 'terms';

export interface EnquiryFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  businessEmail: string;
  phone: string;
  website: string;
  contractorNiche: string;
  serviceArea: string;
  revenueRange: string;
  biggestChallenge: string;
  priorityGoal: string;
  preferredCallTime: string;
  transactionalSmsConsent: boolean;
  marketingSmsConsent: boolean;
}

export interface ConsentRecord {
  submissionId: string;
  timestampUtc: string;
  contactDetails: {
    fullName: string;
    businessName: string;
    email: string;
    phone: string;
    niche: string;
    serviceArea: string;
    revenueRange: string;
    website?: string;
  };
  consentDecisions: {
    transactionalSmsConsent: boolean;
    exactTransactionalTextShown: string;
    marketingSmsConsent: boolean;
    exactMarketingTextShown: string;
    consentVersion: string;
  };
  technicalMetadata: {
    sourceUrl: string;
    sourcePage: string;
    submissionSource: string;
    userAgent: string;
    isDemoSubmission: boolean;
    messagesSent: boolean;
    realAppointmentBooked: boolean;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Model' | 'Delivery' | 'Consent' | 'Commercials';
}
