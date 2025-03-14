import React, { useEffect, useRef } from "react";
import { Jumbotron } from "./migration";
import ProfileCodeBlock from "./ProfileCodeBlock"; // Import the new component

const interests = [
  { description: "Working on open source projects" },
  { description: "Tinkering with hardware" },
  { description: "Gaming" },
  { description: "Participating in business strategy case competitions" },
];

const AboutMe = ({ message, resume }) => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("exit"); // Ensure enter animation runs
        } else {
          entry.target.classList.add("exit"); // Apply exit animation
          entry.target.classList.remove("visible"); // Remove visibility
        }
      });
    }, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <Jumbotron id="aboutme" className="hero-background">
      <div className="about-container">
        {/* Left Section: About Me */}
        <div className="about-content fade-in fade-out" ref={aboutRef}>
          <h1 className="about-heading">Beyond Code</h1>
          <p className="about-text">
            Hi, I'm <span className="highlight-gradient">Romin Gandhi</span> from Waterloo, Ontario. 👋
            <br />
            I’m not just a developer—I leverage my technical skills to solve complex problems in finance and make data-driven decisions.
            <br />
            <br />
            I’m currently pursuing a <span className="degree-gradient">Bachelor of Science in Computer Science (BSc)</span> and a <span className="degree-gradient">Bachelor of Business Administration (BBA)</span> at Wilfrid Laurier University, now in my 3-B semester. I have developed a comprehensive skill set that spans both technical expertise and business strategy, proven by my experience.
            <br />
          </p>

          {/* Interests Section */}
          <div className="interests-section">
            <p className="interests-intro">Some of my interests:</p>
            <div className="interests-list-container">
              <ul className="interests-list">
                {interests.map((item, index) => (
                  <li key={index} className="interest-item">
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resume Section */}
          <div className="resume-section">
            {resume && (
              <a
                className="resume-button"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
              >
                View Resume
              </a>
            )}
          </div>
        </div>

        {/* Right Section: Code Block */}
        <div className="skills-container slide-in-right slide-out-right" ref={skillsRef}>
          <ProfileCodeBlock />
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
