import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className='text-center mb-3'>My Projects</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="portfolio-item">
              <img src="/assets/images/image-1.avif" alt="E-commerce Design" />
              <h3>Project 1: E-commerce Website</h3>
              <p>
                A fully responsive e-commerce design created on Figma. The design focuses on user-friendly navigation,
                modern aesthetics, and seamless shopping experience.
              </p>
              <a href="https://dribbble.com/shots/25325936-E-commerce" className="btn btn-primary">View Project</a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="portfolio-item">
              <img src="/assets/images/image-2.avif" alt="Chat Bot" />
              <h3>Project 2: Chat-Bot</h3>
              <p>
                A React-based chatbot application capable of real-time responses and user interaction.
                Designed for enhanced communication experiences.
              </p>
              <a href="https://dribbble.com/shots/25325936-E-commerce" className="btn btn-primary">View Project</a>   {/* error */}
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="portfolio-item">
              <img src="/assets/images/image-3.avif" alt="Task Manager" />
              <h3>Project 3: Task Manager</h3>
              <p>
                A task management tool built with React, providing features like task creation, editing, and progress tracking
                in an intuitive interface.
              </p>
              <a href="https://dribbble.com/shots/25325936-E-commerce" className="btn btn-primary">View Project</a>  {/* error */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
