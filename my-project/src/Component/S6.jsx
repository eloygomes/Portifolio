import React from "react";
import HorizontalScroll from "./HorizontalScroll";

function S6() {
  return (
    <div className="w-screen h-screen bg-pink-200">
      <HorizontalScroll>
        <div className="w-[200px] bg-green-200 text-black h-screen" >Content 1</div>
        <div style={{ width: 200 }}>Content 2</div>
        <div style={{ width: 200 }}>Content 3</div>
      </HorizontalScroll>
    </div>
  );
}

export default S6;
