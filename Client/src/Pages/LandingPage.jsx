import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import HeroImg from '../assets/general/community2.png';
import Button from '../Components/Button';
import { Link } from 'react-scroll';
import InfoBox from '../Components/InfoBox';
import aboutImg from '../assets/general/aboutImg.png';
// import { HiArrowSmRight } from "react-icons/hi";
import ProjectCard from '../Components/ProjectCard';
// import section from '../assets/section.png';
import ServiceBox from '../Components/ServiceBox';
import Member from '../Components/Member';
import { AlumniSection } from '../Components/Member';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import SathishImg from '../assets/members/sathish.jpeg';
import IpsBadge from '../assets/general/IPS WHITE batch 1.png';
import { FaRocket } from "react-icons/fa";


const words = ["Community","Learning","Growing","Building"]; // Words to cycle

const LandingPage = () => {
    const navigate = useNavigate();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [spocModalOpen, setSpocModalOpen] = useState(false);
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Switch word
                setFade(true); // Start fade-in
            }, 500); // Wait 500ms before changing the word
        }, 3000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const projectButtonClick = () => {
        navigate('/project-submission');
        window.scrollTo(0, 0);
    };

    // const toggleMobileMenu = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    // };

    return (
        <>
            {/* Mobile menu toggle button can be added to your Header component */}
            <Header 
                handleButtonClick={() => navigate('/join-community')}
                additionalLinks={
                    <>
                        <Link 
                            to='projects' 
                            smooth={true} 
                            duration={1000} 
                            className="cursor-pointer"
                        >
                            Projects
                        </Link>
                        <Link 
                            to='members' 
                            smooth={true} 
                            duration={1000} 
                            className="cursor-pointer"
                        >
                            Members
                        </Link>
                    </>
                }
            />

            {/* Hero Section */}
            <section id='home' className='w-full min-h-screen pt-24 sm:pt-20 md:mt-10 flex items-center justify-center font-primary px-4 sm:px-6'>
                <div className='w-full sm:w-[95%] md:w-[90%] flex flex-col md:flex-row gap-8 md:gap-6 -mt-11 md:-mt-22'>
                    <div className='w-full md:w-[46%] flex flex-col items-center md:items-start justify-center mb-8 md:mb-0'>
                        {/* Animated Text with Smooth Transition */}
                        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mokoto-text leading-tight sm:leading-[55px] md:leading-[65px] lg:leading-[75px] text-center md:text-left'>
                            Welcome to IPS TECH
                            <br />
                            <span className={`fade-text ${fade ? 'fade-in' : 'fade-out'}`}>
                                {words[currentWordIndex]}
                            </span>
                            
                        </h1>

                        <p className='font-semibold text-sm sm:text-base my-6 md:my-10 w-full sm:w-[80%] md:w-[70%] text-center md:text-left'>
                            Empowering developers and tech enthusiasts through collaboration, learning, and innovation.
                        </p>

                        <div className='font-semibold flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-6 w-full'>
                            <Button onclick={() => navigate('')} type={'filled'} color={'blue-600'}>Join Community</Button>
                            <Link to='projects' smooth={true} duration={1000}>
                                <Button type={'outlined'} color={'blue-600'}>View projects</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full md:w-[54%] flex justify-center md:justify-end mt-4 md:mt-0'>
                        <img 
                            src={HeroImg} 
                            alt="Community Img" 
                            className="w-full rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen py-10 md:py-0 font-primary px-4 sm:px-6 md:px-0">
                <div className='h-auto py-6 sm:py-4 sm:h-[80px] font-semibold text-lg sm:text-xl md:text-4xl flex items-center justify-center mokoto-text'>
                    <h1>What We Offer</h1>
                </div>
                <div className='w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col items-center md:flex-row md:items-center justify-around mt-5 gap-6 md:gap-4'>
                    <InfoBox title={'Technical Workshops'} description={'Learn from industry experts through hands-on workshops and training sessions.'} />
                    <InfoBox title={'Community Event'} description={'Connect with like-minded professionals in our networking events.'} />
                    <InfoBox title={'Innovation Hub'} description={'Access resources and mentorship to bring your ideas to life.'} />
                </div>
                <div className='mt-10 md:mt-15 w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center'>
                    <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                        <img src={aboutImg} alt="Image" className="w-full max-w-md" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 md:space-y-15">
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl w-full md:w-[80%] mokoto-text'>Connect your tools, close your tabs</h1>
                        <p className='font-light text-base text-gray-500'>
                            Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
                        </p>
                        
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="font-primary pb-10 px-4 sm:px-6 md:px-0">
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-0'>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>30+</h1>
                        <p className='text-base text-gray-500'>Community Members</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>13</h1>
                        <p className='text-base text-gray-500'>Live Projects</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>15+</h1>
                        <p className='text-base text-gray-500'>Tech Events</p>
                    </div>
                </div>
                <div className='mt-16 md:mt-20 flex items-center justify-center'>
                    <h1 className='font-bold text-2xl md:text-3xl mokoto-text'>Our  projects</h1>
                </div>
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-4'>
                    <ProjectCard name={'KG-SLAR'} description={"It's a student late attendance report system using RFID technology"} />
                    <ProjectCard name={'KG-CAR'} description={"It's a Certificate Acknowlegement System"} />
                    <ProjectCard name={'KG-APS'} description={"A comprehensive dashboard to track and update academic progress in a college"} />
                </div>
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto mt-8 md:mt-20 flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-4'>
                    <ProjectCard name={'KG-BITES'} description={"It's a Canteen Management System"} />
                    <ProjectCard name={'IQAC PORTAL'} description={"A digital portal to streamline the event approval process with a structured hierarchical workflow, ensuring transparency and traceability."} />
                    <ProjectCard name={'FACULTY APPRAISAL SYSTEM'} description={"A web-based system to evaluate faculty performance, collect appraisal data, and streamline academic review workflows."} />
                </div>
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto mt-8 md:mt-20 flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-4'>
                    <ProjectCard name={'TASK SCHEDULER'} description={"A task scheduling and workflow management system to create, track, and manage academic or administrative tasks."} />
                    <ProjectCard name={'RECORD GENERATOR'} description={"A web application for generating formatted academic records and documentation automatically."} />
                    <ProjectCard name={'GATE E-PASS SYSTEM'} description={"A system to digitize visitor/event gate pass creation, approval, and tracking with role-based access, QR/OTP verification, and audit logging."} />
                </div>
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto mt-8 md:mt-20 flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-4'>
                    <ProjectCard name={'LETTER GENERATOR'} description={"An automated portal to generate official letters dynamically based on predefined templates and input parameters."} />
                    <ProjectCard name={'EDU MANAGE FOR C FACULTIES'} description={"An administrative chatbot portal designed for managing C programming faculty academic resources and workflows."} />
                    <ProjectCard name={'ISSUE ADDRESS PORTAL'} description={"A complaint management system to submit, track, and resolve institutional issues efficiently."} />
                </div>
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto mt-8 md:mt-20 flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-4'>
                    <ProjectCard name={'PYTHODAR PORTAL'} description={"A student portal for the Pythodar event to submit innovative ideas and instantly generate a structured Idea Proposal PDF."} />
                    <ProjectCard name={'CLASSROOM ENGAGEMENT SYSTEM WITH METADATA'} description={"A secure, role-based system for faculty video upload with automated metadata extraction, timetable validation, and compliance monitoring dashboards."} />
                    <ProjectCard name={'KG-KEYLOG'} description={"An RFID-based lab key management system with triple-tag scanning, automated three-tier email escalation, and a permanent audit log for every key handover."} />
                </div>
                
                <div className='mt-16 md:mt-20 flex items-center justify-center'>
                    <h1 className='font-bold text-2xl md:text-3xl mokoto-text'>Events Organised</h1>
                </div>
                <div className='w-full sm:w-[90%] md:w-[80%] mx-auto mt-8 md:mt-20 flex flex-col items-center md:flex-row md:justify-around gap-6 md:gap-4'>
                    <a href = "https://pyexpo2k26.pages.dev/" target='_blank' className='w-full sm:w-auto'><ProjectCard name={'PYEXPO'} description={"The Primary Goal of PyExpo 25 is to Introduce First-year Students to the collaborative, problem-solving nature of hackathons"} /></a>
                    <a href = "https://sih-thiruvizha.netlify.app/" target = "_blank" className='w-full sm:w-auto'><ProjectCard name={'SIH-THIRUVIZHA'} description={"SIH THIRUVIZHA is an exhilarating 30 hours hackathon event where innovation meets collaboration to tackle real-world challenges."} /></a>
                    <ProjectCard name={'PYEXPO-WEBSITE'} description={"The official PyExpo website — an exclusive hackathon event platform for first-year students to experience collaborative problem-solving."} />
                </div>


                {/* SPOC / Mentor Section */}
                <div id="spoc" className="mt-16 md:mt-20">
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mokoto-text text-center'>SPOC <span className='text-blue-600'>(Mentor)</span></h1>
                    <p className='font-light text-sm sm:text-base text-gray-500 mt-2 text-center px-4'>The guiding force behind our community</p>

                    <div className='mt-10 flex justify-center px-4'>
                        <div className='w-56 md:w-72 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer' onClick={() => setSpocModalOpen(true)}>
                            <div className="relative">
                                <img
                                    src={SathishImg}
                                    alt='Sathish'
                                    className='w-full h-50 md:h-70 object-cover object-top'
                                />
                                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                                    <div className="bg-black rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img src={IpsBadge} alt="IPS Badge" className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 md:p-4">
                                <h3 className="font-semibold text-base md:text-lg text-slate-800">Sathish Ramanujam</h3>
                                <p className="text-xs md:text-sm text-slate-600 mb-1">SPOC &amp; Mentor</p>
                                <p className="text-xs text-slate-500 italic">Specialty: ML Dev. & CV</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SPOC Modal */}
                {spocModalOpen && (
                    <div
                        className="fixed inset-0 bg-blue-950/60 flex items-center justify-center z-50 backdrop-blur-lg p-4 cursor-pointer"
                        onClick={() => setSpocModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white/60 backdrop-blur-xl rounded-2xl max-w-md w-full p-4 md:p-8 text-center shadow-2xl border border-blue-100/80"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={SathishImg}
                                alt='Sathish'
                                className="w-36 h-36 md:w-52 md:h-52 object-cover object-top rounded-full mx-auto mb-4 md:mb-6 border-4 border-slate-200"
                            />
                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Sathish</h2>
                            <p className="text-slate-600 mb-1">SPOC &amp; Mentor</p>
                            <p className="text-sm text-slate-500 mb-4">Specialty in ML Dev. & CV</p>

                            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4 mb-6">
                                <button
                                    className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
                                    onClick={() => window.open('https://github.com/Professor-Sathish', '_blank')}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                    </svg>
                                    GitHub Profile
                                </button>
                                <button
                                    className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
                                    onClick={() => window.open('https://www.linkedin.com/in/sathish-ramanujam-96545313a/', '_blank')}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                                    </svg>
                                    LinkedIn Profile
                                </button>
                            </div>

                            <div className="flex justify-center space-x-3 mb-4">
                                <div className="bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                    <img src={IpsBadge} alt="IPS Badge" className="w-6 h-6" />
                                </div>
                            </div>

                            <button
                                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition-colors"
                                onClick={() => setSpocModalOpen(false)}
                            >
                                Close Profile
                            </button>
                        </motion.div>
                    </div>
                )}

                <div id="members" className="mt-16 md:mt-20 ">
    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mokoto-text text-center'>Our Members</h1>
    <p className='font-light text-sm sm:text-base text-gray-500 mt-2 text-center px-4'>Meet the talented individuals behind our community</p>
    <Member />
</div>

                <div id="alumni" className="mt-16 md:mt-20 ">
    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mokoto-text text-center'>Alumni</h1>
    <p className='font-light text-sm sm:text-base text-gray-500 mt-2 text-center px-4'>Honoring the pioneers who built our foundation</p>
    <AlumniSection />
</div>

                <div className="mt-16 md:mt-20">
                    <div className='w-[95%] sm:w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center'>
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mokoto-text'>Our Services</h1>
                        <p className='font-light text-sm sm:text-base text-gray-500 mt-2 text-center'>Professional services to help you achieve your tech goals</p>
                    </div>
                    <div className='mt-8 sm:mt-10 md:mt-20 w-[95%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center'>
                    <div className='w-full flex justify-center'><ServiceBox>Mobile Apps</ServiceBox></div>
                    <div className='w-full flex justify-center'><ServiceBox>Cloud Solutions</ServiceBox></div>
                    <div className='w-full flex justify-center'><ServiceBox>AI Services</ServiceBox></div>
                    <div className='w-full flex justify-center'><ServiceBox>Web Development</ServiceBox></div>
                    <div className='w-full flex justify-center'><ServiceBox>Embedded Systems & IoT</ServiceBox></div>
                    </div>

                </div>
            </section>

            <section id="contact" className="showcase-section px-4 sm:px-6 py-10 md:py-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready to Showcase Your Project?</h2>
                <p className="mb-6 max-w-lg mx-auto text-sm sm:text-base">Join our community and share your technical innovations with the world</p>
                <button className="submit-btn px-6 py-3 flex items-center justify-center gap-2 mx-auto" onClick={projectButtonClick}>
                    <FaRocket /> Submit Your Project
                </button>
            </section>
            
            <Footer></Footer>
        </>
    )
}
export default LandingPage;