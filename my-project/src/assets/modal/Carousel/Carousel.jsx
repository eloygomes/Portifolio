import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-row items-center justify-around">
      <div className="w-[50%] m-5 p-2 max-w-2xl mt-8 grid grid-cols-6 gap-4 ">
        {
          // eslint-disable-next-line react/prop-types
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="cursor-pointer rounded-xl"
              onClick={() => handleImageClick(index)}
            />
          ))
        }
      </div>
      <div className="w-[50%] h-fit p-5 flex flex-col justify-center mt-10 relative">
        <div className="container mx-auto">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            selectedItem={selectedImageIndex}
            className="mx-10 rounded-xl"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="rounded-lg object-cover p-10  items-center"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
