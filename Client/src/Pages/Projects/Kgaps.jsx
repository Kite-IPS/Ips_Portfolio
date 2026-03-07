import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, BarChart3, Zap, PenLine, Lock, Search, RefreshCw } from 'lucide-react';
import KGAPS from '../../assets/projects/KG-APS.jpg';
import Black from '../../assets/general/black-badge.png';
import TeamSection from '../../Components/TeamSection';
import Vinu from '../../assets/members/2nd-yrs/vinu.png';
import Taya from '../../assets/members/2nd-yrs/taya.png';
import Sandy from '../../assets/members/2nd-yrs/sandy.png';

const Kgaps = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Additional CSS for media queries */}
      <style>{`
        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }
          .hero-buttons a {
            width: 100%;
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
            line-height: 2.25rem;
          }
          .section-text {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .feature-title {
            font-size: 1.25rem;
          }
          
          .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }
        
        @media (max-width: 480px) {
          .process-step {
            padding: 1rem;
          }
          .step-number {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.25rem;
          }
        }
      `}</style>
      
      {/* Hero Section */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                <span className="text-pink-600">KG-APS</span>
                <span className="inline-block ml-2 animate-pulse"><Rocket className="w-10 h-10 inline" /></span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Smart Academic Progress Tracking System
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                A comprehensive dashboard designed to help educational institutions track, update, and analyze student academic performance with precision and efficiency.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
                >
                  Back to Home
                </button>
                <a 
                  href="#features" 
                  className="px-6 py-3 bg-white text-pink-600 border border-pink-600 font-medium rounded-md hover:bg-pink-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={KGAPS} alt="KG-APS Dashboard" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <div className="w-16 md:w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 mb-3 md:mb-4"><BarChart3 className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Centralized Dashboard</h3>
            <p className="text-gray-600 text-sm md:text-base">View and manage all academic records in one intuitive interface, eliminating data silos.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 mb-3 md:mb-4"><Zap className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm md:text-base">Monitor students grades, attendance, and progress instantaneously for timely interventions.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 mb-3 md:mb-4"><PenLine className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Automated Reports</h3>
            <p className="text-gray-600 text-sm md:text-base">Generate comprehensive reports for students, faculty, and parents with a single click.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 mb-3 md:mb-4"><Lock className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 text-sm md:text-base">Enterprise-grade security ensures data accuracy, privacy, and confidentiality.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 mb-3 md:mb-4"><Search className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Insightful Analytics</h3>
            <p className="text-gray-600 text-sm md:text-base">Gain valuable insights into academic trends for data-driven decision making.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 mb-3 md:mb-4"><RefreshCw className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Seamless Integration</h3>
            <p className="text-gray-600 text-sm md:text-base">Easily integrates with existing college management systems and workflows.</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-pink-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-16 md:w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">1</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Data Collection</h3>
                <p className="text-gray-600 text-sm md:text-base">Student academic data (grades, attendance, assignments) is uploaded to the system.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-pink-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">2</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Analysis</h3>
                <p className="text-gray-600 text-sm md:text-base">Dashboard visualizes trends, strengths, and areas of improvement for each student.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-pink-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">3</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Access & Insights</h3>
                <p className="text-gray-600 text-sm md:text-base">Students, faculty, and administrators access real-time insights through intuitive interfaces.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-pink-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">4</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Action & Improvement</h3>
                <p className="text-gray-600 text-sm md:text-base">Automated reports and alerts keep stakeholders informed about progress and areas for intervention.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection
        projectName="KG-APS"
        accentColor="pink"
        members={[
          { name: "Vinu Karthick D", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Vinu, badges: [Black], github: "https://github.com/Vinu-Karthick", linkedin: "https://linkedin.com" },
          { name: "Tayanitha", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Taya, badges: [Black], github: "https://github.com", linkedin: "https://linkedin.com" },
          { name: "Santhosh I", role: "Developer", specialty: "Front-end & DM", imageUrl: Sandy, badges: [Black], github: "https://github.com/Santhosh-I", linkedin: "https://www.linkedin.com/in/santhosh2006" },
        ]}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} KG-APS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Kgaps;