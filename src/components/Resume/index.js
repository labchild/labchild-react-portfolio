import React from "react";
import { Link } from "react-router-dom";
import pdf from "../../assets/documents/lbchilds-resume.pdf";

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
            Click here to download the full PDF
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
