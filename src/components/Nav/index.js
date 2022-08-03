import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../Footer";
import "./index.css";

const Nav = (props) => {

  const { handleSectionSelect, navIsOpen, setNavIsOpen } = props;

  const handleMenuClose = () => {
    console.log("close");
    setNavIsOpen(false);
  };

  const handleMenuOpen = () => {
    console.log("open");
    setNavIsOpen(true);
  };

  return (
    <header className={navIsOpen ? "sidenav show-nav" : "sidenav"}>
      <div className="closebtn">
        {navIsOpen ? (
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            onClick={() => handleMenuClose()}
          />
        ) : (
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            onClick={() => handleMenuOpen()}
          />
        )}
      </div>

      <nav className="menu">
        <ul>
          <li>
            <NavLink
              to="/labchild-react-portfolio/about"
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
              {navIsOpen ? (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />
                  <span> about</span>
                </>
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/labchild-react-portfolio/portfolio"
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
              {navIsOpen ? (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-code" />
                  <span> projects</span>
                </>
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-code" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/labchild-react-portfolio/resume"
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
              {navIsOpen ? (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-file-lines" />
                  <span> resumé</span>
                </>
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-file-lines" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/labchild-react-portfolio/contact"
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
              {navIsOpen ? (
                <>
                  <FontAwesomeIcon icon="fa-solid fa-at" />
                  <span> contact</span>
                </>
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-at" />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>

      <Footer navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </header>
  );
};

export default Nav;
