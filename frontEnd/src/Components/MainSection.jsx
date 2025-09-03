import React from 'react'
import image01 from "../assets/laptop01.png"
import { MdReadMore } from "react-icons/md";



const MainSection = () => {
  return (
    <div className='w-full py-16 px-4 dark:bg-white backdrop-blur-lg

bg-gradient-to-r from-[#ffffff] via-[#f7f7f796] to-[#ffffff] text-black dark:bg-gradient-to-r dark:from-[#181818f8] dark:via-[#000000] dark:to-[#171616f6] dark:text-white


'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={image01} className='w-[420px] mx-auto my-4 hover:scale-110 ' />
        <div className='flex flex-col justify-center'>
          <p className='dark:text-[#00df9a] text-[#013828] font-bold' >My Project And Reasearch</p>
          <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Detecting neural Connections with Programming.My Machine</h1>
          <p>My dream and mission is to invent the machine which will detect the human mind signals and then understand that and with that connection it will simulate the new waves to bring out the words and to give instruction to heal the human mind related problems like efilipsy etc</p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:scale-105 dark:bg-[#00df9a] dark:text-black'>See More <MdReadMore className='text-white dark:text-red-500 ' style={{ display: 'inline-block', fontSize: '24px' }} />
          </button>

        </div>
      </div>
      
    </div>
  )
}

export default MainSection
