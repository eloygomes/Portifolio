/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import SimpleMap from "./SimpleMap";

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
    height: "100vh",
    overflow: "scroll",
    // marginTop: "50px",
    zIndex: "20",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(25, 20, 42, 0.75)",
  },
};

Modal.setAppElement("#root");

// Redux
function leaveScroll() {
  return { type: "leave" };
}

function showNavbar() {
  return { type: "show" };
}

function particlesOn() {
  return { type: "on" };
}

// eslint-disable-next-line no-unused-vars
function ModalCareer({ modalStatus, setModalStatus, careerModalInfo }) {
  function closeModal() {
    setModalStatus(false);
  }

  const dispatch = useDispatch();

  return (
    <div>
      {window.innerWidth <= 961 ? (
        <div>
          <Modal
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={customStyles}
            className=" absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-1"
          >
            <div className="">
              <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] h-full m-10 mt- z-20">
                {/* ROW 1 */}
                <div className="h-[10%] flex flex-row justify-between p-1  ">
                  <div className="uppercase text-xl">Carreira</div>
                  <div
                    className="cursor-pointer text-base font-semibold"
                    onClick={() => {
                      closeModal();
                      dispatch(showNavbar());
                      dispatch(leaveScroll());
                      dispatch(particlesOn());
                    }}
                  >
                    FECHAR
                  </div>
                </div>
                {/* ROW 2 */}
                <div className="h-full flex flex-col  ">
                  <div className="">
                    <div className="flex flex-col mt-5 ">
                      <div className="uppercase text-2xl  py-2">
                        <img
                          className="object-cover w-full h-[200px] rounded-xl mb-5"
                          src="https://alfredojunior.files.wordpress.com/2017/06/coletek-cidade-varginha.jpg"
                          alt=""
                        />
                      </div>
                      <div className="uppercase text-xs pt-2 mr-5">
                        Nome da Empresa
                      </div>
                      <div className="uppercase text-base font-semibold pb-2 mr-5">
                        {careerModalInfo.jobName}
                      </div>
                      <div className="uppercase text-xs pt-2 mr-5">
                        Segmento
                      </div>
                      <div className="uppercase text-base font-semibold py-1">
                        {careerModalInfo.jobSegment}
                      </div>
                      <div className="uppercase text-xs pt-2 mr-5">Duração</div>
                      <div className="uppercase text-sm font-semibold py-1">
                        JAN/2015 - DEZ/2018
                      </div>
                      <div className="uppercase text-xs pt-2 mt-2">
                        Localização
                      </div>
                      <div className="text-base  ">
                        Endereço da empresa, 123123
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className=" flex flex-col mt-10">
                      <div className="uppercase text-sm pt-2 mr-5">Cargo</div>
                      <div className="uppercase text-2xl py-2">
                        {careerModalInfo.jobPosition}
                      </div>
                      <div className="uppercase text-sm pt-2 mr-5">
                        Atribuições
                      </div>
                      <div className="text-sm py-1">
                        {careerModalInfo.jobDescription}
                      </div>
                      <div className="uppercase text-sm pt-2 mt-10 mr-5">
                        Ferramentas e tecnologias
                      </div>
                      <div className="block pt-1 ">
                        <button className="my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold text-xs">
                          React
                        </button>
                        <button className="my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold text-xs">
                          Javascript
                        </button>
                        <button className="my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50  hover:font-semibold text-xs">
                          Tailwind
                        </button>
                        <button className="my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold text-xs">
                          PHP
                        </button>
                        <button className="my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold text-xs">
                          SQL
                        </button>
                        <button className="my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold text-xs">
                          Firebase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      ) : (
        <div>
          <Modal
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className=" absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-3"
          >
            <div className="w-full min-w-[1200px] rounded-xl">
              <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] h-[80vh] m-20 mt-32 z-20">
                {/* ROW 1 */}
                <div className="h-[10%] flex flex-row justify-between p-5  ">
                  <div className="uppercase text-6xl">Carreira</div>
                  <div
                    className="cursor-pointer text-2xl"
                    onClick={() => {
                      closeModal();
                      dispatch(showNavbar());
                      dispatch(leaveScroll());
                      dispatch(particlesOn());
                    }}
                  >
                    FECHAR
                  </div>
                </div>
                {/* ROW 2 */}
                <div className="h-full flex flex-row p-5 ">
                  <div className="w-1/4">
                    <div className="flex flex-col mt-10 ">
                      <div className="uppercase text-2xl  py-2">
                        <img
                          className="object-cover w-full h-[200px] rounded-xl mb-5"
                          src="https://alfredojunior.files.wordpress.com/2017/06/coletek-cidade-varginha.jpg"
                          alt=""
                        />
                      </div>
                      <div className="uppercase text-sm pt-2 mr-5">
                        Nome da Empresa
                      </div>
                      <div className="uppercase text-2xl pb-2 mr-5">
                        {careerModalInfo.jobName}
                      </div>
                      <div className="uppercase text-sm pt-2 mr-5">
                        Segmento
                      </div>
                      <div className="uppercase text-base font-semibold py-1">
                        {careerModalInfo.jobSegment}
                      </div>
                      <div className="uppercase text-sm pt-2 mr-5">Duração</div>
                      <div className="uppercase text-base font-semibold py-1">
                        JAN/2015 - DEZ/2018
                      </div>
                      <div className="uppercase text-sm pt-2 mt-2">
                        Localização
                      </div>
                      <div className="uppercase text-base  ">
                        Endereço da empresa, 123123
                      </div>
                    </div>
                  </div>

                  <div className="w-3/4">
                    <div className=" flex flex-col mt-10 px-10">
                      <div className="uppercase text-sm pt-2 mr-5">Cargo</div>
                      <div className="uppercase text-2xl py-2">
                        {careerModalInfo.jobPosition}
                      </div>
                      <div className="uppercase text-sm pt-2 mr-5">
                        Atribuições
                      </div>
                      <div className="text-sm py-1">
                        {careerModalInfo.jobDescription}
                      </div>
                      <div className="uppercase text-sm pt-2 mt-10 mr-5">
                        Ferramentas e tecnologias
                      </div>
                      <div className="flex flex-row pt-1">
                        <button className="my-5 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold">
                          React
                        </button>
                        <button className="my-5 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold">
                          Javascript
                        </button>
                        <button className="my-5 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50  hover:font-semibold">
                          Tailwind
                        </button>
                        <button className="my-5 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold">
                          PHP
                        </button>
                        <button className="my-5 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold">
                          SQL
                        </button>
                        <button className="my-5 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold">
                          Firebase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default ModalCareer;
