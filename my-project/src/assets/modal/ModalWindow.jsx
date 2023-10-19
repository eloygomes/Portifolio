/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";

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
    // overflow: "scroll",
    // marginTop: "50px",
    zIndex: "20",
    border: "none",
    outline: "none",
    overflow: "hidden",
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
  // portWorkInfo,
  portWorkStatus,
  postInfo,
}) {
  function closeModal() {
    setModalStatus(false);
    dispatch(leaveScroll());
    dispatch(particlesOn());
    dispatch(showNavbar());
  }

  // eslint-disable-next-line no-unused-vars
  function eraseModalImages() {
    setPostImg("");
  }

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(portWorkStatus);
  // }, [portWorkStatus]);

  return (
    <div>
      <div>
        {window.innerWidth <= 961 ? (
          <Modal
            isOpen={modalStatus}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Port Modal"
            className="absolute top-[50%] left-[50%] right-[auto] bottom-[auto] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000 ease-in-out delay-1000  rounded-lg p-3 overflow-hidden"
          >
            <div className="w-full min-w-auto rounded-xl">
              <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] h-full md:h-full m-10 z-20">
                {/* ROW 1 */}
                <div className="h-[10%] flex flex-row justify-between p-5  ">
                  <div className="text-4xl">Portfólio</div>
                  <div
                    className="cursor-pointer text-2xl z-50"
                    onClick={() => {
                      closeModal();
                      dispatch(showNavbar());
                      dispatch(leaveScroll());
                      dispatch(particlesOn());
                    }}
                  >
                    {/* FECHAR */}
                    <AiFillCloseCircle size={30} />
                  </div>
                </div>
                {/* ROW 2 */}
                <div className=" flex flex-col ">
                  {/* {portWorkStatus === "edicao" ? (
                    <div className="flex flex-row-reverse">
                      <iframe
                        width="768"
                        height="432"
                        src={`${postImg}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="m-5 "
                      ></iframe>
                    </div>
                  ) : (
                    <ImageCarousel images={postImg} />
                  )} */}
                  {portWorkStatus === "edicao" ? (
                    <div className="flex flex-row-reverse">
                      <iframe
                        width="768"
                        height="432"
                        src={`${postImg}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="m-5 "
                      ></iframe>
                    </div>
                  ) : portWorkStatus === "foto" ? (
                    <ImageCarousel images={postImg} scrollFirstImage={false} />
                  ) : (
                    <ImageCarousel images={postImg} scrollFirstImage={true} />
                  )}
                </div>
                {/* ROW 3 */}
                <div className=" flex flex-row justify-between">
                  <div className="w-full pl-5 ">
                    <div className="uppercase text-sm">{postInfo.jobTitle}</div>
                    <div className="uppercase text-4xl font-bold">
                      {postInfo.companyName}
                    </div>
                    <p className="text-sm py-5">{postInfo.jobDescription}</p>
                    <div className="uppercase text-xs">Techs</div>
                    <div className=" text-sm ">
                      <ul className="flex flex-row flex-wrap">
                        {postInfo
                          ? postInfo.tools.map((tech, index) => (
                              <li
                                className="text-xs p-1  px-2 rounded-md my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold cursor-pointer whitespace-nowrap"
                                key={index}
                              >
                                {tech}
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <div
                    className="cursor-pointer text-[.3rem] p-2 m-5 border-2 border-white rounded-md text-white z-50"
                    onClick={() => {
                      closeModal();
                      dispatch(showNavbar());
                      dispatch(leaveScroll());
                      dispatch(particlesOn());
                    }}
                  >
                    {/* FECHAR */}
                    <h1>FECHAR</h1>
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
            <div className="w-full 2xl:min-w-[1200px] rounded-xl">
              <div className="flex flex-col justify-between rounded-xl p-5   backdrop-blur-xl bg-white/10 w-[90vw] 2xl:w-[90vw] h-[90vh] m-10 z-20 overflow-hidden">
                {/* ROW 1 */}
                <div className="h-[10%] flex flex-row justify-between p-5  ">
                  <div className="flex flex-col">
                    <div className="text-4xl ">Portfólio</div>
                    <div className="text-base uppercase ">{portWorkStatus}</div>
                  </div>
                  <div
                    className="cursor-pointer text-2xl z-50"
                    onClick={() => {
                      closeModal();
                      dispatch(showNavbar());
                      dispatch(leaveScroll());
                      dispatch(particlesOn());
                    }}
                  >
                    {/* FECHAR */}
                    <AiFillCloseCircle size={30} />
                  </div>
                </div>

                {/* ROW 2 */}
                <div className=" flex flex-col cursor-pointer ">
                  {/* {portWorkStatus === "edicao" ? (
                    <div className="flex flex-row-reverse">
                      <iframe
                        width="768"
                        height="432"
                        src={`${postImg}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="m-5 mr-16"
                      ></iframe>
                    </div>
                  ) : (
                    <ImageCarousel images={postImg} />
                  )} */}
                  {portWorkStatus === "edicao" ? (
                    <div className="flex flex-row-reverse">
                      <iframe
                        width="768"
                        height="432"
                        src={`${postImg}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="m-5 "
                      ></iframe>
                    </div>
                  ) : portWorkStatus === "foto" ? (
                    <ImageCarousel images={postImg} subSession={"foto"} />
                  ) : (
                    <ImageCarousel
                      images={postImg}
                      subSession={portWorkStatus}
                    />
                  )}
                </div>

                {/* ROW 3 */}
                <div className=" flex flex-row justify-between">
                  <div className="w-[30%] pl-5 ">
                    <div className="uppercase text-sm">{postInfo.jobTitle}</div>
                    <div className="uppercase text-5xl font-bold">
                      {postInfo.companyName}
                    </div>
                    <p className="text-sm py-5">{postInfo.jobDescription}</p>
                    <div className="uppercase text-xs">Techs</div>
                    <div className=" text-sm ">
                      <ul className="flex flex-row flex-wrap ">
                        {postInfo
                          ? postInfo.tools.map((tech, index) => (
                              <li
                                className="text-xs p-1  px-2 rounded-md my-1 mr-2 backdrop-blur-xl bg-white/10  hover:bg-white/50 hover:font-semibold cursor-pointer sm:whitespace-nowrap"
                                key={index}
                              >
                                {tech}
                              </li>
                            ))
                          : null}
                      </ul>
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
