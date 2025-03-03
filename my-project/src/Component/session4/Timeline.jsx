import React from "react";

function Timeline() {
  return (
    <>
      <ol className="sm:flex">
        <li className="relative mb-6 sm:mb-0 ">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DESIGNER GRÁFICO
            </h3>
            <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Empresa UM agencia & editora
            </h3>
            <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
              Agencia de publicidade e editora
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-100 dark:text-gray-200">
              mai/2013 a out/2014
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-3 max-w-lg">
              Folhetos, outdoors, backlights, anúncios, cartazes, documentos,
              catálogos, material de PDV, merchandising, diagramação de
              conteúdo, fotografia de produtos e eventos
            </p>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0 w-full">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DESIGNER GRÁFICO E WEB
            </h3>
            <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Comander Marketing
            </h3>
            <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
              Agencia de publicidade e editora
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-100 dark:text-gray-200">
              dez/2013 a nov/2014
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-3 max-w-lg">
              Criação e desenvolvimento de branding, desenvolvimento de projeto
              gráfico para revista, fotografia para anúncios, tratamento de
              imagens, conteúdo para mídias sociais, elaboração de briefings
              junto a clientes e elaboração de planos de ação para gestão e
              lançamentos de marcas de diversos segmentos
            </p>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0 w-full">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DESIGNER GRÁFICO
            </h3>
            <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Empresa UM agencia & editora
            </h3>
            <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
              Agencia de publicidade e editora
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-100 dark:text-gray-200">
              mai/2013 a out/2014
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-3 max-w-lg">
              Folhetos, outdoors, backlights, anúncios, cartazes, documentos,
              catálogos, material de PDV, merchandising, diagramação de
              conteúdo, fotografia de produtos e eventos
            </p>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0 w-full">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DESIGNER GRÁFICO
            </h3>
            <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Empresa UM agencia & editora
            </h3>
            <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
              Agencia de publicidade e editora
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-100 dark:text-gray-200">
              mai/2013 a out/2014
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-3 max-w-lg">
              Folhetos, outdoors, backlights, anúncios, cartazes, documentos,
              catálogos, material de PDV, merchandising, diagramação de
              conteúdo, fotografia de produtos e eventos
            </p>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0 w-full">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DESIGNER GRÁFICO
            </h3>
            <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Empresa UM agencia & editora
            </h3>
            <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
              Agencia de publicidade e editora
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-100 dark:text-gray-200">
              mai/2013 a out/2014
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-3 max-w-lg">
              Folhetos, outdoors, backlights, anúncios, cartazes, documentos,
              catálogos, material de PDV, merchandising, diagramação de
              conteúdo, fotografia de produtos e eventos
            </p>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0 w-full">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              DESIGNER GRÁFICO
            </h3>
            <h3 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Empresa UM agencia & editora
            </h3>
            <h3 className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-600">
              Agencia de publicidade e editora
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-100 dark:text-gray-200">
              mai/2013 a out/2014
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-3 max-w-lg">
              Folhetos, outdoors, backlights, anúncios, cartazes, documentos,
              catálogos, material de PDV, merchandising, diagramação de
              conteúdo, fotografia de produtos e eventos
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}

export default Timeline;
