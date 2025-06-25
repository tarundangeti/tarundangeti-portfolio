// ToolBox.jsx
import React, { useEffect, useState } from "react";
import "./stylesheets/ToolBox.css";
import {
  FaPython,
  FaJava,
  FaGlobe,
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaUsersCog,
  FaTools,
  FaAws
} from "react-icons/fa";
import {
  SiTensorflow,
  SiBootstrap,
  SiTailwindcss,
  SiFlask,
  SiKeras,
  SiOpencv,
  SiPytorch,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiTableau,
  SiScikitlearn,
} from "react-icons/si";

const ToolBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { 
          name: "Python", 
          level: 95, 
          icon: <FaPython /> 
        },
        { 
          name: "Java", 
          level: 75, 
          icon: <FaJava /> 
        },
      ],
    },
    {
      name: "Database Management",
      icon: <FaDatabase />,
      skills: [
        { 
          name: "SQL", 
          level: 90, 
          icon: <FaDatabase /> 
        },
        { 
          name: "PostgreSQL", 
          level: 85, 
          icon: <SiPostgresql /> 
        },
        { 
          name: "MongoDB", 
          level: 70, 
          icon: <SiMongodb /> 
        },
      ],
    },
    
    {
      name: "Web Development",
      icon: <FaGlobe />,
      skills: [
        { 
          name: "HTML", 
          level: 95, 
          icon: <SiHtml5 /> 
        },
        { 
          name: "CSS", 
          level: 90, 
          icon: <SiCss3 /> 
        },
        { 
          name: "JavaScript", 
          level: 85, 
          icon: <SiJavascript /> 
        },
        { 
          name: "React.js", 
          level: 90, 
          icon: <FaReact /> 
        },
        { 
          name: "jQuery", 
          level: 80, 
          icon: <FaCode /> 
        },
        { 
          name: "Bootstrap", 
          level: 85, 
          icon: <SiBootstrap /> 
        },
        { 
          name: "Tailwind CSS", 
          level: 85, 
          icon: <SiTailwindcss /> 
        },
        { 
          name: "WordPress", 
          level: 75, 
          icon: <FaWordpress /> 
        },
        { 
          name: "Node.js", 
          level: 80,
          icon: <FaNodeJs /> 
        },
        { 
          name: "Express.js", 
          level: 80, 
          icon: <FaCode /> 
        },
        { 
          name: "Flask", 
          level: 75, 
          icon: <SiFlask /> 
        },
        { 
          name: "EJS", 
          level: 70, 
          icon: <FaCode /> 
        },
      ],
    },
    {
      name: "Other Technical Skills",
      icon: <FaTools />,
      skills: [
        { 
          name: "Git", 
          level: 90, 
          icon: <FaGitAlt /> 
        },
        { 
          name: "DSA (Java)", 
          level: 90, 
          icon: <FaJava /> 
        },
        {
          name: "Cloud Computing with AWS",
          level: 70,
          icon: <FaAws />
        }
      ],
    },
    {
      name: "Soft Skills",
      icon: <FaUsers />,
      skills: [
        { 
          name: "Creative Problem-Solving", 
          level: 90, 
          icon: <FaLightbulb /> 
        },
        { 
          name: "Effective Communication", 
          level: 85, 
          icon: <FaComments /> 
        },
        { 
          name: "Time Management", 
          level: 85, 
          icon: <FaClock /> 
        },
        {
          name: "Leadership & Team Collaboration",
          level: 90,
          icon: <FaUsersCog />,
        },
      ],
    },
  ];

  return (
    <section className="toolbox-section">
      <div
        className={`section-content toolbox-content ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="section-title">My ToolBox</h2>
        <p className="section-subtitle">
          Technologies and skills that I've acquired over the years
        </p>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="skill-info">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillProgress 1s ease forwards`,
                          "--skill-width": `${skill.level}%`, // Pass skill level as a CSS variable
                          animationDelay: `${index * 0.2 + idx * 0.1}s`,
                        }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolBox;
