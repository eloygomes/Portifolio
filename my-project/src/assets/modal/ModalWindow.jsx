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
    backgroundColor: "rgb(27, 5, 172)",
    borderRadius: "12px",
    padding: "3px",
  },
};

Modal.setAppElement("#root");

function ModalWindow({ modalStatus, setModalStatus }) {

  const [modalPos, setMPos] = useState("");

  const [modalJobName, setModalJobName] = useState("");
  const [modalJobSegment, setModalJobSegment] = useState("");
  const [modalJobDuration, setModalJobDuration] = useState("");
  const [modalDescJob, setModalDescJob] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <div>
      <div className="">
        <Modal
          isOpen={modalStatus}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-full min-w-[1200px] bg-[#19142A] rounded-xl  ">
            <div className="flex flex-col justify-between  rounded-xl  bg-[#19142A]">
              <div className="flex flex-col justify-around rounded-xl p-5 px-5 bg-[#2A2344]">
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
