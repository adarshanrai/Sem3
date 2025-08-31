import React, { useState, useEffect } from "react";

// Import CSS and Font Awesome
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import components
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="App">
      {/* Pass the icon elements along with toggle function */}
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        darkModeIcon={
          isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>
        }
      />
      <main>
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
