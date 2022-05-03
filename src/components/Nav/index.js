import React from "react";
import { NavLink } from "react-router-dom";

import Footer from "../Footer";
import "./index.css";

const Nav = (props) => {
  const { handleSectionSelect, navIsOpen, setNavIsOpen } = props;

  // const [navIsOpen, setNavIsOpen] = useState(false);
  // useState for menu toggle (open/close) as boolean, change css class with handler?

  // currentSection for nav-link highlight css class
  // handleSectionSelect for render component on main

  const handleMenuClose = () => {
    console.log("close");
    setNavIsOpen(false);
  };

  const handleMenuOpen = () => {
    console.log("open");
    setNavIsOpen(true);
  };

  return (
    <header className={navIsOpen ? "sidenav show-nav" : "sidenav hide-nav"}>
      <div className="closebtn">
        {navIsOpen ? (
          <span
            className="fa-solid fa-xmark"
            onClick={() => handleMenuClose()}
          ></span>
        ) : (
          <span
            className="fa-solid fa-bars"
            onClick={() => handleMenuOpen()}
          ></span>
        )}
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                handleSectionSelect("About");
              }}
              className={
                // currentSection === "About" ? "sidenav-link active" : ""
                ({ isActive }) =>
                  isActive && navIsOpen
                    ? "sidenav-link navlink-active"
                    : isActive && !navIsOpen
                    ? "sidenav-link navlink-closed navlink-active"
                    : !isActive && navIsOpen
                    ? "sidenav-link"
                    : "sidenav-link navlink-closed"
              }
            >
              <span className={navIsOpen ? "" : "fa fa-download"}>
                {navIsOpen ? "about" : ""}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              onClick={() => {
                handleSectionSelect("Portfolio");
              }}
              className={({ isActive }) =>
                isActive && navIsOpen
                  ? "sidenav-link navlink-active"
                  : isActive && !navIsOpen
                  ? "sidenav-link navlink-closed navlink-active"
                  : !isActive && navIsOpen
                  ? "sidenav-link"
                  : "sidenav-link navlink-closed"
              }
            >
              <span className={navIsOpen ? "" : "fa fa-download"}>
                {navIsOpen ? "work" : ""}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={() => {
                handleSectionSelect("Resume");
              }}
              className={
                // currentSection === "About" ? "sidenav-link active" : ""
                ({ isActive }) =>
                  isActive && navIsOpen
                    ? "sidenav-link navlink-active"
                    : isActive && !navIsOpen
                    ? "sidenav-link navlink-closed navlink-active"
                    : !isActive && navIsOpen
                    ? "sidenav-link"
                    : "sidenav-link navlink-closed"
              }
            >
              <span className={navIsOpen ? "" : "fa fa-download"}>
                {navIsOpen ? "resumé" : ""}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              onClick={() => {
                handleSectionSelect("Contact");
              }}
              className={
                // currentSection === "About" ? "sidenav-link active" : ""
                ({ isActive }) =>
                  isActive && navIsOpen
                    ? "sidenav-link navlink-active"
                    : isActive && !navIsOpen
                    ? "sidenav-link navlink-closed navlink-active"
                    : !isActive && navIsOpen
                    ? "sidenav-link"
                    : "sidenav-link navlink-closed"
              }
            >
              <span className={navIsOpen ? "" : "fa fa-download"}>
                {navIsOpen ? "contact" : ""}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <article>
        <Footer navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
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
