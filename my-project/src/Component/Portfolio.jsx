import { useLayoutEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion, useInView, useAnimation } from "framer-motion";

import ModalWindow from "../assets/modal/ModalWindow";

import images from "./PortS/PortCovers";

import { PortImages } from "./PortS/PortImages";

import { jobDesc } from "./PortS/jobDesc";

//Redux
function freezeScroll() {
  return { type: "hold" };
}

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

  // Handle image changes when portfolio buttons are clicked
  const [portWorkStatus, setPortWorkStatus] = useState("uiux");

  // handle structure of images
  const [modalImgContainer, setModalImgContainer] = useState(PortImages.uiux);

  // handle structure of infos
  const [modalInfoContainer, setModalInfoContainer] = useState(jobDesc.uiux);

  //SRC of images
  const [imgSrc01, setImgSrc01] = useState("");
  const [imgSrc02, setImgSrc02] = useState("");
  const [imgSrc03, setImgSrc03] = useState("");
  const [imgSrc04, setImgSrc04] = useState("");
  const [imgSrc05, setImgSrc05] = useState("");
  const [imgSrc06, setImgSrc06] = useState("");

  // REDUX STORAGE //
  const scrollBodyModalOn = useSelector((state) => state.scrollBodyModalOn);
  // const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  // eslint-disable-next-line no-unused-vars
  const menuDisplayOpt = useSelector((state) => state.menuDisplayOpt);

  const dispatch = useDispatch();

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

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

  const handleImages = () => {
    console.log(portWorkStatus);
  };

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
    if (portWorkStatus === "uiux") {
      // console.log("uiux");
      setImgSrc01(images.uiux.img1);
      setImgSrc02(images.uiux.img2);
      setImgSrc03(images.uiux.img3);
      setImgSrc04(images.uiux.img4);
      setImgSrc05(images.uiux.img5);
      setImgSrc06(images.uiux.img6);
      // set images to inside of modal
      setModalImgContainer(PortImages.uiux);
      // set infos to modal
      setModalInfoContainer(jobDesc.uiux);
    }

    if (portWorkStatus === "impressos") {
      // console.log("impressos");
      setImgSrc02(images.impressos.img2);
      setImgSrc01(images.impressos.img1);
      setImgSrc03(images.impressos.img3);
      setImgSrc04(images.impressos.img4);
      setImgSrc05(images.impressos.img5);
      setImgSrc06(images.impressos.img6);
      // set images to inside of modal
      setModalImgContainer(PortImages.impressos);
      // set infos to modal
      setModalInfoContainer(jobDesc.impressos);
    }

    if (portWorkStatus === "branding") {
      // console.log("branding");
      setImgSrc01(images.branding.img1);
      setImgSrc02(images.branding.img2);
      setImgSrc03(images.branding.img3);
      setImgSrc04(images.branding.img4);
      setImgSrc05(images.branding.img5);
      setImgSrc06(images.branding.img6);
      // set images to inside of modal
      setModalImgContainer(PortImages.branding);
      // set infos to modal
      setModalInfoContainer(jobDesc.branding);
    }

    if (portWorkStatus === "foto") {
      // console.log("foto");
      setImgSrc01(images.foto.img1);
      setImgSrc02(images.foto.img2);
      setImgSrc03(images.foto.img3);
      setImgSrc04(images.foto.img4);
      setImgSrc05(images.foto.img5);
      setImgSrc06(images.foto.img6);
      // set images to inside of modal
      setModalImgContainer(PortImages.foto);
      // set infos to modal
      setModalInfoContainer(jobDesc.foto);
    }

    if (portWorkStatus === "edicao") {
      // console.log("edicao");
      setImgSrc01(images.edicao.img1);
      setImgSrc02(images.edicao.img2);
      setImgSrc03(images.edicao.img3);
      setImgSrc04(images.edicao.img4);
      setImgSrc05(images.edicao.img5);
      setImgSrc06(images.edicao.img6);
      // set images to inside of modal
      setModalImgContainer(PortImages.edicao);
      // set infos to modal
      setModalInfoContainer(jobDesc.edicao);
    }
  }, [portWorkStatus]);

  // CONSOLE ZONE //

  // console.log(portWorkStatus);
  // console.log(imgSrc01);

  // console.log(modalImgContainer)
  // console.log(modalImgContainer.container01);

  // console.log(menuDisplayOpt);

  // console.log(modalStatus);

  // console.log(scrollBodyModalOn)

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
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col p-5 sm:p-5 md:p-8">
              <div className="sm:w-[50%] md:w-full w-full flex flex-col">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className=""
                >
                  Portifólio
                </motion.h1>

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

              {window.innerWidth <= 961 ? (
                <div
                  className="w-full flex flex-row  justify-between overflow-y-hidden py-5"
                  ref={ref}
                >
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("uiux");
                    }}
                    className={`w-full mt-5 py-1 h-[50px] ${
                      portWorkStatus === "uiux"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } whitespace-nowrap mx-2`}
                  >
                    UI / UX
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("impressos");

                      handleImages();
                    }}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "impressos"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 whitespace-nowrap`}
                  >
                    IMPRESSOS
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("branding")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "branding"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 uppercase whitespace-nowrap`}
                  >
                    Branding
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("foto")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "foto"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 uppercase whitespace-nowrap`}
                  >
                    Fotografia
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("edicao")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "edicao"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 uppercase whitespace-nowrap`}
                  >
                    Edição
                  </motion.button>
                </div>
              ) : (
                <div
                  className="w-full h-screen flex sm:flex-row flex-col items-center justify-center"
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
                  <motion.button
                    // ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("uiux");
                    }}
                    className={`w-full mt-5 py-1 h-[50px] ${
                      portWorkStatus === "uiux"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } whitespace-nowrap text-2xl`}
                  >
                    UI / UX
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("impressos");

                      handleImages();
                    }}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "impressos"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 whitespace-nowrap`}
                  >
                    IMPRESSOS
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("branding")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "branding"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 uppercase whitespace-nowrap`}
                  >
                    Branding
                  </motion.button>
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("foto")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "foto"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 uppercase whitespace-nowrap`}
                  >
                    Fotografia
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("edicao")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "edicao"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 uppercase whitespace-nowrap`}
                  >
                    Edição
                  </motion.button>
                </div>
              )}
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
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container01);
                  setPostInfo(modalInfoContainer.data01);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  // src={`${images}${portWorkStatus}.img1`}
                  src={imgSrc01}
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
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container02);
                  setPostInfo(modalInfoContainer.data02);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc02}
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
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container03);
                  setPostInfo(modalInfoContainer.data03);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc03}
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
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container04);
                  setPostInfo(modalInfoContainer.data04);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc04}
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
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container05);
                  setPostInfo(modalInfoContainer.data05);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc05}
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
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container06);
                  setPostInfo(modalInfoContainer.data06);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  // src={`${images}${portWorkStatus}.img1`}
                  src={imgSrc06}
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
                <motion.h1
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
                </motion.h1>

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

              {window.innerWidth <= 961 ? (
                <div className="w-full flex flex-row  justify-between overflow-y-hidden py-5">
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("uiux");
                    }}
                    className={`w-full mt-5 py-1 h-[50px] ${
                      portWorkStatus === "uiux"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } whitespace-nowrap mx-2`}
                  >
                    UI / UX
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("impressos");

                      handleImages();
                    }}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "impressos"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 whitespace-nowrap`}
                  >
                    IMPRESSOS
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("branding")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "branding"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 uppercase whitespace-nowrap`}
                  >
                    Branding
                  </motion.button>
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("foto")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "foto"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } mx-2 uppercase whitespace-nowrap`}
                  >
                    Fotografia
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("edicao")}
                    className={`mx-2 mt-5 py-1 h-[50px] ${
                      portWorkStatus === "edicao"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    }  uppercase whitespace-nowrap`}
                  >
                    Edição
                  </motion.button>
                </div>
              ) : (
                <div className="sm:w-[50%]  w-full flex sm:flex-row flex-col justify-between ">
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("uiux");
                    }}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "uiux"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } whitespace-nowrap lg:text-[.7rem] xl:text-sm 2xl:text-sm `}
                  >
                    UI / UX
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setPortWorkStatus("impressos");

                      handleImages();
                    }}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "impressos"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 lg:ml-2 2xl:ml-5 whitespace-nowrap lg:text-[.7rem] xl:text-sm  2xl:text-sm`}
                  >
                    IMPRESSOS
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("branding")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "branding"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 lg:ml-2 2xl:ml-5 whitespace-nowrap lg:text-[.7rem] xl:text-sm  2xl:text-sm uppercase`}
                  >
                    Branding
                  </motion.button>
                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("foto")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "foto"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 lg:ml-2 2xl:ml-5 whitespace-nowrap lg:text-[.7rem] xl:text-sm  2xl:text-sm uppercase`}
                  >
                    Fotografia
                  </motion.button>

                  <motion.button
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPortWorkStatus("edicao")}
                    className={`mt-5 py-1 h-[50px] ${
                      portWorkStatus === "edicao"
                        ? "bg-[#D6223B] text-white"
                        : "bg-[#19142A] border border-gray-500 text-gray-500"
                    } sm:ml-10 lg:ml-2 lx:ml-5 2xl:ml-5 whitespace-nowrap lg:text-[.7rem] xl:text-sm  2xl:text-sm uppercase`}
                  >
                    Edição
                  </motion.button>
                </div>
              )}
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
                className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container01);
                  setPostInfo(modalInfoContainer.data01);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc01}
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
                className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  dispatch(freezeScroll());
                  setPostImg(modalImgContainer.container02);
                  setPostInfo(modalInfoContainer.data02);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc02}
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
                className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  dispatch(freezeScroll());
                  setPostImg(modalImgContainer.container03);
                  setPostInfo(modalInfoContainer.data03);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc03}
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
                className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  dispatch(freezeScroll());
                  setPostImg(modalImgContainer.container04);
                  setPostInfo(modalInfoContainer.data04);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc04}
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
                className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                onClick={() => {
                  setModalStatus(true);
                  dispatch(hideNavbar());
                  dispatch(freezeScroll());
                  dispatch(particlesOff());
                  setPostImg(modalImgContainer.container05);
                  setPostInfo(modalInfoContainer.data05);
                }}
              >
                <img
                  className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                  src={imgSrc05}
                  alt=""
                />
              </motion.div>

              {imgSrc06 === images.impressos.img6 ? (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                  onClick={() => {
                    setModalStatus(true);
                    dispatch(hideNavbar());
                    dispatch(freezeScroll());
                    dispatch(particlesOff());
                    setPostImg(modalImgContainer.container06);
                    setPostInfo(modalInfoContainer.data06);
                  }}
                >
                  <img
                    className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                    src={imgSrc06}
                    alt=""
                  />
                </motion.div>
              ) : (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-black sm:h-[400px] lg:h-80 2xl:h-[300px] h-[200px] rounded-3xl"
                  onClick={() => {
                    setModalStatus(true);
                    dispatch(hideNavbar());
                    dispatch(freezeScroll());
                    dispatch(particlesOff());
                    setPostImg(modalImgContainer.container06);
                    setPostInfo(modalInfoContainer.data06);
                  }}
                >
                  <img
                    className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                    src={imgSrc06}
                    alt=""
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
