import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";

const ProjectCard = ({ No, link, title, desc, position }) => {
  return (
    <li
      className={`project${No}-li`}
      style={{ width: "100%", borderRadius: "10px" }}
    >
      <Link id={`project${No}`} to={`${link}`} className="project">
        <div className="project-mask"> </div>
        <div id={`project-number-right`} className="project-mask-number">
          <div className="project-mask-back"> 0{No} </div>
          <div className="project-mask-front">
            <div data-index={`0${No}`} className="project-mask-overlay">
              0{No}
            </div>
          </div>
        </div>
        <div className="work-text-section">
          <div className="project-title"> {title} </div>
          <div className="project-subtitle"> {desc}</div>
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
  );
};

export default ProjectCard;
