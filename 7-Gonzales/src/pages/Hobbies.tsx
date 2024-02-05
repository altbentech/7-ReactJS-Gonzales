// Hobbies.tsx

import React from "react";
import { Row, Col, Card, CardBody, CardText } from "react-bootstrap";
import "../index.css";

export default function Hobbies() {
  return (
    <div className="hobbies-container">
      <Row className="hobby-row">
        <h1 className="hobby-title">MY HOBBIES</h1>
      </Row>
      <Row>
        <Col xs="6">
          <Card>
            <img
              src="https://neurosciencenews.com/files/2023/10/music-emotion-neuroscience.jpg"
              alt="Reading"
            />
            <CardBody>
              <CardText>
                <h3>Reading</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                asperiores!
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <img
              src="https://neurosciencenews.com/files/2023/10/music-emotion-neuroscience.jpg"
              alt="Reading"
            />
            <CardBody>
              <CardText>
                <h3>Reading</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                asperiores!
              </CardText>
            </CardBody>
          </Card>
        </Col>
        {/* Repeat the above Card structure for each hobby */}
      </Row>
      <Row>
        <Col xs="6">
          <Card>
            <img
              src="https://neurosciencenews.com/files/2023/10/music-emotion-neuroscience.jpg"
              alt="Reading"
            />
            <CardBody>
              <CardText>
                <h3>Reading</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                asperiores!
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <img
              src="https://neurosciencenews.com/files/2023/10/music-emotion-neuroscience.jpg"
              alt="Reading"
            />
            <CardBody>
              <CardText>
                <h3>Reading</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                asperiores!
              </CardText>
            </CardBody>
          </Card>
        </Col>
        {/* Repeat the above Card structure for each hobby */}
      </Row>
      <div className="back-to-home">
        <a href="/">Back to Home</a>
      </div>
    </div>
  );
}
