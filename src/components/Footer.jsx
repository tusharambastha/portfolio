import React from "react";
import { personalInfo, navLinks } from "../data/portfolioData";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        {/* Main Footer Row */}
        <div className="footer-main-row">
          <div className="footer-identity-col">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-role">{personalInfo.role}</p>
            <p className="footer-bio">
              Computer Science undergraduate at OIST Bhopal, building practical software development skills through Java, problem-solving, and web development.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title font-mono">SECTIONS</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-connect-col">
            <h4 className="footer-links-title font-mono">CONNECT</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon size={15} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon size={15} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-item"
                aria-label={`Email ${personalInfo.email}`}
              >
                <Mail size={15} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="footer-bottom-bar">
          <p className="footer-copy font-mono">
            © {currentYear} {personalInfo.name}. Handcrafted with React & Vite.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
