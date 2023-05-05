import React from "react";

function NavBar() {
  return (
    <>
      <div className="bg-[#19142A] w-screen py-5 fixed left-0 top-0">
      {/* <div className="bg-[yellow] w-screen py-5 fixed left-0 top-0"> */}
        <div className="flex flex-row justify-between container mx-auto ">
          <div className="font-bold text-xl">EVG</div>
          <div className="w-[40%] flex flex-row justify-around cursor-pointer">
            <p className="pl-1">BIO</p>
            <p className="pl-1">CARREIRA</p>
            <p className="pl-1">PORTFÓLIO</p>
            <p className="pl-1">CONTATO</p>
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
