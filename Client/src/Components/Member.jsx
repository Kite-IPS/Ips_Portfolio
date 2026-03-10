import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// 2nd-yr members
import Joedaniel from '../assets/members/2nd-yrs/joedaniel.png';
import Mourish from '../assets/members/2nd-yrs/mourish.png';
import Aki from '../assets/members/2nd-yrs/aki.png';
import Anish from '../assets/members/2nd-yrs/anish.png';
import Arunaw from '../assets/members/2nd-yrs/arunaw.png';
import Boo from '../assets/members/2nd-yrs/boo.png';
import Harini from '../assets/members/2nd-yrs/harini.png';
import Jeff from '../assets/members/2nd-yrs/jeff.png';
import Joe from '../assets/members/2nd-yrs/joe.png';
import Joshua from '../assets/members/2nd-yrs/joshua.png';
import Kayal from '../assets/members/2nd-yrs/kayal.png';
import Mirdula from '../assets/members/2nd-yrs/mirdula.png';
import Nila from '../assets/members/2nd-yrs/nila.png';
import Sami from '../assets/members/2nd-yrs/sami.png';
import Sandy from '../assets/members/2nd-yrs/sandy.png';
import Taya from '../assets/members/2nd-yrs/taya.png';
import Vinu from '../assets/members/2nd-yrs/vinu.png';
import Sri from '../assets/members/2nd-yrs/sri.png';
// 3rd-4th-yr members
import Ranjith from '../assets/members/3rd-4th-yrs/ranjith.png';
import Rajarajan from '../assets/members/3rd-4th-yrs/rajarajan.png';
import Mitun from '../assets/members/3rd-4th-yrs/mithun.png';
import Marudhu from '../assets/members/3rd-4th-yrs/marudhu.png';
import Gokulramm from '../assets/members/3rd-4th-yrs/gokulramm.png';
import Aiswarya from '../assets/members/3rd-4th-yrs/aiswarya.png';
import SK from '../assets/members/3rd-4th-yrs/sk.png';
import Yogesh from '../assets/members/3rd-4th-yrs/yogesh.png';
import Adithya from '../assets/members/3rd-4th-yrs/adithya.png';
import Gobi from '../assets/members/3rd-4th-yrs/gobi.png';
import Naagaroshan from '../assets/members/3rd-4th-yrs/nagaroshan.png';
import Yogalaksmi from '../assets/members/3rd-4th-yrs/yoga.png';
import Rishwanth from '../assets/members/3rd-4th-yrs/rishwanth.png';
import Jaisreenivasan from '../assets/members/3rd-4th-yrs/jai.png';
import Vigneshwar from '../assets/members/3rd-4th-yrs/vigneshwar.png';
import Nishanthm from '../assets/members/3rd-4th-yrs/nishanthm.png';
import Nishanth from '../assets/members/3rd-4th-yrs/nishanth.png';
import Dharun from '../assets/members/3rd-4th-yrs/dharun.png';
// Alumni members
import Praveenraj from '../assets/members/alumni/praveenraj.png';
import Jd from '../assets/members/alumni/jd.png';
import Sivaramana from '../assets/members/alumni/sivaramana.png';
import Chandru from '../assets/members/alumni/chandru.png';
import Black from '../assets/general/black-badge.png';
import White from '../assets/general/IPS WHITE batch 1.png'; 
import LinkedinIcon from '../assets/general/linkedin-icon.jpg'; 
import GithubIcon from '../assets/general/github-icon.png'; 
 

// ── Alumni Members ──────────────────────────────────────────────────────────
const alumniMembers = [
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
  {
    name: "Gnana Chandru KR",
    role: "Designer",
    specialty: "UI/UX Developer", 
    imageUrl: Chandru,
    badges: [White],
    github: "https://github.com/GnanaChandruKR",
    linkedin: "https://in.linkedin.com/in/gnana-chandru-raja-90755a225?"
  },
  {
    name: "Jaayaraajadhanus S",
    role: "Developer",
    specialty: "Backend Developer", 
    imageUrl: Jd,
    badges: [White],
    github: "https://github.com/jaayaraajadhanus",
    linkedin: "https://www.linkedin.com/in/jaayaraajadhanus"
  },
];

// ── Active Community Members (2nd-yrs + 3rd/4th-yrs) ────────────────────────
const communityMembers = [
  {
    name: "Joe Daniel",
    role: "Developer",
    specialty: "AIML Engineer",
    imageUrl: Joedaniel,
    badges: [Black],
    github: "https://github.com/joedanields",
    linkedin: "https://www.linkedin.com/in/joe-daniel1911/"
  },
  {
    name: "Mourish Antony",
    role: "Developer",
    specialty: "ML Engineer",
    imageUrl: Mourish,
    badges: [Black],
    github: "https://github.com/mourishantony",
    linkedin: "https://linkedin.com/in/mourishantonyc"
  },
  {
    name: "Akilan",
    role: "Developer",
    specialty: "MERN developer",
    imageUrl: Aki,
    badges: [Black],
    github: "https://github.com/miles-spidee",
    linkedin: "'https://www.linkedin.com/in/akilan-ck?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Anish Karthic",
    role: "Developer",
    specialty: "Embedded and IoT",
    imageUrl: Anish,
    badges: [Black],
    github: "https://github.com/ANISHKARTHIC",
    linkedin: "https://linkedin.com/in/anish-karthic/"
  },
  {
    name: "Arunawrishe",
    role: "Developer",
    specialty: "Java developer",
    imageUrl: Arunaw,
    badges: [Black],
    github: "https://github.com/ARUNAWRISHE",
    linkedin: "https://linkedin.com/in/arunaw-rishe-m"
  },
  {
    name: "Boomathi",
    role: "Developer",
    specialty: "Full-Stack Developer",
    imageUrl: Boo,
    badges: [Black],
    github: "https://github.com/Boomathi-7",
    linkedin: "https://linkedin.com/in/boomathi-palanisamy-75693b314"
  },
  {
    name: "Harini",
    role: "Developer",
    specialty: "Front-end developer",
    imageUrl: Harini,
    badges: [Black],
    github: "https://github.com/Harini007m",
    linkedin: "https://www.linkedin.com/in/harini-m-aa6a783157m"
  },
  {
    name: "Jeremiah Jeffery",
    role: "Developer",
    specialty: "Web Developer",
    imageUrl: Jeff,
    badges: [Black],
    github: "https://github.com/Jeremiah-Jefry",
    linkedin: "https://www.linkedin.com/in/jeremiah-jefry-george"
  },
  {
    name: "Joshua Melvin",
    role: "Backend Developer",
    specialty: "AI Engineer",
    imageUrl: Joshua,
    badges: [Black],
    github: "https://github.com/JOSHUA-MELVIN-777/",
    linkedin: "https://www.linkedin.com/in/joshuamelvin7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Joshpin Kayalvizhi",
    role: "Developer",
    specialty: "Full-Stack Developer",
    imageUrl: Kayal,
    badges: [Black],
    github: "https://github.com/JOSHPINKAYALVIZHI",
    linkedin: "https://www.linkedin.com/in/joshpin-kayalvizhi-b47a2b314/"
  },
  {
    name: "Mirdula",
    role: "AIML Engineer",
    specialty: "Full-Stack Developer",
    imageUrl: Mirdula,
    badges: [Black],
    github: "https://github.com/Mirdula18",
    linkedin: "https://www.linkedin.com/in/mirdula-r-06a771320/"
  },
  {
    name: "Kavinila",
    role: "Developer",
    specialty: "Emotional support",
    imageUrl: Nila,
    badges: [Black],
    github: "https://github.com/KavinilaLoganathan-2507",
    linkedin: "https://www.linkedin.com/in/kavinila-loganathan-1bb49b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Samikssha",
    role: "Developer",
    specialty: "Front-end developer",
    imageUrl: Sami,
    badges: [Black],
    github: "https://github.com/samikssha04",
    linkedin: "https://www.linkedin.com/in/samikssha-muthu-ab6771305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Santhosh",
    role: "Developer",
    specialty: "Front-end & DM",
    imageUrl: Sandy,
    badges: [Black],
    github: "https://github.com/Santhosh-I",
    linkedin: "https://www.linkedin.com/in/santhosh2006?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Tayanithaa",
    role: "Developer",
    specialty: "ML Developer",
    imageUrl: Taya,
    badges: [Black],
    github: "https://github.com/Tayanithaa",
    linkedin: "https://www.linkedin.com/in/tayanithaans-2196--/"
  },
  {
    name: "Vinu Karthick",
    role: "Developer",
    specialty: "DevOps Engineer",
    imageUrl: Vinu,
    badges: [Black],
    github: "https://github.com/VinuKarthick7",
    linkedin: "https://www.linkedin.com/in/vinukarthick7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Srishanth",
    role: "Developer",
    specialty: "Embedded & Iot",
    imageUrl: Sri,
    badges: [Black],
    github: "https://github.com/Srishanth-023",
    linkedin: "https://www.linkedin.com/in/sri-shanth-0520a9315/"
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
    badges: [White],
    github: "https://github.com/Rishvanth28",
    linkedin: "https://www.linkedin.com/in/rishvanth-k-k-8a6876293/"
  },

  {
    name: "Gokulramm S",
    role: "Developer", 
    specialty: "Full-Stack Development",
    imageUrl: Gokulramm,
    badges: [White],
    github: "https://github.com/Gokulramms",
    linkedin: "https://www.linkedin.com/in/gokulramm-s-984a69257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Nishanth M",
    role: "Developer", 
    specialty: "Full-Stack Development",
    imageUrl: Nishanthm,
    badges: [White],
    github: "https://github.com/NISHANTH1107",
    linkedin: "https://www.linkedin.com/in/nishanth-m-765903293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Jaisrinivasan J",
    role: "Developer",
    specialty: "Ai Engineer", 
    imageUrl: Jaisreenivasan,
    badges: [White],
    github: "https://github.com/jaisrinivasan23",
    linkedin: "https://in.linkedin.com/in/jaisrinivasan-j-a68398259?trk=public_profile_browsemap"
  },
  {
    name: "GobiKrishnan K",
    role: "Developer",
    specialty: "Full-Stack Development",
    imageUrl: Gobi,
    badges: [White],
    github: "https://github.com/krishgobi",
    linkedin: "https://www.linkedin.com/in/gobi-krishnan-998847300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Dharun A",
    role: "Developer",
    specialty: "Full-Stack Development",
    imageUrl: Dharun,
    badges: [White],
    github: "https://github.com/Dharun-Ashokkumar",
    linkedin: "https://www.linkedin.com/in/dharun-ashokkumar/"
  },
  {
    name: "Yogalakshmi S",
    role: "Developer",
    specialty: "Full-Stack Engineer", 
    imageUrl: Yogalaksmi,
    badges: [White],
    github: "https://github.com/Yogalakshu",
    linkedin: "https://www.linkedin.com/in/yogalakshmi-sankaranarayanan-060320250/"
  },
  {
    name: "Aishwarya B",
    role: "Developer",
    specialty: "Full-Stack Engineer", 
    imageUrl: Aiswarya,
    badges: [White],
    github: "https://github.com/Aishwaryaboobalan",
    linkedin: "https://www.linkedin.com/in/aishwarya-boobalan-480368244 "
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
];

const ProfessionalMemberMarquee = ({ 
  members = [],
  autoScrollSpeed = 1,
  manualScrollMultiplier = 2,
  direction = 'rtl'
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

    // For ltr, initialise at the midpoint so reverse looping works seamlessly
    if (direction === 'ltr') {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }

    let animationFrameId;
    
    const autoScroll = () => {
      if (!isAutoScrollPaused) {
        if (direction === 'ltr') {
          scrollContainer.scrollLeft -= autoScrollSpeed;
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
          }
        } else {
          scrollContainer.scrollLeft += autoScrollSpeed;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrollPaused, autoScrollSpeed, direction]);

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
          className="fixed inset-0 bg-blue-950/60 flex items-center justify-center z-50 backdrop-blur-lg p-4 cursor-pointer"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl max-w-md w-full p-4 md:p-8 text-center shadow-2xl border border-blue-100/80"
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
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4 mb-6">
              <button
                className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
                onClick={(e) => handleSocialClick(e, selectedMember.github)}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub Profile
              </button>
              <button
                className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
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

function MembersSection() {
  return <ProfessionalMemberMarquee members={communityMembers} />;
}

function AlumniSection() {
  return <ProfessionalMemberMarquee members={alumniMembers} direction="ltr" />;
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
  manualScrollMultiplier: PropTypes.number,
  direction: PropTypes.oneOf(['ltr', 'rtl'])
};

export default MembersSection;
export { AlumniSection };