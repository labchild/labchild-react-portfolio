import React from "react";

const About = () => {
    return (
        <section className="m-4 p-2 text-secondary">
            <h1>About Me</h1>
            <div>
                <img src="" alt="avatar" />
                <div>
                    <h4 className="lead">Hello World! 🌍</h4>
                    <p>
                        I am a recent graduate of Columbia Univeristy's Full Stack Engineering Bootcamp.
                        I loved the process, and now I'm excited to beginning a career as a full stack engineer.
                    </p>
                    <p>
                        I received a BS from Skidmore College in Saratoga Springs, NY. Since 2014, I have been working
                        in hospitality and the arts in New York City. I'm always looking for a new puzzle, hobby, or obsession,
                        and coding has been a great fit.
                    </p>
                    <p>I currently live in Brooklyn, NY.</p>
                </div>
            </div>
        </section>
    )
};

export default About;