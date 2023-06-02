


function BioSessionCard(props) {
  return (
    <>
      <div className="my-5  p-5 rounded-xl  backdrop-blur-xl bg-white/10 hover:bg-white/20  drop-shadow-md w-1/4 min-w-1/4 mr-5 cursor-pointer">
        <h1 className="text-3xl uppercase font-bold">{props.PositionName}</h1>
        <div className="flex flex-row justify-between mt-5">
          <h2 className="text-sm font-bold">{props.CompanyName}</h2>
          <h4 className="text-xs font-bold">{props.Date}</h4>
        </div>
        <p className="text-sm py-2 min-h-[100px] ">
          {props.Description}
        </p>
      </div>
    </>
  );
}

export default BioSessionCard;
