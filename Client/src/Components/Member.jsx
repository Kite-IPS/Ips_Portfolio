import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Default placeholder images if no photos are provided
const DEFAULT_PLACEHOLDERS = Array.from({ length: 35 }, (_, index) => 
  `/api/placeholder/300/300?text=M${index + 1}`
);

// Function to generate members with custom or default photos
const createMembersData = (photos = []) => {
  // Use provided photos or default placeholders
  const safePhotos = photos.length > 0 ? photos : DEFAULT_PLACEHOLDERS;

  return safePhotos.slice(0, 35).map((photo, index) => ({
    id: index + 1,
    name: `Team Member ${index + 1}`,
    role: ['Senior Developer', 'Lead Designer', 'Principal Engineer', 'Technical Specialist'][index % 4],
    specialty: ['Backend', 'Frontend', 'AI/ML', 'UX Research', 'Cloud Architecture'][index % 5],
    imageUrl: photo
  }));
};

const ProfessionalMemberMarquee = ({ memberPhotos = [] }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Generate members data from provided photos or use defaults
  const membersData = createMembersData(memberPhotos);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const scrollStep = 1; // Adjust for speed (lower = slower)

    const autoScroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += scrollStep;

        // Reset scroll position when reaching the end
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
  }, [isHovered]);

  // Duplicate the array to create a seamless loop
  const duplicatedMembersData = [...membersData, ...membersData];

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-6 py-8 px-4 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedMembersData.map((member, index) => (
          <motion.div 
            key={`${member.id}-${index}`}
            className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.03 }}
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

export default ProfessionalMemberMarquee;