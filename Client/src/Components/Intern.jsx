import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Ajay from '../assets/ajay.png';
import Mourish from '../assets/mourish.png';
import Joedaniel from '../assets/joedaniel.png';
import Gunal from '../assets/gunal.png';
import Anumitha from '../assets/anumitha.png';
import Kalainathan from '../assets/kailainathan.png';
import Maha from '../assets/maha.png';

// Sample intern data - replace with your actual 7 interns
const internMembers = [
 {
    name: "Ajay S",
    role: "Intern",
    specialty: "Frontend Development",
    imageUrl: Ajay,
    github: "https://github.com/Ajay987654",
    linkedin: "https://www.linkedin.com/in/ajay162006/",
  },
  {
      name: "Gunal P",
      role: "Intern",
      specialty: "backend Development",
      imageUrl: Gunal,
      github: "https://github.com/Gunal531",
      linkedin: "https://www.linkedin.com/in/gunal-p-74bb90272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    
    {
      name: "Anumitha J",
      role: "Intern",
      specialty: "Backend Development",
      imageUrl: Anumitha,
      github: "https://github.com/Anumitha-369",
      linkedin: "https://www.linkedin.com/in/anumitha-jayachandran-421693297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    
    {
      name: "Mahadarshini S",
      role: "Intern",
      specialty: "Frontend Development",
      imageUrl: Maha,
      github: "https://github.com/Maha-kg",
      linkedin: "https://www.linkedin.com/in/mahadarshini-selvam-169099288/",
    },
    
    {
      name: "Kalainathan S",
      role: "Intern",
      specialty: "Full-Stack Development",
      imageUrl: Kalainathan,
      github: "https://github.com/kailai-13",
      linkedin: "https://www.linkedin.com/in/kailai-nathan-442b23281/",
    },
  {
    name: "Mourish Antony C",
    role: "Intern",
    specialty: "Backend Development",
    imageUrl: Mourish,  
    github: "https://github.com/mourishantony",
    linkedin: "https://www.linkedin.com/in/mourish-a-6b51b0301/"
  },
  {
    name: "Joe Daniel A",
    role: "Intern",
    specialty: "Ai Engineer", 
    imageUrl: Joedaniel,
    github: "https://github.com/joedanields",
    linkedin: "https://www.linkedin.com/in/joe-daniel1911?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },

];

const InternsMarquee = ({ 
  interns = internMembers,
  autoScrollSpeed = 1,
  manualScrollMultiplier = 2
}) => {
  const scrollRef = useRef(null);
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Scroll State Management
  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    startX: 0,
    scrollLeft: 0,
    startY: 0
  });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prepare Interns Data
  const internsData = interns.length > 0 
    ? interns.map((intern) => ({
      name: intern.name || `Intern`,
      role: intern.role || 'Intern',
      specialty: intern.specialty || 'Multiple Skills',
      imageUrl: intern.imageUrl || `/assets/placeholder-intern.png`,
      github: intern.github || 'https://github.com',
      linkedin: intern.linkedin || 'https://linkedin.com'
    }))
    : Array.from({ length: 7 }, (_, index) => ({
      name: `Intern ${index + 1}`,
      role: 'Intern',
      specialty: 'Multiple Skills',
      imageUrl: `/assets/placeholder-intern-${(index % 5) + 1}.png`,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }));

  // Initialize scroll position to the middle of duplicated content for seamless scrolling
  useEffect(() => {
    if (scrollRef.current) {
      // Set initial scroll position to halfway through the content
      // This helps with the illusion of infinite scrolling in reverse
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 4;
    }
  }, []);

  // Touch Events for Mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;
    
    setScrollState({
      isScrolling: true,
      startX: e.touches[0].pageX,
      startY: e.touches[0].pageY,
      scrollLeft: scrollRef.current.scrollLeft
    });
    
    setIsAutoScrollPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!scrollState.isScrolling || !scrollRef.current) return;
    
    const touchX = e.touches[0].pageX;
    const touchY = e.touches[0].pageY;
    
    const diffX = scrollState.startX - touchX;
    const diffY = Math.abs(scrollState.startY - touchY);
    
    if (diffY > Math.abs(diffX)) return;
    
    e.preventDefault();
    
    scrollRef.current.scrollLeft = scrollState.scrollLeft + diffX;
  };

  const handleTouchEnd = () => {
    setScrollState(prev => ({ ...prev, isScrolling: false }));
    
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 1000);
  };

  // Mouse Events for Desktop
  const startManualScroll = (e) => {
    if (!scrollRef.current || isMobile) return;
    
    e.preventDefault();
    
    setScrollState({
      isScrolling: true,
      startX: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
      startY: 0
    });

    setIsAutoScrollPaused(true);
  };

  const stopManualScroll = () => {
    if (isMobile) return;
    
    setScrollState(prev => ({ ...prev, isScrolling: false }));
    
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 1000);
  };

  const performManualScroll = (e) => {
    if (!scrollState.isScrolling || !scrollRef.current || isMobile) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - scrollState.startX) * manualScrollMultiplier;
    
    scrollRef.current.scrollLeft = scrollState.scrollLeft - walk;
  };

  // Wheel Scroll Handler
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    
    e.preventDefault();
    
    scrollRef.current.scrollLeft += e.deltaY * manualScrollMultiplier;
    
    setIsAutoScrollPaused(true);
    
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 1000);
  };

  // Automated Scroll Effect - Now scrolling in reverse (right to left)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    
    const autoScroll = () => {
      if (!isAutoScrollPaused) {
        // Subtract the scroll speed to move from right to left
        scrollContainer.scrollLeft -= autoScrollSpeed;

        // Check if we've scrolled to the beginning
        if (scrollContainer.scrollLeft <= 0) {
          // Jump to the middle point to create illusion of infinite scroll
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrollPaused, autoScrollSpeed]);

  // Handle social profile navigation
  const handleSocialClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  // Duplicate interns multiple times for more seamless scrolling
  const duplicatedInternsData = [...internsData, ...internsData, ...internsData, ...internsData];

  return (
    <div className="bg-slate-90 py-4 md:py-8 cursor-pointer">
      {/* 
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-slate-800 mokoto-text">Our Interns</h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          Meet our talented interns who are gaining valuable experience and bringing fresh perspectives to our team.
        </p>
      </div>
      */}
      
      {/* 
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-3 md:space-x-6 px-2 md:px-4 w-full select-none"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onMouseDown={startManualScroll}
        onMouseLeave={stopManualScroll}
        onMouseUp={stopManualScroll}
        onMouseMove={performManualScroll}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {duplicatedInternsData.map((intern, index) => (
          <motion.div 
            key={`intern-${index}`}
            className="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            onClick={() => setSelectedIntern(intern)}
          >
            <div className="relative">
              <img 
                src={intern.imageUrl} 
                alt={intern.name}
                className="w-full h-50 md:h-70 object-cover"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-base md:text-lg text-slate-800">{intern.name}</h3>
              <p className="text-xs md:text-sm text-blue-600 mb-1">{intern.role}</p>
              <p className="text-xs text-slate-500 italic">Specialty: {intern.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>
      */}

      {/* Intern Details Modal */}
      {selectedIntern && (
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelectedIntern(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded max-w-md w-full p-4 md:p-8 text-center shadow-2xl border border-slate-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedIntern.imageUrl} 
                alt={selectedIntern.name}
                className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full mx-auto mb-4 md:mb-6 border-4 border-blue-200"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{selectedIntern.name}</h2>
            <p className="text-blue-600 mb-1">{selectedIntern.role}</p>
            <p className="text-sm text-slate-500 mb-4">Specialty in {selectedIntern.specialty}</p>
            
            {/* Social profile links */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4 mb-6">
              <button
                className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
                onClick={(e) => handleSocialClick(e, selectedIntern.github)}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub Profile
              </button>
              <button
                className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
                onClick={(e) => handleSocialClick(e, selectedIntern.linkedin)}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                LinkedIn Profile
              </button>
            </div>
            
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIntern(null);
              }}
            >
              Close Profile
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

InternsMarquee.propTypes = {
  interns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    specialty: PropTypes.string,
    imageUrl: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string
  })),
  autoScrollSpeed: PropTypes.number,
  manualScrollMultiplier: PropTypes.number
};

export default InternsMarquee;