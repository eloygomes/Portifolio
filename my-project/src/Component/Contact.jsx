import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

function Contact() {
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
      {window.innerWidth <= 961 ? (
        <div
          className="bg-[#2A2344] w-screen h-screen flex flex-col p-5"
          id="contato"
        >
          <div ref={ref} className="container mx-auto mt-28">
            <div className="flex flex-row">
              <div className="w-full h-full container mx-auto">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="py-1 text-2xl font-medium mt-52"
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
                  className="py-1 text-4xl font-medium hover:text-[#D6223B] cursor-pointer"
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
                  className="py-5 text-sm max-w-lg"
                >
                  Nossos produtos e serviços são a escolha certa para quem busca
                  qualidade e satisfação. Junte-se aos nossos clientes
                  satisfeitos e descubra como podemos ajudá-lo a atingir seus
                  objetivos. Clique abaixo e comece agora mesmo!”
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
          <div ref={ref} className="container mx-auto mt-28">
            <div className="flex flex-row">
              <div className="w-full h-full container mx-auto">
                <motion.h1
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
                  className="py-1 text-8xl font-medium hover:text-[#D6223B] cursor-pointer"
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
                  className="py-5 text-sm max-w-lg"
                >
                  Nossos produtos e serviços são a escolha certa para quem busca
                  qualidade e satisfação. Junte-se aos nossos clientes
                  satisfeitos e descubra como podemos ajudá-lo a atingir seus
                  objetivos. Clique abaixo e comece agora mesmo!”
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
