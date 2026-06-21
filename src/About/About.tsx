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
              Hi! I'm a backend-focused Software Engineer who loves building systems that hold up under load — distributed infrastructure, low-latency data structures, and real-world performance constraints.
            </p>
          </div>
        </div>
        <div className="about-card-panel">
          <div className="about-card-icon" aria-hidden>🧠</div>
          <div className="about-card-content">
            <h3 className="about-card-heading">What I Do</h3>
            <p className="about-card-text">
              I study Computer Science + Economics (Minor in Statistics) at UIUC, with a focus on distributed systems, algorithms, and parallel computing. I work in Go, C++, and Python for backend work, and Swift for iOS.
            </p>
          </div>
        </div>
        <div className="about-card-panel">
          <div className="about-card-icon" aria-hidden>🚀</div>
          <div className="about-card-content">
            <h3 className="about-card-heading">What Drives Me</h3>
            <p className="about-card-text">
              I'm passionate about correctness, performance, and the kind of reliability that holds under load. Always learning, always building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 