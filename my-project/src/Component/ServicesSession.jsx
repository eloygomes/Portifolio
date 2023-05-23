import { useState } from "react";

import img1 from "../assets/bg-img-1.jpg";
import img2 from "../assets/bg-img-2.jpg";

function ServicesSession() {
  const [servBg, setServBg] = useState(`bg-pink-400`);

  const setWall = (sessioon) => {
    if (sessioon === "branding") {
      setServBg(`bg-orange-400`);
    } else {
      setServBg(`bg-[url('${img1}')]`);
    }
  };

  // console.log(servBg);
  console.log(img1)
  console.log(img2)

  return (
    <>
      {/* <div
        className={`w-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-[url('${servBg}')]`}
        id="services"
      > */}
      <div
        className={`w-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat ${servBg}`}
        id="services"
      >
        <div
          className={`w-screen h-screen flex bg-black absolute opacity-90 `}
        ></div>
        <h1 className="text-6xl">UI/UX</h1>
        <div className="container mx-auto mt-28">
          <div className="flex flex-row">
            <h1 className="text-6xl py-10 absolute mt-[100px] mx-5">
              Serviços
            </h1>
            <p className="mt-[250px] absolute mx-5">
              Na seção abaixo, apresento um panorama completo da minha
              experiência profissional até o presente momento.”
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-80 ">
          <div className="flex flex-row cursor-pointer absolute">
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300"
              onMouseEnter={() => setWall("iuui")}
            >
              UI/UX
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300"
              onMouseEnter={() => {
                setWall("branding");
              }}
            >
              BRANDING
            </div>
            <div className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300">
              IMPRESSOS
            </div>
            <div className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300">
              FOTOGRAFIA
            </div>
            <div className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300">
              EDIÇÃO
            </div>
            <div className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300">
              PODCAST
            </div>
          </div>
        </div>
        {/* <img src={img2} className=" absolute w-screen left-0" alt="" /> */}
      </div>
    </>
  );
}

export default ServicesSession;
