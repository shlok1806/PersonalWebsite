import React from 'react';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const experience: ExperienceItem[] = [
    {
      title: "Machine Learning Lead Dev",
      company: "Storm Drones @ UIUC",
      location: "Champaign, IL",
      period: "Jan. 2025 – Present",
      description: "Developed predictive models to estimate drone battery life using machine learning techniques, improving operational forecasting. Achieved 98% accuracy, enabling precise battery monitoring and enhancing flight reliability and safety.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "C++", "ROS"]
    },
    {
      title: "Co-founder",
      company: "Minti",
      location: "Champaign, IL",
      period: "Feb 2025 – Present",
      description: "Developed 'Minti,' an AI-powered budgeting app that connects to users' bank accounts and calendars, integrating bank APIs to analyze expenses and provide weekly, adaptive budget plans.",
      technologies: ["NodeJS", "React", "JavaScript", "Python", "OpenAI API"]
    },
    {
      title: "Data Science Intern",
      company: "IQM Corporation",
      location: "Ahmedabad, India",
      period: "July 2025 – August 2025",
      description: "Developed and deployed a scalable LLM for advertisement recommendation system using PyTorch and Python, leveraging customer data to personalize product suggestions and enhance user engagement by 44%. Improved operational efficiency and customer click rate by implementing personalized advertisement for users.",
      technologies: ["Python", "PyTorch", "LLM", "Machine Learning", "Data Science"]
    },
    {
      title: "Software Engineer Intern",
      company: "Storm Drones",
      location: "Champaign, IL",
      period: "May 2024 - Present",
      description: [
        "Developed and maintained high-performance C++ applications for drone control systems",
        "Implemented real-time data processing algorithms for sensor fusion and navigation",
        "Collaborated with cross-functional teams to optimize system performance and reliability",
        "Contributed to the development of autonomous flight algorithms and safety protocols"
      ].join(' '),
      technologies: ["C++", "Python", "ROS", "Linux", "Git"]
    },
  ];

  return (
    <div className="experience-content">
      <h2 className="section-title">Experience</h2>
      <div className="experience-intro">
        <p className="experience-description">
          My professional journey spans machine learning, software engineering, and quantitative finance. 
          Each role has contributed to my expertise in building innovative solutions and leading technical projects.
        </p>
      </div>
      <div className="experience-grid">
        {experience.map((exp) => (
          <div key={exp.title} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-company">{exp.company}</span>
            </div>
            <div className="experience-meta">
              <span className="experience-location">
                <svg className="location-icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {exp.location}
              </span>
              <span className="experience-period">
                <svg className="time-icon" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                {exp.period}
              </span>
            </div>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-tech">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default Experience; 