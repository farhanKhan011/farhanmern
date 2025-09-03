// import React from 'react'
import { MdOutlineSell } from 'react-icons/md'
// import { MdOutlineSell } from 'react-icons/md';


const SubCard = (props) => {
  return (
    <div className='cardr w-full shadow-xl  shadow-gray-900 hover:shadow-gray-900 flex flex-col p4 rounded-lg hover:scale-105 duration-75 hover:bg-gradiant-to-r hover:backdrop-blur-sm hover:bg-transparent hover:from-[#ffffff0a] hover:via-[#ffffff1b] hover:to-[#fff0] hover:shadow-lg dark:hover:border-1 dark:hover:border-emerald-100 

    dark:hover:bg-gradiant-to-r dark:hover:from-black dark:hover:via-[#00000e] dark:hover:to-[#000000]
 
    bg-gradient-to-r from-[#ffffff] via-[#f7f7f796] to-[#ffffff] text-black dark:bg-gradient-to-r dark:from-[#000000f8] dark:via-[#000000] dark:to-[#000000f6] dark:text-white



    '>
    <img src={props.img} className='w-20 mx-auto mt-[3rem]  transition duration-1000  ' />
    <h2 className='text-2xl font-bold text-center py-8 dark:text-green-400 text-black   ' ><tf className=" cardr ">{props.title}</tf></h2>
    <p className='text-center  text-4xl font-bold dark:text-[#31fcda] text-gray-800   ' ><jf>{props.price}$</jf></p>
    <div className='text-center font-medium dark:text-emerald-200 text-emerald-900'>
    <p className='py-2 border-b mx-8 mt-7 border-gray-700 cardr ' ><pf className='cardr' >{props.feature_one}</pf></p>
    <p className='py-2 border-b mx-8 border-gray-700 ' ><pf className='cardr' >{props.feature_two}</pf></p>
    <p className='py-2 border-b mx-8 border-gray-700 ' ><pf className='cardr' >{props.feature_three}</pf></p>
    <p className='py-2 border-b mx-8 border-gray-700  ' ><pf className='cardr' >{props.feature_four}</pf></p>
    </div>
{/* 
    <button className='bg-gradient-to-b from-[#00947a] via-[#00837f] to-[#006868] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex flex-row hover:bg-amber-100 hover:text-red-600  ' >Request Offer <MdOutlineSell className='mt-1 ml-2  ' /> </button> */}
    <button className=' bg-[#00000f] text-white dark:text-pink-900 
    dark:bg-emerald-400


    dark:hover:bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex flex-row hover:text-[red] hover:font-bold transition-all duration-300'>
  Request Offer 
  <MdOutlineSell className='mt-1 ml-2 hover:text-red-600' />
</button>
</div>
  )
}

export default SubCard
