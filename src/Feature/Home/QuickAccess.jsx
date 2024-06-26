import React from 'react'
import Title from '../../UI/Title'
import { Image } from "@nextui-org/react";
import { HashLink } from 'react-router-hash-link';


const MainMenuItems = [
    {
      id: 1,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-01.webp",
      link: "/restaurantMenu#appetizer",
    },
    {
      id: 2,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-02.webp",
      link: "/restaurantMenu#pizza",
    },
    {
      id: 3,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-03.webp",
      link: "/restaurantMenu#sandwich",
    },
    {
      id: 4,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-04.webp",
      link: "/restaurantMenu#burger",
    },
    {
      id: 5,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-05.webp",
      link: "/restaurantMenu#steak",
    },
    {
      id: 6,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-06.webp",
      link: "/restaurantMenu#pasta",
    },
    {
        id: 7,
        src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-10.webp",
        link: "/restaurantMenu#appetizer",
    },
    {
      id: 8,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-07.webp",
      link: "/restaurantMenu#appetizer",
    },
    {
      id: 9,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-08.webp",
      link: "/restaurantMenu#appetizer",
    },
    {
      id: 10,
      src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-09.webp",
      link: "/restaurantMenu#appetizer",
    },
    {
        id: 11,
        src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-11.webp",
        link: "/restaurantMenu#drinks",
    },
    {
        id: 12,
        src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-12.webp",
        link: "/cafeMenu#hot",
    },
  ];
function QuickAccess() {
  return (
    <section className='flex flex-col'>
     <Title text="دسترسی سریع"/>
     <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
       {
        MainMenuItems.map(({id , src , link}) => (
            <React.Fragment key={id}>
            <HashLink smooth to={link}>
                  <Image
                    width={512}
                    height={512}
                    alt="ghorbani-dev.ir"
                    src={src}
                    className="object-fill hover:scale-90 hover:opacity-80 transition-all ease-linear duration-250"
                  />
                </HashLink>
            </React.Fragment>
        ))
       }
        
     </div>
    </section>
  )
}

export default QuickAccess