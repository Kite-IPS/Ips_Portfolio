  import React from 'react'
  import technical from '../assets/technical.png'
  import mobile from '../assets/mobile.png'
  import cloud from '../assets/cloud.png'
  import ai from '../assets/ai.png'
  import { MdMemory } from 'react-icons/md'

  const serviceData = {
    "Web Development": { image: technical, description: "Custom web solutions" },
    "Mobile Apps": { image: mobile, description: "iOS and Android development" },
    "Cloud Solutions": { image: cloud, description: "Scalable cloud services" },
    "AI Services": { image: ai, description: "Intelligent automation" },
    "Embedded Systems & IoT": { icon: MdMemory, description: "Hardware & IoT solutions" }
  };


  const ServiceBox = ({ children }) => {
    const service = serviceData[children] || {
      image: "../assets/default.png",
      description: "Intelligence projects"
    };

    return (
      <div className="flex flex-col items-center text-center w-36 sm:w-40 md:w-48">
        {service.icon
          ? <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mb-2 text-blue-600" />
          : <img src={service.image} alt={children} className="h-6 sm:h-7 md:h-8 mb-2" />
        }
        <h2 className="text-base sm:text-lg font-semibold">{children}</h2>
        <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
      </div>
    );
  }
  export default ServiceBox;
