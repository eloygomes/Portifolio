import pic01 from "../assets/img01.01.png";

import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import ParticlesBackground from "./particles/ParticlesBackground";

import { useSelector, useDispatch } from "react-redux";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      // console.log(isInView);
      dispatch(currentSession());
      mainControls.start("visible");
    }
  }, [isInView]);


  function currentSession() {
    return { type: "home" };
  }

  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  console.log(menuDisplayOpt);


  return (
    <>
      <ParticlesBackground />
     

      <div className=" w-screen h-screen flex flex-col">
        <div
          
          className="container mx-auto h-screen flex flex-col justify-center"
        >
          <div className="flex sm:flex-row md:flex-col-reverse flex-col-reverse" ref={ref}>
            <div className="sm:w-[50%] md:w-full w-full sm:mt-[61px] mt-0">
              <div className="h-full flex flex-col justify-center container  ">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="sm:text-8xl text-5xl  font-medium  bg-[#2A2344] w-fit sm:mx-none mx-auto z-2"
                >
                  Eloy Gomes
                </motion.h1>
                <motion.h4
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="bg-[#D6223B] w-fit pl-1 text-4xl font-light text-left sm:mx-none mx-auto z-1"
                >
                  Full Stack Developer
                </motion.h4>
              </div>
            </div>
            <div className="sm:w-[50%] w-full sm:mt-24 flex flex-col sm:p-0 p-10 mx-auto sm:items-center">
              <motion.img
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.35 }}
                src={pic01}
                alt="f"
                className="sm:max-w-lg max-w-sm w-full mx-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
