"use client"
import Image from "next/image"
import heroThree from "../../public/images/carouselTwo.webp"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const HeroCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
      <Carousel
        swipeable={true}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <Image
            src={heroThree}
            className="sm:h-[360px] w-full xxs:h-[230px]"
            alt="carouselimage"
            priority
          />
        </div>
        <div>
          <Image
            src={heroThree}
            className="sm:h-[360px] w-full xxs:h-[230px]"
            alt="carouselimage"
            priority
          />
        </div>
        <div>
          <Image
            src={heroThree}
            className="sm:h-[360px] w-full xxs:h-[230px]"
            alt="carouselimage"
            priority
          />
        </div>
        <div>
          <Image
            src={heroThree}
            className="sm:h-[360px] w-full xxs:h-[230px]"
            alt="carouselimage"
            priority
          />
        </div>
      </Carousel>
  )
}

export default HeroCarousel
