import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";
import Fade from "react-reveal/Fade";

const Nike = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
  const noInfoYet = () => {
    setNoInfo(true);

    setTimeout(() => {
      setNoInfo(false);
    }, 5000);
  };

  const handleScroll = () => {
    const currentPos = window.pageYOffset;
    const visible = scrollPos < 150;

    setScroll(currentPos);
    setVisible(visible);
  };

  return (
    <>
      {loading ? (
        <div className="loading-screen2">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
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
        <div className="projects-header2">
          <div className="title-section">
            <div className="projects-title">Duplicate Nike Website </div>
            <div className="projects-subtitle"> Multifunctioning Website </div>
          </div>
          <div className="projects-details">
            <div className="project-role">
              {" "}
              <span style={{ color: "#d8952f" }}>Role</span> Full-stack
              developer{" "}
            </div>
            <div className="project-context">
              <span style={{ color: "#d8952f" }}>context</span> Website
              development and design{" "}
            </div>
            <div className="project-period">
              <span style={{ color: "#d8952f" }}>Period</span> early 2020
            </div>
          </div>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: "rgb(40 179 74)" }}
        >
          <Fade>
            <span className="desc-title">Introduction</span>
          </Fade>
          <Fade top>
            <span className="projects-desc">
              Duplicate Nike Website is a website that is similar to nike
              official website which have many features that could be in most of
              e-commerce websites.
            </span>
          </Fade>
          <Fade>
            <a href>
              <button className="visit-website-btn" onClick={noInfoYet}>
                {noInfo ? (
                  <div className="no-info">Website is not available yet</div>
                ) : null}{" "}
                <span className="button-text">Visit Website </span>
                <span className=" button-icon">
                  <img className="arrow-logo" src={arrow} alt=""></img>
                </span>
                <div className="button-mask"></div>
              </button>
            </a>
          </Fade>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: "#f3f3f3" }}
        >
          <Fade>
            <span className="desc-title" style={{ color: "#1c1d25" }}>
              About this project
            </span>
          </Fade>
          <Fade top>
            <span className="projects-desc" style={{ color: "#1c1d25" }}>
              On this project as a full-stack Developer, I was responsible of
              building the entire UI for the new website, redefining the User
              Experience and studying new interactions between the User and the
              Interface, also building the entire back-end using nodeJS
            </span>
          </Fade>
          <Fade>
            <a href="https://github.com/Yazanwidyan/online-shop-webapp">
              <button className="visit-website-btn">
                <span className="button-text2">Source code </span>
                <span className=" button-icon">
                  <img className="arrow-logo" src={arrow} alt=""></img>
                </span>
                <div className="button-mask"></div>
              </button>
            </a>
          </Fade>
        </div>
        <Link to="/monitor">
          <div className="next-projects">
            <span className="next-work-title">Next Work</span>
            <div className="next-work">
              WTM Monitor
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
export default Nike;
