import EachSession from "./eachSession";
// import carrerData from "../PortS/carrerData";

import { carrerDataInfo } from "../PortS/carrerData";

function KrabSession({
  // eslint-disable-next-line react/prop-types
  setModalStatus,
  // eslint-disable-next-line react/prop-types
  setcareerModalInfo,
}) {
  return (
    <div className="mt-80 sm:mt-0 md:mt-64 lg:mt-0">
      <div className="wrapper flex flex-row  ">
        <ol className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6   gap-3 p-5 grid-flow-row-dense ">
          <EachSession
            jobPosition={`${carrerDataInfo.job01.jobPosition}`}
            jobName={`${carrerDataInfo.job01.jobName}`}
            jobSegment={`${carrerDataInfo.job01.jobSegment}`}
            jobDuration={`${carrerDataInfo.job01.jobDuration}`}
            jobDesc={`${carrerDataInfo.job01.jobDesc}`}
            jobTools={`${carrerDataInfo.job01.jobTools}`}
            jobImg={`${carrerDataInfo.job01.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job02.jobPosition}`}
            jobName={`${carrerDataInfo.job02.jobName}`}
            jobSegment={`${carrerDataInfo.job02.jobSegment}`}
            jobDuration={`${carrerDataInfo.job02.jobDuration}`}
            jobDesc={`${carrerDataInfo.job02.jobDesc}`}
            jobTools={`${carrerDataInfo.job02.jobTools}`}
            jobImg={`${carrerDataInfo.job02.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
          />
          <EachSession
            jobPosition={`${carrerDataInfo.job03.jobPosition}`}
            jobName={`${carrerDataInfo.job03.jobName}`}
            jobSegment={`${carrerDataInfo.job03.jobSegment}`}
            jobDuration={`${carrerDataInfo.job03.jobDuration}`}
            jobDesc={`${carrerDataInfo.job03.jobDesc}`}
            jobTools={`${carrerDataInfo.job03.jobTools}`}
            jobImg={`${carrerDataInfo.job03.jobImg}`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
          />
          <EachSession
            jobPosition={`SUPERVISOR DE E-COMMERCE`}
            jobName={`Coletek`}
            jobSegment={`Loja virtual / Marketplace`}
            jobDuration={`jan/2018 a dez/2018`}
            jobDesc={`Gestão da plataforma online PANDA BLACK(e-commerce voltado a produtos de informática), Atuando a frente no planejamento(pesquisa de mercado, controle de preço e estoque) e administração(gestão de equipe, pós venda, SAC) e marketing(campanhas de lançamento de produtos para clientes(B2C)).`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
          />
          <EachSession
            jobPosition={`FULL STACK DEVELOPER`}
            jobName={`Grupo Skill`}
            jobSegment={`Contabilidade / Software house`}
            jobDuration={`out/2019 a set/2021`}
            jobDesc={`Como DESIGNER UI/UX eu atuei no design de interfaces de produtos websites, hotsites, e-mails marketing, banner e peças digitais, propondo melhorias de usabilidade na experiência do usuário e visuais no design da interface. Fui responsável pela elaboração de wireframes de baixa e alta fidelidade, elaboração e manutenção de design system e desenvolvimento de protótipos navegáveis. E como DESENVOLVEDOR atuei no desenvolvimento de sites/plataformas fazendo implementação de novas features, correções de bugs e manutenção de código dando vida a interfaces dos projetos utilizando principalmente HTML5, CSS3, Bootstrap, JavaScript e Wordpress.`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
          />
          <EachSession
            jobPosition={`FULL STACK DEVELOPER`}
            jobName={`FREELANCE`}
            jobSegment={`DESIGNER GRÁFICO`}
            jobDuration={`out/2021 a atualmente`}
            jobDesc={`Folhetos, outdoors, backlights, anúncios, cartazes, documentos, catálogos, material de PDV, merchandising, diagramação de conteúdo, fotografia de produtos e eventos`}
            setModalStatus={setModalStatus}
            setcareerModalInfo={setcareerModalInfo}
          />
        </ol>
      </div>
    </div>
  );
}

export default KrabSession;
