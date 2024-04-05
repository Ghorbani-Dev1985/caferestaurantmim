import React from 'react'
import Topmenu from '../../Feature/CafeMenu/Topmenu'
import coffee1 from './../../Assets/Images/Coffee/coffee01.webp'
import { Image , Divider} from "@nextui-org/react";

const CafeMenu = () => {
  return (
    <>
    <section className='container relative min-h-screen mt-6'>
        {/* Top menu */}
     <Topmenu />
     <section>
        <div className='flex flex-col gap-y-2 mb-8'>
            <h2 className='font-extrabold text-2xl'>قهوه</h2>
            <p className='flex gap-x-1'>
                <span className='block w-28 h-1 rounded-full bg-primary'></span>
                <span className='block size-1 rounded-full bg-primary'></span>
                <span className='block size-1 rounded-full bg-primary'></span>
                <span className='block size-1 rounded-full bg-primary'></span>
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex items-center gap-x-2'>
           <div>
           <Image
                width={171}
                height={171}
                alt="ghorbani-dev.ir"
                src={coffee1}
                className="object-fill rounded-tl-[50px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px]"
              />
           </div>
           <div className='flex items-center flex-1 font-extrabold '>
              <span className='flex flex-1'>اسپرسو</span>
              <Divider className='mx-3 shrink'/>
              <p className='flex-center'>65,000<span>تومان</span></p>
           </div>
          </div>
          <div className='flex items-center gap-x-2'>
           <div>
           <Image
                width={171}
                height={171}
                alt="ghorbani-dev.ir"
                src={coffee1}
                className="object-fill rounded-tl-[50px] rounded-tr-[50px] rounded-br-[150px] rounded-bl-[50px]"
              />
           </div>
           <div className='flex flex-col flex-1 font-extrabold '>
            <div className='flex'>
              <span className='flex flex-1 text-nowrap'>لققلق لقققلقلل  اسپرسو rrtrtt rttrttrrr rtrtyrtr</span>
              <Divider className='mx-3 shrink'/>
              <p className='flex-center'>65,000<span>تومان</span></p>
            </div>
            <p className='font-normal text-base text-gray-400'>حجم شیر بالانس</p>
           </div>
          </div>
         
        </div>
     </section>
    </section>
      </>
  )
}

export default CafeMenu
