import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import "./Projects.css";

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="section section-alt projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">Engineering Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Practical software projects built to solve specific challenges, with verified public repositories and live deployments.
          </p>
        </div>

        {/* Compact 2-Column Responsive Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const previewTech = project.technologies.slice(0, 4);

            return (
              <article
                key={project.id}
                className={`project-card reveal stagger-${(idx % 4) + 1} ${
                  isExpanded ? "is-expanded" : ""
                }`}
              >
                {/* Compact Card Surface */}
                <div className="project-card-top">
                  <div className="project-meta-row">
                    <span className="project-badge">{project.badge}</span>
                    <span
                      className={`project-status-tag ${
                        project.liveUrl ? "status-live" : "status-repo"
                      }`}
                    >
                      <span className="status-dot" aria-hidden="true" />
                      <span>{project.liveUrl ? "Live Demo" : "Contract"}</span>
                    </span>
                  </div>

                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-short-desc" title={project.tagline}>
                    {project.tagline}
                  </p>

                  {/* 3-4 Essential Tech Tags */}
                  <div className="project-tech-tags">
                    {previewTech.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag-more" title="More technologies in details">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Primary Card Actions */}
                <div className="project-card-actions">
                  <div className="project-external-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm project-action-btn"
                      aria-label={`View ${project.name} repository on GitHub (opens in new tab)`}
                    >
                      <GithubIcon size={14} aria-hidden="true" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm project-action-btn"
                        aria-label={`Open live demo for ${project.name} (opens in new tab)`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  {/* View Details Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id)}
                    className="details-toggle-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`details-${project.id}`}
                  >
                    <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                    {isExpanded ? (
                      <ChevronUp size={15} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={15} aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Expandable Technical Area */}
                <div
                  id={`details-${project.id}`}
                  className={`project-expandable-content ${isExpanded ? "open" : ""}`}
                >
                  <div className="expandable-inner">
                    {/* Problem & Architecture */}
                    <div className="details-narrative">
                      <div className="detail-block">
                        <span className="detail-label">Problem</span>
                        <p className="detail-text">{project.problem}</p>
                      </div>
                      <div className="detail-block">
                        <span className="detail-label">Solution</span>
                        <p className="detail-text">{project.solution}</p>
                      </div>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="detail-highlights">
                      <span className="detail-label">Implemented Features</span>
                      <ul className="detail-list">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="detail-item">
                            <CheckCircle2 size={14} className="detail-icon" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Full Stack Tech Badges */}
                    <div className="detail-all-tech">
                      <span className="detail-label">Full Stack:</span>
                      <div className="tech-tags-wrap">
                        {project.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag tech-tag-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Compact Transparency Note */}
        <div className="projects-transparency-note reveal">
          <CheckCircle2 size={16} className="note-check-icon" aria-hidden="true" />
          <span>
            All projects link directly to public GitHub repositories with verified code commits and live GitHub Pages deployments.
          </span>
        </div>
      </div>
    </section>
  );
}
