import React from 'react'
import Topmenu from './Topmenu'
import Appetizer from './Appetizer'
import Pizza from './Pizza'
import Sandwich from './Sandwich'
import Burger from './Burger'
import Steak from './Steak'
import Pasta from './Pasta'
import Drinks from './Drinks'



const RestaurantMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <Appetizer />
     <Pizza />
     <Sandwich />
     <Burger />
     <Steak />
     <Pasta />
     <Drinks />
    </section>
      </>
  )
}

export default RestaurantMenu
