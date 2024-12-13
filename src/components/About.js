import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-3">About Me</h2>
        <Row>
          <Col md={6}>
            <h3>Hi, I'm Nishant Chaudhary</h3>
            <p>
              I'm a web developer with a passion for creating intuitive and dynamic user experiences. 
              I specialize in React, front-end development, and building responsive websites.
            </p>
            <Button href="#contact" variant="primary">Get in Touch</Button>
          </Col>
          <Col md={6}>
            <div className="about-video-container">
              <video width="100%" height="auto" controls autoPlay muted>
                <source src="/assets/videos/coding-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
