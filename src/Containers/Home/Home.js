import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
    console.log(show);
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
            <li className={`nav-item current ${show ? "show" : ""}`}>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className={`nav-item ${show ? "show" : ""}`}>
              <a href="/about" className="nav-link">
                About Me
              </a>
            </li>
            <li className={`nav-item ${show ? "show" : ""}`}>
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

      <main className="home">
        <h1 className="lg-heading">
          Yazan <span className="text-secondary"> Widyan</span>
        </h1>
        <h2 className="sm-heading"> Web Developer</h2>
        <div className="icons">
          <a href="#!">
            <i>
              <FontAwesomeIcon icon={faTwitter} />
            </i>
          </a>
          <a href="#!">
            <i>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </i>
          </a>
          <a href="#!">
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
          <a href="#!">
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
