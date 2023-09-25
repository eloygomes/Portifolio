import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ArrowComponent = () => {
  const [currentArrow, setCurrentArrow] = useState(0);
  const [arrowDelay, setArrowDelay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArrow((prevArrow) => (prevArrow === 2 ? 0 : prevArrow + 1));
      setArrowDelay((prevDelay) => prevDelay + 500);
    }, 500);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className='flex flex-col justify-between'>
     
        <IoIosArrowDown className='top-1' size={32}  />
        <IoIosArrowDown className='top-2' size={32}  />
        <IoIosArrowDown className='top-3 hover:opacity-0 cursor-pointer hover:scale-105' size={32}  />
     
       
        </div>
      </div>
    </div>
  );
};

export default ArrowComponent;
