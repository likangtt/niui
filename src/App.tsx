import { useState } from 'react';
import { Download, Ligature as FileSignature, Sparkles } from 'lucide-react';
import ConfigPanel from './components/ConfigPanel';
import DocumentPreview from './components/DocumentPreview';
import Articles from './components/Articles';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import CookieConsent from './components/CookieConsent';
import ShareSection from './components/ShareSection';
import type { BasicInfo, Clause, Signatures, DocumentType } from './types';
import type { LegalPageType } from './components/LegalPage';

const DEFAULT_CLAUSES: Clause[] = [
  {
    id: 'preset-1a',
    text: 'Wipe down stove, countertop, and microwave immediately after cooking.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-1b',
    text: 'Deep clean the shared bathroom shower and toilet once a week.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-2',
    text: 'Rotate purchasing of common household supplies like toilet paper and trash bags monthly.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-3',
    text: 'Enforce strict quiet hours from 10:00 PM to 7:00 AM daily.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-4',
    text: 'Limit overnight guests to a maximum of 2 nights per week with a 24-hour advance notice.',
    enabled: true,
    preset: true,
  },
  // ── Neighbor Boundary Agreement ──
  {
    id: 'preset-5a',
    text: 'Both parties agree to observe quiet hours from 10:00 PM to 7:00 AM on weekdays and 11:00 PM to 8:00 AM on weekends.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-5b',
    text: 'Shared fences, walls, or hedges shall be maintained jointly, with repair costs split 50/50 and written notice provided at least 14 days before any maintenance work begins.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-5c',
    text: 'Each party shall park only in their designated parking area. Guest parking is limited to 48 hours without prior written agreement from the other party.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-5d',
    text: 'Garbage and recycling bins shall be returned to their designated storage location within 24 hours of collection. Neither party shall place bins on the other party\'s property without permission.',
    enabled: true,
    preset: true,
  },
  // ── Item Lending Agreement ──
  {
    id: 'preset-6a',
    text: 'The Lender agrees to loan the described item to the Borrower in its current working condition as inspected and acknowledged by both parties at the time of loan.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-6b',
    text: 'The Borrower agrees to return the item on or before the agreed return date in the same condition as received, excluding normal wear and tear from authorized use.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-6c',
    text: 'The Borrower assumes full financial responsibility for any damage, loss, or theft of the item during the loan period and agrees to pay the full replacement or repair cost within 30 days.',
    enabled: true,
    preset: true,
  },
  // ── House Sitting Agreement ──
  {
    id: 'preset-7a',
    text: 'The House Sitter shall have authorized key access from the start date to the end date and agrees not to duplicate keys or grant access to any third party without the Homeowner\'s written consent.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-7b',
    text: 'The House Sitter agrees to water all indoor and outdoor plants according to the attached schedule, collect mail and newspapers daily, and place garbage bins at the curb on the designated collection day.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-7c',
    text: 'In case of emergency (fire, flood, break-in, or major appliance failure), the House Sitter shall immediately contact the Homeowner at the provided emergency number and, if unreachable, is authorized to take reasonable action to protect the property.',
    enabled: true,
    preset: true,
  },
  // ── Shared Expense Agreement ──
  {
    id: 'preset-8a',
    text: 'The parties agree to equally share the total cost of the described project. Each party shall contribute their share no later than 7 days before the scheduled payment to the contractor or vendor.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-8b',
    text: 'Any contractor or service provider must be mutually selected and approved in writing by both parties before work begins. Neither party may unilaterally authorize work that exceeds the agreed budget.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-8c',
    text: 'If either party fails to contribute their agreed share by the payment deadline, the contributing party may deduct the outstanding amount from any future shared expense obligation, and the non-paying party shall reimburse within 60 days.',
    enabled: true,
    preset: true,
  },
  // ── Car Pool Agreement ──
  {
    id: 'preset-9a',
    text: 'Drivers shall rotate on a weekly basis. Each driver is responsible for maintaining a clean vehicle interior, arriving at designated pickup points within a 5-minute window, and notifying all participants at least 60 minutes before any schedule change.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-9b',
    text: 'Fuel, tolls, and routine maintenance costs (oil changes, tire rotations) shall be split equally among all regular participants and settled monthly. A shared expense log shall be maintained for transparency.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-9c',
    text: 'All participants shall maintain valid driver\'s licenses and personal auto insurance as required by law. In the event of an accident, each party shall rely on their own insurance coverage as primary. This agreement is not a commercial transportation contract.',
    enabled: true,
    preset: true,
  },
  // ── General Shared Living ──
  {
    id: 'preset-10a',
    text: 'All shared living spaces including the living room, kitchen, and hallways shall be kept free of personal belongings. Items left in common areas for more than 24 hours may be moved to the owner\'s private room.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10b',
    text: 'Each resident is responsible for cleaning their own dishes, cookware, and utensils within 2 hours of use. No dirty dishes shall be left in the sink overnight.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10c',
    text: 'All shared utility bills including electricity, water, gas, and internet shall be divided equally between residents and paid by the 5th of each month. Late payments incur a $15 administrative fee.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10d',
    text: 'No smoking, vaping, or use of any tobacco products is permitted inside the residence. Smoking is permitted only in designated outdoor areas at least 25 feet from any entrance.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10e',
    text: 'Pets are not permitted in the residence without prior written consent from all residents and the landlord. Any approved pet owner assumes full responsibility for damages, noise complaints, and cleaning.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10f',
    text: 'Each resident shall maintain renters insurance with a minimum of $100,000 in personal liability coverage and provide proof of coverage to the other residents within 30 days of move-in.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10g',
    text: 'Parties or gatherings of more than 6 guests require 48-hour advance notice to all residents. Any gathering must end by 11:00 PM and guests must not disrupt neighbors or common areas.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10h',
    text: 'Each resident shall contribute $50 per month to a shared household supplies fund used for toilet paper, cleaning products, trash bags, and other communal items. Unused funds roll over monthly.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10i',
    text: 'Temperature settings for heating and air conditioning shall be mutually agreed upon. The thermostat shall be set no lower than 68°F in summer and no higher than 72°F in winter unless otherwise agreed.',
    enabled: true,
    preset: true,
  },
  {
    id: 'preset-10j',
    text: 'Any resident planning to move out must provide at least 30 days written notice to all other residents and the landlord. The departing resident remains responsible for their share of rent and utilities through the notice period.',
    enabled: true,
    preset: true,
  },
];

const DEFAULT_BASIC_INFO: BasicInfo = {
  roommateA: '',
  roommateB: '',
  leaseStart: '',
  address: '',
};

const DEFAULT_SIGNATURES: Signatures = {
  signatureA: '',
  signatureB: '',
  dateA: '',
  dateB: '',
};

export default function App() {
  const [docType, setDocType] = useState<DocumentType>('roommate');
  const [basicInfo, setBasicInfo] = useState<BasicInfo>(DEFAULT_BASIC_INFO);
  const [clauses, setClauses] = useState<Clause[]>(DEFAULT_CLAUSES);
  const [signatures, setSignatures] = useState<Signatures>(DEFAULT_SIGNATURES);
  const [legalPage, setLegalPage] = useState<LegalPageType | null>(null);

  function handlePrint() {
    // Inject a print-only style
    const style = document.createElement('style');
    style.id = 'print-fix';
    style.textContent = `
      @media print {
        /* Force outer containers to white, but DO NOT touch inner #print-preview content */
        html, body, #root, main {
          background: white !important;
          background-color: white !important;
        }

        .no-print { display: none !important; }

        /* Fix #print-preview layout for print: kill flex, kill min-height */
        #print-preview {
          box-shadow: none !important;
          border-radius: 0 !important;
          display: block !important;
          min-height: auto !important;
          height: auto !important;
          overflow: visible !important;
          flex: none !important;
        }
        #print-preview > * {
          display: block !important;
          flex: none !important;
        }

        @page { margin: 1.5cm; size: A4; }
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('afterprint', function cleanup() {
      document.getElementById('print-fix')?.remove();
      window.removeEventListener('afterprint', cleanup);
    }, { once: true });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.print();
      });
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <header className="no-print sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
              <FileSignature size={15} className="text-sky-400" />
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-100">
              Free<span className="text-sky-400">Chore</span>Contract
            </span>
          </div>

          {/* Nav links — credibility signals */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLegalPage('about')}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-md transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setLegalPage('contact')}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-md transition-colors"
            >
              Contact
            </button>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50">
              <Sparkles size={11} className="text-sky-400" />
              100% Free &amp; Private
            </span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-sky-500/20"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="no-print relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sky-400/80 uppercase mb-4 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
            <Sparkles size={12} />
            Free Roommate Agreement Generator
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight mb-4">
            Official Chore Contracts,<br />
            <span className="text-sky-400">Generated in Seconds</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Build a print-ready Roommate Agreement, Chore Contract, Fridge Treaty, Pet Addendum, Neighbor Boundary Agreement, Lending Contract, House Sitting Agreement, Shared Expense Plan, or Car Pool Agreement — fully customizable, legally structured, and 100% private.
          </p>
        </div>
      </section>

      {/* Main Tool — Split Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left: Config Dashboard */}
          <aside className="no-print w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <div className="bg-slate-900/70 border border-slate-800/60 rounded-2xl p-5 md:p-6 lg:sticky lg:top-20">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-800/60">
                <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                <h2 className="text-sm font-semibold text-slate-200">Contract Builder</h2>
                <span className="ml-auto text-xs text-slate-500">Live Preview →</span>
              </div>
              <ConfigPanel
                docType={docType}
                setDocType={setDocType}
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                clauses={clauses}
                setClauses={setClauses}
              />
            </div>
          </aside>

          {/* Right: Document Preview */}
          <div className="flex-1 min-w-0">
            <div className="no-print flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs text-slate-400 font-medium">Live Document Preview</span>
              <button
                onClick={handlePrint}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all duration-150 shadow"
              >
                <Download size={13} />
                Download Formal PDF
              </button>
            </div>
            <DocumentPreview
              docType={docType}
              basicInfo={basicInfo}
              clauses={clauses}
              signatures={signatures}
              setSignatures={setSignatures}
              setClauses={setClauses}
            />

            {/* Share directly below the contract */}
            <ShareSection />
          </div>
        </div>
      </main>

      {/* Floating PDF button (mobile & always visible) */}
      <button
        onClick={handlePrint}
        className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-semibold text-sm shadow-xl shadow-sky-500/30 transition-all duration-200 hover:scale-105 active:scale-95 lg:hidden"
      >
        <Download size={16} />
        Download Formal PDF
      </button>

      {/* SEO Articles */}
      <Articles />

      {/* Legal Footer */}
      <Footer onOpenLegal={setLegalPage} />

      {/* Legal Pages Overlay */}
      <LegalPage page={legalPage} onClose={() => setLegalPage(null)} />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
