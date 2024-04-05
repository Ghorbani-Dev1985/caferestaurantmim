import React from 'react'
import Topmenu from '../../Feature/CafeMenu/Topmenu'
import Coffee from '../../Feature/CafeMenu/Coffee';
import Hot from '../../Feature/CafeMenu/Hot';

const CafeMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <Coffee />
     <Hot />
    </section>
      </>
  )
}

export default CafeMenu
