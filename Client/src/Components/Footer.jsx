import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
<link rel="stylesheet" href="index.css"></link>

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-between">
        
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold flex items-center mokoto-text">
            <span className="text-blue-400 text-2xl mr-2">{"</>"}</span> IPS Tech
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Empowering innovation through community collaboration
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://github.com/Kite-IPS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://lnkd.in/gZdPmjSB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                <BiLogoGmail /> Gmail
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/your-invite-link" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                <FaDiscord /> Discord
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
