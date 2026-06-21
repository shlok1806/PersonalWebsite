import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-cards-container">
      <h2 className="about-cards-title">About Me</h2>
      <div className="about-cards-row">
        <div className="about-card-panel">
          <div className="about-card-icon" aria-hidden>💡</div>
          <div className="about-card-content">
            <h3 className="about-card-heading">Who I Am</h3>
            <p className="about-card-text">
              Hi! I'm a Data Scientist & Software Engineer who loves building high-performance solutions at the intersection of technology and finance.
            </p>
          </div>
        </div>
        <div className="about-card-panel">
          <div className="about-card-icon" aria-hidden>🧠</div>
          <div className="about-card-content">
            <h3 className="about-card-heading">What I Do</h3>
            <p className="about-card-text">
              My background is in Information Science & Data Science, with a focus on algorithms, machine learning, and quantitative methods. I work with C++ for high-performance computing and Python for data science.
            </p>
          </div>
        </div>
        <div className="about-card-panel">
          <div className="about-card-icon" aria-hidden>🚀</div>
          <div className="about-card-content">
            <h3 className="about-card-heading">What Drives Me</h3>
            <p className="about-card-text">
              I'm passionate about open source, creative problem-solving, and collaborating on innovative projects. Always learning, always building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 