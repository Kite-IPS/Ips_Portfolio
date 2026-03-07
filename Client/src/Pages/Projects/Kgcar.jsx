import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollText, BarChart3, Monitor, Lock, RefreshCw, FileText, Zap, Shield, Hourglass } from 'lucide-react';
import KGCAR from '../../assets/projects/KG-CAR.png';
import Black from '../../assets/general/black-badge.png';
import TeamSection from '../../Components/TeamSection';
import Yogesh from '../../assets/members/3rd-4th-yrs/yogesh.png';
import Ranjith from '../../assets/members/3rd-4th-yrs/ranjith.png';


const Kgcar = () => {
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
                <span className="text-purple-600">KG-CAR</span>
                <span className="inline-block ml-2 animate-pulse"><ScrollText className="w-10 h-10 inline" /></span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Certificate Acknowledgment System
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                An innovative solution designed to simplify and secure the distribution and acknowledgment of certificates, enhancing institutional efficiency and document authenticity.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  Back to Home
                </button>
                <a 
                  href="#features" 
                  className="px-6 py-3 bg-white text-purple-600 border border-purple-600 font-medium rounded-md hover:bg-purple-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={KGCAR} alt="KG-CAR System" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <div className="w-16 md:w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 mb-3 md:mb-4"><ScrollText className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Effortless Certificate Management</h3>
            <p className="text-gray-600 text-sm md:text-base">Automates the entire certificate issuance and acknowledgment process for streamlined operations.</p>
          </div>
          
          
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 mb-3 md:mb-4"><BarChart3 className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm md:text-base">Monitor when and by whom certificates were received, with comprehensive audit trails and analytics.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 mb-3 md:mb-4"><Monitor className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">User-Friendly Dashboard</h3>
            <p className="text-gray-600 text-sm md:text-base">Intuitive interface provides administrators with complete visibility and control over certificate distribution.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 mb-3 md:mb-4"><Lock className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 text-sm md:text-base">Prevents certificate fraud and misplacement with advanced security features and digital verification.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 mb-3 md:mb-4"><RefreshCw className="w-8 h-8 md:w-10 md:h-10" /></div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Seamless Integration</h3>
            <p className="text-gray-600 text-sm md:text-base">Easily connects with existing institutional databases and management systems for unified operations.</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-purple-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-16 md:w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">1</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Certificate Generation</h3>
                <p className="text-gray-600 text-sm md:text-base">The system generates and registers each certificate with unique identifiers.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-purple-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">2</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">QR Code Assignment</h3>
                <p className="text-gray-600 text-sm md:text-base">Each certificate is assigned a unique QR code or RFID tag for digital acknowledgment.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-purple-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">3</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Receipt Acknowledgment</h3>
                <p className="text-gray-600 text-sm md:text-base">Recipients scan the QR code or use digital tools to acknowledge receipt of certificates.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-purple-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">4</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600 text-sm md:text-base">Institutions can track, verify, and manage certificate distribution in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose KG-CAR?</h2>
          <div className="w-16 md:w-24 h-1 bg-purple-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming certificate management for educational institutions and organizations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 mr-3"><FileText className="w-6 h-6" /></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eliminates Paperwork</h3>
                <p className="text-gray-600">Say goodbye to paper-based certificate management and manual record-keeping with complete digitization.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 mr-3"><Zap className="w-6 h-6" /></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Verification</h3>
                <p className="text-gray-600">Get immediate acknowledgment and confirmation when certificates are received with timestamp proof.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 mr-3"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Protect against certificate forgery and fraud with built-in digital verification measures.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 mr-3"><Hourglass className="w-6 h-6" /></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Saves Time & Resources</h3>
                <p className="text-gray-600">Reduce administrative burden and costs associated with traditional certificate management processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection
        projectName="KG-CAR"
        accentColor="purple"
        members={[
          { name: "Yogesh Venugopal R", role: "Developer", specialty: "Frontend Development", imageUrl: Yogesh, badges: [Black], github: "https://github.com/YOGESH-VENUGOPAL", linkedin: "https://www.linkedin.com/in/yogesh-venugopal-r-b76973316/" },
          { name: "Ranjith M", role: "Developer", specialty: "Full-Stack Developer", imageUrl: Ranjith, badges: [Black], github: "https://github.com/Ranjithmkrishna", linkedin: "https://www.linkedin.com/in/ranjith-m-a1b8b2303/" },
        ]}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} KG-CAR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Kgcar;