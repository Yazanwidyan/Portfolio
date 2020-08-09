import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Card from "../../Components/Parallax/Parallax";
import arrow from "../../Assets/Images/Untitled-1.png";
import logo from "../../Assets/Images/ddd.png";
import { Link } from "react-router-dom";
// import logo2 from "../../Assets/Images/Logo.png";

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
    window.scrollTo(500, 0);
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
            <div className="text-loading-mask">
              <div className="hero-name">
                <h1 className="lg-head">Y</h1>
                <h1 className="lg-head">a</h1>
                <h1 className="lg-head">z</h1>
                <h1 className="lg-head">a</h1>
                <h1 className="lg-head">n</h1>
                <h1 className="lg-head">W</h1>
                <h1 className="lg-head">i</h1>
                <h1 className="lg-head">d</h1>
                <h1 className="lg-head">y</h1>
                <h1 className="lg-head">a</h1>
                <h1 className="lg-head">n</h1>
              </div>
            </div>
            <div className="text-loading-mask-2">
              <h3 className="sm-heading"> Interactive Front-end Developer </h3>
            </div>

            <div className="text-loading-mask-3">
              <button className="the-button" onClick={handleContactOpen}>
                <span className="button-text">About Me</span>
                <div className="button-mask"></div>
                <span className=" button-icon">
                  <img className="arrow-logo" src={arrow} alt=""></img>
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "28%",
            left: "43%",
            width: "20vh",
            opacity: ".7",
            zIndex: "-8",
          }}
          src={logo}
          alt=""
        ></img>
        <Card />

        <div onClick={scrollDownHandler} className="go-next-works">
          <div>Works</div>
          <span className="the-arrow"></span>
        </div>
      </header>
      <div className="main" id="main1">
        <div className="work-section">
          <div className="content">
            <h4 className="work-title">CASE STUDIES </h4>
            <h2 className="work-subtitle"> Latest Works </h2>
            <ul className="work-list">
              <li className="project1-li">
                <Link id="project1" to="/layls" className="project">
                  <div className="project-mask"> </div>
                  <div id="project-number-1" className="project-mask-number">
                    <div className="project-mask-back"> 01 </div>
                    <div className="project-mask-front">
                      <div data-index="01" className="project-mask-overlay">
                        01
                      </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> Layls Website </div>
                    <div className="project-subtitle">
                      Dresses and Clothes Website{" "}
                    </div>
                    <button className="the-button">
                      <span className="button-text">View More </span>
                      <span className=" button-icon">
                        <img className="arrow-logo" src={arrow} alt=""></img>
                      </span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </Link>
              </li>
              <li className="project2-li">
                <Link id="project2" to="/nike" className="project">
                  <div className="project-mask"> </div>
                  <div id="project-number-2" className="project-mask-number">
                    <div className="project-mask-back"> 02 </div>
                    <div className="project-mask-front">
                      <div data-index="02" className="project-mask-overlay">
                        02
                      </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title">
                      {" "}
                      Duplicate Nike Website{" "}
                    </div>
                    <div className="project-subtitle">
                      {" "}
                      Amazing Multifunctioning Website{" "}
                    </div>
                    <button className="the-button">
                      <span className="button-text">View More</span>
                      <span className=" button-icon">
                        <img className="arrow-logo" src={arrow} alt=""></img>
                      </span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </Link>
              </li>
              <li className="project1-li">
                <Link id="project3" to="/monitor" className="project">
                  <div className="project-mask"> </div>
                  <div id="project-number-1" className="project-mask-number">
                    <div className="project-mask-back"> 03 </div>
                    <div className="project-mask-front">
                      <div data-index="03" className="project-mask-overlay">
                        03
                      </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> WTM Monitor </div>
                    <div className="project-subtitle">
                      {" "}
                      Monitoring service Website{" "}
                    </div>
                    <button className="the-button">
                      <span className="button-text">View More</span>
                      <span className=" button-icon">
                        <img className="arrow-logo" src={arrow} alt=""></img>
                      </span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </Link>
              </li>
              <li className="project2-li">
                <Link id="project4" to="/erasmus" className="project">
                  <div className="project-mask"> </div>
                  <div id="project-number-2" className="project-mask-number">
                    <div className="project-mask-back"> 04 </div>
                    <div className="project-mask-front">
                      <div data-index="04" className="project-mask-overlay">
                        04
                      </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> Erasmus Tab </div>
                    <div className="project-subtitle">
                      {" "}
                      student exchange program
                    </div>
                    <button className="the-button">
                      <span className="button-text">View More</span>
                      <span className=" button-icon">
                        <img className="arrow-logo" src={arrow} alt=""></img>
                      </span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </Link>
              </li>
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

export default Home;
