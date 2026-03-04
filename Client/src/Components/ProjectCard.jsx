import "react";
import { useNavigate } from "react-router-dom";
import { Monitor } from "lucide-react";
import KGSLAR from "../assets/projects/KG-SLAR.png";
import KGCAR from "../assets/projects/KG-CAR.png";
import SIHTHIRUVIZHA from "../assets/events/SIH-THIRUVIZHA.png";
import PYEXPO from "../assets/events/PYEXPO.png";
import KGAPS from "../assets/projects/KG-APS.jpg";
import KGBITES from "../assets/projects/KG-BITES.png";
import PYEXPOWEBSITE from "../assets/projects/PYEXPO-WEBSITE.png";
import IQACPORTAL from "../assets/projects/IQAC-PORTAL.jpeg";
import LETTERGENERATOR from "../assets/projects/LETTER-GENERATOR.png";
import RECORDGENERATOR from "../assets/projects/RECORD-GENERATOR.png";
import ISSUEADDRESSPORTAL from "../assets/projects/ISSUE-ADDRESS-PORTAL.png";
import TASKSCHEDULER from "../assets/projects/TASK-SCHEDULER.png";
import FACULTYAPPRAISALSYSTEM from "../assets/projects/FACULTY-APPRAISAL-SYSTEM.jpeg";
import EDUMANAGECFACULTIES from "../assets/projects/EDU-MANAGE-C-FACULTIES.png";
import GATEEPASSSYSTEM from "../assets/projects/GATE-EPASS-SYSTEM.jpeg";
import PYTHODARPORTAL from "../assets/projects/PYTHODAR-PORTAL.png";
import CLASSROOMENGAGEMENTSYSTEM from "../assets/projects/CLASSROOM-ENGAGEMENT-SYSTEM.png";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ name, description }) => {
  const navigate = useNavigate();

  // Map for project routes (internal pages)
  const projectRoutes = {
    "KG-SLAR": "/kgslar",
    "KG-CAR": "/kgcar",
    "KG-APS": "/kgaps",
    "KG-BITES": "/kgbites",
    "PYEXPO-WEBSITE": "/pyexpowebsite",
    "IQAC PORTAL": "/iqacportal",
    "FACULTY APPRAISAL SYSTEM": "/facultyappraisalsystem",
    "TASK SCHEDULER": "/taskscheduler",
    "RECORD GENERATOR": "/recordgenerator",
    "GATE E-PASS SYSTEM": "/gateepasssystem",
    "LETTER GENERATOR": "/lettergenerator",
    "EDU MANAGE FOR C FACULTIES": "/edumanagecfaculties",
    "ISSUE ADDRESS PORTAL": "/issueaddressportal",
    "PYTHODAR PORTAL": "/pythodarportal",
    "CLASSROOM ENGAGEMENT SYSTEM WITH METADATA": "/metaview",
  };

  // Map for external links (opens in new tab)
  const externalLinks = {
    "PYEXPO": "https://pyexpo2k26.pages.dev/",
    "SIH-THIRUVIZHA": "https://sih-thiruvizha.netlify.app/",
  };

  const handleClick = (projectName) => {
    if (externalLinks[projectName]) {
      window.open(externalLinks[projectName], "_blank", "noopener,noreferrer");
    } else {
      const route = projectRoutes[projectName];
      if (route) navigate(route);
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
    "IQAC PORTAL": IQACPORTAL,
    "LETTER GENERATOR": LETTERGENERATOR,
    "RECORD GENERATOR": RECORDGENERATOR,
    "ISSUE ADDRESS PORTAL": ISSUEADDRESSPORTAL,
    "TASK SCHEDULER": TASKSCHEDULER,
    "FACULTY APPRAISAL SYSTEM": FACULTYAPPRAISALSYSTEM,
    "EDU MANAGE FOR C FACULTIES": EDUMANAGECFACULTIES,
    "GATE E-PASS SYSTEM": GATEEPASSSYSTEM,
    "PYTHODAR PORTAL": PYTHODARPORTAL,
    "CLASSROOM ENGAGEMENT SYSTEM WITH METADATA": CLASSROOMENGAGEMENTSYSTEM,
  };

  return (
    <div className="w-full sm:w-[340px] md:w-[360px] lg:w-[400px] rounded-2xl overflow-hidden font-primary border border-gray-200 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:border-blue-300 transform-gpu flex flex-col bg-white">
      <div className="h-[200px] sm:h-[220px] md:h-[240px] flex-shrink-0 overflow-hidden bg-gray-100">
        {imageMap[name] ? (
          <img
            src={imageMap[name]}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <Monitor className="w-16 h-16 text-blue-400" />
          </div>
        )}
      </div>

      {/* Accent divider */}
      <div className="h-[2px] w-full bg-blue-600 flex-shrink-0" />

      <div className="flex items-center justify-between p-4 sm:p-5 bg-white h-[72px] flex-shrink-0">
        <h1 className="font-bold text-sm sm:text-base leading-tight line-clamp-2 transition-colors duration-300 hover:text-blue-600 cursor-default flex-1 mr-3">
          {name}
        </h1>
        {(projectRoutes[name] || externalLinks[name]) && (
          <button
            className="px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md whitespace-nowrap flex-shrink-0"
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
