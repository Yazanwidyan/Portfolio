import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";

const ProjectPage = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleContactOpen = () => {
    setOpen(!open);

    if (!open) {
      document.body.classList.add("is-open");
    } else {
      document.body.classList.remove("is-open");
    }
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      document.body.classList.add("is-mobile-open");
    } else {
      document.body.classList.remove("is-mobile-open");
    }
  };

  const handleScroll = () => {
    const currentPos = window.pageYOffset;
    const visible = scrollPos < 150;

    setScroll(currentPos);
    setVisible(visible);
  };

  return (
    <div className="page-wrap">
      <nav className={visible ? "main-nav" : "main-nav scrolled"}>
        <div className="nav-content">
          <div className="nav-toggle" onClick={handleMobileOpen}>
            <span className="menu-trigger">
              <i className="menu-trigger-bar top"></i>
              <i className="menu-trigger-bar middle"></i>
              <i className="menu-trigger-bar bottom"></i>
            </span>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Turn Back Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-menu">
        <span className="close-trigger" onClick={handleMobileOpen}>
          <i className="close-trigger-bar left"></i>
          <i className="close-trigger-bar right"></i>
        </span>
        <ul className="mobile-nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href onClick={handleContactOpen}>
              Skills
            </a>
          </li>
          <li>
            <a href>Work</a>
          </li>
          <li>
            <a href onClick={handleContactOpen}>
              Contact{" "}
            </a>
          </li>
        </ul>
      </nav>
      <div className="projects-header">
        <div className="title-section">
          <div className="projects-title">Layls Website </div>
          <div className="projects-subtitle"> Dresses Website </div>
        </div>
        <div className="projects-details">
          <div className="project-role">
            {" "}
            <span className="blue-color">Role</span> Front-End developer{" "}
          </div>
          <div className="project-context">
            <span className="blue-color">context</span> Website redesign{" "}
          </div>
          <div className="project-period">
            <span className="blue-color">Period</span> middle 2020
          </div>
        </div>
      </div>
      <div className="projects-description">
        <span className="desc-title">The Project</span>
        <span className="projects-desc">
          Cerasa is composed of an established team of Italian master craftsmen
          that produces and puts up bathrooms undisputed of exceptional "Made in
          Italy" quality. Cerasa collections are designed to satisfy the most
          diverse housing styles, fit the style of the house and its
          inhabitants.
        </span>
        <button className="the-button">
          <span className="button-text">Visit Website </span>
          <span className=" button-icon">
            <img className="arrow-logo" src={arrow} alt=""></img>
          </span>
          <div className="button-mask"></div>
        </button>
      </div>
      <div className="next-projects">
        <span className="next-work-title">Next Work</span>
        <div className="next-work">
          Duplicate Nike Website{" "}
          <img className="next-arrow" src={arrow} alt="dd" />
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
