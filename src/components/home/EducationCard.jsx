import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";

const EducationCard = ({ data }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Alternate animations for each card
  const animationClass =
    data.school === "Wilfrid Laurier University" ? "slide-left" : "slide-right";

  return (
    <Col
      lg="6"
      md="6"
      sm="12"
      className={`d-flex flex-column align-items-center text-center edu-card ${animationClass}`}
      ref={cardRef}
    >
      <div
        style={{
          width: "220px",
          height: "90px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={data.logo}
          alt={`${data.school} Logo`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <h4 className="font-weight-bold">{data.school}</h4>
      <p className="mb-1" style={{ fontSize: "1.1rem", fontWeight: "normal" }}>
        {data.degree}
      </p>
      <p className="text-muted">{data.location}</p>
    </Col>
  );
};

export default EducationCard;
