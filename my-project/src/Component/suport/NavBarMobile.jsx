// import React from "react";

// eslint-disable-next-line react/prop-types
const NavBarMobile = ({ setMobileShowMenu }) => {
  return (
    <>
      <div className="flex flex-col w-screen text-center p-5">
        <div className="flex flex-row justify-between">
          <div>
            <a href="#" className=" text-2xl font-black">
              EVG
            </a>
          </div>
          <div className="flex items-center justify-center ">
            <a
              className="font-extrabold text-xl text-white "
              onClick={() => setMobileShowMenu(false)}
            >
              FECHAR
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
