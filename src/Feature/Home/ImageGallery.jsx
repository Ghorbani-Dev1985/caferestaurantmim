import React, { useState } from 'react'
import ImageGalleryUi from '../../UI/ImageGallery'
import data from "../../Data/data.json";
import { Image } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import Title from '../../UI/Title';
const ImageGallery = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const handleClick = (id, href) => {
      setCurrentIndex(id);
      setClickedImg(href);
    };
  return (
    <section className='container my-7'>
      <ImageGalleryUi clickedImg={clickedImg} setClickedImg={setClickedImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
     {data.images.slice(0 , 10).map(({ id, href }) => (
          <React.Fragment key={id}>
          <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
            <Image
            alt="ghorbani-dev.ir"
            src={href}
            className="object-fill size-[220px] rounded-lg"
            />
            <div onClick={() => handleClick(id , href)}
        className="absolute max-w-[220px] bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary bg-fixed opacity-0 transition-all duration-500 ease-linear hover:opacity-40"></div>
            </div>
          </React.Fragment>
        ))}
        </ImageGalleryUi>
        <div className='flex-center'>
            <Link to="/imageGallery">
             <Title text="مشاهده همه تصاویر"/>
            </Link>
        </div>  
    </section>
  )
}

export default ImageGallery
