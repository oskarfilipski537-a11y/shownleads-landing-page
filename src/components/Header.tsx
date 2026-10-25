import React from 'react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full border-b border-[#263247]/60 bg-[#0B1020]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between h-16 sm:h-20">
          
          {/* Logo Only - No Nav Bar */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('landing', 'top');
            }}
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 group"
            aria-label="ShownLeads Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 p-[1.5px] shadow-sm transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
            </div>
            <span className="font-bold tracking-tight text-xl text-white">
              Shown<span className="text-cyan-400">Leads</span>
            </span>
          </a>

          {/* Clean minimal trust marker on larger screens */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Performance-Based Appointment Generation for US Contractors</span>
          </div>

        </div>
      </div>
    </header>
  );
};
