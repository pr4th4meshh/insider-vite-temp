import {ReactComponentElement, useState, useEffect} from "react";
import { FaHeart, FaVideo } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const style = {
  card_div: `rounded overflow-hidden relative shadow-lg max-w-[260px] max-h-[500px] mx-[10px] mb-[38px]`,
  card_divTwo: ` text-black font-thin text-lg z-[2]]`,
  card_divThree: ` py-1 items-center w-[260px] flex flex-row`,
  card_divFour: `flex items-center text-center py-[6px] bg-[#ffeaf2]`,
};

const Card = ({ image, title, category, price, id, rating }) => {
  // const {data , isSuccess} = useProductQuery()
  const loader = () => {
    return <Skeleton height={230} width={260} />
  }
  return (
    <Link href={`/movies/${id}`} >
    <div className={`${style.card_div}`}>
      <div className="">
        <Image
          alt={title}
          height={230}
          width={240}
          className="h-[230px] w-[260px]"
          src={!image ? <Skeleton height={230} width={260}/> : image}
          loading="lazy"
          quality={100}
        />
      </div>

      <div className="px-3 py-2 w-[260px] ">
        <div className={`${style.card_divTwo}`}>
          {title} <br />
        <h4 className="text-[14px] text-[#EC1066] flex flex-row items-center" >People rate this &nbsp; <FaHeart/> &nbsp; {rating} / 5</h4>
        </div>
        <div className={`${style.card_divThree}`}>
          <div className="flex-1 font-semibold text-md  ">
            <h3> &#8377; {price} /-</h3>
          </div>
          <div className="flex-1 ">
              {" "}
              <button className=" bg-[#EC1066] hover:bg-[#b91453] text-white font-normal px-2 py-1 text-[14px] rounded-lg ml-[30px]">
                Buy Now
              </button>{" "}
          </div>
        </div>
        {/* <h4 className="text-[14px] text-[#EC1066]" >{category}</h4> */}
      </div>
      {/* <div className={`${style.card_divThree}`}>
      <div className='flex flex-1 items-center text-[14px] ' >
        <FaHeart style={{fontSize:'14px', color: '#EC1066', marginRight:'8px', marginLeft: '0px'}}  />
        {rating} / 5
        </div>
     <div className="flex flex-1">
     <Link href='/events/golmaal' >  <button className=" bg-[#EC1066] hover:bg-[#b91453] text-white font-normal px-2 py-1 text-[14px] rounded-lg ">
          Buy Now
        </button> </Link>
     </div>
      </div> */}

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
