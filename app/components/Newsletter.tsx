import React from "react";
import { FaAddressCard, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="flex xxs:px-[10px] sm:px-[50px] lg:px-[120px] py-[42px] h-[300px] ">
      <div className="flex flex-1 flex-col justify-center xxs:hidden sm:block ">
        <h1 className=" font-[600] text-[26px] " >Subscribe to receive our newsletter!</h1>
        <br />
        <p >
          Find the best experiences happening out there in your city or enjoy
          handpicked content while sitting comfortably at home. Paytm Insider is
          your go-to place to figure out what to do today!
        </p>
      </div>
      <div className="flex flex-1">
        <div className="border border-gray-400 xxs:w-[340px] max-h-max sm:w-[320px] lg:w-[500px] flex flex-col items-center mx-auto ">
         <form action="submit" method="post">
          <h1 className="xxs:block sm:hidden text-[20px] font-[600] text-center mt-4 " >Subscribe to our newsletter!</h1>
          <input type="text" className="border border-gray-400 mt-12 p-2 xxs:w-[200px] sm:w-[220px] lg:w-[300px] " />
          <button type="submit" className="bg-blue-400 p-2 text-white border border-blue-400 " >SUBMIT</button>
         </form>
         <div className="flex flex-row mt-8 justify-around items-center ">
          <h3>Find us on:</h3>
          <button className="p-2 border border-blue-500 rounded-full ml-2" ><FaFacebookF style={{color:'blue'}} /></button>
          <button className="p-2 border border-blue-300 rounded-full ml-2" ><FaTwitter style={{color:'skyblue'}} /></button>
          <button className="p-2 border border-red-700 rounded-full ml-2" ><FaInstagram style={{color:'red'}} /></button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;