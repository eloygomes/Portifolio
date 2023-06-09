import { useEffect, useState, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const servicesDescriptions = {
  iuui: `   Eu sou um desenvolvedor de UX/UI apaixonado por criar experiências
  digitais incríveis. Com anos de experiência em design e
  desenvolvimento de interfaces, eu ajudo empresas a criar produtos
  digitais que são intuitivos, fáceis de usar e visualmente
  atraentes. Meu objetivo é sempre criar soluções que atendam às
  necessidades do usuário e ajudem as empresas a alcançar seus
  objetivos de negócios.`,

  branding: `Nosso portfólio de branding apresenta uma ampla gama de projetos que ajudaram empresas a criar e fortalecer suas marcas. Com uma abordagem criativa e estratégica, trabalhamos com nossos clientes para desenvolver soluções de branding que reflitam sua identidade e os diferenciem no mercado.  `,

  impressos: `Como designer gráfico experiente em desenvolvimento e impressão de materiais impressos, eu ajudo empresas a criar soluções visuais atraentes e eficazes. Com habilidades em design gráfico e anos de experiência, meu objetivo é sempre atender às necessidades do cliente e ajudar as empresas a alcançar seus objetivos de negócios.`,

  foto: ` Nossa seção de fotografia apresenta uma seleção de nossos melhores trabalhos em fotografia comercial e editorial. Com um olhar artístico e técnico, capturamos imagens que contam histórias e criam conexões emocionais com o público. `,

  edicao: `   Nossa seção de edição de vídeo e áudio apresenta uma variedade de projetos que demonstram nossa habilidade em contar histórias através do som e da imagem. Combinando técnicas criativas e tecnologia avançada, criamos vídeos e áudios que envolvem e emocionam o público.`,

  podcast: ` Nossa seção de podcast apresenta uma seleção de nossos melhores episódios, abordando uma variedade de tópicos interessantes e relevantes. Com um estilo envolvente e informativo, nossos podcasts oferecem conteúdo de qualidade para ouvintes curiosos.`,
};

function ServicesSession() {
  const [servBg, setServBg] = useState(`session-uiiu`);
  const [textOnScreen, setTextOnScreen] = useState(`UI/UX`);
  const [servDesc, setServDesc] = useState(servicesDescriptions.iuui);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);

      mainControls.start("visible");
    }
  }, [isInView]);

  const setWall = (sessioon) => {
    if (sessioon === "iuui") {
      setServBg("session-uiiu");
      setTextOnScreen("UI/UX");
      setServDesc(servicesDescriptions.iuui);
    }

    if (sessioon === "branding") {
      setServBg("session-branding");
      setTextOnScreen("BRANDING");
      setServDesc(servicesDescriptions.branding);
    }

    if (sessioon === "impressos") {
      setServBg("session-impressos");
      setTextOnScreen("IMPRESSOS");
      setServDesc(servicesDescriptions.impressos);
    }

    if (sessioon === "foto") {
      setServBg("session-foto");
      setTextOnScreen("FOTOGRAFIA");
      setServDesc(servicesDescriptions.foto);
    }

    if (sessioon === "edicao") {
      setServBg("session-edicao");
      setTextOnScreen("EDIÇÃO");
      setServDesc(servicesDescriptions.edicao);
    }

    if (sessioon === "podcast") {
      setServBg("session-podcast");
      setTextOnScreen("PODCAST");
      setServDesc(servicesDescriptions.podcast);
    }
  };

  return (
    <>
      <div
        className={`w-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat ${servBg} drop-shadow-md`}
        id="services"
      >
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

            <div ref={ref} className="container mx-auto   ">
              <div className="flex flex-row justify-between ">
                <motion.h1
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
                  className="mx-1 backdrop-blur-xl bg-white/10 hover:text-gray-800] text-sm  text-white"
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
                  className="mx-1 backdrop-blur-xl bg-white/10 hover:text-gray-800] text-sm  text-white"
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
                  className="mx-1 backdrop-blur-xl bg-white/10 hover:text-gray-800] text-sm  text-white"
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
                  className="mx-1 backdrop-blur-xl bg-white/10 hover:text-gray-800] text-sm  text-white"
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
                  className="mx-1 backdrop-blur-xl bg-white/10 hover:text-gray-800] text-sm  text-white"
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
                  className="mx-1 backdrop-blur-xl bg-white/10 hover:text-gray-800] text-sm  text-white"
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
                <div className="w-1/2 -mt-52">
                  <div className="absolute top-[23rem] left-[48vw]  flex flex-row mt-10 z-40  mx-5 text-white max-w-[1200px] drop-shadow-xl">
                    <img
                      className="w-72 h-72 object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[30rem] left-[60vw]  flex flex-row mt-10 z-40  mx-5 text-white max-w-[1200px] drop-shadow-xl">
                    <img
                      className="w-52 h-52 object-cover rounded-xl"
                      src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[25rem] left-[65vw]  flex flex-row mt-10 z-40  mx-5 text-white max-w-[1200px] drop-shadow-xl">
                    <img
                      className="w-36 h-36 object-cover rounded-xl"
                      src="https://plus.unsplash.com/premium_photo-1661572997144-066a404b67bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <img src={img2} className=" absolute w-screen left-0" alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default ServicesSession;
