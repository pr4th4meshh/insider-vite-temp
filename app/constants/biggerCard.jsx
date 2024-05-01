import Image from 'next/image'
import React from 'react'
import { FaVideo, FaHeart } from 'react-icons/fa'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../uicomponents/ui/card'

const style = {
  title_div: `flex flex-1 flex-row items-center pb-[18px]`,
  view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
  card_div: `rounded overflow-hidden shadow-lg xxs:max-w-[320px] max-h-[500px] mx-[10px] relative`,
  card_img: `w-full h-[178px] dark-overlay`,
  card_subDiv: `text-black font-thin text-lg z-[2] `,
  card_subDivTwo: `flex items-center py-[10px] bg-[#ffeaf2]`,
  card_divFour: `flex items-center text-center py-[6px] bg-[#ffeaf2]`,
}

const BiggerCard = ({ image, title, category, price, id, rating }) => {
  return (
    <Link href={`/movies/${id}`}>
      <Card>
        <CardContent>
          <div className="w-full relative h-[270px]">
            <Image alt={title} src={image} fill />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <div className={`${style.card_divTwo} font-thin`}>
              {title} <br />
            </div>
          </CardTitle>
          <CardDescription>
            <h4 className="text-[#EC1066] flex flex-row items-center">
              People rate this &nbsp; <FaHeart /> &nbsp; {rating} / 5
            </h4>

            <h3> From &#8377; {price} /-</h3>
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <div className={`${style.card_divFour}`}>
            <div className="flex">
              <FaVideo
                style={{
                  fontSize: '12px',
                  color: '#EC1066',
                  marginRight: '8px',
                  marginLeft: '18px',
                }}
              />
            </div>
            <h1 className="flex text-sm font-light py-1 px-2 text-[#ec1066] ">
              {' '}
              CONTENT: &nbsp; <span>
                {category && category.toUpperCase()}
              </span>{' '}
            </h1>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default BiggerCard
