import EachSession from "./eachSession";
// import carrerData from "../PortS/carrerData";

import { carrerDataInfo } from "../PortS/carrerData";

function HorizGroup({
  // eslint-disable-next-line react/prop-types
  setModalStatus,
  // eslint-disable-next-line react/prop-types
  setcareerModalInfo,
}) {
  return (
    <div className="mt-80 sm:mt-0 md:mt-64 lg:mt-0">
      <div className="wrapper flex flex-row  ">
        <ol className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6   gap-3 p-5 grid-flow-row-dense ">
          <EachSession
            jobPosition={`${carrerDataInfo.job01.jobPosition}`}
            jobName={`${carrerDataInfo.job01.jobName}`}
            jobSegment={`${carrerDataInfo.job01.jobSegment}`}
            jobAdress={`${carrerDataInfo.job01.jobAddress}`}
            jobDuration={`${carrerDataInfo.job01.jobDuration}`}
            jobDesc={`${carrerDataInfo.job01.jobDesc}`}
            jobTools={`${carrerDataInfo.job01.jobTools}`}
            jobImg={`${carrerDataInfo.job01.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={0.5}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job02.jobPosition}`}
            jobName={`${carrerDataInfo.job02.jobName}`}
            jobSegment={`${carrerDataInfo.job02.jobSegment}`}
            jobAdress={`${carrerDataInfo.job02.jobAdress}`}
            jobDuration={`${carrerDataInfo.job02.jobDuration}`}
            jobDesc={`${carrerDataInfo.job02.jobDesc}`}
            jobTools={`${carrerDataInfo.job02.jobTools}`}
            jobImg={`${carrerDataInfo.job02.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={0.7}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job03.jobPosition}`}
            jobName={`${carrerDataInfo.job03.jobName}`}
            jobSegment={`${carrerDataInfo.job03.jobSegment}`}
            jobAdress={`${carrerDataInfo.job03.jobAdress}`}
            jobDuration={`${carrerDataInfo.job03.jobDuration}`}
            jobDesc={`${carrerDataInfo.job03.jobDesc}`}
            jobTools={`${carrerDataInfo.job03.jobTools}`}
            jobImg={`${carrerDataInfo.job03.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={0.9}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job04.jobPosition}`}
            jobName={`${carrerDataInfo.job04.jobName}`}
            jobSegment={`${carrerDataInfo.job04.jobSegment}`}
            jobAdress={`${carrerDataInfo.job04.jobAdress}`}
            jobDuration={`${carrerDataInfo.job04.jobDuration}`}
            jobDesc={`${carrerDataInfo.job04.jobDesc}`}
            jobTools={`${carrerDataInfo.job04.jobTools}`}
            jobImg={`${carrerDataInfo.job04.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={1.1}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job05.jobPosition}`}
            jobName={`${carrerDataInfo.job05.jobName}`}
            jobSegment={`${carrerDataInfo.job05.jobSegment}`}
            jobAdress={`${carrerDataInfo.job05.jobAdress}`}
            jobDuration={`${carrerDataInfo.job05.jobDuration}`}
            jobDesc={`${carrerDataInfo.job05.jobDesc}`}
            jobTools={`${carrerDataInfo.job05.jobTools}`}
            jobImg={`${carrerDataInfo.job05.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={1.3}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job06.jobPosition}`}
            jobName={`${carrerDataInfo.job06.jobName}`}
            jobSegment={`${carrerDataInfo.job06.jobSegment}`}
            jobAdress={`${carrerDataInfo.job06.jobAdress}`}
            jobDuration={`${carrerDataInfo.job06.jobDuration}`}
            jobDesc={`${carrerDataInfo.job06.jobDesc}`}
            jobTools={`${carrerDataInfo.job06.jobTools}`}
            jobImg={`${carrerDataInfo.job06.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
            delayForEach={1.5}
          />
        </ol>
      </div>
    </div>
  );
}

export default HorizGroup;
