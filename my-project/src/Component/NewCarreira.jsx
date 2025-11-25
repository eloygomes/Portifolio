// export default NewCarreira;
import { useState, useLayoutEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import HorizGroup from "./session4/HorizGroup";
import ModalCareer from "../assets/modal/ModalCareer";

function NewCarreira() {
  const [modalStatus, setModalStatus] = useState(false);
  const [careerModalInfo, setcareerModalInfo] = useState({});

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const dispatch = useDispatch();

  function particlesOff() {
    return { type: "off" };
  }

  function particlesOn() {
    return { type: "on" };
  }

  function currentSession() {
    return { type: "carreira" };
  }

  useLayoutEffect(() => {
    if (modalStatus) {
      dispatch(particlesOff());
    } else {
      dispatch(particlesOn());
    }
  }, [modalStatus, dispatch]);

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      dispatch(currentSession());
    }
  }, [isInView, menuDisplayOpt, dispatch, mainControls]);

  return (
    <>
      <ModalCareer
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        careerModalInfo={careerModalInfo}
      />

      <section
        id="carreira"
        ref={ref}
        className="w-full xs:h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen bg-[#2A2344] text-white"
      >
        {/* uso só padding lateral, sem limitar muito a largura */}
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-16 2xl:px-24 py-20 lg:py-28 2xl:py-32 flex flex-col justify-center">
          {/* <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl"
          >
            Carreira
          </motion.h1> */}

          <h2 className="text-3xl md:text-4xl font-bold mb-3">Carreira</h2>

          {/* separador sutil */}
          {/* <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}

          {/* Cabeçalho da linha do tempo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <h2 className="text-base sm:text-lg font-semibold">
              Linha do tempo
            </h2>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/50">
              Experiências &amp; transições de carreira
            </p>
          </motion.div>

          {/* Linha do tempo em tela cheia – cards ocupam toda a largura */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="mt-6"
          >
            <div className="relative w-full">
              {/* linha sutil por trás dos cards, mais moderna */}
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              {/* wrapper da timeline: ocupa toda a largura, sem card externo */}
              <div className="relative w-full flex justify-center">
                <HorizGroup
                  modalStatus={modalStatus}
                  setModalStatus={setModalStatus}
                  setcareerModalInfo={setcareerModalInfo}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default NewCarreira;
