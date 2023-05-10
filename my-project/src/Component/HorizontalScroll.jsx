import React from 'react';

const HorizontalScrollWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-scroll w-full">
        <div className="flex space-x-4 p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollWrapper;