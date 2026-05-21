import { useState } from 'react';
import { FileText, ClipboardList, Refrigerator as RefrigeratorIcon, PawPrint, Fence, Handshake, Key, Receipt, Car, Plus, CheckSquare, Square, Trash2, Pencil } from 'lucide-react';
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
  const [clausesExpanded, setClausesExpanded] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  function handleInfoChange(field: keyof BasicInfo, value: string) {
    setBasicInfo({ ...basicInfo, [field]: value });
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

  function toggleClause(id: string) {
    setClauses(clauses.map(c => c.id === id ? { ...c, enabled: !c.enabled } : c));
  }

  function deleteClause(id: string) {
    setClauses(clauses.filter(c => c.id !== id));
  }

  function startEdit(clause: Clause) {
    setEditingId(clause.id);
    setEditText(clause.text);
  }

  function saveEdit() {
    if (editingId && editText.trim()) {
      setClauses(clauses.map(c => c.id === editingId ? { ...c, text: editText.trim() } : c));
    }
    setEditingId(null);
    setEditText('');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditText('');
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

        {/* Agreement Clauses — compact grid */}
        <div className="mt-4">
          <h3 className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase mb-2">
            Agreement Clauses
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {(clausesExpanded
              ? clauses.filter(c => c.enabled)
              : clauses.filter(c => c.enabled).slice(0, 6)
            ).map(clause => (
              <div
                key={clause.id}
                className="group flex items-start gap-2 px-3 py-3 rounded-lg border border-slate-700/50 bg-slate-800/40 transition-all duration-150"
              >
                {clause.id === editingId ? (
                /* Editing mode */
                <div className="flex flex-col gap-1.5 w-full">
                  <input
                    type="text"
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') saveEdit();
                      if (e.key === 'Escape') cancelEdit();
                    }}
                    className="w-full bg-slate-900/80 border border-sky-500/50 rounded-md px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-400 transition-colors"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="text-[10px] px-2.5 py-1 bg-sky-500/20 text-sky-400 rounded hover:bg-sky-500/30 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-[10px] px-2.5 py-1 bg-slate-700/50 text-slate-400 rounded hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                /* View mode */
                <>
                  <button
                    onClick={() => toggleClause(clause.id)}
                    className="mt-0.5 flex-shrink-0 text-sky-400 hover:text-sky-300 transition-colors"
                    aria-label="Disable clause"
                  >
                    <CheckSquare size={15} />
                  </button>
                  <span className="flex-1 text-xs text-slate-300 leading-relaxed">{clause.text}</span>
                  <button
                    onClick={() => startEdit(clause)}
                    className="flex-shrink-0 text-sky-400 hover:text-sky-300 transition-colors ml-auto"
                    aria-label="Edit clause"
                  >
                    <Pencil size={15} />
                  </button>
                  {!clause.preset && (
                    <button
                      onClick={() => deleteClause(clause.id)}
                      className="flex-shrink-0 text-slate-600 hover:text-red-400 transition-colors"
                      aria-label="Remove clause"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </>
              )}
              </div>
            ))}
          </div>
          {clauses.filter(c => c.enabled).length > 6 && (
            <button
              onClick={() => setClausesExpanded(!clausesExpanded)}
              className="text-[11px] text-sky-400 hover:text-sky-300 mt-1.5 w-full text-center transition-colors"
            >
              {clausesExpanded
                ? 'Show less'
                : `+${clauses.filter(c => c.enabled).length - 6} more enabled — click to expand`
              }
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
