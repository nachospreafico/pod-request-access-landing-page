import { useState, useEffect } from "react";

import "./App.css";

import Form from "./components/Form";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Circles from "./assets/desktop/bg-pattern-dots.svg";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app-container" id="app">
      <div className="bg-img-container">
        <div className="overlay"></div>
      </div>
      <Header />
      {isMobile ? (
        <>
          <MainSection />
          <Form />
        </>
      ) : (
        <div className="main-form-container">
          <MainSection />
          <Form isMobile={isMobile} />
        </div>
      )}
      {isMobile ? null : (
        <img className="bg-dots" src={Circles} alt="circles pattern"></img>
      )}
    </div>
  );
}

export default App;
