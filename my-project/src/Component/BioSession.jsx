import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import Lottie from "lottie-react";
import animationData from "../assets/63487-programming-computer.json";

function BioSession() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
  
      mainControls.start("visible");
    }
  }, [isInView]);

  const someAnimation = useRef(null);

  return (
    <>
      <div className="bg-[#2A2344] w-screen h-screen flex flex-col" id="bio">
        {/* <div className="bg-pink-300 w-screen h-screen flex flex-col" id="bio"> */}
        {/* <div ref={ref} className="container mx-auto mt-28"> */}
        <div ref={ref} className="container mx-auto h-screen flex flex-col justify-center">
          <div className="flex flex-row">
            <div
              className="w-[50%] h-screen flex flex-col mx-auto justify-center">
              <div className="w-fit"></div>
              <motion.h4
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mx-1"
              >
                Olá!, Sou um...{" "}
              </motion.h4>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="py-1 text-8xl font-medium hover:text-[#D6223B]"
              >
                Desenvolvedor
                <br /> Full Stack
              </motion.h1>

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#D6223B] text-xl w-fit"
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
                className="py-3 text-sm max-w-lg"
              >
                Iniciei da minha jornada como designer UI/UX, criando interfaces
                de produtos e propondo melhorias de usabilidade na experiência
                do usuário.
              </motion.h5>
              <motion.h5
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="py-3 text-sm max-w-lg"
              >
                Também tenho vivencia em criação de wireframes de baixa/alta
                fidelidade e em desenvolvimento de protótipos navegáveis.
              </motion.h5>
              <motion.h5
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="py-3 text-sm max-w-lg"
              >
                Hoje atuo como Full Stack Developer, utilizo principalmente
                HTML5, CSS3, React Js e Wordpress para dar vida a interfaces web
                dos projetos.
              </motion.h5>
            </div>
            <div className="w-[50%]  flex flex-col justify-center">
              <Lottie
                className="w-[100%] h-[100%]"
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
    </>
  );
}

export default BioSession;
