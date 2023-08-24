import { useLayoutEffect, useState, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import Lottie from "lottie-react";
import { useSelector, useDispatch } from "react-redux";

import animate00 from "../assets/Lottie-Services.json";
import animate01 from "../assets/Lottie-Services-1.json";
import animate02 from "../assets/Lottie-Services-2.json";
import animate03 from "../assets/Lottie-Services-3.json";
import animate04 from "../assets/Lottie-Services-4.json";
import animate05 from "../assets/Lottie-Services-5.json";

const servicesDescriptions = {
  iuui: `   Eu sou um desenvolvedor de UX/UI apaixonado por criar experiências
  digitais incríveis. Com anos de experiência em design e
  desenvolvimento de interfaces, eu ajudo empresas a criar produtos
  digitais que são intuitivos, fáceis de usar e visualmente
  atraentes. Meu objetivo é sempre criar soluções que atendam às
  necessidades do usuário e ajudem as empresas a alcançar seus
  objetivos de negócios.`,

  branding: `Nosso portfólio de branding apresenta uma ampla gama de projetos que 
  ajudaram empresas a criar e fortalecer suas marcas. Com uma abordagem criativa e 
  estratégica, trabalhamos com nossos clientes para desenvolver soluções de branding 
  que reflitam sua identidade e os diferenciem no mercado.  `,

  impressos: `Como designer gráfico experiente em desenvolvimento e impressão de 
  materiais impressos, eu ajudo empresas a criar soluções visuais atraentes e eficazes. 
  Com habilidades em design gráfico e anos de experiência, meu objetivo é sempre atender 
  às necessidades do cliente e ajudar as empresas a alcançar seus objetivos de negócios.`,

  foto: ` Nossa seção de fotografia apresenta uma seleção de nossos melhores trabalhos 
  em fotografia comercial e editorial. Com um olhar artístico e técnico, capturamos 
  imagens que contam histórias e criam conexões emocionais com o público. `,

  edicao: `   Nossa seção de edição de vídeo e áudio apresenta uma variedade de projetos 
  que demonstram nossa habilidade em contar histórias através do som e da imagem. Combinando 
  técnicas criativas e tecnologia avançada, criamos vídeos e áudios que envolvem e emocionam o público.`,

  podcast: ` Nossa seção de podcast apresenta uma seleção de nossos melhores episódios, 
  abordando uma variedade de tópicos interessantes e relevantes. Com um estilo envolvente e 
  informativo, nossos podcasts oferecem conteúdo de qualidade para ouvintes curiosos.`,
};

function ServicesSession() {
  const [servBg, setServBg] = useState(`session-uiiu`);
  const [textOnScreen, setTextOnScreen] = useState(`UI/UX`);
  const [servDesc, setServDesc] = useState(servicesDescriptions.iuui);
  const [servAnim, setServAnim] = useState(animate00);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (isInView) {
      // console.log(isInView);
      dispatch(currentSession());
      mainControls.start("visible");
    }
  }, [isInView]);

  function currentSession() {
    return { type: "services" };
  }

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // console.log(menuDisplayOpt);

  const setWall = (sessioon) => {
    if (sessioon === "iuui") {
      setServBg("session-uiiu");
      setTextOnScreen("UI/UX");
      setServDesc(servicesDescriptions.iuui);
      setServAnim(animate00);
    }

    if (sessioon === "branding") {
      setServBg("session-branding");
      setTextOnScreen("BRANDING");
      setServDesc(servicesDescriptions.branding);
      setServAnim(animate01);
    }

    if (sessioon === "impressos") {
      setServBg("session-impressos");
      setTextOnScreen("IMPRESSOS");
      setServDesc(servicesDescriptions.impressos);
      setServAnim(animate02);
    }

    if (sessioon === "foto") {
      setServBg("session-foto");
      setTextOnScreen("FOTOGRAFIA");
      setServDesc(servicesDescriptions.foto);
      setServAnim(animate03);
    }

    if (sessioon === "edicao") {
      setServBg("session-edicao");
      setTextOnScreen("EDIÇÃO");
      setServDesc(servicesDescriptions.edicao);
      setServAnim(animate04);
    }

    if (sessioon === "podcast") {
      setServBg("session-podcast");
      setTextOnScreen("PODCAST");
      setServDesc(servicesDescriptions.podcast);
      setServAnim(animate05);
    }
  };

  const someAnimation = useRef(null);

  return (
    <>
      {
        // Mobile
        window.innerWidth <= 961 ? (
          <div
            className={`w-screen  flex flex-col bg-cover bg-center bg-no-repeat ${servBg} drop-shadow-md z-0 overflow-hidden`}
            id="services"
          >
            <div className="w-screen h-screen bg-black z-1 absolute opacity-80"></div>
            <div className="container mx-auto h-screen flex flex-col justify-center">
              <div className="min-h-[85vh] mb-[10vh] mt-[15vh] mx-5 p-5 backdrop-blur-xl bg-white/10 rounded-xl">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 0.05, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-[150px] opacity-5 top-[80%] absolute  "
                >
                  {textOnScreen}
                </motion.h1>

                <div className="container mx-auto   ">
                  <div className="flex flex-col justify-between pl-2">
                    <motion.h1
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.05 }}
                      className="text-6xl text-white "
                    >
                      Serviços
                    </motion.h1>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className=" mt-5  text-white py-5"
                    >
                      Na seção abaixo, apresento um panorama completo da minha
                      experiência profissional até o presente momento.”
                    </motion.p>
                  </div>
                </div>

                <div className="container mx-auto py-10 ">
                  <div className="w-full flex flex-row justify-start cursor-pointer overflow-x-hidden py-2 overflow-x-scroll">
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-base  text-white"
                      onMouseEnter={() => setWall("iuui")}
                    >
                      UI/UX
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-base  text-white"
                      onMouseEnter={() => setWall("branding")}
                    >
                      BRANDING
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-base  text-white"
                      onMouseEnter={() => setWall("impressos")}
                    >
                      IMPRESSOS
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.45 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-base  text-white"
                      onMouseEnter={() => setWall("foto")}
                    >
                      FOTOGRAFIA
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-base  text-white"
                      onMouseEnter={() => setWall("edicao")}
                    >
                      EDIÇÃO
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.55 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-base  text-white"
                      onMouseEnter={() => setWall("podcast")}
                    >
                      PODCAST
                    </motion.button>
                  </div>

                  <div className=" flex flex-row justify-between">
                    <div className="w-full p-2 mt-10">
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                          ease: "easeInOut",
                        }}
                        className=" text-white text-sm"
                      >
                        {servDesc}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////////////////// Desktop ////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          <div
            className={`w-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat ${servBg} drop-shadow-md z-0`}
            id="services"
          >
            <div className="w-screen h-screen bg-black z-1 absolute opacity-80"></div>
            <div className="container mx-auto h-screen flex flex-col justify-center">
              <div className="h-[80vh] mt-[10vh] m-10 p-5 backdrop-blur-xl bg-white/10 rounded-xl">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 0.05, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-[150px] opacity-5 top-[80%] absolute  "
                >
                  {textOnScreen}
                </motion.h1>

                <div className="container mx-auto ">
                  <div className="flex flex-row justify-between ">
                    <motion.h1
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.05 }}
                      className="text-6xl text-white p-10"
                    >
                      Serviços
                    </motion.h1>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className="w-[40%] mt-5 text-right text-white py-10"
                    >
                      Na seção abaixo, apresento um panorama completo da minha
                      experiência profissional até o presente momento.”
                    </motion.p>
                  </div>
                </div>

                <div className="container mx-auto py-10 px-5 ">
                  <div className="w-full flex flex-row justify-start cursor-pointer p-5">
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-sm  text-white"
                      onMouseEnter={() => setWall("iuui")}
                    >
                      UI/UX
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-sm  text-white"
                      onMouseEnter={() => setWall("branding")}
                    >
                      BRANDING
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-sm  text-white"
                      onMouseEnter={() => setWall("impressos")}
                    >
                      IMPRESSOS
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.45 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-sm  text-white"
                      onMouseEnter={() => setWall("foto")}
                    >
                      FOTOGRAFIA
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-sm  text-white"
                      onMouseEnter={() => setWall("edicao")}
                    >
                      EDIÇÃO
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.55 }}
                      className="mx-1 backdrop-blur-xl bg-white/10 hover:bg-[#D6223B]/90 hover:text-white text-sm  text-white"
                      onMouseEnter={() => setWall("podcast")}
                    >
                      PODCAST
                    </motion.button>
                  </div>

                  <div className=" flex flex-row justify-between">
                    <div className="w-1/2 p-5 mt-10">
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                          ease: "easeInOut",
                        }}
                        className=" text-white"
                      >
                        {servDesc}
                      </motion.p>
                    </div>
                    <div className="w-1/2 -mt-52 flex flex-col justify-center">
                      <Lottie
                        className="w-[100%] h-[800px] p-20"
                        onComplete={() => {
                          someAnimation.current?.goToAndPlay(45, true);
                        }}
                        lottieRef={someAnimation}
                        animationData={servAnim}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default ServicesSession;
