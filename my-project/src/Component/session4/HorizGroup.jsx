/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import EachSession from "./eachSession";
import { carrerDataInfo } from "../PortS/carrerData";

const careerEntries = [
  carrerDataInfo.job01,
  carrerDataInfo.job02,
  carrerDataInfo.job03,
  carrerDataInfo.job04,
  carrerDataInfo.job05,
  carrerDataInfo.job06,
];

function HorizGroup({ setModalStatus, setcareerModalInfo }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () =>
      typeof window !== "undefined" && window.innerWidth <= 1024;
    setIsMobile(checkIsMobile());

    const onResize = () => setIsMobile(checkIsMobile());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const entriesToRender = useMemo(
    () => (isMobile ? [...careerEntries].reverse() : careerEntries),
    [isMobile]
  );

  return (
    <div className="w-full flex items-center justify-center h-auto py-10">
      <ol className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-7 auto-rows-[1fr]">
        {entriesToRender.map((job, index) => (
          <EachSession
            key={job.jobName + job.jobPosition}
            jobPosition={job.jobPosition}
            jobName={job.jobName}
            jobSegment={job.jobSegment}
            jobAdress={job.jobAdress || job.jobAddress || ""}
            jobDuration={job.jobDuration}
            jobDesc={job.jobDesc}
            jobTools={
              Array.isArray(job.jobTools)
                ? job.jobTools.join(",")
                : job.jobTools
            }
            jobImg={job.jobImg}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={0.4 + index * 0.12}
          />
        ))}
      </ol>
    </div>
  );
}

export default HorizGroup;
