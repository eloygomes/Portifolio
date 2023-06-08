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


// ARRAYS
const images = {
  pro:{
    img1: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    img2: "https://images.unsplash.com/photo-1526929804231-3de5919d43ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img3: "https://images.unsplash.com/photo-1506480704700-d4a381ecd2f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img4: "https://images.unsplash.com/photo-1535268244390-8b989b92d2bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img5: "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img6: "https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  },
  personal : {
    img1: "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img2: "https://images.unsplash.com/photo-1453175324447-6864b23ecf23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img3: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img4: "https://images.unsplash.com/photo-1524046346361-5a9c9592fb74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    img5: "https://images.unsplash.com/photo-1648550733986-22e9139d6533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img6: "https://images.unsplash.com/photo-1598719830762-055a6665a463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  }
}


// eslint-disable-next-line no-unused-vars
function ModalWindow({ modalStatus, setModalStatus, postImg, setPostImg, portWorkInfo }) {
  function closeModal() {
    setModalStatus(false);
  }

  function eraseModalImages() {
    setPostImg('');
  }

  const dispatch = useDispatch();

  return (
    <div>
      <div className="">
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
                  <div className="uppercase text-sm">{portWorkInfo.kindOfProject}</div>
                  <div className="uppercase text-4xl">{portWorkInfo.companyName}</div>
                  <p className="text-sm py-5">{portWorkInfo.jobDescription}</p>
                  <div className="uppercase text-xs">Techs</div>
                  <div className="uppercase text-sm flex flex-row ">{portWorkInfo.techs}</div>
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
