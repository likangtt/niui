import { Shield, FileText, Mail, ExternalLink } from 'lucide-react';
import type { LegalPageType } from './LegalPage';
import { usePageVariant } from '../pageVariant';

interface FooterProps {
  onOpenLegal: (page: LegalPageType) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const pageVariant = usePageVariant();

  return (
    <footer className="no-print border-t border-slate-800/50 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cross-page link */}
        <div className="flex justify-center mb-8 pb-6 border-b border-slate-800/50">
          {pageVariant === 'family' ? (
            <a
              href="/roommate-chore-contract.html"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition-colors"
            >
              <ExternalLink size={14} />
              Looking for a Roommate Chore Contract? Visit our roommate page →
            </a>
          ) : (
            <a
              href="/"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition-colors"
            >
              <ExternalLink size={14} />
              Looking for a Family Chore Contract? Visit our family page →
            </a>
          )}
        </div>

        {/* Trust & Compliance Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 pb-6 border-b border-slate-800/50">
          <button
            onClick={() => onOpenLegal('privacy')}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
          >
            <Shield size={12} />
            Privacy Policy
          </button>
          <button
            onClick={() => onOpenLegal('terms')}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
          >
            <FileText size={12} />
            Terms of Service
          </button>
          <a
            href="mailto:support@freechorecontract.com"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-sky-400 transition-colors"
          >
            <Mail size={12} />
            Contact Us
          </a>
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Disclaimer: Chore Pact provides free templates for informational purposes only and does not constitute legal advice.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 Chore Pact. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}