import React from "react";
import { aboutData, personalInfo } from "../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content reveal">
          {/* Concise, Impactful Narrative */}
          <div className="about-statement-card">
            <p className="about-lead-statement">
              {aboutData.content}
            </p>
          </div>

          {/* Clean Quick Facts */}
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
      </div>
    </section>
  );
}
