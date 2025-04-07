import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import HeroImg from '../assets/community2.png';
import Button from '../Components/Button';
import { Link } from 'react-scroll';
import InfoBox from '../Components/InfoBox';
import aboutImg from '../assets/aboutImg.png';
// import { HiArrowSmRight } from "react-icons/hi";
import ProjectCard from '../Components/ProjectCard';
// import section from '../assets/section.png';
import ServiceBox from '../Components/ServiceBox';
import Member from '../Components/Member';
import Intern from '../Components/Intern';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { FaRocket } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const words = ["Community","Learning","Growing","Building"]; // Words to cycle

const LandingPage = () => {
    const navigate = useNavigate();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);
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
            <Helmet> 
            <title>IPS TECH Community | Empowering Developers Through Collaboration</title>
                <meta name="title" content="IPS TECH Community | Empowering Developers Through Collaboration" />
                <meta name="description" content="Join IPS TECH community for technical workshops, networking, project collaboration, and innovation. Connect with like-minded developers and tech enthusiasts." />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.facebook.com/story.php/?story_fbid=1072198944917791&id=100063830864791&_rdr" />
                <meta property="og:title" content="IPS TECH Community | Empowering Developers Through Collaboration" />
                <meta property="og:description" content="Join IPS TECH community for technical workshops, networking, project collaboration, and innovation. Connect with like-minded developers and tech enthusiasts." />
                <meta property="og:image" content="/og-image.jpg" />
                
                {/* Keywords */}
                <meta name="keywords" content="IPS TECH, tech community, developer community, technical workshops, hackathons, tech events, PyExpo, SIH-THIRUVIZHA, project collaboration" />
                
                {/* Other important meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <link rel="canonical" href="http://ips-portfolio.netlify.app/" />
                
                {/* Structured data for rich search results */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "IPS TECH Community",
                        "url": "http://ips-portfolio.netlify.app/",
                        "description": "Empowering developers and tech enthusiasts through collaboration, learning, and innovation.",
                        "sameAs": [
                            "https://www.instagram.com/ips_tech.community/",
                            "https://linkedin.com/company/ipstechinc"
                        ]
                    }
                `}
                </script>
            </Helmet>
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
            <section id='home' className='w-full min-h-screen mt-10 flex items-center justify-center font-primary'>
                <div className='w-[80%] md:flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col items-start justify-center mb-8 md:mb-0'>
                        {/* Animated Text with Smooth Transition */}
                        <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl mokoto-text leading-tight md:leading-[75px]'>
                            Welcome to IPS TECH
                            <br />
                            <span className={`fade-text ${fade ? 'fade-in' : 'fade-out'}`}>
                                {words[currentWordIndex]}
                            </span>
                            
                        </h1>

                        <p className='font-semibold text-base my-6 md:my-10 w-full md:w-[60%]'>
                            Empowering developers and tech enthusiasts through collaboration, learning, and innovation.
                        </p>

                        <div className='font-semibold flex sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
                            <Button onclick={() => navigate('/join-community')} type={'filled'} color={'blue-600'}>Join Community</Button>
                            <Link to='projects' smooth={true} duration={1000}>
                                <Button type={'outlined'} color={'blue-600'}>View projects</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                        <img 
                            src={HeroImg} 
                            alt="Community Img" 
                            className="w-full lg-w-[80%] rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen py-10 md:py-0 font-primary">
                <div className='h-[80px] font-semibold text-xl md:text-4xl flex items-center justify-center mokoto-text'>
                    <h1>What We Offer</h1>
                </div>
                <div className='w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-around mt-5 gap-6 md:gap-0'>
                    <InfoBox title={'Technical Workshops'} description={'Learn from industry experts through hands-on workshops and training sessions.'} />
                    <InfoBox title={'Community Event'} description={'Connect with like-minded professionals in our networking events.'} />
                    <InfoBox title={'Innovation Hub'} description={'Access resources and mentorship to bring your ideas to life.'} />
                </div>
                <div className='mt-10 md:mt-15 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center'>
                    <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                        <img src={aboutImg} alt="Image" className="w-full max-w-md" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 md:space-y-15">
                        <h1 className='font-bold text-3xl md:text-4xl w-full md:w-[80%] mokoto-text'>Connect your tools, close your tabs</h1>
                        <p className='font-light text-base text-gray-500'>
                            Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
                        </p>
                        
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="font-primary pb-10">
                <div className='w-[90%] md:w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-0'>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>30+</h1>
                        <p className='text-base text-gray-500'>Community Members</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>5</h1>
                        <p className='text-base text-gray-500'>Live Projects</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl md:text-4xl text-blue-500'>10+</h1>
                        <p className='text-base text-gray-500'>Tech Events</p>
                    </div>
                </div>
                <div className='mt-16 md:mt-20 flex items-center justify-center'>
                    <h1 className='font-bold text-2xl md:text-3xl mokoto-text'>Our  projects</h1>
                </div>
                <div className='w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4'>
                    <ProjectCard name={'KG-SLAR'} description={"It's a student late attendance report system using RFID technology"} />
                    <ProjectCard name={'KG-CAR'} description={"It's a Certificate Acknowlegement System"} />
                    <ProjectCard name={'KG-APS'} description={"A comprehensive dashboard to track and update academic progress in a college"} />
                    
                    
                </div>
                <div className='w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4'>
                    <ProjectCard name={'KG-BITES'} description={"It's a Canteen Management System"} />
                    <ProjectCard name={'PYEXPO-WEBSITE'} description={"It is an exclusive hackathon event."} />
                   
                    
                    
                </div>
                
                <div className='mt-16 md:mt-20 flex items-center justify-center'>
                    <h1 className='font-bold text-2xl md:text-3xl mokoto-text'>Events Organised</h1>
                </div>
                <div className='w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4'>
                    <a href = "https://pyexpo.co/" target='_blank'><ProjectCard name={'PYEXPO'} description={"The Primary Goal of PyExpo 25 is to Introduce First-year Students to the collaborative, problem-solving nature of hackathons"} /></a>
                    <a href = "https://sih-thiruvizha.netlify.app/" target = "_blank"><ProjectCard name={'SIH-THIRUVIZHA'} description={"SIH THIRUVIZHA is an exhilarating 30 hours hackathon event where innovation meets collaboration to tackle real-world challenges."} /></a>
                </div>


                <div id="members" className="mt-16 md:mt-20 ">
    <h1 className='font-bold text-2xl md:text-3xl mokoto-text text-center'>Our Members</h1>
    <p className='font-light text-base text-gray-500 mt-2 text-center'>Meet the talented individuals behind our community</p>
    <Member />
    <Intern />
</div>

                <div className="mt-16 md:mt-20">
                    <div className='w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center'>
                        <h1 className='font-bold text-2xl md:text-3xl mokoto-text'>Our Services</h1>
                        <p className='font-light text-base text-gray-500 mt-2 text-center'>Professional services to help you achieve your tech goals</p>
                    </div>
                    <div className='mt-10 md:mt-20 w-[95%] md:w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center md:justify-items-start md:pl-25'>
                    <div className='w-full md:w-auto flex justify-center md:justify-start'><ServiceBox>Mobile Apps</ServiceBox></div>
                    <div className='w-full md:w-auto flex justify-center md:justify-start'><ServiceBox>Cloud Solutions</ServiceBox></div>
                    <div className='w-full md:w-auto flex justify-center md:justify-start'><ServiceBox>AI Services</ServiceBox></div>
                    <div className='w-full md:w-auto flex justify-center md:justify-start'><ServiceBox>Web Development</ServiceBox></div>
                    </div>

                </div>
            </section>

            <section id="contact" className="showcase-section px-4 py-10 md:py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Showcase Your Project?</h2>
                <p className="mb-6 max-w-lg mx-auto">Join our community and share your technical innovations with the world</p>
                <button className="submit-btn px-6 py-3 flex items-center justify-center gap-2 mx-auto" onClick={projectButtonClick}>
                    <FaRocket /> Submit Your Project
                </button>
            </section>
            
            <Footer></Footer>
        </>
    )
}
export default LandingPage;