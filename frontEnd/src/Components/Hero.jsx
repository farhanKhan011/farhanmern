import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=' bg-gradient-to-r from-[#ffffffa6] backdrop-blur-xl via-[#f7f7f75b] to-[#ffffffb0] text-black dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#232323] dark:to-[#000000] dark:text-white
    '  >
      <div className='max-w-[800px]  w-full h-[400px] mx-auto text-center flex flex-col justify-center  '>
        <p className='text-gray-50 font-bold p-2 font-serif dark:text-gray-300  '>Hello, I am </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl text-black dark:text-emerald-50 shadow-emerald-500 shadow-xl rounded-xl '>Farhan Khan</h1>
        <div>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold'> I Am A Professional 
        
    <ReactTyped 
        strings={[
            "Web Developer",
            "App Developer",
            "AI Engineer",
            "Ethical Hacker",
        ]}
        typeSpeed={40}
        backSpeed={50}
      className='md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-red-500'
        loop
      
    />
        </p>

        </div>
        <p className='text-xl font-bold text-[#121b20] dark:text-[#ffffff93] '>
          3 - Year of experience in python development my mission is to design 
          and develop a website that can be love by you and clients and I am 
          the best Developer in the world. Maybe the greatest then the entire universe.
        </p>
        <button className='bg-[#181818] text-[#fff] w-[200px] py-3 rounded-lg font-bold my-6 mx-80 hover:scale-110  dark:hover:bg-gradient-to-b dark:hover:from-[#c8d1da] dark:hover:via-[#cecece] dark:hover:to-[#42474b] hover:bg-gray-800
 
 dark:bg-[#fffffff8]
 text dark:text-gray-900

 '>
        More Details
        </button>
      </div>
    </div>
  )
}

export default Hero 
