import { Link } from 'react-router-dom';
import KGKEYLOG from '../../assets/projects/KG-KEYLOG.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconRFID = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
    <path d="M16 2v5"/><path d="M8 2v5"/><path d="M2 12h20"/>
    <circle cx="12" cy="17" r="1" fill="currentColor"/>
  </svg>
);
const IconKey = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconAudit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconAdmin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="8" r="4"/>
    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9"/>
    <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/>
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <circle cx="12" cy="16" r="1" fill="currentColor"/>
  </svg>
);
const IconLogin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
  </svg>
);
const IconScan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M3 5v4"/><path d="M3 9h4"/><path d="M21 5v4"/><path d="M17 9h4"/>
    <path d="M3 19v-4"/><path d="M3 15h4"/><path d="M21 19v-4"/><path d="M17 15h4"/>
    <rect x="7" y="7" width="10" height="10" rx="1"/>
  </svg>
);
const IconReturn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>
  </svg>
);
const IconEscalate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
);
const IconView = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconPanel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const Kgkeylog = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                RFID Technology · 3-Tier Email Alerts · MongoDB Atlas
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-cyan-600">KG-KEYLOG</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                RFID-Based Lab Key Management System
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A fully digital, RFID-powered lab key tracking system for KGiSL Institute of Technology. Security personnel scan three RFID tags — security, staff, and lab key — to log every key handover and return. A three-tier automated email escalation system ensures overdue keys are reported to the Watchman, staff member, and Chief Authority in sequence, replacing traditional manual registers with a secure, web-based solution.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-600 border border-cyan-600 font-medium rounded-md hover:bg-cyan-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={KGKEYLOG} alt="KG-KEYLOG" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo ─────────────────────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-cyan-600 to-cyan-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <IconKey />
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-cyan-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Access the live KG-KEYLOG system. Security personnel scan RFID tags to issue and return lab keys, while automated email alerts enforce timely returns — all tracked in a permanent audit log.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-700 font-semibold text-base rounded-lg hover:bg-cyan-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open KG-KEYLOG
            </a>
            <p className="mt-5 text-cyan-300 text-sm">
              Deployed on Render &nbsp;·&nbsp; MongoDB Atlas &nbsp;·&nbsp; Valid credentials required
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-cyan-50 border-b border-cyan-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">Scope</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Security Personnel (RFID Desk)",
              "Faculty / Staff Members",
              "System Administrator",
              "Watchman (Alert Tier 1)",
              "Chief Authority (Alert Tier 3)",
              "All Departmental Labs",
            ].map(r => (
              <span key={r} className="px-4 py-1.5 bg-white border border-cyan-200 rounded-full text-sm font-medium text-cyan-600 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">RFID-powered key accountability — from issuance to automated escalation and full audit trail.</p>
          <div className="w-16 md:w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconRFID,
              title: "Triple RFID Key Issuance",
              desc: "Security personnel scan three RFID tags — Security, Staff (Faculty), and Lab Key — to record every key issuance. The system fetches and auto-displays the staff member's name from the database.",
            },
            {
              Icon: IconReturn,
              title: "Automatic Key Return Detection",
              desc: "Scanning the same three RFIDs when a key is returned deletes the temporary log, updates the permanent record to 'Returned' with a timestamp, and stops the active alert timer instantly.",
            },
            {
              Icon: IconAlert,
              title: "Three-Tier Email Alert Escalation",
              desc: "If a key is not returned within configurable time limits, the system automatically emails the Watchman, then the Staff Member directly, then the Chief Authority — each at independently configured intervals.",
            },
            {
              Icon: IconAudit,
              title: "Permanent Audit Log",
              desc: "Every key issuance and return is permanently stored with Security name, Staff name, Lab name, time taken, return time, and status. Records are never deleted — providing a full historical audit trail.",
            },
            {
              Icon: IconDatabase,
              title: "Paginated Key Log Database",
              desc: "The database view displays all permanent key records in a paginated table. Filter by Security, Staff, Lab Key, or Status (Taken/Returned) and navigate with Previous/Next page controls.",
            },
            {
              Icon: IconAdmin,
              title: "Five-Tab Admin Panel",
              desc: "Admins manage Users, Staff, Labs, Security Personnel, and Settings from a single panel — add, edit, or delete records for any entity, and configure alert time limits with live timeline preview.",
            },
            {
              Icon: IconSettings,
              title: "Configurable Alert Time Limits",
              desc: "Administrators set all three alert thresholds in HH:MM format from the Settings tab. A live preview shows the alert schedule, and changes apply immediately to new key pickups without restart.",
            },
            {
              Icon: IconLock,
              title: "Session-Based Auth &amp; RBAC",
              desc: "All system routes are protected by session-based authentication. Admin routes are guarded by a role-based access control decorator — only admin users can manage staff, labs, users, and settings.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-50 border border-cyan-100 text-cyan-600">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-cyan-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Four stakeholders — Security, Staff, Admin, and Authorities — each with clearly defined accountability.</p>
            <div className="w-16 md:w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                role: "Security Personnel",
                gradient: "from-cyan-600 to-cyan-800",
                responsibilities: [
                  "Scan their Security RFID to authenticate at the desk",
                  "Scan Staff and Lab Key RFIDs for each issuance",
                  "Verify system success/error messages after each scan",
                  "Repeat the same scan process for key returns",
                  "Ensure every key movement is digitally recorded",
                ],
              },
              {
                role: "Faculty / Staff",
                gradient: "from-teal-600 to-teal-800",
                responsibilities: [
                  "Present Staff RFID when collecting a lab key",
                  "Present Staff RFID again when returning the key",
                  "Respond promptly to reminder emails for overdue keys",
                  "Ensure keys are returned before configured time limits",
                  "Contact admin for RFID registration or updates",
                ],
              },
              {
                role: "System Administrator",
                gradient: "from-sky-600 to-sky-800",
                responsibilities: [
                  "Manage login user accounts — add, edit, delete, assign roles",
                  "Register staff, lab, and security RFID records",
                  "Configure three-tier alert time limits in Settings tab",
                  "Run seed_db.py for initial system database setup",
                  "Monitor permanent logs and maintain system health",
                ],
              },
              {
                role: "Watchman / Chief Authority",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Watchman receives Tier 1 email for unreturned keys",
                  "Follow up in person with the staff member if needed",
                  "Chief Authority receives Tier 3 final escalation email",
                  "Take disciplinary or administrative action as required",
                  "Both roles are configurable by the admin via environment",
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Six steps from login to key accountability — automated escalation runs in the background.</p>
          <div className="w-16 md:w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              Icon: IconLogin,
              step: 1,
              title: "System Login",
              desc: "Open KG-KEYLOG in a browser and enter valid credentials. Admin users see an Admin Panel button on the home page. Invalid credentials are rejected with a clear error message.",
            },
            {
              Icon: IconScan,
              step: 2,
              title: "Key Issuance — Scan 3 RFIDs",
              desc: "Security scans their Security RFID, the faculty's Staff RFID (auto-fetches name), and the Lab Key RFID. On submit, the system creates a temp log, a permanent 'Taken' record, and starts the alert timer.",
            },
            {
              Icon: IconReturn,
              step: 3,
              title: "Key Return — Same 3 RFIDs",
              desc: "When the faculty returns the key, the same three RFIDs are scanned again. The system detects the existing temp log, deletes it, marks the permanent record as 'Returned', and stops all alert timers.",
            },
            {
              Icon: IconEscalate,
              step: 4,
              title: "Automated Email Escalation",
              desc: "If a key is not returned within configured limits: Tier 1 emails the Watchman, Tier 2 reminds the Staff Member directly, and Tier 3 escalates to the Chief Authority — all triggered without manual intervention.",
            },
            {
              Icon: IconView,
              step: 5,
              title: "View Key Log Database",
              desc: "Click 'Go to Database' to see all permanent key records in a paginated table. Filter by Security Name, Staff Name, Key, or Status (Taken/Returned) and navigate pages with Previous/Next controls.",
            },
            {
              Icon: IconPanel,
              step: 6,
              title: "Admin Panel Management",
              desc: "Admins access five tabs — Users, Staff, Labs, Security, Settings — to add, edit, or delete records and configure alert time thresholds. Alert changes apply immediately to all new key pickups.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-cyan-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System Callout ───────────────────────────────────────────────── */}
      <div className="bg-cyan-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-200 mb-4 uppercase tracking-widest">System Design</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">RFID Accountability with Automated Escalation</h2>
              <p className="text-cyan-200 text-base leading-relaxed mb-6">
                KG-KEYLOG replaces manual registers with a contactless RFID pipeline: three tags authenticate every handover, temporary logs track live key possession, and a background thread enforces return deadlines through a three-tier escalation email chain — all stored in MongoDB Atlas for permanent traceability.
              </p>
              <ul className="space-y-3">
                {[
                  "Triple-RFID scan — Security + Staff + Lab Key authenticates each transaction",
                  "Temp log tracks live possession · permanent log records full history",
                  "Three-tier email alerts: Watchman → Staff Member → Chief Authority",
                  "All passwords hashed with Werkzeug · session-based route protection",
                  "MongoDB Atlas with TLS/SSL · encrypted data at rest and in transit",
                  "Docker containerised · deployed on Render with Gunicorn WSGI server",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-cyan-200 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Alert Tiers", value: "3", sub: "Watchman · Staff · Chief Authority" },
                { label: "Database", value: "Mongo", sub: "MongoDB Atlas · 7 collections · TLS" },
                { label: "Deployment", value: "Docker", sub: "Render · Gunicorn · entrypoint.sh seeder" },
                { label: "Auth", value: "RFID", sub: "3-tag scan · session auth · RBAC" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-cyan-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-cyan-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} KG-KEYLOG · RFID-Based Lab Key Management System. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">RFID Key Tracking · Three-Tier Email Escalation · MongoDB Audit Trail</p>
        </div>
      </footer>
    </div>
  );
};

export default Kgkeylog;
