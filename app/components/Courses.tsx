"use client"
import React from "react"
import { FaServicestack } from "react-icons/fa"
import Card from "../constants/biggerCard"
import { useProductsQuery } from "../services/storeApi"
import ButtonComponent from "../constants/ButtonComponent"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Loading from "./loading"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
  main_div: `px-2 py-[42px] pt-[42px] `,
  title_div: `flex flex-1 flex-row items-center pb-[18px]`,
  view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
  product_div: `rounded overflow-hidden shadow-lg xxs:max-w-[240px] sm:max-w-[260px] lg:max-w-[335px] max-h-[500px] mx-[10px] relative`,
  product_img: `w-full h-[250px] dark-overlay`,
  product_subDiv: `text-white font-bold text-xl mb-2 absolute bottom-[200px] z-[2] `,
  product_btn: `bg-[#EC1066] hover:bg-[#b91453] text-white font-bold py-2 px-2 rounded`,
  product_subDivTwo: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,
}

const Courses = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery()
  return (
    <>
      <div className={`${style.main_div}`}>
        <div className="flex">
          <div className={`${style.title_div}`}>
            <div className="flex  ">
              <FaServicestack
                style={{ fontSize: "26px", color: "black", marginRight: "8px" }}
              />
            </div>
            <div className="flex font-bold text-[24px] ">COURSES</div>
          </div>
          <div className="flex-1 ">
            <ButtonComponent
              name="View all"
              onClick={undefined}
              className="border-gray-500 px-2 py-1 float-right rounded-xl text-[14px]"
            />
          </div>
        </div>
        {isLoading && (
          <Loading />
        )}

<Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
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
        </Carousel>
      </div>
    </>
  )
}

export default Courses
