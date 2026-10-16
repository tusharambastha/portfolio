import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import profilePhoto from "../assets/profile.jpg";
import "./Hero.css";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(profilePhoto);

  const handleImageError = () => {
    setImgSrc(`${import.meta.env.BASE_URL}images/profile.jpg`);
  };

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
        {/* Left Column: Text & Introduction */}
        <div className="hero-text-side">
          <div className="hero-status-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>Computer Science Undergraduate · OIST Bhopal</span>
          </div>

          <div className="hero-title-group">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-role">{personalInfo.role}</p>
          </div>

          <p className="hero-description">
            Building practical software development skills through Java, problem-solving, and web development. Exploring full-stack engineering with modern React and backend systems.
          </p>

          <div className="hero-actions">
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

          <div className="hero-social-row">
            <span className="social-row-label">Connect:</span>
            <div className="social-pills">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon size={15} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon size={15} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-pill"
                aria-label={`Email ${personalInfo.email}`}
              >
                <Mail size={15} aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Natural Portrait Presentation */}
        <div className="hero-portrait-side">
          <div className="portrait-frame">
            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Tushar Ambastha"
              className="portrait-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
