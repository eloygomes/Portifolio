import React from "react";

function Session03() {
  return (
    <>
      <div className="bg-[#19142A] w-screen h-screen flex flex-col" id="port">
        <div className="container mx-auto mt-40">
          <div className="flex flex-row">
            <div className="w-[50%] flex flex-col">
              <h1 className="">Portifólio</h1>
              <p className="max-w-md py-5 text-xs">
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
            <div className="bg-black h-[400px]">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </div>
            
            <div className="bg-black h-[400px]">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1588450523206-e0b048d8f4d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </div>
            <div className="bg-black h-[400px]">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt=""
              />
            </div>
            <div className="bg-black h-[400px]">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </div>
            <div className="bg-black h-[400px]">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1423110041833-0d5dfcc552e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80"
                alt=""
              />
            </div>
            <div className="bg-black h-[400px]">
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1554222725-5cd0bf9c6da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button className="bg-[#D6223B] m-10">Veja mais</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session03;
