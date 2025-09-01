import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="contact">
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>Adarshan Rai. MSU</p>
            <div className="social-links">
              <a href="https://github.com/adarshanrai" aria-label="GitHub">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/adarshan-rai-a09798324/"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                 href="mailto:adarshanrai76@gmail.com" aria-label="Email">
              
            Email
              </a>


            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
