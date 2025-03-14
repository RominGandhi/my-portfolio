import React from "react";

const GetInTouch = ({ heading, message, email, linkedin }) => {
  return (
    <>
      <h2 className="get-in-touch-heading">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}{" "}
        <a 
          className="text-decoration-none" 
          href={`mailto:${email}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {email}
        </a>{" "}
        or connect with me on{""}
        <a 
          className="text-decoration-none" 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: "inline-block", padding: "5px" }} 
        >
          LinkedIn.
        </a>
      </p>
    </>
  );
};

export default GetInTouch;
