import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      {window.innerWidth <= 961 ? (
        <div className="flex flex-col-reverse items-center justify-around">
          <div className="w-auto m-5 p-2 max-w-2xl mt-8 grid grid-cols-6 gap-2 ">
            {
              // eslint-disable-next-line react/prop-types
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="cursor-pointer rounded-sm shadow-sm"
                  onClick={() => handleImageClick(index)}
                />
              ))
            }
          </div>
          <div className="sm:w-full md:w-full lg:w-full h-fit flex flex-col justify-center mt-10 relative ">
            <div className="container mx-auto">
              <Carousel
                showArrows={true}
                showStatus={true}
                showIndicators={false}
                showThumbs={false}
                selectedItem={selectedImageIndex}
                className="mx-10 rounded-xl"
              >
                {
                  // eslint-disable-next-line react/prop-types
                  images.map((image, index) => (
                    <div key={index}>
                      <img
                        className="rounded-lg object-cover p-10  items-center"
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
      ) : (
        // Desktop
        <div
          className="flex flex-row items-center justify-around"
          id="imageCarouselHere"
        >
          {/* <div
            className="w-[50%] m-5 p-2 max-w-2xl mt-8 grid grid-cols-6 gap-4 lg:gap-1 "
            id="THUMBPREVIEW"
          >
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
          </div> */}
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
