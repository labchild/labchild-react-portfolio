import React, { useState } from "react";

const Nav = (props) => {
  const { currentSection, handleSectionSelect } = props;

  const [navIsOpen, setNavIsOpen] = useState(false);
  // useState for menu toggle (open/close) as boolean, change css class with handler?

  // currentSection for nav-link highlight css class
  // handleSectionSelect for render component on main
  return (
    <header className="sidenav">
      <div>
        <span
        // onClick={handleMenuClick()}
        >
          open/close btn
        </span>
      </div>

      <nav>
        <ul>
          <li className="sidenav-link">
            <a
              href="#about"
              onClick={() => {
                handleSectionSelect("About");
              }}
              className={
                currentSection === "About" ? "sidenav-link active" : ""
              }
            >
              <span className={navIsOpen ? "" : "fa fa-download"}>{navIsOpen ? "About" : ""}</span>
            </a>
          </li>
          <li className="sidenav-link">
            <a
              href="#portfolio"
              onClick={() => {
                handleSectionSelect("Portfolio");
              }}
              className={
                currentSection === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              <span>Work</span>
            </a>
          </li>
          <li className="sidenav-link">
            <a
              href="#Resume"
              onClick={() => {
                handleSectionSelect("Resume");
              }}
              className={
                currentSection === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              <span>Resumé</span>
            </a>
          </li>
          <li className="sidenav-link">
            <a
              href="#contact"
              onClick={() => {
                handleSectionSelect("Contact");
              }}
              className={
                currentSection === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <article>
        <h6>&copy;2022 labchild</h6>
        <a target="_blank">report an issue</a>
      </article>
    </header>
  );
  /* return (
        <header className="d-flex flex-row justify-content-between">
            <h2 className="lead font-weight-bold">
                <a href="/" 
                onClick={() => { handleSectionSelect('Home') }}
                className="text-secondary nav-link">
                    Lelah Bates Childs
                </a>
            </h2>
            <nav>
                <ul className="d-flex flex-row">
                    <li>
                        <a
                            href="#about"
                            onClick={() => { handleSectionSelect('About') }}
                            className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            onClick={() => { handleSectionSelect('Portfolio') }}
                            className={currentSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Resume"
                            onClick={() => { handleSectionSelect('Resume') }}
                            className={currentSection === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume <span class="fa fa-download"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => { handleSectionSelect('Contact') }}
                            className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    ) */
};

export default Nav;
