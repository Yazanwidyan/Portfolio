import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Card from "../../Components/Parallax/Parallax";
import ProjectCard from "../../Components/Projects/ProjectCard";

const Home = () => {
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

  const scrollDownHandler = () => {
    const element = document.getElementById("main1");
    element.scrollIntoView({ behavior: "smooth" });
    document.body.classList.remove("is-mobile-open");
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
            <div className="nav-links__left">
              <li className="my-logo">YAZAN WIDYAN</li>
            </div>
            <div className="nav-links__middle">
              <div className="number">+962795382171</div>
              <span>/</span>
              <div className="email">yazanwidyan07@gmail.com</div>
            </div>
            <div className="nav-links__right">
              <li>
                <a onClick={scrollDownHandler} href>
                  Projects
                </a>
              </li>
              <li>
                <a onClick={handleContactOpen} href>
                  Skills
                </a>
              </li>
              <li>
                <a onClick={handleContactOpen} href>
                  Contact
                </a>
              </li>{" "}
            </div>
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
            <a href onClick={handleContactOpen}>
              Skills
            </a>
          </li>
          <li>
            <a href onClick={scrollDownHandler}>
              Work
            </a>
          </li>
          <li>
            <a href onClick={handleContactOpen}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <header className="main-hero">
        <ul className="icons">
          <li>
            <a href="https://www.facebook.com/yazan.widyan/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yazan-widyan-863305157/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Yazanwidyan">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <div className="main-hero-text">
          <div className="content">
            <div className="hero-name">
              <h1 className="lg-head">I'm React & React Native Developer </h1>
            </div>
          </div>
        </div>

        <Card />

        <div onClick={scrollDownHandler} className="go-next-works">
          <div>Works</div>
          <span className="the-arrow"></span>
        </div>
      </header>
      <div className="main">
        <div className="work-section">
          <div className="content">
            <h4 className="work-title" id="main1">
              CASE STUDIES{" "}
            </h4>
            <h2 className="work-subtitle"> Latest Works </h2>
            <ul className="work-list">
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                  <ProjectCard
                    No={"1"}
                    link={"/tab3"}
                    title={"Tab3"}
                    desc={"Application for sales representatives"}
                  />
                  <ProjectCard
                    No={"3"}
                    link={"/monitor"}
                    title={"WTM Monitor"}
                    desc={"Monitoring service Website"}
                  />
                  <ProjectCard
                    No={"5"}
                    link={"/newProject"}
                    title={"New Project"}
                    desc={"Msssss"}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <ProjectCard
                    No={"2"}
                    link={"/erasmus"}
                    title={"Erasmus Tab"}
                    desc={"student exchange program"}
                  />
                  <ProjectCard
                    No={"4"}
                    link={"/layls"}
                    title={"Layls Website"}
                    desc={" Dresses and Clothes Website"}
                  />
                  <ProjectCard
                    No={"6"}
                    link={"/layls"}
                    title={"Layls Website"}
                    desc={" Dresses and Clothes Website"}
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className={open ? "is-open" : ""}>
          <div className="contact-about">
            <div className="half-contact is-contact">
              <div className="close-contact" onClick={handleContactOpen}>
                <span></span>
                <span></span>
              </div>
              <div className="giga-text" style={{ right: "-2vh" }}>
                Skills
              </div>

              <div className="skills-container">
                <ul>
                  <li className="html"> HTML</li>
                  <li className="css"> CSS</li>
                  <li className="javascript"> Javascript</li>
                  <li className="typescript"> Typescript</li>
                  <li className="react"> ReactJS</li>
                  <li className="redux"> Redux</li>
                  <li className="react-hooks"> React hooks</li>
                  <li className="nodejs"> NodeJS</li>
                  <li className="nestjs"> NestJS</li>
                  <li className="mongodb"> MongoDB</li>
                  <li className="es6"> ES6</li>
                  <li className="restful"> RESTful API's</li>
                  <li className="bootstrap"> Bootstrap</li>
                  <li className="git"> Git</li>
                  <li className="Sass"> SASS</li>
                </ul>
              </div>

              <div className="contact-info"></div>
            </div>
            <div className="half-contact is-about">
              <div className="giga-text">About</div>
              <div className="contact-info">
                <h3 className="about-me-title">About Me</h3>
                <h4>Front-end web developer.</h4>
                <p className="about-me-text">
                  I'm Yazan Widyan, a Highly motivated, self-starting{" "}
                  <strong>front-end web developer</strong> seeking to launch a
                  career building web applications and services familiar with
                  development and deployment proccess
                  <br />
                  and I like to <strong>Resolve</strong> design problems,
                </p>

                <div className="boxes">
                  <div>
                    <span className="text-secondary"> Email: </span>
                    yazanwidyan07@gmail.com
                  </div>
                  <div>
                    <span className="text-secondary"> Phone: </span>
                    +962 79 538 21 71
                  </div>
                  <div>
                    <span className="text-secondary"> Address: </span>
                    Amman, Mecca st.
                  </div>
                </div>
                <div
                  className="giga-text"
                  style={{ top: "43vh", left: "-15vh", zIndex: "-1" }}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
