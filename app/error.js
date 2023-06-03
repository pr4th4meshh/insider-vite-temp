'use client'
import React from 'react'
import Link from 'next/link'

const error = () => {
  return (
    <div className='h-[100vh] flex flex-col ' >
      <h1 className='text-[200px] self-center pt-[10px] text-red-700 ' >404</h1>
      <p className='text-[36px] self-center '>OOPS! The page cannot be found.</p>
   <Link href={`/`} className='self-center' >
   <button className='px-4 py-2 mt-2 border border-1 border-black max-w-max rounded-xl self-center' >Back to Homepage &rarr;</button>
   </Link>
    </div>
  )
}

export default error