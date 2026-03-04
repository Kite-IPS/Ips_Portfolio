import { Link } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import IQACPORTAL from '../../assets/projects/IQAC-PORTAL.jpeg';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconWorkflow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/>
    <path d="M6 9v3a3 3 0 0 0 3 3h0m6-6v3a3 3 0 0 1-3 3h0"/>
  </svg>
);
const IconDuplicate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/>
  </svg>
);
const IconRoles = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconEscalate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="17 11 21 7 17 3"/><line x1="21" y1="7" x2="9" y2="7"/>
    <polyline points="7 21 3 17 7 13"/><line x1="15" y1="17" x2="3" y2="17"/>
  </svg>
);
const IconRef = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="11" y2="17"/>
  </svg>
);
const IconAudit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconFile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconSubmit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
  </svg>
);
const IconHOD = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>
);
const IconIQAC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 8 12 12 14 14"/>
    <line x1="12" y1="4" x2="12" y2="2"/>
  </svg>
);
const IconAuthority = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconFinal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IqacPortal = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                MERN Stack · MongoDB · Express · React · Node.js
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-blue-700">IQAC PORTAL</span>
                <span className="inline-block ml-2 animate-pulse"><Landmark className="w-10 h-10 inline" /></span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Institutional Quality Assurance Cell — Event Approval System
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A web-based portal that digitizes the institutional event approval process through a structured hierarchical workflow — eliminating paperwork, preventing duplicate submissions, and providing complete traceability from submission to final sign-off.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 border border-blue-700 font-medium rounded-md hover:bg-blue-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={IQACPORTAL} alt="IQAC Portal" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo / Deployed Link ─────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-blue-700 to-blue-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-blue-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Access the live deployment below. Log in with your institutional credentials to submit event requests, review approvals, and track your workflow in real time.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-800 font-semibold text-base rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open IQAC Portal
            </a>
            <p className="mt-5 text-blue-300 text-sm">
              Requires valid institutional credentials &nbsp;·&nbsp; Optimised for modern browsers
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-blue-50 border-b border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">System Users</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Faculty / Staff","Head of Department","IQAC Coordinator","Principal","Director","Administrative Officer","CEO","Admin"].map(role => (
              <span key={role} className="px-4 py-1.5 bg-white border border-blue-200 rounded-full text-sm font-medium text-blue-700 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to manage institutional event approvals from submission to final sign-off.</p>
          <div className="w-16 md:w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconWorkflow,
              title: "Hierarchical Approval Workflow",
              desc: "Requests move sequentially through Staff → HOD → IQAC → Higher Authorities (Principal, Director, AO, CEO), each with approve or recreate options.",
            },
            {
              Icon: IconDuplicate,
              title: "Duplicate Detection",
              desc: "System automatically checks event name similarity (≥70%) and purpose similarity (≥60%) before allowing submission — blocking duplicate entries at the source.",
            },
            {
              Icon: IconRef,
              title: "Unique Reference Numbers",
              desc: "IQAC assigns a unique 8-character alphanumeric reference ID to every approved request for unambiguous tracking throughout the workflow.",
            },
            {
              Icon: IconEscalate,
              title: "Auto-Escalation",
              desc: "If an approver exceeds the configured timeout, the system automatically forwards the request, marks the role as 'No Response', and locks it from further action.",
            },
            {
              Icon: IconAudit,
              title: "Complete Audit Trail",
              desc: "Every action — submit, approve, recreate — is permanently logged with the actor's identity and timestamp for full institutional accountability.",
            },
            {
              Icon: IconFile,
              title: "Secure PDF Upload",
              desc: "Staff upload event PDF reports (≤10 MB). Files are served via presigned URLs that expire in 15 minutes, ensuring no unauthorized document access.",
            },
            {
              Icon: IconRoles,
              title: "Role-Based Access Control",
              desc: "Five distinct roles — Staff, HOD, IQAC Coordinator, Higher Authorities, Admin — each with department-scoped dashboards and permissions.",
            },
            {
              Icon: IconShield,
              title: "Security & Validation",
              desc: "Passwords hashed with bcrypt (10 salt rounds). Mandatory field validation, file size limits, and department-level data visibility at every layer.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-700">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-blue-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Each user type operates within clearly defined boundaries with a tailored dashboard.</p>
            <div className="w-16 md:w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "Staff (Faculty)",
                gradient: "from-blue-600 to-blue-800",
                responsibilities: [
                  "Create and submit event requests with all details",
                  "Upload PDF event report (≤ 10 MB)",
                  "Ensure originality and avoid duplicate submissions",
                  "Modify and resubmit request if recreated by any authority",
                  "Track real-time request status through the portal",
                ],
              },
              {
                role: "Head of Department (HOD)",
                gradient: "from-indigo-600 to-indigo-800",
                responsibilities: [
                  "Review all department-specific event requests",
                  "Approve and forward to the IQAC Coordinator",
                  "Recreate request with mandatory comments if changes needed",
                  "Department-scoped view — no cross-department access",
                ],
              },
              {
                role: "IQAC Coordinator",
                gradient: "from-sky-600 to-sky-800",
                responsibilities: [
                  "Assign unique 8-character reference number to each request",
                  "Configure the approval workflow (select required authorities)",
                  "Approve and forward requests to higher authorities",
                  "Monitor the entire system and manage escalations",
                ],
              },
              {
                role: "Higher Authorities",
                gradient: "from-violet-600 to-violet-800",
                responsibilities: [
                  "Review requests sequentially in configured order",
                  "Approve to move request to the next authority in chain",
                  "Recreate request with comments — returns to staff for changes",
                  "Locked from action once auto-escalated past their step",
                ],
              },
              {
                role: "Admin",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Manage all user accounts: Staff, HODs, Authorities",
                  "Reset passwords and manage system access",
                  "Monitor all requests across all departments",
                  "Maintain overall system integrity and audit logs",
                ],
              },
            ].map(({ role, gradient, responsibilities }) => (
              <div key={role} className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden flex flex-col">
                <div className={`bg-gradient-to-r ${gradient} px-6 py-4`}>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Role</span>
                  <h3 className="text-white text-lg font-bold mt-0.5">{role}</h3>
                </div>
                <ul className="p-6 space-y-3 flex-1">
                  {responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Seven steps from submission to final institutional approval.</p>
          <div className="w-16 md:w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { Icon: IconSubmit, step: 1, title: "Staff Submits Request", desc: "Staff logs in, fills event details, uploads PDF report, and submits. System checks for duplicate submissions before accepting." },
            { Icon: IconHOD, step: 2, title: "HOD Review", desc: "Department Head reviews the request and either approves it (forwarding to IQAC) or recreates it with mandatory feedback comments." },
            { Icon: IconIQAC, step: 3, title: "IQAC Processing", desc: "IQAC assigns a unique reference number, configures the authority chain (Principal, Director, AO, CEO), and forwards for sequential review." },
            { Icon: IconAuthority, step: 4, title: "Authority Approval Chain", desc: "Authorities review sequentially. Each can approve (moving it forward) or recreate (returning to staff). Auto-escalation handles non-responses." },
            { Icon: IconEscalate, step: 5, title: "Recreation Flow", desc: "If recreated, staff modifies and resubmits. The request skips to the recreating authority directly after HOD and IQAC re-approval." },
            { Icon: IconShield, step: 6, title: "Auto-Escalation", desc: "If any approval delay exceeds the timeout, the system auto-forwards, marks the role as 'No Response', and locks that step permanently." },
            { Icon: IconFinal, step: 7, title: "Final Approval & Report", desc: "Once all approvals are complete, the system generates a final approval report including the full, timestamped audit trail." },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-blue-600">
                <Icon />
              </div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Audit Trail & Stats Callout ───────────────────────────────────── */}
      <div className="bg-blue-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 mb-4 uppercase tracking-widest">Accountability</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Complete Audit Trail</h2>
              <p className="text-blue-200 text-base leading-relaxed mb-6">
                Every interaction with an event request — submission, approval, recreation, escalation — is permanently recorded. This creates an unbreakable chain of accountability across all departments and authority levels.
              </p>
              <ul className="space-y-3">
                {[
                  "Timestamped log of every action on every request",
                  "Actor identity captured for each approval or recreation",
                  "Mandatory comments required whenever a request is recreated",
                  "Final report includes the complete audit trail on approval",
                  "Permanent records — history is never deleted",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-blue-200 text-sm">
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
                { label: "User Roles", value: "5", sub: "Staff · HOD · IQAC · Authorities · Admin" },
                { label: "Duplicate Threshold", value: "70%", sub: "Event name · 60% purpose similarity" },
                { label: "Reference ID", value: "8-char", sub: "Unique alphanumeric per request" },
                { label: "File Limit", value: "10 MB", sub: "PDF reports · Presigned URL expiry 15 min" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-blue-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-blue-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tech Stack & Requirements ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">System &amp; Tech Requirements</h2>
          <div className="w-16 md:w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-700">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              Technology Stack
            </h3>
            <div className="space-y-3">
              {[
                { layer: "Frontend", tech: "React (Vite)", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
                { layer: "Backend", tech: "Node.js + Express.js", color: "bg-green-50 text-green-700 border-green-200" },
                { layer: "Database", tech: "MongoDB", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                { layer: "Auth", tech: "bcrypt (10 salt rounds)", color: "bg-orange-50 text-orange-700 border-orange-200" },
                { layer: "File Storage", tech: "Presigned URLs (15 min expiry)", color: "bg-blue-50 text-blue-700 border-blue-200" },
                { layer: "Architecture", tech: "MERN Stack", color: "bg-violet-50 text-violet-700 border-violet-200" },
              ].map(({ layer, tech, color }) => (
                <div key={layer} className="flex items-center justify-between gap-3">
                  <span className="text-gray-500 text-sm w-28 flex-shrink-0">{layer}</span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${color}`}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <IconShield />
              System Requirements
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Web Browser", detail: "Latest version of Chrome, Edge, Firefox, or Safari for full compatibility." },
                { title: "Internet Connection", detail: "Stable connection to the institution network or internet to access the hosted application." },
                { title: "User Credentials", detail: "A registered institutional email and password. Roles are pre-assigned — contact Admin for account setup." },
                { title: "Backup & Maintenance", detail: "Regular database backups, module updates, and audit log maintenance are required from the Admin side." },
              ].map(({ title, detail }) => (
                <li key={title} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <div>
                    <span className="text-gray-800 text-sm font-semibold">{title}: </span>
                    <span className="text-gray-500 text-sm">{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} IQAC Approval Portal. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Built with MERN Stack · MongoDB · Express · React · Node.js</p>
        </div>
      </footer>
    </div>
  );
};

export default IqacPortal;
