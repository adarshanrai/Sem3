import React from "react";
import "./Languages.css";

function Languages({ isDarkMode }) {
  const languages = [
    { name: "Python", color: "#3776ab", icon: "🐍" },
    { name: "Java", color: "#007396", icon: "☕" },
    { name: "Git", color: "#22100dff", icon: "📚" },
    { name: "JavaScript", color: "#f7df1e", icon: "📜" },
    { name: "HTML", color: "#68dd3aff", icon: "🌐" },
    { name: "CSS", color: "#264de4", icon: "🎨" },
    { name: "React", color: "#61dafb", icon: "⚛️" },
    { name: "SQL", color: "#00618A", icon: "🗄️" }
  ];

  return (
    <section id="languages" className={`languages ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <h2 className="section-title">Technologies I Work With</h2>
        
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="language-card"
              style={{ 
                background: `linear-gradient(135deg, ${language.color}20, ${language.color}40)`,
                borderLeft: `4px solid ${language.color}`
              }}
            >
              <div className="language-icon" style={{ color: language.color }}>
                {language.icon}
              </div>
              <h3 className="language-name">{language.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
