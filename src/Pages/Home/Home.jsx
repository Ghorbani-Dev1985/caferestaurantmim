import React from 'react'
import Slider from '../../UI/Slider'
import QuickAccess from '../../Feature/Home/QuickAccess'
import Menus from '../../Feature/Home/Menus'
import { AboutUsItems } from '../AboutUs/AboutUs'
import BlogsList from '../../Feature/Home/BlogsList'

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
    </div>
  )
}

export default Home