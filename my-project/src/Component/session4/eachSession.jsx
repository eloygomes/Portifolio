function EachSession({
  // eslint-disable-next-line react/prop-types
  jobPosition,  jobName,  jobSegment,  jobDuration,  setModalStatus,  setcareerModalInfo,  jobDesc
}) {
  return (
    <div
      className="relative sm:mb-0  h-full bottom-0 mx-2  py-8 px-5 rounded-xl border-[1px] border-[#19142A] border-solid cursor-pointer  hover:bg-[#19142A] hover:rounded-xl hover:border-[#d6223b] drop-shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
      onClick={() => {
        setModalStatus(true);
        setcareerModalInfo({
          jobPosition: jobPosition,
          jobName: jobName,
          jobSegment: jobSegment,
          jobDescription: jobDesc,
        });
      }}
    >
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-800 dark:text-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div className="mt-3 sm:pr-8 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white h-20">
          {jobPosition}
        </h3>
        <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">
          {jobName}
        </h3>
        <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
          {jobSegment}
        </h3>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400 mt-1 max-w-lg whitespace-nowrap">
          {jobDuration}
        </p>
      </div>
    </div>
  );
}

export default EachSession;
