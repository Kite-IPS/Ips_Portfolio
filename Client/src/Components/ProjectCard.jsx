import "react";
import { useNavigate } from "react-router-dom";
import KGSLAR from "../assets/projects/KG-SLAR.png";
import KGCAR from "../assets/projects/KG-CAR.png";
import SIHTHIRUVIZHA from "../assets/events/SIH-THIRUVIZHA.png";
import PYEXPO from "../assets/events/PYEXPO.png";
import KGAPS from "../assets/projects/KG-APS.jpg";
import KGBITES from "../assets/projects/KG-BITES.png";
import PYEXPOWEBSITE from "../assets/projects/PYEXPO-WEBSITE.png";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ name, description }) => {
  const navigate = useNavigate();

  // Map for project routes
  const projectRoutes = {
    "KG-SLAR": "/kgslar",
    "KG-CAR": "/kgcar",
    "KG-APS": "/kgaps",
    "SIH-THIRUVIZHA": "/sihthiruvizha",
    "PYEXPO": "/pyexpo",
    "KG-BITES": "/kgbites",
    "PYEXPO-WEBSITE": "/pyexpowebsite",
  };

  const handleClick = (projectName) => {
    const route = projectRoutes[projectName];
    if (route) {
      window.scrollTo(0, 0);
      navigate(route);
    }
  };

  // Image mapping
  const imageMap = {
    "KG-SLAR": KGSLAR,
    "KG-CAR": KGCAR,
    "SIH-THIRUVIZHA": SIHTHIRUVIZHA,
    "PYEXPO": PYEXPO,
    "KG-APS": KGAPS,
    "KG-BITES": KGBITES,
    "PYEXPO-WEBSITE": PYEXPOWEBSITE,
  };

  return (
    <div className="w-full sm:w-[340px] md:w-[360px] lg:w-[400px] rounded-2xl h-[320px] sm:h-[340px] md:h-[360px] overflow-hidden font-primary shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl perspective-1000 transform-gpu hover:rotate-3 hover:brightness-110">
      <div className="h-[50%] overflow-hidden">
        <img
          src={imageMap[name]}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="h-[50%] flex flex-col justify-between p-5 bg-white transition-all duration-500 transform-gpu hover:-translate-y-2">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl transition-transform duration-500 hover:text-blue-600">
          {name}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base transition-all duration-500 hover:text-gray-700">
          {description}
        </p>
        {(name === "KG-SLAR" || name === "KG-CAR" || name === "KG-APS" || name ==="KG-BITES" || name === "PYEXPO-WEBSITE") && (
          <button
            className="group relative inline-block px-6 py-2 bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:translate-x-1 overflow-hidden"
            onClick={() => handleClick(name)}
          >
            <span className="relative z-10">View Project</span>
            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
