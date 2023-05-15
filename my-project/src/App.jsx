

import Modal from "react-modal";
import { useState } from "react";

import "./App.css";
import Session01 from "./Component/Session01";
import NavBar from "./Component/NavBar";
import Session02 from "./Component/Session02";
import Session03 from "./Component/Session03";
import Session04 from "./Component/Session04";
import Session05 from "./Component/Session05";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "red",
    padding: "100px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

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
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Session01 />
      <Session02 />
      <Session03 />
      <Session04 openModal={openModal} />
      <Session05 />
      {/* <S6/> */}
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
        // className={"w-full h-full "}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-full h-full bg-slate-400 p-10 ">
            <div className="flex flex-row justify-between">
              <div>TITULO</div>
              <div>
                <button onClick={closeModal}>close</button>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                at soluta cupiditate harum itaque adipisci necessitatibus ullam,
                id voluptates, obcaecati quaerat quasi libero saepe unde ipsum,
                accusantium explicabo voluptatibus porro?
              </div>
            </div>
          </div>

        </Modal>
      </div>
    </>
  );
}

export default App;
