import { useLayoutEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ParticlesBackground from "./particles/ParticlesBackground";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  const dispatch = useDispatch();

  function currentSession() {
    return { type: "home" };
  }

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  useLayoutEffect(() => {
    if (isInView) {
      // console.log(isInView);
      dispatch(currentSession());
      mainControls.start("visible");
      console.log("home");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      // console.log(isInView);
      dispatch(currentSession());
      mainControls.start("visible");
      console.log("home");
    }
  }, [menuDisplayOpt]);

  return (
    <>
      {menuDisplayOpt === "home" ||
      menuDisplayOpt === "bio" ||
      menuDisplayOpt === "port" ? (
        <ParticlesBackground />
      ) : (
        []
      )}
      <div className=" w-screen h-screen flex flex-col">
        <div className="container mx-auto h-screen flex flex-col justify-center">
          <div
            className="flex sm:flex-col-reverse md:flex-col-reverse flex-col-reverse"
            ref={ref}
          >
            <div className="sm:w-full md:w-full w-full sm:mt-[61px] lg:mt-[41px] 2xl:mt-[61px]  mt-0">
              <div className="h-full flex flex-col justify-center container  ">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="sm:text-8xl lg:text-6xl 2xl:text-8xl  font-medium  bg-[#2A2344] w-fit sm:mx-none mx-auto z-2"
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
                  className="bg-[#D6223B] w-fit py-1 px-2 lg:text-lg   2xl:text-4xl font-light text-left sm:mx-none mx-auto z-1"
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
                src="https://www.koncretejungle.com.br/eloygomes/assets/img01.01-a494c9a4.png"
                alt="f"
                className="sm:max-w-lg md:max-w-sm 2xl:max-w-md max-w-sm w-full mx-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
