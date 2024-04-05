import React from "react";
import { Image } from "@nextui-org/react";
import TopMenuSlider from "../../UI/TopMenuSlider";
import { SwiperSlide } from "swiper/react";

const topMenuItems = [
  {
    id: 1,
    src: "src/Assets/Images/CafeMenu/cafeMenu-01.webp",
    link: "cafe",
  },
  {
    id: 2,
    src: "src/Assets/Images/CafeMenu/cafeMenu-02.webp",
    link: "hot",
  },
  {
    id: 3,
    src: "src/Assets/Images/CafeMenu/cafeMenu-03.webp",
    link: "damnosh",
  },
  {
    id: 4,
    src: "src/Assets/Images/CafeMenu/cafeMenu-04.webp",
    link: "milkShake",
  },
  {
    id: 5,
    src: "src/Assets/Images/CafeMenu/cafeMenu-05.webp",
    link: "asoti",
  },
  {
    id: 6,
    src: "src/Assets/Images/CafeMenu/cafeMenu-06.webp",
    link: "iceCoffee",
  },
  {
    id: 7,
    src: "src/Assets/Images/CafeMenu/cafeMenu-07.webp",
    link: "cake",
  },
  {
    id: 8,
    src: "src/Assets/Images/CafeMenu/cafeMenu-08.webp",
    link: "vafel",
  },
  {
    id: 9,
    src: "src/Assets/Images/CafeMenu/cafeMenu-09.webp",
    link: "makatel",
  },
];
const Topmenu = () => {
  return (
    <>
      <TopMenuSlider>
        {topMenuItems.map(({ id, src, link }) => (
          <SwiperSlide key={id} className="rounded-full">
            <a href={`#${link}`}>
              <Image
                width={512}
                height={512}
                alt="ghorbani-dev.ir"
                src={src}
                className="object-fill"
              />
            </a>
          </SwiperSlide>
        ))}
      </TopMenuSlider>
    </>
  );
};

export default Topmenu;
