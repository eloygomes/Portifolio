/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import EmailButtonCustom from "./suport/EmailButton1";
import EmailButtonBranding from "./suport/EmailButton2";
import EmailButtonImpresso from "./suport/EmailButton3";
import EmailButtonFoto from "./suport/EmailButton4";
import EmailButtonEdicao from "./suport/EmailButton5";
import EmailButtonPodcast from "./suport/EmailButton6";

import carreira_bg_01 from "../assets/carreira_bg_01.jpg";
import carreira_bg_02 from "../assets/carreira_bg_02.jpg";
import carreira_bg_03 from "../assets/carreira_bg_03.jpg";
import carreira_bg_04 from "../assets/carreira_bg_04.jpg";
import carreira_bg_05 from "../assets/carreira_bg_05.jpg";
import carreira_bg_06 from "../assets/carreira_bg_06.jpg";

function ServiceCard({ Wrapper, image, title, description, isMobile }) {
  return (
    <Wrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
      >
        <div className="rounded-xl flex flex-col z-50">
          <img src={image} alt={title} className="object-cover rounded-xl" />
          <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
          <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
            {title}
          </h1>
          <p
            className={`absolute inset-0 flex items-end justify-center text-start text-white px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem] ${
              isMobile ? "bottom-3 text-[0.64rem]" : "bottom-5 text-[0.64rem]"
            }`}
          >
            {description}
          </p>
        </div>
      </motion.div>
    </Wrapper>
  );
}

function NewServiceSession() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  function currentSession() {
    return { type: "services" };
  }

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      dispatch(currentSession());
    }
  }, [isInView, menuDisplayOpt, dispatch, mainControls]);

  useEffect(() => {
    const checkIsMobile = () =>
      typeof window !== "undefined" && window.innerWidth <= 1025;
    setIsMobile(checkIsMobile());

    const handleResize = () => setIsMobile(checkIsMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = useMemo(
    () => [
      {
        Wrapper: EmailButtonCustom,
        image: carreira_bg_01,
        title: "UI/UX",
        description:
          "Criação de wireframes, prototipagem, design system, testes de usabilidade",
      },
      {
        Wrapper: EmailButtonBranding,
        image: carreira_bg_02,
        title: "BRANDING",
        description:
          "Análise de dados, elaboração de estratégia de comunicação, design de produto e interação.",
      },
      {
        Wrapper: EmailButtonImpresso,
        image: carreira_bg_03,
        title: "IMPRESSOS",
        description:
          "Analise de marca, criação de conceito, desenvolvimento de protótipos",
      },
      {
        Wrapper: EmailButtonFoto,
        image: carreira_bg_04,
        title: "FOTOGRAFIA",
        description:
          "Captação, edição e impressão de ensaios artísticos, casamentos produto e comercial.",
      },
      {
        Wrapper: EmailButtonEdicao,
        image: carreira_bg_05,
        title: "EDIÇÃO",
        description:
          "Planejamento, pesquisa, briefing, conceito, roteiro, produção e edição de videos.",
      },
      {
        Wrapper: EmailButtonPodcast,
        image: carreira_bg_06,
        title: "PODCAST",
        description:
          "Planejamento, pesquisa, briefing, conceito, roteiro, produção, gravação, apresentação e publicação de podcasts.",
      },
    ],
    []
  );

  return (
    <div
      className="w-screen sm:h-screen md:h-full lg:h-screen xl:h-full 2xl:h-full h-fit flex flex-col bg-[#19142A] bg-opacity-95 xl:min-h-screen"
      id="services"
      ref={ref}
    >
      <div className="container mx-auto flex flex-col justify-start items-center sm:justify-center sm:items-center h-fit sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen mt-24">
        <div className="mb-[10vh] sm:mt-[12vh] md:mt-[12vh] lg:mt-[12vh] xl:mt-0 2xl:mt-0 mx-5 sm:mx-10 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-32 p-5 backdrop-blur-xl bg-white bg-opacity-10 rounded-xl">
          <div className="container mx-auto flex flex-col justify-center text-center p-5 xl:p-0">
            <div className="flex flex-col">
              <h1>Serviços</h1>
              <p className="md:mx-20 sm:mx-0 p-5">
                Segue abaixo alguns dos serviços oferecidos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-rows-2 gap-x-10 sm:gap-y-10 md:gap-y-10 lg:gap-y-10 xl:gap-y-10 2xl:gap-y-10 gap-y-5 md:p-5">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  Wrapper={service.Wrapper}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewServiceSession;
