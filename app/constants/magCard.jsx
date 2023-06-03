import Image from "next/image";
import React from "react";

const Card = ({img, title}) => {
  return (
    <div className=" csz rounded overflow-hidden shadow-lg max-w-[240px] max-h-[250px] mx-[10px] ">    
    <Image className="w-full h-[250px] img-overlay" src={img} alt="Your Image"/>
     <div className="px-4 py-4 w-[240px] img-content ">
       <div className=" text-white font-[700] text-xl mb-2 absolute bottom-[40px] "> {title} </div>
     </div>
   </div>
  )
}

export default Card;