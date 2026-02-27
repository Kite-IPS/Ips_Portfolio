import { Link } from 'react-router-dom';
import KGAPS from '../assets/KG-APS.jpg';
import Black from '../assets/black-badge.png';
import White from '../assets/IPS WHITE batch 1.png';
import Adithya from '../assets/adithya.png';
import Mitun from '../assets/mithun.png';
import Naagaroshan from '../assets/nagaroshan.png';
import Rishwanth from '../assets/rishwanth.png';
import Vigneshwar from '../assets/vigneshwar.png';

const Kgaps = () => {
  const teamMembers = [
    {
      name: "Adithya G",
      role: "Developer",
      specialty: "Full-Stack Development", 
      imageUrl: Adithya,
      badges: [White],
      github: "https://github.com/Adithya14255",
      linkedin: "https://www.linkedin.com/in/adithya-g-a2085b268/"
    },
    {
      name: "Vigneshwar SU",
      role: "Developer", 
      specialty: "Frontend Development",
      imageUrl: Vigneshwar,
      badges: [White],
      github: "https://github.com/Vigneshwar-SU",
      linkedin: "https://www.linkedin.com/in/vigneshwar-s-u-1a8467247/"
    },
    {
      name: "Nagaroshan NS",
      role: "Developer", 
      specialty: "Backend Development",
      imageUrl: Naagaroshan,
      badges: [White],
      github: "https://github.com/Roshan0909",
      linkedin: "https://www.linkedin.com/in/nagaroshan-ns-87b207259/"
    },
    {
      name: "Rishvanth K K",
      role: "Developer",
      specialty: "Full-Stack Development",
      imageUrl: Rishwanth,
      badges: [Black],
      github: "https://github.com/Rishvanth28",
      linkedin: "https://www.linkedin.com/in/rishvanth-k-k-8a6876293/"
    },
    {
      name: "Mitun M",
      role: "Developer",
      specialty: "Frontend Development",
      imageUrl: Mitun,
      badges: [Black],
      github: "https://github.com/zvoidy",
      linkedin: "http://www.linkedin.com/in/mitun-m"
    }
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
                <span className="text-pink-600">KG-APS</span>
                <span className="inline-block ml-2 animate-pulse">🚀</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Smart Academic Progress Tracking System
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                A comprehensive dashboard designed to help educational institutions track, update, and analyze student academic performance with precision and efficiency.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
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
            <div className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Centralized Dashboard</h3>
            <p className="text-gray-600 text-sm md:text-base">View and manage all academic records in one intuitive interface, eliminating data silos.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4">⚡</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm md:text-base">Monitor students grades, attendance, and progress instantaneously for timely interventions.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4">📝</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Automated Reports</h3>
            <p className="text-gray-600 text-sm md:text-base">Generate comprehensive reports for students, faculty, and parents with a single click.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4">🔒</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 text-sm md:text-base">Enterprise-grade security ensures data accuracy, privacy, and confidentiality.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4">🔍</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Insightful Analytics</h3>
            <p className="text-gray-600 text-sm md:text-base">Gain valuable insights into academic trends for data-driven decision making.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4">🔄</div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-16 md:w-24 h-1 bg-pink-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The talented professionals who contributed to develop KG-APS
          </p>
        </div>
        
        <div className="team-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden group">
              <div className="relative overflow-hidden h-40 sm:h-48">
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
                          className="text-white hover:text-pink-300 transition-colors"
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
                          className="text-white hover:text-pink-300 transition-colors"
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
              <div className="p-3 md:p-4 text-center">
                <h3 className="font-bold text-base md:text-lg text-gray-900">{member.name}</h3>
                <p className="text-pink-600 font-medium text-sm md:text-base">{member.role}</p>
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
          <p className="text-sm md:text-base">© {new Date().getFullYear()} KG-APS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Kgaps;