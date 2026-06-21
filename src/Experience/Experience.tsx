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
      title: "Undergraduate Research Assistant",
      company: "Parallel Programming Laboratory, UIUC",
      location: "Champaign, IL",
      period: "Apr. 2026 – Present",
      description: "Replaced SUMMA with Cannon's algorithm and a circular-shift communication pattern, cutting per-step message startup overhead in distributed matrix multiplication across multi-node Charm++ clusters. Extended Charm++'s distributed array abstraction with custom operators, relational/logical operations, and broadcasting support for high-performance parallel workloads.",
      technologies: ["C++", "Charm++", "Parallel Computing", "Distributed Systems"]
    },
    {
      title: "Software Developer",
      company: "Disruption Lab @ UIUC",
      location: "Champaign, IL",
      period: "Sept. 2025 – Present",
      description: "Delivered a Python-based XSD parser for a Fortune 500 financial services client's 44-jurisdiction tax schema pipeline, expanding schema diff coverage from 7 to 27 states (+286%) and validating correctness with 43 unit tests. Built a REST API in Python (Flask) and Neo4j giving 40+ users a fully editable project-resource dependency graph.",
      technologies: ["Python", "Flask", "Neo4j", "lxml"]
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Department of Finance, UIUC",
      location: "Champaign, IL",
      period: "May 2025 – Dec. 2025",
      description: "Designed a custom NLP pipeline combining TF-IDF vectorization, Levenshtein distance, and fuzzy matching to link firms across 10M+ records for Prof. Tatyana Deryugina's research. Reduced entity resolution runtime by 73% via batched normalization and deduplication, achieving a 63% firm-level match rate across TED and ORBIS.",
      technologies: ["Python", "NLP", "Pandas", "SciPy"]
    },
    {
      title: "Software Development Intern",
      company: "IQM Corporation",
      location: "Ahmedabad, India",
      period: "June 2025 – Aug. 2025",
      description: "Reduced P95 response latency 40% by architecting an async LLM pipeline on AWS Bedrock with Pydantic-validated JSON extraction, serving 40+ enterprise users. Shipped a FastAPI microservice on AWS EC2 processing 10,000+ candidate profiles with JWT authentication, plus an S3-backed CSV ingestion pipeline for downstream ML matching.",
      technologies: ["FastAPI", "AWS Bedrock", "AWS EC2", "AWS S3", "Pydantic"]
    },
  ];

  return (
    <div className="experience-content">
      <h2 className="section-title">Experience</h2>
      <div className="experience-intro">
        <p className="experience-description">
          My professional journey spans distributed systems, backend infrastructure, and applied research.
          Each role has contributed to my expertise in building reliable, high-performance software.
        </p>
      </div>
      <div className="experience-grid">
        {experience.map((exp) => (
          <div key={exp.company} className="experience-card">
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