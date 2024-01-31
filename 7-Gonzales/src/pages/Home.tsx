import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Digital Transformation</h1>
      
      <div className="mt-4">
        <Link to="/Calculator">
          <Button variant="outline-primary" className="mx-2">Calculator</Button>
        </Link>

        <Link to="/JSON">
        <Button variant="outline-primary" className="mx-2">JSON</Button>
        </Link>

        <Link to="/Hobbies">
        <Button variant="outline-primary" className="mx-2">Hobbies</Button>
        </Link>
      </div>
      
      <Container className="border rounded p-4 mt-4">
        <p>Hi! My name is Benjie. By clicking the button below you will learn more about me.</p>
        <Button variant="primary" className="mt-3">Learn More</Button>
      </Container>
    </Container>
  );
}

export default Home;
