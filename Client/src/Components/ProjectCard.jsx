import React from 'react';
import { Link } from 'react-router-dom';
import KGSLAR from '../assets/KG-SLAR.png';
import KGCAR from '../assets/KG-CAR.png';
import SIHTHIRUVIZHA from '../assets/SIH-THIRUVIZHA.png';
import PYEXPO from '../assets/PYEXPO.png';
import KGAPS from '../assets/KG-APS.jpg';

const ProjectCard = ({ name, description }) => {
    // Mapping project names to their respective route paths
    const projectRoutes = {
        "KG-SLAR": "/kgslar",
        "KG-CAR": "/kgcar",
        "KG-APS": "/kgaps"
    };

    return (
        <div className="md:w-[400px] rounded-2xl h-[360px] overflow-hidden font-primary shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl perspective-1000 transform-gpu hover:rotate-3 hover:brightness-110">
            
            <div className="h-[50%] overflow-hidden">
                {name === "KG-SLAR" ? (
                    <img src={KGSLAR} alt="KG-SLAR" className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
                ) : name === "KG-CAR" ? (
                    <img src={KGCAR} alt="KG-CAR" className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
                ) : name === "SIH-THIRUVIZHA" ? (
                    <img src={SIHTHIRUVIZHA} alt="SIH-THIRUVIZHA" className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
                ) : name === "PYEXPO" ? (
                    <img src={PYEXPO} alt="PYEXPO" className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
                ) : (
                    <img src={KGAPS} alt="KG-APS" className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
                )}
            </div>

            {/* Content Section */}
            <div className="h-[50%] flex flex-col justify-between p-5 bg-white transition-all duration-500 transform-gpu hover:-translate-y-2">
                <h1 className="font-bold text-3xl transition-transform duration-500 hover:text-blue-600">{name}</h1>
                <p className="text-gray-500 transition-all duration-500 hover:text-gray-700">{description}</p>
                {(name === "KG-SLAR" || name === "KG-CAR" || name === "KG-APS") && (
                    <Link 
                        to={projectRoutes[name] || "/projects"} 
                        className="group relative inline-block"
                    >
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg 
                            transition-all duration-300 ease-in-out 
                            transform hover:scale-105 hover:bg-blue-700 
                            hover:shadow-lg hover:translate-x-1
                            relative overflow-hidden">
                            <span className="relative z-10">View Project</span>
                            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;