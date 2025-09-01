import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-title">
          <h1 className="title">Adarshan Rai</h1>
          <span className="title-subtext">
            Whoever made Git…I hate you with passion.
          </span>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
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
              <a href="#languages" className="nav-link">
                <span className="link-number">03.</span> My Experties
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <span className="link-number">04.</span> Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle (untouched) */}
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
