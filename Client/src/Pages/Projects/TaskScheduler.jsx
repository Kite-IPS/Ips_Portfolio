import { Link } from 'react-router-dom';
import TASKSCHEDULER from '../../assets/projects/TASK-SCHEDULER.png';

/* ─── Inline SVG icon components ─────────────────────────────────────────── */
const IconTask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/><path d="M9 7h6M9 17h4"/>
  </svg>
);
const IconStatus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconRoles = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconAudit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconSubtask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M7 7v4a3 3 0 0 0 3 3h4"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconAttachment = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
  </svg>
);
const IconLogin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
  </svg>
);
const IconAssign = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
  </svg>
);
const IconUpdate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    <polyline points="6 10 9 13 12 10 15 13 18 10"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconDocker = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.954-.658h2.118a.186.186 0 00.186-.185V8.52a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.956 0h2.12a.185.185 0 00.184-.185V8.52a.185.185 0 00-.185-.185H8.073a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.955 0h2.12a.185.185 0 00.184-.185V8.52a.185.185 0 00-.184-.185H5.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186M23.07 11.9a3.574 3.574 0 00-1.538-.974c.204-.64.157-1.332-.137-1.962-.453-.952-1.408-1.503-2.473-1.503-.187 0-.374.016-.558.05-.44-.898-1.328-1.51-2.407-1.51-.474 0-.93.13-1.326.367-.455-.707-1.237-1.13-2.07-1.13-.702 0-1.37.27-1.877.757-.47-.17-.964-.26-1.464-.26C6.977 5.735 5 7.712 5 10.135v.25a3.51 3.51 0 00-1.72.962C2.437 12.147 2 13.246 2 14.423c0 2.54 2.064 4.604 4.604 4.604h12.762C21.906 19.027 24 16.963 24 14.423c0-1.05-.35-2.065-.93-2.522z"/>
  </svg>
);

const TaskScheduler = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style>{`
        @media (max-width: 640px) {
          .hero-title { font-size: 2.25rem; line-height: 2.5rem; }
          .hero-subtitle { font-size: 1.25rem; line-height: 1.75rem; }
          .hero-buttons { flex-direction: column; gap: 0.75rem; }
          .hero-buttons a, .hero-buttons button { width: 100%; text-align: center; justify-content: center; }
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
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Django &amp; React · Docker · REST API
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-slate-700">TASK SCHEDULER</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Institutional Task &amp; Workflow Management System
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A web-based application that streamlines and digitizes the assignment, management, and tracking of tasks across multiple academic and administrative departments — from creation to completion, with full audit trails and automated email notifications.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="#live-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-700 font-medium rounded-md hover:bg-slate-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={TASKSCHEDULER} alt="Task Scheduler Application" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Demo / Deployed Link ─────────────────────────────────────── */}
      <div id="live-demo" className="w-full bg-gradient-to-r from-slate-700 to-slate-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-5">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M6 8h.01M6 12h8M6 16h4"/>
                </svg>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try the Application</h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Access the live deployment below. Log in with your institutional credentials to explore dashboards, manage tasks, and experience the full workflow.
            </p>
            {/* ── REPLACE THE href BELOW WITH YOUR DEPLOYED LINK ── */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 font-semibold text-base rounded-lg hover:bg-slate-100 transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              Open Task Scheduler
            </a>
            <p className="mt-5 text-slate-400 text-sm">
              Requires valid institutional email credentials &nbsp;·&nbsp; Optimised for modern browsers
            </p>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Deployed Across Departments</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["CSE","ECE","MBA","Placement","Kite Office","Admin","HOD","Faculty","Staff"].map(dept => (
              <span key={dept} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm">
                {dept}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features &amp; Benefits</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to manage institutional tasks efficiently — from delegation to completion.</p>
          <div className="w-16 md:w-24 h-1 bg-slate-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconTask,
              title: "Task Creation & Assignment",
              desc: "Create tasks with a title, description, priority level (Urgent / High / Medium / Low), due date, and assignee — scoped to the correct department.",
            },
            {
              Icon: IconStatus,
              title: "Automated Status Tracking",
              desc: "Tasks move through Pending → Ongoing → Completed lifecycle. If a task passes its due date, the system automatically flags it as Overdue.",
            },
            {
              Icon: IconBell,
              title: "Dual Reminder Fields",
              desc: "Configure two independent reminder timestamps per task. The system sends automated email alerts at each reminder time to keep assignees on schedule.",
            },
            {
              Icon: IconMail,
              title: "Automated Email Notifications",
              desc: "Every status change triggers an instant email to the assignee. SMTP errors are gracefully caught and logged without halting the save process.",
            },
            {
              Icon: IconSubtask,
              title: "Hierarchical Subtasks",
              desc: "Break large assignments into child subtasks linked to a parent. Enables granular delegation across teams and departments.",
            },
            {
              Icon: IconAudit,
              title: "Full Audit Trail",
              desc: "Every action — creation, status change, delegation, comment — is logged in Task History with the actor's name and a precise timestamp.",
            },
            {
              Icon: IconAttachment,
              title: "File Attachments",
              desc: "Upload supporting documents at any point. The system records the uploader, file size, and timestamp. Files are organised by year / month / day.",
            },
            {
              Icon: IconRoles,
              title: "Role-Based Access Control",
              desc: "Three distinct roles — Admin, HOD, and Faculty / Staff — each with tailored dashboards, permissions, and workflows.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Each user type has a dedicated dashboard and clearly defined access boundaries.</p>
            <div className="w-16 md:w-24 h-1 bg-slate-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "Admin",
                color: "from-slate-700 to-slate-900",
                lightBg: "bg-slate-50",
                border: "border-slate-200",
                badge: "bg-slate-700 text-white",
                responsibilities: [
                  "Create and assign tasks to specific staff or faculty",
                  "Set task priority: Urgent, High, Medium, or Low",
                  "Define due dates and configure reminder timestamps",
                  "Oversee all departments from a unified dashboard",
                ],
              },
              {
                role: "Head of Department (HOD)",
                color: "from-indigo-600 to-indigo-800",
                lightBg: "bg-indigo-50",
                border: "border-indigo-200",
                badge: "bg-indigo-600 text-white",
                responsibilities: [
                  "Delegate tasks within their respective department",
                  "Monitor department-level task progress and overdue items",
                  "Create subtasks for hierarchical delegation to staff",
                  "Review completed tasks and add follow-up comments",
                ],
              },
              {
                role: "Faculty / Staff",
                color: "from-teal-600 to-teal-800",
                lightBg: "bg-teal-50",
                border: "border-teal-200",
                badge: "bg-teal-600 text-white",
                responsibilities: [
                  "Receive and review assigned tasks with descriptions",
                  "Update task status as work progresses (Pending → Ongoing → Completed)",
                  "Upload relevant file attachments upon completion",
                  "Respond to follow-up comments on task threads",
                ],
              },
            ].map(({ role, color, lightBg, border, badge, responsibilities }) => (
              <div key={role} className={`bg-white rounded-xl shadow-md hover:shadow-xl transition border ${border} overflow-hidden flex flex-col`}>
                <div className={`bg-gradient-to-r ${color} px-6 py-4`}>
                  <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Role</span>
                  <h3 className="text-white text-lg font-bold mt-0.5">{role}</h3>
                </div>
                <ul className="p-6 space-y-3 flex-1">
                  {responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Four simple steps from login to task completion.</p>
          <div className="w-16 md:w-24 h-1 bg-slate-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconLogin,
              step: 1,
              title: "Login",
              desc: "Open the app and sign in with your institutional email address. Your role-specific dashboard loads automatically.",
            },
            {
              Icon: IconAssign,
              step: 2,
              title: "Create & Assign Task",
              desc: "Enter the task title, description, priority, due date, optional reminders, and select the assignee with their department.",
            },
            {
              Icon: IconUpdate,
              step: 3,
              title: "Update & Delegate",
              desc: "Assignees update status as work progresses. Subtasks can be created for large assignments. File attachments are supported at any stage.",
            },
            {
              Icon: IconMonitor,
              step: 4,
              title: "Monitor & Audit",
              desc: "Every action is timestamped in Task History. Overdue flagging happens automatically. Administrators review the full audit trail.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-slate-600">
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

      {/* ── Audit Trail Callout ───────────────────────────────────────────── */}
      <div className="bg-slate-800 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 mb-4 uppercase tracking-widest">Accountability</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Comprehensive Audit Trail</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Every single interaction with a task — assignment, status change, delegation, comment, or file upload — is permanently recorded in the Task History log. This creates an unbreakable chain of accountability across all departments.
              </p>
              <ul className="space-y-3">
                {[
                  "Timestamped log of every action on every task",
                  "Actor identity (user name) captured for each change",
                  "Optional follow-up comments attached to history entries",
                  "Permanent records — history is never deleted",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
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
                { label: "Task Statuses", value: "4", sub: "Pending · Ongoing · Completed · Overdue" },
                { label: "Priority Levels", value: "4", sub: "Urgent · High · Medium · Low" },
                { label: "Reminder Fields", value: "2", sub: "Per task — auto-email at trigger time" },
                { label: "User Roles", value: "3", sub: "Admin · HOD · Faculty / Staff" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-slate-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-slate-400 text-xs leading-snug">{sub}</div>
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
          <div className="w-16 md:w-24 h-1 bg-slate-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-700">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              Technology Stack
            </h3>
            <div className="space-y-3">
              {[
                { layer: "Frontend", tech: "React (Vite)", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
                { layer: "Backend", tech: "Django REST Framework", color: "bg-green-50 text-green-700 border-green-200" },
                { layer: "Database", tech: "PostgreSQL / SQLite", color: "bg-blue-50 text-blue-700 border-blue-200" },
                { layer: "Email", tech: "SMTP via Django send_mail", color: "bg-orange-50 text-orange-700 border-orange-200" },
                { layer: "Deployment", tech: "Docker &amp; docker-compose", color: "bg-slate-50 text-slate-700 border-slate-200" },
                { layer: "Proxy", tech: "nginx reverse proxy", color: "bg-purple-50 text-purple-700 border-purple-200" },
              ].map(({ layer, tech, color }) => (
                <div key={layer} className="flex items-center justify-between gap-3">
                  <span className="text-gray-500 text-sm w-28 flex-shrink-0">{layer}</span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${color}`} dangerouslySetInnerHTML={{ __html: tech }} />
                </div>
              ))}
            </div>
          </div>
          {/* System Requirements */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <IconShield />
              System Requirements
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Network Access", detail: "Connected to the college network or internet to reach the hosted application." },
                { title: "Modern Web Browser", detail: "Latest version of Chrome, Edge, Firefox, or Safari for full compatibility." },
                { title: "User Credentials", detail: "A registered institutional email address and password are required for login — no username-based login." },
                { title: "Docker (Admins)", detail: "Administrators hosting the application require a Docker environment with valid .env configuration for SMTP credentials." },
              ].map(({ title, detail }) => (
                <li key={title} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-600">
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
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Task Scheduler Application. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Built with Django &amp; React · Containerised with Docker</p>
        </div>
      </footer>
    </div>
  );
};

export default TaskScheduler;
