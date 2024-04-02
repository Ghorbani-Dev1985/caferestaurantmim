import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { BiAlarmExclamation, BiFoodMenu } from 'react-icons/bi'
import TopPreFooter from './../Assets/Images/Footer/topPreFooter.webp'
const PreFooter = () => {
  return (
    <>
      <div className='container bg-preFooter flex-center'>
      <Image alt="ghorbani-dev.ir" src={TopPreFooter} className="object-fill rounded-none" />
        </div>
       <div className='bg-primary p-4'>
      <div className='container flex flex-col items-center gap-y-8 font-bold'>
          <h3 className='font-extrabold text-2xl'>ساعات فعالیت کافه رستوران میم</h3>
          <p className='flex-center gap-1'>
          <BiAlarmExclamation className='size-5' />
          <span> نهار و شام ساعت 12:00 الی 24:00</span>
          </p>
          <Button color="secondary" size='lg' variant="bordered" startContent={<BiFoodMenu/>}>
        منو کافه رستوران میم
      </Button> 
       <p>جهت مشاهده منو کافه ، رستوران میتوانید از لینک بالا استفاده نمایید</p> 
       </div>
      </div>
    </>
  )
}

export default PreFooter
