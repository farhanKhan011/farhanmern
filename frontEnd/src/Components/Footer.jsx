import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto py-16  px4 grid lg:grid-cols-3 gap-8 text-gray-300 
      
      dark:bg-white bg-gradient-to-r from-[#ffffffcb] via-[#f7f7f7e5] to-[#ffffffc7]  dark:bg-gradient-to-r dark:from-[#000000] dark:via-[#000000ec] dark:to-[#000000] dark:text-white
      

      ">
        <div>
          <h1 className="w-full px-1 text-3xl font-bold dark:text-[#00df9a] text-emerald-900">REACT.</h1>
          <p className="py-4 px-1 text-gray-800 dark:text-gray-300 ">
            Unlock your potential with my comprehensive courses on programming, web development, app development, machine learning, AI, and more. Learn from an experienced instructor and take your skills to the next level.
          </p>
          <div className="flex justify-between md:w-[75%] my-6 cursor-pointer text-black dark:text-white " >

            <a href="https://facebook.com">
              <FaFacebook size={30} className="hover:text-blue-900 hover:rounded-2xl hover:scale-125 cursor-pointer " />
            </a>

            <a href="https://instagram.com">
              <FaInstagram size={30} className="hover:text-pink-700 hover:rounded-2xl hover:scale-125 cursor-pointer " />
            </a>
            <a href="https://twitter.com">

              <FaTwitter size={30} className="hover:text-blue-400 hover:scale-125 cursor-pointer " />
            </a>
            <a href="https://youtube.com">

              <FaYoutube size={30} className="hover:text-red-600 hover:scale-125 cursor-pointer " />
            </a>

            <a href="https://Whatsapp.com">

              <FaWhatsapp size={30} className="hover:text-green-500  hover:scale-125 cursor-pointer " /></a>

          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-9  text-black dark:text-emerald-100 ">
          <div>
            <h6 className="border-b pb-3 mb-4 text-2xl font-medium  " >Data</h6>
            <ul>
              <li className="py2 text-sm">Demo Data one </li>
              <li className="py2 text-sm">Demo Data Two </li>
              <li className="py2 text-sm">Demo Data Three </li>
              <li className="py2 text-sm">Demo Data Four </li>
            </ul>
          </div>

          <div>
            <h6 className="border-b pb-3 mb-4 text-2xl font-medium" >Data</h6>
            <ul>
              <li className="py2 text-sm">Demo Data one </li>
              <li className="py2 text-sm">Demo Data Two </li>
              <li className="py2 text-sm">Demo Data Three </li>
              <li className="py2 text-sm">Demo Data Four </li>
            </ul>
          </div>

          <div>
            <h6 className="border-b pb-3 mb-4 text-2xl font-medium" >Data</h6>
            <ul>
              <li className="py2 text-sm">Demo Data one </li>
              <li className="py2 text-sm">Demo Data Two </li>
              <li className="py2 text-sm">Demo Data Three </li>
              <li className="py2 text-sm">Demo Data Four </li>
            </ul>
          </div>

          <div>
            <h6 className="border-b  pb-3 pr-2 mb-4 text-2xl font-medium " >Data</h6>
            <ul>
              <li className="py2 pr-2 text-sm">Demo Data one </li>
              <li className="py2 pr-2 text-sm">Demo Data Two </li>
              <li className="py2 pr-2 text-sm">Demo Data Three </li>
              <li className="py2 pr-2 text-sm">Demo Data Four </li>
            </ul>
          </div>


        </div>


      </div>


    </>
  );
};

export default Footer;
