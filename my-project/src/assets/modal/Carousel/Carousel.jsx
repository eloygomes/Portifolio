import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  const [selectedImageIndex] = useState(0);
  const [firstImageIndex, setFirstImageIndex] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setFirstImageIndex(newIndex);
  };

  return (
    <>
      {window.innerWidth <= 961 ? (
        //////////////////////////////////////////// Mobile ////////////////////////////////////////////
        //////////////////////////////////////////// Mobile ////////////////////////////////////////////
        //////////////////////////////////////////// Mobile ////////////////////////////////////////////
        <div className="flex flex-col items-center justify-around">
          {images.map((image, index) => (
            <div key={index} className="p-3">
              <img
                className="rounded-lg object-cover items-center"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      ) : (
        //////////////////////////////////////////// Desktop ////////////////////////////////////////////
        //////////////////////////////////////////// Desktop ////////////////////////////////////////////
        //////////////////////////////////////////// Desktop ////////////////////////////////////////////
        <div
          className="flex flex-row items-center justify-around"
          id="imageCarouselHere"
        >
          <div
            className="w-[70%]  p-16 lg:pt-2 lg:p-5 flex flex-col justify-center absolute right-0 "
            id="FULL IMAGE HERE"
          >
            <div className="container mx-auto h-auto mt-96 max-h-[89vh]">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                selectedItem={selectedImageIndex}
                className="carrao rounded-xl"
                beforeChange={handleBeforeChange}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      index === firstImageIndex ? "h-screen" : "h-auto"
                    } overflow-scroll flex items-start justify-center`}
                  >
                    <img
                      className="rounded-lg object-cover p-10 pb-96 items-center"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
