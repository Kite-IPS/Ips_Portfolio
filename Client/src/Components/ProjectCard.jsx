import React from 'react'
import KGSLAR from '../assets/KG-SLAR.png'
import KGCAR from '../assets/KG-CAR.png'
import { HiArrowSmRight } from 'react-icons/hi'
const ProjectCard = ({ name, description }) => {
    return (
        <div className='w-[400px] rounded-2xl h-[360px] overflow-hidden font-primary shadow-lg'>
            <div className='h-[50%]'>
                {name === "KG-SLAR" ? <img src={KGSLAR} alt="KG-SLAR" className='w-[100%] h-[100%]'/> : <img src={KGCAR} alt="KG-CAR" className='w-[100%] h-[100%]'/>}
            </div>
            <div className='h-[50%] flex flex-col justify-between p-5'>
                <h1 className='font-bold text-3xl'>{name}</h1>
                <p className='text-gray-500'>{description}</p>
                <p className='underline cursor-pointer flex items-center gap-2 text-blue-600'>
                    Learn more
                    <HiArrowSmRight />
                </p>
            </div>
        </div>
    )
}

export default ProjectCard