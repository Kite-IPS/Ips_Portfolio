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
  
  // Scroll State Management
  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    startX: 0,
    scrollLeft: 0
  });

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

  // Manual Scroll Handlers
  const startManualScroll = (e) => {
    if (!scrollRef.current) return;
    
    // Prevent text selection
    e.preventDefault();
    
    setScrollState({
      isScrolling: true,
      startX: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft
    });

    // Pause auto-scroll when manually scrolling
    setIsAutoScrollPaused(true);
  };

  const stopManualScroll = () => {
    setScrollState(prev => ({ ...prev, isScrolling: false }));
    
    // Resume auto-scroll after a short delay
    const timer = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const performManualScroll = (e) => {
    if (!scrollState.isScrolling || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - scrollState.startX) * manualScrollMultiplier;
    
    scrollRef.current.scrollLeft = scrollState.scrollLeft - walk;
  };

  // Wheel Scroll Handler
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    
    e.preventDefault();
    
    // Horizontal scroll with wheel
    scrollRef.current.scrollLeft += e.deltaY * manualScrollMultiplier;
    
    // Pause auto-scroll temporarily
    setIsAutoScrollPaused(true);
    
    // Resume auto-scroll after a delay
    const timer = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  // Automated Scroll Effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    
    const autoScroll = () => {
      // Only scroll if not paused and not at the end
      if (!isAutoScrollPaused) {
        scrollContainer.scrollLeft += autoScrollSpeed;

        // Reset scroll to start when reaching halfway
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
    <div className="bg-slate-50 py-8">
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-6 px-4 w-full select-none cursor-grab active:cursor-grabbing"
        onMouseDown={startManualScroll}
        onMouseLeave={stopManualScroll}
        onMouseUp={stopManualScroll}
        onMouseMove={performManualScroll}
        onWheel={handleWheel}
      >
        {duplicatedMembersData.map((member, index) => (
          <motion.div 
            key={`${member.id}-${index}`}
            className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative">
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-2 right-2 bg-slate-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm">
                {member.id}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-slate-800">{member.name}</h3>
              <p className="text-sm text-slate-600 mb-1">{member.role}</p>
              <p className="text-xs text-slate-500 italic">Specialty: {member.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-md w-full p-8 text-center shadow-2xl border border-slate-200"
          >
            <div className="relative">
              <img 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name}
                className="w-52 h-52 object-cover rounded-full mx-auto mb-6 border-4 border-slate-200"
              />
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 bg-slate-800 text-white rounded-full px-3 py-1 text-xs">
                ID: {selectedMember.id}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedMember.name}</h2>
            <p className="text-slate-600 mb-1">{selectedMember.role}</p>
            <p className="text-sm text-slate-500 mb-4">Specialty in {selectedMember.specialty}</p>
            <button 
              className="bg-slate-800 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors"
              onClick={() => setSelectedMember(null)}
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