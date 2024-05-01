// import Categories from './components/Categories'
// import Genre from "./components/Genre"
const HeroCarousel = dynamic(() => import('./components/HeroCarousel'))
const Featured = dynamic(() => import('./components/Featured'))
const Movies = dynamic(() => import('./components/Movies'))
const Courses = dynamic(() => import('./components/Courses'))
const Theatres = dynamic(() => import('./components/Theatres'))
const Health = dynamic(() => import('./components/Health'))
const Games = dynamic(() => import('./components/Games'))
const Events = dynamic(() => import('./components/Events'))
const Magazine = dynamic(() => import('./components/Magazine'))
const Newsletter = dynamic(() => import('./components/Newsletter'))
const Install = dynamic(() => import('./components/Install'))
const Artists = dynamic(() => import('./components/Artists'))
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <>
      {/* <HeroCarousel /> */}
      <main>
        {/* <Categories /> */}
        <Featured />
        {/* <Genre /> */}
        <Movies />
        <Courses />
        <Theatres />
        <Health />
        <Games />
        <Events />
        <Magazine />
        <Artists />
        <Newsletter />
        <Install />
      </main>
    </>
  )
}
