import React, { useState } from "react";
import Title from "../../UI/Title";
import ImageItems from "./../../Data/data.json";
import { Image, useDisclosure } from "@nextui-org/react";
import LightBoxModal from "../../UI/LightBoxModal";
const ImageGallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const handleClick = (id, href) => {
    setCurrentIndex(id);
    setClickedImg(href);
  };

  const handelRotationRight = () => {
    const totalLength = ImageItems.images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = ImageItems.images[0].href;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = ImageItems.images.filter((item) => {
      return ImageItems.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].href;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = ImageItems.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = ImageItems.images[totalLength - 1].href;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = ImageItems.images.filter((item) => {
      return ImageItems.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].href;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="container mt-8">
      <Title text="گالری تصاویر" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {ImageItems.images.map(({ id, href }) => (
          <React.Fragment key={id}>
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat cursor-pointer">
            <Image
            width={216}
            height={216}
            alt="ghorbani-dev.ir"
            src={href}
            className="object-fill size-[220px] max-w-xs rounded-lg"
            />
            <div onClick={() => handleClick(id , href)}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary bg-fixed opacity-0 transition-all duration-500 ease-linear hover:opacity-40"></div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {
        clickedImg && (
            <LightBoxModal clickedImg={clickedImg} handelRotationLeft={handelRotationLeft} setClickedImg={setClickedImg} handelRotationRight={handelRotationRight}/>
        )
      }
    </section>
  );
};

export default ImageGallery;
