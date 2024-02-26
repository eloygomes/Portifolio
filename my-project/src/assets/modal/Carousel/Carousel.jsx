/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// eslint-disable-next-line react/prop-types
const ImageCarousel = ({ images, subSession }) => {
  const [selectedImageIndex] = useState(0);
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(null);

  useEffect(() => {
    const handleImageLoad = (event) => {
      const imageWidth = event.target.naturalWidth;
      setImageWidth(imageWidth);
    };

    const imageElement = document.createElement("img");
    imageElement.src = images[firstImageIndex];
    imageElement.addEventListener("load", handleImageLoad);

    return () => {
      imageElement.removeEventListener("load", handleImageLoad);
    };
  }, [firstImageIndex, images]);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setFirstImageIndex(newIndex);
  };

  return (
    <>
      {window.innerWidth <= 961 ? (
        // Renderização para dispositivos móveis
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
        // Renderização para desktop
        <div
          className="flex flex-row items-center justify-around"
          id="imageCarouselHere"
        >
          <div
            className="w-[70%]  p-16 lg:pt-2 lg:p-5 xl:p-5 2xl:p-5 flex flex-col justify-center absolute right-0 t-0"
            id="FULL IMAGE HERE"
          >
            <div className="container mx-auto h-auto mt-64 xl:mt-64 2xl:mt-0 max-h-[89vh]">
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
                  ? images.map((image, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center h-screen`}
                        style={{ overflow: "hidden" }}
                      >
                        <img
                          className={`${
                            index === firstImageIndex
                              ? "p-16 pb-96"
                              : "p-0 pb-0"
                          } rounded-lg object-cover max-h-[89vh]`}
                          src={image}
                          alt={`Image ${index + 1}`}
                          loading="lazy"
                          style={{
                            maxHeight: "700px",
                            maxWidth: "700px%",
                            width: "auto",
                            height: "auto",
                          }}
                        />
                      </div>
                    ))
                  : // eslint-disable-next-line react/prop-types
                    images.map((image, index) => (
                      <div
                        key={index}
                        className={`${
                          index === firstImageIndex ? "h-screen" : "h-auto"
                        } overflow-scroll overflow-x-hidden flex items-start justify-center  imgstyle`}
                      >
                        <img
                          className={`${
                            index === firstImageIndex
                              ? "p-16 pb-96"
                              : "p-0 pb-0"
                          } rounded-lg object-cover items-center mt-24`}
                          src={image}
                          alt={`Image ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
              </Carousel>
              {imageWidth && <p>A largura da imagem é {imageWidth} pixels.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
