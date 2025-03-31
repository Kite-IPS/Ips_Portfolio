import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Ranjith from '../assets/ranjith.jpg';
import Gopi from '../assets/gopi.jpg';
import SK from '../assets/sk.jpg';
import Yogesh from '../assets/yogesh.jpg';

// Community Members Array
const communityMembers = [
  {
    name: "Sivakanesh",
    role: "Community Leader", 
    specialty: "Strategic Planning",
    imageUrl: SK
  },
  {
    name: "Yogesh",
    role: "Developer",
    specialty: "Frontend Development", 
    imageUrl: Yogesh
  },
  {
    name: "Gopi",
    role: "Designer",
    specialty: "UI/UX Design",
    imageUrl: Gopi
  },
  {
    name: "Ranjith", 
    role: "Engineer",
    specialty: "Backend Development",
    imageUrl: Ranjith
  },
  // Repeated 20 more times
  ...Array(20).fill().map(() => [
    {
      name: "Sivakanesh",
      role: "Community Leader",
      specialty: "Strategic Planning", 
      imageUrl: SK
    },
    {
      name: "Yogesh",
      role: "Developer", 
      specialty: "Frontend Development",
      imageUrl: Yogesh
    },
    {
      name: "Gopi",
      role: "Designer",
      specialty: "UI/UX Design",
      imageUrl: Gopi
    },
    {
      name: "Ranjith",
      role: "Engineer", 
      specialty: "Backend Development",
      imageUrl: Ranjith
    }
  ]).flat()
];

const ProfessionalMemberMarquee = ({ 
  members = [],
  autoScrollSpeed = 1,  // Adjustable auto-scroll speed
  manualScrollMultiplier = 2 // Adjusts manual scroll sensitivity
}) => {
  const scrollRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Scroll State Management
  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    startX: 0,
    scrollLeft: 0,
    startY: 0 // For detecting vertical scroll on mobile
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

  // Prepare Members Data
  const membersData = members.length > 0 
    ? members.slice(0, 31).map((member, index) => ({
      id: index + 1,
      name: member.name || `Community Member ${index + 1}`,
      role: member.role || 'Community Contributor',
      specialty: member.specialty || 'Diverse Skills',
      imageUrl: member.imageUrl || `/assets/placeholder-${(index % 5) + 1}.png`
    }))
    : Array.from({ length: 31 }, (_, index) => ({
      id: index + 1,
      name: `Community Member ${index + 1}`,
      role: 'Community Contributor',
      specialty: 'Diverse Skills',
      imageUrl: `/assets/placeholder-${(index % 5) + 1}.png`
    }));

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
    
    // Calculate X and Y difference
    const diffX = scrollState.startX - touchX;
    const diffY = Math.abs(scrollState.startY - touchY);
    
    // If vertical scroll is greater than horizontal, let the browser handle it
    if (diffY > Math.abs(diffX)) return;
    
    // Prevent default only for horizontal scrolling
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

  // Automated Scroll Effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    
    const autoScroll = () => {
      if (!isAutoScrollPaused) {
        scrollContainer.scrollLeft += autoScrollSpeed;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrollPaused, autoScrollSpeed]);

  // Duplicate members for seamless scrolling
  const duplicatedMembersData = [...membersData, ...membersData];

  return (
    <div className="bg-slate-20 py-4 md:py-8">
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
        {duplicatedMembersData.map((member, index) => (
          <motion.div 
            key={`${member.id}-${index}`}
            className="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative">
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-44 md:h-56 object-cover"
              />
              <div className="absolute top-2 right-2 bg-slate-800 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xs md:text-sm">
                {member.id}
              </div>
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-base md:text-lg text-slate-800">{member.name}</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-1">{member.role}</p>
              <p className="text-xs text-slate-500 italic">Specialty: {member.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Member Details Modal - Responsive */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-md w-full p-4 md:p-8 text-center shadow-2xl border border-slate-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name}
                className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full mx-auto mb-4 md:mb-6 border-4 border-slate-200"
              />
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 bg-slate-800 text-white rounded-full px-3 py-1 text-xs">
                ID: {selectedMember.id}
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{selectedMember.name}</h2>
            <p className="text-slate-600 mb-1">{selectedMember.role}</p>
            <p className="text-sm text-slate-500 mb-4">Specialty in {selectedMember.specialty}</p>
            <button 
              className="bg-slate-800 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMember(null);
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

function App() {
  return <ProfessionalMemberMarquee members={communityMembers} />;
}

export default App;