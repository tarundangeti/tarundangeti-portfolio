import React, { useState } from 'react';
import './stylesheets/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Cognizant Technology Solutions -  Internship",
      position: "Intership as Software developer",
      period: "June - September 2022",
      description: [
        "Assisted in developing and maintaining Java-based backend modules using Spring Boot for internal tools and client-facing applications.",
        "Created and tested RESTful APIs, focusing on modular architecture and reusable service layers.",
        "Worked on bug fixing, code refactoring, and enhancement of legacy components as part of live project support.",
        "Documented technical tasks, database schemas, and API usage guidelines for internal knowledge sharing."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Socket.IO", "Netlify", "Render", "Git", "CI/CD"]
    },
    {
      company: "Cognizant Technology Solutions - Programmer Analyst Traniee",
      position: "Programmer Analyst Trainee",
      period: "January - 2023",
      description: [
        "Underwent intensive training in Java, object-oriented programming, and backend development frameworks including Spring Boot",
        "Worked on proof-of-concept (PoC) applications and mini-projects, simulating real-world development tasks in the healthcare and life sciences domain.",
        "Designed and implemented RESTful APIs and backend logic for sample modules following standard coding practices.",
        "Gained exposure to SQL-based data modeling, database schema design, and query optimization for application integration.",
        "Practiced unit testing and debugging techniques for identifying and resolving issues efficiently.",
        "Collaborated with peers in agile sprint simulations, participating in stand-ups, retrospectives, and story estimations.",
        "Learned to use tools like Git for version control and Postman for API testing and validation."
      ],
      technologies: ["Python", "Hugging Face Transformers", "FAISS", "Mistral LLM", "Groq Multimodal API", "Streamlit", "NLP", "Vector Embeddings"]    
    }, 
    {
      company: "Cognizant Technology Solutions - Jr.Software Engineer",
      position: "Jr.Software Engineer",
      period: "January - 2024",
      description: [
        "Developed and maintained backend services using Java and Spring Boot for healthcare applications critical to client workflows.",
        "Worked on RESTful API design and integration, enabling smooth communication between modules and frontend systems.",
        "Handled bug fixes and enhancements for existing enterprise applications, ensuring high availability and performance.",
        "Participated in migration projects, updating deprecated frameworks and libraries, ensuring system compatibility and improved security.",
        "Involved in version upgrades and EOL (end-of-life) transitions of legacy systems, supporting a smooth shift to modern tech stacks.",
        "Collaborated with DevOps teams to integrate CI/CD pipelines using Jenkins and Git for automated testing and deployments.",
        "Wrote unit and integration tests using JUnit to validate application behavior and reduce production issues.",
        "Monitored application logs and performance, investigating issues using tools like Splunk and AppDynamics.",
        "Participated in Agile ceremonies including daily stand-ups, sprint planning, and retrospectives, contributing to continuous team delivery.",
        "Engaged in knowledge transfer and documentation, maintaining up-to-date technical and functional specs for long-term project sustainability."
      ],
      technologies: ["Hugging Face API", "OpenAI API", "Groq API", "Canva", "Postman", "GitHub"]
    },
    {
      company: "Cognizant Technology Solutions - Associate",
      position: "Associate",
      period: "January - 2025",
      description: [
        "Took ownership of application maintenance and feature enhancements, working across multiple Java-based services critical to healthcare systems.",
        "Played a central role in system migration and modernization, supporting transitions from legacy systems and managing end-of-life (EOL) components.",
        "Implemented and validated version upgrades across services, ensuring compatibility, stability, and long-term maintainability of backend systems.",
        "Coordinated with development, QA, and DevOps teams to deploy changes efficiently using CI/CD pipelines and version control systems like Git.",
        "Conducted impact analysis, regression testing, and documentation to support upgrade cycles and maintain business continuity.",
        "Participated in agile ceremonies and sprint deliverables, ensuring quality-driven, timely releases aligned with client expectations."
      ],
      technologies: ["Hugging Face API", "OpenAI API", "Groq API", "Canva", "Postman", "GitHub"]
    }
  ];
  

  return (
    <div className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        <div className="tabs">
          {experiences.map((exp, index) => (
            <button 
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <h3>{experiences[activeTab].position} <span className="company-highlight">@ {experiences[activeTab].company}</span></h3>
          <p className="period">{experiences[activeTab].period}</p>
          <ul className="responsibilities">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="technologies">
            {experiences[activeTab].technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
