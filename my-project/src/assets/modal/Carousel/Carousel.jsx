import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images, subSession }) => {
  const [selectedImageIndex] = useState(0);
  const [firstImageIndex, setFirstImageIndex] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setFirstImageIndex(newIndex);
  };

  // console.log("subSession", subSession);

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
                  className="rounded-lg object-cover items-center"
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
            className="w-[70%]  p-16 lg:pt-2 lg:p-5 xl:p-5 2xl:p-5 flex flex-col justify-center absolute right-0 "
            id="FULL IMAGE HERE"
          >
            <div className="container mx-auto h-auto mt-64 xl:mt-64 2xl:mt-56 max-h-[89vh]">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                selectedItem={selectedImageIndex}
                className="carrao rounded-xl"
                beforeChange={handleBeforeChange}
              >
                {subSession === "foto"
                  ? // eslint-disable-next-line react/prop-types
                    images.map((image, index) => (
                      <div
                        key={index}
                        className={` h-[500px] overflow-hidden flex items-start justify-center `}
                      >
                        <img
                          // className="rounded-lg object-cover p-16 pb-96 items-center"
                          className={`p-0 rounded-lg object-cover items-center w-auto h-full img-itself`}
                          src={image}
                          alt={`Image ${index + 1}`}
                        />
                      </div>
                    ))
                  : // eslint-disable-next-line react/prop-types
                    images.map((image, index) => (
                      <div
                        key={index}
                        className={`${
                          index === firstImageIndex ? "h-screen" : "h-auto"
                        } overflow-scroll overflow-x-hidden flex items-start justify-center max-h-[40rem] imgstyle`}
                      >
                        <img
                          // className="rounded-lg object-cover p-16 pb-96 items-center"
                          className={`${
                            index === firstImageIndex
                              ? "p-16 pb-96"
                              : "p-0 pb-0"
                          } rounded-lg object-cover items-center`}
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
