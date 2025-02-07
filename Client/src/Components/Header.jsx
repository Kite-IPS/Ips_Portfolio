import React, { useState, useEffect } from "react";
import Logo from "../assets/IPS WHITE batch 1.png";
import { Link, Events, scrollSpy } from "react-scroll";

const Header = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        // Register scroll event to track active section dynamically
        Events.scrollEvent.register("begin", function (to) {
            setActiveSection(to);
        });

        Events.scrollEvent.register("end", function (to) {
            setActiveSection(to);
        });

        // Initialize scrollSpy for detecting scroll position
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    return (
        <div className="w-[80%] h-[100px] mx-auto border border-gray-300 font-primary flex items-center justify-between px-5 rounded-[20px] glass">
            {/* Logo and Title */}
            <div className="flex items-center gap-5">
                <img src={Logo} alt="Ips Logo" />
                <h1 className="font-semibold text-xl">IPS TECH COMMUNITY</h1>
            </div>

            {/* Navigation Buttons */}
            <ul className="flex items-center gap-5 font-semibold">
                {["home", "about", "projects", "members"].map((section) => (
                    <Link
                        key={section}
                        to={section}
                        spy={true}
                        smooth={true}
                        duration={500}
                        
                        onSetActive={() => setActiveSection(section)}
                    >
                        <li
                            className={`cursor-pointer px-3 py-1 transition-all duration-300 ${
                                activeSection === section
                                    ? "text-black border-b-2 border-black font-bold"
                                    : "hover:text-stone-500"
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    </Link>
                ))}
            </ul>

            {/* Contact Button */}
            <button className="bg-blue-500 text-white px-[55px] py-3 rounded-md hover:bg-blue-600 transition-all font-primary font-semibold shadow-xl">
                <Link to="contact" smooth={true} duration={500} >
                    Contact us
                </Link>
            </button>
        </div>
    );
};

export default Header;
