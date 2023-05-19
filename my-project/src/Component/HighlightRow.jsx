

function HighlightRow() {
  return (
    <>
      <div className="bg-[#2A2344] w-screen  flex flex-row ">
        <div className="container mx-auto flex flex-row " >
            <div className="w-[25%]">
                <div className="w-[200px] border-2 border-red-500 rounded-md flex flex-col text-center w-fit p-5 m-10">
                    <h1>15</h1>
                    <h4>Anos atuando como Designer</h4>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="w-[200px] border-2 border-red-500 rounded-md flex flex-col text-center w-fit p-5 m-10">
                    <h1>UI/UX</h1>
                    <h4>Solida viviencia</h4>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="w-[200px] border-2 border-red-500 rounded-md flex flex-col text-center w-fit p-5 m-10">
                    <h1>5</h1>
                    <h4>Anos como desenvolvedor Front-End</h4>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="w-[200px] border-2 border-red-500 rounded-md flex flex-col text-center w-fit p-5 m-10">
                    <h1>+ 50</h1>
                    <h4>Clientes Atendidos</h4>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default HighlightRow;
