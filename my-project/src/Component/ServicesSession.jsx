import { useState } from "react";

function ServicesSession() {
  const [servBg, setServBg] = useState(`session-uiiu`);

  const setWall = (sessioon) => {
    if (sessioon === "iuui") {
      setServBg("session-uiiu");
    }

    if (sessioon === "branding") {
      setServBg("session-branding");
    }

    if (sessioon === "impressos") {
      setServBg("session-impressos");
    }

    if (sessioon === "foto") {
      setServBg("session-foto");
    }

    if (sessioon === "edicao") {
      setServBg("session-edicao");
    }

    if (sessioon === "podcast") {
      setServBg("session-podcast");
    }


  };

  console.log(servBg);

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
          className={`inner-service w-screen h-screen flex bg-black absolute opacity-[.85] `}
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
              onMouseEnter={() => setWall("branding")}
            >
              BRANDING
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300"
              onMouseEnter={() => setWall("impressos")}
            >
              IMPRESSOS
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300"
              onMouseEnter={() => setWall("foto")}
            >
              FOTOGRAFIA
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300"
              onMouseEnter={() => setWall("edicao")}
            >
              EDIÇÃO
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300"
              onMouseEnter={() => setWall("podcast")}
            >
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
