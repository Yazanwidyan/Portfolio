import React, { useState } from "react";
import avatar from "../../Assets/Images/rrrr.jpg";

const About = () => {
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
            <li className={`nav-item current ${show ? "show" : ""}`}>
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

      <main className="about">
        <h1 className="lg-heading">
          About <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading"> Let me tell you a few things...</h2>
        <div className="about-info">
          <img src={avatar} alt="Yazan" className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIIO</h3>
            <p>
              Id duis sit officia anim. Et ut voluptate ex tempor elit. Et culpa
              culpa qui proident nisi cupidatat anim. Nostrud ea consectetur id
              labore Lorem nostrud dolore irure labore magna.
            </p>
          </div>
          <div className="job job-1">
            <h3>123 webshop</h3>
            <h6>Full Stack</h6>
            <p>
              Amet cillum ea ex incididunt aliquip consequat id. Ullamco aute
              sunt labore amet officia nisi. Officia proident et laboris quis
              occaecat ea enim culpa aliqua ullamco. Eiusmod consequat sit
              cillum qui ullamco nulla aliquip tempor deserunt ipsum do Lorem
              culpa irure. Veniam tempor veniam adipisicing nostrud ut aliqua
              irure ex elit Lorem amet nostrud culpa. Do elit cupidatat sit
              aliquip mollit sunt ullamco tempor consectetur mollit occaecat
              fugiat quis nulla.
            </p>
          </div>
          <div className="job job-2">
            <h3>123 webshop</h3>
            <h6>Full Stack</h6>
            <p>
              Amet cillum ea ex incididunt aliquip consequat id. Ullamco aute
              sunt labore amet officia nisi. Officia proident et laboris quis
              occaecat ea enim culpa aliqua ullamco. Eiusmod consequat sit
              cillum qui ullamco nulla aliquip tempor deserunt ipsum do Lorem
              culpa irure. Veniam tempor veniam adipisicing nostrud ut aliqua
              irure ex elit Lorem amet nostrud culpa. Do elit cupidatat sit
              aliquip mollit sunt ullamco tempor consectetur mollit occaecat
              fugiat quis nulla.
            </p>
          </div>
          <div className="job job-3">
            <h3>123 webshop</h3>
            <h6>Full Stack</h6>
            <p>
              Amet cillum ea ex incididunt aliquip consequat id. Ullamco aute
              sunt labore amet officia nisi. Officia proident et laboris quis
              occaecat ea enim culpa aliqua ullamco. Eiusmod consequat sit
              cillum qui ullamco nulla aliquip tempor deserunt ipsum do Lorem
              culpa irure. Veniam tempor veniam adipisicing nostrud ut aliqua
              irure ex elit Lorem amet nostrud culpa. Do elit cupidatat sit
              aliquip mollit sunt ullamco tempor consectetur mollit occaecat
              fugiat quis nulla.
            </p>
          </div>
        </div>
      </main>

      <footer className="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
};

export default About;
