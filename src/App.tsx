import React, { useState, useEffect } from 'react';
import { ViewMode, ConsentRecord } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PipelineSection } from './components/PipelineSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ModelSection } from './components/ModelSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { OfferTransparencySection } from './components/OfferTransparencySection';
import { FAQSection } from './components/FAQSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Footer } from './components/Footer';
import { ConsentAuditModal } from './components/ConsentAuditModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('landing');
  const [selectedAuditRecord, setSelectedAuditRecord] = useState<ConsentRecord | null>(null);

  // Sync hash routing and URL paths
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === '/privacy' || hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else if (path === '/terms' || hash === '#terms') {
        setCurrentView('terms');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('landing');
        if (hash && hash !== '#top') {
          const el = document.querySelector(hash);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }
        }
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (view: ViewMode, sectionId?: string) => {
    setCurrentView(view);
    
    if (view === 'privacy') {
      window.location.hash = 'privacy';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'terms') {
      window.location.hash = 'terms';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
        window.location.hash = sectionId ? `#${sectionId}` : '';
      }
      if (sectionId) {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToQuiz = () => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-cyan-200">
      
      {/* Top Header Navigation - Logo Only */}
      <Header 
        currentView={currentView} 
        onNavigate={handleNavigate} 
      />

      {/* Main Body Routing */}
      <main className="flex-1" id="top">
        {currentView === 'landing' && (
          <>
            {/* Hero with Centered H1, Reduced H2, and Roofing-Style Quiz Qualification Form */}
            <HeroSection 
              onNavigatePolicy={(view) => handleNavigate(view)}
              onOpenAuditRecord={(record) => setSelectedAuditRecord(record)}
            />

            {/* Illustrative 5-Stage Pipeline Workflow */}
            <PipelineSection />

            {/* Problem Section: Unqualified Leads, Missed Appointments, Agency Economics */}
            <ProblemSection />

            {/* How PPSA Works: 4-Step Operational Flow */}
            <HowItWorksSection />

            {/* Comparison with Retainers & Lead Brokers */}
            <ModelSection />

            {/* Who We Help: Contractor Niches & Suitability Criteria */}
            <WhoWeHelpSection />

            {/* Offer & Commercial Transparency with Scenario Simulator */}
            <OfferTransparencySection 
              onDiscussPricing={scrollToQuiz}
            />

            {/* FAQ Accordion: 10 Critical Questions */}
            <FAQSection />
          </>
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy 
            onBack={() => handleNavigate('landing')} 
          />
        )}

        {currentView === 'terms' && (
          <TermsAndConditions 
            onBack={() => handleNavigate('landing')} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
      />

      {/* Compliance Audit Modal for Demo Testing */}
      <ConsentAuditModal
        record={selectedAuditRecord}
        onClose={() => setSelectedAuditRecord(null)}
      />

    </div>
  );
}
