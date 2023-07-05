import { useState, useEffect, useRef } from "react";

import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import PopoverWrapper from "../suport/PopoverWrapper";

function BioSessionCard(props) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const [CollapseStatus, setCollapseStatus] = useState(
    props.FormationCollapseStatus
  );

  const ref = useRef();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setCollapseStatus(props.FormationCollapseStatus);
    // eslint-disable-next-line react/prop-types
  }, [props.FormationCollapseStatus]);

  useEffect(() => {
    // console.log(ref.current?.clientHeight);
    // console.log(ref.current?.clientWidth);
    console.log(typeof props.PositionName);
  }, [props.PositionName]);

  // console.log(props.PositionName);
  // console.log(props.PositionName.innerHeight)

  const headingOneRef = useRef(null);

  useEffect(() => {
    if (headingOneRef.current) {
      console.log(headingOneRef.current.offsetHeight);
    }
  }, []);

  const dealWithTextTitle = () => {
    const positionName = props.PositionName;
    // eslint-disable-next-line no-unused-vars

    if (window.innerWidth <= 961) {
      const shortenedPositionName =
        // eslint-disable-next-line react/prop-types
        positionName.length > 20
          ? positionName.slice(0, 17) + "..."
          : positionName;

      return shortenedPositionName;
    }

    if (window.innerWidth > 961) {
      const shortenedPositionName =
        // eslint-disable-next-line react/prop-types
        positionName;

      return shortenedPositionName;
    }
  };

  return (
    <>
      {/* {window.innerWidth <= 961 ? ( */}
      {window.innerWidth <= 767 ? (
        <div className="w-auto min-w-1/4 mx-2 mb-5 py-1 rounded-xl drop-shadow-md cursor-pointer">
          <div id="accordionExample">
            <div className="rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 max-w-md min-w-full ">
              <h2 className="mb-0" id="headingOne">
                <button
                  ref={ref}
                  className="group relative flex sm:w-full w-full md:w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left md:min-w-[150px] md:max-w-[250px] "
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
                className={`${
                  CollapseStatus ? "flex flex-col" : "hidden"
                } text-start`}
                // className={props.FormationCollapseStatus ? "flex" : "hidden"}
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
        // Desktop
        <div className="min-w-[25%] p-2 rounded-xl drop-shadow-md cursor-pointer">
          <div
            className={`rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 `}
          >
            <div className="headingOne" ref={headingOneRef}>
              {headingOneRef.current?.offsetHeight > 50 ? (
                
                <button
                  className="group relative flex w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left md:text-xs lg:text-sm min-h-[50px] h-fit pt-4 pb-4 text-[.6rem]"
                  type="button"
                  onClick={() => {
                    setCollapseStatus(!CollapseStatus);
                  }}
                >
                  {
                    // eslint-disable-next-line react/prop-types
                    // props.PositionName + "..."
                    // shortenedPositionName
                    dealWithTextTitle()
                  }
                </button>
              ) : (
                <PopoverWrapper dealWithTextTitle={dealWithTextTitle} PositionName={props.PositionName}>
                  <button
                    className="group relative flex w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-left md:text-xs lg:text-sm min-h-[50px] h-fit pt-4 pb-4 text-[.6rem]"
                    type="button"
                    onClick={() => {
                      setCollapseStatus(!CollapseStatus);
                    }}
                  >
                    {
                      // eslint-disable-next-line react/prop-types
                      // props.PositionName
                      // shortenedPositionName
                      dealWithTextTitle()
                    }
                  </button>
                </PopoverWrapper>
              )}
            </div>
            <div
              id="collapseOne"
              // eslint-disable-next-line react/prop-types
              className={`${
                CollapseStatus ? "flex flex-col" : "hidden"
              } text-start min-h-[300px] amazoniaaaaa`}
            >
              <div className="w-full  flex flex-row md:flex-col lg:flex-row justify-between p-3 mb-3  border-b-[0.5px]  top-28 mt-0">
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
              <div className="p-3 rounded-xl text-xs">
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
