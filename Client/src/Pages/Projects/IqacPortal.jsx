import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, ClipboardList, Search, Users, Bell, BarChart3, Lock } from 'lucide-react';
import IQACPORTAL from '../../assets/projects/IQAC-PORTAL.jpeg';

const IqacPortal = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

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

      {/* Hero Section */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                <span className="text-blue-700">IQAC PORTAL</span>
                <span className="inline-block ml-2 animate-pulse"><Landmark className="w-10 h-10 inline" /></span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Institutional Quality Assurance Cell Portal
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                A digital portal to streamline the event approval process with a structured hierarchical workflow, ensuring transparency and traceability across departments.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                >
                  Back to Home
                </button>
                <a
                  href="#features"
                  className="px-6 py-3 bg-white text-blue-700 border border-blue-700 font-medium rounded-md hover:bg-blue-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={IQACPORTAL} alt="IQAC Portal" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <div className="w-16 md:w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-blue-700 mb-3 md:mb-4"><ClipboardList className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Event Approval Workflow</h3>
            <p className="text-gray-600 text-sm md:text-base">Structured hierarchical approval process for events, ensuring each stage is reviewed and authorised properly.</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-blue-700 mb-3 md:mb-4"><Search className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Transparency & Traceability</h3>
            <p className="text-gray-600 text-sm md:text-base">Every action is logged and traceable, providing full audit trails for institutional quality assurance.</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-blue-700 mb-3 md:mb-4"><Users className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Role-Based Access</h3>
            <p className="text-gray-600 text-sm md:text-base">Each department head, faculty, and admin has tailored access levels to manage their scope of responsibilities.</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-blue-700 mb-3 md:mb-4"><Bell className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Notifications</h3>
            <p className="text-gray-600 text-sm md:text-base">Instant alerts at every approval stage keep all stakeholders informed of pending and completed actions.</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-blue-700 mb-3 md:mb-4"><BarChart3 className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600 text-sm md:text-base">Comprehensive insights on event activity, approvals, and department engagement for quality reporting.</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-blue-700 mb-3 md:mb-4"><Lock className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
            <p className="text-gray-600 text-sm md:text-base">Built with institutional data security standards, ensuring all records are protected and compliant.</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-blue-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-16 md:w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: 1, title: "Submit Request", desc: "Faculty or organiser submits an event request through the portal with all required details." },
              { step: 2, title: "HOD Review", desc: "Department Head reviews and approves or returns the request with feedback." },
              { step: 3, title: "IQAC Approval", desc: "IQAC committee evaluates the event for compliance and quality standards." },
              { step: 4, title: "Confirmation", desc: "Final approval is communicated to the organiser and recorded in the system." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                  <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">{step}</div>
                  <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} IQAC Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default IqacPortal;
