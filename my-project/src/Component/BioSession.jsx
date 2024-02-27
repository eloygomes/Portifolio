// eslint-disable-next-line no-unused-vars
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Lottie from "lottie-react";
import animationData from "../assets/63487-programming-computer.json";

import { BiLogoReact } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { RiJavascriptFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { SiGooglemarketingplatform } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoCss3 } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { GiHiveMind } from "react-icons/gi";
import { BsRocketFill } from "react-icons/bs";
import { GiFinishLine } from "react-icons/gi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function BioSession() {
  // const [FormationCollapseStatus, setFormationCollapseStatus] = useState(false);

  // const [mobileCollapse, setMobileCollapse] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const dispatch = useDispatch();

  const mainControls = useAnimation();

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      // console.log("bio");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      console.log("bio");
    }
  }, [menuDisplayOpt]);

  const someAnimation = useRef(null);

  function currentSession() {
    return { type: "bio" };
  }

  // console.log(menuDisplayOpt);

  return (
    <div>
      <div className=" w-screen flex flex-col mt-10" id="bio" ref={ref}>
        <div className="container mx-auto flex flex-col justify-center">
          <div className="flex flex-col ">
            {/* BOX */}
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="backdrop-blur-xl bg-white/10 p-5 m-5 sm:p-10 md:p-5 lg:p-5 xl:p-5 2xl:p-5 sm:m-5 lg:m-32 2xl:m-32 lg:mx-16 sm:my-40 lg:mt-40 2xl:mt-40 my-00 rounded-xl ">
                <div className="flex flex-col-reverse sm:flex-flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-row 2xl:flex-row">
                  <div className="w-full h-full flex flex-col mx-auto justify-center md:p-5 lg:p-5">
                    <div className="w-fit"></div>

                    <motion.h1
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.45 }}
                      className=" w-fit -ml-1 pb-5 sm:text-4xl md:text-6xl text-5xl lg:text-7xl font-medium hover:text-[#D6223B]"
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
                      className="bg-[#D6223B] sm:text-xl text-lg w-fit mb-5 px-1"
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
                      className="py-3 sm:py-3 md:py-3 lg:py-1 2xl:py-3 text-sm  mt-5  w-fit"
                    >
                      Desenvolvedor full stack com mais de 15 anos de
                      experiência, formado em design gráfico, com sólida
                      experiência como diretor de arte atuando junto a grandes
                      marcas de tecnologia.
                    </motion.h5>
                    <motion.h5
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="py-3 sm:py-3 md:py-3 lg:py-1 2xl:py-3 text-sm  w-fit"
                    >
                      Nos últimos três anos, tenho focado no desenvolvimento
                      front-end, trabalhando com uma variedade de tecnologias,
                      incluindo Wordpress, JavaScript, React e Node.js. Tenho
                      experiência em desenvolvimento de interfaces(UX/UI) e
                      design responsivo.
                    </motion.h5>
                    <motion.h5
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.65 }}
                      className="py-3 sm:py-3 md:py-3 lg:py-1 2xl:py-3 text-sm w-fit"
                    >
                      Acredito que a tecnologia tem o poder de transformar a
                      vida das pessoas e que o design pode ser uma ferramenta
                      poderosa para isso. Por isso, busco sempre unir minhas
                      habilidades técnicas e criativas para criar produtos
                      digitais que sejam funcionais, bonitos e agradáveis de
                      usar.
                    </motion.h5>
                  </div>
                  <div className="sm:w-[50%] md:w-[40%] lg:w-[40%] xl:w-full lg:max-w-fit w-full absolute sm:absolute md:absolute lg:absolute xl:relative 2xl:relative sm:right-[-20px] md:right-[-20px] sm:top-[00px] md:top-[40px] lg:top-[10px] flex-col justify-center hidden sm:block md:block lg:block xl:block 2xl:block ">
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
            </div>
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            {/* TIMELINE */}
            <div className="container mx-auto">
              <div className="flex flex-col h-full mb-52 md:p-5">
                {/* First ROW */}
                <div className="flex flex-row  justify-between mx-5 mt-20 mb-36">
                  <div className="flex flex-col justify-between w-full">
                    <div className="w-full text-center ">
                      <h1 className="bg-[#2A2344] mx-auto w-full  p-2">
                        Formação
                      </h1>
                    </div>
                    <div className="w-full">
                      <p className="bg-[#2A2344] w-full mx-auto text-center  py-5 p-2">
                        Aqui você encontra um mapa da minha jornada educacional,
                        que me levou aonde estou hoje.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <VerticalTimeline lineColor="#e91e63">
                    {window.innerWidth <= 961 ? (
                      // mobile
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work cursor-pointer top-[-50px]"
                        contentStyle={{
                          color: "white",
                        }}
                        iconStyle={{
                          background: "#2a2344",
                          color: "#fff",
                        }}
                        // date="Dez/2022"
                        dateClassName="text-white"
                        textClassName="vertical-align01" // muda a cor do texto
                        icon={<BsRocketFill />}
                        id="formationTimeline01"
                      >
                        <h3 className="vertical-timeline-element-title h-1">
                          e subindo...
                        </h3>
                      </VerticalTimelineElement>
                    ) : (
                      // desktop
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work cursor-pointer top-[-90px] "
                        iconStyle={{
                          background: "#2a2344",
                          color: "#fff",
                        }}
                        icon={<BsRocketFill />}
                      />
                    )}

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Fev/2024"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        REACT NATIVE
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CodeCademy
                      </h4>
                      <p className="text-sm">
                        Introdução através dos princípios fundamentais do React
                        Native, incluindo componentes, estado, props e ciclo de
                        vida. Com uma abordagem prática e hands-on, os alunos
                        aprenderão a configurar um ambiente de desenvolvimento,
                        criar interfaces de usuário responsivas e dinâmicas, e
                        utilizar recursos nativos do dispositivo, como câmera,
                        geolocalização e armazenamento local. Além disso, foram
                        exploradas técnicas avançadas, como navegação entre
                        telas, gerenciamento de estado global e integração com
                        APIs externas.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Jan/2024"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        mySQL
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        Curso em vídeo - Gustavo Guanabara
                      </h4>
                      <p className="text-sm">
                        Durante este curso, fomos serão guiados através dos
                        princípios fundamentais do MySQL, incluindo criação de
                        bancos de dados, tabelas e consultas SQL.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Nov/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        mySQL
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CodeCademy
                      </h4>
                      <p className="text-sm">
                        Curso básico de MySQL oferece uma sólida introdução a um
                        dos sistemas de gerenciamento de banco de dados
                        relacionais mais amplamente utilizados no mundo.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Nov/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        NGINX
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        Fabricio Veronez cursos
                      </h4>
                      <p className="text-sm">
                        Durante este curso, fomos introduzidos aos fundamentos
                        do Nginx, incluindo configuração básica do servidor,
                        gerenciamento de virtual hosts, balanceamento de carga,
                        proxy reverso e segurança.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Out/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        DOCKER
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        Fabricio Veronez cursos
                      </h4>
                      <p className="text-sm">
                        Durante este curso, fomos introduzidos aos conceitos
                        fundamentais do Docker, incluindo contêineres, imagens,
                        volumes e redes. Além disso, foram exploradas técnicas
                        avançadas, como a composição de múltiplos contêineres
                        com o Docker Compose e a orquestração de contêineres com
                        o Docker Swarm.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Ago/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        MONGO DB
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CODEACADEMY
                      </h4>
                      <p className="text-sm">
                        O curso básico de MongoDB ofereceu uma introdução as
                        tecnologias de banco de dados NoSQL explorando os
                        fundamentos do MongoDB, incluindo conceitos como
                        documentos, coleções, consultas, índices e agregações.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Jun/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        TYPESCRIPT
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CODEACADEMY
                      </h4>
                      <p className="text-sm">
                        Curso de TypeScript projetado para introduzir os alunos
                        ao poder e à eficiência desta linguagem de programação
                        superset do JavaScript abordando conceitos fundamentais
                        do TypeScript,
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Mar/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        NODE JS
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CODEACADEMY
                      </h4>
                      <p className="text-sm">
                        O curso de Node.js ofereceu uma introdução abrangente ao
                        ambiente de execução JavaScript no backend, capacitando
                        a construir aplicações web robustas e escaláveis.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Jan/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        REDUX
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CODEACADEMY
                      </h4>
                      <p className="text-sm">
                        Redux é uma biblioteca para armazenamento de estados de
                        aplicações JavaScript.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Jan/2023"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        GIT HUB
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CODEACADEMY
                      </h4>
                      <p className="text-sm">
                        Comandos Git CLI / Git Hub Desktop
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer "
                      contentStyle={{
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Dez/2022"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        React Testing
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle text-sm font-semibold">
                        CODEACADEMY
                      </h4>
                      <p className="text-sm">
                        Introdução a testes unitários usando Jest, Cypress,
                        Enzyme, Mocha, Jasmine e React Testing Library.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Out/2022"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        React Router
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        CODEACADEMY
                      </h4>
                      <p>
                        Criação de rotas em react. Rotear usuarios para
                        diferentes URLs, usando rotas dinamicas.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Ago/2022"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<FaUsers />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Introduction to UI/UX
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        CODEACADEMY
                      </h4>
                      <p>
                        Introdução aos conceitos para desenvolvimento de
                        interfaces com foco no usuário.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Fev/2022"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<GiBookshelf />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Metodologias ágeis
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        CODEACADEMY
                      </h4>
                      <p>Introdução a SCRUM e KANBAN.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Dez/2020"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoReact />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        React JS
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>
                        Prop.Types, CSS-in-JS (Styled Components), Vite,
                        Tailwind CSS, Redux.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Dez/2019"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<RiJavascriptFill />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Javascript
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>
                        Curso focado em criar aplicações web dinâmicas e
                        interativas, direcionado para aprender os fundamentos de
                        JavaScript, como variáveis, tipos de dados, operadores,
                        controle de fluxo, funções, objetos, classes, eventos,
                        AJAX e DOM.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Ago/2019"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<RiBootstrapLine />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Bootstrap
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>
                        Curso voltado a usar o Bootstrap para criar aplicações
                        web responsivas. Abordando os componentes, grids,
                        formulários, tabelas, modals, tooltips, popovers,
                        carousels, alerts e dropdowns.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Set/2018"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<IoLogoSass />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        SASS
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>
                        Desenvolvimento ágil de CSS com Variables, Transitions,
                        Dropdowns, Overlays.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Set/2018"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<SiGooglemarketingplatform />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Estratégias de marketing e e-commerce
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        SENAC
                      </h4>
                      <p>
                        Analise a criação de estratégias e ações de marketing
                        com foco em conversão de usuários em plataformas
                        digitais e e-commerce.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Nov/2017"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<DiJqueryLogo />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        JQUERY 3
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>
                        Analise a criação de estratégias e ações de marketing
                        com foco em conversão de usuários em plataformas
                        digitais e e-commerce.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Set/2017"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<BiLogoCss3 />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        CSS 3
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>
                        Formatação de Layouts com media queries, flexbox and
                        grid.
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Ago/2017"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<AiFillHtml5 />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        HTML 5
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        UDEMY
                      </h4>
                      <p>Elaboração e desenvolvimento de layouts semanticos.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Dez/2016"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<MdDesignServices />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Design gráfico com enfãse em comunicação digital
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle ">
                        UNIVERSIDADE PAULISTA - UNIP
                      </h4>
                      <p>Designer Gráfico com enfâse em comunicação digital.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Nov/2016"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<GiHiveMind />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Direção de arte, criatividade aplicada e design na
                        prática
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        COLOSSEO
                      </h4>
                      <p>
                        Curso ministrado por Saulo Mileti, onde debatemos a
                        função do diretor de arte, seu dever de transcrever
                        criatividade de muitas midias diferentes em algo
                        prático..
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Ago/2016"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<GiHiveMind />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Estética, lógica, harmonia e a contrução do belo
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        COLOSSEO
                      </h4>
                      <p>
                        Curso ministrado por Saulo Mileti, onde debatemos a
                        função do diretor de arte, seu dever de transcrever
                        criatividade de muitas midias diferentes em algo
                        prático..
                      </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                      className="vertical-timeline-element--work cursor-pointer  "
                      contentStyle={{
                        // backgroundColor: "rgba(255, 255, 255)",
                        // backdropFilter: "blur(80px)",
                        // opacity: "0.8",
                        color: "white",
                      }}
                      iconStyle={{
                        background: "#2a2344",
                        color: "#fff",
                      }}
                      date="Mar/2016"
                      dateClassName="text-white"
                      textClassName="vertical-align01" // muda a cor do texto
                      icon={<GiHiveMind />}
                      id="formationTimeline01"
                    >
                      <h3 className="vertical-timeline-element-title text-2xl">
                        Design, Origem, função e principio estético
                      </h3>

                      <h4 className="vertical-timeline-element-subtitle">
                        COLOSSEO
                      </h4>
                      <p>
                        Curso ministrado por Saulo Mileti, onde discutimos o
                        design de uma forma ampla, desde o conceito de projetos,
                        passando por suas funcões e impacto na sociedade e a sua
                        influência quanto a criação de padrões estéticos.
                      </p>
                    </VerticalTimelineElement>

                    {window.innerWidth <= 961 ? (
                      // mobile
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work cursor-pointer bottom-[-50px]"
                        contentStyle={{
                          color: "white",
                        }}
                        iconStyle={{
                          background: "#2a2344",
                          color: "#fff",
                        }}
                        // date="Dez/2022"
                        dateClassName="text-white"
                        textClassName="vertical-align01" // muda a cor do texto
                        icon={<GiFinishLine />}
                        id="formationTimeline01"
                      >
                        <h3 className="vertical-timeline-element-title h-1">
                          Inicio
                        </h3>
                      </VerticalTimelineElement>
                    ) : (
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work cursor-pointer bottom-[-80px] "
                        iconStyle={{
                          background: "#2a2344",
                          color: "#fff",
                        }}
                        // icon={<StarIcon />}
                        icon={<GiFinishLine />}
                      />
                    )}
                  </VerticalTimeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioSession;
