import React , { useState } from "react";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/ContextApi";
const Navbar = () => {

  
  
  
  const [nav, setNav] = useState(true);


const { logedIn, UserLogout  } = useAuth();





  const handleNavbar = () => {
    setNav(!nav);

    
     };


     const ToggleChange = () => {
      document.documentElement.classList.toggle("dark");
    };




  return (
    <div className="   flex align-baseline-baseline h-24 items-center max-w-[1920px] m-auto px-4  md:bg-[#0d946200]
    
 bg-gradient-to-r from-[#ffffff] via-[#f7f7f788] backdrop-blur-xl to-[#fffffff4] text-black dark:bg-gradient-to-r dark:from-[#0e0d0d] dark:via-[#1f1e1e] dark:to-[#141414] dark:text-white

 ">
      <h1 className=" md:flex hidden   w-full text-3xl font-bold dark:text-[#1ce69b] text-[#030a07]  ">PortFolio</h1>
      <ul className="md:flex hidden self-baseline  ">
     
      <button className="absolute right-150 top-7 bg-[#131313] text-white px-3 py-2 rounded  dark:bg-white dark:text-black cursor-pointer " onClick={ToggleChange}>
  Dark Mode
</button>

        <li className="p-4 flex pt-9  "  > <NavLink to={"/"}> Home </NavLink> </li>
        <li className="p-4 flex pt-9 text-left relative cursor-pointer" ><NavLink to={"/contact"}>
          Contact
        </NavLink>
        
</li>
        <li className="p-4 flex pt-9 "  ><NavLink to={"/about"}>   About </NavLink> </li>
        <li className="p-4 flex pt-9 "  ><NavLink to={"/gallery"}> Gallery </NavLink>  </li>


        { logedIn ? (
          <>
<li className="p-4 pt-9">
              <button onClick={UserLogout}>Logout</button>
            </li>                </>
        )
        :(
          <>
              <li className="p-4 flex pt-9 "  ><NavLink to={"/login"}> Login  </NavLink> </li>
              <li className="p-4 flex pt-9 "  ><NavLink to={"/Registration"}> Registration  </NavLink> </li>
          </> 
        )

         }
    
      </ul>
      <div onClick={handleNavbar} className="cursor-pointer block md:hidden fixed right-2">
        {nav ? (
          <ImMenu size={28} className="text-green-300 "  />
        ) : (
          <ImCross size={25} className="text-red-400" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-[-100%]  "
            : " lg:hidden  fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000f00] ease-in-out duration-500  "
        }
      >
     
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4  ">
          Menue is opened
        </h1>
        <ul className="pt-4 uppercase ">
          <li className="p-4 border-b border-b-gray-500 ">Home</li>
          <li className="p-4 border-b border-b-gray-500 ">Contact</li>
          <li className="p-4 border-b border-b-gray-500 ">About</li>
          <li className="p-4 border-b border-b-gray-500 ">Gallery</li>
          <li className="p-4 border-b border-b-gray-500 ">Login</li>
        </ul>
      
      </div>
    </div>
  );
};

export default Navbar;