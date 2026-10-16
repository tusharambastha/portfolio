import React from "react";
import { aboutData, personalInfo } from "../data/portfolioData";
import { Code2, Layout, Database, Award } from "lucide-react";
import "./About.css";

export default function About() {
  const pillarIcons = [
    <Code2 size={20} className="pillar-icon" key="code" aria-hidden="true" />,
    <Layout size={20} className="pillar-icon" key="layout" aria-hidden="true" />,
    <Database size={20} className="pillar-icon" key="db" aria-hidden="true" />,
    <Award size={20} className="pillar-icon" key="award" aria-hidden="true" />,
  ];

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An authentic look at what I study, what I build, and where I am focusing my engineering growth.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Text */}
          <div className="about-narrative">
            {aboutData.summary.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-stats-strip">
              <div className="stat-item">
                <span className="stat-label font-mono">DEGREE</span>
                <span className="stat-val">{personalInfo.degree}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label font-mono">CAMPUS</span>
                <span className="stat-val">OIST, Bhopal</span>
              </div>
              <div className="stat-item">
                <span className="stat-label font-mono">EXPECTED GRAD</span>
                <span className="stat-val">{personalInfo.graduationYear}</span>
              </div>
            </div>
          </div>

          {/* Core Pillars / Focus Areas */}
          <div className="about-pillars">
            <h3 className="pillars-heading">Current Learning Focus</h3>
            <div className="pillars-list">
              {aboutData.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-header">
                    <span className="pillar-icon-box">{pillarIcons[idx]}</span>
                    <h4 className="pillar-title">{pillar.title}</h4>
                  </div>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
