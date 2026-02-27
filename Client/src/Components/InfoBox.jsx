import React from 'react'
import technical from '../assets/general/technical.png'
import community from '../assets/general/community.png'
import innovation from '../assets/general/innovation.png'
const InfoBox = ({title,description}) => {
  return (
    <div className='w-full sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-2xl shadow-lg flex flex-col justify-between space-y-4 sm:space-y-5 p-4 px-6 sm:p-5 sm:px-8 md:px-10 font-primary'>
        <div>
            {title === "Technical Workshops" ? <img src={technical} alt="Workshop"/> : title === "Community Event" ?<img src={community} alt="Community" />: <img src={innovation} alt="Innovation"/>}
        </div>
        <div className='font-semibold text-xl sm:text-2xl'>{title}</div>
        <div className='font-light text-gray-700 text-sm'>{description}</div>
    </div>
  )
}

export default InfoBox

