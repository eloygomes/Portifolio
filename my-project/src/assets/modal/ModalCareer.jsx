/* eslint-disable react/prop-types */
import { useMemo } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
// import { AiOutlineClose } from "react-icons/ai";

const customStylesMobile = {
  content: {
    top: "00vh",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translateX(-50%)",
    transition: "all 3s ease-in-out 1s",
    borderRadius: "12px",
    padding: "3px",
    height: "90vh",
    overflow: "hidden",
    zIndex: "20",
    border: "none",
    outline: "none",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(25, 20, 42, 0.85)",
    zIndex: 9999,
  },
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    transition: "all 3s ease-in-out 1s",
    borderRadius: "12px",
    padding: "3px",
    height: "100%",
    // overflow: "scroll",
    overflow: "hidden",
    // marginTop: "50px",
    zIndex: "20",
    border: "none",
    outline: "none",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(25, 20, 42, 0.85)",
    zIndex: 9999,
  },
};

Modal.setAppElement("#root");

// Redux

function showNavbar() {
  return { type: "show" };
}

function particlesOn() {
  return { type: "on" };
}

// eslint-disable-next-line no-unused-vars
function ModalCareer({ modalStatus, setModalStatus, careerModalInfo }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 961;
  const dispatch = useDispatch();
  const tools = useMemo(() => {
    if (Array.isArray(careerModalInfo.jobTools))
      return careerModalInfo.jobTools;
    if (typeof careerModalInfo.jobTools === "string") {
      return careerModalInfo.jobTools
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
    return [];
  }, [careerModalInfo.jobTools]);

  const closeModal = () => {
    setModalStatus(false);
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
    document.body.classList.remove("modal-open");
    dispatch({ type: "leave" });
    dispatch(particlesOn());
    dispatch(showNavbar());
  };

  if (modalStatus) {
    document.body.classList.add("modal-open");
  }

  const content = (
    <div
      className={`flex w-full h-full px-4 py-6 sm:px-6 ${
        isMobile ? "items-start justify-start" : "items-center justify-start"
      }`}
    >
      <div
        className={`relative w-[90vw] xs:w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[80vw] min-w-[90vw] xs:min-w-[90vw] sm:min-w-[90vw] md:min-w-[90vw] lg:min-w-[90vw] xl:min-w-[80vw] max-w-[90vw] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl ${
          isMobile ? "h-[85vh] max-h-[85vh] flex flex-col mt-0" : "mt-20"
        }`}
      >
        {/* imagem full-width topo + botão fechar */}
        {careerModalInfo.jobImg && (
          <div
            className={`relative w-full overflow-hidden border-b border-white/10 ${
              isMobile
                ? "h-[180px] flex-shrink-0"
                : "h-40 sm:h-64 md:h-72 lg:h-60"
            }`}
          >
            <img
              src={careerModalInfo.jobImg}
              alt={careerModalInfo.jobName || "Empresa"}
              className="h-full w-full object-cover"
            />
            {/* <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar modal"
              className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/40 hover:bg-white/80 transition"
            >
              <AiOutlineClose size={22} className="text-black" />
            </button> */}
          </div>
        )}

        <div
          className={`flex-1 overflow-hidden ${
            isMobile ? "flex flex-col" : ""
          }`}
        >
          {/* header */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start  p-5 sm:p-6 lg:p-8 ">
            <div className="flex-1 space-y-2 pl-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight ">
                {careerModalInfo.jobPosition}
              </h2>
              <p className="text-sm text-white/70">{careerModalInfo.jobName}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                {careerModalInfo.jobDuration}
              </p>
            </div>
          </div>

          {/* body */}
          <div
            className={`px-5 sm:px-6 lg:px-8 pb-6 lg:pb-8 custom-scroll ${
              isMobile
                ? "flex-1 overflow-y-auto "
                : "overflow-y-auto max-h-[70vh] sm:max-h-[75vh]"
            }`}
          >
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-8 pt-2">
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/20">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                    Atribuições
                  </p>
                  <p className="text-sm sm:text-sm lg:text-base xl:text-sm text-white/85 leading-relaxed mt-2">
                    {careerModalInfo.jobDescription}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/20">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                    Ferramentas e Tecnologias
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[8px] uppercase tracking-[0.2em] text-white/70"
                      >
                        {tool}
                      </span>
                    ))}
                    {tools.length === 0 && (
                      <span className="text-xs text-white/50">
                        Nenhuma ferramenta listada.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="inline-flex items-center gap-2 rounded-full bg-[#D6223B] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {window.innerWidth <= 961 ? (
        <Modal
          isOpen={modalStatus}
          onRequestClose={closeModal}
          style={customStylesMobile}
          className="absolute left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 transition-all duration-3000 ease-in-out delay-1000 rounded-lg p-1"
        >
          {content}
        </Modal>
      ) : (
        <Modal
          isOpen={modalStatus}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000 rounded-lg p-3"
        >
          {content}
        </Modal>
      )}
    </div>
  );
}

export default ModalCareer;
