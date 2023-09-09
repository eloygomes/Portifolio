import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images }) => {
  const [selectedImageIndex] = useState(0);

  // const handleImageClick = (index) => {
  //   setSelectedImageIndex(index);
  // };

  return (
    <>
      {window.innerWidth <= 961 ? (
        //////////////////////////////////////////// Mobile ////////////////////////////////////////////
        //////////////////////////////////////////// Mobile ////////////////////////////////////////////
        //////////////////////////////////////////// Mobile ////////////////////////////////////////////
        <div className="flex flex-col items-center justify-around">
          {
            // eslint-disable-next-line react/prop-types
            images.map((image, index) => (
              <div key={index} className="p-3">
                <img
                  className="rounded-lg object-cover   items-center"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))
          }
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
            className="w-[70%]  p-16 lg:pt-2 lg:p-5 flex flex-col justify-center absolute right-0"
            id="FULL IMAGE HERE"
          >
            <div className="container mx-auto h-auto mt-96 max-h-[89vh]">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                selectedItem={selectedImageIndex}
                className=" rounded-xl"
              >
                {
                  // eslint-disable-next-line react/prop-types
                  images.map((image, index) => (
                    <div
                      key={index}
                      // className="h-screen overflow-scroll flex items-start justify-center"
                      className="h-screen overflow-scroll flex items-start justify-center"
                    >
                      <img
                        className="rounded-lg object-cover p-10 pb-96 items-center"
                        src={image}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
