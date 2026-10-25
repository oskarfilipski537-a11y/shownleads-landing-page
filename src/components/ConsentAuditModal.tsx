import React, { useState } from 'react';
import { X, Copy, Check, ShieldCheck, Terminal, FileJson } from 'lucide-react';
import { ConsentRecord } from '../types';

interface ConsentAuditModalProps {
  record: ConsentRecord | null;
  onClose: () => void;
}

export const ConsentAuditModal: React.FC<ConsentAuditModalProps> = ({ record, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!record) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(record, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-xl border border-[#263247] bg-[#111827] shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#263247] bg-[#0B1020]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-sm font-bold text-white">
                Production Consent & Intake Data Model
              </h3>
              <p className="text-xs text-slate-400">
                Audit record schema for compliance verification
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-500/30 text-xs text-slate-300">
            This data structure models the production-grade audit log required for US 10DLC, TCPA, and CTIA compliance. In a live system, this immutable record proves affirmative consent before any SMS message can be triggered.
          </div>

          {/* Key Fields Highlights */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[#0B1020] border border-[#263247]">
              <span className="text-slate-400 block mb-0.5">Submission Identifier:</span>
              <span className="font-mono text-cyan-300 font-semibold">{record.submissionId}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0B1020] border border-[#263247]">
              <span className="text-slate-400 block mb-0.5">Timestamp (UTC):</span>
              <span className="font-mono text-slate-200">{record.timestampUtc}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0B1020] border border-[#263247]">
              <span className="text-slate-400 block mb-0.5">Transactional Consent:</span>
              <span className={`font-semibold ${record.consentDecisions.transactionalSmsConsent ? 'text-cyan-400' : 'text-slate-400'}`}>
                {record.consentDecisions.transactionalSmsConsent ? 'TRUE (Checked by user)' : 'FALSE (Unchecked)'}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-[#0B1020] border border-[#263247]">
              <span className="text-slate-400 block mb-0.5">Consent Text Version:</span>
              <span className="font-mono text-slate-300">{record.consentDecisions.consentVersion}</span>
            </div>
          </div>

          {/* Exact Consent Text Display */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Exact Consent Text Displayed:
            </label>
            <div className="p-3 rounded-lg bg-[#0B1020] border border-[#263247] text-xs text-slate-300 leading-relaxed font-mono">
              "{record.consentDecisions.exactTransactionalTextShown}"
            </div>
          </div>

          {/* Complete JSON Payload */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileJson className="w-4 h-4 text-cyan-400" />
                Raw JSON Audit Record:
              </span>
              <button
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy JSON
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded-lg bg-[#0B1020] border border-[#263247] text-[11px] font-mono text-slate-300 overflow-x-auto">
              {JSON.stringify(record, null, 2)}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#263247] bg-[#0B1020] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
