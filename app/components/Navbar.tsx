"use client"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { BsBookmarkHeart } from "react-icons/bs"
import { FaPortrait } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import logo from "../../public/images/logo.png"
import Image from "next/image"
import Link from "next/link"

const style = {
  nav: ` `,
  ul: `flex flex-row items-center text-gray-300 font-thin text-[15px]`,
  a: `border-[1px] border-gray-300 p-[8px] rounded-3xl mr-[14px]`,
  rLi: `border border-gray-300 p-2 mx-2 rounded-3xl`,
  rLiTwo: `border border-gray-300 p-2 mx-2 rounded-3xl mb-4 bg-white`,
  fLi: `border border-black p-2 mx-2 rounded-3xl mb-4 bg-white`,
}

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleFav, settoggleFav] = useState(false)

  const handleNav = () => {
    setToggleNav(!toggleNav)
  }
  const handleFav = () => {
    settoggleFav(!toggleFav)
  }

  const USER_STATUS = "Online"
  return (
    <>
      {/* DEFAULT NAVBAR HERE*/}
      <div className="w-screen flex bg-[#373435] h-[80px] xxs:hidden md:block ">
        <div className="flex flex-row justify-around">
          <div className=" flex ">
            <Link href="/">
              <Image src={logo} className="w-auto h-[80px]" alt="logo" />
            </Link>
            <ul className={`${style.ul}`}>
              <li className="pr-[14px]">
                <a href="">Popluar Events</a>
              </li>
              <li className="pr-[14px] ">
                <a href="">Free Events</a>
              </li>
              <li>
                <a href="">Today&apos;s Events</a>
              </li>
            </ul>
          </div>
          <div className="flex ">
            <ul className="flex flex-row items-center text-gray-300 text-[13px]">
              <li>
                <Link href={"/"} className={`${style.a}`}>
                  Corporate Events
                </Link>
              </li>
              <li>
                <a className={`${style.a}`} href="">
                  List your Events
                </a>
              </li>
              <li>
                <a className={`${style.a}`} href="">
                  We are hiring!
                </a>
              </li>
              <BsBookmarkHeart
                style={{
                  fontSize: "26px",
                  color: "white",
                  marginRight: "28px",
                }}
              />
              {/* <SearchOutlined style={{fontSize:'26px', color: 'white', marginRight:'28px'}}  /> */}
              <FaPortrait
                style={{
                  fontSize: "26px",
                  color: "white",
                  marginRight: "28px",
                }}
              />
              <div className="flex flex-row">
                <GoLocation
                  style={{
                    fontSize: "26px",
                    color: "white",
                    marginRight: "8px",
                  }}
                />
                <p className="text-white text-[18px] ">{USER_STATUS}</p>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 xxs:block md:hidden">
          {toggleNav && (
            <ul className="flex flex-col items-center text-gray-300 text-[13px] bg-slate-500">
              <li>
                <a className={`${style.a}`} href="">
                  Corporate Events
                </a>
              </li>
              <li>
                <a className={`${style.a}`} href="">
                  List your Events
                </a>
              </li>
              <li>
                <a className={`${style.a}`} href="">
                  We are hiring!
                </a>
              </li>
              {/* <HeartOutlined style={{fontSize:'26px', color: 'white', marginRight:'28px'}}  />
          <SearchOutlined style={{fontSize:'26px', color: 'white', marginRight:'28px'}}  />
          <SearchOutlined style={{fontSize:'26px', color: 'white', marginRight:'28px'}}  /> */}
              <div className="flex flex-row">
                {/* <QuestionCircleOutlined style={{fontSize:'26px', color: 'white', marginRight:'8px'}} /> */}
                <p className="text-white text-[18px] ">Online</p>
              </div>
            </ul>
          )}
        </div>
      </div>

      {/* RESPONSIVE NAVBAR HERE */}

      <nav className={` ${style.nav} xxs:block md:hidden `}>
        <div className="flex px-2">
          <div className=" flex flex-1">
            <Image src={logo} alt="" className=" w-auto h-[60px]" />
          </div>
          <div className="flex flex-1 justify-end">
            <div className="flex items-center ">
              <a className="text-white mr-3" onClick={handleNav}>
                {" "}
                <BiMenu size="28" />{" "}
              </a>
              <a className="text-white" onClick={handleFav}>
                <BsBookmarkHeart size="28" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-1 xxs:block md:hidden">
          {toggleNav && (
            <div className="bg-[#373435] h-[100vh] text-gray-300 absolute">
              <ul className="flex flex-row text-[12px] pt-6 justify-center ">
                <li className={`${style.rLi}`}>
                  <a href="">Corporate Events</a>
                </li>
                <li className={`${style.rLi}`}>
                  <a href="">List your Events</a>
                </li>
                <li className={`${style.rLi}`}>
                  <a href="">We are hiring!</a>
                </li>
              </ul>
              <ul className="flex flex-col text-[12px] pt-6 justify-center text-center text-black px-4">
                <li className={`${style.rLiTwo}`}>
                  <a href="">Sign-In with Google</a>
                </li>
                <li className={`${style.rLiTwo}`}>
                  <a href="">Sign-In with Paytm</a>
                </li>
                <li className={`${style.rLiTwo}`}>
                  <a href="">Sign-In with E-mail</a>
                </li>
              </ul>
              <div className=" border-t flex flex-row mx-6">
                <a href="/help" className="pr-4 pt-2">
                  Help
                </a>
                <a href="/about" className="pt-2">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>

        {/* FAVOURITE NAVBAR HERE*/}
        <div className="flex flex-1 xxs:block md:hidden">
          {toggleFav && (
            <div className="bg-[#ffffff] w-full h-[100vh] text-black absolute text-center pt-3">
              <div>
                <h1>View your favourites</h1>
                <p>Tap heart icon on any event to save it here.</p>
              </div>
              <ul className="flex flex-col text-[12px] pt-6 justify-center text-center text-black px-4">
                <li className={`${style.fLi}`}>
                  <a href="">Sign-In with Google</a>
                </li>
                <li className={`${style.fLi}`}>
                  <a href="">Sign-In with Paytm</a>
                </li>
                <li className={`${style.fLi}`}>
                  <a href="">Sign-In with E-mail</a>
                </li>
              </ul>
              <div className=" border-t border-black flex flex-row mx-6">
                <a href="/help" className="pr-4 pt-2">
                  Help
                </a>
                <a href="/about" className="pt-2">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
