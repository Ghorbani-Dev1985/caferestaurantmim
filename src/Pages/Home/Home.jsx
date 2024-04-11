import React from 'react'
import Slider from '../../UI/Slider'
import ImageMorphing from '../../UI/ImageMorphing'
import QuickAccess from '../../Feature/Home/QuickAccess'
import Menus from '../../Feature/Home/Menus'
import { AboutUsItems } from '../AboutUs/AboutUs'

const Home = () => {
  return (
    <div className='min-h-screen'>
    <Slider />
    <section className='container'>
     <QuickAccess />
     <Menus />
     <AboutUsItems />
    </section>
    </div>
  )
}

export default Home