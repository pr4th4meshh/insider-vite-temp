"use client"
import React from "react"
import { FaServicestack } from "react-icons/fa"
import { featuredCards } from "../constants/resuable"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import Card from "../constants/magCard"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const Magazine = () => {
  return (
    <>
      <div className="px-2 py-[42px] ">
        <div className="flex items-center pb-[18px] ">
          <div className="flex  ">
            <FaServicestack
              style={{ fontSize: "26px", color: "black", marginRight: "8px" }}
            />
          </div>
          <div className="flex font-bold text-[24px] ">MAGAZINES</div>
        </div>
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
          {featuredCards.map((card) => (
            <Card key={card.id} img={card.img} title={card.title} />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Magazine
