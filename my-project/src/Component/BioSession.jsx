import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import Lottie from "lottie-react";
import animationData from "../assets/63487-programming-computer.json";
import ParticlesBackground from "./particles/ParticlesBackground";

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
      <ParticlesBackground />
      <div className=" w-screen flex flex-col" id="bio">
        {/* <div className="bg-[#2A2344] w-screen h-screen flex flex-col" id="bio"> */}

        <div
          ref={ref}
          className="container mx-auto flex flex-col justify-center"
        >
          <div className="flex flex-row">
            <div className="w-[50%] h-screen flex flex-col mx-auto justify-center">
              <div className="w-fit"></div>
              <motion.h4
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" bg-[#2A2344] w-fit"
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
                className="bg-[#2A2344] w-fit -ml-1 py-1 text-8xl font-medium hover:text-[#D6223B]"
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
                className="py-3 text-sm max-w-lg bg-[#2A2344] w-fit"
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
                className="py-3 text-sm max-w-lg bg-[#2A2344] w-fit"
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
                className="py-3 text-sm max-w-lg bg-[#2A2344] w-fit"
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

          <div className="container mx-auto">
            <div className="flex flex-col h-full">
              <div className="flex flex-row justify-between mx-5">
                <div className="w-[50%]">
                  <h1 className="">Formação</h1>
                </div>
                <div className="w-[50%]">
                  <p className="max-w-fit text-right">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore nesciunt illum dignissimos?
                  </p>
                </div>
              </div>

              {/* ROW #1 */}
              <div className="flex flex-row py-5 justify-between  rounded-xl">
                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-md w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Learn React Testing
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">CODEACADEMY</h2>
                    <h4 className="text-xs">DEZ/2022</h4>
                  </div>
                  <p className="text-sm py-2">Introdução a testes unitários.</p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Learn React Router
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">CODEACADEMY</h2>
                    <h4 className="text-xs">OUT/2022</h4>
                  </div>
                  <p className="text-sm py-2">Criação de rotas em react.</p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Introduction to UI/UX{" "}
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">CODEACADEMY</h2>
                    <h4 className="text-xs">AGO/2022</h4>
                  </div>
                  <p className="text-sm py-2">
                    Introdução aos conceitos para desenvolvimento de interfaces.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Metodologias ágeis
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">CODEACADEMY</h2>
                    <h4 className="text-xs">FEV/2022</h4>
                  </div>
                  <p className="text-sm py-2">Introdução a SCRUM e KANBAN.</p>
                </div>
              </div>

              {/* ROW #2 */}
              <div className="flex flex-row py-5 justify-between  rounded-xl">
                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-md w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">React JS</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">DEZ/2021</h4>
                  </div>
                  <p className="text-sm py-2">
                    Prop.Types, CSS-in-JS (Styled Components), Vite, Tailwind
                    CSS, Redux.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">Javascript</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">DEZ/2019</h4>
                  </div>
                  <p className="text-sm py-2">Criação de rotas em react.</p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">BOOTSTRAP</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">AGO/2018</h4>
                  </div>
                  <p className="text-sm py-2">
                    Introdução aos conceitos para desenvolvimento de interfaces.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">SASS</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">SET/2018</h4>
                  </div>
                  <p className="text-sm py-2">
                    Desenvolvimento ágil de CSS com Variables, Transitions,
                    Dropdowns, Overlays.
                  </p>
                </div>
              </div>

              {/* ROW #3 */}
              <div className="flex flex-row py-5 justify-between  rounded-xl">
                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-md w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Estratégias de marketing e e-commerce
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">SENAC</h2>
                    <h4 className="text-xs">SET/20!8</h4>
                  </div>
                  <p className="text-sm py-2">
                    Analise a criação de estratégias e ações de marketing com
                    foco em conversão de usuários em plataformas digitais e
                    e-commerce.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">JQUERY 3</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">NOV/2017</h4>
                  </div>
                  <p className="text-sm py-2">
                    Analise a criação de estratégias e ações de marketing com
                    foco em conversão de usuários em plataformas digitais e
                    e-commerce.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">CSS 3</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">SET/2017</h4>
                  </div>
                  <p className="text-sm py-2">
                    Formatação de Layouts com media queries, flexbox and grid.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">HTML 5</h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UDEMY</h2>
                    <h4 className="text-xs">AGO/2017</h4>
                  </div>
                  <p className="text-sm py-2">
                    Elaboração e desenvolvimento de layouts semanticos.
                  </p>
                </div>
              </div>

              {/* ROW #4 */}
              <div className="flex flex-row py-5 justify-between  rounded-xl">
                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-md w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Design gráfico com enfãse em comunicação digital
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">UNIVERSIDADE PAULISTA</h2>
                    <h4 className="text-xs">DEZ/2016</h4>
                  </div>
                  <p className="text-sm py-2">
                    Designer Gráfico com enfâse em comunicação digital.
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Direção de arte, criatividade e prática
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">COLOSSEO</h2>
                    <h4 className="text-xs">NOV/2016</h4>
                  </div>
                  <p className="text-sm py-2">
                    Curso ministrado por Saulo Mileti, onde debatemos a função
                    do diretor de arte, seu dever de transcrever criatividade de
                    muitas midias diferentes em algo prático..
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Estética, lógica, harmonia e a contrução do belo
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">COLOSSEO</h2>
                    <h4 className="text-xs">AGO/2016</h4>
                  </div>
                  <p className="text-sm py-2">
                    Curso ministrado por Saulo Mileti, onde debatemos a função
                    do diretor de arte, seu dever de transcrever criatividade de
                    muitas midias diferentes em algo prático..
                  </p>
                </div>

                <div className="my-5 p-5 rounded-xl  backdrop-opacity-10 bg-white/10 hover:bg-white/20  drop-shadow-lg w-1/4 min-w-1/4 mr-5">
                  <h1 className="text-lg uppercase font-bold">
                    Design, Origem, função e principio estético
                  </h1>
                  <div className="flex flex-row justify-between">
                    <h2 className="text-sm">COLOSSEO</h2>
                    <h4 className="text-xs">MAR/2016</h4>
                  </div>
                  <p className="text-sm py-2">
                    Curso ministrado por Saulo Mileti, onde discutimos o design
                    de uma forma ampla, desde o conceito de projetos, passando
                    por suas funcões e impacto na sociedade e a sua influência
                    quanto a criação de padrões estéticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioSession;
