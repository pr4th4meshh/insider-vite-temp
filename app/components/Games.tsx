"use client"
import React from "react"
import { FaServicestack } from "react-icons/fa"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import Card from "../constants/biggerCard"
import Link from "next/link"
import { useProductsQuery } from "../services/storeApi"
import SkeletonCard from "../constants/skeletonCard"
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

const Games = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery()
  return (
    <>
      <div className="px-2 py-[42px] ">
        <div className="flex">
          <div className="flex flex-1 flex-row items-center pb-[18px] ">
            <div className="flex  ">
              <FaServicestack
                style={{ fontSize: "26px", color: "black", marginRight: "8px" }}
              />
            </div>
            <div className="flex font-bold text-[24px] ">GAMES & QUIZZES</div>
          </div>
          <div className="flex-1 ">
            <Link href="/">
              <ButtonComponent
                name="View all"
                onClick={undefined}
                className="border-gray-500 px-2 py-1 float-right rounded-xl text-[14px]"
              />
            </Link>
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

export default Games
