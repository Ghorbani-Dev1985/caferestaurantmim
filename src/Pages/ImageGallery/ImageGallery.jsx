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
          
            <Image
            width={216}
            height={216}
              alt="ghorbani-dev.ir"
              src={href}
              isZoomed
              className="object-fill size-[216px] cursor-pointer hover:opacity-80"
              onClick={() => handleClick(id , href)}
              
            />
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
