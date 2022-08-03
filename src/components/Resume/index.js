import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pdf from "../../assets/documents/resume-lgt.pdf";
import "./index.css";

const Resume = () => {

  return (
    <section className="content">
      <h1 className="title">Resume</h1>
      <div className="details">
        <Link
          to={pdf}
          target="_blank"
          download="lbchilds-resume.pdf"
          className="link"
        >
          <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" /> download the
          full pdf
        </Link>
      </div>
      <h3 className="subtitle details">Experience</h3>
      <div className="text-left details">
        <p>
          I've worked in a variety of environments over the past decade and across industries. From internships and entry level positions in corporate fashion and beauty to managerial positions in hospitality,
          I have developed a strong sense of motivation, teamwork, and ownership for my work. I have experience using Adobe Creative Suite, Microsoft Office, Google Workspace, and a number of POS products (including Toast and Aloha).
        </p>
        <p>
          Throughout the last ten years, I've also had to opportunity to provide my skills to small businesses and individuals outside of an enterprise setting.
          My freelance and consulting work has always centered around design, primarly graphic design and layout.
        </p>
        <p>
          Refer to my resumé for further information, or <Link to="/contact" className="text-link">reach out</Link> to me directly and I'll get back to you.
        </p>
      </div>
      <h3 className="subtitle details">Education</h3>
      <div className="text-left details">
        <h4>
          Columbia University, New York, NY - <em>Certificate</em>
        </h4>
        <p>Certificate in Full Stack Coding.</p>
      </div>
      <div className="text-left details">
        <h4>
          Skidmore College, Saratoga Springs, NY - <em>B.S.</em>
        </h4>
        <p>
          Bachelor of Science in Studio Art.{/*, with a double focus in Painting and
          Textiles and a minor focus in Animation.*/}
        </p>
      </div>
    </section>
  );
};

export default Resume;
