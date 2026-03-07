import { Link } from 'react-router-dom';
import TeamSection from '../../Components/TeamSection';
import Harini from '../../assets/members/2nd-yrs/harini.png';
import Boo from '../../assets/members/2nd-yrs/boo.png';
import Anish from '../../assets/members/2nd-yrs/anish.png';
import Nila from '../../assets/members/2nd-yrs/nila.png';
import Black from '../../assets/general/black-badge.png';
import CLASSROOMENGAGEMENTSYSTEM from '../../assets/projects/CLASSROOM-ENGAGEMENT-SYSTEM.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 16 12 12 8 16"/>
    <line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);
const IconMeta = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
  </svg>
);
const IconValidate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IconRBAC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
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
const IconExport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);
const IconJWT = () => (
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
const IconSelect = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/>
    <path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>
  </svg>
);
const IconProcess = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const IconResult = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const Metaview = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                Auto Metadata Extraction · JWT Auth · Role-Based Access
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-violet-600">CLASSROOM ENGAGEMENT SYSTEM</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Faculty Video Upload with Automated Metadata Validation
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A secure, role-based web application for automated faculty video submission and compliance validation. Faculty upload class session videos, the system extracts metadata automatically using ffprobe, validates timing against the configured timetable, and marks submissions as Qualified or Disqualified — with full audit trail and admin reporting dashboards.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-medium rounded-md hover:bg-violet-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-violet-600 border border-violet-600 font-medium rounded-md hover:bg-violet-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={CLASSROOMENGAGEMENTSYSTEM} alt="Classroom Engagement System" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo ─────────────────────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-violet-600 to-violet-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <IconDashboard />
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-violet-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Access the live Classroom Engagement System. Faculty upload session videos, the system validates metadata automatically, and admins monitor compliance in real time across all class periods.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet-700 font-semibold text-base rounded-lg hover:bg-violet-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open Classroom Engagement System
            </a>
            <p className="mt-5 text-violet-300 text-sm">
              Role-based access &nbsp;·&nbsp; Faculty / Admin / Management credentials required
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-violet-50 border-b border-violet-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Scope</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Faculty (Video Upload)",
              "Admin (Monitor & Manage)",
              "Management / Reviewer (Compliance)",
              "System (Auto Metadata & Validation)",
              "Institutional Class-Session Compliance",
            ].map(r => (
              <span key={r} className="px-4 py-1.5 bg-white border border-violet-200 rounded-full text-sm font-medium text-violet-600 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Automated video submission compliance — from upload to validated audit trail.</p>
          <div className="w-16 md:w-24 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconUpload,
              title: "Faculty Video Upload",
              desc: "Faculty select a pending class period from their dashboard and upload the corresponding session video. The interface shows only their assigned, unsubmitted periods.",
            },
            {
              Icon: IconMeta,
              title: "Automated Metadata Extraction",
              desc: "The system automatically extracts video metadata using ffprobe — duration, creation timestamp, codec, and other properties — immediately on upload without manual input.",
            },
            {
              Icon: IconValidate,
              title: "Timing Validation Against Timetable",
              desc: "Extracted timestamps are computed and validated against the configured timetable period timings. Each submission is matched to a period and marked Qualified or Disqualified.",
            },
            {
              Icon: IconDashboard,
              title: "Admin KPI Dashboard",
              desc: "Admin dashboard displays real-time key metrics — total uploads, qualified count, disqualified count, pending submissions — with period and date filters and full log access.",
            },
            {
              Icon: IconExport,
              title: "Report Export",
              desc: "Admin can export filtered submission logs and compliance reports for audits, academic reviews, and management presentations.",
            },
            {
              Icon: IconAudit,
              title: "Complete Digital Audit Trail",
              desc: "All metadata, validation results, timestamps, and matched periods are permanently stored, providing a full traceable record of every class-session video submission.",
            },
            {
              Icon: IconRBAC,
              title: "Role-Based Access Control",
              desc: "Three distinct roles — Faculty, Admin, Management/Reviewer — each with scoped dashboards. Faculty see their uploads; Admin manages all; Management reviews compliance.",
            },
            {
              Icon: IconJWT,
              title: "JWT Authentication & Security",
              desc: "All routes are protected with JWT tokens with enforced expiry and automatic re-login. Passwords are hashed. Environment-based secret configuration prevents exposure.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-50 border border-violet-100 text-violet-600">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-violet-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Four stakeholders — Faculty, Admin, Management, and the automated System — each with clear scope.</p>
            <div className="w-16 md:w-24 h-1 bg-violet-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                role: "Faculty",
                gradient: "from-violet-600 to-violet-800",
                responsibilities: [
                  "Log in using faculty credentials",
                  "View list of assigned class periods",
                  "Select a pending period and upload the session video",
                  "Review validated submission results (Qualified / Disqualified)",
                  "Resubmit or address disqualified submissions",
                ],
              },
              {
                role: "Admin",
                gradient: "from-purple-600 to-purple-800",
                responsibilities: [
                  "Monitor submission dashboard KPIs in real time",
                  "Review detailed submission logs with metadata",
                  "Apply filters by date, faculty, period, or status",
                  "Manage timetable mappings and system configuration",
                  "Export compliance reports for audit and review",
                ],
              },
              {
                role: "Management / Reviewer",
                gradient: "from-indigo-600 to-indigo-800",
                responsibilities: [
                  "View date-wise class upload compliance status",
                  "Check faculty submission rates across periods",
                  "Drill into individual submission details",
                  "Verify metadata and validation outcomes",
                  "Use audit trail for institutional compliance checks",
                ],
              },
              {
                role: "System (Automated)",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Extract metadata from uploaded videos using ffprobe",
                  "Compute and normalise video timestamps",
                  "Validate timing against configured timetable periods",
                  "Mark submissions as Qualified or Disqualified with message",
                  "Store records and generate dashboards automatically",
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Five steps from login to compliance verification — fully automated in between.</p>
          <div className="w-16 md:w-24 h-1 bg-violet-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            {
              Icon: IconLogin,
              step: 1,
              title: "Role-Based Login",
              desc: "Faculty, Admin, and Management each log in with their credentials. The system authenticates via JWT and redirects each role to their respective dashboard.",
            },
            {
              Icon: IconSelect,
              step: 2,
              title: "Faculty Video Upload",
              desc: "Faculty view their assigned periods, select a pending slot, and upload the class session video. The submission is queued for automated processing.",
            },
            {
              Icon: IconProcess,
              step: 3,
              title: "Automated Processing",
              desc: "The system extracts video metadata using ffprobe — timestamps, duration, codec — then computes timing and cross-validates it against the configured timetable.",
            },
            {
              Icon: IconResult,
              step: 4,
              title: "Validation Result",
              desc: "Each submission is automatically marked Qualified (metadata and timing match the period) or Disqualified (missing/mismatched data). A result message and matched period are stored.",
            },
            {
              Icon: IconMonitor,
              step: 5,
              title: "Admin & Management Review",
              desc: "Admin monitors KPIs, browses logs, applies filters, manages mappings, and exports reports. Management reviews date-wise compliance and drills into submission details.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-violet-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System Callout ───────────────────────────────────────────────── */}
      <div className="bg-violet-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-violet-200 mb-4 uppercase tracking-widest">System Design</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Automated, Secure &amp; Fully Traceable</h2>
              <p className="text-violet-200 text-base leading-relaxed mb-6">
                The Classroom Engagement System is built around an automated pipeline: videos are uploaded via a secure role-based interface, metadata is extracted server-side using ffprobe, and every submission is validated against the timetable without manual review. The result is a complete, tamper-proof compliance record for every class period.
              </p>
              <ul className="space-y-3">
                {[
                  "ffprobe-based server-side metadata extraction (no client tools needed)",
                  "JWT authentication with token expiry and enforced re-login",
                  "Bcrypt password hashing · environment-based secret configuration",
                  "Qualified / Disqualified with matched period and validation message",
                  "Files stored in configured storage with optional Drive linking",
                  "Historical data maintained for audits · scheduled database backups",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-violet-200 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Roles", value: "3", sub: "Faculty · Admin · Management/Reviewer" },
                { label: "Validation", value: "Auto", sub: "ffprobe metadata · timetable cross-check" },
                { label: "Authentication", value: "JWT", sub: "Token expiry · bcrypt · RBAC" },
                { label: "Audit Trail", value: "Full", sub: "Every submission · metadata · result stored" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-violet-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-violet-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ──────────────────────────────────────────────── */}
      <TeamSection
        projectName="Classroom Engagement System"
        accentColor="violet"
        members={[
          { name: "Harini M", role: "Developer", specialty: "Front-end Developer", imageUrl: Harini, badges: [Black], github: "https://github.com/Harini007m", linkedin: "https://www.linkedin.com/in/harini-m-aa6a783157m" },
          { name: "Boomathi", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Boo, badges: [Black], github: "https://github.com", linkedin: "https://linkedin.com" },
          { name: "Anish Karthic VS", role: "Developer", specialty: "Embedded and IoT", imageUrl: Anish, badges: [Black], github: "https://github.com", linkedin: "https://linkedin.com" },
          { name: "Kavinila L", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Nila, badges: [Black], github: "https://github.com/KavinilaLoganathan-2507", linkedin: "https://www.linkedin.com/in/kavinila-loganathan-1bb49b315" },
        ]}
      />

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Classroom Engagement System with Metadata. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Faculty Video Upload · Automated Metadata Validation · Class-Session Compliance</p>
        </div>
      </footer>
    </div>
  );
};

export default Metaview;
