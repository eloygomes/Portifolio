import pic01 from "../assets/img01.01.png";

function Home() {
  return (
    <>
      <div className="bg-[#19142A] w-screen h-screen flex flex-col">
        <div className="container mx-auto mt-28">
          <div className="flex flex-row">
            <div className="w-[50%] mt-24">
              <div className="h-full flex flex-col items-start justify-center  mx-auto">
                <h1 className="py-1 text-8xl font-medium">Eloy Gomes</h1>
                <h4 className="px-1 py-1 text-4xl font-light text-left">
                  Full Stack Developer
                </h4>
              </div>
            </div>
            <div className="w-[50%] mt-24 flex flex-col">
              <img src={pic01} alt="f" className="max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
