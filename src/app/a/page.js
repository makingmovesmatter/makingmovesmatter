'use client';

import { useState } from 'react';
import { generateAdminEmailHtml, demoEstimate } from '../../../lib/emailTemplate';
import {
  FaMobileAlt,
  FaDesktop,
  FaCopy,
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaRedo
} from 'react-icons/fa';

const demoScenarios = [
  {
    id: 'executive',
    name: 'Executive Relocation',
    badge: 'Standard VIP',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    data: {
      ...demoEstimate,
      _id: '6ade0b9210deef3adbcebd61',
      firstname: 'Sarah & David',
      lastname: 'Jenkins',
      email: 'sarah.jenkins@gmail.com',
      phone: '(480) 555-0192',
      zeepcode: '85205',
      destinationZip: '85260',
      origin: '4700 E Main St, Mesa, AZ',
      destination: '7320 E Butherus Dr, Scottsdale, AZ',
      service: 'Local Moving',
      estimateType: 'home',
      moveDate: '2026-11-15',
      message: 'Move Size: 2 - 3 Bedrooms (Standard Home) || Add-ons: Professional Packing Needed | Climate-Controlled Storage Needed | Specialty Items: Baby Grand Piano, Heavy Gun Safe (800 lbs) | Preferred Contact: Phone Call (Morning 9AM - 12PM) || Notes: Two-story home with curved front stairs at origin. Gated community with code #4821 at destination. Please protect heirloom dining table.'
    }
  },
  {
    id: 'urgent_commercial',
    name: 'Urgent Commercial Tech Lab',
    badge: 'CRITICAL 48H SLA',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    data: {
      ...demoEstimate,
      _id: '8f99e4312cbaa90432fed128',
      firstname: 'Dr. Raymond',
      lastname: 'Chen',
      email: 'r.chen@biotech-az.org',
      phone: '(602) 884-9021',
      zeepcode: '85201',
      destinationZip: '85286',
      origin: '250 W Main St, Mesa, AZ',
      destination: '3100 S Price Rd, Chandler, AZ',
      service: 'Commercial Services',
      estimateType: 'business',
      moveDate: '2026-10-28',
      message: 'Move Size: Office / Commercial (Workspace / Business) || Add-ons: Professional Packing Needed | Climate-Controlled Storage Needed | URGENT MOVE: Priority Dispatch Needed within 48-72h | Specialty Items: Fragile Fine Art / Antiques, Commercial Fitness Equipment | Preferred Contact: Phone Call || Notes: High-value optics and calibrated measurement benches. Freight elevator reservation confirmed at origin for Tuesday 8 AM.'
    }
  },
  {
    id: 'studio_apartment',
    name: 'Studio Apartment Express',
    badge: 'Quick Turn',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    data: {
      ...demoEstimate,
      _id: '4c771190de123bbfa998e104',
      firstname: 'Marcus',
      lastname: 'Vance',
      email: 'm.vance@techpulse.io',
      phone: '(480) 923-4410',
      zeepcode: '85204',
      destinationZip: '85296',
      origin: '1450 S Lindsay Rd, Mesa, AZ',
      destination: '890 E Baseline Rd, Gilbert, AZ',
      service: 'Local Moving',
      estimateType: 'home',
      moveDate: '2026-11-05',
      message: 'Move Size: Studio / 1 Bed (Apt or small condo) || Preferred Contact: Text Message || Notes: Ground-floor unit moving into 3rd-floor walk-up in Gilbert. Need furniture pads for glass coffee table.'
    }
  }
];

export default function EmailPreviewPage() {
  const [selectedScenarioId, setSelectedScenarioId] = useState('executive');
  const [viewport, setViewport] = useState('desktop'); // 'desktop' or 'mobile'
  const [copied, setCopied] = useState(false);

  const activeScenario = demoScenarios.find((s) => s.id === selectedScenarioId) || demoScenarios[0];
  const emailHtml = generateAdminEmailHtml(activeScenario.data);

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(emailHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy HTML:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#060d1a] text-slate-100 flex flex-col font-sans">
      {/* Top Navigation & Controls Bar */}
      <header className="border-b border-slate-800 bg-[#011234]/90 backdrop-blur-md sticky top-0 z-50 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#f99c00] flex items-center justify-center text-[#011234] font-bold text-lg shadow-lg shadow-orange-500/20">
              M
            </div>
            <div>
              <h1 className="text-base font-bold tracking-wide text-white flex items-center gap-2">
                Making Moves Matter
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f99c00]/20 text-[#f99c00] border border-[#f99c00]/30 tracking-widest uppercase">
                  Admin Dispatch Mailer
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Responsive HTML Email Template Inspector • Route & Destination Postcode Verified
              </p>
            </div>
          </div>

          {/* Controls: Scenarios & Viewport Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Scenario Picker */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              {demoScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioId(sc.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedScenarioId === sc.id
                      ? 'bg-[#f99c00] text-[#011234] shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* Viewport Toggles */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewport('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewport === 'desktop'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
                title="Desktop 620px View"
              >
                <FaDesktop className="text-xs" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setViewport('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewport === 'mobile'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                  }`}
                title="Mobile 375px View"
              >
                <FaMobileAlt className="text-xs" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopyHtml}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-400 text-xs" />
                  <span className="text-emerald-300">HTML Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-slate-400 text-xs" />
                  <span>Copy HTML</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Telemetry Summary Bar */}
      <div className="bg-[#0b162c] border-b border-slate-800 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <FaMapMarkerAlt className="text-[#f99c00]" />
              <strong>Origin:</strong> {activeScenario.data.origin} <span className="text-[#f99c00] font-mono font-bold">[{activeScenario.data.zeepcode}]</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <FaMapMarkerAlt className="text-emerald-400" />
              <strong>Destination:</strong> {activeScenario.data.destination} <span className="text-emerald-400 font-mono font-bold">[{activeScenario.data.destinationZip}]</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400 hidden md:inline-flex">
              <FaClock className="text-[#f99c00]" />
              <strong>Date:</strong> {activeScenario.data.moveDate}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${activeScenario.badgeColor}`}>
              {activeScenario.badge}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Viewport: {viewport === 'desktop' ? '620px (Desktop Container)' : '375px (iPhone 14 Sim)'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Preview Canvas */}
      <main className="flex-1 p-4 sm:p-8 flex items-center justify-center overflow-auto bg-[#040812]">
        <div
          className={`transition-all duration-300 mx-auto ${viewport === 'mobile'
              ? 'w-[395px] p-2.5 rounded-[44px] bg-slate-900 border-4 border-slate-700 shadow-2xl shadow-black ring-1 ring-slate-800'
              : 'w-full max-w-[680px] p-2 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-2xl'
            }`}
        >
          {/* Phone Speaker Notch for Mobile View */}
          {viewport === 'mobile' && (
            <div className="flex justify-center mb-2">
              <div className="w-24 h-4 bg-slate-950 rounded-full flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full" />
              </div>
            </div>
          )}

          {/* Isolated iframe for authentic cross-client CSS execution */}
          <div
            className={`overflow-hidden transition-all duration-300 ${viewport === 'mobile'
                ? 'rounded-[32px] bg-[#060d1a] h-[780px]'
                : 'rounded-xl bg-[#060d1a] h-[860px]'
              }`}
          >
            <iframe
              title="Admin Email Preview"
              srcDoc={emailHtml}
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-popups"
            />
          </div>

          {/* Phone Bottom Home Bar for Mobile View */}
          {viewport === 'mobile' && (
            <div className="flex justify-center mt-2.5">
              <div className="w-28 h-1 bg-slate-700 rounded-full" />
            </div>
          )}
        </div>
      </main>

      {/* Footer info */}
      <footer className="border-t border-slate-800/80 bg-[#060d1a] px-4 py-2.5 text-center text-xs text-slate-500">
        Engineered with pure inline CSS & vector SVGs • Compatible with Apple Mail, Gmail (iOS/Android), Outlook 365 & Yahoo
      </footer>
    </div>
  );
}
