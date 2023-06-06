import React from 'react';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="relative">
      <img
        className="w-auto h-auto"
        src={images[currentImageIndex]}
        alt={`Carousel image ${currentImageIndex + 1}`}
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
        <button
          className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100 ml-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center p-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 rounded-full bg-white mx-1 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
