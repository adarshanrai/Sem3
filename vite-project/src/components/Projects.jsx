import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="project-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://i.pinimg.com/736x/4f/eb/9f/4feb9f5f60c5d0b87051473951456e37.jpg" 
                alt="Portfolio Website" 
                className="project-img" 
              />
            </div>
            <div className="project-details">
              <h3>Utakaibu</h3>
              <p>A song finder made using spotify API.</p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>API</span>
                <span><a href="https://adarshanrai.github.io/sem2repo/utakaibu.html">LINK</a></span>
              </div>
              <div className="project-links">
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                 
                </a>
                <a href="https://your-live-demo-link.com" className="project-link" target="_blank" rel="noopener noreferrer">
                 
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://i.pinimg.com/1200x/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.jpg" 
                alt="Game Helper Tool" 
                className="project-img" 
              />
            </div>
            <div className="project-details">
              <h3>Weather app</h3>
              <p>A Weather app made using API</p>
              <div className="project-tech">
                <span>React</span>
                <span>API</span>
                <span>CSS</span>
                <span><a href="https://adarshanrai.github.io/sem2repo/weatherforecast.html">LINK</a></span>
                
              </div>
              <div className="project-links">
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                 
                </a>
                <a href="https://your-live-demo-link.com" className="project-link" target="_blank" rel="noopener noreferrer">
                
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://i.pinimg.com/736x/19/75/16/1975165a5eaac293e7e5352ded49b608.jpg" 
                alt="Task Manager" 
                className="project-img" 
              />
            </div>
            <div className="project-details">
              <h3>Simple tourism website</h3>
              <p>A simple website to check out potential tourist destinations</p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span><a href="https://adarshanrai.github.io/westsikkim/TheUnknown.html">LINK</a></span>
              </div>
              <div className="project-links">
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                  
                </a>
                <a href="https://your-live-demo-link.com" className="project-link" target="_blank" rel="noopener noreferrer">
                  
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
