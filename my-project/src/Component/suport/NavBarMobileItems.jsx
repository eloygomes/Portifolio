// eslint-disable-next-line react/prop-types
function NavBarMobileItems({ setMobileShowMenu }) {
  return (
    <>
      <div className="flex flex-col justify-start h-[80vh] w-screen text-center p-5 ">
        <div
          className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
          onClick={() => setMobileShowMenu(false)}
        >
          <a href="#bio" className="px-2">
            BIO
          </a>
        </div>
        <div
          className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
          onClick={() => setMobileShowMenu(false)}
        >
          <a href="#port" className="px-2">
            PORTFÓLIO
          </a>
        </div>
        <div
          className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
          onClick={() => setMobileShowMenu(false)}
        >
          <a href="#carreira" className="px-2">
            CARREIRA
          </a>
        </div>
        <div
          className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
          onClick={() => setMobileShowMenu(false)}
        >
          <a href="#services" className="px-2">
            SERVIÇOS
          </a>
        </div>

        <div
          className="h-1/6 flex items-center justify-center text-xl rounded-xl backdrop-blur-xl bg-[#19142A]/10 hover:bg-white/10 hover:scale-105   my-2"
          onClick={() => setMobileShowMenu(false)}
        >
          <a href="#contato" className="px-2">
            CONTATO
          </a>
        </div>

        <div className="w-1/2 mx-auto flex items-center justify-center bg-[#D6223B] text-xs whitespace-nowrap rounded-lg my-10 p-5 cursor-pointer ">
          DOWNLOAD CV
        </div>
      </div>
    </>
  );
}

export default NavBarMobileItems;
