import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";
import Fade from "react-reveal/Fade";
import Loading from "../UI/Loading";
import NextCard from "../Projects/NextCard";

const ProjectDetails = ({
  NO,
  title,
  desc,
  context,
  Period,
  PrimaryColor,
  Introduction,
  about,
  next,
  href,
  source,
}) => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
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
      {loading ? <Loading No={NO} /> : null}
      <div className="page-wrap">
        <nav className={visible ? "main-nav" : "main-nav scrolled"}>
          <div className="nav-content">
            <ul className="nav-links2">
              <li>
                <Link to="/">Turn Back Home</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`projects-header${NO}`}>
          <div className="title-section">
            <div className="projects-title">{title} </div>
            <div className="projects-subtitle"> {desc} </div>
          </div>
          <div className="projects-details">
            <div className="project-role">
              {" "}
              <span style={{ color: "rgb(255 246 135)" }}>Role</span> Front-end
              developer{" "}
            </div>
            <div className="project-context">
              <span style={{ color: "rgb(255 246 135)" }}>context</span>{" "}
              {context}{" "}
            </div>
            <div className="project-period">
              <span style={{ color: "rgb(255 246 135)" }}>Period</span> {Period}
            </div>
          </div>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: PrimaryColor }}
        >
          <Fade>
            <span className="desc-title">Introduction</span>
          </Fade>
          <Fade top>
            <span className="projects-desc">{Introduction}</span>
          </Fade>
          <Fade>
            {href ? (
              <a href={href}>
                <button className="visit-website-btn">
                  <span className="button-text">Show Project </span>
                  <span className=" button-icon">
                    <img className="arrow-logo" src={arrow} alt=""></img>
                  </span>
                  <div className="button-mask"></div>
                </button>
              </a>
            ) : (
              <a href>
                <button className="visit-website-btn" onClick={noInfoYet}>
                  {noInfo ? (
                    <div className="no-info">Website is not available yet</div>
                  ) : null}
                  <span className="button-text">Show Project </span>
                  <span className=" button-icon">
                    <img className="arrow-logo" src={arrow} alt=""></img>
                  </span>
                  <div className="button-mask"></div>
                </button>
              </a>
            )}
          </Fade>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: "white" }}
        >
          <Fade>
            <span className="desc-title" style={{ color: "#1c1d25" }}>
              About this project
            </span>
          </Fade>
          <Fade top>
            <span className="projects-desc" style={{ color: "#1c1d25" }}>
              {about}
            </span>
          </Fade>
          <Fade>
            {source ? (
              <a href={source}>
                <button className="visit-website-btn">
                  <span className="button-text2">Source code </span>
                  <span className=" button-icon">
                    <img className="arrow-logo" src={arrow} alt=""></img>
                  </span>
                  <div className="button-mask"></div>
                </button>
              </a>
            ) : (
              <a href>
                <button className="visit-website-btn" onClick={noInfoYet}>
                  {noInfo ? (
                    <div className="no-info">the source-code is private</div>
                  ) : null}
                  <span className="button-text2">Source Code </span>
                  <span className=" button-icon">
                    <img className="arrow-logo" src={arrow} alt=""></img>
                  </span>
                  <div className="button-mask"></div>
                </button>
              </a>
            )}
          </Fade>
        </div>
        <NextCard link={`/${next}`} title={`${next}`} />
      </div>
    </>
  );
};

export default ProjectDetails;
