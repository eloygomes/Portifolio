import { useState } from "react";

const servicesDescriptions = {
  iuui: `   Eu sou um desenvolvedor de UX/UI apaixonado por criar experiências
  digitais incríveis. Com anos de experiência em design e
  desenvolvimento de interfaces, eu ajudo empresas a criar produtos
  digitais que são intuitivos, fáceis de usar e visualmente
  atraentes. Meu objetivo é sempre criar soluções que atendam às
  necessidades do usuário e ajudem as empresas a alcançar seus
  objetivos de negócios.`,

  branding: `Nosso portfólio de branding apresenta uma ampla gama de projetos que ajudaram empresas a criar e fortalecer suas marcas. Com uma abordagem criativa e estratégica, trabalhamos com nossos clientes para desenvolver soluções de branding que reflitam sua identidade e os diferenciem no mercado.  `,

  impressos: `Como designer gráfico experiente em desenvolvimento e impressão de materiais impressos, eu ajudo empresas a criar soluções visuais atraentes e eficazes. Com habilidades em design gráfico e anos de experiência, meu objetivo é sempre atender às necessidades do cliente e ajudar as empresas a alcançar seus objetivos de negócios.`,

  foto: ` Nossa seção de fotografia apresenta uma seleção de nossos melhores trabalhos em fotografia comercial e editorial. Com um olhar artístico e técnico, capturamos imagens que contam histórias e criam conexões emocionais com o público. `,

  edicao: `   Nossa seção de edição de vídeo e áudio apresenta uma variedade de projetos que demonstram nossa habilidade em contar histórias através do som e da imagem. Combinando técnicas criativas e tecnologia avançada, criamos vídeos e áudios que envolvem e emocionam o público.`,

  podcast: ` Nossa seção de podcast apresenta uma seleção de nossos melhores episódios, abordando uma variedade de tópicos interessantes e relevantes. Com um estilo envolvente e informativo, nossos podcasts oferecem conteúdo de qualidade para ouvintes curiosos.`,
};

function ServicesSession() {
  const [servBg, setServBg] = useState(`session-uiiu`);
  const [textOnScreen, setTextOnScreen] = useState(`UI/UX`);
  const [servDesc, setServDesc] = useState(servicesDescriptions.iuui);

  const setWall = (sessioon) => {
    if (sessioon === "iuui") {
      setServBg("session-uiiu");
      setTextOnScreen("UI/UX");
      setServDesc(servicesDescriptions.iuui);
    }

    if (sessioon === "branding") {
      setServBg("session-branding");
      setTextOnScreen("BRANDING");
      setServDesc(servicesDescriptions.branding);
    }

    if (sessioon === "impressos") {
      setServBg("session-impressos");
      setTextOnScreen("IMPRESSOS");
      setServDesc(servicesDescriptions.impressos);
    }

    if (sessioon === "foto") {
      setServBg("session-foto");
      setTextOnScreen("FOTOGRAFIA");
      setServDesc(servicesDescriptions.foto);
    }

    if (sessioon === "edicao") {
      setServBg("session-edicao");
      setTextOnScreen("EDIÇÃO");
      setServDesc(servicesDescriptions.edicao);
    }

    if (sessioon === "podcast") {
      setServBg("session-podcast");
      setTextOnScreen("PODCAST");
      setServDesc(servicesDescriptions.podcast);
    }
  };

  console.log(servBg);

  return (
    <>
      {/* <div
        className={`w-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-[url('${servBg}')]`}
        id="services"
      > */}
      <div
        className={`w-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat ${servBg}`}
        id="services"
      >
        <div
          className={`inner-service w-screen h-screen flex bg-black absolute opacity-[.85] `}
        ></div>
        <h1 className="text-9xl opacity-5 relative top-[80%] transition ease-in-out  duration-300">
          {textOnScreen}
        </h1>
        <div className="container mx-auto mt-28">
          <div className="flex flex-row">
            <h1 className="text-6xl py-10 absolute mt-[70px] mx-5 text-gray-400">
              Serviços
            </h1>
            <p className="mt-[200px] absolute mx-5 text-gray-400">
              Na seção abaixo, apresento um panorama completo da minha
              experiência profissional até o presente momento.”
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-64 ">
          <div className="flex flex-row cursor-pointer absolute">
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300 text-gray-400"
              onMouseEnter={() => setWall("iuui")}
            >
              UI/UX
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300 text-gray-400"
              onMouseEnter={() => setWall("branding")}
            >
              BRANDING
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300 text-gray-400"
              onMouseEnter={() => setWall("impressos")}
            >
              IMPRESSOS
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300 text-gray-400"
              onMouseEnter={() => setWall("foto")}
            >
              FOTOGRAFIA
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300 text-gray-400"
              onMouseEnter={() => setWall("edicao")}
            >
              EDIÇÃO
            </div>
            <div
              className="mx-5 hover:text-[#D6223B] text-3xl transition ease-in-out hover:scale-125 duration-300 text-gray-400"
              onMouseEnter={() => setWall("podcast")}
            >
              PODCAST
            </div>
          </div>
          <div className="flex flex-row mt-24 z-40 absolute mx-5 text-gray-400 max-w-[1200px]">
            <p className="transition ease-in-out delay-150 duration-300 text-gray-400">{servDesc}</p>
          </div>
        </div>
        {/* <img src={img2} className=" absolute w-screen left-0" alt="" /> */}
      </div>
    </>
  );
}

export default ServicesSession;
