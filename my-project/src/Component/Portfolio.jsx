import { useLayoutEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion, useInView, useAnimation } from "framer-motion";

import ModalWindow from "../assets/modal/ModalWindow";
import images from "./PortS/PortCovers";
import { PortImages } from "./PortS/PortImages";
import { jobDesc } from "./PortS/jobDesc";

//Redux

function hideNavbar() {
  return { type: "hide" };
}

function particlesOff() {
  return { type: "off" };
}

// function particlesOn() {
//   return { type: "on" };
// }

function currentSession() {
  return { type: "port" };
}

function Portfolio() {
  const [modalStatus, setModalStatus] = useState(false);

  // Handle images inside the modal
  // const [postImg, setPostImg] = useState(port01);
  const [postImg, setPostImg] = useState("");

  // Handle infos inside the modal
  const [postInfo, setPostInfo] = useState("");

  // Handle page scroll
  // const [scrollEnabled, setScrollEnabled] = useState(false);

  const [portWorkStatus, setPortWorkStatus] = useState("uiux");
  const [portfolioData, setPortfolioData] = useState({
    images: images.uiux,
    modal: PortImages.uiux,
    info: jobDesc.uiux,
  });

  // REDUX STORAGE //
  const scrollBodyModalOn = useSelector((state) => state.scrollBodyModalOn);
  // const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  const dispatch = useDispatch();

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const {
    images: currentImages,
    modal: currentModal,
    info: currentInfo,
  } = portfolioData;

  // FUNCTIONS //
  //Handle page scroll
  // const handleToggleScroll = () => {
  //   if (scrollEnabled) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   setScrollEnabled(!scrollEnabled);
  // };

  // USER EFFECTS //
  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      // console.log("PORTFOLIO");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // console.log(isInView);
      dispatch(currentSession());
      // console.log("PORTFOLIO");
    }
  }, [menuDisplayOpt]);

  ////////////// GET THE POMBO

  //Handle page scroll
  useLayoutEffect(() => {
    if (isInView) {
      // handleToggleScroll();
    }
  }, [scrollBodyModalOn]);

  //This useEffect is to handle the particles when the modal is open
  useLayoutEffect(() => {
    if (isInView) {
      // handleToggleScroll();
    }
  }, [modalStatus]);

  useLayoutEffect(() => {
    const key = images[portWorkStatus] ? portWorkStatus : "uiux";
    setPortfolioData({
      images: images[key],
      modal: PortImages[key],
      info: jobDesc[key],
    });
  }, [portWorkStatus]);

  // CONSOLE ZONE //

  // Control Scroll
  const makingMagicHappen = () => {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    dispatch({ type: "hold" });
  };

  return (
    <>
      <ModalWindow
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        postImg={postImg}
        setPostImg={setPostImg}
        portWorkStatus={portWorkStatus}
        postInfo={postInfo}
      />
      {window.innerWidth <= 961 ? (
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////  MOBILE  ////////////////////////////////////////////////////////////////////////////////////
        <div
          className="bg-[#19142A] w-screen h-full flex flex-col 2xl:mb-5 "
          id="port"
          ref={ref}
        >
          <div className="container mx-auto sm:mt-10 mt-16">
            <div className="flex flex-col  p-5 sm:p-5 md:p-8">
              <div className="sm:w-[50%] md:w-full w-full flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Portifólio
                </h2>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="max-w-md py-5 text-sm"
                >
                  Aqui você encontrará uma coleção diversificada de projetos em
                  que trabalhei ao longo dos anos. Meu portfólio abrange uma
                  ampla gama de trabalhos, desde branding até desenvolvimento
                  web.
                </motion.p>
              </div>

              {/* /////////////////////////////////////////////////////////////////////////BUTTONS///////////////////////////////////////////////////////////////////////// */}
            </div>

            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}

            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 grid-cols-3 sm:grid-rows-1 grid-rows-2 text-center cursor-pointer p-5 sm:p-5 md:p-10 mb-10">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-black sm:h-[400px] h-[200px]"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  // dispatch(particlesOff());
                  setPostImg(currentModal.container01);
                  setPostInfo(portfolioData.info.data01);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  // src={`${images}${portWorkStatus}.img1`}
                  src={currentImages.img1}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black sm:h-[400px] h-[200px]"
                onClick={() => {
                  console.log("CLICOUUUUU N2");
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  //
                  dispatch(particlesOff());
                  setPostImg(currentModal.container02);
                  setPostInfo(portfolioData.info.data02);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img2}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="bg-black sm:h-[400px] h-[200px]"
                onClick={() => {
                  console.log("CLICOUUUUU N2");
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  //
                  dispatch(particlesOff());
                  setPostImg(currentModal.container03);
                  setPostInfo(portfolioData.info.data03);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img3}
                  alt=""
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-black sm:h-[400px] h-[200px]"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());

                  dispatch(particlesOff());
                  setPostImg(currentModal.container04);
                  setPostInfo(portfolioData.info.data04);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img4}
                  alt=""
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="bg-black sm:h-[400px] h-[200px]"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());

                  dispatch(particlesOff());
                  setPostImg(currentModal.container05);
                  setPostInfo(portfolioData.info.data05);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img5}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-black sm:h-[400px] h-[200px]"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());

                  dispatch(particlesOff());
                  setPostImg(currentModal.container06);
                  setPostInfo(portfolioData.info.data06);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  // src={`${images}${portWorkStatus}.img1`}
                  src={currentImages.img6}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-[#19142A] w-screen h-full sm:h-screen flex flex-col "
          id="port"
          ref={ref}
        >
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////// DESKTOP ///////////////////////////////////////////////////////////////////////// */}

          <div className="container mx-auto  mt-16 flex flex-col items-center justify-center h-screen">
            <div className="w-full flex flex-row p-5 lg:px-20 lg:pb-00 lg:pt-20 2xl:px-32">
              <div className="sm:w-[50%] w-full flex flex-col">
                {/* <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="text-5xl lg:text-3xl 2xl:text-5xl"
                >
                  Portifólio
                </motion.h1> */}

                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Portifólio
                </h2>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="max-w-md py-5 text-sm lg:text-xs 2xl:text-sm"
                >
                  Aqui você encontrará uma coleção diversificada de projetos em
                  que trabalhei ao longo dos anos. Meu portfólio abrange uma
                  ampla gama de trabalhos, desde branding até desenvolvimento
                  web.
                </motion.p>
              </div>

              {/* /////////////////////////////////////////////////////////////////////////BUTTONS///////////////////////////////////////////////////////////////////////// */}
            </div>

            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////////IMAGES///////////////////////////////////////////////////////////////////////// */}

            <div className="grid gap-6 sm:grid-cols-6 grid-cols-3 sm:grid-rows-1 grid-rows-2 text-center cursor-pointer p-10 lg:px-20 2xl:px-32 mb-10 w-full ">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-black sm:h-[400px] lg:h-80 xl:h-60 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  dispatch(particlesOff());
                  setPostImg(currentModal.container01);
                  setPostInfo(portfolioData.info.data01);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img1}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black sm:h-[400px] lg:h-80 xl:h-60 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  setPostImg(currentModal.container02);
                  setPostInfo(portfolioData.info.data02);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img2}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="bg-black sm:h-[400px] lg:h-80 xl:h-60 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  setPostImg(currentModal.container03);
                  setPostInfo(portfolioData.info.data03);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img3}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-black sm:h-[400px] lg:h-80 xl:h-60 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  setPostImg(currentModal.container04);
                  setPostInfo(portfolioData.info.data04);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img4}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="bg-black sm:h-[400px] lg:h-80 xl:h-60 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  dispatch(particlesOff());
                  setPostImg(currentModal.container05);
                  setPostInfo(portfolioData.info.data05);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img5}
                  alt=""
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-black sm:h-[400px] lg:h-80 xl:h-60 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  makingMagicHappen();
                  dispatch(particlesOff());
                  setPostImg(currentModal.container06);
                  setPostInfo(portfolioData.info.data06);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={currentImages.img6}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
