import React from 'react';
import KGSLAR from '../assets/KG-SLAR.png';
import KGCAR from '../assets/KG-CAR.png';


const ProjectCard = ({ name, description }) => {
    return (
        <div className="w-[400px] rounded-2xl h-[360px] overflow-hidden font-primary shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            {/* Image Section */}
            <div className="h-[50%] overflow-hidden">
                {name === "KG-SLAR" ? (
                    <img src={KGSLAR} alt="KG-SLAR" className="w-full h-full object-cover rounded-t-2xl" />
                ) : (
                    <img src={KGCAR} alt="KG-CAR" className="w-full h-full object-cover rounded-t-2xl" />
                )}
            </div>

            {/* Content Section */}
            <div className="h-[50%] flex flex-col justify-between p-5 bg-white">
                <h1 className="font-bold text-3xl">{name}</h1>
                <p className="text-gray-500">{description}</p>
                <p className="underline cursor-pointer flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    
                   
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
