import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <section className="content">
      <h1 className="title">Contact</h1>
      <div className="details">
      <p>
        You can reach me by phone, shoot me an email, or find me on these
        social networking sites.
      </p>
      </div>
      <div className="details text-left">
      <ul className="link-list">
        <li>
        <a
            href="mailto:labchildsgmail.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FontAwesomeIcon icon="fa-solid fa-at" /> labchilds@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/labchild"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" /> @labchild on Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lelah-bates-childs-a6342a102/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" /> Lelah Bates Childs
            on LinkedIn
          </a>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default ContactForm;
