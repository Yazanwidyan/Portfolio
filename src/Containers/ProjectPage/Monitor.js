import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";

const Monitor = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [noInfo, setNoInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
    <>
      {loading ? (
        <div className="loading-screen3">
          <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
        </div>
      ) : null}

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
        <div className="projects-header3">
          <div className="title-section">
            <div className="projects-title">WTM Monitor </div>
            <div className="projects-subtitle">
              {" "}
              Monitoring service Website{" "}
            </div>
          </div>
          <div className="projects-details">
            <div className="project-role">
              {" "}
              <span style={{ color: "#ff78ee" }}>Role</span> Full-stack
              developer{" "}
            </div>
            <div className="project-context">
              <span style={{ color: "#ff78ee" }}>context</span> Website design &
              development{" "}
            </div>
            <div className="project-period">
              <span style={{ color: "#ff78ee" }}>Period</span> end 2020
            </div>
          </div>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: "rgb(212 151 25)" }}
        >
          <span className="desc-title">Introduction</span>
          <span className="projects-desc">
            WTM Monitor is a measure of website reliability, expressed as the
            percentage of time a website, has been working and available. Uptime
            is the opposite of downtime. Htop adds an exclamation mark when
            uptime is longer than 100 days It is often used as a measure of
            website reliability or stability, in that this time represents the
            time a website can be left unattended without crashing, or needing
            to be rebooted for administrative or maintenance purposes.
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
            On this project as a full-stack Developer, I was responsible of
            building the entire UI for the new website, redefining the User
            Experience and studying new interactions between the User and the
            Interface, also building the entire back-end using nestJS
          </span>
        </div>
        <Link to="/erasmus">
          <div className="next-projects">
            <span className="next-work-title">Next Work</span>
            <div className="next-work">
              Erasmus+
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
    </>
  );
};
export default Monitor;
