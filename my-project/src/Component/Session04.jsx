import React from "react";
import Timeline from "./session4/Timeline";
import TimelineYears from "./session4/TimelineYears";
import KrabSession from "./session4/krabSession";


function Session04() {
  return (
    <>
      <div
        className="bg-[#2A2344] w-screen h-screen items-center flex flex-row"
        id="carreira"
      >
        <div className="w-full p-4 grid  overflow-x-auto ">
          <h1 className="text-6xl py-10 absolute mt-[-150px]">Carreira</h1>
          <KrabSession/>
        </div>
      </div>
    </>
  );
}

export default Session04;
