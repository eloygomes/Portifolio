import { useState, useEffect } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

function BioSessionCard(props) {
  // eslint-disable-next-line no-unused-vars
  const [CollapseStatus, setCollapseStatus] = useState(false);

  useEffect(() => {
    window.innerWidth >= 961
      ? setCollapseStatus(true)
      : setCollapseStatus(false);
  }, []);

  return (
    <>
      {window.innerWidth <= 961 ? (
        <div className="w-auto min-w-1/4 mx-2 mb-5 py-1 rounded-xl drop-shadow-md cursor-pointer">
          <div id="accordionExample">
            <div className="rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 ">
              <h2 className="mb-0" id="headingOne">
                <button
                  className="group relative flex w-full ] backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left "
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
                    {CollapseStatus ? <BsArrowDownShort /> : <BsArrowUpShort />}
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
        <div className="min-w-[25%] p-2 rounded-xl drop-shadow-md cursor-pointer">
          <div className="rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 ">
            <h2 className="" id="headingOne ">
              <button
                className="group relative flex w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left min-h-[80px] py-5 "
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
                  {CollapseStatus ? <BsArrowDownShort /> : <BsArrowUpShort />}
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              // eslint-disable-next-line react/prop-types
              className={`${
                CollapseStatus ? "flex flex-col" : "hidden"
              } text-start min-h-[250px]`}
              
            >
              <div className="w-full  flex flex-row justify-between px-5 py-2 mb-3 mt-5  top-32">
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
              <div className="px-5 py-4 rounded-xl text-xs">
                {
                  // eslint-disable-next-line react/prop-types
                  props.Description
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BioSessionCard;
