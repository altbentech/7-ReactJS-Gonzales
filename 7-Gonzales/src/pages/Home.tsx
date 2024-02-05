// Home.tsx

import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/reactProjectProfile.jpg";
import '../index.css';

const Home: React.FC = () => {
  return (
    <div className="main-container"> {/* Apply background color to the main container */}
      <Container className="text-center mt-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <div className="rounded-circle overflow-hidden mx-auto" style={{ width: "200px", height: "200px" }}>
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h1 className="my-3 custom-font">Benjie Gonzales Jr.</h1>
            <h2 className="mb-4 custom-font">Web Developer</h2>

            <Container className="border rounded p-4 mt-4">
              <p>
                Hi! I'm a passionate web developer. Welcome to my personal website. Click the button
                below to learn more about me and explore my projects.
              </p>
              <Button variant="primary" className="mt-3">
                Learn More
              </Button>
            </Container>

            <div className="mt-4">
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <Link to="/Calculator">
                  <Button variant="outline-primary">Calculator</Button>
                </Link>
                <Link to="/JSON">
                  <Button variant="outline-primary">JSON</Button>
                </Link>
                <Link to="/Hobbies">
                  <Button variant="outline-primary">Hobbies</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
