<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageSquare, BookOpen, CalendarDays, Search, BarChart3, Lock } from 'lucide-react';
>>>>>>> de3f617ced963d7deff0d8774df7d0236beb46aa
import EDUMANAGECFACULTIES from '../../assets/projects/EDU-MANAGE-C-FACULTIES.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconDaily = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IconChatbot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="9" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="15" y1="10" x2="15" y2="10"/>
  </svg>
);
const IconTimetable = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconSyllabus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/>
  </svg>
);
const IconLab = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
  </svg>
);
const IconRBAC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconSecret = () => (
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
const IconEntry = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconQuery = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);
const IconCRUD = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const EduManageCFaculties = () => {
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
<<<<<<< HEAD
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                14 Faculties · 14 Departments · FAQ Chatbot · RBAC
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-amber-600">C ACADEMICSCHEDULER</span>
=======
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                <span className="text-amber-600">EDU MANAGE FOR C FACULTIES</span>
                <span className="inline-block ml-2 animate-pulse"><Bot className="w-10 h-10 inline" /></span>
>>>>>>> de3f617ced963d7deff0d8774df7d0236beb46aa
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                C Programming Faculty Management System
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A centralised web platform for managing and monitoring daily academic activities of 14 faculty members teaching C Programming (24UCS271) across 14 departments. Covers daily entry logging, real-time admin monitoring, timetable management, syllabus tracking, lab program management, and an FAQ-based chatbot.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-600 border border-amber-600 font-medium rounded-md hover:bg-amber-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={EDUMANAGECFACULTIES} alt="C AcademicScheduler" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo ─────────────────────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-amber-600 to-amber-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <IconDashboard />
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-amber-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Access the live system. Faculty log daily class entries, admins monitor all 14 departments in real time, and students query schedules via the integrated chatbot — all from one platform.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-700 font-semibold text-base rounded-lg hover:bg-amber-50 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open C AcademicScheduler
            </a>
            <p className="mt-5 text-amber-300 text-sm">
              Admin dashboard — public access &nbsp;·&nbsp; Faculty &amp; Super Admin via secret URL
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">Scope</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "14 C Programming Faculty Members",
              "14 Academic Departments",
              "Admin Dashboard (Public, No Login)",
              "Super Admin (Full CRUD)",
              "Students & Stakeholders (Chatbot)",
              "System Administrators",
            ].map(r => (
              <span key={r} className="px-4 py-1.5 bg-white border border-amber-200 rounded-full text-sm font-medium text-amber-600 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to manage, monitor, and query C Programming course delivery across 14 departments.</p>
          <div className="w-16 md:w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
<<<<<<< HEAD
            {
              Icon: IconDaily,
              title: "Daily Entry Logging",
              desc: "Faculty submit daily class records per period — theory session, lab program, mini project, own content, absence with reason, or swap with another faculty.",
            },
            {
              Icon: IconDashboard,
              title: "Real-Time Admin Dashboard",
              desc: "Public admin dashboard requires no login. Displays today's class status (Filled, Pending, Absent) across all 14 departments with period-by-period visibility.",
            },
            {
              Icon: IconChatbot,
              title: "FAQ-Based Chatbot",
              desc: "Integrated chatbot responds to faculty name queries, department codes, lab/theory topics, syllabus sessions, period/day queries, and stored FAQ entries via keyword matching.",
            },
            {
              Icon: IconTimetable,
              title: "Weekly Timetable Management",
              desc: "Structured timetable covers Monday to Saturday with 9 periods (08:00 AM – 04:15 PM). Faculty view today's and tomorrow's schedule from their dashboard.",
            },
            {
              Icon: IconSyllabus,
              title: "Syllabus Tracking",
              desc: "45 pre-defined teaching sessions organised across 5 units. Faculty select the syllabus session covered during each theory class to maintain accurate coverage tracking.",
            },
            {
              Icon: IconLab,
              title: "Lab Program Management",
              desc: "10 weekly in-lab programming exercises (Week 1–10) are tracked per faculty. Each lab entry records the program completed and lab work done.",
            },
            {
              Icon: IconRBAC,
              title: "Role-Based Access Control",
              desc: "Three distinct roles: Faculty (login, daily entries), Admin (public dashboard, no login), and Super Admin (full CRUD on all system data). Each role has scoped access.",
            },
            {
              Icon: IconSecret,
              title: "Secret URL Security",
              desc: "Login and admin pages are accessed via obscured URLs to prevent unauthorized discovery, adding a security-by-obscurity layer without requiring complex authentication for public views.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-50 border border-amber-100 text-amber-600">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
=======
            { icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10" />, title: "AI Chatbot Interface", desc: "Conversational chatbot assists faculty with academic queries, resource management, and scheduling guidance." },
            { icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />, title: "Resource Management", desc: "Organise and access C programming course materials, syllabi, lab records, and reference documents." },
            { icon: <CalendarDays className="w-8 h-8 md:w-10 md:h-10" />, title: "Workflow Automation", desc: "Automate routine academic workflows like timetable queries, lab scheduling, and assignment tracking." },
            { icon: <Search className="w-8 h-8 md:w-10 md:h-10" />, title: "Intelligent Search", desc: "Smart search across department resources helps faculty find relevant content instantly." },
            { icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10" />, title: "Academic Insights", desc: "Access aggregated data on course progress, student performance, and departmental metrics." },
            { icon: <Lock className="w-8 h-8 md:w-10 md:h-10" />, title: "Faculty-Only Access", desc: "Secured portal exclusively for C programming faculty with authenticated access controls." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
              <div className="text-amber-600 mb-3 md:mb-4">{icon}</div>
              <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{desc}</p>
>>>>>>> de3f617ced963d7deff0d8774df7d0236beb46aa
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-amber-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Four distinct user types, each with clearly scoped access and responsibilities.</p>
            <div className="w-16 md:w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                role: "Faculty",
                gradient: "from-amber-600 to-amber-800",
                responsibilities: [
                  "Log in using institutional email and password",
                  "View assigned timetable (today and tomorrow)",
                  "Submit daily entries per period: theory, lab, mini project, own content",
                  "Mark absence with reason or record class swaps",
                  "Add or delete extra classes during free periods",
                ],
              },
              {
                role: "Admin (Public)",
                gradient: "from-yellow-600 to-yellow-800",
                responsibilities: [
                  "Access Admin Dashboard via secret URL — no login required",
                  "View today's class schedule across all 14 departments",
                  "Monitor daily entry status: Filled, Pending, or Absent",
                  "View faculty profiles and contact details",
                  "Use the integrated chatbot for instant queries",
                ],
              },
              {
                role: "Super Admin",
                gradient: "from-orange-600 to-orange-800",
                responsibilities: [
                  "Log in using super admin credentials",
                  "Full CRUD on faculties, timetable, syllabus, lab programs",
                  "Manage FAQs, departments, and daily entries",
                  "Reset faculty passwords via update API",
                  "View system statistics dashboard across all data",
                ],
              },
              {
                role: "Students / Stakeholders",
                gradient: "from-stone-600 to-stone-800",
                responsibilities: [
                  "Access the FAQ-based chatbot without login",
                  "Query faculty schedules by name or department",
                  "Retrieve syllabus session details and PPT links",
                  "Look up lab program information and Moodle links",
                  "Get instant answers to period/day schedule queries",
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Five operational steps covering all system user flows — from deployment through daily use.</p>
          <div className="w-16 md:w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            {
              Icon: IconCRUD,
              step: 1,
              title: "Initialise System",
              desc: "Run the DB initialization script to seed 14 departments, 9 period timings, 45 syllabus sessions, 10 lab programs, 14 faculty accounts, timetable entries, and 30+ FAQs.",
            },
            {
              Icon: IconLogin,
              step: 2,
              title: "Faculty Login & Entry",
              desc: "Faculty access the secret login URL, authenticate via JWT, and view today's schedule. For each period, they submit a daily entry — theory, lab, mini project, absence, or swap.",
            },
            {
              Icon: IconMonitor,
              step: 3,
              title: "Admin Dashboard Monitoring",
              desc: "Admin opens the public secret URL (no login). The dashboard shows total classes, filled/pending/absent counts, and class details by period, department, or type.",
            },
            {
              Icon: IconQuery,
              step: 4,
              title: "Chatbot Query",
              desc: "Users type a natural language query. The chatbot runs a priority pipeline — faculty name → department → topic/lab → syllabus session → period/day → FAQ keyword match.",
            },
            {
              Icon: IconCRUD,
              step: 5,
              title: "Super Admin Management",
              desc: "Super Admin logs in and accesses the management dashboard. Full CRUD is available for all data: faculties, timetable, syllabus, lab programs, FAQs, departments, and daily entries.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-amber-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System Callout ───────────────────────────────────────────────── */}
      <div className="bg-amber-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-200 mb-4 uppercase tracking-widest">System Design</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Lightweight Yet Comprehensive</h2>
              <p className="text-amber-200 text-base leading-relaxed mb-6">
                C AcademicScheduler runs on FastAPI with a single SQLite file — no separate database server needed. JWT authentication secures faculty and admin access, while secret URLs protect sensitive pages. Deploy locally, via Docker, or on Render.com cloud.
              </p>
              <ul className="space-y-3">
                {[
                  "Python 3.10+ · FastAPI · SQLAlchemy · SQLite (10 tables)",
                  "JWT authentication (24-hour tokens) · bcrypt password hashing",
                  "Jinja2 server-side HTML rendering · no client framework needed",
                  "Secret URL security for faculty login and admin pages",
                  "No client-side installation — runs in any modern browser",
                  "Deploy via Local, Docker, or Render.com cloud hosting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-amber-200 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Faculty & Departments", value: "14", sub: "C Programming · Course 24UCS271" },
                { label: "Syllabus Sessions", value: "45", sub: "5 Units · Theory + Lab tracking" },
                { label: "Lab Programs", value: "10", sub: "Week 1–10 · In-lab exercises" },
                { label: "Roles", value: "3", sub: "Faculty · Admin (Public) · Super Admin" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-amber-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-amber-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} C AcademicScheduler. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">C Programming Faculty Management · 14 Departments · Daily Entry Logging · FAQ Chatbot</p>
        </div>
      </footer>
    </div>
  );
};

export default EduManageCFaculties;
