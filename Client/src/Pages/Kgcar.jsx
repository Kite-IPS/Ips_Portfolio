import { Link } from 'react-router-dom';
import KGCAR from '../assets/KG-CAR.png';
import Black from '../assets/black-badge.png';
import White from '../assets/IPS WHITE batch 1.png';
import Rajiv from '../assets/rajiv.png';
import Yogesh from '../assets/yogesh.png';
import Marudhu from '../assets/marudhu.png';
import Nishanth from '../assets/nishanth.png';
import SK from '../assets/sk.png';


const Kgcar = () => {
  const teamMembers = [
     {
        name: "Rajiv N",
        role: "Entrepreneur",
        specialty: "Devops & Frontend Development",
       
        imageUrl: Rajiv,
        badges: [White],
        github: "https://github.com/rajiv2004-cloud",
        linkedin: "https://www.linkedin.com/in/rajiv-cloud"
      },
      {
            name: "Marudhu Paandian K",
            role: "Entrepreneur",
            specialty: "Cyber Security",
            imageUrl: Marudhu,
            badges: [White],
            github: "https://github.com/marudhu2004",
            linkedin: "https://www.linkedin.com/in/marudhu2004/"
          },
          {
            name: "Nishanth R",
            role: "Entrepreneur",
            specialty: "Full-Stack Development",
            imageUrl: Nishanth,
            badges: [White],
            github: "https://github.com/NishanthSbz",
            linkedin: "https://www.linkedin.com/in/nishanth-r-86388a259/"
          },

     {
        name: "Yogesh Venugopal R",
        role: "Developer",
        specialty: "Frontend Development", 
        imageUrl: Yogesh,
        badges: [Black],
        github: "https://github.com/YogeshVenugopal",
        linkedin: "https://www.linkedin.com/in/yogesh-venugopal/"
      },
      {
          name: "Sivakanesh SK",
          role: "Developer", 
          specialty: "Backend Development",
          imageUrl: SK,
          badges: [Black],
          github: "http://github.com/sivakaneshh",
          linkedin: "https://www.linkedin.com/in/sivakanesh-s-k-632008281/"
        },
   
  ];

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
                <span className="inline-block ml-2 animate-pulse">📜</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Certificate Acknowledgment System
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                An innovative solution designed to simplify and secure the distribution and acknowledgment of certificates, enhancing institutional efficiency and document authenticity.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
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
            <div className="text-purple-600 text-3xl md:text-4xl mb-3 md:mb-4">📜</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Effortless Certificate Management</h3>
            <p className="text-gray-600 text-sm md:text-base">Automates the entire certificate issuance and acknowledgment process for streamlined operations.</p>
          </div>
          
          
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm md:text-base">Monitor when and by whom certificates were received, with comprehensive audit trails and analytics.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 text-3xl md:text-4xl mb-3 md:mb-4">🖥️</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">User-Friendly Dashboard</h3>
            <p className="text-gray-600 text-sm md:text-base">Intuitive interface provides administrators with complete visibility and control over certificate distribution.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 text-3xl md:text-4xl mb-3 md:mb-4">🔒</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 text-sm md:text-base">Prevents certificate fraud and misplacement with advanced security features and digital verification.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-purple-600 text-3xl md:text-4xl mb-3 md:mb-4">🔄</div>
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
              <div className="text-purple-600 text-2xl mr-3">📄</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eliminates Paperwork</h3>
                <p className="text-gray-600">Say goodbye to paper-based certificate management and manual record-keeping with complete digitization.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 text-2xl mr-3">⚡</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Verification</h3>
                <p className="text-gray-600">Get immediate acknowledgment and confirmation when certificates are received with timestamp proof.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 text-2xl mr-3">🛡️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Protect against certificate forgery and fraud with built-in digital verification measures.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-purple-600 text-2xl mr-3">⏳</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Saves Time & Resources</h3>
                <p className="text-gray-600">Reduce administrative burden and costs associated with traditional certificate management processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Updated for 5 members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-16 md:w-24 h-1 bg-purple-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The talented professionals who contributed to develop KG-CAR
          </p>
        </div>
        
        {/* Updated grid for 5 members */}
        <div className="team-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden group">
              <div className="relative overflow-hidden h-48 sm:h-52">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      {member.github && (
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-300 transition-colors"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-300 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-base md:text-lg text-gray-900">{member.name}</h3>
                <p className="text-purple-600 font-medium text-sm md:text-base">{member.role}</p>
                <p className="text-gray-600 text-xs md:text-sm">{member.specialty}</p>
                <div className="flex justify-center space-x-1 mt-2">
                  {member.badges.map((badge, badgeIndex) => (
                    <img 
                      key={badgeIndex} 
                      src={badge} 
                      alt="Badge" 
                      className="w-5 h-5 md:w-6 md:h-6"
                      title="Project Badge"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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