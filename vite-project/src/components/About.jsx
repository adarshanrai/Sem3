import React from "react";
import agusta from "../assets/agusta.jpg"; 
import iuno from "../assets/iuno.jpg"; 
import "./About.css";

function About({ isDarkMode }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Adarshan, a music enthusiast and a very dedicated gamer. 
              I play a lot of games, some of my favourites are Genshin Impact, 
              Honkai Star Rail, and Wuthering Waves - and 𝗔𝗴𝘂𝘀𝘁𝗮 𝗮𝗻𝗱 𝗜𝘂𝗻𝗼 are two of 
              my favourite characters from Wuthering Waves.
            </p>
            <div className="npm-wrapper">
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
            </div>
          </div>
          <div className="about-image">
            <img
              src={isDarkMode ? iuno : agusta} // 👈 swaps automatically
              alt="Adarshan Rai"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
