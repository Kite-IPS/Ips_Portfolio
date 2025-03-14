import React from 'react'

const InfoBox = ({title,description}) => {
  return (
    <div className='w-[400px] rounded-2xl shadow-lg flex flex-col justify-between space-y-5 p-5 px-10 font-primary '>
        <div>
            {title === "Technical Workshops" ? <img src="/src/assets/technical.png" alt="Workshop"/> : title === "Community Event" ?<img src="/src/assets/community.png" alt="Community" />: <img src="/src/assets/innovation.png" alt="Innovation"/>}
        </div>
        <div className='font-semibold text-2xl'>{title}</div>
        <div className='font-light text-gray-700 text-sm'>{description}</div>
    </div>
  )
}

export default InfoBox

