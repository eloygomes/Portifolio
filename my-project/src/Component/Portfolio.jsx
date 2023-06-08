
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion, useInView, useAnimation } from "framer-motion";
import ModalWindow from "../assets/modal/ModalWindow";

import port01 from "../assets/port/Profissional/01/behance_c3tech.png";


//Redux

function freezeScroll() {
  return { type: 'hold' };
}

function hideNavbar() {
  return { type: 'hide' };
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



function Portfolio() {
  const [modalStatus, setModalStatus] = useState(false);
  const [postImg, setPostImg] = useState(port01);

  const [portWorkInfo, setPortWorkInfo] = useState({});

  // Handle page scroll
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const [portWorkStatus, setPortWorkStatus] = useState('personal');

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();





  const scrollBodyModalOn = useSelector((state) => state.scrollBodyModalOn);
  
  const dispatch = useDispatch();


  var portStatus = 'pro';

  //Handle port work status
  useEffect(() => {


  }, [portWorkStatus]);



  //Handle page scroll
  const handleToggleScroll = () => {
    if (scrollEnabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setScrollEnabled(!scrollEnabled);
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  //Handle page scroll
  useEffect(() => {
    handleToggleScroll()
  }, [scrollBodyModalOn]);

  return (
    <>
      <ModalWindow
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        postImg={postImg}
        setPostImg={setPostImg}
        portWorkInfo={portWorkInfo}
      />
      <div className="bg-[#19142A] w-screen h-screen flex flex-col" id="port">
        <div ref={ref} className="container mx-auto mt-40">
          <div className="flex flex-row">
            <div className="w-[50%] flex flex-col">
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
                que trabalhei ao longo dos anos. Meu portfólio abrange uma ampla
                gama de trabalhos, desde branding até desenvolvimento web.
              </motion.p>
            </div>

            <div className="w-[50%] flex flex-row justify-end ">

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
                onClick={() => setPortWorkStatus('personal')}
                className="mt-5 py-1 h-[50px] bg-[#19142A] text-white border border-white"
              >
                Projetos Pessoais
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
                onClick={() => setPortWorkStatus('pro')}
                className="mt-5 py-1 h-[50px]  bg-[#19142A] text-white border border-white ml-10"
              >
                Projetos Profissionais
              </motion.button>

            </div>

          </div>

          <div className="grid gap-4 grid-cols-6 grid-rows-1 text-center pt-10 cursor-pointer">

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-black h-[400px]"
              onClick={() => {
                console.log("CLICOUUUUU");
                setModalStatus(true);
                dispatch(hideNavbar())
                dispatch(freezeScroll())
                setPostImg([
                  "https://picsum.photos/seed/picsum1/1000/",
                  "https://picsum.photos/seed/picsum2/500/500",
                  "https://picsum.photos/seed/picsum3/500/500",
                  "https://picsum.photos/seed/picsum4/500/500",
                  "https://picsum.photos/seed/picsum5/500/500",
                  "https://picsum.photos/seed/picsum6/1000/",
                  "https://picsum.photos/seed/picsum7/500/500",
                  "https://picsum.photos/seed/picsum8/500/500",
                  "https://picsum.photos/seed/picsum9/500/500",
                  "https://picsum.photos/seed/picsum10/500/500",
                  "https://picsum.photos/seed/picsum11/1000/",
                  "https://picsum.photos/seed/picsum12/500/500",
                  
                ])
                setPortWorkInfo({
                  kindOfProject: "ReBranding",
                  companyName: "C3Tech",
                  techs: ["React", "NextJS", "TailwindCSS"],
                  jobDescription: "Era uma merda, agora é uma bosta",
                });

              }}
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                // src={images.pro.img1}
                src={portWorkStatus === 'personal' ? images.personal.img1 : images.pro.img1}
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
              className="bg-black h-[400px]"
              onClick={() => {
                console.log("CLICOUUUUU N2");
                setModalStatus(true);
                dispatch(hideNavbar())
                dispatch(freezeScroll())
                setPostImg([
                  "https://picsum.photos/seed/picsum7/1000/",
                  "https://picsum.photos/seed/picsum8/500/500",
                  "https://picsum.photos/seed/picsum9/500/500",
                  "https://picsum.photos/seed/picsum10/500/500",
                  "https://picsum.photos/seed/picsum11/500/500",
                ])
                setPortWorkInfo({
                  kindOfProject: "ReBranding",
                  companyName: "GIBSON TECH E DESASTRES",
                  techs: ["React", "NextJS", "TailwindCSS"],
                  jobDescription: "Era uma merda, agora é uma bosta",
                });

                
              }}
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={portWorkStatus === 'personal' ? images.personal.img2 : images.pro.img2}
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
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={portWorkStatus === 'personal' ? images.personal.img3 : images.pro.img3}
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
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={portWorkStatus === 'personal' ? images.personal.img4 : images.pro.img4}
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
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={portWorkStatus === 'personal' ? images.personal.img5 : images.pro.img5}
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
              className="bg-black h-[400px]"
            >
              <img
                className="w-full hover:scale-110 transition duration-100 ease-in-out object-cover h-full rounded-xl"
                src={portWorkStatus === 'personal' ? images.personal.img6 : images.pro.img6}
                alt=""
              />
            </motion.div>

        

          </div>
          
        </div>
      </div>
    </>
  );
}

export default Portfolio;
