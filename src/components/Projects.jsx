import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState("suraksha-ar");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "hackathon", label: "Hackathons" },
    { id: "fullstack", label: "Full-Stack Web" },
    { id: "systems", label: "Smart Contracts" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

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
            Hands-on prototypes and applications built to address specific challenges, with verified public code repositories and live deployments.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="projects-filter-bar reveal" role="tablist" aria-label="Project category filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={filter === cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <article key={project.id} className={`project-card reveal stagger-${(idx % 3) + 1}`}>
                {/* Card Header & Badges */}
                <div className="project-card-header">
                  <div className="badge-row">
                    <span className="project-badge">{project.badge}</span>
                    {project.badgeDetail && (
                      <span className="project-badge-detail">{project.badgeDetail}</span>
                    )}
                    <span
                      className={`project-status-tag ${
                        project.liveUrl ? "status-live" : "status-repo"
                      }`}
                    >
                      <span className="status-dot" aria-hidden="true" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                {/* Problem & Architecture Narratives */}
                <div className="project-narrative-group">
                  <div className="narrative-block">
                    <h4 className="narrative-heading">Problem Addressed</h4>
                    <p className="narrative-text">{project.problem}</p>
                  </div>

                  <div className="narrative-block">
                    <h4 className="narrative-heading">Solution & Architecture</h4>
                    <p className="narrative-text">{project.solution}</p>
                  </div>
                </div>

                {/* Collapsible Key Functionality Details */}
                <div className="project-highlights-section">
                  <button
                    type="button"
                    className="toggle-highlights-btn"
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Hide Implemented Features" : "View Implemented Features & Technical Details"}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {isExpanded && (
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="highlight-item">
                          <CheckCircle2 size={15} className="highlight-icon" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Real Tech Stack Pills */}
                <div className="project-tech-stack">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-tags-wrap">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Verified Links only! */}
                <div className="project-card-footer">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm project-btn"
                    aria-label={`View ${project.name} repository on GitHub (opens in new tab)`}
                  >
                    <GithubIcon size={15} aria-hidden="true" />
                    <span>View Repository</span>
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm project-btn"
                      aria-label={`Open live demo for ${project.name} (opens in new tab)`}
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="no-live-demo-tag">
                      Contract repo (No web UI deployed)
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Verification Guarantee */}
        <div className="projects-transparency-card reveal">
          <div className="transparency-icon-box">
            <CheckCircle2 size={18} aria-hidden="true" />
          </div>
          <div className="transparency-content">
            <h4 className="transparency-title">Source Code Transparency</h4>
            <p className="transparency-desc">
              Every project listed above links directly to its public GitHub repository. Features and architectural modules described correspond to actual code commits, README specifications, and verified live GitHub Pages deployments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
