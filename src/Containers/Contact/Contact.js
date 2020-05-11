import React, { useState } from "react";

const Contact = () => {
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
            <li className={`nav-item ${show ? "show" : ""}`}>
              <a href="/work" className="nav-link">
                My Work
              </a>
            </li>
            <li className={`nav-item current ${show ? "show" : ""}`}>
              <a href="/contact" className="nav-link">
                How to reach me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading"> This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary"> Email:</span>
            Yazan@test.com
          </div>
          <div>
            <span className="text-secondary"> Phone:</span>
            +962 111 111 111
          </div>
          <div>
            <span className="text-secondary"> Address:</span>
            Amman, Mecca st.
          </div>
        </div>
      </main>

      <footer className="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
};

export default Contact;
