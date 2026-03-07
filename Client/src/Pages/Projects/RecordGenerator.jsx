import { Link } from 'react-router-dom';
import TeamSection from '../../Components/TeamSection';
import Ranjith from '../../assets/members/3rd-4th-yrs/ranjith.png';
import Black from '../../assets/general/black-badge.png';
import RECORDGENERATOR from '../../assets/projects/RECORD-GENERATOR.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconPdf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconFormat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/>
    <line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/>
  </svg>
);
const IconImage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);
const IconNoPaste = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
);
const IconInstant = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconWeb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconAccuracy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const IconSelect = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/>
    <path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>
  </svg>
);
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconGenerate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const RecordGenerator = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                No Login Required · PDF Generation · No Copy-Paste
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-teal-700">RECORD GENERATOR</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Academic Experiment Record Documentation Platform
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A web application that streamlines and digitizes academic experiment record creation. Students manually enter experiment details, upload code and output images, and instantly generate a professionally formatted, download-ready PDF — no login, no copy-paste, no manual formatting.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="https://record-generator.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-700 border border-teal-700 font-medium rounded-md hover:bg-teal-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={RECORDGENERATOR} alt="Record Generator" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-teal-50 border-b border-teal-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">Used By</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Students Preparing Academic Records","Faculty Reviewing Records","Departments Using Digital Submission","Academic Activities Requiring Experiment Documentation"].map(role => (
              <span key={role} className="px-4 py-1.5 bg-white border border-teal-200 rounded-full text-sm font-medium text-teal-700 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to create and download a professional academic experiment record — in minutes.</p>
          <div className="w-16 md:w-24 h-1 bg-teal-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconInstant,
              title: "Instant PDF Generation",
              desc: "Click Generate and the system immediately processes the entered data and produces a formatted, download-ready PDF academic record.",
            },
            {
              Icon: IconFormat,
              title: "Uniform Document Formatting",
              desc: "Every generated record follows a standardized academic format — consistent structure, headings, and layout across all submissions.",
            },
            {
              Icon: IconImage,
              title: "Code & Output Image Upload",
              desc: "Upload screenshot images for code and output sections. Images are embedded directly into the generated PDF alongside text content.",
            },
            {
              Icon: IconNoPaste,
              title: "Copy-Paste Restriction",
              desc: "Manual entry is enforced — copy-paste is disabled and browser extension workarounds are blocked, ensuring academic integrity.",
            },
            {
              Icon: IconAccuracy,
              title: "Accuracy & Consistency",
              desc: "Structured form fields guide students through every required section, reducing errors and ensuring all details are captured correctly.",
            },
            {
              Icon: IconDownload,
              title: "Direct PDF Download",
              desc: "Students download the completed PDF directly from the browser after generation — no account, no email, immediate access.",
            },
            {
              Icon: IconWeb,
              title: "No Installation Required",
              desc: "Fully web-based — access from any computer or mobile device with a browser and internet connection. No software to install.",
            },
            {
              Icon: IconPdf,
              title: "Reduces Manual Writing",
              desc: "Eliminates the time and effort of handwriting or manually formatting experiment records, improving readability and presentation.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-50 border border-teal-100 text-teal-700">
                <Icon />
              </div>
              <h3 className="feature-title text-base md:text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles & Responsibilities ──────────────────────────────────────── */}
      <div className="bg-teal-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roles &amp; Responsibilities</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Each participant in the academic record workflow has defined responsibilities within the system.</p>
            <div className="w-16 md:w-24 h-1 bg-teal-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "Student",
                gradient: "from-teal-600 to-teal-800",
                responsibilities: [
                  "Access the portal using the provided link",
                  "Manually enter all required experiment details",
                  "Upload images for code and output sections",
                  "Verify all entered information before generating",
                  "Click Generate to create the PDF record",
                  "Download and save the generated PDF",
                ],
              },
              {
                role: "Faculty",
                gradient: "from-cyan-600 to-cyan-800",
                responsibilities: [
                  "Review generated student records for accuracy",
                  "Assess quality and completeness of submissions",
                  "Provide feedback where records are incomplete",
                  "Approve digital submissions for department records",
                ],
              },
              {
                role: "Department / Institution",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Accept digital PDF records as official submissions",
                  "Maintain archive of generated student records",
                  "Ensure portal availability for students",
                  "Periodically check system for performance",
                  "Maintain updated browser compatibility",
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Four straightforward steps from opening the portal to downloading your formatted academic record.</p>
          <div className="w-16 md:w-24 h-1 bg-teal-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconLink,
              step: 1,
              title: "Access Portal",
              desc: "Open the Record Generator portal via the provided link. The main entry page loads — no login or registration needed.",
            },
            {
              Icon: IconSelect,
              step: 2,
              title: "Select Academic Details",
              desc: "Choose your Roll Number and Year from the dropdowns, then click Enter to navigate to the record entry page.",
            },
            {
              Icon: IconEdit,
              step: 3,
              title: "Enter Experiment Details",
              desc: "Manually type Title, Aim, Procedure/Algorithm, Code (with image), Output image, and Result. Copy-paste is disabled — all text must be typed.",
            },
            {
              Icon: IconGenerate,
              step: 4,
              title: "Generate & Download PDF",
              desc: "Click Generate. The system processes your data and produces a formatted PDF academic record ready for immediate download.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-teal-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System Callout ───────────────────────────────────────────────── */}
      <div className="bg-teal-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-teal-200 mb-4 uppercase tracking-widest">Data &amp; System</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Simple, Secure &amp; Straightforward</h2>
              <p className="text-teal-200 text-base leading-relaxed mb-6">
                The system processes data temporarily for PDF generation only. No credentials, no student data, and no generated records are stored server-side — ensuring complete privacy with zero retention.
              </p>
              <ul className="space-y-3">
                {[
                  "No user credentials or login required",
                  "Data processed temporarily — nothing stored server-side",
                  "Students are responsible for saving their own PDFs",
                  "Copy-paste disabled to ensure academic integrity",
                  "Works on any browser-capable device with internet",
                  "Refresh the page or re-enter if generation fails",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-teal-200 text-sm">
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
                { label: "Output Format", value: "PDF", sub: "Formatted · Print-ready · Download instantly" },
                { label: "Login Required", value: "None", sub: "Open access — no credentials needed" },
                { label: "Data Storage", value: "Zero", sub: "No server-side retention of any student data" },
                { label: "Copy-Paste", value: "Blocked", sub: "Manual entry enforced for integrity" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-teal-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-teal-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ──────────────────────────────────────────────── */}
      <TeamSection
        projectName="Record Generator"
        accentColor="teal"
        members={[
          { name: "Ranjith M", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Ranjith, badges: [Black], github: "https://github.com/Ranjithmkrishna", linkedin: "https://www.linkedin.com/in/ranjith-m-a1b8b2303/" },
        ]}
      />

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Record Generator. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">PDF Generation · No Login · Academic Experiment Record Documentation</p>
        </div>
      </footer>
    </div>
  );
};

export default RecordGenerator;
