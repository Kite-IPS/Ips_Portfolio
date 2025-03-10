import React from 'react'
import technical from '../assets/technical.png'
const ServiceBox = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={technical} alt="Img" />
        <h2>{children}</h2>
        <p>{children === "Web Development" ? "Custom website development" : children ==="IOT" ? "Internet of things projects": "Intelligence projects"}</p>
    </div>
  )
}

export default ServiceBox