import React, { useEffect } from "react";
import { Image } from "@nextui-org/react";
import TopMenuSlider from "../../UI/TopMenuSlider";
import { SwiperSlide } from "swiper/react";
import { Link , useLocation} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const topMenuItems = [
  {
    id: 1,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-01.webp",
    link: "appetizer",
  },
  {
    id: 2,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-02.webp",
    link: "pizza",
  },
  {
    id: 3,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-03.webp",
    link: "sandwich",
  },
  {
    id: 4,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-04.webp",
    link: "burger",
  },
  {
    id: 5,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-05.webp",
    link: "steak",
  },
  {
    id: 6,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-06.webp",
    link: "pasta",
  },
  {
    id: 7,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-07.webp",
    link: "#",
  },
  {
    id: 8,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-08.webp",
    link: "#",
  },
  {
    id: 9,
    src: "src/Assets/Images/RestaurantMenu/RestaurantMenu-09.webp",
    link: "#",
  },
];
const Topmenu = ({props}) => {

  return (
    <>
      <TopMenuSlider>
        {topMenuItems.map(({ id, src, link }) => (
          <SwiperSlide key={id} className="rounded-full">
            <HashLink smooth to={`/restaurantMenu#${link}`}>
              <Image
                width={512}
                height={512}
                alt="ghorbani-dev.ir"
                src={src}
                className="object-fill"
              />
            </HashLink>
          </SwiperSlide>
        ))}
      </TopMenuSlider>
    </>
  );
};

export default Topmenu;
