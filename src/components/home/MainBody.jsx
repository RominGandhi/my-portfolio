import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import "../../editable-stuff/styles.css";

const profileImage = require("../../assets/img/Emoji.png");

const MainBody = React.forwardRef(({ gradient, title, icons }, ref) => {
  const typedElement = useRef(null); // Create a ref for Typed.js to attach

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "a 3rd-Year Double Degree Student in CS and Business",
        "a Developer",
        "a Problem Solver",
        "a Student Focused on Quantitative Finance"


      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: false // You can enable/disable the blinking cursor here
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg,${gradient})`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-items-center justify-content-center m-0"
    >
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-start w-100 text-light">
        {/* Profile Image */}
        <div className="d-flex align-items-start mr-auto">
          <img
            src={profileImage}
            alt="Profile"
            width={260}
            height={260}
            className="rounded-circle shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-container">
          {/* Welcome Text */}
          <h2 className="lead welcome-text">Welcome to my portfolio</h2>

          {/* Main Title */}
          <h1 ref={ref} className="display-1 slide-up">
            {title}
          </h1>

          {/* Typing Animation */}
          <p className="lead dynamic-text">
            I'm {" "}
            <span ref={typedElement} />
          </p>

          {/* More About Me Button */}
          <div className="text-center mt-4">
            <a
              className="btn btn-outline-light btn-lg more-about-btn"
              href="#aboutme"
              role="button"
              aria-label="Learn more about me"
            >
              More about me
            </a>
          </div>

          {/* Social Icons */}
          <div className="social-icons-container text-center mt-3">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
                className="social-icon"
              >
                <i className={`fab ${icon.image} fa-3x`} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
});

export default MainBody;
