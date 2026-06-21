import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  status: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Scroll Royale",
      description: "Built a 1v1 competitive iOS doomscrolling game at HackIllinois using SwiftUI and Supabase with real-time telemetry-driven scoring. Implemented matchmaking and live leaderboard sync over Supabase PostgreSQL RPC functions with JWT auth and proactive token refresh, plus a TTL-based feed cache with stale-while-revalidate to minimize cold-start latency.",
      tech: ["SwiftUI", "Combine", "AVKit", "Supabase", "PostgreSQL"],
      github: "https://github.com/shlok1806/ScrollClash",
      status: "Feb 2026",
      category: "iOS"
    },
    {
      title: "Limit Order Book",
      description: "Engineered a thread-safe C++20 limit order book with 5 order types (GTC, FOK, FAK, GFD, Market) and FIFO price-time priority matching. Achieved O(1) cancellation via per-order iterators into price-level linked lists, and built an incremental LevelData cache reducing FOK pre-check complexity from O(N) to O(P) — a ~500x improvement for sparse price-level books.",
      tech: ["C++20", "CMake", "Catch2"],
      github: "https://github.com/shlok1806/OrderBook",
      status: "Mar 2026",
      category: "Systems"
    },
  ];

  return (
    <div className="projects-content">
      <h2 className="section-title">Projects</h2>
      <div className="projects-intro">
        <p className="projects-description">
          A collection of projects showcasing my expertise in distributed systems,
          backend infrastructure, and iOS development. Each project demonstrates
          practical applications of performance-focused engineering.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-status">{project.status}</span>
            </div>
            <div className="project-category">
              <span className="category-tag">{project.category}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg className="github-icon" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default Projects; 