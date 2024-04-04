import React from 'react'
import DividerImg from './../../Assets/Images/Main/title.webp'
import { Button, Image, Input, Textarea } from '@nextui-org/react'
import { AddressItems } from '../../UI/Footer'


const ContactUs = () => {
  return (
    <section className='container flex flex-col md:flex-row justify-between gap-12 mt-8'>
      <div className='flex flex-1 flex-col items-center justify-center gap-y-12 border-1 border-gray-200 rounded-lg p-5'>
        <h2 className='font-extrabold text-xl'>ارتباط با رستوران</h2>
        <Image
      alt="ghorbani-dev.ir"
      src={DividerImg}
      className='object-fill'
      />
      <div className='space-y-10'><AddressItems /></div>
      <form className='w-full space-y-8'>
      <Input size="sm" type="text" label="نام و نام خانوادگی*" />
      <Input size="sm" type="tel" label="شماره موبایل*" />
      <Textarea
          variant="flat"
          placeholder="پیام خود را وارد نمایید*"
          minRows="10"
          maxRows="20"
        />
        <Button size="md" color='primary' className='w-full font-extrabold'>
        ارسال پیام
      </Button> 
      </form>
      </div>
      <div className='flex flex-1 border-1 border-gray-200 rounded-lg'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.023189809137!2d49.5774129764325!3d37.2708771910256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff5626f0dbded8d%3A0xfc4ec52e74023d7b!2sGilan%20Province%2C%20Rasht%D8%8C%20Nasturi%2C%20Iran!5e0!3m2!1sen!2s!4v1712156795298!5m2!1sen!2s" className='w-full min-h-screen' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default ContactUs
