import React from 'react';
import { useNavigate } from 'react-router-dom';  
import Ips_Logo from '../assets/IPS WHITE batch 1.png';
import { Link } from 'react-scroll';
<link rel="stylesheet" href='index.css'></link>

const Header = () => {
    const navigate = useNavigate(); 

    const handleJoinCommunity = () => {
        navigate('/join-community');  
    };

    return (
        <div className='w-full h-[80px] flex px-10 justify-between items-center font-primary bg-white shadow-md fixed top-0 left-0 right-0 z-50 opacity-85'>
            <div className='flex items-center gap-5'>
                <img src={Ips_Logo} alt="Logo" className='w-[70px] h-[70px]' />
                <h1 className='font-semibold text-2xl mokoto-text'>IPS Tech Community</h1>
            </div>
            <ul className='flex items-center gap-10 mokoto-text'>
                {['home', 'about', 'projects', 'contact'].map((section) => (
                    <Link key={section} to={section} smooth={true} duration={1000}>
                        <li className='text-1.5xl font-semibold cursor-pointer px-7 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white'>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    </Link>
                ))}
            </ul>
            <div>
                <button 
                    className='text-white px-5 py-2 rounded-lg bg-blue-600 font-medium cursor-pointer transition-all duration-300 hover:bg-blue-600 '
                    onClick={handleJoinCommunity}  
                >
                    Join Community
                </button>
            </div>
        </div>
    );
};

export default Header;
