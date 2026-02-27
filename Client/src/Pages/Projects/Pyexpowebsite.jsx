import { Link } from 'react-router-dom';
import Pyexpowebsite from '../../assets/projects/PYEXPO-WEBSITE.png';
import Nishanthm from '../../assets/members/3rd-4th-yrs/nishanthm.png';
import Nishanth from '../../assets/members/3rd-4th-yrs/nishanth.png';
import Vigneshwar from '../../assets/members/3rd-4th-yrs/vigneshwar.png';
import Naagaroshan from '../../assets/members/3rd-4th-yrs/nagaroshan.png';
import Rishwanth from '../../assets/members/3rd-4th-yrs/rishwanth.png';
// import Gopi from '../../assets/gopi.png'; // image missing
import Mitun from '../../assets/members/3rd-4th-yrs/mithun.png';
import Black from '../../assets/general/black-badge.png';
import White from '../../assets/general/IPS WHITE batch 1.png'; 


const PyexpoWebsite = () => {
  const teamMembers = [
    {
      name: "Nishanth R",
      role: "Enterupeneur",
      specialty: "Full-Stack Development",
      
      imageUrl: Nishanth,
      badges: [White],
      github: "https://github.com/NishanthSbz",
      linkedin: "https://www.linkedin.com/in/nishanth-r-86388a259/"
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
      name: "Nishanth M",
      role: "Developer", 
      specialty: "Full-Stack Development",
      imageUrl: Nishanthm,
      badges: [Black],
      github: "https://github.com/NISHANTH1107",
      linkedin: "https://www.linkedin.com/in/nishanth-m-765903293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Gopi Krishna S",
      role: "Developer",
      specialty: "Ai Engineer", 
      imageUrl: null,
      badges: [Black],
      github: "https://github.com/gopu-005",
      linkedin: "https://www.linkedin.com/in/gopi-krishna-s-7770b1240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Mitun M",
      role: "Developer",
      specialty: "Frontend Development",
      imageUrl: Mitun,
      badges: [Black],
      github: "https://github.com/zvoidy",
      linkedin: "http://www.linkedin.com/in/mitun-m"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
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
                <span className="text-indigo-600">PyExpo</span>
                <span className="inline-block ml-2 animate-pulse">🐍</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Exclusive Python Hackathon Event
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Join the ultimate coding challenge for Python enthusiasts! Showcase your skills, build innovative projects, network with industry experts, and win exciting prizes.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a 
                  href="#about" 
                  className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={Pyexpowebsite} alt="PyExpo Logo" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">About PyExpo</h2>
          <div className="w-16 md:w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-indigo-600 text-3xl md:text-4xl mb-3 md:mb-4">🚀</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">24-Hour Coding Challenge</h3>
            <p className="text-gray-600 text-sm md:text-base">Immerse yourself in an intensive 24-hour hackathon focused exclusively on Python-based solutions.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-indigo-600 text-3xl md:text-4xl mb-3 md:mb-4">👥</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
            <p className="text-gray-600 text-sm md:text-base">Form teams of up to 4 members or participate solo to solve real-world problems with Python.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-indigo-600 text-3xl md:text-4xl mb-3 md:mb-4">🏆</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Exciting Prizes</h3>
            <p className="text-gray-600 text-sm md:text-base">Win cash prizes, tech gadgets, and exclusive internship opportunities with our industry partners.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-indigo-600 text-3xl md:text-4xl mb-3 md:mb-4">👨‍💼</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Industry Mentors</h3>
            <p className="text-gray-600 text-sm md:text-base">Get guidance from top Python experts and industry professionals throughout the event.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-indigo-600 text-3xl md:text-4xl mb-3 md:mb-4">🎓</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Learning Workshops</h3>
            <p className="text-gray-600 text-sm md:text-base">Attend specialized workshops on Python libraries, frameworks, and cutting-edge technologies.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-indigo-600 text-3xl md:text-4xl mb-3 md:mb-4">🌐</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Networking Opportunities</h3>
            <p className="text-gray-600 text-sm md:text-base">Connect with fellow developers, potential employers, and like-minded Python enthusiasts.</p>
          </div>
        </div>
      </div>

      {/* Themes Section */}
      <div className="bg-indigo-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hackathon Themes</h2>
            <div className="w-16 md:w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from these exciting challenge areas for your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">1</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 text-sm md:text-base">Build intelligent solutions using Pythons powerful ML libraries like TensorFlow, PyTorch, or scikit-learn.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-indigo-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">2</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600 text-sm md:text-base">Create impactful data stories and visualizations using matplotlib, seaborn, plotly, or dash.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-indigo-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">3</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Web Applications</h3>
                <p className="text-gray-600 text-sm md:text-base">Develop innovative web applications using Django, Flask, FastAPI, or Streamlit frameworks.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-indigo-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">4</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Automation & DevOps</h3>
                <p className="text-gray-600 text-sm md:text-base">Create automation tools, build CI/CD pipelines, or develop DevOps solutions with Python.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizing Team</h2>
          <div className="w-16 md:w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind PyExpo
          </p>
        </div>
        
        {/* Team Grid - Modified to center all cards including the last row */}
        <div className="max-w-6xl mx-auto">
          {/* First row - 5 members */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-8">
            {teamMembers.slice(0, 5).map((member, index) => (
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
                            className="text-white hover:text-indigo-300 transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.231 3.297-1.231.645 1.311.26 2.873.128 3.176.767.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.769-1.588 8.205-6.086 8.205-11.388 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-300 transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.5 0h-15C2.01 0 0 .99 0 2.25v19.5C0 23.01.99 24 2.25 24h15c1.26 0 2.25-.99 2.25-2.25V2.25C21.75.99 20.76 0 19.5 0zM7.09 20H4.5V9h2.59v11zm-1.29-12.65c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c.82 0 1.49.67 1.49 1.5s-.67 1.5-1.49 1.5zM20 20h-2.59v-6c0-3-.64-4-3-4s-3 .99-3 4v6H10V9h2v1c1-.99 3-.99 4-.99s3 .99 3 .99v9z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{member.specialty}</p>
                  <div className="mt-2 flex justify-center space-x-2">
                    {member.badges.map((badge, idx) => (
                      <img key={idx} src={badge} alt="Badge" className="w-5 h-5 md:w-6 md:h-6" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 2 members (Gopi and Mitun) centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-md md:max-w-xl">
              {teamMembers.slice(5, 7).map((member, index) => (
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
                              className="text-white hover:text-indigo-300 transition-colors"
                              aria-label={`${member.name}'s GitHub`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.231 3.297-1.231.645 1.311.26 2.873.128 3.176.767.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.769-1.588 8.205-6.086 8.205-11.388 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white hover:text-indigo-300 transition-colors"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.5 0h-15C2.01 0 0 .99 0 2.25v19.5C0 23.01.99 24 2.25 24h15c1.26 0 2.25-.99 2.25-2.25V2.25C21.75.99 20.76 0 19.5 0zM7.09 20H4.5V9h2.59v11zm-1.29-12.65c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c.82 0 1.49.67 1.49 1.5s-.67 1.5-1.49 1.5zM20 20h-2.59v-6c0-3-.64-4-3-4s-3 .99-3 4v6H10V9h2v1c1-.99 3-.99 4-.99s3 .99 3 .99v9z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{member.specialty}</p>
                    <div className="mt-2 flex justify-center space-x-2">
                      {member.badges.map((badge, idx) => (
                        <img key={idx} src={badge} alt="Badge" className="w-5 h-5 md:w-6 md:h-6" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default PyexpoWebsite;