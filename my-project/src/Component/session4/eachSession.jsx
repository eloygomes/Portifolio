/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function EachSession({
  jobPosition,
  jobName,
  jobSegment,
  jobDuration,
  setModalStatus,
  setcareerModalInfo,
  jobDesc,
  jobTools,
  jobImg,
  jobAdress,
  delayForEach,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const animationControls = useAnimation();
  const dispatch = useDispatch();

  const parsedTools = useMemo(() => {
    if (Array.isArray(jobTools)) return jobTools;
    if (typeof jobTools === "string") {
      return jobTools
        .split(",")
        .map((tool) => tool.trim())
        .filter(Boolean);
    }
    return [];
  }, [jobTools]);

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const openModal = () => {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    dispatch({ type: "hold" });
    setModalStatus(true);
    setcareerModalInfo({
      jobPosition,
      jobName,
      jobSegment,
      jobAdress,
      jobDuration,
      jobDescription: jobDesc,
      jobTools: parsedTools,
      jobImg,
    });
  };

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={animationControls}
      transition={{ duration: 0.35, delay: delayForEach }}
      onClick={openModal}
      className="group relative flex h-full xs:min-h-96 sm:min-h-96 md:min-h-96 lg:min-h-92 xl:min-h-92 cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-xl shadow-xl shadow-black/30 transition hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 justify-between"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[10px] tracking-[0.2em] text-[#D6223B] ring-1 ring-white/20">
            ●
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
            {jobPosition}
          </h3>
          <p className="text-sm text-white/80">{jobName}</p>
          <p className="text-xs text-white/60">{jobSegment}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
            {jobDuration}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        {parsedTools.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 text-[8px] uppercase tracking-[0.2em] text-white/50 ">
            {parsedTools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-1"
              >
                {tool}
              </span>
            ))}
            {parsedTools.length > 3 && (
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                +{parsedTools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default EachSession;
