import React from "react";
import { skillCategories } from "../data/portfolioData";
import { Code, Layout, Server, Database, Brain, Wrench } from "lucide-react";
import "./Skills.css";

export default function Skills() {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "Programming Languages":
        return <Code size={18} aria-hidden="true" />;
      case "Frontend Development":
        return <Layout size={18} aria-hidden="true" />;
      case "Backend & APIs":
        return <Server size={18} aria-hidden="true" />;
      case "Databases & Storage":
        return <Database size={18} aria-hidden="true" />;
      case "Core Computer Science":
        return <Brain size={18} aria-hidden="true" />;
      case "Tools & Workflow":
        return <Wrench size={18} aria-hidden="true" />;
      default:
        return <Code size={18} aria-hidden="true" />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Categorized overview of languages, frameworks, and foundational tools applied across my coursework and project builds.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon-box">{getCategoryIcon(group.category)}</span>
                <div>
                  <h3 className="category-title">{group.category}</h3>
                  <p className="category-summary">{group.description}</p>
                </div>
              </div>

              <div className="skills-tag-list">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge-wrapper" title={skill.context}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-context">{skill.context}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer-note">
          <p className="note-text">
            <strong>Honest Engineering Note:</strong> Listed technologies represent practical coursework, personal study, and hackathon project implementation. I actively write Java and React, and continue to deepen my understanding of backend and database architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
