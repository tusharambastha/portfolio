import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, Mail, Terminal, BookOpen, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import "./Hero.css";

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="status-indicator-dot" aria-hidden="true" />
            <span className="status-text">B.Tech CSE '28 · OIST Bhopal</span>
          </div>

          {/* Primary Name & Role */}
          <div className="hero-identity">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-role">{personalInfo.role}</p>
          </div>

          {/* Subtitle / Focus Statement */}
          <p className="hero-tagline">{personalInfo.tagline}</p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="btn btn-primary"
            >
              <span>View Projects</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="btn btn-secondary"
            >
              <Mail size={16} aria-hidden="true" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link-item"
                aria-label={`Email ${personalInfo.email}`}
              >
                <Mail size={16} aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lightweight, Restrained Engineering Meta-Card */}
        <div className="hero-meta-panel" aria-label="Student Engineering Snapshot">
          <div className="meta-panel-header">
            <div className="meta-panel-dots" aria-hidden="true">
              <span className="dot dot-gray" />
              <span className="dot dot-gray" />
              <span className="dot dot-gray" />
            </div>
            <span className="meta-panel-file">profile_summary.env</span>
          </div>

          <div className="meta-panel-body">
            <div className="meta-row">
              <span className="meta-key">INSTITUTION</span>
              <span className="meta-value">Oriental Institute of Science & Technology</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">LOCATION</span>
              <span className="meta-value">Bhopal, Madhya Pradesh</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">PRIMARY_LANG</span>
              <span className="meta-value font-mono">Java (OOP, DSA)</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">WEB_STACK</span>
              <span className="meta-value font-mono">React · JavaScript · Spring Boot · Vite</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">ACTIVE_FOCUS</span>
              <span className="meta-value">Problem Solving & Full-Stack Projects</span>
            </div>
          </div>

          <div className="meta-panel-footer">
            <span className="meta-badge">Verified Academic Status</span>
            <span className="meta-cohort font-mono">Graduation: 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
}
