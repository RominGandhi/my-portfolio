import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import EducationCard from "./EducationCard";
import "../../editable-stuff/education.css";

const educationList = [
  {
    school: "Wilfrid Laurier University",
    degree: "Honours Bachelor of Science in Computer Science (BSc)",
    location: "Waterloo, ON",
    logo: require("../../assets/img/wlu.png"),
  },
  {
    school: "Lazaridis School of Business and Economics",
    degree: "Honours Bachelor of Business Administration (BBA), Finance",
    location: "Waterloo, ON",
    logo: require("../../assets/img/wluLaz.png"),
  },
];

const Education = () => {
  return (
    <section className="section education-section">
      <Container>
        {/* Title remains static */}
        <h2 className="education-heading text-center">Education</h2>
        <Row className="justify-content-center">
          {educationList.map((data, index) => (
            <EducationCard key={index} data={data} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
