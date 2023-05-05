import React from "react";

function NavBar() {
  return (
    <>
      <div className="bg-[#19142A] w-screen py-5 absolute left-0 top-0">
        <div className="flex flex-row justify-between container">
          <div className="w-[30%] font-bold text-xl">EVG</div>
          <div className="w-[40%] flex flex-row justify-around cursor-pointer">
            <p>BIO</p>
            <p>CARREIRA</p>
            <p>PORTFÓLIO</p>
            <p>CONTATO</p>
            <div className="pl-5">
              <p className="bg-[#D6223B] text-xs p-1.5 rounded">DOWNLOAD CV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
