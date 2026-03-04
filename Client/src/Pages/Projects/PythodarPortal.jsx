import { Link } from 'react-router-dom';
import PYTHODARPORTAL from '../../assets/projects/PYTHODAR-PORTAL.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconIdea = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v2M12 16v2M6 12H4M20 12h-2"/>
    <path d="M9 9l1.5 1.5M13.5 13.5L15 15M15 9l-1.5 1.5M10.5 13.5L9 15"/>
  </svg>
);
const IconPDF = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="13" y2="17"/>
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IconForm = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="8" y1="8" x2="16" y2="8"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
    <line x1="8" y1="16" x2="12" y2="16"/>
  </svg>
);
const IconNoDB = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    <line x1="4" y1="4" x2="20" y2="20" strokeDasharray="2 2"/>
  </svg>
);
const IconStudent = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconFast = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const IconStandard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);
const IconOpen = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconEnterDetails = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconDescribe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconGenerate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const PythodarPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style>{`
        @media (max-width: 640px) {
          .hero-title { font-size: 2.25rem; line-height: 2.5rem; }
          .hero-subtitle { font-size: 1.25rem; line-height: 1.75rem; }
          .hero-buttons { flex-direction: column; gap: 0.75rem; }
          .hero-buttons a { width: 100%; text-align: center; }
        }
        @media (max-width: 768px) {
          .section-title { font-size: 2rem; line-height: 2.25rem; }
          .section-text { font-size: 1rem; line-height: 1.5rem; }
          .feature-title { font-size: 1.25rem; }
        }
        @media (max-width: 480px) {
          .process-step { padding: 1rem; }
          .step-number { width: 2.5rem; height: 2.5rem; font-size: 1.25rem; }
        }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                React · PDF Generation · No Database Required
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-indigo-700">PYTHODAR PORTAL</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Pythodar Idea Submission &amp; Proposal Generator
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A student-facing portal for the Pythodar event that collects individual innovative idea details and instantly generates a structured, print-ready Idea Proposal PDF — no database, no accounts, no wait.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white font-medium rounded-md hover:bg-indigo-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-700 border border-indigo-700 font-medium rounded-md hover:bg-indigo-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Try Live Portal
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={PYTHODARPORTAL} alt="Pythodar Idea Portal" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo / Deployed Link ─────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-indigo-700 to-indigo-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <IconOpen />
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Submit Your Idea</h2>
            <p className="text-indigo-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Open the live portal, enter your idea details, and instantly generate and download your structured Idea Proposal PDF — ready for Pythodar submission.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-800 font-semibold text-base rounded-lg hover:bg-indigo-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 8 16 12 12 16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open Pythodar Portal
            </a>
            <p className="mt-5 text-indigo-300 text-sm">
              No login required &nbsp;·&nbsp; Works on any device &nbsp;·&nbsp; PDF downloads instantly
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-indigo-50 border-b border-indigo-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">Built for the Pythodar Event</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pythodar Participants","Idea Submission","PDF Generation","Event Coordinators","Individual Students","KGSL Institute of Technology"].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white border border-indigo-200 rounded-full text-sm font-medium text-indigo-700 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features &amp; Benefits</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-4">A lightweight, friction-free tool that turns raw ideas into professional proposal documents.</p>
          <div className="w-16 md:w-24 h-1 bg-indigo-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconIdea,
              title: "Idea Proposal Generation",
              desc: "Enter your innovative idea details once and the system formats them into a complete, structured Idea Proposal document automatically.",
            },
            {
              Icon: IconPDF,
              title: "Instant PDF Output",
              desc: "A single click on 'Generate Proposal PDF' creates a professional, print-ready document containing all student and idea details.",
            },
            {
              Icon: IconNoDB,
              title: "Zero Database Dependency",
              desc: "No database, no login, no accounts. The system operates entirely client-side — the proposal exists only in the generated PDF.",
            },
            {
              Icon: IconStandard,
              title: "Standardized Format",
              desc: "Every proposal follows the same institutional format — ensuring fairness and consistency across all Pythodar idea submissions.",
            },
            {
              Icon: IconForm,
              title: "Structured Two-Section Form",
              desc: "The portal is split into Student Information and Idea Information sections, guiding students through a clear, complete submission.",
            },
            {
              Icon: IconDownload,
              title: "Instant Download",
              desc: "Generated PDFs are available for immediate download — students save and submit directly to the event coordinator without any upload step.",
            },
            {
              Icon: IconFast,
              title: "No Wait, No Sign-Up",
              desc: "Open the portal, fill the form, click generate — the entire process takes under two minutes with no registration or authentication needed.",
            },
            {
              Icon: IconStudent,
              title: "Student-Centric Design",
              desc: "Built for individual student participation — collects name, register number, department, year, college, email, mobile, and full idea details.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <div className="bg-indigo-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Five simple steps from opening the portal to downloading your proposal.</p>
            <div className="w-16 md:w-24 h-1 bg-indigo-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { Icon: IconOpen,         step: 1, title: "Open the Portal",       desc: "Open the Pythodar Portal in any web browser on a computer or laptop." },
              { Icon: IconEnterDetails, step: 2, title: "Enter Student Details",  desc: "Fill in Name, Register Number, Department, Year, College, Email, and Mobile Number." },
              { Icon: IconDescribe,     step: 3, title: "Describe Your Idea",    desc: "Enter the Idea Title, Problem Statement, and a detailed Idea Description." },
              { Icon: IconGenerate,     step: 4, title: "Generate PDF",          desc: "Click 'Generate Proposal PDF' — the system instantly creates your formatted proposal document." },
              { Icon: IconDownload,     step: 5, title: "Download & Submit",     desc: "Download the PDF, save it locally, and submit to the Pythodar event coordinator." },
            ].map(({ Icon, step, title, desc }) => (
              <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-indigo-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step}
                  </div>
                  <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
                </div>
                <div className="text-indigo-600"><Icon /></div>
                <div>
                  <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PDF Contents Callout ──────────────────────────────────────────── */}
      <div className="bg-indigo-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200 mb-4 uppercase tracking-widest">Generated Document</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What's Inside the Proposal PDF</h2>
              <p className="text-indigo-200 text-base leading-relaxed mb-6">
                The generated PDF is a complete, institutionally formatted document ready for direct submission. Every field the student enters appears in the standard Pythodar proposal layout.
              </p>
              <ul className="space-y-3">
                {[
                  "Student personal details — Name, Roll No., Register No., Department, Year",
                  "College Name and contact information (Email & Mobile)",
                  "Idea Title — clearly highlighted",
                  "Problem Statement — concise problem being solved",
                  "Detailed Idea Description — the full innovative concept",
                  "Standardized header with Pythodar event branding",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-indigo-200 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Database Required", value: "None", sub: "Fully client-side — zero backend storage" },
                { label: "Form Sections", value: "2", sub: "Student Information · Idea Information" },
                { label: "Idea Fields", value: "3", sub: "Title · Problem Statement · Description" },
                { label: "Output", value: "PDF", sub: "Instant download · Print-ready proposal" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-indigo-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-indigo-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── System Requirements ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">System Requirements</h2>
          <div className="w-16 md:w-24 h-1 bg-indigo-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Computer or Laptop",       detail: "Any modern device capable of running a web browser.",              icon: "💻" },
            { title: "Web Browser",              detail: "Latest version of Chrome, Edge, Firefox, or Safari.",              icon: "🌐" },
            { title: "PDF Generation Support",   detail: "Built into the portal — no additional software installation needed.", icon: "📄" },
            { title: "No Database Required",     detail: "The system has no backend storage. Ideas exist only in the PDF.",   icon: "🚫" },
            { title: "Printer (Optional)",       detail: "For physical submission of the proposal to the event coordinator.", icon: "🖨️" },
            { title: "Internet Connection",      detail: "Needed to access the portal. PDF generation works entirely in-browser.", icon: "📶" },
          ].map(({ title, detail, icon }) => (
            <div key={title} className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex items-start gap-4 hover:shadow-lg transition">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <h3 className="text-gray-800 font-semibold text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Pythodar Idea Portal. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Built with React · Client-side PDF Generation · No Database Required</p>
        </div>
      </footer>
    </div>
  );
};

export default PythodarPortal;
