import React from 'react'
import {Image} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination , Autoplay , A11y} from "swiper/modules";


const topMenuItems = [
    {
        id: 1,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-01.webp',
        link: "cafe"
    },
    {
        id: 2,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-02.webp',
        link: "hot"
    },
    {
        id: 3,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-03.webp',
        link: "damnosh"
    },
    {
        id: 4,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-04.webp',
        link: "milkShake"
    },
    {
        id: 5,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-05.webp',
        link: "asoti"
    },
    {
        id: 6,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-06.webp',
        link: "iceCoffee"
    },
    {
        id: 7,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-07.webp',
        link: "cake"
    },
    {
        id: 8,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-08.webp',
        link: "vafel"
    },
    {
        id: 9,
        src: 'src/Assets/Images/CafeMenu/cafeMenu-09.webp',
        link: "makatel"
    }
]
const Topmenu = () => {
  return (
    <>
       <div className='w-full flex-center flex-nowrap overflow-x-auto sticky top-24'>
       <Swiper
       loop={true}
       autoplay={{
        delay: 3000,
      }}
        slidesPerView={3}
        breakpoints={{
            300: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 9,
            },
          }}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination , Autoplay , A11y]}
        className="mySwiper"
      >
        {
            topMenuItems.map(({id , src , link})=> (
                    <SwiperSlide key={id}>
                <a href={`#${link}`}>
                <Image
      width={512}
      height={512}
      alt="ghorbani-dev.ir"
      src={src}
      className='object-fill'
      />
                   </a> 
      </SwiperSlide>
                
            ))
        }
        </Swiper>
      </div>
    </>
  )
}

export default Topmenu
