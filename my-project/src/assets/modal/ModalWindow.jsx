import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all 3s ease-in-out 1s",
    // backgroundColor: "rgb(27, 5, 172)",  
    borderRadius: "12px",
    padding: "3px",
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.75)'
    // backgroundColor: '#19142A',
    backgroundColor: 'rgba(25, 20, 42, 0.75)',
    
  },
};

Modal.setAppElement("#root");

function ModalWindow({ modalStatus, setModalStatus }) {
  const [modalPos, setMPos] = useState("");

  const [modalJobName, setModalJobName] = useState("");
  const [modalJobSegment, setModalJobSegment] = useState("");
  const [modalJobDuration, setModalJobDuration] = useState("");
  const [modalDescJob, setModalDescJob] = useState("");

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <div>
      <div className="bg-pink-300 ">
        <Modal
          isOpen={modalStatus}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className=" absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-3"
        >
          <div className="w-full min-w-[1200px] rounded-xl  ">
            <div className="flex flex-col justify-between  rounded-xl">
              <div className="flex flex-col justify-around rounded-xl p-5 px-5  backdrop-blur-xl bg-white/10">
                <div className="flex flex-row justify-between">
                  <div className="w-[30%] p-5">
                    <div className="flex flex-col">
                      <img
                        src="http://static.baubauhaus.com/assets/42748_270.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-[70%] p-5">
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="text-left">
                          <div className="font-light text-xl mb-5 ">
                            {modalPos}
                          </div>
                          <h4 className="text-xs uppercase">Empresa</h4>
                          <h2 className="font-semibold text-base mb-5"> 
                            {modalJobName}
                          </h2>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs">Atribuições</h4>
                        <p className="text-sm py-2">{modalDescJob}</p>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="text-left py-5">
                          <h4 className="text-xs mt-2">Período</h4>
                          <div className="text-xs">{modalJobDuration}</div>
                        </div>
                        <div className="text-right py-5">
                          <h4 className="text-xs mt-2">Segmento</h4>
                          <div className="font-semibold text-xs">
                            {modalJobSegment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[10%] text-right px-8 font-black cursor-pointer"
                    onClick={closeModal}
                  >
                    X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ModalWindow;
