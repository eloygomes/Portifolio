import { useLayoutEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function EachSession({
  // eslint-disable-next-line react/prop-types
  jobPosition,
  // eslint-disable-next-line react/prop-types
  jobName,
  // eslint-disable-next-line react/prop-types
  jobSegment,
  // eslint-disable-next-line react/prop-types
  jobDuration,
  // eslint-disable-next-line react/prop-types
  setModalStatus,
  // eslint-disable-next-line react/prop-types
  setcareerModalInfo,
  // eslint-disable-next-line react/prop-types
  jobDesc,
  // eslint-disable-next-line react/prop-types
  jobTools,
  // eslint-disable-next-line react/prop-types
  jobImg,
  // eslint-disable-next-line react/prop-types
  jobAdress,
  // eslint-disable-next-line react/prop-types
  delayForEach,
}) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [eachTag, setEachTag] = useState([]);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  // console.log(jobTools)

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const jobToolsArray = jobTools.split(",");
    // console.log(jobToolsArray);
    setEachTag(jobToolsArray);
  }, [jobTools]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: delayForEach }}
        className="relative sm:mb-0  h-full bottom-0 mx-2 p-3 sm:py-8 lg:py-8 2xl:py-8 sm:px-5 lg:px-3 2xl:px-5 rounded-xl backdrop-blur-xl bg-white/10 cursor-pointer hover:scale-150 duration-300 hover:bg-[#19142A] hover:rounded-xl drop-shadow-md transition ease-in-out delay-50 hover:-translate-y-1  "
        onClick={() => {
          setModalStatus(true);
          setcareerModalInfo({
            jobPosition: jobPosition,
            jobName: jobName,
            jobSegment: jobSegment,
            jobAdress: jobAdress,
            jobDuration: jobDuration,
            jobDescription: jobDesc,
            jobTools: eachTag,
            jobImg: jobImg,
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
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
        </div>
        <div className="mt-3 sm:pr-8 flex flex-col min-h-[150px]">
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="sm:text-lg lg:text-base 2xl:text-lg font-semibold text-white h-16"
          >
            {jobPosition}
          </motion.h3>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="block mb-2 text-sm font-normal  text-gray-100 "
          >
            {jobName}
          </motion.h3>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="block mb-5 text-xs font-normal text-gray-100"
          >
            {jobSegment}
          </motion.h3>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="text-xs font-normal text-gray-100 dark:text-gray-400 mt-1 max-w-lg whitespace-nowrap absolute bottom-8"
          >
            {jobDuration}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default EachSession;
