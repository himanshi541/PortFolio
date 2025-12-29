import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
const RecentProjects = () => {
  return (
    <div className='py-20 ' id='projects'>
        <h1 className='heading flex items-center justify-center mb-8'>
            A small selection of {'  '}
            <span className='text-purple-400 ml-4'> Recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-2 gap-y-24 mt-10'>
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className=' h-[32rem] lg:min-h-[32.5rem] flex  items-center justify-center   md:w-[24rem] lg:w-[28rem]
          min-h-[22rem] sm:h-[24rem] md:h-[26rem] sm:w-96 w-[80vw] '>
                   <PinContainer title={title} href={link}> <div className='relative flex items-center justify-center sm:w-96 w-[570px] overflow-hidden h-[30vh]  sm:h-[40vh] mb-10'>
                    <div className='relative w-full h-full sm:h-[26vh] md:h-[30vh] lg:h-[40vh] overflow-hidden lg:rounded-3xl bg-[#000000]'>
                      <img src="/bg.png" /></div>
                      <img src={img} alt={title}  className='z-10 absolute bottom-0'/>  
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className='flex items-center'>{iconLists.map((icon,index)=>( <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center ' style={{transform:`translateX(-${5* index *2}px)`}}> <img src={icon} alt={icon} className='p-2' /> </div> ))}</div>
                      <div className='flex justify-center items-center'>
                        <p className='flex lg:text-xl md:text-xs sm:text-sm'>Check Live Status</p>
                        <FaLocationArrow className='ms-3 'color='#CBACF9'></FaLocationArrow>
                      </div>
                    </div>
                    </PinContainer> 
                </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProjects
