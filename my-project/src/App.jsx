import Modal from "react-modal";

import "./App.css";

import NavBar from "./Component/NavBar";

import BioSession from "./Component/BioSession";

import Contact from "./Component/Contact";
import Home from "./Component/Home";

import Portfolio from "./Component/Portfolio";
import Carreira from "./Component/Carreira";

import NewServiceSession from "./Component/NewServiceSession";



Modal.setAppElement("#root");

function App() {
  
  return (
    <>
      <NavBar />
      <Home />
      <BioSession />
      <Portfolio />
      <Carreira />
      {/* <ServicesSession /> */}
      <NewServiceSession/>
      <Contact />
    </>
  );
}

export default App;
