import { Link } from 'react-router-dom';
import KGBITES from '../assets/KG-BITES.png';
import Black from '../assets/black-badge.png';
import SK from '../assets/sk.png';

const Kgbites = () => {
  const teamMembers = [
    {
      name: "Sivakanesh SK",
      role: "Developer", 
      specialty: "Backend Development",
      imageUrl: SK,
      badges: [Black],
      github: "http://github.com/sivakaneshh",
      linkedin: "https://www.linkedin.com/in/sivakanesh-s-k-632008281/"
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
                <span className="text-green-600">KG-BITES</span>
                <span className="inline-block ml-2 animate-pulse">🍔</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-gray-700 mb-4 md:mb-6">
                Canteen Management System
              </h2>
              <p className="section-text text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                A streamlined solution designed to simplify canteen operations, from inventory management to order processing, enhancing efficiency and customer satisfaction.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/"
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                >
                  Back to Home
                </Link>
                <a 
                  href="#features" 
                  className="px-6 py-3 bg-white text-green-600 border border-green-600 font-medium rounded-md hover:bg-green-50 transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2 border border-gray-200 transform transition hover:scale-105 duration-300 w-full max-w-md mx-auto">
                <img src={KGBITES} alt="KG-BITES System" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
          <div className="w-16 md:w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4">🍽️</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Efficient Menu Management</h3>
            <p className="text-gray-600 text-sm md:text-base">Easily add, update, and categorize food items with prices, descriptions, and availability status.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4">📝</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Seamless Order Processing</h3>
            <p className="text-gray-600 text-sm md:text-base">Streamline customer orders with an intuitive interface for quick selection and checkout.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600 text-sm md:text-base">Track sales, popular items, peak hours, and inventory levels with comprehensive reporting tools.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4">📱</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Mobile-Friendly Interface</h3>
            <p className="text-gray-600 text-sm md:text-base">Access the system from any device with a responsive design optimized for both staff and customers.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4">🔔</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Order Notifications</h3>
            <p className="text-gray-600 text-sm md:text-base">Real-time alerts for kitchen staff when new orders arrive, with status updates for customers.</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4">💰</div>
            <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Payment Integration</h3>
            <p className="text-gray-600 text-sm md:text-base">Support for multiple payment methods with secure processing and transaction history.</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-green-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-16 md:w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">1</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Menu Setup</h3>
                <p className="text-gray-600 text-sm md:text-base">Admin adds food items with details like price, description, and category to the system.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-green-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">2</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Order Placement</h3>
                <p className="text-gray-600 text-sm md:text-base">Customers browse menu and place orders through the user-friendly interface.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-green-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">3</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Order Processing</h3>
                <p className="text-gray-600 text-sm md:text-base">Kitchen staff receives notifications and prepares orders with real-time status updates.</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-green-600"></div>
            </div>
            
            <div className="relative">
              <div className="process-step bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100 h-full">
                <div className="step-number w-10 h-10 md:w-12 md:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-3 md:mb-4">4</div>
                <h3 className="feature-title text-lg md:text-xl font-semibold text-gray-900 mb-2">Order Fulfillment</h3>
                <p className="text-gray-600 text-sm md:text-base">Orders are marked as complete, customers receive notifications, and transactions are recorded.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose KG-BITES?</h2>
          <div className="w-16 md:w-24 h-1 bg-green-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming canteen management for educational institutions and corporate settings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-green-600 text-2xl mr-3">⏱️</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reduces Waiting Time</h3>
                <p className="text-gray-600">Streamlined ordering process decreases queues and waiting periods during peak hours.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-green-600 text-2xl mr-3">📈</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Increases Efficiency</h3>
                <p className="text-gray-600">Automates order taking and inventory management, allowing staff to focus on food preparation and quality.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-green-600 text-2xl mr-3">🛒</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Inventory Control</h3>
                <p className="text-gray-600">Helps prevent overordering or stockouts with real-time inventory tracking and alerts.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="text-green-600 text-2xl mr-3">📊</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-600">Provides insights on popular items, sales patterns, and customer preferences to optimize menu offerings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Redesigned for single member */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Developer</h2>
          <div className="w-16 md:w-24 h-1 bg-green-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="section-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The talented professional who developed KG-BITES
          </p>
        </div>
        
        {/* Single member card - centered and larger */}
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden group">
            <div className="relative overflow-hidden h-64 sm:h-72">
              <img 
                src={teamMembers[0].imageUrl} 
                alt={teamMembers[0].name} 
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-4">
                    {teamMembers[0].github && (
                      <a 
                        href={teamMembers[0].github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-300 transition-colors"
                        aria-label={`${teamMembers[0].name}'s GitHub`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {teamMembers[0].linkedin && (
                      <a 
                        href={teamMembers[0].linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-300 transition-colors"
                        aria-label={`${teamMembers[0].name}'s LinkedIn`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-gray-900">{teamMembers[0].name}</h3>
              <p className="text-green-600 font-medium text-lg">{teamMembers[0].role}</p>
              <p className="text-gray-600 text-base">{teamMembers[0].specialty}</p>
              <div className="flex justify-center space-x-2 mt-3">
                {teamMembers[0].badges.map((badge, badgeIndex) => (
                  <img 
                    key={badgeIndex} 
                    src={badge} 
                    alt="Badge" 
                    className="w-6 h-6 md:w-7 md:h-7"
                    title="Project Badge"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} KG-BITES. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Kgbites;