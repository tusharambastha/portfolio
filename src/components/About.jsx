import React from "react";
import { aboutData, personalInfo } from "../data/portfolioData";
import { Code2, Layout, Database, Sparkles } from "lucide-react";
import "./About.css";

export default function About() {
  const pillarIcons = [
    <Code2 size={18} className="pillar-icon" key="code" aria-hidden="true" />,
    <Layout size={18} className="pillar-icon" key="layout" aria-hidden="true" />,
    <Database size={18} className="pillar-icon" key="db" aria-hidden="true" />,
    <Sparkles size={18} className="pillar-icon" key="sparkles" aria-hidden="true" />,
  ];

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An authentic overview of what I study, what I build, and where I am focusing my engineering growth.
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

            <div className="about-quick-facts">
              <div className="fact-item">
                <span className="fact-label">Academic Program</span>
                <span className="fact-value">{personalInfo.degree}</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Institution</span>
                <span className="fact-value">OIST, Bhopal</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Graduation Target</span>
                <span className="fact-value">{personalInfo.graduationYear}</span>
              </div>
            </div>
          </div>

          {/* Pillars: Editorial Highlight List */}
          <div className="about-pillars">
            <h3 className="pillars-heading">Current Learning Focus</h3>
            <div className="pillars-list">
              {aboutData.pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-icon-wrap">{pillarIcons[idx]}</div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
