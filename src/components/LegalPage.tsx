import { X } from 'lucide-react';

export type LegalPageType = 'privacy' | 'terms' | 'about' | 'contact';

interface LegalPageProps {
  page: LegalPageType | null;
  onClose: () => void;
}

const TITLES: Record<LegalPageType, string> = {
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  about: 'About Us',
  contact: 'Contact Us',
};

export default function LegalPage({ page, onClose }: LegalPageProps) {
  if (!page) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/95 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl mx-4 my-8">
        {/* Close button */}
        <div className="sticky top-0 z-10 flex justify-end pb-4 bg-slate-950/80 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700/60 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-150"
          >
            <X size={16} />
            Close
          </button>
        </div>

        {/* Content card */}
        <div className="bg-slate-900/80 border border-slate-800/60 rounded-2xl p-8 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 pb-4 border-b border-slate-800/60">
            {TITLES[page]}
          </h1>

          <div className="prose prose-invert prose-sm max-w-none text-slate-300 space-y-6">
            {page === 'privacy' && <PrivacyContent />}
            {page === 'terms' && <TermsContent />}
            {page === 'about' && <AboutContent />}
            {page === 'contact' && <ContactContent />}
          </div>
        </div>

        <div className="h-8" />
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <>
      <p className="text-slate-400 leading-relaxed">
        <strong className="text-slate-200">Effective Date:</strong> May 20, 2026
      </p>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">1. Information We Collect</h2>
        <p className="text-slate-400 leading-relaxed">
          FreeChoreContract.com ("the Website," "we," "us," or "our") is committed to protecting your privacy. 
          Our contract generator tool operates entirely within your browser. All form inputs, data selections, 
          roommate names, addresses, lease dates, clause selections, and digital signatures you enter are processed 
          locally on your device. <strong className="text-slate-300">We do not collect, store, transmit, or have 
          access to any of your personal data</strong> — we simply do not have servers that receive your information.
        </p>
        <p className="text-slate-400 leading-relaxed mt-3">
          The only data we may indirectly receive comes from third-party services integrated into the Website:
        </p>
        <ul className="list-disc pl-5 text-slate-400 space-y-1 mt-2">
          <li>
            <strong className="text-slate-300">Google AdSense:</strong> Google may use cookies and web beacons 
            to serve personalized advertisements based on your prior visits to this Website and other sites. 
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit 
            to this site and/or other sites on the Internet.
          </li>
          <li>
            <strong className="text-slate-300">Google Fonts:</strong> When you load the Website, your browser 
            requests font files from Google's servers. Google may log standard server access information 
            (IP address, browser type) for font delivery purposes.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">2. Cookies and Tracking Technologies</h2>
        <p className="text-slate-400 leading-relaxed">
          Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our 
          Website. Google's use of the DoubleClick cookie enables it and its partners to serve ads to users 
          based on their visit to this Website and/or other sites on the Internet.
        </p>
        <p className="text-slate-400 leading-relaxed mt-3">
          Users may opt out of personalized advertising by visiting 
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline mx-1">
            Google Ads Settings
          </a>
          or by visiting 
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline mx-1">
            www.aboutads.info
          </a>.
        </p>
        <p className="text-slate-400 leading-relaxed mt-3">
          You can also disable cookies through your browser settings. However, doing so may affect the 
          functionality of certain features on the Website.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">3. How We Use Information</h2>
        <p className="text-slate-400 leading-relaxed">
          Since we do not collect personal data directly, we have no information to use, share, or sell. 
          Third-party services (Google AdSense) may use data they collect independently in accordance with 
          their own privacy policies:
        </p>
        <ul className="list-disc pl-5 text-slate-400 space-y-1 mt-2">
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline">
              How Google Uses Information From Sites That Use Our Services
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">4. Data Security</h2>
        <p className="text-slate-400 leading-relaxed">
          Because all tool functionality runs locally in your browser, there is no server-side storage of your 
          data, no database to breach, and no cloud infrastructure where your personal information could be 
          compromised. Your contract data exists only on your device during your active browsing session and 
          is cleared when you close or refresh the page.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">5. Children's Privacy</h2>
        <p className="text-slate-400 leading-relaxed">
          The Website is not directed to individuals under 13 years of age. We do not knowingly collect 
          personal information from children under 13. If you are a parent or guardian and believe your child 
          has provided us with personal information, please contact us and we will take steps to delete 
          such information.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">6. Changes to This Policy</h2>
        <p className="text-slate-400 leading-relaxed">
          We reserve the right to update or change this Privacy Policy at any time. Changes will be posted on 
          this page with an updated effective date. Your continued use of the Website after any modifications 
          constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">7. Contact Information</h2>
        <p className="text-slate-400 leading-relaxed">
          If you have questions about this Privacy Policy, please contact us at 
          <a href="mailto:support@freechorecontract.com" className="text-sky-400 hover:text-sky-300 underline ml-1">
            support@freechorecontract.com
          </a>.
        </p>
      </section>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <p className="text-slate-400 leading-relaxed">
        <strong className="text-slate-200">Effective Date:</strong> May 20, 2026
      </p>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">1. Acceptance of Terms</h2>
        <p className="text-slate-400 leading-relaxed">
          By accessing or using FreeChoreContract.com ("the Website"), you agree to be bound by these Terms 
          of Service. If you do not agree to these terms, please do not use the Website.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">2. Description of Service</h2>
        <p className="text-slate-400 leading-relaxed">
          FreeChoreContract.com provides a free, web-based tool that allows users to generate printable 
          roommate agreements, chore contracts, fridge treaties, and pet addendums. All document generation 
          is performed locally in your browser. We do not store, access, or retain any of your inputs or 
          generated documents on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">3. No Legal Advice</h2>
        <p className="text-slate-400 leading-relaxed">
          <strong className="text-slate-300">
            The document templates and agreements generated by this Website are for interpersonal 
            accountability and informational purposes only.
          </strong> They do not constitute professional legal advice, nor do they establish an 
          attorney-client relationship. Laws vary by jurisdiction, and agreements generated through 
          this tool may not be suitable for all legal situations. We strongly recommend consulting 
          a qualified attorney for legal matters involving binding contracts, property disputes, 
          or any situation with potential legal consequences.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">4. Limitation of Liability</h2>
        <p className="text-slate-400 leading-relaxed">
          The Website and its operators disclaim all liability for any losses, damages, disputes, or 
          legal issues arising from the use of generated documents or templates. This includes, without 
          limitation:
        </p>
        <ul className="list-disc pl-5 text-slate-400 space-y-1 mt-2">
          <li>Rental disputes or eviction proceedings</li>
          <li>Security deposit claims or property damage disagreements</li>
          <li>Financial losses of any kind</li>
          <li>Disputes between roommates, landlords, or third parties</li>
          <li>Any indirect, incidental, or consequential damages</li>
        </ul>
        <p className="text-slate-400 leading-relaxed mt-3">
          The Website is provided "as is" without warranties of any kind, either express or implied.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">5. User Responsibilities</h2>
        <p className="text-slate-400 leading-relaxed">
          You are solely responsible for the content you generate using the Website and for verifying 
          the accuracy, completeness, and legal appropriateness of any document before signing or 
          relying upon it. You agree not to use the Website for any unlawful purpose or in violation 
          of any applicable laws or regulations.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">6. Intellectual Property</h2>
        <p className="text-slate-400 leading-relaxed">
          All content, design, code, and text on the Website is protected by applicable copyright and 
          intellectual property laws. You may use the generated documents for personal, non-commercial 
          purposes. You may not reproduce, distribute, or sell the Website's content or templates without 
          express permission.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">7. Third-Party Services</h2>
        <p className="text-slate-400 leading-relaxed">
          The Website uses third-party services including Google AdSense for advertising and Google Fonts 
          for typography. These services operate under their own terms and privacy policies. We are not 
          responsible for the content, practices, or policies of third-party services.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">8. Changes to Terms</h2>
        <p className="text-slate-400 leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. Changes will be effective 
          immediately upon posting. Your continued use of the Website after modifications constitutes 
          acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">9. Contact</h2>
        <p className="text-slate-400 leading-relaxed">
          For questions regarding these Terms, contact us at 
          <a href="mailto:support@freechorecontract.com" className="text-sky-400 hover:text-sky-300 underline ml-1">
            support@freechorecontract.com
          </a>.
        </p>
      </section>
    </>
  );
}

function AboutContent() {
  return (
    <>
      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">What We Do</h2>
        <p className="text-slate-400 leading-relaxed">
          FreeChoreContract.com is a free, privacy-first web tool that helps roommates create 
          professionally structured, printable co-living agreements. We provide ready-to-use templates 
          for Roommate Agreements, Chore Contracts, Fridge Treaties, and Pet Addendums — all 
          customizable, legally structured, and generated entirely within your browser.
        </p>
        <p className="text-slate-400 leading-relaxed mt-3">
          Our mission is simple: eliminate roommate conflict before it starts by providing clear, 
          documented accountability frameworks that both parties mutually agree to and sign.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Who We Are</h2>
        <p className="text-slate-400 leading-relaxed">
          We are a small, independent team focused on creating practical tools for shared living 
          situations. Co-living is one of the most common sources of daily stress — especially for 
          students, young professionals, and first-time renters. We built FreeChoreContract.com 
          because we believe that clear, written expectations are the single most effective way to 
          maintain peaceful, drama-free shared households.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Why Free &amp; Private</h2>
        <p className="text-slate-400 leading-relaxed">
          We built the entire contract generator to run locally in your browser — no sign-ups, 
          no accounts, no cloud storage, no data collection. Your roommate names, address, 
          clause selections, and digital signatures never leave your device. We monetize solely 
          through non-intrusive display advertising (Google AdSense), which keeps the tool 
          100% free for everyone while protecting your privacy.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Our Values</h2>
        <ul className="list-disc pl-5 text-slate-400 space-y-2">
          <li>
            <strong className="text-slate-300">Privacy First:</strong> All data stays on your device. We 
            have no servers that receive, store, or access your personal information.
          </li>
          <li>
            <strong className="text-slate-300">Free &amp; Accessible:</strong> Core features are completely 
            free. No paywalls, no premium tiers — everyone deserves access to clear co-living agreements.
          </li>
          <li>
            <strong className="text-slate-300">Practical, Not Legal:</strong> Our documents are designed 
            for interpersonal accountability, not courtroom litigation. We encourage users to seek 
            professional legal counsel for binding legal matters.
          </li>
          <li>
            <strong className="text-slate-300">Transparency:</strong> We clearly disclose our monetization 
            methods and data practices so you always know how your information is handled.
          </li>
        </ul>
      </section>
    </>
  );
}

function ContactContent() {
  return (
    <>
      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Get in Touch</h2>
        <p className="text-slate-400 leading-relaxed">
          We welcome feedback, questions, and suggestions. Whether you've found a bug, have a feature 
          request, or need help using the tool — reach out and we'll respond as quickly as possible.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Email</h2>
        <p className="text-slate-400 leading-relaxed">
          Send us an email at 
          <a href="mailto:support@freechorecontract.com" className="text-sky-400 hover:text-sky-300 underline ml-1">
            support@freechorecontract.com
          </a>
        </p>
        <p className="text-slate-500 text-sm mt-2">
          We typically respond within 24-48 hours on business days.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Website</h2>
        <p className="text-slate-400 leading-relaxed">
          <a href="https://www.freechorecontract.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline">
            www.freechorecontract.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-200 mb-3">Common Topics</h2>
        <ul className="list-disc pl-5 text-slate-400 space-y-2">
          <li><strong className="text-slate-300">Feature Requests:</strong> We love hearing ideas for new document types or clause templates.</li>
          <li><strong className="text-slate-300">Bug Reports:</strong> If something isn't working right, let us know with as much detail as possible.</li>
          <li><strong className="text-slate-300">Privacy Concerns:</strong> Questions about how we handle data? Check our Privacy Policy or email us directly.</li>
          <li><strong className="text-slate-300">Press &amp; Media:</strong> Interested in covering FreeChoreContract.com? Email us for media inquiries.</li>
        </ul>
      </section>
    </>
  );
}