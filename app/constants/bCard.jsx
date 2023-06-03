import Image from "next/image";
import React from "react";
import { FaVideo, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Skeleton } from 'antd';
import {Suspense} from 'react'
import SkeletonImage from "antd/es/skeleton/Image";

const style = {
  title_div: `flex flex-1 flex-row items-center pb-[18px]`,
  view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
  card_div: `rounded overflow-hidden shadow-lg xxs:max-w-[320px] max-h-[500px] mx-[10px] relative`,
  card_img: `w-full h-[178px] dark-overlay`,
  card_subDiv: `text-black font-thin text-lg z-[2] `,
  card_subDivTwo: `flex items-center py-[10px] bg-[#ffeaf2]`,
  card_divFour: `flex items-center text-center py-[6px] bg-[#ffeaf2]`,
};

const Card = ({ image, title, category, price,id, rating}) => {
  return (
    <Link href={`/movies/${id}`}>
    <div className={`${style.card_div}`}>
      <div>
        <Image
          className={`h-[230px] w-full`}
          height={200}
          width={300}
          src={image}
          alt="Your Image"
        />
      </div>
      <div className="px-4 py-2 w-[320px] ">
        <div className={`${style.card_subDiv}`}> {title.substring(0, 28)} </div>
        <h4 className="text-[14px] text-[#EC1066] flex flex-row items-center " >People rate this &nbsp; <FaHeart/> &nbsp; {rating} / 5</h4>

       <div className="flex justify-between py-1 items-center ">
       <div className="flex flex-1">
        <a href="price" className="font-semibold text-md ">
        &#8377; {price} /-
          </a>
        </div>
        {/* <h4 className="text-[14px] text-[#EC1066] pb-1">{category}</h4> */}
       <div className="flex flex-1 ">
      <button className=" bg-[#EC1066] hover:bg-[#b91453] text-white font-normal px-2 py-1 text-[14px] rounded-lg ml-[70px]">
          Buy Now
        </button>
       </div>
       </div>
      </div>
      <div className={`${style.card_divFour}`}>
        <div className="flex">
          <FaVideo
            style={{
              fontSize: "12px",
              color: "#EC1066",
              marginRight: "8px",
              marginLeft: "18px",
            }}
          />
        </div>
        <h1 className="flex font-light text-[12px] text-[#ec1066] ">
          {" "}
          CONTENT &nbsp; <span>{category && category.toUpperCase()}</span>{" "}
        </h1>
      </div>
    </div>
    </Link>
  );
};

export default Card;
