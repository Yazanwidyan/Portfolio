import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";

const Erasmus = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [noInfo, setNoInfo] = useState(false);

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

  const noInfoYet = () => {
    setNoInfo(true);

    setTimeout(() => {
      setNoInfo(false);
    }, 5000);
  };

  return (
    <div className="page-wrap">
      <nav className={visible ? "main-nav" : "main-nav scrolled"}>
        <div className="nav-content">
          <div className="nav-toggle2" onClick={handleMobileOpen}>
            <span className="menu-trigger">
              <i className="menu-trigger-bar top"></i>
              <i className="menu-trigger-bar middle"></i>
              <i className="menu-trigger-bar bottom"></i>
            </span>
          </div>
          <ul className="nav-links2">
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
      <div className="projects-header4">
        <div className="title-section">
          <div className="projects-title">Erasmus+ </div>
          <div className="projects-subtitle"> student exchange program </div>
        </div>
        <div className="projects-details">
          <div className="project-role">
            {" "}
            <span style={{ color: "rgb(255 246 135)" }}>Role</span> Front-End
            developer{" "}
          </div>
          <div className="project-context">
            <span style={{ color: "rgb(255 246 135)" }}>context</span> Website
            development{" "}
          </div>
          <div className="project-period">
            <span style={{ color: "rgb(255 246 135)" }}>Period</span> end 2020
          </div>
        </div>
      </div>
      <div
        className="projects-description"
        style={{ backgroundColor: "rgb(92 125 210)" }}
      >
        <span className="desc-title">Introduction</span>
        <span className="projects-desc">
          Erasmus+ is the EU's programme to support education, training, youth
          and sport in Europe. Its budget of €14.7 billion will provide
          opportunities for over 4 million Europeans to study, train, and gain
          experience abroad. Set to last until 2020, Erasmus+ doesn't just have
          opportunities for students. Merging seven prior programmes, it has
          opportunities for a wide variety of individuals and organisations.
        </span>
        <a href>
          <button className="visit-website-btn" onClick={noInfoYet}>
            {noInfo ? (
              <div className="no-info">
                Website is not available yet & the source-code is private
              </div>
            ) : null}
            <span className="button-text">Visit Website </span>
            <span className=" button-icon">
              <img className="arrow-logo" src={arrow} alt=""></img>
            </span>
            <div className="button-mask"></div>
          </button>
        </a>
      </div>
      <div
        className="projects-description"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <span className="desc-title" style={{ color: "#1c1d25" }}>
          About this project
        </span>
        <span className="projects-desc" style={{ color: "#1c1d25" }}>
          On this project I was responsible for the initial UI/UX architecture,
          structure, design and animations. also did the development process
          from scratch
        </span>
      </div>
      <Link to="/layls">
        <div className="next-projects">
          <span className="next-work-title">Next Work</span>
          <div className="next-work">
            Layls Website
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
export default Erasmus;
