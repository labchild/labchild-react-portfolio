import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <section className="m-4 p-2 text-secondary">
      <h1>Contact Me</h1>
      <p>
        You can reach me by phone, shoot me an email, or find me on any number
        of social networking sites.
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/labchild"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" /> @labchild on Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lelah-bates-childs-a6342a102/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" /> Lelah Bates Childs
            on LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactForm;
