import React from 'react'
import Header from '../Components/Header'
import HeroImg from '../assets/img.png'
import Button from '../Components/Button'
import { Link } from 'react-scroll'
import InfoBox from '../Components/InfoBox'
import aboutImg from '../assets/aboutImg.png'
import { HiArrowSmRight } from "react-icons/hi"
import ProjectCard from '../Components/ProjectCard'
import section from '../assets/section.png'
import ServiceBox from '../Components/ServiceBox'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/join-community');
    }
    return (
        <>
            <Header handleButtonClick={handleButtonClick}/>

            <section id='home' className='w-full h-[90vh] flex items-center justify-center font-primary'>
                <div className='w-[80%] flex'>
                    <div className='w-1/2 flex flex-col items-start justify-center'>
                        <h1 className='font-bold text-6xl'>
                            Welcome to IPS TECH COMMUNITY
                        </h1>
                        <p className='font-light text-base my-10 w-[80%]'>
                            Empowering developers and tech enthusiasts through collaboration, learning, and innovation.
                        </p>
                        <div className='flex items-center gap-5'>
                            <Button onclick={handleButtonClick} type={'filled'} color={'blue-600'}>Join Community</Button>
                            <Link to='projects' smooth={true} duration={1000}>
                                <Button type={'outlined'} color={'blue-600'}>View projects</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <img src={HeroImg} alt="Community Img" />
                    </div>
                </div>
            </section>


            <section id="about" className="h-screen font-primary">
                <div className='h-[80px] font-semibold text-3xl flex items-center justify-center'>
                    <h1>What We Offer</h1>
                </div>
                <div className='w-[80%] mx-auto flex items-center justify-around mt-5'>
                    <InfoBox title={'Technical Workshops'} description={'Learn from industry experts through hands-on workshops and training sessions.'} />
                    <InfoBox title={'Community Event'} description={'Connect with like-minded professionals in our networking events.'} />
                    <InfoBox title={'Innovation Hub'} description={'Access resources and mentorship to bring your ideas to life.'} />
                </div>
                <div className='mt-15 w-[80%] mx-auto flex items-center justify-center'>
                    <div className="w-1/2 flex items-center justify-center">
                        <img src={aboutImg} alt="Image" /></div>
                    <div className="w-1/2 flex flex-col items-start justify-center space-y-15">
                        <h1 className='font-bold text-5xl w-[80%]'>Connect your tools, close your tabs</h1>
                        <p className='font-light text-base text-gray-500'>
                            Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.
                        </p>
                        <p className='underline cursor-pointer flex items-center gap-2 text-blue-600'>
                            Learn more
                            <HiArrowSmRight />
                        </p>
                    </div>
                </div>
            </section>
            <section id="projects" className="border border-green-500 font-primary">
                <div className='w-[80%] mx-auto flex items-center justify-around'>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-4xl text-blue-500'>20+</h1>
                        <p className='text-base text-gray-500'>Community Members</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-4xl text-blue-500'>3</h1>
                        <p className='text-base text-gray-500'>Completed Projects</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-4xl text-blue-500'>10+</h1>
                        <p className='text-base text-gray-500'>Tech Events</p>
                    </div>
                </div>
                <div className='mt-20 flex items-center justify-center'>
                    <h1 className='font-bold text-4xl'>Our projects</h1>
                </div>
                <div className='w-[80%] mx-auto mt-20 flex items-center justify-around'>
                    <ProjectCard name={'KG-SLAR'} description={"It's a student late attendance report system using RFID technology"} />
                    <ProjectCard name={'KG-CAR'} description={"It's a Certificate Acknowladgement System"} />
                </div>
                <div className='mt-20'>
                    <Link to='contact' smooth={true} duration={1000}>
                        <img src={section} alt="Image" className='mx-auto' />
                    </Link>
                </div>
                <div className="mt-20">
                    <div className='w-[80%] mx-auto flex flex-col items-center justify-center'>
                        <h1 className='font-bold text-4xl'>Our Services</h1>
                        <p className='font-light text-base text-gray-500 mt-2'>Professional services to help you achieve your tech goals</p>
                    </div>
                    <div className='mt-20 w-[80%] mx-auto flex items-center justify-between'>
                        <ServiceBox>Web Development</ServiceBox>
                        <ServiceBox>Mobile Apps</ServiceBox>
                        <ServiceBox>Cloud Solutions</ServiceBox>
                        <ServiceBox>AI Services</ServiceBox>
                    </div>
                </div>
            </section>
            <section id="contact" className="h-screen border border-yellow-500"></section>
            
        </>
        
    )
}

export default LandingPage