import React from 'react'
import { Image } from "@nextui-org/react";
import RestaurantMenu from './../../Assets/Images/Menus/restaurantMenu.webp';
import CoffeeMenu from './../../Assets/Images/Menus/coffeeMenu.webp';
import { Link } from 'react-router-dom';
const Menus = () => {
  return (
    <section className='container mt-6'>
      <div className='w-full max-w-4xl flex-col md:flex-row flex-between gap-8 mx-auto'>
        <Link to="/restaurantMenu">
      <Image
                width={385}
                height={385}
                alt="ghorbani-dev.ir"
                src={RestaurantMenu}
                className="object-fill"
              />
        </Link>
        <Link to="/cafeMenu">
        <Image
                width={385}
                height={385}
                alt="ghorbani-dev.ir"
                src={CoffeeMenu}
                className="object-fill"
              />
        </Link>
      </div>
    </section>
  )
}

export default Menus
