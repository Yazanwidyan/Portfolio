import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";

const Nike = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="projects-header2">
        <div className="title-section">
          <div className="projects-title">Duplicate Nike Website </div>
          <div className="projects-subtitle"> Multifunctioning Website </div>
        </div>
        <div className="projects-details">
          <div className="project-role">
            {" "}
            <span className="blue-color">Role</span> Full-stack developer{" "}
          </div>
          <div className="project-context">
            <span className="blue-color">context</span> Website creation{" "}
          </div>
          <div className="project-period">
            <span className="blue-color">Period</span> middle 2020
          </div>
        </div>
      </div>
      <div className="projects-description">
        <span className="desc-title">The Project</span>
        <span className="projects-desc">
          Duplicate Nike Website is a website that is similar to nike official
          website which have many features that could be in most of e-commerce
          websites. with nodejs as backend and reactjs as frontend
        </span>
        <a href="https://github.com/Yazanwidyan/online-shop-webapp">
          <button className="the-button">
            <span className="button-text">Visit Website </span>
            <span className=" button-icon">
              <img className="arrow-logo" src={arrow} alt=""></img>
            </span>
            <div className="button-mask"></div>
          </button>
        </a>
      </div>
      <Link to="/layls">
        <div className="next-projects">
          <span className="next-work-title">Next Work</span>
          <div className="next-work">
            Layls
            <img className="next-arrow" src={arrow} alt="dd" />
          </div>
        </div>
      </Link>
      <footer className="footer">
        <div className="content">
          <div className="inner-container">
            <ul className="footer-links">
              <li>
                <a href="https://www.linkedin.com/in/yazan-widyan-863305157/">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/Yazanwidyan">Github</a>
              </li>
              <li>
                <a href="https://www.facebook.com/yazan.widyan/">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="footer-copy">
            &copy; 2020 Yazan Widyan - <a href="!#">contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Nike;
