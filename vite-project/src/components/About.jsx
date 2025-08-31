import React from "react";
import "./About.css";
import myPhoto from "../assets/agusta.jpg"; 


function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Adarshan, a music enthusiast and a very dedicated gamer I play a lot of games some of my favourites are Genshin Impact, Honkai Star Rail and Wuthering Waves,
              and Agusta is one of my favourite characters from Wuthering Waves.
            </p>
            <p className="npm-package">
  Check out my NPM package:{" "}
  <a
    href="https://www.npmjs.com/package/attendancecalc"
    target="_blank"
    rel="noopener noreferrer"
  >
    Attendancecalc
  </a>
</p>

            <div className="technologies">
              <h3>Technologies I can manage to work with:</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML & CSS</li>
                <li>Node.js</li>
                <li>Git & GitHub</li>
                <li>C</li>
                <li>Python</li>             
                 </ul>
            </div>
          </div>
         <div className="about-image">
      <img src={myPhoto} alt="Adarshan Rai" className="profile-image" />
    </div>

          </div>
        </div>
      
    </section>
  );
}

export default About;