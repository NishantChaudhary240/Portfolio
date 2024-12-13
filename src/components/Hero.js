import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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
    <div className="hero-container">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay loop muted>
          <source src="/assets/videos/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I’m a passionate web developer creating modern, responsive, and user-friendly websites. Feel free to explore my work and get in touch!
        </p>
        <Button href="#portfolio" className="btn-learn-more">
          View My Work
        </Button>
      </div>
    </div>
  );
}

export default Hero;
