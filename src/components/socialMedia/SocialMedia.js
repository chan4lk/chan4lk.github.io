import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.github} className="icon-button github" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.facebook} className="icon-button facebook" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
    </div>
  );
}
