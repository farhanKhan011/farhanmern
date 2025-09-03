import React from "react";
import SubCard from "./SubCard";
import img01 from "../assets/java.png";
import img02 from "../assets/cpp.png";
import img03 from "../assets/python.png";
import img04 from "../assets/react.png";
import img05 from "../assets/javascript.png";
import img06 from "../assets/chash.png";


const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 
    
    //  bg-gradient-to-b dark:bg-gradient-to-l dark:from-[#000000] dark:via-[#e9f4efb5] dark:to-black 
    bg-gradient-to-r from-[#ffffff57] via-[#f7f7f717] to-[#ffffff50] text-black dark:bg-gradient-to-r dark:from-[#000000f8] dark:via-[#000000] dark:to-[#000000f6] dark:text-white

    ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8   ">
        <SubCard
          img={img01}
          title="Java"
          price={160}
          feature_one="Platform Independence"
          feature_two="Object-Oriented"
          feature_three="Robust Security"
          feature_four="Large Community and Ecosystem"
        />
        <SubCard
          img={img02}
          title="C++"
          price={180}
          feature_one="High Performance"
          feature_two="Control and Flexibility"
          feature_three="Object-Oriented & Generic Programming"
          feature_four="Cross-Platform Compatibility"
        />
        <SubCard
          img={img03}
          title="Python"
          price={200}
          feature_one="Easy to Learn
"
          feature_two="High-Level Abstraction
"
          feature_three="Large Standard Library"
          feature_four="Rapid Prototyping
       "
        />
        <SubCard
          img={img04}
          title="React js"
          price={109}
          feature_one="Component-Based
"
          feature_two="Virtual DOM
"
          feature_three="Declarative Code
"
          feature_four="Reusable Components
"
        />
        <SubCard
          img={img05}
          title="JavaScript"
          price={149}
          feature_one="Dynamic and Interactive
"
          feature_two="Client-Side Execution"
          feature_three="First-Class Functions
"
          feature_four="Extensive Libraries and Frameworks"
        />
        <SubCard
          img={img06}
          title="C Sharp"
          price={160}
          feature_one="Object-Oriented
"
          feature_two="Type-Safe and Garbage-Collected"
          feature_three="Large Standard Library
"
          feature_four="Cross-Platform with .NET
"
        />
      </div>
    </div>
  );
};

export default Card;
