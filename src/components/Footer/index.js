import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const Footer = ( {navIsOpen} ) => {


  return (
    <footer>
      {navIsOpen ? (
        <>
          <p>&copy;2022 Lelah Bates Childs 🚀</p>
          <p>
            <a
              href="https://github.com/labchild/labchild-react-portfolio/issues"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" /> Report an issue
            </a>
          </p>
        </>
      ) : (
        <p>
          <a
            href="https://github.com/labchild/labchild-react-portfolio/issues"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
