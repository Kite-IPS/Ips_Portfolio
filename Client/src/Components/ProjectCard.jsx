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
    <div className="w-full sm:w-[340px] md:w-[360px] lg:w-[400px] rounded-2xl overflow-hidden font-primary shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl transform-gpu">
      <div className="h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
        <img
          src={imageMap[name]}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="flex items-center justify-between p-5 sm:p-6 bg-white">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl transition-colors duration-300 hover:text-blue-600 cursor-default">
          {name}
        </h1>
        {projectRoutes[name] && (
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg whitespace-nowrap"
            onClick={() => handleClick(name)}
          >
            View Project
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
