'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { artistsCards} from '../constants/resuable'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";
import { ArtistCard } from "../types/artistCard.type";

export interface UserInterface{
  name:string,
  mobile:number,
  address:string,
}

const Artist = () => {

  const [user, setUser] = useState<UserInterface>({name:"darshan",mobile:9029659157,address:"123"})

  const settings = {
    dots: false,
      infinite:false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:  <AiFillCaretLeft color="#b91453" />,
      nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };
  return (
    <>
      <div onClick={()=>setUser({name:"nad",mobile:902929292,address:"123"})} className="xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px] " >
        <div className="flex" >
        <div className="flex flex-1 flex-row items-center pb-[18px] ">
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">ARTISTS</div>
       </div>
       <div className="flex-1 " >
       <button className="border border-gray-500 px-2 py-1 float-right rounded-lg text-[14px] " >View All</button>
       </div>
        </div>
        <Slider {...settings}>

        {artistsCards.map((artist) => (
     <div className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] cursor-pointer  ">    
      <div className="px-2 py-2 flex flex-col items-center text-center ">
      <Image src={artist.img} className='lg:h-[140px] lg:w-[140px] sm:h-[130px] sm:w-[130px] xxs:h-[90px] xxs:w-[90px] mb-2 rounded-full' alt="" />
        <p className="text-black font-normal xxs:text-[12px] sm:text-[14px] lg:text-[16px] text-[16px]">
         {artist.name}<br />
        </p>
        <h4 className="xxs:text-[12px] text-[14px] text-gray-500" > {artist.events} events </h4>
      </div>
    </div>
  ))}
        </Slider>
      </div>
    </>
  );
};

export default Artist;