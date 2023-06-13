function BioSessionCard(props) {
  return (
    <>
      <div className="w-auto sm:w-1/4 min-w-1/4 sm:mr-5 mx-5 mb-5 h-80 p-2 py-1 rounded-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 drop-shadow-md   cursor-pointer">
        <div className=" pr-5">
          <h1 className=" text-xl uppercase font-bold p-2 mb-2 mt-3 h-20 flex items-center justify-start ">
            {
              // eslint-disable-next-line react/prop-types
              props.PositionName
            }
          </h1>
        </div>
        <div className="w-full  flex flex-row justify-between px-2 py-2 mb-3 rounded-md top-28 backdrop-blur-xl bg-white/10">
          <h2 className=" text-sm font-bold">
            {
              // eslint-disable-next-line react/prop-types
              props.CompanyName
            }
          </h2>
          <h4 className=" text-xs font-bold">
            {
              // eslint-disable-next-line react/prop-types
              props.Date
            }
          </h4>
        </div>
        <div className="w-full   top-32 p-2 ">
          <p className="text-sm min-h-[100px] pr-5">
            {
              // eslint-disable-next-line react/prop-types
              props.Description
            }
          </p>
        </div>
      </div>
    </>
  );
}

export default BioSessionCard;
