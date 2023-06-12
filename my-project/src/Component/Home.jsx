import pic01 from "../assets/img01.01.png";

import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import ParticlesBackground from "./particles/ParticlesBackground";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);

      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <ParticlesBackground />
      <div className=" w-screen h-screen flex flex-col">
        <div
          ref={ref}
          className="container mx-auto h-screen flex flex-col justify-center"
        >
          <div className="flex sm:flex-row flex-col-reverse">
            <div className="sm:w-[50%] w-full mt-24">
              <div className="h-full flex flex-col justify-center container  mx-auto">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="sm:text-8xl text-5xl  font-medium  bg-[#2A2344] w-fit sm:mx-none mx-auto "
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
                  className="bg-[#D6223B] w-fit pl-1 text-4xl font-light text-left sm:mx-none mx-auto"
                >
                  Full Stack Developer
                </motion.h4>
              </div>
            </div>
            <div className="sm:w-[50%] w-full mt-24 flex flex-col sm:p-0 p-10 mx-auto sm:items-center">
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
                className="max-w-lg sm:max-w-lg max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
