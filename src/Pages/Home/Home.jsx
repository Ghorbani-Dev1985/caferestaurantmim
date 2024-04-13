import React from 'react'
import Slider from '../../UI/Slider'
import QuickAccess from '../../Feature/Home/QuickAccess'
import Menus from '../../Feature/Home/Menus'
import { AboutUsItems } from '../AboutUs/AboutUs'
import BlogsList from '../../Feature/Home/BlogsList'
import AboutsUS from '../../Feature/Home/AboutsUS'
import ImageGallery from '../../Feature/Home/ImageGallery'

const Home = () => {
  return (
    <div className='min-h-screen'>
    <Slider />
    <section className='container'>
     <QuickAccess />
     <Menus />
     <AboutUsItems />
     <BlogsList />
    </section>
    <AboutsUS />
     <ImageGallery />
    </div>
  )
}

export default Home