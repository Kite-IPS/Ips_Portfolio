import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold flex items-center">
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
            <li><a href="https://github.com/Kite-IPS" className="text-gray-400 hover:text-blue-400 flex items-center gap-2"><FaGithub /> GitHub</a></li>
            <li><a href="https://lnkd.in/gZdPmjSB" className="text-gray-400 hover:text-blue-400 flex items-center gap-2"><FaLinkedin />LinkedIn</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 flex items-center gap-2"><BiLogoGmail />Gmail</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 flex items-center gap-2"><FaDiscord />Discord</a></li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full mt-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
