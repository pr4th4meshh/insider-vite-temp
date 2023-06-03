'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Card from "../constants/bCard";
import { useProductsQuery } from "../services/storeApi";
import SkeletonCard from "../constants/skeletonCard";

const style= {
  main_div: `xxs:px-[30px] sm:px-[50px] lg:px-[120px] py-[42px] `,
  title_div: `flex flex-1 flex-row items-center pb-[18px]`,
  view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
  product_div: `rounded overflow-hidden shadow-lg xxs:max-w-[240px] sm:max-w-[260px] lg:max-w-[335px] max-h-[500px] mx-[10px] relative`,
  product_img: `w-full h-[250px] dark-overlay`,
  product_subDiv: `text-white font-bold text-xl mb-2 absolute bottom-[200px] z-[2] `,
  product_btn: `bg-[#EC1066] hover:bg-[#b91453] text-white font-bold py-2 px-2 rounded`,
  product_subDivTwo: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,

}

const Courses = () => {
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
  const {data, error, isLoading, isFetching, isSuccess} = useProductsQuery();
  return (
    <>
       <div className={`${style.main_div}`} >
        <div className="flex" >
        <div className={`${style.title_div}`}>
        <div className="flex  "><FaServicestack style={{fontSize:'26px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold text-[24px] ">COURSES</div>
       </div>
       <div className="flex-1 " >
       <button className="border border-gray-500 px-2 py-1 float-right rounded-lg text-[14px] " >View All</button>
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

export default Courses;