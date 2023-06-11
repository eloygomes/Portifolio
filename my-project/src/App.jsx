import Modal from "react-modal";
import { useState } from "react";

import "./App.css";

import NavBar from "./Component/NavBar";

import BioSession from "./Component/BioSession";
import ServicesSession from "./Component/ServicesSession";
import Contact from "./Component/Contact";
import Home from "./Component/Home";

import Portfolio from "./Component/Portfolio";
import Carreira from "./Component/Carreira";

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

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalPos, setMPos] = useState("");

  const [modalJobName, setModalJobName] = useState("");
  const [modalJobSegment, setModalJobSegment] = useState("");
  const [modalJobDuration, setModalJobDuration] = useState("");
  const [modalDescJob, setModalDescJob] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <NavBar />
      <Home />
      <BioSession />
      <Portfolio />
      <Carreira
        openModal={openModal}
        setModalJobName={setModalJobName}
        setModalJobSegment={setModalJobSegment}
        setModalJobDuration={setModalJobDuration}
        setModalDescJob={setModalDescJob}
        setMPos={setMPos}
      />
      <ServicesSession />
      <Contact />

      <div className="">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className=" absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-3"
        >
          <div className="w-full min-w-[1200px] rounded-xl">
            <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] h-[80vh] m-20 z-20">
              {/* ROW 1 */}
              <div className="h-[10%] flex flex-row justify-between p-5  ">
                <div className="uppercase text-6xl">Portfólio</div>
                <div
                  className="cursor-pointer text-2xl"
                  onClick={() => {
                    closeModal();
                    // dispatch(showNavbar());
                    // dispatch(leaveScroll());
                    // dispatch(particlesOn());
                  }}
                >
                  FECHAR
                </div>
              </div>
              {/* ROW 2 */}
              <div className="h-[65%] flex flex-row "></div>
              {/* ROW 3 */}
              <div className="h-[25%] flex flex-row justify-between">
                <div className="w-[30%] pl-5 ">
                  <div className="uppercase text-sm">
                    {/* {portWorkInfo.kindOfProject} */}
                  </div>
                  <div className="uppercase text-4xl">
                    {/* {portWorkInfo.companyName} */}
                  </div>
                  {/* <p className="text-sm py-5">{portWorkInfo.jobDescription}</p> */}
                  <div className="uppercase text-xs">Techs</div>
                  <div className="uppercase text-sm flex flex-row ">
                    {/* {portWorkInfo.techs} */}
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
