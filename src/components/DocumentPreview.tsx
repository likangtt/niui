import type { BasicInfo, Clause, Signatures, DocumentType } from '../types';

interface DocumentPreviewProps {
  docType: DocumentType;
  basicInfo: BasicInfo;
  clauses: Clause[];
  signatures: Signatures;
  setSignatures: (s: Signatures) => void;
}

const DOC_TITLES: Record<DocumentType, string> = {
  roommate: 'Roommate Agreement',
  chore: 'Chore Contract',
  fridge: 'Fridge Treaty',
  pet: 'Pet Addendum',
  neighbor: 'Neighbor Boundary Agreement',
  lending: 'Item Lending Agreement',
  housesitting: 'House Sitting & Key Agreement',
  'shared-expense': 'Shared Expense Agreement',
  carpool: 'Car Pool Agreement',
};

const DOC_SUBTITLES: Record<DocumentType, string> = {
  roommate: 'Peer-to-Peer Co-Tenancy Accountability Agreement',
  chore: 'Shared Household Maintenance Accountability Contract',
  fridge: 'Refrigerator & Pantry Usage Mutual Understanding Treaty',
  pet: 'Pet Ownership & Shared Living Responsibility Addendum',
  neighbor: 'Property Boundary, Noise, & Shared Right-of-Way Understanding',
  lending: 'Personal Property Loan, Damage Liability & Return Conditions Contract',
  housesitting: 'Temporary Property Oversight, Security & Emergency Protocol Agreement',
  'shared-expense': 'Joint Property Maintenance Cost-Sharing & Payment Schedule Contract',
  carpool: 'Ride-Sharing Cost Split, Schedule & Vehicle Maintenance Agreement',
};

function formatDate(iso: string): string {
  if (!iso) return '_______________';
  const [y, m, d] = iso.split('-');
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`;
}

export default function DocumentPreview({
  docType,
  basicInfo,
  clauses,
  signatures,
  setSignatures,
}: DocumentPreviewProps) {
  const nameA = basicInfo.roommateA || 'Party A';
  const nameB = basicInfo.roommateB || 'Party B';
  const address = basicInfo.address || '[Property Address Not Provided]';
  const leaseDate = formatDate(basicInfo.leaseStart);
  const enabledClauses = clauses.filter(c => c.enabled);
  const today = formatDate(new Date().toISOString().split('T')[0]);

  return (
    <div
      id="print-preview"
      className="bg-white text-slate-900 rounded-xl shadow-2xl p-8 md:p-10 font-['Inter',sans-serif] min-h-[80vh] flex flex-col"
    >
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-slate-200">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          <span className="w-8 h-px bg-slate-300 inline-block"></span>
          Official Document
          <span className="w-8 h-px bg-slate-300 inline-block"></span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-1">
          {DOC_TITLES[docType]}
        </h1>
        <p className="text-sm text-slate-500 font-medium">{DOC_SUBTITLES[docType]}</p>
      </div>

      {/* Parties & Property */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          Parties to this Agreement
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
            <p className="text-xs text-slate-400 font-medium mb-0.5">Party A — First Resident</p>
            <p className="text-sm font-semibold text-slate-800">{nameA}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
            <p className="text-xs text-slate-400 font-medium mb-0.5">Party B — Second Resident</p>
            <p className="text-sm font-semibold text-slate-800">{nameB}</p>
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <p className="text-xs text-slate-400 font-medium mb-0.5">Shared Property Address</p>
          <p className="text-sm font-semibold text-slate-800">{address}</p>
        </div>
        <p className="text-xs text-slate-500 mt-3 leading-relaxed">
          This agreement is entered into as of <span className="font-semibold text-slate-700">{leaseDate}</span>, by and between {nameA} ("Party A") and {nameB} ("Party B"), collectively referred to herein as "the Residents," pertaining to the shared residential premises located at the address stated above.
        </p>
      </section>

      {/* Preamble */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          Preamble
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          The Residents mutually acknowledge that harmonious co-living requires clear, documented expectations. Both parties voluntarily enter into this agreement to establish fair standards for shared household responsibilities. The undersigned Residents agree to uphold the following terms in good faith and with mutual respect. Failure to comply with these terms may be used as supporting documentation in formal landlord mediation or small claims dispute processes.
        </p>
      </section>

      {/* Clauses */}
      <section className="mb-6 flex-1">
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          Terms &amp; Conditions
        </h2>
        {enabledClauses.length === 0 ? (
          <p className="text-xs text-slate-400 italic">No clauses selected. Enable clauses from the dashboard on the left.</p>
        ) : (
          <ol className="flex flex-col gap-2.5">
            {enabledClauses.map((clause, i) => (
              <li key={clause.id} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">{clause.text}</p>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* Acknowledgment */}
      <section className="mb-6">
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-xs text-slate-600 leading-relaxed">
            By signing below, both Residents acknowledge that they have read, understood, and agreed to abide by all terms set forth in this {DOC_TITLES[docType]}. This document was generated on <span className="font-semibold">{today}</span> and is intended to serve as a record of mutual understanding between co-residents.
          </p>
        </div>
      </section>

      {/* Signature Block */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
          Signatures
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Signature A */}
          <div>
            <div className="border-b-2 border-slate-200 mb-1 pb-1 min-h-[48px] flex items-end">
              <input
                type="text"
                placeholder={`Sign as ${nameA}`}
                value={signatures.signatureA}
                onChange={e => setSignatures({ ...signatures, signatureA: e.target.value })}
                className="signature-font w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-300 text-xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.4rem' }}
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium mb-2">{nameA} — Party A Signature</p>
            <div className="border-b border-slate-200 mb-1 pb-1">
              <input
                type="date"
                value={signatures.dateA}
                onChange={e => setSignatures({ ...signatures, dateA: e.target.value })}
                className="w-full bg-transparent border-none outline-none text-xs text-slate-600 focus:outline-none [color-scheme:light]"
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Date</p>
          </div>

          {/* Signature B */}
          <div>
            <div className="border-b-2 border-slate-200 mb-1 pb-1 min-h-[48px] flex items-end">
              <input
                type="text"
                placeholder={`Sign as ${nameB}`}
                value={signatures.signatureB}
                onChange={e => setSignatures({ ...signatures, signatureB: e.target.value })}
                className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-300"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.4rem' }}
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium mb-2">{nameB} — Party B Signature</p>
            <div className="border-b border-slate-200 mb-1 pb-1">
              <input
                type="date"
                value={signatures.dateB}
                onChange={e => setSignatures({ ...signatures, dateB: e.target.value })}
                className="w-full bg-transparent border-none outline-none text-xs text-slate-600 focus:outline-none [color-scheme:light]"
              />
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Date</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-300 tracking-wider">
            Generated by FreeChoreContract.com &nbsp;&middot;&nbsp; For personal accountability purposes only &nbsp;&middot;&nbsp; Not a substitute for legal counsel
          </p>
        </div>
      </section>
    </div>
  );
}
