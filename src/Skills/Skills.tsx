import React from 'react';
import './Skills.css';

interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

const Skills: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["C++", "Python", "Java", "JavaScript", "SQL", "R", "HTML/CSS"],
      icon: "💻"
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "Node.js", "Flask", "Docker", "Git", "MongoDB", "WordPress"],
      icon: "⚙️"
    },
    {
      category: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch", "Streamlit"],
      icon: "🤖"
    },
    {
      category: "Quantitative Finance",
      skills: ["Black-Scholes", "Monte Carlo", "Risk Management", "Algorithmic Trading", "Options Pricing"],
      icon: "📊"
    },
  ];

  return (
    <div className="skills-content">
      <h2 className="section-title">Skills</h2>
      <div className="skills-intro">
        <p className="skills-description">
          A comprehensive toolkit of programming languages, frameworks, and specialized 
          knowledge in quantitative finance and machine learning. Each skill has been 
          developed through hands-on projects and real-world applications.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <div className="skill-header">
              <span className="skill-icon">{category.icon}</span>
              <h3 className="skill-category-title">{category.category}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills; 