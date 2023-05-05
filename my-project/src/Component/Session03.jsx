import React from "react";

function Session03() {
  return (
    <>
      <div className="bg-[#19142A] w-screen h-screen flex flex-col" id="port">
        <div className="container mx-auto mt-40">
          <div className="flex flex-row">
            <div className="w-[50%] flex flex-col">
              <h1 className="">Portifolio</h1>
              <p className="max-w-md text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                unde, dolore, nam ullam commodi laboriosam aliquid odit harum
                doloremque ex labore totam veniam quod assumenda, nulla earum
                rerum explicabo ipsa!
              </p>
            </div>
            <div className="w-[50%] flex flex-row justify-end ">
              <button className="mt-5 h-[50px] bg-[#19142A] text-white border border-white">
                Projetos Pessoais
              </button>
              <button className="mt-5 h-[50px] bg-[#19142A] text-white border border-white ml-10">
                Projetos Profissionais
              </button>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-6 grid-rows-1 text-center pt-10 cursor-pointer">
            <div className="bg-black">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out"
                src="http://static.baubauhaus.com/assets/42750_270.jpg"
                alt=""
              />
            </div>
            <div className="bg-black">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out"
                src="http://static.baubauhaus.com/assets/42741_270.jpg"
                alt=""
              />
            </div>
            <div className="bg-black">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out"
                src="http://static.baubauhaus.com/assets/42727_270.jpg"
                alt=""
              />
            </div>
            <div className="bg-black">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out"
                src="http://static.baubauhaus.com/assets/42721_270.jpg"
                alt=""
              />
            </div>
            <div className="bg-black">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out"
                src="http://static.baubauhaus.com/assets/42737_270.jpg"
                alt=""
              />
            </div>
            <div className="bg-black">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out"
                src="http://static.baubauhaus.com/assets/42704_270.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button className="bg-[#D6223B] m-10" >Veja mais</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session03;
