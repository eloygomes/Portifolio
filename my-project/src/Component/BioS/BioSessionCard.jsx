import { useState } from "react";

function BioSessionCard(props) {
  // eslint-disable-next-line no-unused-vars
  const [CollapseStatus, setCollapseStatus] = useState(false);

  return (
    <>
      {window.innerWidth <= 961 ? (
        <div className="w-auto min-w-1/4 mx-5 mb-5 py-1 rounded-xl backdrop-blur-xl drop-shadow-md cursor-pointer">
          <div id="accordionExample">
            <div className="rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 ">
              <h2 className="mb-0" id="headingOne">
                <button
                  className="group relative flex w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => {
                    setCollapseStatus(!CollapseStatus);
                  }}
                >
                  {
                    // eslint-disable-next-line react/prop-types
                    props.PositionName
                  }
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                // eslint-disable-next-line react/prop-types
                className={`${
                  CollapseStatus ? "flex flex-col" : "hidden"
                } text-start`}
                // className={props.FormationCollapseStatus01 ? "flex" : "hidden"}
              >
                <div className="w-full  flex flex-row justify-between px-5 py-2 mb-3  top-32">
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
                <div className="px-5 py-4 rounded-xl">
                  {
                    // eslint-disable-next-line react/prop-types
                    props.Description
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-auto sm:w-1/4 min-w-1/4 sm:mr-5 mx-5 mb-5 h-80 p-2 py-1 rounded-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 drop-shadow-md   cursor-pointer">
          <div className=" pr-5">
            <h1 className=" text-xl uppercase font-bold p-2 mb-2 mt-3 h-20 flex items-center justify-start text-start ">
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
      )}
    </>
  );
}

export default BioSessionCard;
