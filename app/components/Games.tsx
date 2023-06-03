'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Card from "../constants/bCard";
import Link from "next/link";
import { useProductsQuery } from '../services/storeApi';
import SkeletonCard from "../constants/skeletonCard";


const Games = () => {
  const {data, error, isLoading, isFetching, isSuccess} = useProductsQuery();
  const settings = {
    dots: true,
      infinite:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:  <AiFillCaretLeft color="#b91453" />,
      nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
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
        <div className="flex" >
        <div className="flex flex-1 flex-row items-center pb-[18px] ">
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">GAMES & QUIZZES</div>
       </div>
       <div className="flex-1 " >
       <Link href='/'><button className="border border-gray-500 px-2 py-1 float-right rounded-lg text-[14px] " >View All</button></Link>
       </div>
        </div>
        {isLoading  && <div className="flex flex-row" > <SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/> </div> }
        <Slider {...settings}>
     {error && <h1>Something went wrong</h1> }
        { isSuccess && data.slice(0,7).map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.cardImg}
          title={product.title}
          price={product.price}
          category={product.category}
          rating={product.rating}
        />
      ))}
        </Slider>
      </div>
    </>
  );
};

export default Games;