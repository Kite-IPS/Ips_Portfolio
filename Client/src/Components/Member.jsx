import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Ranjith from '../assets/ranjith.png';
import Rajarajan from '../assets/rajarajan.png';
import Mitun from '../assets/mithun.png';
import Gopi from '../assets/gopi.jpg';
import Marudhu from '../assets/marudhu.png';
import Gokulramm from '../assets/gokulramm.png';
import Aiswarya from '../assets/aiswarya.png';
import Praveenraj from '../assets/praveenraj.png';
import Jd from '../assets/jd.png';
import SK from '../assets/sk.png';
import Rajiv from '../assets/rajiv.png';
import Harishwa from '../assets/harishwa.png';
import Yogesh from '../assets/yogesh.png';
import Adithya from '../assets/adithya.png';
import Gobi from '../assets/gobi.png';
import Sivaramana from '../assets/sivaramana.png';
import Naagaroshan from '../assets/nagaroshan.png';
import Yogalaksmi from '../assets/yoga.png';
import Rishwanth from '../assets/rishwanth.png';
import Jaisreenivasan from '../assets/jai.png';
import Vigneshwar from '../assets/vigneshwar.png';
import Nishanthm from '../assets/nishanthm.png';
import Nishanth from '../assets/nishanth.png';
// import Ajay from '../assets/ajay.png';
// import Mourish from '../assets/mourish.png';
// import Joedaniel from '../assets/joedaniel.png';
// import Gunal from '../assets/gnal.png';
// import Anumitha from '../assets/anumitha.png';
import Black from '../assets/black-badge.png';
import White from '../assets/IPS WHITE batch 1.png'; 
import LinkedinIcon from '../assets/linkedin-icon.jpg'; 
import GithubIcon from '../assets/github-icon.png'; 
 

const communityMembers = [
  {  
    name: "Siva Ramana H V",
    role: "Developer",
    specialty: "Full-Stack Development", 
    imageUrl: Sivaramana,
    badges: [White],
    github: "https://github.com/SivaRamana-H-V",
    linkedin: "https://www.linkedin.com/in/sivaramanahv/"
  },
  {
    name: "Praveen Raj C",
    role: "Designer",
    specialty: "UI/UX Developer", 
    imageUrl: Praveenraj,
    badges: [White],
    github: "https://github.com/Praveen-Raj-Chan",
    linkedin: "https://www.linkedin.com/in/praveen-raj-chandiran"
  },
  // {
  //   name: "Gnana Chandru KR",
  //   role: "Designer",
  //   specialty: "UI/UX Developer", 
  //   // imageUrl: Gopi,
  //   badges: [White],
  //   github: "https://github.com/GnanaChandruKR",
  //   linkedin: "https://in.linkedin.com/in/gnana-chandru-raja-90755a225?"
  // },
  {
    name: "Jaayaraajadhanus S",
    role: "Developer",
    specialty: "Backend Developer", 
    imageUrl: Jd,
    badges: [White],
    github: "https://github.com/jaayaraajadhanus",
    linkedin: "https://www.linkedin.com/in/jaayaraajadhanus"
  },
  {
    name: "Marudhu Paandian K",
    role: "Developer",
    specialty: "Full-Stack Developer", 
    imageUrl: Marudhu,
    badges: [White],
    github: "https://github.com/marudhu2004",
    linkedin: "https://www.linkedin.com/in/marudhu2004/"
  },
  {
    name: "Nishanth R",
    role: "Developer", 
    specialty: "Full-Stack Development",
    imageUrl: Nishanth,
    badges: [White],
    github: "https://github.com/NishanthSbz",
    linkedin: "https://www.linkedin.com/in/nishanth-r-86388a259/"
  },
  {
    name: "Rajiv N",
    role: "Developer",
    specialty: "Devops & Frontend Development",
    imageUrl: Rajiv,
    badges: [White],
    github: "https://github.com/rajiv2004-cloud",
    linkedin: "https://www.linkedin.com/in/rajiv-cloud"
  },
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
    specialty: "Full-Stack Development",
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
    name: "Gokulramm S",
    role: "Developer", 
    specialty: "Full-Stack Development",
    imageUrl: Gokulramm,
    badges: [Black],
    github: "https://github.com/Gokulramms",
    linkedin: "https://www.linkedin.com/in/gokulramm-s-984a69257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
    name: "Jaisrinivasan J",
    role: "Developer",
    specialty: "Ai Engineer", 
    imageUrl: Jaisreenivasan,
    badges: [Black],
    github: "https://github.com/jaisrinivasan23",
    linkedin: "https://in.linkedin.com/in/jaisrinivasan-j-a68398259?trk=public_profile_browsemap"
  },
  {
    name: "GobiKrishnan K",
    role: "Developer",
    specialty: "Full-Stack Development",
    imageUrl: Gobi,
    badges: [Black],
    github: "https://github.com/krishgobi",
    linkedin: "https://www.linkedin.com/in/gobi-krishnan-998847300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  // {
  //   name: "Dharun A",
  //   role: "Developer",
  //   specialty: "Full-Stack Development",
  //   imageUrl: Gobi,
  //   badges: [Black],
  //   github: "https://github.com/Dharun-Ashokkumar",
  //   linkedin: "https://www.linkedin.com/in/dharun-ashokkumar/"
  // },
  {
    name: "Yogalakshmi S",
    role: "Developer",
    specialty: "Full-Stack Engineer", 
    imageUrl: Yogalaksmi,
    badges: [Black],
    github: "https://github.com/Yogalakshu",
    linkedin: "https://www.linkedin.com/in/yogalakshmi-sankaranarayanan-060320250/"
  },
  {
    name: "Aishwarya B",
    role: "Developer",
    specialty: "Full-Stack Engineer", 
    imageUrl: Aiswarya,
    badges: [Black],
    github: "https://github.com/Aishwaryaboobalan",
    linkedin: "https://www.linkedin.com/in/aishwarya-boobalan-480368244 "
  },
  {
    name: "Gopi Krishna S",
    role: "Developer",
    specialty: "Ai Engineer", 
    imageUrl: Gopi,
    badges: [Black],
    github: "https://github.com/gopu-005",
    linkedin: "https://www.linkedin.com/in/gopi-krishna-s-7770b1240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Ranjith M", 
    role: "Developer",
    specialty: "Devops & Backend Development",
    imageUrl: Ranjith,
    badges: [Black],
    github: "https://github.com/rxnjitth",
    linkedin: "https://www.linkedin.com/in/ranjith-m-sundaram-8263b8282/"
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
    name: "Raja Rajan K",
    role: "Developer",
    specialty: "Backend Development",
    imageUrl: Rajarajan,
    badges: [Black],
    github: "https://github.com/Raj051105",
    linkedin: "http://www.linkedin.com/in/rrkk"  
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
  {
    name: "Harishwa S",
    role: "Designer",
    specialty: "3D Designer",
    imageUrl: Harishwa,
    badges: [Black],
    github: "https://github.com/projects-harishwa",
    linkedin: "https://www.linkedin.com/in/harishwa-here/"
  },
  // {
  //   name: "Ajay S",
  //   role: "Developer",
  //   specialty: "Frontend Development",
  //   imageUrl: Ajay,
  //   badges: [Black],
  //   github: "https://github.com/Ajay987654",
  //   linkedin: "https://www.linkedin.com/in/ajay162006/",
  // },
  
  //   // {
  //   //   name: "Gunal P",
  //   //   role: "Developer",
  //   //   specialty: "backend Development",
  //   //   imageUrl: Gunal,
  //   //   badges: [Black],
  //   //   github: "https://github.com/Gunal531",
  //   //   linkedin: "https://www.linkedin.com/in/gunal-p-74bb90272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
    
  //   // {
  //   //   name: "Anumitha J",
  //   //   role: "Developer",
  //   //   specialty: "Backend Development",
  //   //   imageUrl: Anumitha,
  //   //   badges: [Black],
  //   //   github: "https://github.com/Anumitha-369",
  //   //   linkedin: "https://www.linkedin.com/in/anumitha-jayachandran-421693297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   // },
    
  //   // {
  //   //   name: "Mahadarshini S",
  //   //   role: "Developer",
  //   //   specialty: "Frontend Development",
  //   //   imageUrl: Ajay,
  //   //   badges: [Black],
  //   //   github: "https://github.com/Maha-kg",
  //   //   linkedin: "https://www.linkedin.com/in/mahadarshini-selvam-169099288/",
  //   // },
    
  //   // {
  //   //   name: "Kalainathan S",
  //   //   role: "Developer",
  //   //   specialty: "Full-Stack Development",
  //   //   imageUrl: Ajay,
  //   //   badges: [Black],
  //   //   github: "https://github.com/kailai-13",
  //   //   linkedin: "https://www.linkedin.com/in/kailai-nathan-442b23281/",
  //   // },

  //   {
  //     name: "Mourish Antony C",
  //     role: "Developer",
  //     specialty: "Backend Development",
  //     imageUrl: Mourish,  
  //     badges: [Black],
  //     github: "https://github.com/mourishantony",
  //     linkedin: "https://www.linkedin.com/in/mourish-a-6b51b0301/"
  //   },
  //   {
  //     name: "Joe Daniel A",
  //     role: "Developer",
  //     specialty: "Ai Engineer", 
  //     imageUrl: Joedaniel,
  //     badges: [Black],
  //     github: "https://github.com/joedanields",
  //     linkedin: "https://www.linkedin.com/in/joe-daniel1911?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  //   },
  // Commented out placeholder members are preserved but not shown here for brevity
];

const ProfessionalMemberMarquee = ({ 
  members = [],
  autoScrollSpeed = 1,
  manualScrollMultiplier = 2
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

  // Prepare Members Data with badges and social links
  const membersData = members.length > 0 
    ? members.slice(0, 31).map((member) => ({
      name: member.name || `Community Member`,
      role: member.role || 'Community Contributor',
      specialty: member.specialty || 'Diverse Skills',
      imageUrl: member.imageUrl || `/assets/placeholder.png`,
      badges: member.badges || [],
      github: member.github || 'https://github.com',
      linkedin: member.linkedin || 'https://linkedin.com'
    }))
    : Array.from({ length: 31 }, (_, index) => ({
      name: `Community Member`,
      role: 'Community Contributor',
      specialty: 'Diverse Skills',
      imageUrl: `/assets/placeholder-${(index % 5) + 1}.png`,
      badges: [GithubIcon, LinkedinIcon],
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
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

  // Handle social profile navigation
  const handleSocialClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  // Handle badge click
  const handleBadgeClick = (e, badgeIndex) => {
    e.stopPropagation(); // Prevent card click
    // You can add specific actions for each badge type here
    console.log(`Badge ${badgeIndex} clicked`);
  };

  // Duplicate members for seamless scrolling
  const duplicatedMembersData = [...membersData, ...membersData];

  return (
    <div className="bg-slate-20 py-4 md:py-8 cursor-pointer">
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
            key={`member-${index}`}
            className="flex-shrink-0 w-56 md:w-72 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative">
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-50 md:h-70 object-cover"
              />
              
              {/* ID badge removed */}
              
              {/* Custom badges - positioned on right corner */}
              <div className="absolute top-2 right-2 flex flex-col space-y-1">
                {member.badges && member.badges.map((badge, badgeIndex) => (
                  <div 
                    key={badgeIndex}
                    className="bg-black rounded-full  shadow-md cursor-pointer hover:scale-110 transition-transform duration-200"
                    onClick={(e) => handleBadgeClick(e, badgeIndex)}
                  >
                    <img 
                      src={badge} 
                      alt={`Badge ${badgeIndex + 1}`}
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                ))}
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

      {/* Member Details Modal - Now with GitHub and LinkedIn links */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded max-w-md w-full p-4 md:p-8 text-center shadow-2xl border border-slate-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name}
                className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full mx-auto mb-4 md:mb-6 border-4 border-slate-200"
              />
              {/* Removed ID display */}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{selectedMember.name}</h2>
            <p className="text-slate-600 mb-1">{selectedMember.role}</p>
            <p className="text-sm text-slate-500 mb-4">Specialty in {selectedMember.specialty}</p>
            
            {/* Social profile links */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                onClick={(e) => handleSocialClick(e, selectedMember.github)}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub Profile
              </button>
              <button
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={(e) => handleSocialClick(e, selectedMember.linkedin)}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                LinkedIn Profile
              </button>
            </div>
            
            {/* Display badges in modal */}
            {selectedMember.badges && selectedMember.badges.length > 0 && (
              <div className="flex justify-center space-x-3 mb-4">
                {selectedMember.badges.map((badge, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-100  rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <img src={badge} alt={`Badge ${idx + 1}`} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            )}
            
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
ProfessionalMemberMarquee.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    specialty: PropTypes.string,
    imageUrl: PropTypes.string,
    badges: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    linkedin: PropTypes.string
  })),
  autoScrollSpeed: PropTypes.number,
  manualScrollMultiplier: PropTypes.number
};

export default App;