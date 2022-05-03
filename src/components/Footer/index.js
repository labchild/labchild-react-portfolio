import React from "react";
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
              <span className="fa-brands fa-github"></span> Report an issue
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
            <span className="fa-brands fa-github"></span>
          </a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
