import  { useState } from 'react';

const PopoverWrapper = ({ children, dealWithTextTitle, PositionName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="group relative flex w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left md:text-xs lg:text-sm min-h-[50px] h-fit pt-4 pb-4 text-[.6rem]"
        type="button"
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(!isOpen)}
      >
        {dealWithTextTitle ? dealWithTextTitle() : children}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bottom p-1  backdrop-blur-xl bg-white/90 text-gray-500 text-xs  p-2  rounded-sm shadow">
          {/* {children}  */}
          {PositionName} 
        </div>
      )}
    </div>
  );
};

export default PopoverWrapper;
