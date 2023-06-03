'use client'
import React, { useState } from 'react'
import { useGetMoviesQuery, useProductQuery } from '@/app/services/storeApi'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Card from '@/app/constants/sCard';
import { FaRupeeSign } from 'react-icons/fa';
import SkeletonCard from '@/app/constants/skeletonCard';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Filters', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Filter by Price', 'sub1', <FaRupeeSign />, [
    getItem('Free', '3'),
    getItem('0 - 500', '4'),
    getItem('500 - 1000', '5'),
    getItem('1000 < ', '6'),
  ]),
  getItem('Languages', 'sub2', <TeamOutlined />, [getItem('Hindi', '7'), getItem('English', '8'),getItem('Marathi', '9'),]),
  getItem('Files', '9', <FileOutlined />),
];

const page = ({searchParams}: {searchParams : any}) => {
  const {isLoading:productsLoading, isError:productsError, data:products, isFetching:productsFetching, isSuccess:productsSuccess} = useGetMoviesQuery(searchParams.category)
  console.log(searchParams)
  // const { data: products, isLoading: productsLoading, isError:productsError, isSuccess: productsSuccess } = useProductsQuery();
  // console.log(props)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    {productsError && <h1>Error while fetching data</h1>}
    {/* {products?.map((prod)=>(<h1>{prod.category}</h1>))} */}
     <Layout style={{ minHeight: '100vh', background: '#ffffff' }}>
      <Sider theme='light' className='w-[600px]' >
        <div style={{ height: 16, margin: 16 }} />
        <h1 className='text-[14px] text-white ml-[16px] ' >Filters</h1> 
        <Menu theme="light" defaultSelectedKeys={['0']} mode="inline" items={items}/>
     

      </Sider>
      <Layout className="">
     
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: '0 0px', background: '#ffffff' }}>
          {/* <Breadcrumb style={{ margin: '10px 0' , color: '#000', fontSize: '24px'}}> */}
           <h1 className='pl-[24px] text-[38px] pt-[24px] ' >{searchParams.category && searchParams.category.toUpperCase(0)}</h1>
           {productsLoading && <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:gap-1 sm:gap-0 xxs:gap-0" > <SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/> <SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/> </div>  }
          {/* </Breadcrumb> */}
          <div style={{ padding: 14, minHeight: 360, background: colorBgContainer }} className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:gap-1 sm:gap-0 xxs:gap-0'>
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
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
    </>
  )
}

export default page