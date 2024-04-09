import React from 'react'
import { AddressItems } from '../../UI/Footer'

const AboutUs = () => {
  return (
    <section className='container relative min-h-screen mt-6'>
        <div className='flex-col md:flex-row flex-between gap-5'>
          <div>1</div>
          <div className='flex flex-1 flex-col gap-8'>
           <h1 className='font-extrabold text-2xl'>کافه و رستـوران میم</h1>
           <p className='text-justify text-secondary/60'>
           میم یکی از کافه و رستوران رشت شما را به صرف غذاهای خاص دعوت می کند. ما در میم بر لذت بردن از مزه ها در فضایی که لحظه های به یاد ماندنی می سازد تاکید داریم و از این رو نام میم را که لذت میل کردن، نوشیدن و زندگی است، برگزیدیم.کافه و رستوران میم رشت  فضای داخلی زیبا و دکوراسیون مناسب ،که به مشتریان احساس راحتی و لذت بخشی می‌دهد. میم لذت مزه ها را در فضایی آکنده از آرامش و احترام به میهمانان خود پیشکش میکند اگر می خواهید بیشتر با میم بهترین رستوران رشت، آشنا شوید فقط کافی است که با ما همراه باشید.
           </p>
           <div className='max-w-lg space-y-8 mx-auto'>
           <AddressItems />
           </div>
          </div>
        </div>
        </section>
  )
}

export default AboutUs
