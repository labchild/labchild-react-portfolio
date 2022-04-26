import React, { useState } from "react";

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
  const renderSection = () => {
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

  const handleSectionSelect = (sectionTitle) => setCurrentSection(sectionTitle);

  // set state for nav menu open and close
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div>
      <Nav
        currentSection={currentSection}
        handleSectionSelect={handleSectionSelect}
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
      ></Nav>
      <main id="main">
        {/* about will always appear below everything else?
      add portfolio (render conditional)
      add resume (render conditional) - show an "abstract", link for full resume download
      add contact form (render conditional, not modal) */}
        {currentSection !== "Home" ? (
          <h3 className="home-btn">
            <a href="/">labchild</a>
          </h3>
        ) : (
          ""
        )}
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
