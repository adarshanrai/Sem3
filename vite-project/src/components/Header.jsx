import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-title">
          <h1 className="title">Adarshan Rai</h1>
          <span className="title-subtext">If you cant do it,Give up.</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                <span className="link-number">01.</span> About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                <span className="link-number">02.</span> Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <span className="link-number">03.</span> Contact
              </a>
            </li>
          </ul>
          
          
        </nav>
        
        <button className="mobile-menu-toggle" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

  );
}



export default Header;