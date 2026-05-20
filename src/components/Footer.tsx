import { Shield, FileText, Mail, Info, MessageCircle } from 'lucide-react';
import type { LegalPageType } from './LegalPage';

interface FooterProps {
  onOpenLegal: (page: LegalPageType) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="no-print border-t border-slate-800/80 bg-slate-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Links row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 pb-8 border-b border-slate-800/60">
          {[
            { page: 'about' as LegalPageType, label: 'About', icon: <Info size={13} /> },
            { page: 'contact' as LegalPageType, label: 'Contact', icon: <MessageCircle size={13} /> },
            { page: 'privacy' as LegalPageType, label: 'Privacy Policy', icon: <Shield size={13} /> },
            { page: 'terms' as LegalPageType, label: 'Terms of Service', icon: <FileText size={13} /> },
          ].map(link => (
            <button
              key={link.page}
              onClick={() => onOpenLegal(link.page)}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-500">
              &copy; 2026 FreeChoreContract.com. All rights reserved.
            </span>
          </div>
          <a
            href="mailto:support@freechorecontract.com"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition-colors group"
          >
            <Mail size={13} className="group-hover:text-sky-400 transition-colors" />
            support@freechorecontract.com
          </a>
        </div>
      </div>
    </footer>
  );
}
