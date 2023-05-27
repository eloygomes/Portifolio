import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

function Portfolio() {
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
      <div className="bg-[#19142A] w-screen h-screen flex flex-col" id="port">
        <div ref={ref} className="container mx-auto mt-40">
          <div className="flex flex-row">
            <div className="w-[50%] flex flex-col">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.05 }}
                className=""
              >
                Portifólio
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="max-w-md py-5 text-xs"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                unde, dolore, nam ullam commodi laboriosam aliquid odit harum
                doloremque ex labore totam veniam quod assumenda, nulla earum
                rerum explicabo ipsa!
              </motion.p>
            </div>
            <div className="w-[50%] flex flex-row justify-end ">
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 h-[50px] bg-[#19142A] text-white border border-white"
              >
                Projetos Pessoais
              </motion.button>
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-5 h-[50px] bg-[#19142A] text-white border border-white ml-10"
              >
                Projetos Profissionais
              </motion.button>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-6 grid-rows-1 text-center pt-10 cursor-pointer">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1588450523206-e0b048d8f4d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt=""
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1423110041833-0d5dfcc552e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80"
                alt=""
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full"
                src="https://images.unsplash.com/photo-1554222725-5cd0bf9c6da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
              />
            </motion.div>
          </div>
          {/* <div className="flex flex-row justify-center">
            <button className="bg-[#D6223B] m-10">Veja mais</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
