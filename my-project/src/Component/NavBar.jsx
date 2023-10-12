import { useSelector } from "react-redux";
import { useState } from "react";

// import { AiFillCloseCircle } from "react-icons/ai";

import { AiOutlineMenu } from "react-icons/ai";
import NavBarMobile from "./suport/NavBarMobile";
import NavBarMobileItems from "./suport/NavBarMobileItems";

function NavBar() {
  //Redux
  const navbarZindex = useSelector((state) => state.navbarZindex);
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // console.log(menuDisplayOpt);

  const [mobileShowMenu, setMobileShowMenu] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [desktopMenuActive, setDesktopMenuActive] = useState("");

  // console.log(mobileShowMenu);
  // console.log("window.innerWidth < 961?" + window.innerWidth < 961);
  return (
    <>
      {window.innerWidth <= 961 ? (
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////// MOBILE ////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <div
          className={` w-screen py-5 fixed left-0 top-0 drop-shadow-md ${
            navbarZindex === "show" ? "z-10" : "-z-10"
          }`}
        >
          <AiOutlineMenu
            className="text-[2.5rem] sm:text-[2.5rem] md:text-[3rem]  text-white m-5 cursor-pointer absolute top-0 right-0 z-10  backdrop-blur-xl bg-white/10 rounded-full p-2 "
            onClick={() => {
              setMobileShowMenu(!mobileShowMenu);
            }}
          />
          <div
            className={`w-screen h-screen   backdrop-blur-xl bg-[#282044] absolute top-0 left-0 
            ${mobileShowMenu ? "flex flex-col justify-start" : "hidden"} z-10`}
          >
            <NavBarMobile setMobileShowMenu={setMobileShowMenu} />
            <NavBarMobileItems setMobileShowMenu={setMobileShowMenu} />
          </div>
        </div>
      ) : (
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <div
          className={`sm:bg-[#100c20] md:w-screen w-screen py-5 fixed left-0 top-0 drop-shadow-md hidden lg:block ${
            navbarZindex === "show" ? "z-10" : "-z-10"
          }`}
        >
          <div className="lg:flex hidden flex-row justify-between container lg:pl-8 lg:pr-8 xl:mx-auto 2xl:mx-auto ">
            <div className="font-black text-2xl hover:scale-105">
              <a className="font-extrabold  hover:text-[#d6223b]" href="#">
                EVG
              </a>
            </div>
            <div className=" flex flex-row justify-around cursor-pointer">
              <div
                onClick={() => {
                  setDesktopMenuActive("bio");
                }}
                className=" py-1 hover:scale-105"
              >
                <a
                  href="#bio"
                  className={`px-2 font-semibold hover:text-[#d6223b] ${
                    // desktopMenuActive === "bio" ||
                    menuDisplayOpt === "bio" ? "text-[#d6223b]" : "text-white"
                  } `}
                >
                  BIO
                </a>
              </div>
              <div
                onClick={() => {
                  setDesktopMenuActive("port");
                }}
                className=" py-1 hover:scale-105"
              >
                <a
                  href="#port"
                  className={`px-2 font-semibold hover:text-[#d6223b] ${
                    // desktopMenuActive === "port" ||
                    menuDisplayOpt === "port" ? "text-[#d6223b]" : "text-white"
                  } `}
                >
                  PORTFÓLIO
                </a>
              </div>
              <div
                onClick={() => {
                  setDesktopMenuActive("carreira");
                }}
                className=" py-1 hover:scale-105"
              >
                <a
                  href="#carreira"
                  className={`px-2 font-semibold hover:text-[#d6223b] ${
                    // desktopMenuActive === "carreira" ||
                    menuDisplayOpt === "carreira"
                      ? "text-[#d6223b]"
                      : "text-white"
                  } `}
                >
                  CARREIRA
                </a>
              </div>
              <div
                onClick={() => {
                  setDesktopMenuActive("services");
                }}
                className=" py-1 hover:scale-105"
              >
                <a
                  href="#services"
                  className={`px-2 font-semibold hover:text-[#d6223b] ${
                    // desktopMenuActive === "services" ||
                    menuDisplayOpt === "services"
                      ? "text-[#d6223b]"
                      : "text-white"
                  } `}
                >
                  SERVIÇOS
                </a>
              </div>
              <div
                onClick={() => {
                  setDesktopMenuActive("contato");
                }}
                className=" py-1 hover:scale-105"
              >
                <a
                  href="#contato"
                  className={`px-2 font-semibold hover:text-[#d6223b]  ${
                    // desktopMenuActive === "contato" ||
                    menuDisplayOpt === "contato"
                      ? "text-[#d6223b]"
                      : "text-white"
                  } `}
                >
                  CONTATO
                </a>
              </div>
              <div className="pl-5 hover:scale-105">
                <p className="bg-[#D6223B] text-xs p-2 whitespace-nowrap rounded">
                  DOWNLOAD CV
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
