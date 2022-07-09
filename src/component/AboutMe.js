import React from "react";
import "../App.css";
import Particles from "react-particles-js";

const AboutMe = () => {
  return (
    <div className="about-me" id="aboutme">
      <div className="particle">
        <Particles />
      </div>
      <div className="about-me-content">
        <h1 className="about-me-name">I am Vishal Salyan</h1>
        <p style={{ color: "white" ,textAlign:'justify'}}>Analytical and detail oriented Android app developer professional with stellar communication skills. Adept at bringing all team members together to reach a common goal on time and under budget. Conceptualizing app solutions with the latest technology, design theory, and a large dose of creativity. Committed to viable and easily functional app solutions for clients.</p>
      </div>
    </div>
  );
};

export default AboutMe;
