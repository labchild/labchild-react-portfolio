import React from "react";

const Resume = () => {
  return (
    <section className="m-4 p-2 text-secondary">
      <h1>Resume</h1>
      <div>
          <p>Click here to download the full PDF</p>
      </div>
      <h3 className="title">Education</h3>
      
      <p className="lead">Columbia University, New York, NY - <em>Certificate</em></p>
      <p>
        Certificate in Full Stack Web Development.
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
