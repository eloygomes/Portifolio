import React from "react";
import pic01 from "../assets/img01.01.png";

function Session01() {
  return (
    <>
      <div className="bg-[#19142A] w-screen h-screen flex flex-col">
        <div className="container mx-auto mt-28">
          <div className="flex flex-row">
            <div className="w-[50%] h-screen flex flex-col mx-auto">
              <div className="w-fit mt-52">
              
              </div>
              <h1 className="py-1 text-8xl font-medium">Eloy Gomes</h1>
              <h4 className="py-1 text-base font-semibold">
                Full Stack Developer
              </h4>
              <h5 className="py-1 text-sm max-w-lg">
                Olá! Sou um desenvolvedor Full Stack com 15 anos de
                experiência. Iniciei da minha jornada como designer UI/UX,
                criando interfaces de produtos e propondo melhorias de
                usabilidade na experiência do usuário. Também tenho vivencia em criação de 
                wireframes de baixa/alta fidelidade e em desenvolvimento de protótipos
                navegáveis. Hoje atuo como Full Stack Developer, utilizo
                principalmente HTML5, CSS3, React Js e Wordpress para dar vida a
                interfaces web dos projetos.
              </h5>
            </div>
            <div className="w-[50%] mt-24 flex flex-col">
              <img src={pic01} alt="f" className="max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session01;
