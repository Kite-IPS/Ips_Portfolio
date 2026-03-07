import { Link } from 'react-router-dom';
import TeamSection from '../../Components/TeamSection';
import Arunaw from '../../assets/members/2nd-yrs/arunaw.png';
import Aki from '../../assets/members/2nd-yrs/aki.png';
import Black from '../../assets/general/black-badge.png';
import GATEEPASSSYSTEM from '../../assets/projects/GATE-EPASS-SYSTEM.jpeg';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconQR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/>
    <rect x="3" y="16" width="5" height="5"/>
    <path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/>
    <path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/>
    <path d="M16 12h1"/><path d="M21 12v.01"/>
  </svg>
);
const IconApproval = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
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
const IconRoles = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconTrack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconExport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);
const IconLogin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
  </svg>
);
const IconSubmit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
  </svg>
);
const IconReview = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconFinal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);
const IconScan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M3 9V5a2 2 0 0 1 2-2h4"/><path d="M15 3h4a2 2 0 0 1 2 2v4"/>
    <path d="M21 15v4a2 2 0 0 1-2 2h-4"/><path d="M9 21H5a2 2 0 0 1-2-2v-4"/>
    <line x1="7" y1="12" x2="17" y2="12"/>
  </svg>
);
const IconDashboard = () => (
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

const GateEPassSystem = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                QR / OTP Verification · Multi-Level Approval · JWT Auth · CSV Export
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-emerald-700">GATE E-PASS SYSTEM</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Visitor &amp; Event Entry Management Platform
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A fully digital, role-based gate pass management system that streamlines visitor and event entry through multi-level approvals, QR/OTP verification, real-time tracking, and complete audit logging — eliminating paperwork and improving institutional security.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="https://gate-e-pass.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 border border-emerald-700 font-medium rounded-md hover:bg-emerald-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={GATEEPASSSYSTEM} alt="Gate E-Pass System" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-emerald-50 border-b border-emerald-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-4">Used By</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HOD – Request Creation","Principal / Director – Review & Approval","AO – Final Decision","Security – QR/OTP Verification","Admin – System Monitoring"].map(role => (
              <span key={role} className="px-4 py-1.5 bg-white border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 shadow-sm">
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features &amp; Benefits</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed for a secure, traceable, fully digital institutional gate pass workflow.</p>
          <div className="w-16 md:w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconQR,
              title: "QR / OTP Verification",
              desc: "Each approved pass generates a unique QR code and OTP emailed to the guest. Security scans or validates on arrival for tamper-proof entry.",
            },
            {
              Icon: IconApproval,
              title: "Multi-Level Digital Approval",
              desc: "Requests flow through HOD → Principal/Director → AO in a structured chain. Each level can approve, reject, or request correction with remarks.",
            },
            {
              Icon: IconAudit,
              title: "Complete Audit Logging",
              desc: "Every action — creation, approval, scan, in/out — is logged with timestamps and the responsible role, ensuring full accountability and audit readiness.",
            },
            {
              Icon: IconRoles,
              title: "Role-Based Access Control",
              desc: "Five distinct roles (HOD, Principal, AO, Security, Admin) each with tailored dashboards and permissions — no role can exceed their access boundary.",
            },
            {
              Icon: IconEmail,
              title: "Automated Email Notifications",
              desc: "SMTP-driven emails deliver QR/OTP passes to guests and status updates to requestors automatically at each workflow milestone.",
            },
            {
              Icon: IconTrack,
              title: "Real-Time Status Tracking",
              desc: "HODs track every request from Pending to Principal Approved to Accepted/Rejected. Dashboards show live status without manual follow-up.",
            },
            {
              Icon: IconShield,
              title: "JWT Security & Auto Logout",
              desc: "JWT authentication with route protection, hashed passwords, and automatic token expiry logout ensure secure access at every layer.",
            },
            {
              Icon: IconExport,
              title: "Reports & CSV Export",
              desc: "Admin and monitoring dashboards support search, filter, and CSV export for visitor logs and request history — ready for institutional reporting.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-emerald-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Five clearly defined roles govern every step of the gate pass lifecycle.</p>
            <div className="w-16 md:w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                role: "HOD",
                gradient: "from-emerald-600 to-emerald-800",
                responsibilities: [
                  "Create visitor / event gate pass requests",
                  "Upload approval letter, appreciation letter, guest image",
                  "Track request status from dashboard",
                  "Recreate request if instructed by AO",
                ],
              },
              {
                role: "Principal / Director",
                gradient: "from-green-600 to-green-800",
                responsibilities: [
                  "Review submitted HOD requests",
                  "Approve request (forward to AO) or Reject",
                  "View all pending requests on dashboard",
                ],
              },
              {
                role: "AO",
                gradient: "from-teal-600 to-teal-800",
                responsibilities: [
                  "Accept request — triggers QR & OTP generation",
                  "Reject request and provide remarks",
                  "Request recreation with correction instructions",
                  "Email pass credentials to guest automatically",
                ],
              },
              {
                role: "Security",
                gradient: "from-cyan-600 to-cyan-800",
                responsibilities: [
                  "Scan QR code or verify OTP at gate",
                  "Validate guest details against pass record",
                  "Record actual In-Time and Out-Time",
                  "Monitor active visitors on dashboard",
                ],
              },
              {
                role: "Admin",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Manage HOD credentials and accounts",
                  "View all requests, logs, and statistics",
                  "Monitor system activity and anomalies",
                  "Export logs and generate reports",
                ],
              },
            ].map(({ role, gradient, responsibilities }) => (
              <div key={role} className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden flex flex-col">
                <div className={`bg-gradient-to-r ${gradient} px-6 py-4`}>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Role</span>
                  <h3 className="text-white text-base font-bold mt-0.5">{role}</h3>
                </div>
                <ul className="p-5 space-y-3 flex-1">
                  {responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Six steps from login to gate entry — fully automated and traceable at every stage.</p>
          <div className="w-16 md:w-24 h-1 bg-emerald-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              Icon: IconLogin,
              step: 1,
              title: "Login",
              desc: "Select your role, enter credentials, and access your role-specific dashboard — HOD, Principal, AO, Security, or Admin.",
            },
            {
              Icon: IconSubmit,
              step: 2,
              title: "HOD Creates Request",
              desc: "HOD enters event/guest details, uploads the approval letter, appreciation letter, and guest image. Submitting generates a unique Request ID (status: Pending).",
            },
            {
              Icon: IconReview,
              step: 3,
              title: "Principal Reviews",
              desc: "Principal/Director reviews the request and chooses to Approve (forward to AO) or Reject. Rejected requests notify the HOD with remarks.",
            },
            {
              Icon: IconFinal,
              step: 4,
              title: "AO Final Decision",
              desc: "AO accepts, rejects, or requests recreation. On acceptance, the system auto-generates an OTP & QR code and emails it to the guest.",
            },
            {
              Icon: IconScan,
              step: 5,
              title: "Security Verification",
              desc: "Security scans the guest's QR code or verifies the OTP at the gate, validates details, then records the actual In-Time and Out-Time.",
            },
            {
              Icon: IconDashboard,
              step: 6,
              title: "Monitoring & Reports",
              desc: "Dashboards show live Pending, Approved, and Activity logs. Search, filter, and export data as CSV for institutional records.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-emerald-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Security & Audit Callout ──────────────────────────────────────── */}
      <div className="bg-emerald-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-200 mb-4 uppercase tracking-widest">Security &amp; Compliance</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Built for Accountability &amp; Security</h2>
              <p className="text-emerald-200 text-base leading-relaxed mb-6">
                Every workflow action is authenticated via JWT and fully logged. Automated token expiry, hashed passwords, and environment-based SMTP credentials ensure the system is secure by design — not as an afterthought.
              </p>
              <ul className="space-y-3">
                {[
                  "JWT authentication with route-level protection",
                  "Password hashing — no plain-text credentials stored",
                  "Automatic logout on token expiry",
                  "SMTP credentials stored in environment variables",
                  "Uploaded documents saved in configured storage",
                  "Every gate event logged with role and timestamp",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-emerald-200 text-sm">
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
                { label: "User Roles", value: "5", sub: "HOD · Principal · AO · Security · Admin" },
                { label: "Verification", value: "QR+OTP", sub: "Dual-mode tamper-proof guest entry" },
                { label: "Auth Method", value: "JWT", sub: "Token-based with auto-expiry logout" },
                { label: "Data Export", value: "CSV", sub: "Search, filter & export visitor logs" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-emerald-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-emerald-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ──────────────────────────────────────────────── */}
      <TeamSection
        projectName="Gate E-Pass System"
        accentColor="emerald"
        members={[
          { name: "Arunaw Rishe M", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Arunaw, badges: [Black], github: "https://github.com/Arunaw-Rishe", linkedin: "https://www.linkedin.com/in/arunaw-rishe-m-82b989316/" },
          { name: "Akilan CK", role: "Developer", specialty: "ML Engineer", imageUrl: Aki, badges: [Black], github: "https://github.com/Akilan-CK", linkedin: "https://linkedin.com" },
        ]}
      />

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Gate E-Pass System. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">QR / OTP Verification · Multi-Level Approval · JWT Auth · Visitor Entry Management</p>
        </div>
      </footer>
    </div>
  );
};

export default GateEPassSystem;
