import { FaHeart, FaVideo } from 'react-icons/fa'
import Image from 'next/image'
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
  card_div: `rounded overflow-hidden relative shadow-lg max-w-[260px] max-h-[500px] mx-[10px] mb-[38px]`,
  card_divTwo: ` text-black font-thin text-xl z-[2]]`,
  card_divThree: `items-center w-[260px] flex flex-row`,
  card_divFour: `flex items-center text-center py-[6px] bg-[#ffeaf2]`,
}

const SmallCard = ({ title, id, image, rating, price, category }) => {
  return (
    <Link href={`/movies/${id}`}>
      <Card>
         <div className='w-full relative h-[270px]' >
         <Image
            alt={title}
            fill
            src={image}
          />
         </div>
        <CardHeader>
          <CardTitle>
            <div className={`${style.card_divTwo}`}>
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

export default SmallCard
