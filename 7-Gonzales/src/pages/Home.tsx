import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/proj-profile.jpg";
import "./style.css";

const toggleMenu = () => {
  // Add your toggleMenu logic here
};

const App: React.FC = () => {
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Digital Transformation</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About Me</a>
            </li>
            <Link to="/Calculator">
              <li>
                <a>Calculator</a>
              </li>
            </Link>
            <Link to="/JSON">
              <li>
                <a>JSON</a>
              </li>
            </Link>
            <Link to="/Hobbies">
              <li>
                <a>Hobbies</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Benjie Gonzales Jr.</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Benjie Gonzales Jr</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="section__text">
            <p className="section__text__p1">
              Hi! I'm a passionate web developer. Click the button below to
              learn more about me.
            </p>
          </div>
          <div className="btn-container">
          <button
            className="btn btn-color-2"
          >
            Learn More
          </button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default App;
