"use client"
import React from "react"
import { FaServicestack } from "react-icons/fa"
import { useProductsQuery } from "../services/storeApi"
import "react-loading-skeleton/dist/skeleton.css"
import SmallCard from "../constants/smallCard"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Loading from "./loading"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const style = {
  main_div: `px-2 py-[42px] pt-[42px]`,
  product_div: `rounded overflow-hidden shadow-lg max-w-[240px] max-h-[500px] mx-[10px]`,
  product_divTwo: `text-white font-bold text-xl mb-2 absolute top-[210px] z-[2]`,
  product_divThree: `px-4 pt-0 pb-2 w-[240px] flex flex-row`,
  product_divFour: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,
}

const Featured = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery()

  return (
    <>
      <div className={`${style.main_div}`}>
        <div className="flex items-center pb-[18px] ">
          <div className="flex">
            <FaServicestack
              style={{ fontSize: "26px", color: "black", marginRight: "8px" }}
            />
          </div>
          <div className="flex font-bold text-[24px] ">FEATURED EVENTS</div>
        </div> 
        {isLoading && (
          <Loading/>
        )}
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
           // means to render carousel on server-side.
          
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {error && <h1>Something went wrong</h1>}
          {isSuccess &&
            data
              .slice(0, 7)
              .map((product) => (
                <SmallCard
                  title={product.title}
                  key={product.id}
                  id={product.id}
                  image={product.cardImg}
                  rating={product.rating}
                  price={product.price}
                  category={product.category}
                />
              ))}
        </Carousel>
      </div>
    </>
  )
}

export default Featured
