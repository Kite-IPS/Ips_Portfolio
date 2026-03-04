import { Link } from 'react-router-dom';
import ISSUEADDRESSPORTAL from '../../assets/projects/ISSUE-ADDRESS-PORTAL.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconQR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/>
    <rect x="3" y="16" width="5" height="5"/>
    <path d="M21 16h-3v3"/><path d="M18 21h3"/><path d="M21 21v0"/>
    <path d="M10 3h2v2"/><path d="M12 3v4h-2"/><path d="M10 10h4v2h-4z"/>
    <path d="M3 10h4v2H3z"/>
  </svg>
);
const IconSubmit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconSimple = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const IconForward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="15 10 20 15 15 20"/>
    <path d="M4 4v7a4 4 0 0 0 4 4h12"/>
  </svg>
);
const IconNetwork = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="20" r="2"/>
    <circle cx="4" cy="20" r="2"/>
    <line x1="12" y1="6" x2="12" y2="10"/><line x1="10.5" y1="13.5" x2="5.5" y2="18.5"/>
    <line x1="13.5" y1="13.5" x2="18.5" y2="18.5"/>
  </svg>
);
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconMobile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconFast = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconAccess = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconCategory = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M4 6h16"/><path d="M4 10h16"/><path d="M4 14h16"/><path d="M4 18h16"/>
  </svg>
);
const IconForm = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IssueAddressPortal = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                QR Code Access · No Login · Direct ICT Forwarding
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-rose-600">ISSUE ADDRESSAL PORTAL</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Student Technical Issue Reporting System
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A simple, fast web portal that lets students report network connectivity and institutional email issues directly to the ICT team. Access the relevant form by scanning a QR code or clicking directly — no login or installation required.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-rose-600 border border-rose-600 font-medium rounded-md hover:bg-rose-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={ISSUEADDRESSPORTAL} alt="Issue Addressal Portal" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo ─────────────────────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-rose-600 to-rose-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <IconQR />
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-rose-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Open the live portal. Select an issue category — Network or Email — scan or click the QR code, and submit your issue directly to the ICT team via the Google Form.
            </p>
            <a
              href="https://issue-addressal.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-700 font-semibold text-base rounded-lg hover:bg-rose-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open Issue Addressal Portal
            </a>
            <p className="mt-5 text-rose-300 text-sm">
              No login required &nbsp;·&nbsp; issue-addressal.netlify.app
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-rose-50 border-b border-rose-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-rose-400 uppercase tracking-widest mb-4">Scope</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Students Reporting Technical Issues",
              "ICT Support Team",
              "Administrative Staff",
              "Network Connectivity Issues",
              "Institutional Email Issues",
            ].map(r => (
              <span key={r} className="px-4 py-1.5 bg-white border border-rose-200 rounded-full text-sm font-medium text-rose-600 shadow-sm">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features &amp; Benefits</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to report technical issues quickly, accurately, and directly to the right team.</p>
          <div className="w-16 md:w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconQR,
              title: "QR Code Access",
              desc: "Two QR codes on the homepage — one for Network Issues, one for Email Issues. Scan with a mobile device or click directly to open the relevant form instantly.",
            },
            {
              Icon: IconSubmit,
              title: "Direct ICT Forwarding",
              desc: "Once a form is submitted, the issue report is automatically forwarded to the ICT team for review and resolution — no manual routing needed.",
            },
            {
              Icon: IconSimple,
              title: "Simple Guided Forms",
              desc: "Each issue category uses a structured Google Form. Students fill in the required details accurately and click Submit — the process takes under a minute.",
            },
            {
              Icon: IconNetwork,
              title: "Network Issue Reporting",
              desc: "Dedicated form for reporting network connectivity problems — covering Wi-Fi access, connection drops, and related infrastructure issues.",
            },
            {
              Icon: IconEmail,
              title: "Email ID Issue Reporting",
              desc: "Separate form for institutional email account issues — login failures, account setup problems, and email access errors reported directly to ICT.",
            },
            {
              Icon: IconFast,
              title: "Faster Response Time",
              desc: "Direct digital submission to the ICT team eliminates manual complaint handling, reducing delays and improving resolution turnaround time.",
            },
            {
              Icon: IconMobile,
              title: "Mobile &amp; Desktop Access",
              desc: "Fully web-based — accessible from any device with a browser and internet connection. No app installation or account creation required.",
            },
            {
              Icon: IconForward,
              title: "Reduces Manual Handling",
              desc: "The portal replaces paper-based or verbal complaint processes with a centralised digital channel, keeping issue records organised and retrievable.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-rose-50 border border-rose-100 text-rose-600">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-rose-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Three stakeholders, each with a defined responsibility in the issue reporting workflow.</p>
            <div className="w-16 md:w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "Students",
                gradient: "from-rose-600 to-rose-800",
                responsibilities: [
                  "Access the portal at issue-addressal.netlify.app",
                  "Select the appropriate issue category (Network or Email)",
                  "Scan the QR code or click to open the relevant form",
                  "Fill in issue details accurately and submit",
                ],
              },
              {
                role: "ICT Team",
                gradient: "from-red-600 to-red-800",
                responsibilities: [
                  "Receive submitted issue reports from the Google Form",
                  "Review and investigate the reported problems",
                  "Resolve technical issues in a timely manner",
                  "Maintain records of all received issue submissions",
                ],
              },
              {
                role: "Administration",
                gradient: "from-pink-700 to-pink-900",
                responsibilities: [
                  "Ensure the portal remains available and accessible",
                  "Monitor the issue reporting workflow and volume",
                  "Liaise with ICT team on recurring or critical issues",
                  "Maintain portal uptime and update QR codes if URLs change",
                ],
              },
            ].map(({ role, gradient, responsibilities }) => (
              <div key={role} className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden flex flex-col">
                <div className={`bg-gradient-to-r ${gradient} px-6 py-4`}>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Role</span>
                  <h3 className="text-white text-base font-bold mt-0.5">{role}</h3>
                </div>
                <ul className="p-6 space-y-3 flex-1">
                  {responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-500">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Three simple steps from opening the portal to getting your issue resolved by the ICT team.</p>
          <div className="w-16 md:w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              Icon: IconAccess,
              step: 1,
              title: "Access the Portal",
              desc: "Open a web browser and navigate to issue-addressal.netlify.app. The homepage loads instantly — no login, no installation, no account required.",
            },
            {
              Icon: IconCategory,
              step: 2,
              title: "Select Issue Category",
              desc: "Two QR codes are displayed: Network Issue and Email ID Issue. Scan the relevant QR code with your mobile device, or click it directly to open the form.",
            },
            {
              Icon: IconForm,
              step: 3,
              title: "Submit Issue Form",
              desc: "Fill in the required issue details accurately in the Google Form and click Submit. The report is immediately forwarded to the ICT team for review and resolution.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-rose-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-rose-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System Callout ───────────────────────────────────────────────── */}
      <div className="bg-rose-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-rose-200 mb-4 uppercase tracking-widest">System Design</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Minimal Friction, Maximum Reach</h2>
              <p className="text-rose-200 text-base leading-relaxed mb-6">
                The Issue Addressal Portal is intentionally lightweight — a static site hosted on Netlify linking to Google Forms for each issue category. No server, no database, no accounts. QR code access means any student with a smartphone can report an issue in under 60 seconds.
              </p>
              <ul className="space-y-3">
                {[
                  "No login or account creation required — open access",
                  "QR code or direct click to access issue forms",
                  "Google Form responses secured and accessible to ICT only",
                  "Works on any device with a browser and internet connection",
                  "Camera optional — QR codes are also clickable links",
                  "Hosted on Netlify — reliable uptime with zero server management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-rose-200 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Issue Categories", value: "2", sub: "Network · Institutional Email" },
                { label: "Login Required", value: "None", sub: "Open access — no credentials" },
                { label: "Submission", value: "GForm", sub: "Google Form · Auto-forwarded to ICT" },
                { label: "Device Support", value: "Any", sub: "Mobile · Desktop · Tablet" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-rose-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-rose-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Issue Addressal Portal. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">QR Code Issue Reporting · Network &amp; Email Issues · Direct ICT Forwarding</p>
        </div>
      </footer>
    </div>
  );
};

export default IssueAddressPortal;
