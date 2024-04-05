import React from 'react'
import Topmenu from '../../Feature/CafeMenu/Topmenu'
import Coffee from '../../Feature/CafeMenu/Coffee';
import Hot from '../../Feature/CafeMenu/Hot';
import Damnoosh from '../../Feature/CafeMenu/Damnoosh';

const CafeMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <Coffee />
     <Hot />
     <Damnoosh />
    </section>
      </>
  )
}

export default CafeMenu
