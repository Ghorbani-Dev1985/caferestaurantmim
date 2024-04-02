import React from 'react'
import { Image, Link } from '@nextui-org/react'
import TopFooter from './../Assets/Images/Footer/topFooter.webp'
import Logo from './../Assets/Images/Logo/logo2.webp'
import { BiMobileAlt } from 'react-icons/bi'
import { HiOutlineLocationMarker, HiPhone } from 'react-icons/hi'
const Footer = () => {
  return (
    <footer>
    <div className='bg-Footer min-h-96 relative'>
        <div className='container flex flex-col items-center gap-y-10'>
    <div className='absolute z-20 -top-[4.3rem]'>
      <Image alt="ghorbani-dev.ir" src={TopFooter} className="object-fill rounded-none" />
    </div>
          
    <Image alt="ghorbani-dev.ir" src={Logo} className="object-fill rounded-none mt-6" />
      <Link href="tel:09124366107" size='lg' className='flex-center text-base md:text-xl gap-1 text-white'><BiMobileAlt className="size-6 text-primary-500"/>میلاد نیک سرشت 09124366107 ( مدیریت )</Link>
      <div className='flex-between gap-x-20 md:gap-x-36'>
      <Link href="tel:01332265593" className='flex-center text-xl gap-1 text-white'> <HiPhone className="size-5 text-primary-500 rotate-[265deg]"/> 32265593</Link>
           <Link href="tel:01332231879" className='flex-center text-xl gap-1 text-white'> <HiPhone className="size-5 text-primary-500 rotate-[265deg]"/> 32231879</Link>
      </div>
      <p className='flex-center gap-x-1 text-xl text-white'><HiOutlineLocationMarker className='size-6 text-primary-500' /> <span>رشت ،خیابان لاکانی نبش بن بست شاد</span></p>
        </div>
    </div>
    </footer>
  )
}

export default Footer
