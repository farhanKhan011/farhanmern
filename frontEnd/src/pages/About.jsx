import React from 'react'
import img1 from "../assets/person1.jpg"
import img2 from "../assets/person4.jpg"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const About = () => {
    return (
        <>
        
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-screen py-20 
           
           bg-gradient-to-r from-[#fff0] via-[#a1a1a1f4] to-[#f2f2f81f] text-black

            dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#1A1D23] dark:to-[#000000]
            dark:text-white
            
             h-screen ">
                {/* Hero Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-emerald-400 pt-8  "  >About Us</h1>
                    <p className="text-lg mb-8 text-[#fff] font-bold dark:text-white">Learn more about our team and mission.</p>
                </div>

                {/* Team Section */}
                <div className="flex flex-wrap justify-center mb-20">
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 py-6">
                        <div className="
                          bg-gradient-to-r from-gray-800 via-white to-gray-300 
                        dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#1A1D23] dark:to-[#000000] dark:text-white 
                        
                        hover:bg-gradient-to-br hover:from-[#ffffff29] hover:via-[#ffffff1a] hover:to-[#ffffff2d]  border border-white/10 hover:scale-150  rounded shadow-md p-4  hover:backdrop-blur-xs text-gray-300 dark:hover:text-white ">
                            <img
                                src={img1}
                                alt="Team Member"
                                className="w-40 h-40 rounded-full mb-4 "
                            />
                            <h2 className="text-lg font-bold mb-2 dark:text-white text-black">Khan</h2>
                            <p className="text-sm text-red-500 dark:text-emerald-200 ">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 py-6">
                        <div className="
                        bg-gradient-to-r from-gray-800 via-white to-gray-300 
                        dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#1A1D23] dark:to-[#000000] dark:text-white hover:bg-gradient-to-br hover:from-[#ffffff29] hover:via-[#ffffff34] hover:to-[#ffffff45] hover:scale-150 rounded shadow-md p-4 hover:backdrop-blur-xs  hover:text-white  border border-white/10  ">
                            <img
                                src={img2}
                                alt="Team Member"
                                className="w-40 h-40 rounded-full mb-4"
                            />
                            <h2 className="text-lg font-bold mb-2 dark:text-white text-black">Ahmed </h2>
                            <p className="text-sm text-red-500 dark:text-emerald-200 ">Co-Founder & Direc</p>
                        </div>
                    </div>






                </div>

                {/* Mission Section */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold mb-4 text-[#33ffbe]">Our Mission</h2>
                    <p className="text-lg dark:text-white text-amber-50 font-bold mb-8 ">
                        Our mission is to provide a platform that connects people and fosters community through shared experiences and knowledge. We believe in the power of collaboration and aim to create a space where everyone can contribute and grow together.
                    </p>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default About
