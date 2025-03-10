import React from 'react'
import Ips_Logo from '../assets/IPS WHITE batch 1.png'
import { Link } from 'react-scroll';
const Header = ({ handleClickButton }) => {
    return (
        <div className='w-full h-[80px] flex px-10 justify-between items-center font-primary'>
            <div className='flex items-center gap-5'>
                <img src={Ips_Logo} alt="Logo" className='w-[70px] h-[70px]' />
                <h1 className='font-semibold text-2xl'>IPS Tech</h1>
            </div>
            <ul className='flex items-center gap-10'>
                <Link to='home' smooth={true} duration={1000}>
                    <li className='font-semibold cursor-pointer'>Home</li>
                </Link>
                <Link to='about' smooth={true} duration={1000}>
                    <li className='font-semibold cursor-pointer'>About</li>
                </Link>
                <Link to='projects' smooth={true} duration={1000}>
                    <li className='font-semibold cursor-pointer'>Projects</li>
                </Link>
                <Link to='contact' smooth={true} duration={1000}>
                    <li className='font-semibold cursor-pointer'>Contact</li>
                </Link>
            </ul>
            <div>
                <button 
                className='text-white px-5 py-2 rounded-lg bg-blue-600 font-medium cursor-pointer'
                onClick={handleClickButton}
                >
                    Join Community
                </button>
            </div>
        </div>
    )
}

export default Header