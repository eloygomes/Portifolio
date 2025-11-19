// eslint-disable-next-line no-unused-vars
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Lottie from "lottie-react";
import animationData from "../assets/63487-programming-computer.json";

import "react-vertical-timeline-component/style.min.css";
import FormationRoadmap from "./FormationRoadMap";
import FormationRoadMapMOBILE from "./FormationRoadMapMOBILE";

function BioSession() {
  // const [FormationCollapseStatus, setFormationCollapseStatus] = useState(false);

  // const [mobileCollapse, setMobileCollapse] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const dispatch = useDispatch();

  const mainControls = useAnimation();

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      // console.log("bio");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      console.log("bio");
    }
  }, [menuDisplayOpt]);

  const someAnimation = useRef(null);

  function currentSession() {
    return { type: "bio" };
  }

  // console.log(menuDisplayOpt);

  return (
    <div>
      <div className=" w-screen flex flex-col mt-10 p-5" id="bio" ref={ref}>
        <div className="container mx-auto flex flex-col justify-center">
          <div className="flex flex-col ">
            {/* BOX */}
            <div className="flex flex-col items-center justify-center h-screen m-5 p-5">
              <div className="backdrop-blur-xl bg-white/10 sm:p-5  md:p-5 lg:p-5 xl:p-5 2xl:p-5 lg:m-32 2xl:m-32 lg:mx-16 sm:my-40 lg:mt-40 2xl:mt-40 my-00 rounded-xl ">
                <div className="flex flex-col-reverse sm:flex-flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-row 2xl:flex-row">
                  <div className="w-full h-full flex flex-col mx-auto justify-center md:p-5 lg:p-5">
                    <div className="w-fit"></div>

                    <motion.h1
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.45 }}
                      className=" w-fit -ml-1 pb-5 sm:text-4xl md:text-6xl text-5xl lg:text-7xl font-medium hover:text-[#D6223B]"
                    >
                      Desenvolvedor <br /> Full Stack
                    </motion.h1>

                    <motion.h3
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-[#D6223B] sm:text-xl text-lg w-fit mb-5 px-1"
                    >
                      15 anos de experiência.
                    </motion.h3>

                    <motion.h5
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.55 }}
                      className="py-3 sm:py-3 md:py-3 lg:py-1 2xl:py-3 text-sm  mt-5  w-fit"
                    >
                      Desenvolvedor Full Stack, graduando em Engenharia de
                      Software e formado em Design Gráfico.
                    </motion.h5>
                    <motion.h5
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="py-3 sm:py-3 md:py-3 lg:py-1 2xl:py-3 text-sm  w-fit"
                    >
                      Possuo ampla experiência como diretor de arte atuando em
                      grandes marcas de tecnologia, unindo visão estética e
                      pensamento técnico.
                    </motion.h5>
                    <motion.h5
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.65 }}
                      className="py-3 sm:py-3 md:py-3 lg:py-1 2xl:py-3 text-sm w-fit"
                    >
                      Desde 2019, atuo na área de desenvolvimento de software,
                      com foco em soluções web e mobile, utilizando tecnologias
                      como HTML5, CSS, SASS, WordPress, SQL, MongoDB,
                      JavaScript, React (JS e Native), TypeScript, Node.js e
                      Python.
                    </motion.h5>
                  </div>
                  <div className="sm:w-[50%] md:w-[40%] lg:w-[40%] xl:w-full lg:max-w-fit w-full absolute sm:absolute md:absolute lg:absolute xl:relative 2xl:relative sm:right-[-20px] md:right-[-20px] sm:top-[00px] md:top-[40px] lg:top-[10px] flex-col justify-center hidden sm:block md:block lg:block xl:block 2xl:block ">
                    <Lottie
                      className="w-[100%] h-[100%] flex"
                      onComplete={() => {
                        someAnimation.current?.goToAndPlay(45, true);
                      }}
                      lottieRef={someAnimation}
                      animationData={animationData}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            <div className="container mx-auto">
              <div className="flex flex-col h-full mb-52 md:p-5">
                <div className="">
                  {window.innerWidth <= 1025 ? (
                    <FormationRoadMapMOBILE />
                  ) : (
                    <FormationRoadmap />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioSession;
