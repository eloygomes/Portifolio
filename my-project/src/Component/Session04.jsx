import React from "react";

import KrabSession from "./session4/krabSession";

function Session04() {
  return (
    <>
      <div
        className="bg-[#2A2344] w-screen h-screen items-center flex flex-row "
        id="carreira"
      >
        {/* <div className="w-full p-4  grid h-[50%] overflow-x-auto "> */}
        <div className="container mx-auto  grid h-[50%] overflow-x-auto ">
          <h1 className="text-6xl py-10 absolute mt-[-150px]">Carreira</h1>
          <p>
            Na seção abaixo, apresento um panorama completo da minha experiência
            profissional até o presente momento.”
          </p>
          <div className="flex flex-row justify-between py-20 text-4xl font-extralight opacity-25">
            <h1>2017</h1>
            <h1>2018</h1>
            <h1>2019</h1>
            <h1>2020</h1>
            <h1>2021</h1>
          </div>
          <KrabSession />
        </div>
      </div>
    </>
  );
}

export default Session04;
