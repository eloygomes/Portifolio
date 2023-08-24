import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "../assets/63487-programming-computer.json";
import BioSessionCard from "./BioS/BioSessionCard";
import { useSelector, useDispatch } from "react-redux";

function BioSession() {
  const [FormationCollapseStatus, setFormationCollapseStatus] = useState(false);

  const [mobileCollapse, setMobileCollapse] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const dispatch = useDispatch();

  const mainControls = useAnimation();

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
    }
  }, [isInView]);

  const someAnimation = useRef(null);

  function currentSession() {
    return { type: "bio" };
  }

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // console.log(menuDisplayOpt);

  return (
    <>
      <div className=" w-screen flex flex-col  " id="bio">
        <div className="container mx-auto flex flex-col justify-center">
          <div className="flex flex-col">
            <div
              ref={ref}
              className="backdrop-blur-xl bg-white/10 p-5 sm:p-10 md:p-5 lg:p-10 m-5 sm:my-40 my-00 rounded-xl "
            >
              <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row">
                <div className="sm:w-[50%] md:w-full lg:w-full w-full h-full flex flex-col mx-auto justify-center md:p-5 lg:p-5">
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
                    className=" w-fit -ml-1 py-5 sm:text-8xl md:text-6xl text-5xl lg:text-8xl font-medium hover:text-[#D6223B]"
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
                    Tenho sólida vivencia em criação de wireframes de baixa/alta
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
                <div className="sm:w-[50%] md:w-[50%] lg:w-full lg:max-w-fit w-full sm:relative md:absolute lg:relative  md:right-[-20px] md:top-[60px] lg:top-[0px] flex-col justify-center max-w-xs ">
                  <Lottie
                    className="w-[100%] h-[100%] flex"
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
              <div className="flex flex-col h-full mb-52 md:p-5">
                <div className="flex sm:flex-row md:flex-row justify-between mx-5 mt-20">
                  <div className="flex flex-col justify-between">
                    <div className="sm:w-[50%] w-full ">
                      <h1 className="bg-[#2A2344] w-fit  p-2">Formação</h1>
                    </div>
                    <div className="sm:w-[50%] md:w-full w-full">
                      <p className="bg-[#2A2344] w-fit  py-5 p-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore nesciunt illum dignissimos?
                      </p>
                    </div>
                  </div>
                  <div className="flex-row hidden sm:hidden md:flex lg:flex items-center justify-center">
                    <button
                      className={` p-5 ml-5 backdrop-blur-xl drop-shadow-lg  ${
                        FormationCollapseStatus
                          ? "bg-white/10 hover:bg-white/50"
                          : "bg-white/50 hover:bg-white/80"
                      } `}
                      onClick={() => {
                        console.log("false");
                        setFormationCollapseStatus(false);
                      }}
                    >
                      <BsArrowsAngleContract />
                    </button>
                    <button
                      className={`p-5 ml-5 backdrop-blur-xl drop-shadow-lg ${
                        FormationCollapseStatus
                          ? "bg-white/50 hover:bg-white/80"
                          : "bg-white/10 hover:bg-white/50"
                      } `}
                      onClick={() => {
                        setFormationCollapseStatus(true);
                      }}
                    >
                      <BsArrowsAngleExpand />
                    </button>
                  </div>
                </div>

                {/* {window.innerWidth <= 961 ? ( */}
                {window.innerWidth <= 767 ? (
                  // <div className="flex flex-col sm:flex-row justify-between px-2 py-5 backdrop-blur-xl bg-white/10 mx-5 rounded-xl  ">
                  <div
                    className={`flex flex-col sm:flex-row justify-between px-2 py-5 backdrop-blur-xl bg-white/10 mx-5 rounded-xl `}
                  >
                    <div
                      className={`${
                        mobileCollapse ? null : "h-96 overflow-hidden"
                      } `}
                    >
                      <BioSessionCard
                        PositionName="React Testing"
                        CompanyName="CODEACADEMY"
                        Date="DEZ/2022"
                        Description="Introdução a testes unitários usando Jest, Cypress, Enzyme, Mocha, Jasmine e React Testing Library."
                      />

                      <BioSessionCard
                        PositionName="React Router"
                        CompanyName="CODEACADEMY"
                        Date="OUT/2022"
                        Description="Criação de rotas em react. Rotear usuarios para diferentes URL's,usando rotas dinamicas"
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

                      <BioSessionCard
                        PositionName="Design gráfico com enfãse em comunicação digital"
                        CompanyName="UNIVERSIDADE PAULISTA"
                        Date="DEZ/2016"
                        Description="Designer Gráfico com enfâse em comunicação digital."
                      />

                      <BioSessionCard
                        PositionName="Direção de arte, criatividade aplicada e design na prática"
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
                    <div className="flex text-center justify-center pt-5">
                      <p
                        className="text-xs font-bold"
                        onClick={() => {
                          setMobileCollapse(!mobileCollapse);
                        }}
                      >
                        {mobileCollapse ? "Mostrar menos" : "Mostrar mais"}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Desktop
                  <>
                    <div className=" w-full flex flex-row justify-around px-2 py-5  backdrop-blur-xl bg-white/10 m-0 lg:m-5 rounded-xl ">
                      <BioSessionCard
                        PositionName="React Testing"
                        CompanyName="CODEACADEMY"
                        Date="DEZ/2022"
                        Description="Introdução a testes unitários usando Jest, Cypress, Enzyme, Mocha, Jasmine e React Testing Library."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="React Router"
                        CompanyName="CODEACADEMY"
                        Date="OUT/2022"
                        Description="Criação de rotas em react. Rotear usuarios para diferentes URL's,usando rotas dinamicas"
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="Introduction to UI/UX"
                        CompanyName="CODEACADEMY"
                        Date="AGO/2022"
                        Description="Introdução aos conceitos para desenvolvimento de interfaces."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="Metodologias ágeis"
                        CompanyName="CODEACADEMY"
                        Date="FEV/2022"
                        Description="Introdução a SCRUM e KANBAN."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />
                    </div>

                    <div className="w-full flex flex-row justify-around px-2 py-5  backdrop-blur-xl bg-white/10 m-0 lg:m-5 md:my-5  rounded-xl ">
                      <BioSessionCard
                        PositionName="React JS"
                        CompanyName="UDEMY"
                        Date="DEZ/2021"
                        Description="Prop.Types, CSS-in-JS (Styled Components), Vite, Tailwind
                    CSS, Redux."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="Javascript"
                        CompanyName="UDEMY"
                        Date="DEZ/2019"
                        Description="Criação de rotas em react."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="BOOTSTRAP"
                        CompanyName="UDEMY"
                        Date="AGO/2018"
                        Description="Introdução aos conceitos para desenvolvimento de
                    interfaces."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="SASS"
                        CompanyName="UDEMY"
                        Date="SET/2018"
                        Description="Desenvolvimento ágil de CSS com Variables, Transitions,
                    Dropdowns, Overlays."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around px-2 py-5  backdrop-blur-xl bg-white/10 m-0 lg:m-5 md:my-5 rounded-xl ">
                      <BioSessionCard
                        PositionName="Est. de mkt e e-commerce"
                        CompanyName="SENAC"
                        Date="SET/2018"
                        Description="Analise a criação de estratégias e ações de marketing com
                    foco em conversão de usuários em plataformas digitais e
                    e-commerce."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="JQUERY 3"
                        CompanyName="UDEMY"
                        Date="NOV/2017"
                        Description="Analise a criação de estratégias e ações de marketing com
                    foco em conversão de usuários em plataformas digitais e
                    e-commerce."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="CSS 3"
                        CompanyName="UDEMY"
                        Date="SET/2017"
                        Description="Formatação de Layouts com media queries, flexbox and grid."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="HTML 5"
                        CompanyName="UDEMY"
                        Date="AGO/2016"
                        Description="Elaboração e desenvolvimento de layouts semanticos."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />
                    </div>
                    <div className="w-full flex flex-row justify-around px-2 py-5  backdrop-blur-xl bg-white/10 m-0 lg:m-5 md:my-5 rounded-xl ">
                      <BioSessionCard
                        PositionName="Design gráfico com enfãse em comunicação digital"
                        CompanyName="UNIP"
                        Date="DEZ/2016"
                        Description="Designer Gráfico com enfâse em comunicação digital."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="Direção de arte, criatividade aplicada e design na prática"
                        CompanyName="COLOSSEO"
                        Date="NOV/2016"
                        Description="Curso ministrado por Saulo Mileti, onde debatemos a função
                    do diretor de arte, seu dever de transcrever criatividade
                    de muitas midias diferentes em algo prático.."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="Design além do obvio: Estética, lógica, harmonia e a contrução do belo"
                        CompanyName="COLOSSEO"
                        Date="AGO/2016"
                        Description="Curso ministrado por Saulo Mileti, onde debatemos a função
                    do diretor de arte, seu dever de transcrever criatividade
                    de muitas midias diferentes em algo prático.."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />

                      <BioSessionCard
                        PositionName="Base e fundamento: Design, Origem, função e principio estético"
                        CompanyName="COLOSSEO"
                        Date="MAR/2016"
                        Description="Curso ministrado por Saulo Mileti, onde discutimos o design de uma forma ampla, desde o conceito de projetos, passando por suas funcões e impacto na sociedade e a sua influência quanto a criação de padrões estéticos."
                        FormationCollapseStatus={FormationCollapseStatus}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioSession;
