import React from "react";
import "./index.css";
import avatar from "../../assets/images/avatar.JPG";

const About = () => {
  return (
    <section className="content">
      <h1 className="title">about me</h1>
      <div className="d-flex flex-row justify-content-between flex-wrap row">
        <div className='avatar hide'>
          <img src={avatar} alt="avatar" className="rounded-circle" />
        </div>
        <div className="intro">
          <h4 className="subtitle text-left details">Hello World! 🌍</h4>
          <p className="text-left details">
            Curious and creative problem-solver transitioning to a career in
            tech. Strengths in frontend and backend development and experience
            with the MERN stack. I’m excited to leverage and grow my current
            skill set as part of a motivated team making the internet a better
            place.
          </p>
          <p className="text-left details">
            I am a recent graduate of Columbia Univeristy's Full Stack
            Engineering Bootcamp. I loved the process, and now I'm excited to
            begin a career as a full stack engineer.
            I received a BS from Skidmore College in Saratoga Springs,
            NY. Since 2014, I have been working in hospitality and the arts in
            New York City. I'm always looking for a new puzzle, hobby, or
            obsession, and coding has been a great fit.
          </p>
          <p className="details">I currently live in Brooklyn, NY.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
