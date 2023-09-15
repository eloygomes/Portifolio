import { useState, useLayoutEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import HorizGroup from "./session4/HorizGroup";

import ModalCareer from "../assets/modal/ModalCareer";

function Carreira() {
  // Control modal state
  const [modalStatus, setModalStatus] = useState(false);
  // Handle page scroll
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [careerModalInfo, setcareerModalInfo] = useState({});

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const dispatch = useDispatch();

  // Redux
  function particlesOff() {
    return { type: "off" };
  }

  function particlesOn() {
    return { type: "on" };
  }

  function currentSession() {
    return { type: "carreira" };
  }

  // FUNCTIONS //
  //Handle page scroll
  const handleToggleScroll = () => {
    if (scrollEnabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setScrollEnabled(!scrollEnabled);
  };

  // USER EFFECTS //
  useLayoutEffect(() => {
    if (isInView) {
      // dispatch(particlesOn());
      mainControls.start("visible");
      dispatch(currentSession());
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (modalStatus) {
      dispatch(particlesOff());
    } else {
      dispatch(particlesOn());
    }
    handleToggleScroll();
  }, [modalStatus]);

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // console.log(menuDisplayOpt);
  // console.log(modalStatus)

  return (
    <>
      <ModalCareer
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        careerModalInfo={careerModalInfo}
      />
      {/* 
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////// MOBILE //////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         */}
      {window.innerWidth <= 961 ? (
        <div
          className="bg-[#2A2344] w-screen h-full  items-center flex flex-row "
          id="carreira"
        >
          <div className="container mx-auto grid sm:h-screen h-full sm:mb-0 mb-20">
            <motion.h1
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-6xl py-10 absolute mt-10 mx-10"
            >
              Carreira
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-44 absolute mx-10"
            >
              Na seção abaixo, apresento um panorama completo da minha
              experiência profissional até o presente momento.”
            </motion.p>

            {/* //////////////////////////////////////////////////////////////////////// :: CARREIRAS :: //////////////////////////////////////////////////////////////////////// */}

            <HorizGroup
              modalStatus={modalStatus}
              setModalStatus={setModalStatus}
              setcareerModalInfo={setcareerModalInfo}
            />
          </div>
        </div>
      ) : (
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////// DESKTOP //////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <div
          className="bg-[#2A2344] w-screen h-full  items-center flex flex-row "
          id="carreira"
        >
          <div className="container mx-auto grid sm:h-screen h-full sm:mb-0 mb-20">
            <motion.h1
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-6xl py-10 absolute mt-[100px] mx-5"
            >
              Carreira
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-[250px] absolute mx-5"
            >
              Na seção abaixo, apresento um panorama completo da minha
              experiência profissional até o presente momento.”
            </motion.p>

            {/* //////////////////////////////////////////////////////////////////////// :: CARREIRAS :: //////////////////////////////////////////////////////////////////////// */}
            <div className="h-full flex flex-row justify-between text-4xl font-extralight mt-96 overflow-x-scroll ">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 0.1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex-1 h-full opacity-[0.1] hover:opacity-[0.5] cursor-pointer mx-5  "
              >
                2013
              </motion.h1>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 0.2, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex-1 h-full opacity-[0.2] hover:opacity-[0.6] cursor-pointer mx-5   "
              >
                2014
              </motion.h1>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 0.3, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex-1 h-full opacity-[0.3] hover:opacity-[0.7] cursor-pointer mx-5   "
              >
                2018
              </motion.h1>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 0.4, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.95 }}
                className="flex-1 h-full opacity-[0.4] hover:opacity-[0.8] cursor-pointer mx-5   "
              >
                2021
              </motion.h1>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 0.5, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex-1 h-full opacity-[0.5] hover:opacity-[0.9] cursor-pointer mx-5   "
              >
                Hoje
              </motion.h1>
            </div>

            <HorizGroup
              modalStatus={modalStatus}
              setModalStatus={setModalStatus}
              setcareerModalInfo={setcareerModalInfo}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Carreira;
