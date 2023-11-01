import { useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, useInView, useAnimation } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const dispatch = useDispatch();

  function currentSession() {
    return { type: "contato" };
  }

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  useLayoutEffect(() => {
    if (isInView) {
      // console.log(isInView);
      dispatch(currentSession());
      mainControls.start("visible");
      console.log("contato");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      // console.log(isInView);
      dispatch(currentSession());
      mainControls.start("visible");
      console.log("contato");
    }
  }, [menuDisplayOpt]);

  return (
    <>
      {window.innerWidth <= 961 ? (
        <div
          className="bg-[#2A2344] w-screen h-screen flex flex-col p-5"
          id="contato"
          ref={ref}
        >
          <div className="flex flex-col justify-center h-full">
            <div className="flex  items-center justify-center">
              <div className="w-full h-full container mx-auto">
                <motion.h1
                  // ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="py-1 text-2xl font-medium "
                >
                  Fale comigo
                </motion.h1>
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="py-1 text-5xl md:text-8xl  font-medium hover:text-[#D6223B] cursor-pointer"
                >
                  eloy.gomes
                  <br />
                  @icloud.com
                </motion.h1>
                <motion.h5
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="py-2 mt-10 text-xs max-w-lg"
                >
                  Nossos serviços são a escolha certa para quem busca qualidade
                  e satisfação.
                </motion.h5>
                <motion.h5
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="py-2 text-xs max-w-lg"
                >
                  Junte-se aos nossos clientes satisfeitos e descubra como
                  podemos ajudá-lo a atingir seus objetivos.
                </motion.h5>
                <motion.h5
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="py-5 text-xs max-w-lg"
                >
                  Clique no meu email e vamos tomar uma café!”
                </motion.h5>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-[#2A2344] w-screen h-screen flex flex-col"
          id="contato"
        >
          <div className="container mx-auto mt-24">
            <div className="flex flex-row mx-32">
              <div className="w-full h-full container mx-auto">
                <motion.h1
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="py-1 text-4xl font-medium mt-52"
                >
                  Fale Comigo
                </motion.h1>
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="py-1 text-8xl lg:text-4xl font-medium hover:text-[#D6223B] cursor-pointer"
                >
                  eloy.gomes@icloud.com
                </motion.h1>
                <motion.h5
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="py-5 text-sm max-w-[50vw]"
                >
                  Seja qual for o escopo do seu projeto, seja a criação de um
                  site atraente, o desenvolvimento de uma plataforma de comércio
                  eletrônico ou a construção de uma aplicação web escalável,
                  estou aqui para ajudar.
                </motion.h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
