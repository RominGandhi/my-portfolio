import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook } from "react-icons/fa";
import "../../editable-stuff/education.css"; // Import updated CSS

const courses = [
  { title: "Calculus I", term: "Fall 2022" },
  { title: "Data Structure I", term: "Winter 2022" },
  { title: "CP213 - Data Structures", term: "Winter 2022" },

];

const EducationTimeline = () => {
  return (
    <Container className="education-timeline">
    
      <VerticalTimeline>
        {courses.map((course, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.08)",
              padding: "15px", /* Reduce padding to make the box smaller */
              borderLeft: "4px solid #0071e3",
              maxWidth: "350px", /* Reduce text box width */
            }}
            
            iconStyle={{
              background: "#444", /* Dark Gray for Apple-like feel */
              border: "2px solid #ddd", /* Soft border */
              width: "17px", /* Reduce dot size */
              height: "17px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateX(+21px)", /* Shift dot slightly left to center it */
            }}
            
            
            date={course.term} // Fixes duplicate dates issue
            icon={null}
          >
            <h4 className="vertical-timeline-element-title">{course.title}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default EducationTimeline;
