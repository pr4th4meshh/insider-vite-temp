'use client';
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack, FaVideo} from 'react-icons/fa'
import { featuredCards } from '../../constants/resuable'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import Card from "../../constants/sCard";

const style = {
  main_div: `xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px]`,
  card_div: `rounded overflow-hidden shadow-lg max-w-[240px] max-h-[500px] mx-[10px]`,
  card_divTwo: `text-white font-bold text-xl mb-2 absolute top-[210px] z-[2]`,
  card_divThree: `px-4 pt-0 pb-2 w-[240px] flex flex-row`,
  card_divFour: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,
}

const Featured = () => {
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
      <div className={`${style.main_div}`} >
       <div className="flex items-center pb-[18px] ">
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">FEATURED EVENTS</div>
       </div>
        <Slider {...settings}>
{featuredCards.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          category={card.category}
        />
      ))}
        </Slider>
      </div>
    </>
  );
};

export default Featured;