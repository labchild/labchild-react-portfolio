import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import "./App.css";

function App() {
  // category state for nav and rendering components
  const [currentSection, setCurrentSection] = useState("Home");
  /* const renderSection = () => {
    switch (currentSection) {
      case "About":
        return <About />;
      case "Portfolio":
        return <ProjectList />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      case "Home":
        return <Home />;
      default:
        return <Home />;
    }
  };
*/
  const handleSectionSelect = (sectionTitle) => {
    document.title = `LBC | ${sectionTitle}`;
    setCurrentSection(sectionTitle);
  }

  // set state for nav menu open and close
  const [navIsOpen, setNavIsOpen] = useState(false);

  function renderApp() {
    return (
      <div>
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
            <Route path="/labchild-react-portfolio" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<ProjectList />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<ContactForm />} />
          </Routes>
          {/* {renderSection()} */}
        </main>
      </div>
    );
  };

  return <Router>{renderApp()}</Router>;
}

export default App;