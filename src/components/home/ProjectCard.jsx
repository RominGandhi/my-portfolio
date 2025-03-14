import React, { useState, useEffect, useCallback, useRef } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value, index }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2, // Trigger animation when 20% of card is visible
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

  const animationClass = index % 2 === 0 ? "slide-left" : "slide-right";

  return (
    <Col md={6} ref={cardRef} className={`project-card ${animationClass}`}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{description || <Skeleton count={3} />}</Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {languages_url ? <Language languages_url={languages_url} repo_url={svn_url} /> : <Skeleton count={3} />}
          {value ? <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} /> : <Skeleton />}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => (
  <div className="d-grid gap-2 d-md-block">
    <a href={`${svn_url}/archive/master.zip`} className="btn btn-outline-secondary mx-2">
      <i className="fab fa-github" /> Clone Project
    </a>
    <a href={svn_url} target="_blank" className="btn btn-outline-secondary mx-2">
      <i className="fab fa-github" /> Repo
    </a>
  </div>
);

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = Object.keys(data);
  const total_count = Object.values(data).reduce((a, b) => a + b, 0);

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length ? (
        array.map((language) => (
          <a key={language} className="card-link" href={`${repo_url}/search?l=${language}`} target="_blank" rel="noopener noreferrer">
            <span className="badge bg-light text-dark">
              {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </span>
          </a>
        ))
      ) : (
        "N/A"
      )}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("");

  useEffect(() => {
    const date = new Date(pushed_at);
    const now = new Date();
    const diff = now - date;
    const hours = Math.trunc(diff / (1000 * 60 * 60));

    setUpdated_at(hours < 24 ? `${hours} hours ago` : date.toDateString());
  }, [pushed_at]);

  return (
    <p className="card-text">
      <a href={`${repo_url}/stargazers`} target="_blank" className="text-dark text-decoration-none">
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
