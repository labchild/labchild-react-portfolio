import React from "react";

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
          <a href="" target="_blank">
            <span className="fa-brands fa-github"></span> @labchild on Github
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <span className="fa-brands fa-linkedin"></span> Lelah Bates Childs on LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactForm;
