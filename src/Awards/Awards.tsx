import React from 'react';
import '../Experience/Experience.css';

interface AwardItem {
  title: string;
  detail: string;
  period: string;
}

const Awards: React.FC = () => {
  const awards: AwardItem[] = [
    {
      title: "2nd Place — HERE Chicago Hackathon",
      detail: "Geospatial ML model for real-time predictive mapping.",
      period: "Apr. 2026",
    },
    {
      title: "2nd Place — HackIllinois 2026",
      detail: "Scroll Royale, iOS doomscrolling game, SwiftUI + Supabase.",
      period: "Feb. 2026",
    },
  ];

  return (
    <div className="experience-content">
      <h2 className="section-title">Awards</h2>
      <div className="experience-grid">
        {awards.map((award) => (
          <div key={award.title} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{award.title}</h3>
            </div>
            <div className="experience-meta">
              <span className="experience-period">
                <svg className="time-icon" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                {award.period}
              </span>
            </div>
            <p className="experience-description">{award.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
