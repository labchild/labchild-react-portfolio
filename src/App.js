// packages
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCloudArrowDown,
  faUserAstronaut,
  faAt,
  faCode,
  faXmark,
  faBars,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

// my components
import Nav from "./components/Nav";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import "./App.css";

// custom icon library
library.add(
  faCloudArrowDown,
  faUserAstronaut,
  faAt,
  faCode,
  fab,
  faXmark,
  faBars,
  faFileLines
);

function App() {
  // category state for nav and rendering components
  const [currentSection, setCurrentSection] = useState("Home");
  const handleSectionSelect = (sectionTitle) => {
    document.title = `LBC | ${sectionTitle}`;
    setCurrentSection(sectionTitle);
  };

  // set state for nav menu open and close
  const [navIsOpen, setNavIsOpen] = useState(false);

  function renderApp() {
    return (
      <>
        <Nav
          currentSection={currentSection}
          handleSectionSelect={handleSectionSelect}
          navIsOpen={navIsOpen}
          setNavIsOpen={setNavIsOpen}
        ></Nav>
        <main id="main">
          {currentSection !== "Home" ? (
            <h3 className="home-btn">
              <a href="/">labchild</a>
            </h3>
          ) : (
            ""
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/labchild-react-portfolio"
              element={
                <Home
                  currentSection={currentSection}
                  handleSectionSelect={handleSectionSelect}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<ProjectList />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </>
    );
  }

  return <Router>{renderApp()}</Router>;
}

export default App;
