import React from 'react'
import Topmenu from '../../Feature/CafeMenu/Topmenu'
import coffee1 from './../../Assets/Images/Coffee/coffee01.webp'
import { Image , Divider} from "@nextui-org/react";
import Coffee from '../../Feature/CafeMenu/Coffee';

const CafeMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <Coffee />
    </section>
      </>
  )
}

export default CafeMenu
