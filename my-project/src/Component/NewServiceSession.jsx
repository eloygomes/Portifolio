import { motion, useInView, useAnimation } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useLayoutEffect, useRef } from "react";

import EmailButtonCustom from "./suport/EmailButton1";
import EmailButtonBranding from "./suport/EmailButton2";
import EmailButtonImpresso from "./suport/EmailButton3";
import EmailButtonFoto from "./suport/EmailButton4";
import EmailButtonEdicao from "./suport/EmailButton5";
import EmailButtonPodcast from "./suport/EmailButton6";

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

  // USER EFFECTS //
  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      // console.log("services");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      // console.log("services");
    }
  }, [menuDisplayOpt]);

  return (
    <div
      className="w-screen sm:h-screen md:h-full lg:h-screen xl:h-full 2xl:h-full h-fit flex flex-col bg-[#19142A] bg-opacity-95 xl:min-h-screen"
      id="services"
      ref={ref}
    >
      <div className="container mx-auto flex flex-col sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center  justify-start sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center items-center sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen h-fit mt-24 sm:mt-00 md:mt-00 lg:mt-00 xl:mt-00 2xl:mt-00 ">
        <div className=" mb-[10vh] sm:mt-[12vh] md:mt-[12vh] lg:mt-[12vh] xl:mt-0 2xl:mt-0 mx-5 sm:mx-10 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-32 p-5 backdrop-blur-xl bg-white bg-opacity-10 rounded-xl">
          <div className="container mx-auto flex flex-col justify-center text-center p-5 xl:p-0">
            <div className="flex flex-col">
              <h1>Serviços</h1>
              <p className="md:mx-20 sm:mx-0 p-5">
                Segue abaixo alguns dos serviços oferecidos.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-rows-2 gap-x-10 sm:gap-y-10 md:gap-y-10 lg:gap-y-10 xl:gap-y-10 2xl:gap-y-10 gap-y-5 md:p-5">
                <EmailButtonCustom>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
                  >
                    <div className=" rounded-xl flex flex-col z-50">
                      <img
                        src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_04-1a29e693.jpg"
                        alt=""
                        className="object-cover rounded-xl"
                      />
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
                        UI/UX
                      </h1>
                      {window.innerWidth <= 1025 ? ( // Mobile
                        // <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-3 px-5 text-[0.64rem] lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Criação de wireframes, prototipagem, design system,
                          testes de usabilidade
                        </p>
                      ) : (
                        // D
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Criação de wireframes, prototipagem, design system,
                          testes de usabilidade
                        </p>
                      )}
                    </div>
                  </motion.div>
                </EmailButtonCustom>
                <EmailButtonBranding>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
                  >
                    <div className=" rounded-xl flex flex-col z-50">
                      <img
                        src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_06-85a77b29.jpg"
                        alt=""
                        className="object-cover rounded-xl"
                      />
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
                        BRANDING
                      </h1>
                      {window.innerWidth <= 1025 ? ( // Mobile
                        // <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-3 px-5 text-[0.64rem] lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Análise de dados, elaboração de estratégia de
                          comunicação, design de produto e interação.
                        </p>
                      ) : (
                        // D
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Análise de dados, elaboração de estratégia de
                          comunicação, design de produto e interação.
                        </p>
                      )}
                    </div>
                  </motion.div>
                </EmailButtonBranding>
                <EmailButtonImpresso>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
                  >
                    <div className=" rounded-xl flex flex-col z-50">
                      <img
                        src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_05-45d24d3b.jpg"
                        alt=""
                        className="object-cover rounded-xl"
                      />
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
                        IMPRESSOS
                      </h1>
                      {window.innerWidth <= 1025 ? ( // Mobile
                        // <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-3 px-5 text-[0.64rem] lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Analise de marca, criação de conceito, desenvolvimento
                          de protótipos
                        </p>
                      ) : (
                        // D
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Analise de marca, criação de conceito, desenvolvimento
                          de protótipos
                        </p>
                      )}
                    </div>
                  </motion.div>
                </EmailButtonImpresso>
                <EmailButtonFoto>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
                  >
                    <div className=" rounded-xl flex flex-col z-50">
                      <img
                        src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_01-130e691d.jpg"
                        alt=""
                        className="object-cover rounded-xl"
                      />
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
                        FOTOGRAFIA
                      </h1>
                      {window.innerWidth <= 1025 ? ( // Mobile
                        // <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-3 px-5 text-[0.64rem] lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Captação, edição e impressão de ensaios artísticos,
                          casamentos produto e comercial.
                        </p>
                      ) : (
                        // D
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Captação, edição e impressão de ensaios artísticos,
                          casamentos produto e comercial.
                        </p>
                      )}
                    </div>
                  </motion.div>
                </EmailButtonFoto>
                <EmailButtonEdicao>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
                  >
                    <div className=" rounded-xl flex flex-col z-50">
                      <img
                        src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_02-51365147.jpg"
                        alt=""
                        className="object-cover rounded-xl"
                      />
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
                        EDIÇÃO
                      </h1>
                      {window.innerWidth <= 1025 ? ( // Mobile
                        // <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-3 px-5 text-[0.64rem] lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Planejamento, pesquisa, briefing, conceito, roteiro,
                          produção e edição de videos.
                        </p>
                      ) : (
                        // D
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Planejamento, pesquisa, briefing, conceito, roteiro,
                          produção e edição de videos.
                        </p>
                      )}
                    </div>
                  </motion.div>
                </EmailButtonEdicao>
                <EmailButtonPodcast>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="col-span-1 row-span-1 cursor-pointer rounded-xl flex flex-col relative"
                  >
                    <div className=" rounded-xl flex flex-col z-50">
                      <img
                        src="https://www.koncretejungle.com.br/eloygomes/assets/carreira_bg_03-afb38374.jpg"
                        alt=""
                        className="object-cover rounded-xl"
                      />
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <div className="w-full h-full bg-gradient-to-b from-transparent to-black absolute opacity-1 rounded-xl"></div>
                      <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-5 sm:top-[-4rem] md:top-5 lg:top-2 xl:top-5 2xl:top-5 p-5">
                        PODCAST
                      </h1>
                      {window.innerWidth <= 1025 ? ( // Mobile
                        // <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-3 px-5 text-[0.64rem] lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Planejamento, pesquisa, briefing, conceito, roteiro,
                          produção, gravação, apresentação e publicação de
                          podcasts.
                        </p>
                      ) : (
                        // D
                        <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 lg:text-[0.64rem] 2xl:text-sm lg:leading-[0.65rem] 2xl:leading-[1.25rem]">
                          Planejamento, pesquisa, briefing, conceito, roteiro,
                          produção, gravação, apresentação e publicação de
                          podcasts.
                        </p>
                      )}
                    </div>
                  </motion.div>
                </EmailButtonPodcast>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewServiceSession;
