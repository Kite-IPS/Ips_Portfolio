import { Link } from 'react-router-dom';
import TeamSection from '../../Components/TeamSection';
import Sri from '../../assets/members/2nd-yrs/sri.png';
import Sandy from '../../assets/members/2nd-yrs/sandy.png';
import Boo from '../../assets/members/2nd-yrs/boo.png';
import Black from '../../assets/general/black-badge.png';
import LETTERGENERATOR from '../../assets/projects/LETTER-GENERATOR.png';

/* ─── SVG Icon Components ─────────────────────────────────────────────────── */
const IconTemplate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconInstant = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const IconDynamic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconFormat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/>
    <line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/>
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
const IconNav = () => (
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
const IconFill = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconRegen = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
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

const LetterGenerator = () => {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Template Engine · PDF / Text Export · No Login Required
              </span>
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                <span className="text-blue-600">LETTER GENERATOR</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-600 mb-5">
                Automated Document &amp; Letter Generation Portal
              </h2>
              <p className="section-text text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                A web-based content generation platform that eliminates manual drafting. Select a document type, fill in the required fields, and instantly generate a professionally formatted letter, application, or template — ready to download as PDF or text.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a
                  href="https://generatorportal.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 font-medium rounded-md hover:bg-blue-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  Try Live Demo
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={LETTERGENERATOR} alt="Letter Generator Portal" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scope Banner ─────────────────────────────────────────────────── */}
      <div className="bg-blue-50 border-b border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Used By</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Students Generating Academic Documents","Job Seekers Creating Formal Applications","Administrative Users Generating Official Letters","Content Users Requiring Formatted Templates","System Administrators"].map(r => (
              <span key={r} className="px-4 py-1.5 bg-white border border-blue-200 rounded-full text-sm font-medium text-blue-600 shadow-sm">
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Everything needed to draft, generate, and download professional documents — instantly.</p>
          <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              Icon: IconTemplate,
              title: "Template-Based Generation",
              desc: "Select from predefined document types — letters, applications, templates. The system loads a dynamic form tailored to that document's required fields.",
            },
            {
              Icon: IconInstant,
              title: "Instant Document Output",
              desc: "Click Generate and the template engine immediately processes your inputs into a professionally structured, formatted document — no manual effort required.",
            },
            {
              Icon: IconDynamic,
              title: "Dynamic Input Forms",
              desc: "Each document type loads its own specific form. Fill in Name, Recipient, Subject, and other contextual fields — the form adapts to the content.",
            },
            {
              Icon: IconEdit,
              title: "Edit & Regenerate",
              desc: "Not satisfied with the output? Modify any input field and regenerate instantly until the content matches your requirements exactly.",
            },
            {
              Icon: IconDownload,
              title: "PDF & Text Export",
              desc: "Download the generated document as a PDF or text file directly from the browser. Print-ready output, no additional formatting needed.",
            },
            {
              Icon: IconFormat,
              title: "Consistent Formatting",
              desc: "The template engine enforces professional formatting throughout — correct headings, spacing, salutations, and structure on every generated document.",
            },
            {
              Icon: IconWeb,
              title: "Accessible from Any Device",
              desc: "Fully web-based with no installation required. Access the portal from any device with a browser and internet — desktop, tablet, or mobile.",
            },
            {
              Icon: IconAccuracy,
              title: "Minimises Formatting Errors",
              desc: "By automating structure and layout, the system eliminates common manual formatting mistakes and ensures every document meets professional standards.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
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
            <p className="text-gray-500 max-w-xl mx-auto mb-4">Each user type interacts with the portal differently based on their document needs.</p>
            <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                role: "Student",
                gradient: "from-blue-600 to-blue-800",
                responsibilities: [
                  "Access portal to generate academic documents",
                  "Select document type (e.g., leave application, request letter)",
                  "Fill in required fields and generate output",
                  "Download PDF or text for submission",
                ],
              },
              {
                role: "Job Seeker",
                gradient: "from-sky-600 to-sky-800",
                responsibilities: [
                  "Create formal job applications and cover letters",
                  "Select appropriate template for the role or industry",
                  "Enter personal details, recipient, subject, and body",
                  "Download and submit the generated document",
                ],
              },
              {
                role: "Administrative User",
                gradient: "from-indigo-600 to-indigo-800",
                responsibilities: [
                  "Generate official institutional letters",
                  "Use templates for recurring formal communications",
                  "Ensure consistent formatting across all issued documents",
                  "Download for printing or digital distribution",
                ],
              },
              {
                role: "System Administrator",
                gradient: "from-slate-600 to-slate-800",
                responsibilities: [
                  "Manage available document templates",
                  "Configure system settings and template logic",
                  "Monitor portal performance and availability",
                  "Maintain and update the template engine",
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
          <p className="text-gray-500 max-w-xl mx-auto mb-4">Five simple steps from opening the portal to downloading your formatted document.</p>
          <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {[
            {
              Icon: IconNav,
              step: 1,
              title: "Access the System",
              desc: "Open a browser and navigate to generatorportal.netlify.app. The portal loads immediately — no login or installation needed.",
            },
            {
              Icon: IconSelect,
              step: 2,
              title: "Select Document Type",
              desc: "Choose the required document type from the available options. The system loads a dynamic input form tailored to that document.",
            },
            {
              Icon: IconFill,
              step: 3,
              title: "Enter Details",
              desc: "Provide the necessary information — Name, Recipient, Subject, and other required fields — then click Generate to create the output.",
            },
            {
              Icon: IconRegen,
              step: 4,
              title: "Edit or Regenerate",
              desc: "Review the generated content. Modify any input fields and regenerate as many times as needed until the document is exactly right.",
            },
            {
              Icon: IconExport,
              step: 5,
              title: "Download / Export",
              desc: "Click Download to save the generated document as a PDF or text file locally — print-ready with no additional formatting required.",
            },
          ].map(({ Icon, step, title, desc }) => (
            <div key={step} className="process-step bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step}
                </div>
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Step {step}</span>
              </div>
              <div className="text-blue-600"><Icon /></div>
              <div>
                <h3 className="feature-title text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── System Callout ───────────────────────────────────────────────── */}
      <div className="bg-blue-900 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 mb-4 uppercase tracking-widest">System Design</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Simple, Fast &amp; Professional</h2>
              <p className="text-blue-200 text-base leading-relaxed mb-6">
                The Generator Portal is built around a template engine that dynamically creates structured content from user inputs. No data is stored — every generation is stateless and immediate, making it fast, private, and accessible to anyone.
              </p>
              <ul className="space-y-3">
                {[
                  "No login or account creation required",
                  "Template engine dynamically fills structured content",
                  "Generated documents available for instant download",
                  "PDF and text export formats supported",
                  "Works on any browser-capable device with internet",
                  "Professional formatting enforced on every output",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-blue-200 text-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Output Formats", value: "PDF+TXT", sub: "Download-ready · No extra formatting" },
                { label: "Login Required", value: "None", sub: "Open access — no credentials needed" },
                { label: "Generation", value: "Instant", sub: "Real-time template engine processing" },
                { label: "Device Support", value: "Any", sub: "Web-based · Desktop · Mobile · Tablet" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-blue-200 text-sm font-semibold mb-1">{label}</div>
                  <div className="text-blue-400 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ──────────────────────────────────────────────── */}
      <TeamSection
        projectName="Letter Generator"
        accentColor="blue"
        members={[
          { name: "Srishanth", role: "Developer", specialty: "Embedded & IoT", imageUrl: Sri, badges: [Black], github: "https://github.com/Srishanth-023", linkedin: "https://www.linkedin.com/in/sri-shanth-0520a9315/" },
          { name: "Santhosh I", role: "Developer", specialty: "Front-end & DM", imageUrl: Sandy, badges: [Black], github: "https://github.com/Santhosh-I", linkedin: "https://www.linkedin.com/in/santhosh2006" },
          { name: "Boomathi", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Boo, badges: [Black], github: "https://github.com", linkedin: "https://linkedin.com" },
        ]}
      />

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} Letter Generator Portal. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-2">Template Engine · PDF / Text Export · Automated Document Generation</p>
        </div>
      </footer>
    </div>
  );
};

export default LetterGenerator;
