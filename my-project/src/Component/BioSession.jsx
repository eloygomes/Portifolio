import { useEffect, useRef, useState } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import Lottie from "lottie-react";
import animationData from "../assets/63487-programming-computer.json";

import BioSessionCard from "./BioS/BioSessionCard";

function BioSession() {
  const [FormationCollapseStatus01, setFormationCollapseStatus01] = useState('false');
  
  
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const someAnimation = useRef(null);

  return (
    <>
      <div className=" w-screen flex flex-col " id="bio">
        <div
          ref={ref}
          className="container mx-auto flex flex-col justify-center"
        >
          <div className="flex flex-col">
            <div className="backdrop-blur-xl bg-white/10 p-5 sm:p-10 m-5 sm:my-40 my-20 rounded-xl ">
              <div className="flex sm:flex-row flex-col-reverse">
                <div className="sm:w-[50%] w-full h-full flex flex-col mx-auto justify-center">
                  <div className="w-fit"></div>
                  <motion.h4
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    // className=" bg-[#2A2344] w-fit"
                    className=" w-fit"
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
                    className=" w-fit -ml-1 py-5 sm:text-8xl text-4xl font-medium hover:text-[#D6223B]"
                  >
                    Desenvolvedor <br /> Full Stack
                  </motion.h1>

                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-[#D6223B] sm:text-xl text-lg w-fit mb-5 "
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
                    className="py-3 text-sm max-w-lg mt-5  w-fit"
                  >
                    Iniciei da minha jornada como designer UI/UX, criando
                    interfaces de produtos e propondo melhorias de usabilidade
                    na experiência do usuário.
                  </motion.h5>
                  <motion.h5
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="py-3 text-sm max-w-lg  w-fit"
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
                    className="py-3 text-sm max-w-lg  w-fit"
                  >
                    Hoje atuo como Full Stack Developer, utilizo principalmente
                    HTML5, CSS3, React Js e Wordpress para dar vida a interfaces
                    web dos projetos.
                  </motion.h5>
                </div>
                <div className="sm:w-[50%] w-full  flex flex-col justify-center">
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

            <div className="container mx-auto">
              <div className="flex flex-col h-full mb-52">

                <div className="flex sm:flex-row flex-col justify-between mx-5">
                  <div className="sm:w-[50%] w-full">
                    <h1 className="bg-[#2A2344] w-fit uppercase font-semibold p-2">
                      Formação
                    </h1>
                  </div>
                  <div className="sm:w-[50%] w-full">
                    <p className="max-w-fit sm:text-right py-5 p-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Tempore nesciunt illum dignissimos?
                    </p>
                  </div>
                </div>

                {/* ROW #1 */}
                <div className="flex sm:flex-row flex-col py-5 justify-between  ">
                  <BioSessionCard
                    PositionName="React Testing"
                    CompanyName="CODEACADEMY"
                    Date="DEZ/2022"
                    Description="Introdução a testes unitários."
                    FormationCollapseStatus01={FormationCollapseStatus01}
                    setFormationCollapseStatus01={setFormationCollapseStatus01}
                  />

                  <BioSessionCard
                    PositionName="React Router"
                    CompanyName="CODEACADEMY"
                    Date="OUT/2022"
                    Description="Criação de rotas em react."
                  />

                  <BioSessionCard
                    PositionName="Introduction to UI/UX"
                    CompanyName="CODEACADEMY"
                    Date="AGO/2022"
                    Description="Introdução aos conceitos para desenvolvimento de
                    interfaces."
                  />

                  <BioSessionCard
                    PositionName="Metodologias ágeis"
                    CompanyName="CODEACADEMY"
                    Date="FEV/2022"
                    Description="Introdução a SCRUM e KANBAN."
                  />
                </div>

                {/* ROW #2 */}
                <div className="flex sm:flex-row flex-col py-5 justify-between  ">
                  <BioSessionCard
                    PositionName="React JS"
                    CompanyName="UDEMY"
                    Date="DEZ/2021"
                    Description="Prop.Types, CSS-in-JS (Styled Components), Vite, Tailwind
                    CSS, Redux."
                  />

                  <BioSessionCard
                    PositionName="Javascript"
                    CompanyName="UDEMY"
                    Date="DEZ/2019"
                    Description="Criação de rotas em react."
                  />

                  <BioSessionCard
                    PositionName="BOOTSTRAP"
                    CompanyName="UDEMY"
                    Date="AGO/2018"
                    Description="Introdução aos conceitos para desenvolvimento de
                    interfaces."
                  />

                  <BioSessionCard
                    PositionName="SASS"
                    CompanyName="UDEMY"
                    Date="SET/2018"
                    Description="Desenvolvimento ágil de CSS com Variables, Transitions,
                    Dropdowns, Overlays."
                  />
                </div>

                {/* ROW #3 */}
                <div className="flex sm:flex-row flex-col py-5 justify-between  ">
                  <BioSessionCard
                    PositionName="Estratégias de marketing e e-commerce"
                    CompanyName="SENAC"
                    Date="SET/2018"
                    Description="Analise a criação de estratégias e ações de marketing com
                    foco em conversão de usuários em plataformas digitais e
                    e-commerce."
                  />

                  <BioSessionCard
                    PositionName="JQUERY 3"
                    CompanyName="UDEMY"
                    Date="NOV/2017"
                    Description="Analise a criação de estratégias e ações de marketing com
                    foco em conversão de usuários em plataformas digitais e
                    e-commerce."
                  />

                  <BioSessionCard
                    PositionName="CSS 3"
                    CompanyName="UDEMY"
                    Date="SET/2017"
                    Description="Formatação de Layouts com media queries, flexbox and grid."
                  />

                  <BioSessionCard
                    PositionName="HTML 5"
                    CompanyName="UDEMY"
                    Date="AGO/2016"
                    Description="Elaboração e desenvolvimento de layouts semanticos."
                  />
                </div>

                {/* ROW #4 */}
                <div className="flex sm:flex-row flex-col py-5 justify-between text-left">
                  <BioSessionCard
                    PositionName="Design gráfico com enfãse em comunicação digital"
                    CompanyName="UNIVERSIDADE PAULISTA"
                    Date="DEZ/2016"
                    Description="Designer Gráfico com enfâse em comunicação digital."
                  />

                  <BioSessionCard
                    PositionName="Direção de arte, criatividade e prática"
                    CompanyName="COLOSSEO"
                    Date="NOV/2016"
                    Description="Curso ministrado por Saulo Mileti, onde debatemos a função
                    do diretor de arte, seu dever de transcrever criatividade
                    de muitas midias diferentes em algo prático.."
                  />

                  <BioSessionCard
                    PositionName="Estética, lógica, harmonia e a contrução do belo"
                    CompanyName="COLOSSEO"
                    Date="AGO/2016"
                    Description="Curso ministrado por Saulo Mileti, onde debatemos a função
                    do diretor de arte, seu dever de transcrever criatividade
                    de muitas midias diferentes em algo prático.."
                  />

                  <BioSessionCard
                    PositionName="Design, Origem, função e principio estético"
                    CompanyName="COLOSSEO"
                    Date="MAR/2016"
                    Description="Curso ministrado por Saulo Mileti, onde discutimos o
                    design de uma forma ampla, desde o conceito de projetos,
                    passando por suas funcões e impacto na sociedade e a sua
                    influência quanto a criação de padrões estéticos."
                  />
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
