/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import ImageCarousel from "./Carousel/Carousel";

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
function ModalWindow({
  modalStatus,
  setModalStatus,
  postImg,
  setPostImg,
  portWorkInfo,
}) {
  function closeModal() {
    setModalStatus(false);
  }

  // eslint-disable-next-line no-unused-vars
  function eraseModalImages() {
    setPostImg("");
  }

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {window.innerWidth <= 961 ? (
          <Modal
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Port Modal"
            className=" absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-3"
          >
            <div className="w-full min-w-auto rounded-xl">
              <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] h-[90vh] md:h-full m-10 z-20">
                {/* ROW 1 */}
                <div className="h-[10%] flex flex-row justify-between p-5  ">
                  <div className="uppercase text-xl">Portfólio</div>
                  <div
                    className="cursor-pointer text-base z-30"
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
                <div className=" flex flex-col ">
                  <ImageCarousel images={postImg} />
                </div>
                {/* ROW 3 */}
                <div className="sm:h-[25%] h-full flex sm:flex-col flex-row justify-between">
                  <div className="sm:h-[30%] h-full  pl-5 ">
                    <div className="uppercase text-sm">
                      {portWorkInfo.kindOfProject}
                    </div>
                    <div className="uppercase text-4xl">
                      {portWorkInfo.companyName}
                    </div>
                    <p className="text-sm py-5">
                      {portWorkInfo.jobDescription}
                    </p>
                    <div className="uppercase text-xs">Techs</div>
                    <div className="uppercase text-sm flex flex-row ">
                      {portWorkInfo.techs}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Modal>
        ) : (
          <Modal
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Port Modal"
            className=" absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-3"
          >
            <div className="w-full min-w-[1200px] rounded-xl">
              <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] h-[90vh] m-10 z-20">
                {/* ROW 1 */}
                <div className="h-[10%] flex flex-row justify-between p-5  ">
                  <div className="uppercase text-6xl">Portfólio</div>
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
                <div className="h-[65%] flex flex-row ">
                  <ImageCarousel images={postImg} />
                </div>
                {/* ROW 3 */}
                <div className="h-[25%] flex flex-row justify-between">
                  <div className="w-[30%] pl-5 ">
                    <div className="uppercase text-sm">
                      {portWorkInfo.kindOfProject}
                    </div>
                    <div className="uppercase text-4xl">
                      {portWorkInfo.companyName}
                    </div>
                    <p className="text-sm py-5">
                      {portWorkInfo.jobDescription}
                    </p>
                    <div className="uppercase text-xs">Techs</div>
                    <div className="uppercase text-sm flex flex-row ">
                      {portWorkInfo.techs}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ModalWindow;
