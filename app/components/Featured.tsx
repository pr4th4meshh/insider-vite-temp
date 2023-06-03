'use client';
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import Card from "../constants/sCard";
import { useProductsQuery } from '../services/storeApi';
import Skeleton  from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from '../constants/skeletonCard'

const style = {
  main_div: `xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px]`,
  product_div: `rounded overflow-hidden shadow-lg max-w-[240px] max-h-[500px] mx-[10px]`,
  product_divTwo: `text-white font-bold text-xl mb-2 absolute top-[210px] z-[2]`,
  product_divThree: `px-4 pt-0 pb-2 w-[240px] flex flex-row`,
  product_divFour: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,
}

const Featured = () => {
  // throw new Error('')
  const {data, error, isLoading, isFetching, isSuccess} = useProductsQuery();
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
            slidesToShow: 1.3,
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
        <div className="flex"><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">FEATURED EVENTS</div>
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

export default Featured