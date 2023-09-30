import { motion } from "framer-motion";

function NewServiceSession() {
  return (
    <div
      className="w-screen flex flex-col bg-[#19142A] bg-opacity-95"
      id="services"
    >
      <div className="container mx-auto flex flex-col justify-center">
        <div className="min-h-[85vh] mb-[10vh] mt-[15vh] mx-5 p-5 backdrop-blur-xl bg-white bg-opacity-10 rounded-xl">
          <div className="container mx-auto flex flex-col justify-center text-center p-5">
            <div className="flex flex-col">
              <h1>Serviços</h1>
              <p className="md:mx-20 sm:mx-0 p-5">
                Segue abaixo alguns dos serviços oferecidos.
              </p>
            </div>
            <div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-rows-2 gap-x-10 gap-y-10 md:p-5">
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
                    <h1 className="absolute inset-0 flex items-center justify-start text-2xl text-white top-10 p-5">
                      UI/UX
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Analise perfil de usuários, criação de wireframes,
                        prototipagem, design system, testes de usabilidade
                      </p>
                    ) : (
                      // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Analise perfil de usuários, Criação de wireframes,
                        Prototipagem, Design system, Testes de usabilidade
                      </p>
                    )}
                  </div>
                </motion.div>

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
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      BRANDING
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Análise de dados e definição da voz da marca, Elaboração
                        de estratégia de comunicação, design de produto, de
                        serviço e interação.
                      </p>
                    ) : (
                      // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Análise de dados e definição da voz da marca, Elaboração
                        de estratégia de comunicação, design de produto, de
                        serviço e interação.
                      </p>
                    )}
                  </div>
                </motion.div>
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
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      IMPRESSOS
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Analise de marca, definição de objetivos, criação de
                        conceito, desenvolvimento de protótipos e acompanhamento
                        do processo de produção
                      </p>
                    ) : (
                      // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Analise de marca, definição de objetivos, criação de
                        conceito, desenvolvimento de protótipos e acompanhamento
                        do processo de produção
                      </p>
                    )}
                  </div>
                </motion.div>
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
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      FOTOGRAFIA
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : (
                      // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </motion.div>
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
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      EDIÇÃO
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : (
                      // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </motion.div>
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
                    <h1 className="absolute inset-0 flex items-center justify-start  text-2xl text-white top-10 p-5">
                      PODCAST
                    </h1>
                    {window.innerWidth <= 961 ? ( // Mobile
                      <p className="absolute inset-0 hidden items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    ) : (
                      // D
                      <p className="absolute inset-0 flex items-end justify-center text-start text-white bottom-5 px-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id cum quidem minus ratione reiciendis odio esse
                        voluptatum tempora quos voluptates placeat, quis quae
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewServiceSession;
