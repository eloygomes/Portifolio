import KrabSession from "./session4/krabSession";


function Carreira({
  openModal,
  setModalJobName,
  setModalJobSegment,
  setModalJobDuration,
  setModalDescJob,
  setMPos,
}) {
  return (
    <>
      <div
        className="bg-[#2A2344] w-screen h-screen items-center flex flex-row "
        id="carreira"
      >
        <div className="container mx-auto grid  h-[50%]   h-screen">
          <h1 className="text-6xl py-10 absolute mt-[100px] mx-5">Carreira</h1>
          <p className="mt-[250px] absolute mx-5">
            Na seção abaixo, apresento um panorama completo da minha experiência
            profissional até o presente momento.”
          </p>
          <div className="flex flex-row justify-between text-4xl font-extralight mt-96">
            <h1 className="h-full opacity-[0.1] hover:opacity-[0.5] cursor-pointer mx-5 transition ease-in-out delay-50 duration-300 ">
              2013
            </h1>
            <h1 className="h-full opacity-[0.2] hover:opacity-[0.6] cursor-pointer mx-5  transition ease-in-out delay-50 duration-300 ">
              2014
            </h1>
            <h1 className="h-full opacity-[0.3] hover:opacity-[0.7] cursor-pointer mx-5  transition ease-in-out delay-50 duration-300 ">
              2018
            </h1>
            <h1 className="h-full opacity-[0.4] hover:opacity-[0.8] cursor-pointer mx-5  transition ease-in-out delay-50 duration-300 ">
              2021
            </h1>
            <h1 className="h-full opacity-[0.5] hover:opacity-[0.9] cursor-pointer mx-5  transition ease-in-out delay-50 duration-300 ">
              Hoje
            </h1>
          </div>
          <KrabSession
            openModal={openModal}
            setModalJobName={setModalJobName}
            setModalJobSegment={setModalJobSegment}
            setModalJobDuration={setModalJobDuration}
            setModalDescJob={setModalDescJob}
            setMPos={setMPos}
          />
        </div>
      </div>
    </>
  );
}

export default Carreira;
