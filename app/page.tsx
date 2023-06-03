import Image from 'next/image'
import { Inter } from 'next/font/google'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Genre from './components/Genre'
import Movies from './components/Movies'
import Courses from './components/Courses'
import Theatres from './components/Theatres'
import Health from './components/Health'
import Games from './components/Games'
import Events from './components/Events'
import Magazine from './components/Magazine'
import Newsletter from './components/Newsletter'
import Install from './components/Install'
import Artists from './components/Artists'
import HeroCarousel from './components/HeroCarousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <HeroCarousel/>
        {/* <Categories/> */}
        <Featured/>
        <Genre/>
        <Movies/>
      <Courses/>
        <Theatres/>
        <Health/>
        <Games/>
        <Events/>
        <Magazine/>
        <Artists/>
        <Newsletter/>
        <Install/>
    </main>
  )
}