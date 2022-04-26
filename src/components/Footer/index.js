import React from "react";
import "./index.css";

const Footer = (props) => {
  const { navIsOpen, setNavIsOpen } = props;

  return (
    <footer>
      {navIsOpen ? (
        <>
          <p>&copy;2022 Lelah Bates Childs 🚀</p>
          <p>
            <a
              href="https://github.com/labchild/labchild-react-portfolio/issues"
              target="_blank"
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
          >
            <span className="fa-brands fa-github"></span>
          </a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
