'use client'
import { useGetMoviesQuery } from '@/app/services/storeApi'
import dynamic from 'next/dynamic';
// import Card from '../../constants/smallCard'

const Card = dynamic(() => import("@/app/constants/smallCard"));
// const Carousel = dynamic(() => import("react-multi-carousel"));
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

const page = ({ searchParams }: { searchParams: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: products } = useGetMoviesQuery(searchParams.category)

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex">
          <Sidebar className="h-[100vh]">
            <h1 className="pl-[24px] text-[28px] pt-[24px] ">
              {searchParams.category && searchParams.category.toUpperCase(0)}
            </h1>
            <Menu>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <div className="grid grid-flow-row-dense grid-rows-4 gap-3 md:grid-cols-4 pt-[40px] px-[40px] ">
          {products?.map((product) => (
            <Card
              key={product?.id}
              id={product?.id}
              image={product.cardImg}
              title={product.title}
              price={product.price}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
