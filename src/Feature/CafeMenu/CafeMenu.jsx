import React from 'react'
import Topmenu from '../../Feature/CafeMenu/Topmenu'
import Coffee from '../../Feature/CafeMenu/Coffee';
import Hot from '../../Feature/CafeMenu/Hot';
import Damnoosh from '../../Feature/CafeMenu/Damnoosh';
import MilkShake from '../../Feature/CafeMenu/MilkShake';
import Smoothie from './Smoothie';
import IceCoffee from './IceCoffee';

const CafeMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <Coffee />
     <Hot />
     <Damnoosh />
     <MilkShake />
     <Smoothie />
     <IceCoffee />
    </section>
      </>
  )
}

export default CafeMenu
