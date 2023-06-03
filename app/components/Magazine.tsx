'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { featuredCards } from '../constants/resuable'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Card from '../constants/magCard'

const Magazine = () => {
  const settings = {
    dots: true,
      infinite:false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:  <AiFillCaretLeft color="#b91453" />,
    nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
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
      <div className="xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px] " >
       <div className="flex items-center pb-[18px] ">
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">MAGAZINES</div>
       </div>
        <Slider {...settings}>
        {featuredCards.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
        />
      ))}
        </Slider>
      </div>
    </>
  );
};

export default Magazine;
