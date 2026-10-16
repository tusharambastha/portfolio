import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track active section and navbar border on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press or window resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Tushar Ambastha Home"
        >
          <span className="brand-name">{personalInfo.name}</span>
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-role">CS Undergrad</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar-actions">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm navbar-github-btn"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-nav-menu"
        className={`mobile-menu-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Navigation</span>
            <span className="mobile-menu-status">OIST Bhopal · '28</span>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mobile-active-indicator" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: "100%" }}
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
