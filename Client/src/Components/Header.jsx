import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ips_Logo from '../assets/general/IPS WHITE batch 1.png';
import { Link } from 'react-scroll';

const Header = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleJoinCommunity = () => {
        navigate('');
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    const navSections = [
        { name: 'home', label: 'Home' },
        { name: 'about', label: 'About' },
        { name: 'projects', label: 'Projects' },
        { name: 'members', label: 'Members' },
        { name: 'contact', label: 'Contact' }
    ];

    return (
        <div className={`w-full h-[80px] flex px-4 md:px-10 justify-between items-center font-primary fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            {/* Logo */}
            <div className='flex items-center gap-1.5 sm:gap-2 md:gap-5 shrink-0'>
                <img
                    src={Ips_Logo}
                    alt="Logo"
                    className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] flex-shrink-0 transition-transform hover:scale-110'
                />
                <h1 className='font-semibold text-[13px] sm:text-xl md:text-2xl mokoto-text whitespace-nowrap'>
                    IPS Tech Community
                </h1>
            </div>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex items-center gap-6 lg:gap-10'>
                {navSections.map((section) => (
                    <Link
                        key={section.name}
                        to={section.name}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                        className='group'
                    >
                        <li className='text-xl font-medium cursor-pointer px-3 lg:px-7 py-2 rounded-lg transition-all duration-300 relative'>
                            {section.label}
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full'></span>
                        </li>
                    </Link>
                ))}
                <a
                    // href="https://intern.up.railway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-xl font-medium cursor-pointer px-3 lg:px-7 py-2 rounded-lg hover:text-blue-600 transition-all duration-300'
                >
                    Internship
                </a>
            </ul>

            {/* Desktop Join Button */}
            <div className='hidden md:block'>
                <button
                    className='text-white px-4 py-2 rounded-lg bg-blue-600 font-medium cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:shadow-lg'
                    onClick={handleJoinCommunity}
                >
                    Join Community
                </button>
            </div>

            {/* Mobile Menu Icons */}
            <div className='md:hidden flex items-center gap-2'>
                <button
                    className='text-white px-3 py-1 rounded-lg bg-blue-600 font-medium text-sm cursor-pointer transition-all duration-300 hover:bg-blue-700'
                    onClick={handleJoinCommunity}
                >
                    Join
                </button>
                <button
                    onClick={toggleMobileMenu}
                    className='text-blue-600 p-2 focus:outline-none'
                    aria-label="Toggle Mobile Menu"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className='md:hidden absolute top-[80px] left-0 right-0 bg-white shadow-md z-40'>
                    <ul className='flex flex-col w-full'>
                        {navSections.map((section) => (
                            <Link
                                key={section.name}
                                to={section.name}
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                onClick={closeMobileMenu}
                            >
                                <li className='text-base font-semibold cursor-pointer px-6 py-4 border-b border-gray-100 hover:bg-blue-50 transition-all duration-200'>
                                    {section.label}
                                </li>
                            </Link>
                        ))}
                        <a
                            // href="https://intern.up.railway.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobileMenu}
                            className='text-base font-semibold px-6 py-4 border-b border-gray-100 hover:bg-blue-50 transition-all duration-200'
                        >
                            Internship
                        </a>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
