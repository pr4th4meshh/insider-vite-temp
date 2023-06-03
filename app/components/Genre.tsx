"use client";
import React from "react";
import { useState } from "react";
import { FaServicestack } from "react-icons/fa";
import { genreCards, showMoreCards } from "../constants/resuable";
import Image from "next/image";
import Link from "next/link";
import { useGetMoviesQuery, useProductsQuery } from "../services/storeApi";
import Card from "../constants/fCard";

const style = {
  main_div: `xxs:px-[10px] sm:px-[50px] lg:px-[120px] pt-[42px]`,
  title_div: `flex items-center pb-[18px]`,
  grid_dev: `grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 lg:gap-4 sm:gap-0 xxs:gap-0`,
  grid_card: `overflow-hidden lg:max-w-[100px] sm:max-w-[100px] xxs:max-w-[120px] h-auto max-h-max mx-[5px] cursor-pointer`,
  grid_img: `rounded-xl max-w-[80px] xxs:max-h-[80px] sm:max-h-[70px] lg:max-h-[96px] border border-gray-300 hover:border-[#EC1066] object-fill `,
  grid_subdiv: `px-2 py-2 flex flex-col text-center `,
  grid_p: `text-black font-normal xxs:text-[14px] sm:text-[12px] text-[16px]`,
  gird_h4: `xxs:text-[10px] text-[14px] text-gray-500`,
  show_btn: `border border-black mx-[10px] my-[10px] text-black font-light py-2 px-2 rounded`,
  show_div: `grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-0 pt-4`,
  show_cardDiv: `overflow-hidden max-w-[180px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 rounded-xl cursor-pointer `,
  show_cardSubDiv: `px-2 py-2 flex flex-col items-center`,
  show_cardP: `text-black font-normal xxs:text-[14px] sm:text-[12px] text-[16px]`,
  show_cardH4: `xxs:text-[10px] text-[14px] text-gray-500`,
};

const Genre = ({ params }: { params: any }, category: any) => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <div className={`${style.main_div}`}>
      <div className={`${style.title_div}`}>
        <div className="flex  ">
          <FaServicestack
            style={{ fontSize: "26px", color: "black", marginRight: "8px" }}
          />
        </div>
        <div className="flex font-bold text-[24px] ">
          BROWSE EVENTS BY GENRE
        </div>
      </div>

      <div className={`${style.grid_dev}`}>
        {/* Movies */}
        <Link href={`/category/moviess?category=movies`}>
          <div className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 hover:border-[#EC1066] rounded-xl cursor-pointer ">
            <div className="px-4 py-2 flex flex-col items-center ">
              <p className="text-[#EC1066] font-light xxs:text-[12px] sm:text-[22px] text-[16px]">
                Movies
                <br />
              </p>
              {/* <h4 className="xxs:text-[12px] sm:text-[12px] lg:text-[16px] text-gray-500" > Eventt</h4> */}
            </div>
          </div>
        </Link>
        {/*Activities*/}
        <Link href={`/category/moviess?category=activities`}>
          <div className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 hover:border-[#EC1066] rounded-xl cursor-pointer ">
            <div className="px-4 py-2 flex flex-col items-center ">
              <p className="text-[#EC1066] font-light xxs:text-[12px] sm:text-[22px] text-[16px]">
                Activities
                <br />
              </p>
              {/* <h4 className="xxs:text-[12px] sm:text-[12px] lg:text-[16px] text-gray-500" > Eventt</h4> */}
            </div>
          </div>
        </Link>
        {/* Web Series */}
        <Link href={`/category/moviess?category=web_series`}>
          <div className="overflow-hidden w-auto h-auto max-h-max mb-[10px] mx-2 border border-gray-300 hover:border-[#EC1066] rounded-xl cursor-pointer ">
            <div className="px-4 py-2 flex flex-col items-center ">
              <p className="text-[#EC1066] font-light xxs:text-[12px] sm:text-[22px] text-[16px]">
                Web Series <br />
              </p>
              {/* <h4 className="xxs:text-[12px] sm:text-[12px] lg:text-[16px] text-gray-500" > Eventt</h4> */}
            </div>
          </div>
        </Link>
        {/* Plays */}
        <Link href={`/category/moviess?category=plays`}>
          <div className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 hover:border-[#EC1066] rounded-xl cursor-pointer ">
            <div className="px-4 py-2 flex flex-col items-center ">
              <p className="text-[#EC1066] font-light xxs:text-[12px] sm:text-[22px] text-[16px]">
                Plays
                <br />
              </p>
              {/* <h4 className="xxs:text-[12px] sm:text-[12px] lg:text-[16px] text-gray-500" > Eventt</h4> */}
            </div>
          </div>
        </Link>
        {/* <Link href={`/category/moviess?category=activities`} > <h1>activities</h1></Link> */}
      </div>

      {/* <div>
  SHOW MORE SECTION HERE
<button onClick={handleClick} className={`${style.show_btn}`}>
        {showData ? 'Show less' : 'Show more'}
      </button>
      <div className={`${style.show_div}`} >
     
      {showData && (
        <>
        {showMoreCards.map((showCards) => (
     <div className={`${style.show_cardDiv}`}>    
      <div className={`${style.show_cardSubDiv}`}>
        <p className={`${style.show_cardP}`}>
         {showCards.category}<br />
        </p>
        <h4 className={`${style.show_cardH4}`}> {showCards.noOfEvents} events </h4>
      </div>
    </div>
  ))}
        </>
      )}
    </div>
</div> */}
    </div>
  );
};

export default Genre;
