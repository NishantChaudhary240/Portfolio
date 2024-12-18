import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col md={12} className="mb-3">
            <p>&copy; {new Date().getFullYear()} Nishant Chaudhary. All Rights Reserved.</p>
          </Col>
          <Col md={12}>
            <div className="social-icons">
              <a href="https://github.com/NishantChaudhary240" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/nishant-chaudhary-441299258/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.facebook.com/nishant.chaudhary.20075/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
