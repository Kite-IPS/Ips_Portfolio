import { Link } from 'react-router-dom';
import TeamSection from '../../Components/TeamSection';
import Kayal from '../../assets/members/2nd-yrs/kayal.png';
import Joshua from '../../assets/members/2nd-yrs/joshua.png';
import Black from '../../assets/general/black-badge.png';
import FACULTYAPPRAISALSYSTEM from '../../assets/projects/FACULTY-APPRAISAL-SYSTEM.jpeg';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconReport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconAnalytics = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconVersion = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const IconUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IconRoles = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconCycle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
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
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconExport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const FacultyAppraisalSystem = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                PDF · DOCX · XLSX · Version Tracking · RBAC
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-purple-700">FACULTY APPRAISAL SYSTEM</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Academic Performance Evaluation &amp; Report Generation Platform
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A web-based system that streamlines and digitizes faculty performance evaluation — automating report generation in PDF, DOCX, and XLSX formats, maintaining version history, providing analytics dashboards, and eliminating manual paperwork across all academic departments.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 border border-purple-700 font-medium rounded-md hover:bg-purple-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={FACULTYAPPRAISALSYSTEM} alt="Faculty Appraisal System" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo / Deployed Link ─────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-purple-700 to-purple-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <IconAnalytics />
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-purple-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Access the live deployment below. Log in with your institutional credentials to upload appraisal data, generate reports, and track faculty performance analytics.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-800 font-semibold text-base rounded-lg hover:bg-purple-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open Faculty Appraisal System
            </a>
            <p className="mt-5 text-purple-300 text-sm">
              Requires valid institutional credentials &nbsp;·&nbsp; Role-based dashboards for HOD, Faculty &amp; Admin
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-purple-50 border-b border-purple-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-purple-400 uppercase tracking-widest mb-4">Used By</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Department Heads (HOD)","Faculty Members","Administrative Staff","System Administrators","Institutional Leadership"].map(role => (
              <span key={role} className="px-4 py-1.5 bg-white border border-purple-200 rounded-full text-sm font-medium text-purple-700 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to run the full annual faculty appraisal cycle — digitally.</p>
          <div className="w-16 md:w-24 h-1 bg-purple-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconReport,
              title: "Multi-Format Report Generation",
              desc: "Automatically generate professional appraisal reports in PDF, DOCX, and XLSX formats from uploaded performance data — no manual formatting needed.",
            },
            {
              Icon: IconAnalytics,
              title: "Performance Analytics Dashboard",
              desc: "Visual dashboards and data-driven insights on faculty performance trends across academic, research, mentoring, and administrative dimensions.",
            },
            {
              Icon: IconVersion,
              title: "Version History Tracking",
              desc: "Every edit to an appraisal record is tracked automatically. Full version history is maintained for auditing, compliance, and dispute resolution.",
            },
            {
              Icon: IconUpload,
              title: "Excel & DOCX Upload",
              desc: "HODs upload an Excel file containing performance metrics and a Word template (.docx). The system processes both and generates download-ready output.",
            },
            {
              Icon: IconRoles,
              title: "Role-Based Access Control",
              desc: "Distinct dashboards and permissions for HODs, Faculty, Administrative Staff, and System Administrators — each seeing only what their role permits.",
            },
            {
              Icon: IconShield,
              title: "Security & Data Retention",
              desc: "Passwords are encrypted, sessions time out on inactivity, and all appraisal data is retained for 7 years as per institutional compliance requirements.",
            },
            {
              Icon: IconEdit,
              title: "Draft & Finalize Workflow",
              desc: "Appraisals can be saved as drafts for review before finalizing. Modifications are tracked, and finalized records are locked from unauthorized changes.",
            },
            {
              Icon: IconCycle,
              title: "Reduced Administrative Workload",
              desc: "Eliminates manual paperwork, improves data accuracy, and standardizes evaluation — freeing staff time and supporting data-driven institutional decisions.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-50 border border-purple-100 text-purple-700">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-purple-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Each user type operates within clearly defined responsibilities and system access.</p>
            <div className="w-16 md:w-24 h-1 bg-purple-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                role: "Department Head (HOD)",
                gradient: "from-purple-600 to-purple-800",
                responsibilities: [
                  "Initiate the faculty appraisal process",
                  "Upload faculty performance data (Excel + DOCX template)",
                  "Review evaluation scores and appraisal details",
                  "Generate finalized appraisal reports",
                  "Assign final ratings to faculty members",
                ],
              },
              {
                role: "Faculty Member",
                gradient: "from-violet-600 to-violet-800",
                responsibilities: [
                  "Submit self-assessment data for the appraisal cycle",
                  "Provide details on research and academic activities",
                  "Review their own generated appraisal reports",
                  "Report any discrepancies to the HOD or Admin",
                ],
              },
              {
                role: "Administrative Staff",
                gradient: "from-fuchsia-600 to-fuchsia-800",
                responsibilities: [
                  "Assist in coordinating the appraisal workflow",
                  "Manage document distribution and record keeping",
                  "Support faculty and HODs with system usage",
                ],
              },
              {
                role: "System Administrator",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Manage all user accounts and role assignments",
                  "Monitor system health and performance",
                  "Maintain regular database backups",
                  "Review audit logs for compliance",
                  "Apply security updates when required",
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Four straightforward steps from login to downloading the finalized appraisal report.</p>
          <div className="w-16 md:w-24 h-1 bg-purple-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconLogin,
              step: 1,
              title: "Login",
              desc: "Open the Faculty Appraisal System in the browser, enter valid credentials, and access the role-specific dashboard.",
            },
            {
              Icon: IconSubmit,
              step: 2,
              title: "Upload Appraisal Data",
              desc: "Enter faculty details (Name, Employee ID, Designation, Department, Year), upload the Excel metrics file and Word template, then click Submit.",
            },
            {
              Icon: IconEdit,
              step: 3,
              title: "Edit & Finalize",
              desc: "Search the faculty record, modify performance scores if needed, save as Draft or Finalize. Version history is tracked automatically.",
            },
            {
              Icon: IconExport,
              step: 4,
              title: "Download Reports",
              desc: "Search the faculty record, select the report format (PDF, DOCX, or XLSX), click Download, and verify the generated file.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-purple-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Data & Security Callout ───────────────────────────────────────── */}
      <div className="bg-purple-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-purple-200 mb-4 uppercase tracking-widest">Security &amp; Compliance</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Data Management &amp; Security</h2>
              <p className="text-purple-200 text-base leading-relaxed mb-6">
                All appraisal data is stored securely with role-based access control, encrypted passwords, and automatic session timeouts. Version history is maintained at all times for complete auditability.
              </p>
              <ul className="space-y-3">
                {[
                  "All appraisal data stored securely in the system database",
                  "Full version history maintained for auditing purposes",
                  "Role-Based Access Control (RBAC) at every layer",
                  "Passwords are encrypted — no plain-text storage",
                  "Session timeout enforced after inactivity",
                  "Data retention period: 7 years for compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-purple-200 text-sm">
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
                { label: "Report Formats", value: "3", sub: "PDF · DOCX · XLSX" },
                { label: "User Roles", value: "4", sub: "HOD · Faculty · Admin Staff · Sys Admin" },
                { label: "Data Retention", value: "7 yrs", sub: "Institutional compliance requirement" },
                { label: "Version Tracking", value: "Auto", sub: "Every edit tracked with full history" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-purple-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-purple-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ──────────────────────────────────────────────── */}
      <TeamSection
        projectName="Faculty Appraisal System"
        accentColor="purple"
        members={[
          { name: "Joshpin Kayalvizhi A", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Kayal, badges: [Black], github: "https://github.com/JOSHPINKAYALVIZHI", linkedin: "https://www.linkedin.com/in/joshpin-kayalvizhi-b47a2b314/" },
          { name: "Joshua Melvin K", role: "Developer", specialty: "AI Engineer", imageUrl: Joshua, badges: [Black], github: "https://github.com/JOSHUA-MELVIN-777/", linkedin: "https://www.linkedin.com/in/joshuamelvin7" },
        ]}
      />

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Faculty Appraisal System. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">PDF · DOCX · XLSX Generation · Version Tracking · Role-Based Access Control</p>
        </div>
      </footer>
    </div>
  );
};

export default FacultyAppraisalSystem;
