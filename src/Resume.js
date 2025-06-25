import React from "react";
import "./stylesheets/Resume.css";

const Resume = () => {
  return (
    <div className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-content">
        <div className="resume-summary">
          <h3>Professional Summary</h3>
          <p>
          Proficient in Java backend development with hands-on experience in Spring Boot, RESTful APIs, and MySQL. 
          Built and enhanced microservices, focusing on maintainability, scalability, and system integration. 
          Worked on bug fixes, production support, and real-time feature enhancements in enterprise applications. 
          Involved in application migration, version upgrades, and modernization of legacy systems. 
          Explored automation and intelligent systems through AI-based tools and project integrations. 
          Experienced with Agile delivery practices, CI/CD workflows, and cross-functional team collaboration.
          </p>
        </div>

        <div className="resume-preview">
          <div className="document-preview">
            <div className="document-header">
              <h3>Dangeti Tarun</h3>
              <p>DevOps, AWS, and Java Full Stack Developer</p>
              <div className="contact-info">
                <p>tarun.dangeti2@gmail.com</p>
                <p>+91 8008233337</p>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="document-section">
              <h4>Skills Overview</h4>
              <div className="skill-columns">
                <ul>
                  <li>Programming Languages</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>Java Script</li>
                  <li>Python</li>
                </ul>
                <ul>
                <li>Full Stack Development</li>
                <li>Frontend Development (React, Tailwind CSS)</li>
                <li>Backend Development (Node.js, java)</li>
                <li>Database Management (Oracle, mySQL, PostgreSQL)</li>
                </ul>
              </div>
            </div>

            <div className="document-section">
              <h4>Education</h4>
              <div className="education-item">
                <p className="institution">Vidya Jyothi Institute of Technology <br></br>( Affiliated to Jawaharlal Nehru Technological University Hyderabad) </p>
                <p className="degree">
                  Bachelor of Technology in Electrical and Electronics Engineering
                </p>
                <p className="year">2018 - 2022</p>
              </div>
              <div className="education-item">
                <p className="institution">
                  Narayana Juniour collage
                </p>
                <p className="intermediate">
                 Intermediate Education (MPC)
                </p>
                <p className="year">2017 - 2018</p>
              </div>
              <div className="education-item">
                <p className="institution">
                  St Issac Advent High School
                </p>
                <p className="tenthclass">
                 Secandary School Certificate
                </p>
                <p className="year">2016</p>
              </div>
            </div>
          </div>
        </div>

        <div className="download-section">
          <p>View complete resume or download a copy:</p>
          <div className="download-buttons">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <span className="download-icon"></span> View Full Resume
            </a>
            <a href="" download className="download-btn">
              <span className="download-icon">⬇</span> Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
