function BioSession() {
  return (
    <>
      <div className="bg-[#2A2344] w-screen h-screen flex flex-col" id="bio">
        <div className="container mx-auto mt-28">
          <div className="flex flex-row">
            <div className="w-[50%] h-screen flex flex-col mx-auto">
              <div className="w-fit mt-52"></div>
              
              <h5 className="py-1 text-sm max-w-lg">
                Olá! Sou um desenvolvedor Full Stack com 15 anos de experiência.
                Iniciei da minha jornada como designer UI/UX, criando interfaces
                de produtos e propondo melhorias de usabilidade na experiência
                do usuário. Também tenho vivencia em criação de wireframes de
                baixa/alta fidelidade e em desenvolvimento de protótipos
                navegáveis. Hoje atuo como Full Stack Developer, utilizo
                principalmente HTML5, CSS3, React Js e Wordpress para dar vida a
                interfaces web dos projetos.
              </h5>
            </div>
            <div className="w-[50%] mt-24 flex flex-col">
              {/* <img src={pic01} alt="f" className="max-w-lg mx-auto" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BioSession;
