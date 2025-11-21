/* eslint-disable react/prop-types */
import { useMemo } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const customStylesMobile = {
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
    overflow: "scroll",
    // overflow: "hidden",
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
    <div className="flex w-full h-full items-center justify-center px-4 py-6 sm:px-6">
      <div className="relative w-[90vw] xs:w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[80vw] min-w-[90vw] xs:min-w-[90vw] sm:min-w-[90vw] md:min-w-[90vw] lg:min-w-[90vw] xl:min-w-[80vw] max-w-[90vw]  border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl bg-white/10">
        {/* botão fechar */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20 transition"
          aria-label="Fechar modal"
        >
          <AiOutlineClose size={18} />
        </button>

        {/* imagem full-width topo */}
        {careerModalInfo.jobImg && (
          <div className="w-full h-40 sm:h-64 md:h-72 lg:h-60 overflow-hidden border-b border-white/10">
            <img
              src={careerModalInfo.jobImg}
              alt={careerModalInfo.jobName || "Empresa"}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* header */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-5 sm:p-6 lg:p-8">
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
              {careerModalInfo.jobPosition}
            </h2>
            <p className="text-sm text-white/70">{careerModalInfo.jobName}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              {careerModalInfo.jobDuration}
            </p>
          </div>
        </div>

        {/* body */}
        <div className="px-5 sm:px-6 lg:px-8 pb-6 lg:pb-8 overflow-y-auto max-h-[70vh] sm:max-h-[75vh] custom-scroll">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-8 pt-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/20">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Atribuições
                </p>
                <p className="text-base sm:text-lg xl:text-base text-white/85 leading-relaxed mt-2">
                  {careerModalInfo.jobDescription}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/20">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Ferramentas e Tecnologias
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70"
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
  );

  return (
    <div>
      {window.innerWidth <= 961 ? (
        <Modal
          isOpen={modalStatus}
          onRequestClose={closeModal}
          style={customStylesMobile}
          className="absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000 rounded-lg p-1"
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
``;
