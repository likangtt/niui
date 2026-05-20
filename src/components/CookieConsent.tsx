import { useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie-consent'));

  function accept() {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="no-print fixed bottom-0 left-0 right-0 z-[99] p-4 bg-slate-900/95 border-t border-slate-700/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
          We use cookies to serve personalized advertisements via Google AdSense and to analyze site traffic. 
          By clicking "Accept", you consent to our use of cookies. 
          <button
            onClick={accept}
            className="text-sky-400 hover:text-sky-300 underline ml-1"
          >
            Read our Privacy Policy
          </button>
          {' '}for more details.
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-sky-500/20"
        >
          Accept
        </button>
      </div>
    </div>
  );
}