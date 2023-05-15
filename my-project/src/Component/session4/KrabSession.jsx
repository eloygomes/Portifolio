// import React from "react";

import EachSession from "./eachSession";

function KrabSession() {
  return (
    <div>
      <div className="wrapper flex flex-row  ">
        {/* <ol className="w-max grid grid-rows-1 grid-cols-6"> */}
        <ol className="w-max flex flex-row ">
          <EachSession
            jobPosition={`DESIGNER GRÁFICO`}
            jobName={`Empresa UM agencia & editora`}
            jobSegment={`Agencia de publicidade e editora`}
            jobDuration={`mai/2013 a out/2014`}
            // descJob={`Folhetos, outdoors, backlights, anúncios, cartazes, documentos, catálogos, material de PDV, merchandising, diagramação de conteúdo, fotografia de produtos e eventos.`}
          />
          <EachSession
            jobPosition={`WEB DESIGNER`}
            jobName={`Comander Marketing `}
            jobSegment={`Agencia de publicidade e editora`}
            jobDuration={`dez/2013 a nov/2014`}
            // descJob={`Criação e desenvolvimento de branding, desenvolvimento de projeto gráfico para revista, fotografia para anúncios, tratamento de imagens, conteúdo para mídias sociais, elaboração de briefings junto a clientes e elaboração de planos de ação para gestão e lançamentos de marcas de diversos segmentos.`}
          />
          <EachSession
            jobPosition={`DIRETOR DE ARTE`}
            jobName={`Coletek`}
            jobSegment={`Fabricante e distribuidora de materiais de informática`}
            jobDuration={`jan/2015 a dez/2018`}
            // descJob={`Atuando no desenvolvimento de briefings, planejamento e execução de ações de branding e co-coordenação de equipe, junto ao time de gerentes de projetos na implementação de estratégias de conteúdo, ações digitais, gestão de ações em redes sociais, coordenação de trabalho junto ao time e emissão de relatórios de acompanhamento, criação e gestão de material on e offline(atualização e manutenção de sites, landing pages, banners, posts para mídias sociais, emails marketing, newsletters e outros, além de folhetos, outdoors, backlights, anúncios, cartazes, documentos, catálogos, material de PDV, merchandising, diagramação de conteúdo, fotografia de produtos e eventos, etc.)`}
          />
          <EachSession
            jobPosition={`SUPERVISOR DE E-COMMERCE`}
            jobName={`Coletek`}
            jobSegment={`Loja virtual / Marketplace`}
            jobDuration={`jan/2018 a dez/2018`}
            // descJob={`Gestão da plataforma online PANDA BLACK(e-commerce voltado a produtos de informática), Atuando a frente no planejamento(pesquisa de mercado, controle de preço e estoque) e administração(gestão de equipe, pós venda, SAC) e marketing(campanhas de lançamento de produtos para clientes(B2C)).`}
          />
          <EachSession
            jobPosition={`FULL STACK DEVELOPER`}
            jobName={`Grupo Skill`}
            jobSegment={`Contabilidade / Software house`}
            jobDuration={`out/2019 a set/2021`}
            // descJob={`Como DESIGNER UI/UX eu atuei no design de interfaces de produtos websites, hotsites, e-mails marketing, banner e peças digitais, propondo melhorias de usabilidade na experiência do usuário e visuais no design da interface. Fui responsável pela elaboração de wireframes de baixa e alta fidelidade, elaboração e manutenção de design system e desenvolvimento de protótipos navegáveis. E como DESENVOLVEDOR atuei no desenvolvimento de sites/plataformas fazendo implementação de novas features, correções de bugs e manutenção de código dando vida a interfaces dos projetos utilizando principalmente HTML5, CSS3, Bootstrap, JavaScript e Wordpress.`}
          />
          <EachSession
            jobPosition={`FULL STACK DEVELOPER`}
            jobName={`FREELANCE`}
            // jobSegment={`DESIGNER GRÁFICO`}
            jobDuration={`out/2021 a atualmente`}
            // descJob={`Folhetos, outdoors, backlights, anúncios, cartazes, documentos, catálogos, material de PDV, merchandising, diagramação de conteúdo, fotografia de produtos e eventos`}
          />
          
        </ol>
      </div>
    </div>
  );
}

export default KrabSession;
