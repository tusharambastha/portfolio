import React from "react";
import { educationData } from "../data/portfolioData";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section section-alt education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Academic Path</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Current undergraduate degree and core curriculum focus in computer science and engineering.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-card-top">
                <div className="edu-institution-info">
                  <div className="edu-icon-box">
                    <GraduationCap size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="edu-degree">
                      {edu.degree} · <span className="edu-major">{edu.major}</span>
                    </h3>
                    <h4 className="edu-inst-name">{edu.institution}</h4>
                  </div>
                </div>

                <div className="edu-meta-group">
                  <span className="edu-badge font-mono">
                    <Calendar size={13} aria-hidden="true" />
                    <span>{edu.duration}</span>
                  </span>
                  <span className="edu-status-tag">{edu.status}</span>
                </div>
              </div>

              <div className="edu-highlights-wrap">
                <h5 className="highlights-heading font-mono">ACADEMIC & CURRICULAR CONTEXT:</h5>
                <ul className="edu-highlights-list">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="edu-highlight-item">
                      <CheckCircle2 size={15} className="edu-check-icon" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
