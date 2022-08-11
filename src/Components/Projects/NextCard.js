import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";

const NextCard = ({ link, title }) => {
  return (
    <Link to={`${link}`}>
      <div className="next-projects">
        <span className="next-work-title">Next Work</span>
        <div className="next-work">
          {title}
          <img className="next-arrow" src={arrow} alt="dd" />
        </div>
      </div>
    </Link>
  );
};

export default NextCard;
