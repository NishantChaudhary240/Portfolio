import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons for dark/light mode toggle
import { Link } from 'react-scroll'; // For smooth scrolling

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is already applied when the component mounts
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true'); // Save the mode to localStorage
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
      }
      return newMode;
    });
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">Nishant Chaudhary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> {/* This will push the nav items to the right */}
            <Link to="portfolio" smooth={true} duration={500}>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Nav.Link>Contact</Nav.Link>
            </Link>
            <Button onClick={toggleDarkMode} variant="link" className="dark-mode-toggle-btn">
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
