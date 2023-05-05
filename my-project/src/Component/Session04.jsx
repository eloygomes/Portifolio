import React from "react";
import Timeline from "./session4/Timeline";
import TimelineYears from "./session4/TimelineYears";

function Session04() {
  return (
    <>
      <div
        className="bg-[#2A2344] w-screen h-screen flex flex-row"
        id="carreira"
      >
        <div className="w-full p-10 flex flex-col mt-48 overflow-x-auto ">
          <TimelineYears />
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default Session04;
