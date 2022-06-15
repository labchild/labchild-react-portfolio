import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pdf from "../../assets/documents/resume.pdf";

const Resume = () => {
  return (
    <section className="m-4 p-2 text-secondary">
      <h1>Resume</h1>
      <div>
          <Link
          to={pdf}
          target="_blank"
          download="lbchilds-resume.pdf"
          >
            <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" /> download the full pdf
          </Link>
      </div>
      <h3 className="title">Education</h3>
      
      <p className="lead">Columbia University, New York, NY - <em>Certificate</em></p>
      <p>
        Certificate in Full Stack Coding.
      </p>

      <p className="lead">Skidmore College, Saratoga Springs, NY - <em>B.S.</em></p>
      <p>
        Bachelor of Science in Studio Art, with a double focus in Painting and
        Textiles and a minor focus in Animation.
      </p>
      
    </section>
  );
};

export default Resume;
