import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import project1 from "../../Assets/Images/10x-featured-social-media-image-size.png";

const Work = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div>
      <header>
        <div className={`menu-btn ${show ? "close" : ""}`} onClick={toggleMenu}>
          <div className={`btn-line ${show ? "close" : ""}`}></div>
          <div className={`btn-line ${show ? "close" : ""}`}></div>
          <div className={`btn-line ${show ? "close" : ""}`}></div>
        </div>
        <nav className={`menu ${show ? "show" : ""}`}>
          <div className={`menu-branding ${show ? "show" : ""}`}>
            <div className="portrait"></div>
          </div>
          <ul className={`menu-nav ${show ? "show" : ""}`}>
            <li className={`nav-item  ${show ? "show" : ""}`}>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className={`nav-item  ${show ? "show" : ""}`}>
              <a href="/about" className="nav-link">
                About Me
              </a>
            </li>
            <li className={`nav-item current ${show ? "show" : ""}`}>
              <a href="/work" className="nav-link">
                My Work
              </a>
            </li>
            <li className={`nav-item ${show ? "show" : ""}`}>
              <a href="/contact" className="nav-link">
                How to reach me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="work">
        <h1 className="lg-heading">
          My <span className="text-secondary"> Work</span>
        </h1>
        <h2 className="sm-heading"> Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <a href="#!">
              <img src={project1} alt="project1" />
            </a>
            <a href="#!" className="btn-light">
              <i className="">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="">
                <FontAwesomeIcon icon={faGithub} />
              </i>
              Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project1} alt="project1" />
            </a>
            <a href="#!" className="btn-light">
              <i className="">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="">
                <FontAwesomeIcon icon={faGithub} />
              </i>
              Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project1} alt="project1" />
            </a>
            <a href="#!" className="btn-light">
              <i className="">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="">
                <FontAwesomeIcon icon={faGithub} />
              </i>
              Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project1} alt="project1" />
            </a>
            <a href="#!" className="btn-light">
              <i className="">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="">
                <FontAwesomeIcon icon={faGithub} />
              </i>
              Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src={project1} alt="project1" />
            </a>
            <a href="#!" className="btn-light">
              <i className="">
                <FontAwesomeIcon icon={faTwitter} />
              </i>
              Project
            </a>
            <a href="#!" className="btn-dark">
              <i className="">
                <FontAwesomeIcon icon={faGithub} />
              </i>
              Github
            </a>
          </div>
        </div>
      </main>

      <footer className="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
};

export default Work;
