import React, { useState, useEffect } from 'react';
import ClickSpark from '../ClickSpark/ClickSpark';
import './Hero.css';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingInterests = [
    "const string passion = \"Quantitative Finance\";",
    "auto expertise = \"Machine Learning\";",
    "std::string focus = \"Algorithmic Trading\";",
    "template<typename T> T build() { return \"Innovation\"; }",
    "class Skills : public vector<string> {C++, Python, Java};"
  ];

  useEffect(() => {
    const current = rotatingInterests[typewriterIndex % rotatingInterests.length];
    let timeout: NodeJS.Timeout;
    if (!isDeleting) {
      if (displayedText.length < current.length) {
        timeout = setTimeout(() => setDisplayedText(current.slice(0, displayedText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => setDisplayedText(current.slice(0, displayedText.length - 1)), 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % rotatingInterests.length);
        }, 800);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, typewriterIndex, rotatingInterests]);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Shlok Thakkar</span>
          </h1>
          <p className="hero-subtitle">
            Information Science & Data Science student, passionate
          </p>
          <p className="hero-description">
            about quantitative finance, machine learning, and software engineering. 
            I build high-performance solutions and explore the intersection of 
            technology and finance.
          </p>
        </div>

        <div className="hero-intro">
          <h2 className="hero-subtitle">
            Data Scientist & Software Engineer
          </h2>
          <div className="code-window">
            <div className="code-header">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <span className="file-name">portfolio.cpp</span>
            </div>
            <div className="code-content">
              <div className="typewriter-container">
                <span className="typewriter-text">{displayedText}</span>
                <span className="typewriter-cursor">|</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <ClickSpark sparkColor="#6366f1" sparkCount={15} sparkRadius={25}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </button>
          </ClickSpark>
          <ClickSpark sparkColor="#8b5cf6" sparkCount={12} sparkRadius={20}>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
          </ClickSpark>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Hero; 