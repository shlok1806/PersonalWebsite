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
      category: "Languages",
      skills: ["Swift", "C/C++", "Python", "TypeScript", "Go", "SQL", "Java", "R"],
      icon: "💻"
    },
    {
      category: "Frameworks",
      skills: ["SwiftUI", "Combine", "AVKit", "FastAPI", "Flask", "Next.js", "LangChain"],
      icon: "⚙️"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Neo4j", "Supabase", "MongoDB"],
      icon: "🗄️"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS Bedrock", "AWS S3", "AWS EC2", "Azure Blob", "Docker", "Git", "CMake"],
      icon: "☁️"
    },
  ];

  return (
    <div className="skills-content">
      <h2 className="section-title">Skills</h2>
      <div className="skills-intro">
        <p className="skills-description">
          A comprehensive toolkit of programming languages, frameworks, and infrastructure
          tools. Each skill has been developed through hands-on projects, research, and
          real-world internship work.
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