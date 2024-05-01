'use client'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../public/images/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#000000] h-[480px]">
      <div className="  flex xxs:px-[10px] sm:px-[50px] lg:px-[120px]  sm:py-[26px] xxs:py-0 text-[16px] font-light text-gray-300 ">
        <div className="flex flex-1 flex-col xxs:px-[10px] sm:px-[50px] lg:px-[20px] xxs:hidden md:block">
          <Image
            src={logo}
            className="h-[80px] w-[240px]"
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'contain',
              height: '100%',
            }}
            width={1}
            height={1}
            alt=""
          />
          <br />
          <p className="sm:hidden lg:block">
            Paytm Insider is a platform that helps you discover and buy the best
            in events, travel and food in your city. We strive to curate
            experiences that are worth your time and money, possibly something
            you have never tried before.
          </p>
          <br />
          <br />
          <h3 className="text-blue-500">FOR EVENT ORGANIZERS</h3>

          <p className="sm:hidden lg:block">
            {' '}
            Paytm Insider is built by the same team that created Bacardi NH7
            Weekender (us) and we sure know what goes into putting together a
            great experience. Our technology, marketing and customer support can
            help you build a community of not just ticket buyers, but also fans.
          </p>
        </div>
        <div className="flex flex-1 flex-col xxs:px-[10px] sm:px-[50px] lg:px-[20px] relative top-[80px]  ">
          <Image
            src={logo}
            className="h-[80px] w-[240px] xxs:visible lg:hidden "
            alt=""
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'contain',
              height: '100%',
            }}
            width={1}
            height={1}
          />
          <br />
          <ul className="flex  flex-wrap items-center ">
            <li className="pr-[14px]">
              <a href="">About Us</a>
            </li>
            <li className="pr-[14px]">
              <a href="">BLOG</a>
            </li>
            <li className="pr-[14px]">
              <a href="">FAQs</a>
            </li>
            <li className="pr-[14px]">
              <a href="">Terms & Conditions</a>
            </li>
            <li className="pr-[14px]">
              <a href="">Privacy Policy</a>
            </li>
            <li className="pr-[14px]">
              <a href="">Careers</a>
            </li>
            <li className="pr-[14px]">
              <a href="">Contact Us</a>
            </li>
          </ul>
          <br />
          <br />
          <div className="flex flex-row mt-0 items-start ">
            <button className="p-2 rounded-full ml-2">
              <FaFacebookF style={{ color: 'white' }} />
            </button>
            <button className="p-2 rounded-full ml-2">
              <FaTwitter style={{ color: 'white' }} />
            </button>
            <button className="p-2 rounded-full ml-2">
              <FaInstagram style={{ color: 'white' }} />
            </button>
          </div>
          <br />
          <br />
          <h3 className="text-blue-500 lg:hidden">FOR EVENT ORGANIZERS</h3>
          <ul className="flex  flex-wrap items-center ">
            <li className="pr-[14px]">
              <a href="">List with us</a>
            </li>
            <li>
              <a href="">Company Events</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
