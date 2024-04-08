import React from 'react'
import Topmenu from './Topmenu'
import Appetizer from './Appetizer'



const RestaurantMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <Appetizer />
    </section>
      </>
  )
}

export default RestaurantMenu
