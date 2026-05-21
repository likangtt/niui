import type { BasicInfo, Clause, Signatures, DocumentType } from '../types';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import ESignaturePad from './ESignaturePad';

interface DocumentPreviewProps {
  docType: DocumentType;
  basicInfo: BasicInfo;
  clauses: Clause[];
  signatures: Signatures;
  setSignatures: (s: Signatures) => void;
  setClauses: (c: Clause[]) => void;
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
  setClauses,
}: DocumentPreviewProps) {
  const [previewEditId, setPreviewEditId] = useState<string | null>(null);
  const [previewEditText, setPreviewEditText] = useState('');
  const nameA = basicInfo.roommateA || 'Party A';
  const nameB = basicInfo.roommateB || 'Party B';
  const address = basicInfo.address || '[Property Address Not Provided]';
  const leaseDate = formatDate(basicInfo.leaseStart);
  const enabledClauses = clauses.filter(c => c.enabled);
  const today = formatDate(new Date().toISOString().split('T')[0]);

  function startPreviewEdit(clause: Clause) {
    setPreviewEditId(clause.id);
    setPreviewEditText(clause.text);
  }

  function savePreviewEdit() {
    if (previewEditId && previewEditText.trim()) {
      setClauses(clauses.map(c => c.id === previewEditId ? { ...c, text: previewEditText.trim() } : c));
    }
    setPreviewEditId(null);
    setPreviewEditText('');
  }

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
            {enabledClauses.slice(0, 10).map((clause, i) => (
              <li key={clause.id} className="group flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 mt-0.5">
                  {i + 1}
                </span>
                {clause.id === previewEditId ? (
                  <div className="flex-1 flex flex-col gap-1.5">
                    <input
                      type="text"
                      value={previewEditText}
                      onChange={e => setPreviewEditText(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') savePreviewEdit();
                        if (e.key === 'Escape') { setPreviewEditId(null); setPreviewEditText(''); }
                      }}
                      className="w-full bg-white border border-sky-300 rounded px-2 py-1 text-xs text-slate-700 focus:outline-none focus:border-sky-400"
                      autoFocus
                    />
                    <div className="flex gap-1.5">
                      <button onClick={savePreviewEdit} className="text-[10px] px-2 py-0.5 bg-sky-500 text-white rounded hover:bg-sky-600">Save</button>
                      <button onClick={() => { setPreviewEditId(null); setPreviewEditText(''); }} className="text-[10px] px-2 py-0.5 bg-slate-200 text-slate-600 rounded hover:bg-slate-300">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="flex-1 text-xs text-slate-700 leading-relaxed">{clause.text}</p>
                    <button
                      onClick={() => startPreviewEdit(clause)}
                      className="no-print flex-shrink-0 opacity-0 group-hover:opacity-100 text-sky-500 hover:text-sky-600 transition-opacity p-0.5 rounded hover:bg-sky-50"
                      aria-label="Edit clause"
                    >
                      <Pencil size={15} />
                    </button>
                  </>
                )}
              </li>
            ))}
            {enabledClauses.length > 10 && (
              <li className="text-xs text-slate-400 italic mt-2 pt-2 border-t border-slate-100">
                ... and {enabledClauses.length - 10} more clauses (view all in the left panel)
              </li>
            )}
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

      {/* E-Signature Block — interactive pads (no-print) */}
      <section className="no-print mb-6">
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          E-Signatures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ESignaturePad
            value={signatures.signatureAData}
            onChange={(dataUrl) => setSignatures({ ...signatures, signatureAData: dataUrl })}
            label={`${nameA} — Party A`}
          />
          <ESignaturePad
            value={signatures.signatureBData}
            onChange={(dataUrl) => setSignatures({ ...signatures, signatureBData: dataUrl })}
            label={`${nameB} — Party B`}
          />
        </div>
      </section>

      {/* Signature Block — printed document */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
          Signatures
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Signature A */}
          <div>
            <div className="border-b-2 border-slate-200 mb-1 pb-1 min-h-[56px] flex items-end justify-center">
              {signatures.signatureAData ? (
                <img src={signatures.signatureAData} alt={`${nameA} signature`} className="max-h-[50px] max-w-full object-contain" />
              ) : (
                <span className="text-slate-300 text-sm italic">Not signed</span>
              )}
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
            <div className="border-b-2 border-slate-200 mb-1 pb-1 min-h-[56px] flex items-end justify-center">
              {signatures.signatureBData ? (
                <img src={signatures.signatureBData} alt={`${nameB} signature`} className="max-h-[50px] max-w-full object-contain" />
              ) : (
                <span className="text-slate-300 text-sm italic">Not signed</span>
              )}
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
