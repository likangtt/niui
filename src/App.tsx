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

const CLAUSE_TEMPLATES: Record<DocumentType, Clause[]> = {
  roommate: [
    { id: 'rm-1', text: 'Rent shall be paid by each resident on or before the 1st of each month. Late payments incur a $50 penalty after a 3-day grace period.', enabled: true, preset: true },
    { id: 'rm-2', text: 'All shared utility bills (electricity, water, gas, internet) shall be divided equally and paid by the 5th of each month.', enabled: true, preset: true },
    { id: 'rm-3', text: 'Overnight guests are limited to 2 consecutive nights per week. Any guest staying longer requires written consent from all residents.', enabled: true, preset: true },
    { id: 'rm-4', text: 'Quiet hours are strictly enforced from 10:00 PM to 7:00 AM on weekdays and 11:00 PM to 9:00 AM on weekends.', enabled: true, preset: true },
    { id: 'rm-5', text: 'Each resident is responsible for cleaning their own dishes within 2 hours of use. No dirty dishes shall be left in the sink overnight.', enabled: true, preset: true },
    { id: 'rm-6', text: 'No smoking, vaping, or tobacco use is permitted inside the residence. Smoking is allowed only in designated outdoor areas.', enabled: true, preset: true },
    { id: 'rm-7', text: 'Pets require prior written consent from all residents and the landlord. Pet owners assume full responsibility for damages and cleaning.', enabled: true, preset: true },
    { id: 'rm-8', text: 'Parties or gatherings exceeding 6 guests require 48-hour advance notice and must conclude by 11:00 PM.', enabled: true, preset: true },
    { id: 'rm-9', text: 'A departing resident must provide at least 30 days written notice and remains responsible for rent through the notice period.', enabled: true, preset: true },
    { id: 'rm-10', text: 'Shared household supplies (toilet paper, trash bags, cleaning products) shall be purchased on a rotating basis by each resident monthly.', enabled: true, preset: true },
  ],
  chore: [
    { id: 'ch-1', text: 'Kitchen cleaning duties (counters, stove, sink, microwave) shall rotate weekly. The assigned resident must complete cleaning by 9:00 PM each day.', enabled: true, preset: true },
    { id: 'ch-2', text: 'Bathroom deep cleaning (toilet, shower, sink, mirror, floor) shall be completed every Saturday by the assigned resident on rotation.', enabled: true, preset: true },
    { id: 'ch-3', text: 'Living room and common area tidying (vacuum, dust, organize) shall be performed twice weekly by the scheduled resident.', enabled: true, preset: true },
    { id: 'ch-4', text: 'Trash and recycling shall be taken to outdoor bins every Sunday and Wednesday evening. Bins must be at the curb by 7:00 AM on collection day.', enabled: true, preset: true },
    { id: 'ch-5', text: 'Vacuuming and mopping of all shared floor areas shall be completed every Sunday by 6:00 PM. The responsible resident rotates weekly.', enabled: true, preset: true },
    { id: 'ch-6', text: 'Laundry room must be left clean after each use. Lint traps emptied, machines wiped down, and personal items removed within 1 hour of cycle completion.', enabled: true, preset: true },
    { id: 'ch-7', text: 'Dishwasher management (loading, running when full, unloading within 4 hours) shall rotate weekly between all residents.', enabled: true, preset: true },
    { id: 'ch-8', text: 'A chore tracking chart shall be posted on the refrigerator and initialed upon completion. Missed chores result in the resident taking the next two rotation turns.', enabled: true, preset: true },
    { id: 'ch-9', text: 'Seasonal deep cleaning (windows, baseboards, behind appliances) shall be performed quarterly with all residents participating on a mutually agreed weekend.', enabled: true, preset: true },
    { id: 'ch-10', text: 'Personal items left in common areas for more than 24 hours shall be moved to the owner\'s room. Repeated violations incur a $10 cleaning fee per incident.', enabled: true, preset: true },
  ],
  fridge: [
    { id: 'fr-1', text: 'Each resident is assigned one designated shelf and one crisper drawer. No food items shall be placed on another resident\'s space without permission.', enabled: true, preset: true },
    { id: 'fr-2', text: 'All food containers must be labeled with the owner\'s name and date of storage. Unlabeled items older than 1 week may be discarded by any resident.', enabled: true, preset: true },
    { id: 'fr-3', text: 'Expired, moldy, or spoiled food must be removed immediately by the owner. If not removed within 24 hours of notice, any resident may discard it.', enabled: true, preset: true },
    { id: 'fr-4', text: 'Shared condiments and staples (ketchup, butter, milk, eggs) shall be purchased on a rotating basis. A shared expense log shall track contributions.', enabled: true, preset: true },
    { id: 'fr-5', text: 'All spills and messes inside the refrigerator must be cleaned immediately by the responsible resident. Failure to clean within 4 hours incurs a $5 penalty.', enabled: true, preset: true },
    { id: 'fr-6', text: 'The refrigerator temperature shall be maintained between 35°F and 38°F. Freezer temperature at 0°F. Adjustments require mutual agreement.', enabled: true, preset: true },
    { id: 'fr-7', text: 'Bulky items (large pots, party platters, watermelons) must not occupy more than the designated shelf space. Overflow requires prior agreement.', enabled: true, preset: true },
    { id: 'fr-8', text: 'Strong-smelling foods (fish, durian, aged cheese) must be stored in sealed airtight containers. Complaints about lingering odors require immediate remediation.', enabled: true, preset: true },
    { id: 'fr-9', text: 'Refrigerator and freezer shall be deep cleaned on the 1st of every month. Each resident cleans their own shelves; common areas are rotated.', enabled: true, preset: true },
    { id: 'fr-10', text: 'No resident shall disconnect or unplug the refrigerator without 48-hour notice. Power outages exceeding 4 hours require food safety inspection.', enabled: true, preset: true },
  ],
  pet: [
    { id: 'pt-1', text: 'Only the pet(s) listed in this addendum are permitted. Any new pet requires written consent from all residents and the landlord.', enabled: true, preset: true },
    { id: 'pt-2', text: 'All pets must be up-to-date on vaccinations and registered with local authorities. Vaccination records shall be shared with all residents.', enabled: true, preset: true },
    { id: 'pt-3', text: 'Pet waste in the yard or outdoor areas must be picked up immediately. Indoor accidents must be cleaned and sanitized within 30 minutes.', enabled: true, preset: true },
    { id: 'pt-4', text: 'Excessive barking, meowing, or noise disturbances resulting in a neighbor complaint shall incur a $25 penalty per incident, payable to the household fund.', enabled: true, preset: true },
    { id: 'pt-5', text: 'The pet owner bears full financial responsibility for any property damage caused by their pet, including scratched doors, chewed furniture, or stained carpets.', enabled: true, preset: true },
    { id: 'pt-6', text: 'Shared pet costs (communal supplies, pet-sitting) shall be agreed upon in advance. Unexpected vet bills are the sole responsibility of the pet owner.', enabled: true, preset: true },
    { id: 'pt-7', text: 'Dogs must be walked on a leash at all times outside. The pet owner shall ensure their pet does not enter another resident\'s private room without invitation.', enabled: true, preset: true },
    { id: 'pt-8', text: 'Pets shall not be left unattended for more than 12 hours. For absences exceeding 24 hours, the pet owner must arrange care or boarding.', enabled: true, preset: true },
    { id: 'pt-9', text: 'In a medical emergency, the pet owner shall transport the animal to the nearest vet clinic. Other residents may assist but bear no financial obligation.', enabled: true, preset: true },
    { id: 'pt-10', text: 'If the landlord revokes pet permission or a resident develops severe allergies, the pet owner has 30 days to rehome the pet or find alternative housing.', enabled: true, preset: true },
  ],
  neighbor: [
    { id: 'nb-1', text: 'Both parties agree to observe quiet hours from 10:00 PM to 7:00 AM on weekdays and 11:00 PM to 8:00 AM on weekends and holidays.', enabled: true, preset: true },
    { id: 'nb-2', text: 'Shared fences, walls, or hedges shall be maintained jointly. Repair costs are split 50/50 with at least 14 days written notice before maintenance.', enabled: true, preset: true },
    { id: 'nb-3', text: 'Each party shall park only in their designated area. Guest parking is limited to 48 hours without prior written agreement from the other party.', enabled: true, preset: true },
    { id: 'nb-4', text: 'Garbage and recycling bins shall be returned to storage within 24 hours of collection. Bins shall not obstruct the other party\'s walkway or entrance.', enabled: true, preset: true },
    { id: 'nb-5', text: 'Noise complaints shall be addressed within 24 hours. Persistent unresolved complaints after 3 documented warnings may be used in formal mediation.', enabled: true, preset: true },
    { id: 'nb-6', text: 'Property boundary lines as defined by the most recent land survey shall be respected. Neither party shall place structures beyond their boundary.', enabled: true, preset: true },
    { id: 'nb-7', text: 'Shared driveways shall remain clear. Neither party may block access or park in a manner that impedes the other party\'s entry or exit.', enabled: true, preset: true },
    { id: 'nb-8', text: 'Trees or shrubbery overhanging the property line may be trimmed by the affected party after 30 days written notice, at their own expense.', enabled: true, preset: true },
    { id: 'nb-9', text: 'Pets shall not roam freely onto the neighboring property. Any damage caused by a roaming pet shall be remedied within 7 days at the owner\'s expense.', enabled: true, preset: true },
    { id: 'nb-10', text: 'Each party shall provide current emergency contact information (phone, email) and update within 7 days of any change.', enabled: true, preset: true },
  ],
  lending: [
    { id: 'ln-1', text: 'The item being lent is described in the attached schedule with its current condition documented by photos taken at the time of handover.', enabled: true, preset: true },
    { id: 'ln-2', text: 'The loan period begins on the start date and ends on the agreed return date. Extensions must be requested in writing at least 48 hours before the return date.', enabled: true, preset: true },
    { id: 'ln-3', text: 'The item shall be returned in the same condition as received, excluding normal wear and tear. The Borrower agrees to clean the item before return if applicable.', enabled: true, preset: true },
    { id: 'ln-4', text: 'The Borrower assumes full financial responsibility for damage, loss, or theft. Replacement or repair costs shall be paid within 30 days.', enabled: true, preset: true },
    { id: 'ln-5', text: 'Items returned more than 3 days late incur a late fee of $10 per day, not to exceed 50% of the item\'s replacement value.', enabled: true, preset: true },
    { id: 'ln-6', text: 'The item shall not be sub-lent, leased, or used for commercial purposes without the Lender\'s express written permission.', enabled: true, preset: true },
    { id: 'ln-7', text: 'The Borrower shall not modify, disassemble, or attempt to repair the item without the Lender\'s prior written consent.', enabled: true, preset: true },
    { id: 'ln-8', text: 'If the item requires consumables, fuel, or power during use, the Borrower is responsible for those costs during the loan period.', enabled: true, preset: true },
    { id: 'ln-9', text: 'The Lender may inspect the item with 24 hours notice during the loan period. The Borrower shall make the item reasonably available for inspection.', enabled: true, preset: true },
    { id: 'ln-10', text: 'Any dispute regarding item condition upon return shall be resolved through mediation between the parties before escalating to small claims court.', enabled: true, preset: true },
  ],
  housesitting: [
    { id: 'hs-1', text: 'The House Sitter shall have authorized key access from the start date to the end date. Keys shall not be duplicated or given to any third party.', enabled: true, preset: true },
    { id: 'hs-2', text: 'The House Sitter shall water plants per the attached schedule, collect mail and newspapers daily, and place bins at the curb on collection day.', enabled: true, preset: true },
    { id: 'hs-3', text: 'In case of emergency (fire, flood, break-in), call 911 first, then contact the Homeowner at the provided emergency number immediately.', enabled: true, preset: true },
    { id: 'hs-4', text: 'All doors and windows shall be locked when the House Sitter is away. Security systems shall be armed as instructed. Alarm triggers must be reported immediately.', enabled: true, preset: true },
    { id: 'hs-5', text: 'The House Sitter shall maintain reasonable thermostat settings and report any HVAC, plumbing, or electrical issues within 4 hours of discovery.', enabled: true, preset: true },
    { id: 'hs-6', text: 'Existing pets shall be fed according to the Homeowner\'s written schedule. Emergency vet visits authorized up to $500 without prior approval.', enabled: true, preset: true },
    { id: 'hs-7', text: 'The home shall be left in equal or better condition. All surfaces wiped, floors swept, and garbage removed before the Homeowner\'s return.', enabled: true, preset: true },
    { id: 'hs-8', text: 'No parties, gatherings, or overnight guests are permitted without the Homeowner\'s prior written authorization.', enabled: true, preset: true },
    { id: 'hs-9', text: 'The House Sitter shall not enter rooms marked as off-limits. Basements, safes, and locked cabinets are presumed off-limits unless stated otherwise.', enabled: true, preset: true },
    { id: 'hs-10', text: 'A daily check-in message shall be sent to the Homeowner by 9:00 PM summarizing the day\'s events and confirming all is well.', enabled: true, preset: true },
  ],
  'shared-expense': [
    { id: 'se-1', text: 'The total project cost shall be split equally. Each party\'s share shall be deposited into the designated account 7 days before payment is due.', enabled: true, preset: true },
    { id: 'se-2', text: 'Contractors and vendors must be mutually selected and approved in writing. Neither party may unilaterally authorize work exceeding the agreed budget.', enabled: true, preset: true },
    { id: 'se-3', text: 'Any expense over $200 beyond the original estimate requires written approval from both parties before the work proceeds.', enabled: true, preset: true },
    { id: 'se-4', text: 'If a party fails to pay by the deadline, the paying party may deduct the outstanding amount from future shared expenses. Reimbursement is due within 60 days.', enabled: true, preset: true },
    { id: 'se-5', text: 'All receipts, invoices, and payment confirmations shall be uploaded to a shared folder within 72 hours of receipt.', enabled: true, preset: true },
    { id: 'se-6', text: 'Disputes regarding expense categorization shall be resolved within 14 days. Unresolved disputes may proceed to mediation.', enabled: true, preset: true },
    { id: 'se-7', text: 'Either party may request an independent quote for comparison. If the lower quote is selected, the party who found it receives a 10% credit on their share.', enabled: true, preset: true },
    { id: 'se-8', text: 'Materials purchased become joint property upon installation. Consumable materials (paint, sealant, supplies) are expensed as consumed.', enabled: true, preset: true },
    { id: 'se-9', text: 'The project is complete upon mutual written sign-off. Punch-list items shall be addressed within 14 days of the completion notice.', enabled: true, preset: true },
    { id: 'se-10', text: 'This agreement remains in effect for one year from signing. Renewal requires written consent at least 30 days before expiration.', enabled: true, preset: true },
  ],
  carpool: [
    { id: 'cp-1', text: 'Driving duties rotate weekly. Each driver must arrive at designated pickup points within a 5-minute window.', enabled: true, preset: true },
    { id: 'cp-2', text: 'Fuel costs shall be split equally among all regular participants and settled every Friday using a shared expense tracking app.', enabled: true, preset: true },
    { id: 'cp-3', text: 'Tolls and parking fees incurred during the commute shall be split equally and included in the weekly settlement.', enabled: true, preset: true },
    { id: 'cp-4', text: 'Routine maintenance (oil changes, tire rotations, car washes) shall be split among participants. Major repairs remain the vehicle owner\'s responsibility.', enabled: true, preset: true },
    { id: 'cp-5', text: 'All participants must maintain valid driver\'s licenses and personal auto insurance. Proof of insurance shall be provided upon request.', enabled: true, preset: true },
    { id: 'cp-6', text: 'Vehicles shall be kept clean. Eating is permitted only with the driver\'s consent. All personal items must be removed upon exiting the vehicle.', enabled: true, preset: true },
    { id: 'cp-7', text: 'Schedule changes require at least 60 minutes notice via group chat. Three or more last-minute cancellations in a month result in loss of carpool privileges.', enabled: true, preset: true },
    { id: 'cp-8', text: 'If a driver cannot fulfill their rotation due to illness or emergency, they must notify the group immediately. The next driver in rotation shall cover.', enabled: true, preset: true },
    { id: 'cp-9', text: 'In a traffic accident, each party relies on their own insurance as primary coverage. This is not a commercial transportation contract.', enabled: true, preset: true },
    { id: 'cp-10', text: 'New participants may join only with unanimous consent of existing members. The group shall not exceed 5 regular participants.', enabled: true, preset: true },
  ],
};

const DEFAULT_BASIC_INFO: BasicInfo = {
  roommateA: '',
  roommateB: '',
  leaseStart: '',
  address: '',
};

const DEFAULT_SIGNATURES: Signatures = {
  signatureA: '',
  signatureB: '',
  signatureAData: '',
  signatureBData: '',
  dateA: '',
  dateB: '',
};

export default function App() {
  const [docType, setDocType] = useState<DocumentType>('roommate');
  const [basicInfo, setBasicInfo] = useState<BasicInfo>(DEFAULT_BASIC_INFO);
  const [clauses, setClauses] = useState<Clause[]>(CLAUSE_TEMPLATES['roommate']);
  const [signatures, setSignatures] = useState<Signatures>(DEFAULT_SIGNATURES);
  const [legalPage, setLegalPage] = useState<LegalPageType | null>(null);

  function handleDocTypeChange(newType: DocumentType) {
    setDocType(newType);
    // Load the 10 preset clauses for the selected document type
    setClauses(CLAUSE_TEMPLATES[newType]);
  }

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
                setDocType={handleDocTypeChange}
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
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-400 tracking-wide uppercase shadow-sm shadow-emerald-500/10">
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 1L8 8" />
                  <path d="M8 8L13 5" />
                  <path d="M8 8L3 5" />
                  <path d="M3 9L8 12L13 9" />
                  <path d="M3 12L8 15L13 12" />
                </svg>
                Live Document Preview
              </span>
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