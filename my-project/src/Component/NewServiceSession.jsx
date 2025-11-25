/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useLayoutEffect, useMemo, useRef } from "react";

import EmailButtonCustom from "./suport/EmailButton1";
import EmailButtonBranding from "./suport/EmailButton2";
import EmailButtonImpresso from "./suport/EmailButton3";
import EmailButtonFoto from "./suport/EmailButton4";
import EmailButtonEdicao from "./suport/EmailButton5";

import carreira_bg_01 from "../assets/carreira_bg_01.jpg";
import carreira_bg_02 from "../assets/carreira_bg_02.jpg";
import carreira_bg_03 from "../assets/carreira_bg_03.jpg";
import carreira_bg_04 from "../assets/carreira_bg_04.jpg";
import carreira_bg_05 from "../assets/carreira_bg_05.jpg";
import carreira_bg_06 from "../assets/carreira_bg_06.jpg";

function ServiceCard({ Wrapper, image, title, description }) {
  return (
    <Wrapper>
      <motion.article
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/5
                  backdrop-blur-xl bg-white/10 shadow-xl shadow-black/40 backdrop-blur-xl"
      >
        <div className="relative h-44 sm:h-48 md:h-52 lg:h-56 w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

          <div className="absolute left-4 right-4 top-3 flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              Solução
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex-1 px-4 pt-3 pb-4 flex items-center">
          <p className="text-xs md:text-sm text-white/75 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between px-4 pb-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span className="transition group-hover:text-[#D6223B] text-[8px]">
            Falar sobre {title.toLowerCase()}
          </span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </motion.article>
    </Wrapper>
  );
}

function NewServiceSession() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const dispatch = useDispatch();

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

  const services = useMemo(
    () => [
      {
        Wrapper: EmailButtonCustom,
        image: carreira_bg_01,
        title: "Front-End",
        description:
          "Criação da parte visual e interativa: landing pages, sites completos, e-commerces, dashboards e UIs responsivas com foco em usabilidade e acessibilidade.",
      },
      {
        Wrapper: EmailButtonBranding,
        image: carreira_bg_02,
        title: "Back-End ",
        description:
          "APIs REST/GraphQL de alta performance, integrações com serviços externos e webhooks, gestão de bancos relacionais e NoSQL para sustentar a aplicação.",
      },
      {
        Wrapper: EmailButtonImpresso,
        image: carreira_bg_03,
        title: "Mobile",
        description:
          "Apps híbridos para Android e iOS usando React Native, compartilhando uma base de código única e entregando experiência nativa.",
      },
      {
        Wrapper: EmailButtonFoto,
        image: carreira_bg_04,
        title: "Desktop",
        description:
          "Apps desktop multiplataforma (Windows, Linux, macOS) com Electron ou Flutter, incluindo integrações com APIs, bancos remotos e sistemas existentes.",
      },
      {
        Wrapper: EmailButtonEdicao,
        image: carreira_bg_05,
        title: "Soluções Técnicas",
        description:
          "Arquitetura escalável, microserviços, gerenciamento de estado (Redux/Zustand), CI/CD para deploys contínuos e automações com n8n e orquestradores.",
      },
      {
        Wrapper: EmailButtonEdicao,
        image: carreira_bg_06,
        title: "Análise de Dados",
        description:
          "Coleta, processamento e visualização de dados para insights acionáveis, utilizando ferramentas como Python, Pandas e Tableau.",
      },
    ],
    []
  );

  return (
    <div
      id="services"
      ref={ref}
      className="w-full min-h-screen bg-[#19142A]/95"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 pt-10 xs:pt-24 sm:pt-24 md:pt-24 lg:pt-24 xl:pt-24  pb-16 lg:pb-24 flex flex-col ">
        <header className="space-y-6 ">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 backdrop-blur-xl bg-white/10 px-3 py-1"> */}
          {/* <span className="h-1.5 w-1.5 rounded-full bg-[#D6223B]" /> */}
          {/* <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Serviços
            </span> */}
          {/* </div> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Serviços</h2>
          <div className="w-9/12 sm:w-1/2 md:w-full lg:w-full xl:w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white ">
              Como posso ajudar o seu projeto?
            </h2>
          </div>
        </header>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 lg:gap-14 mt-20 items-start "
        >
          {/* Coluna de texto (esquerda no desktop, topo no mobile) */}

          {/* Grid de cards */}
          <div className="w-full">
            {/* Mobile: grid + bom espaçamento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-5 sm:gap-6 lg:gap-7 auto-rows-[1fr] items-stretch ">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  Wrapper={service.Wrapper}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NewServiceSession;
