import React from "react";
import EachSession from "./eachSession";

function KrabSession() {
  return (
    <div>
      <div className="wrapper   flex flex-row ">
        <ol className="w-max grid grid-rows-1 grid-cols-11">
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        <EachSession/>
        
        </ol>
      </div>
    </div>
  );
}

export default KrabSession;
