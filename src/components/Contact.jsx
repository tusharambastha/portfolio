import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Copy, Check, Send, ExternalLink, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailto = () => {
    const encodedSubject = encodeURIComponent(subject.trim() || "Inquiry / Collaboration");
    const encodedBody = encodeURIComponent(message.trim() || "Hi Tushar,\n\nI came across your portfolio...");
    return `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Whether you want to discuss a project collaboration, technical opportunities, or connect on software engineering, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Channels */}
          <div className="contact-channels reveal">
            <h3 className="channels-heading">Direct Channels</h3>

            {/* Email Card */}
            <div className="contact-card email-highlight-card">
              <div className="contact-card-header">
                <div className="contact-icon-box">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-type">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="card-actions">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  <Send size={14} aria-hidden="true" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="copied-icon" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-box">
                  <LinkedinIcon size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-type">LinkedIn</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/tushar-ambastha-909019330
                  </a>
                </div>
              </div>

              <div className="card-actions">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Open LinkedIn profile in new tab"
                >
                  <span>Visit Profile</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-box">
                  <GithubIcon size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="contact-type">GitHub</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    github.com/tusharambastha
                  </a>
                </div>
              </div>

              <div className="card-actions">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Open GitHub profile in new tab"
                >
                  <span>Explore Repositories</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Functional Email Draft Helper */}
          <div className="quick-draft-container reveal stagger-2">
            <div className="draft-header">
              <div className="draft-title-wrap">
                <MessageSquare size={18} className="draft-icon" aria-hidden="true" />
                <h3 className="draft-title">Write a Quick Message</h3>
              </div>
            </div>

            <p className="draft-explainer">
              Draft your message here. Clicking the button below opens your preferred email application directly with the pre-filled text.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = generateMailto();
              }}
              className="draft-form"
            >
              <div className="form-group">
                <label htmlFor="draft-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="draft-subject"
                  type="text"
                  placeholder="e.g. Collaboration on Software Project"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="draft-body" className="form-label">
                  Message
                </label>
                <textarea
                  id="draft-body"
                  rows={4}
                  placeholder="Write your note or inquiry here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div className="draft-actions">
                <a
                  href={generateMailto()}
                  className="btn btn-primary btn-sm"
                  aria-label="Launch formatted draft in default email client"
                >
                  <Send size={14} aria-hidden="true" />
                  <span>Open in Email App</span>
                </a>

                <span className="draft-note">
                  Direct to: {personalInfo.email}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
