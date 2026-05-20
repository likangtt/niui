import { useState } from 'react';
import { Share2, Link2, Check, Heart } from 'lucide-react';

const SHARE_URL = 'https://www.freechorecontract.com';
const SHARE_TITLE = 'Free Roommate Agreement & Chore Contract Generator';
const SHARE_TEXT = 'Finally — a free tool that actually settles roommate arguments before they start. Generate a printable chore contract in seconds.';

const PLATFORMS = [
  {
    name: 'Twitter / X',
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Reddit',
    href: `https://www.reddit.com/submit?url=${encodeURIComponent(SHARE_URL)}&title=${encodeURIComponent(SHARE_TITLE)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.97 2.163 2.164 2.163 1.195 0 2.164-.97 2.164-2.163C22.353 2.97 21.384 2 20.19 2c-.707 0-1.336.34-1.729.867l-4.857-1.138-.006.012-1.794 5.644c-2.78.06-5.285.817-7.135 2.027-.481-.466-1.135-.753-1.855-.753C1.19 8.66 0 9.846 0 11.301c0 1.073.635 2.002 1.555 2.437-.037.288-.061.579-.061.875 0 4.374 5.148 7.947 11.506 7.947S24.506 18.987 24.506 14.613c0-.285-.023-.563-.057-.837.93-.432 1.551-1.365 1.551-2.443v.446zM5.208 13.08c0-1.074.878-1.948 1.956-1.948 1.082 0 1.962.874 1.962 1.948 0 1.076-.88 1.95-1.962 1.95-1.078 0-1.956-.874-1.956-1.95zm9.76 5.05c-1.429 1.422-4.521 1.422-5.956.009-.247-.241-.247-.637 0-.88.247-.243.645-.243.894 0 .952.949 3.178.949 4.156.008.249-.242.653-.242.906 0 .248.243.248.635 0 .863zm-1.528-3.1c-1.082 0-1.962-.874-1.962-1.95 0-1.074.88-1.948 1.962-1.948 1.078 0 1.956.874 1.956 1.948 0 1.076-.878 1.95-1.956 1.95z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: `mailto:?subject=${encodeURIComponent(SHARE_TITLE)}&body=${encodeURIComponent(SHARE_TEXT + '\n\n' + SHARE_URL)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function ShareSection() {
  const [copied, setCopied] = useState(false);

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL });
      } catch {
        // user cancelled
      }
    }
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <div className="no-print mt-6 rounded-xl border border-dashed border-slate-700/50 bg-slate-900/40 p-5 md:p-6">
      {/* CTA heading */}
      <div className="flex items-center gap-2 mb-4">
        <Heart size={14} className="text-rose-400 flex-shrink-0" />
        <p className="text-sm text-slate-300 font-medium leading-snug">
          Know someone who'd find this useful?{' '}
          <span className="text-slate-500 font-normal">Send it their way. Good roommates share good tools.</span>
        </p>
      </div>

      {/* Share buttons row */}
      <div className="flex flex-wrap items-center gap-2">
        {PLATFORMS.map(platform => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${platform.name}`}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/70 hover:bg-slate-700/60 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-all duration-150"
          >
            {platform.icon}
            <span className="hidden sm:inline">{platform.name}</span>
          </a>
        ))}

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 ${
            copied
              ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
              : 'bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/70 hover:bg-slate-700/60 text-slate-300 hover:text-white'
          }`}
        >
          {copied ? <Check size={14} /> : <Link2 size={14} />}
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>

        {/* Native share (mobile only) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-3.5 py-2 bg-sky-500/85 hover:bg-sky-500 border border-sky-500/40 text-white rounded-lg text-xs font-medium transition-all duration-150 sm:hidden"
          >
            <Share2 size={14} />
            Share
          </button>
        )}
      </div>
    </div>
  );
}