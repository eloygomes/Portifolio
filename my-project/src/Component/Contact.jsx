import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, useInView, useAnimation } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const setCurrentSession = () => ({ type: "contato" });

const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const transition = (delay = 0.05) => ({ duration: 0.5, delay });

function Contact() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 961 : false
  );

  const dispatch = useDispatch();
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const mainControls = useAnimation();

  const copy = useMemo(
    () =>
      isMobile
        ? [
            "Estou disponível para novas parcerias e desafios criativos.",
            "Fique à vontade para me chamar e vamos construir algo extraordinário juntos.",
          ]
        : [
            "Seja qual for o escopo do seu projeto online, estou pronto para torná-lo uma realidade.",
            "Com uma abordagem centrada em suas necessidades e objetivos, vamos trabalhar juntos para alcançar resultados tangíveis e duradouros.",
          ],
    [isMobile]
  );

  const contactCards = useMemo(
    () => [
      {
        label: "E-mail",
        href: "mailto:eloy.gomes@icloud.com",
        icon: <FiMail className="w-6 h-6" />,
        value: "eloy.gomes@icloud.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/eloyrockgomes/",
        icon: <FiLinkedin className="w-6 h-6" />,
        value: "linkedin.com/in/eloyrockgomes",
      },
      {
        label: "GitHub",
        href: "https://github.com/eloygomes",
        icon: <FiGithub className="w-6 h-6" />,
        value: "github.com/eloygomes",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/5511981871629",
        icon: <FaWhatsapp className="w-6 h-6" />,
        value: "(11) 98187-1629",
      },
    ],
    []
  );

  useLayoutEffect(() => {
    if (isInView) {
      dispatch(setCurrentSession());
      mainControls.start("visible");
    }
  }, [isInView, menuDisplayOpt, dispatch, mainControls]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 961);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="contato"
      ref={sectionRef}
      className={`bg-[#2A2344] w-screen ${
        isMobile ? "h-screen flex flex-col p-5" : "h-screen flex flex-col"
      }`}
    >
      {isMobile ? (
        <>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center flex-1">
              <div className="w-full h-full container mx-auto space-y-5 ">
                <motion.h1
                  variants={variants}
                  initial="hidden"
                  animate={mainControls}
                  transition={transition(0.05)}
                  className=" text-6xl font-medium"
                >
                  Vamos trabalhar juntos
                </motion.h1>

                {copy.map((paragraph, idx) => (
                  <motion.h5
                    key={paragraph}
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    transition={transition(0.25 + idx * 0.05)}
                    className=" text-xs max-w-lg"
                  >
                    {paragraph}
                  </motion.h5>
                ))}

                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate={mainControls}
                  transition={transition(0.3)}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
                >
                  {contactCards.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`backdrop-blur-xl ${
                        item.label === "WhatsApp"
                          ? "bg-[#07c900]/10"
                          : "bg-white/10"
                      } rounded-xl p-4  text-center flex items-center justify-between sm:justify-start gap-3 transition hover:bg-white/20`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex items-center gap-3 text-sm sm:text-base">
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </span>
                      <span className="text-xs sm:text-sm text-right sm:text-left flex-1">
                        {item.value}
                      </span>
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <footer className="mt-auto bg-[#100c20] text-white/80 text-xs py-5 shadow-inner w-screen -ml-5 -mb-5 ">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-4">
              <div className="text-sm">
                <p className="font-semibold text-center">Eloy Vilela Gomes</p>
                <p className="text-xs opacity-80 text-center">
                  Full Stack Developer
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide">
                <p className="text-xs opacity-80 text-center">
                  © 2025 Todos os direitos reservados
                </p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <div className="bg-[#2A2344] w-screen h-screen flex flex-col">
          <div className="container mx-auto mt-10">
            <div className="flex flex-row mx-32">
              <div className="w-full h-full container mx-auto space-y-4 space-x-4">
                <motion.h1
                  ref={sectionRef}
                  variants={variants}
                  initial="hidden"
                  animate={mainControls}
                  transition={transition(0.05)}
                  className="py-0 text-8xl font-medium mt-52"
                >
                  Vamos trabalhar juntos
                </motion.h1>

                {/* <div className="space-y-3">
                  <p className="text-sm text-white/80">São Paulo, SP</p>
                </div> */}

                {copy.map((paragraph, idx) => (
                  <motion.h5
                    key={paragraph}
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    transition={transition(0.3 + idx * 0.05)}
                    className={`py-2 text-sm ${
                      idx === 0 ? "max-w-[50vw]" : ""
                    }`}
                  >
                    {paragraph}
                  </motion.h5>
                ))}
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate={mainControls}
                  transition={transition(0.4)}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2"
                >
                  {contactCards.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`backdrop-blur-xl ${
                        item.label === "WhatsApp"
                          ? "bg-[#07c900]/10"
                          : "bg-white/10"
                      } rounded-xl p-4  text-center flex items-center justify-between sm:justify-start gap-3 transition hover:bg-white/20 h-`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex flex-col justify-between gap-4 ">
                        <span className="font-medium text-left text-xs uppercase">
                          {item.label}
                        </span>
                        <div className="flex w-full flex-row justify-between items-center">
                          <div className="w-3/12">
                            <span className="flex mr-2  items-center gap-3 text-sm sm:text-base">
                              {item.icon}
                            </span>
                          </div>
                          <div className="w-9/12">
                            <span className="text-xs sm:text-sm text-right sm:text-left flex-1 truncate ">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <footer className="mt-auto bg-[#100c20] text-white/80 py-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-4">
              <div className="text-sm">
                <p className="font-semibold">Eloy Vilela Gomes</p>
                {/* <p className="text-xs opacity-80">Full Stack Developer</p> */}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide">
                <p className="text-xs opacity-80">
                  © 2025 Todos os direitos reservados
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Contact;
