import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Card from "../../Components/Parallax/Parallax";

const Home = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

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
          <ul className="nav-links">
            <li>
              <a href="!#">Case Studies</a>
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

      <header className="main-hero">
        <div className="main-hero-text">
          <div className="content">
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
            <h3 className="sm-heading"> Interactive Front-end Developer </h3>

            <button className="the-button" onClick={handleContactOpen}>
              <span className="button-text">About Me</span>
              <div className="button-mask"></div>
              <span className=" button-icon"></span>
            </button>

            <ul className="icons">
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Card />

        <a href="#!" className="go-next-works">
          <div>Works</div>
          <span className="the-arrow"></span>
        </a>
      </header>
      <div className="main">
        <div className="work-section">
          <div className="content">
            <h4 className="work-title">case studies </h4>
            <h2 className="work-subtitle"> Latest Works </h2>
            <ul className="work-list">
              <li className="project1-li">
                <a id="project1" href="!#" className="project">
                  <div className="project-mask"> </div>
                  <div className="project-mask-number">
                    <div className="project-mask-back"> 01 </div>
                    <div className="project-mask-front">
                      <div className="project-mask-front-overlay"> 01 </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> Project Title </div>
                    <div className="project-subtitle"> Project Subtitle </div>
                    <button className="the-button">
                      <span className="button-text">case study </span>
                      <span className=" button-icon"></span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </a>
              </li>
              <li className="project2-li">
                <a id="project1" href="!#" className="project">
                  <div className="project-mask"> </div>
                  <div
                    className="project-mask-number"
                    style={{ top: "-124px", left: "-51px" }}
                  >
                    <div className="project-mask-back"> 02 </div>
                    <div className="project-mask-front">
                      <div className="project-mask-front-overlay"> 02 </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> Project Title </div>
                    <div className="project-subtitle"> Project Subtitle </div>
                    <button className="the-button">
                      <span className="button-text">case study </span>
                      <span className=" button-icon"></span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={open ? "is-open" : ""}>
          <div className="contact-about">
            <div className="half-contact is-contact">
              <div className="giga-text" style={{ right: "-2vh" }}>
                Skills
              </div>

              <div className="skills-container">
                <ul>
                  <li className="html"> HTML</li>
                  <li className="css"> CSS</li>
                  <li className="javascript"> JAVASCRIPT</li>
                  <li className="react"> REACT</li>
                  <li className="redux"> REDUX</li>
                </ul>
              </div>

              <div className="contact-info">
                <div className="close-contact" onClick={handleContactOpen}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="half-contact is-about">
              <div className="giga-text">About</div>
              <div className="contact-info">
                <h3 className="about-me-title">About Me</h3>
                <h4>Interactive Front-end developer.</h4>
                <p className="about-me-text">
                  I'm Yazan Widyan, a 26-year-old Jordanian
                  <strong> Freelance Front-end developer</strong>. I'm a guy who
                  likes making weird things with web technologies.
                  <br /> I like to <strong>Resolve</strong> design problems,
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
                <a href="!#">Twitter</a>
              </li>
              <li>
                <a href="!#">Linkedin</a>
              </li>
              <li>
                <a href="!#">Github</a>
              </li>
              <li>
                <a href="!#">Facebook</a>
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
