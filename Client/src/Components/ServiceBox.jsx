import React from 'react'
import technical from '../assets/technical.png/'
const ServiceBox = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={technical} alt="Img" />
        <h2>{children}</h2>
        <p>{children === "Web Development" ? "Custom web solutions" : children ==="Mobile Apps" ? "iOS and Android development": children === "Cloud Solutions" ? "Scalable cloud services" : children ==="AI Services" ? "Intelligent automation": "Intelligence projects"}</p>

    </div>
  )
}

export default ServiceBox