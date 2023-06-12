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

import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

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

  return (
    <>
      <NavBar />
      <Home />
      <BioSession />
      <Portfolio />
      <Carreira />
      <ServicesSession />
      <Contact />
    </>
  );
}

export default App;
