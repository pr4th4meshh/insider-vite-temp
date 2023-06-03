'use client'
import Image from 'next/image';
import React, { useRef } from 'react'
import Slider from 'react-slick'
import heroThree from '../../public/images/carouselTwo.png'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';

const HeroCarousel = () => {

  const sliderRef = useRef<Slider>(null);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Set autoplay to true
    autoplaySpeed: 2500, // Set the duration of the slide transition
      arrows:false,
        waitForAnimate: false,
      };
  return (
    <div className='w-full' >
   <Link href='/'>
   <Slider ref={sliderRef} {...settings}>
      <div>
      <Image src={heroThree} className='sm:h-[360px] w-full xxs:h-[230px]' alt='' />
      </div>
      <div>
      <Image src={heroThree}  className='sm:h-[360px] w-full xxs:h-[230px]' alt=''  />
      </div>
      <div>
      <Image src={heroThree} className='sm:h-[360px] w-full xxs:h-[230px]' alt='' />
      </div>
      <div>
      <Image src={heroThree} className='sm:h-[360px] w-full xxs:h-[230px]' alt=''  />
      </div>
      <div>
      <Image src={heroThree} className='sm:h-[360px] w-full xxs:h-[230px]' alt='' />
      </div>
      <div>
      <Image src={heroThree} className='sm:h-[360px] w-full xxs:h-[230px]' alt=''/>
      </div>
    </Slider>
   </Link>
  <div className='flex justify-between px-[20px]'>
  <div className='absolute xxs:bottom-[78%] ss:bottom-[76%] sm:bottom-[60%]'>
          <button className="button" onClick={handlePrevClick}>
            <BsArrowLeftCircle style={{marginRight: '10px', fontSize: '25px'}} />
          </button>
          
        </div>
   <div className='absolute xxs:bottom-[78%] ss:bottom-[76%] sm:bottom-[60%] end-[20px]'>
   <button className="button" onClick={handleNextClick}>
            <BsArrowRightCircle style={{fontSize: '25px'}}/>
          </button>
        </div>
  </div>
  </div>
  )
}

export default HeroCarousel