'use client'
import React, { useState } from 'react'
import { FaServicestack } from 'react-icons/fa'
import { artistsCards } from '../constants/resuable'
import Image from 'next/image'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ButtonComponent from '../constants/ButtonComponent'

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

export interface UserInterface {
  name: string
  mobile: number
  address: string
}

const Artist = () => {
  return (
    <>
      <div className="px-2 py-[42px] ">
        <div className="flex">
          <div className="flex flex-1 flex-row items-center pb-[18px] ">
            <div className="flex  ">
              <FaServicestack
                style={{ fontSize: '26px', color: 'black', marginRight: '8px' }}
              />
            </div>
            <div className="flex font-bold text-[24px] ">ARTISTS</div>
          </div>
          <div className="flex-1 ">
            <ButtonComponent
              name="View all"
              onClick={undefined}
              className="border-gray-500 px-2 py-1 float-right rounded-xl text-[14px]"
            />
          </div>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {artistsCards.map((artist, id) => (
            <div
              key={id}
              className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] cursor-pointer  "
            >
              <div className="px-2 py-2 flex flex-col items-center text-center ">
                <Image
                  alt={artist.name}
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                  }}
                  width={1}
                  height={1}
                  className=" h-[270px] w-full "
                  src={artist.img}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="loading"
                  quality={100}
                />
                <p className="text-black font-normal xxs:text-[12px] sm:text-[14px] lg:text-[16px] text-[16px]">
                  {artist.name}
                  <br />
                </p>
                <h4 className="xxs:text-[12px] text-[14px] text-gray-500">
                  {' '}
                  {artist.events} events{' '}
                </h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Artist
