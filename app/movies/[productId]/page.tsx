"use client"
import { useProductQuery, useProductsQuery } from "../../services/storeApi"
import { useRouter } from "next/navigation"
import { artistsCards } from "@/app/constants/resuable"
import { FaHeart } from "react-icons/fa"
import Image from "next/image"
import LoadingPage from "@/app/Loading"
import dynamic from "next/dynamic"
const Card = dynamic(() => import("@/app/constants/smallCard"));
const Carousel = dynamic(() => import("react-multi-carousel"));

const style = {
  main_div: `xxs:px-[15px] sm:px-[50px] lg:px-[120px]`,
}

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

const ProductDetail = ({ params }: { params: any }) => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }
  // const searchParams = useSearchParams()
  // const pid  = searchParams.get('id')
  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
  } = useProductQuery(params.productId)
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
    isSuccess: productsSuccess,
  } = useProductsQuery()

  // console.log(params)

  if (productLoading)
    return (
      <div>
        <LoadingPage />
      </div>
    )
  if (productError) return <div>Error while fetching data</div>

  return (
    <>
      <div
        className={`${style.main_div} xxs:text-black sm:text-white xxs:py-[10px] sm:py-[40px] sm:csz flex sm:flex-row xxs:flex-col w-full `}
        style={{ backgroundImage: `url(${product?.backgroundImg})` }}
      >
        <div className="flex flex-1 flex-col z-[2] justify-center backdrop-blur-[2px] ">
          <div>
            <button
              className=" xxs:text-white cursor-pointer xxs:text-[16px] sm:text-[15px] text-center border px-2 py-[5px] mb-[10px] rounded-xl bg-black bg-opacity-50  "
              onClick={handleClick}
            >
              {" "}
              &larr; Previous
            </button>
          </div>
          <div>
            <h1 className=" text-pink-700 pb-2 xxs:text-[32px] sm:text-[42px] lg:text-[54px] rounded-2xl ">
              {" "}
              {product?.title}{" "}
            </h1>
            <h1 className="flex flex-row items-center rounded-2xl xxs:text-[32px] sm:text-[42px] lg:text-[32px]">
              <FaHeart style={{ color: "red", marginRight: "10px" }} />{" "}
              {product?.rating} / 5
            </h1>
            <h1 className="text-pink-700 max-w-max xxs:pb-2 sm:b-4 cursor-pointer   rounded-2xl xxs:text-[32px] sm:text-[42px] lg:text-[36px] ">
              Add your reviews and ratings..
            </h1>
            <h1 className="xxs:pb-1 sm:pb-2 xxs:text-[32px] sm:text-[42px] lg:text-[28px] rounded-2xl">
              2D,ICE 3D,IMAX 3D,4DX 3D ,3D
            </h1>
            <h1 className="xxs:pb-1 sm:pb-2 xxs:text-[32px] sm:text-[42px] lg:text-[28px]  rounded-2xl">
              Languages: Hindi
            </h1>
            <h1 className="xxs:pb-1 sm:pb-4 xxs:text-[32px] sm:text-[42px] lg:text-[28px]  rounded-2xl">
              {product?.subTitle}
            </h1>
            <button className="xxs:p-2 sm:p-3 bg-pink-700 sm:max-w-max text-white rounded-lg mb-4 ">
              Book Tickets
            </button>
          </div>
        </div>
      </div>
      {/* More about the event  */}
      <div className={`${style.main_div} pt-[50px] `}>
        <div className="flex flex-col pb-[30px] ">
          <h1 className="text-3xl">More about the event:</h1>
          <p className=" xxs:text-md sm:text-xl">{product?.description}</p>
        </div>
        {/* CAST OF THE EVENT */}
        <h1 className="text-3xl pb-[10px]">Cast of the event:</h1>
        <Carousel responsive={responsive}>
          {artistsCards.map((artist,i) => (
            <div key={i} className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] cursor-pointer  ">
              <div className="px-2 py-2 flex flex-col items-center text-center ">
                <Image
                  src={artist.img}
                  className="lg:h-[140px] lg:w-[140px] sm:h-[130px] sm:w-[130px] xxs:h-[90px] xxs:w-[90px] mb-2 rounded-full"
                  alt=""
                  loading="eager"
                />
                <p className="text-black font-normal xxs:text-[12px] sm:text-[14px] lg:text-[16px] text-[16px]">
                  {artist.name}
                  <br />
                </p>
                <h4 className="xxs:text-[12px] text-[14px] text-gray-500">
                  {" "}
                  {artist.events} events{" "}
                </h4>
              </div>
            </div>
          ))}
        </Carousel>
        {/* CREW OF THE EVENT */}
        <h1 className="text-3xl pt-[20px] pb-[10px]">Crew of the event:</h1>
        <Carousel responsive={responsive}>
          {artistsCards.map((artist, i) => (
            <div key={i} className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] cursor-pointer  ">
              <div className="px-2 py-2 flex flex-col items-center text-center ">
                <Image
                  src={artist.img}
                  className="lg:h-[140px] lg:w-[140px] sm:h-[130px] sm:w-[130px] xxs:h-[90px] xxs:w-[90px] mb-2 rounded-full"
                  alt=""
                />
                <p className="text-black font-normal xxs:text-[12px] sm:text-[14px] lg:text-[16px] text-[16px]">
                  {artist.name}
                  <br />
                </p>
                <h4 className="xxs:text-[12px] text-[14px] text-gray-500">
                  {" "}
                  {artist.events} events{" "}
                </h4>
              </div>
            </div>
          ))}
        </Carousel>
        <h1 className="text-3xl pt-[50px] pb-[30px]">
          More events to look for:
        </h1>
        <Carousel responsive={responsive}>
          {productsLoading && (
            <h1 className="text-center text-2xl">Loading..</h1>
          )}
          {productsError && <h1>Something went wrong</h1>}
          {productsSuccess &&
            products
              .slice(0, 7)
              .map((product) => (
                <Card
                  key={product?.id}
                  id={product?.id}
                  image={product?.cardImg}
                  title={product?.title}
                  price={product?.price}
                  category={product?.type}
                  rating={product?.rating}
                />
              ))}
        </Carousel>
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default ProductDetail
