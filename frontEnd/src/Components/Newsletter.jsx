import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 backdrop-blur-lg dark:bg-white bg-gradient-to-r from-[#ffffffcb] via-[#f7f7f7e5] to-[#ffffffc7] text-black dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#000000ec] dark:to-[#000000] dark:text-white ' >
      <div className='max-w-[1240px] mx-auto grid  lg:grid-cols-3'>
        <div className=' lg:col-span-2 '>
          <h1 className='md:text-4xl  sm:text-3xl text-2xl font-bold py-2'>Sign up For Free</h1>
          <p>Every one can sign up Here For Free</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between' >
            <input className='p-3 flex w-full border-2 rounded-md text-gray-600 dark:text-white ' type="email" placeholder='Enter Your Email' />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-2  ' >Notification</button>
          </div>
          <p>Hello my name is Khan , me and my team teaches programming courses if your are interested you can sign up here.There is no charges for registrations feel free to signup and get the courses , and make your life better.</p>
        </div>


      </div>

    </div>
  )
}

export default Newsletter
