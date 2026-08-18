import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import { FiBookOpen, FiCode, FiLayers, FiPenTool } from "react-icons/fi";
import animationData from "../assets/63487-programming-computer.json";

import "react-vertical-timeline-component/style.min.css";
import "./BioSession.css";
import FormationRoadmap from "./FormationRoadMap";
import FormationRoadMapMOBILE from "./FormationRoadMapMOBILE";
import { useMediaQuery } from "./FormationExperience";

const storyItems = [
  {
    number: "01",
    icon: FiBookOpen,
    label: "Formação híbrida",
    text: "Graduando em Engenharia de Software e formado em Design Gráfico.",
  },
  {
    number: "02",
    icon: FiCode,
    label: "Construção digital",
    text: "Desde 2019, desenvolvo soluções web e mobile, conectando interfaces, dados e produtos digitais.",
  },
  {
    number: "03",
    icon: FiPenTool,
    label: "Visão criativa",
    text: "A experiência como diretor de arte em marcas de tecnologia une visão estética e pensamento técnico.",
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "jQuery",
  "React Js",
  "Node",
  "Java",
  "Python",
  "PHP",
  "Wordpress",
  "SQL",
  "MongoDB",
  "React Native",
  "Docker",
];

function BioSession() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const dispatch = useDispatch();
  const mainControls = useAnimation();
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);
  const useCompactFormation = useMediaQuery("(max-width: 1025px)");

  useEffect(() => {
    if (!isInView) return;
    mainControls.start("visible");
    dispatch({ type: "bio" });
  }, [dispatch, isInView, mainControls, menuDisplayOpt]);

  return (
    <div className="bio-session" id="bio" ref={ref}>
      <section className="bio-hero" aria-labelledby="bio-title">
        <motion.div
          className="bio-profile-card"
          variants={{
            hidden: { opacity: 0, y: 34 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="bio-card-header">
            <span className="bio-kicker">Perfil profissional</span>
          </header>

          <div className="bio-main-grid">
            <div className="bio-copy">
              <h1 id="bio-title">
                Engenheiro
                <strong>de Software</strong>
              </h1>
              <p className="bio-lead">
                Transformo problemas complexos em experiências digitais claras,
                funcionais e visualmente consistentes.
              </p>

              <div className="bio-quick-facts" aria-label="Resumo profissional">
                <span>
                  <strong>6+</strong> anos de experiência em desenvolvimento
                </span>
              </div>
            </div>

            <div className="bio-visual" aria-hidden="true">
              <span className="bio-visual-orbit" />
              <Lottie
                className="bio-lottie"
                animationData={animationData}
                loop
              />
              <span className="bio-visual-tag bio-visual-tag-top">
                <FiLayers /> Produto digital
              </span>
              <span className="bio-visual-tag bio-visual-tag-bottom">
                <FiCode /> Front + Back
              </span>
            </div>
          </div>

          <div className="bio-story-grid" aria-label="Minha trajetória">
            {storyItems.map(({ number, icon: Icon, label, text }) => (
              <article className="bio-story-card" key={number}>
                <div className="bio-story-topline">
                  <span className="bio-story-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="bio-story-number">{number}</span>
                </div>
                <h2>{label}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <p className="bio-swipe-hint">
            Deslize para conhecer minha trajetória
          </p>

          <footer className="bio-stack-rail">
            <span className="bio-stack-label">Stack em movimento</span>
            <div>
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </footer>
        </motion.div>
      </section>

      <div className="bio-formation-wrap">
        {useCompactFormation ? (
          <FormationRoadMapMOBILE />
        ) : (
          <FormationRoadmap />
        )}
      </div>
    </div>
  );
}

export default BioSession;
