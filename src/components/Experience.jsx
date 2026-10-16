import React from "react";
import { experienceData } from "../data/portfolioData";
import { Briefcase, Eye, Wrench, AlertCircle, Calendar } from "lucide-react";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Practical Exposure</span>
          <h2 className="section-title">Industry Training</h2>
          <p className="section-subtitle">
            Hands-on vocational exposure and industrial observation in automobile manufacturing and quality systems.
          </p>
        </div>

        <div className="experience-list">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-card-header">
                <div className="exp-role-wrap">
                  <div className="exp-icon-box">
                    <Briefcase size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-org">{exp.organization}</h4>
                  </div>
                </div>

                <div className="exp-meta-badge">
                  <Calendar size={14} aria-hidden="true" />
                  <span className="font-mono">{exp.duration}</span>
                </div>
              </div>

              {/* Crucial honesty alert: Non-software clarification */}
              <div className="exp-clarification-banner">
                <AlertCircle size={16} className="clarification-icon" aria-hidden="true" />
                <span className="clarification-text">
                  <strong>Program Scope:</strong> {exp.scopeNote}
                </span>
              </div>

              <p className="exp-summary">{exp.summary}</p>

              {/* Explicit separation between performed vs observed */}
              <div className="exp-activities-grid">
                <div className="activities-column">
                  <div className="column-header">
                    <Wrench size={16} className="col-icon" aria-hidden="true" />
                    <h5 className="column-title">Workshops Performed</h5>
                  </div>
                  <ul className="activities-list">
                    {exp.performed.map((item, pIdx) => (
                      <li key={pIdx} className="activity-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="activities-column">
                  <div className="column-header">
                    <Eye size={16} className="col-icon" aria-hidden="true" />
                    <h5 className="column-title">Industrial Workflows Observed</h5>
                  </div>
                  <ul className="activities-list">
                    {exp.observed.map((item, oIdx) => (
                      <li key={oIdx} className="activity-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
