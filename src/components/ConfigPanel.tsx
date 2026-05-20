import { useState } from 'react';
import { Plus, Trash2, FileText, ClipboardList, Refrigerator as RefrigeratorIcon, PawPrint, Fence, Handshake, Key, Receipt, Car, CheckSquare, Square } from 'lucide-react';
import type { BasicInfo, Clause, DocumentType } from '../types';

interface ConfigPanelProps {
  docType: DocumentType;
  setDocType: (t: DocumentType) => void;
  basicInfo: BasicInfo;
  setBasicInfo: (info: BasicInfo) => void;
  clauses: Clause[];
  setClauses: (c: Clause[]) => void;
}

const DOC_TYPES: { id: DocumentType; label: string; icon: React.ReactNode }[] = [
  { id: 'roommate', label: 'Roommate Agreement', icon: <FileText size={16} /> },
  { id: 'chore', label: 'Chore Contract', icon: <ClipboardList size={16} /> },
  { id: 'fridge', label: 'Fridge Treaty', icon: <RefrigeratorIcon size={16} /> },
  { id: 'pet', label: 'Pet Addendum', icon: <PawPrint size={16} /> },
  { id: 'neighbor', label: 'Neighbor Agreement', icon: <Fence size={16} /> },
  { id: 'lending', label: 'Lending Agreement', icon: <Handshake size={16} /> },
  { id: 'housesitting', label: 'House Sitting Agreement', icon: <Key size={16} /> },
  { id: 'shared-expense', label: 'Shared Expense Agreement', icon: <Receipt size={16} /> },
  { id: 'carpool', label: 'Car Pool Agreement', icon: <Car size={16} /> },
];

export default function ConfigPanel({
  docType,
  setDocType,
  basicInfo,
  setBasicInfo,
  clauses,
  setClauses,
}: ConfigPanelProps) {
  const [customInput, setCustomInput] = useState('');

  function toggleClause(id: string) {
    setClauses(clauses.map(c => c.id === id ? { ...c, enabled: !c.enabled } : c));
  }

  function deleteClause(id: string) {
    setClauses(clauses.filter(c => c.id !== id));
  }

  function addCustomClause() {
    const text = customInput.trim();
    if (!text) return;
    const newClause: Clause = {
      id: `custom-${Date.now()}`,
      text,
      enabled: true,
      preset: false,
    };
    setClauses([...clauses, newClause]);
    setCustomInput('');
  }

  function handleInfoChange(field: keyof BasicInfo, value: string) {
    setBasicInfo({ ...basicInfo, [field]: value });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Document Type Selector */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          Document Type
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {DOC_TYPES.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setDocType(id)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 border ${
                docType === id
                  ? 'bg-sky-500/20 border-sky-500/60 text-sky-300'
                  : 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              <span className={docType === id ? 'text-sky-400' : 'text-slate-500'}>{icon}</span>
              <span className="leading-tight">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Basic Info */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          Parties & Property
        </h2>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Roommate A</label>
              <input
                type="text"
                placeholder="Full name"
                value={basicInfo.roommateA}
                onChange={e => handleInfoChange('roommateA', e.target.value)}
                className="w-full bg-slate-800/70 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1.5 font-medium">Roommate B</label>
              <input
                type="text"
                placeholder="Full name"
                value={basicInfo.roommateB}
                onChange={e => handleInfoChange('roommateB', e.target.value)}
                className="w-full bg-slate-800/70 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/30 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium">Lease Start Date</label>
            <input
              type="date"
              value={basicInfo.leaseStart}
              onChange={e => handleInfoChange('leaseStart', e.target.value)}
              className="w-full bg-slate-800/70 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/30 transition-colors [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium">Shared Property Address</label>
            <input
              type="text"
              placeholder="123 Main St, Apt 2B, City, State 00000"
              value={basicInfo.address}
              onChange={e => handleInfoChange('address', e.target.value)}
              className="w-full bg-slate-800/70 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/30 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Clauses */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
          Agreement Clauses
        </h2>
        <div className="flex flex-col gap-2">
          {clauses.map(clause => (
            <div
              key={clause.id}
              className={`group flex items-start gap-2.5 px-3 py-2.5 rounded-lg border transition-all duration-150 ${
                clause.enabled
                  ? 'bg-slate-800/50 border-slate-700/50'
                  : 'bg-slate-900/30 border-slate-800/40 opacity-50'
              }`}
            >
              <button
                onClick={() => toggleClause(clause.id)}
                className="mt-0.5 flex-shrink-0 text-sky-400 hover:text-sky-300 transition-colors"
                aria-label={clause.enabled ? 'Disable clause' : 'Enable clause'}
              >
                {clause.enabled ? <CheckSquare size={16} /> : <Square size={16} className="text-slate-600" />}
              </button>
              <span className="flex-1 text-xs text-slate-300 leading-relaxed">{clause.text}</span>
              {!clause.preset && (
                <button
                  onClick={() => deleteClause(clause.id)}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-400 transition-all"
                  aria-label="Remove clause"
                >
                  <Trash2 size={13} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add custom clause */}
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            placeholder="Add a custom rule or clause..."
            value={customInput}
            onChange={e => setCustomInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addCustomClause()}
            className="flex-1 bg-slate-800/70 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500/70 focus:ring-1 focus:ring-sky-500/30 transition-colors"
          />
          <button
            onClick={addCustomClause}
            className="flex items-center gap-1 px-3 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-sm font-semibold transition-colors flex-shrink-0"
            aria-label="Add clause"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
      </section>
    </div>
  );
}
