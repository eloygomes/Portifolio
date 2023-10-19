import { useState, useLayoutEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import HorizGroup from "./session4/HorizGroup";

import ModalCareer from "../assets/modal/ModalCareer";

function NewCarreira() {
  // Control modal state
  const [modalStatus, setModalStatus] = useState(false);
  // Handle page scroll
  // const [scrollEnabled, setScrollEnabled] = useState(false);
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
  // const handleToggleScroll = () => {
  //   if (scrollEnabled) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   setScrollEnabled(!scrollEnabled);
  // };

  useLayoutEffect(() => {
    if (modalStatus) {
      dispatch(particlesOff());
    } else {
      dispatch(particlesOn());
    }
    if (isInView) {
      // handleToggleScroll();
    }
  }, [modalStatus]);

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // USER EFFECTS //
  useLayoutEffect(() => {
    if (isInView) {
      // dispatch(particlesOn());
      mainControls.start("visible");
      dispatch(currentSession());
      console.log("Carreira");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      // dispatch(particlesOn());
      mainControls.start("visible");
      dispatch(currentSession());
      console.log("Carreira");
    }
  }, [menuDisplayOpt]);

  // // USER EFFECTS //
  // useLayoutEffect(() => {
  //   if (isInView) {
  //     // dispatch(particlesOn());
  //     mainControls.start("visible");
  //     dispatch(currentSession());
  //     console.log("Carreira");
  //   }
  // }, [isInView]);

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
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////// MOBILE //////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         */}
      {window.innerWidth <= 1025 ? (
        <div
          className="bg-[#2A2344] w-screen h-full sm:h-screen md:h-full lg:h-screen xl:h-full 2xl:h-full  items-center flex flex-row "
          id="carreira"
          ref={ref}
        >
          <div className="container mx-auto grid h-full lg:mt-32 sm:mb-0 mb-20 p-5">
            <motion.h1
              // ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-6xl mt-10 pl-2 sm:pl-3 md:pl-16 lg:pl-20 xl:pl-2 2xl:pl-2 absolute "
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
              className="mt-40 absolute w-[90vw] pl-3 sm:px-5 md:px-16 lg:pl-20 xl:pl-5 2xl:pl-5  "
            >
              Na seção abaixo, apresento um panorama da minha experiência
              profissional até o presente momento.”
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
          // ref={ref}
        >
          <div className="container mx-auto grid sm:h-screen h-full 2xl:min-h-screen  sm:mb-0 mb-20">
            <div className="flex flex-col px-32">
              <motion.h1
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-5xl lg:text-3xl 2xl:text-5xl py-10 lg:px-20 2xl:px-0 absolute mt-[100px] mx-5"
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
                className="lg:mt-[210px] 2xl:mt-[210px] absolute mx-5 lg:px-20 2xl:px-0"
              >
                Na seção abaixo, apresento um panorama da minha experiência
                profissional até o presente momento.”
              </motion.p>
            </div>

            {/* //////////////////////////////////////////////////////////////////////// :: CARREIRAS :: //////////////////////////////////////////////////////////////////////// */}
            <div className="h-fit flex flex-row justify-between lg:mx-20 2xl:mx-1 lg:text-2xl 2xl:text-4xl font-extralight lg:mt-64 2xl:mt-60 2xl:overflow-hidden overflow-x-scroll ">
              <div className="container mx-auto">
                <div className="flex items-center justify-center h-full overflow-x-hidden overflow-y-hidden">
                  <div className="flex flex-row justify-between items-baseline lg:items-baseline xl:items-baseline 2xl:items-baseline 2xl:max-w-[64vw] h-full 2xl:w-full xl:text-[1.7rem] 2xl:text-2xl">
                    <motion.h1
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 0.1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex-1  opacity-[0.1] hover:opacity-[0.5] cursor-pointer mx-5 hover:text-[#D6223B] "
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
                      className="flex-1  opacity-[0.2] hover:opacity-[0.6] cursor-pointer mx-5 hover:text-[#D6223B]  "
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
                      className="flex-1  opacity-[0.3] hover:opacity-[0.7] cursor-pointer mx-5 hover:text-[#D6223B]  "
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
                      className="flex-1  opacity-[0.4] hover:opacity-[0.8] cursor-pointer mx-5 hover:text-[#D6223B]  "
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
                      className="flex-1  opacity-[0.5] hover:opacity-[0.9] cursor-pointer mx-5 hover:text-[#D6223B] "
                    >
                      Hoje
                    </motion.h1>
                  </div>
                </div>
              </div>
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

export default NewCarreira;
