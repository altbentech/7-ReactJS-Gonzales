import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import aboutPic from "../images/about-pic.png";
import experienceIcon from "../images/experience.png";
import educationIcon from "../images/education.png";
import arrowIcon from "../images/arrow.png";

const LearnMore: React.FC = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <Link to="/experience" className="icon arrow">
        {/* You can style the arrow icon using CSS in your style.css file */}
        <img src={arrowIcon} alt="Arrow icon" />
      </Link>
    </section>
  );
};

export default LearnMore;
