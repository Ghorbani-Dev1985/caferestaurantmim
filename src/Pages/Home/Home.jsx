import React from 'react'
import Slider from '../../UI/Slider'
import ImageMorphing from '../../UI/ImageMorphing'
import QuickAccess from '../../Feature/Home/QuickAccess'

const Home = () => {
  return (
    <div className='min-h-screen'>
    <Slider />
    <section className='container'>
     <QuickAccess />
    </section>
    </div>
  )
}

export default Home