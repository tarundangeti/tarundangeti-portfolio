import React, { useEffect, useRef } from "react";
import "./stylesheets/About.css";

import ProfileImage from './Images/profile.jpg';

const About = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  const timelineEvents = [
    {
      year: "2018",
      title: "Started coding",
      description:
        "I was introduced to programming through C during my early computer science days, mainly working on simulations. Even small wins—like simulating a traffic signal or a basic calculator—gave me confidence and sparked a real interest in solving problems through code..",
    },
    {
      year: "2019",
      title: "Started Btech",
      description:
        "Began BTech in Electrical and Electronics Engineering at Vidhya Jyothi institute of technology, exploring core computing techniques and Electical technology.",
    },
    {
      year: "2020",
      title: "Built Strong Java Foundations",
      description:
        "Developed a strong grasp of Java and Sharpened problem-solving skills through practice questions and competitive coding contests.",
    },
    {
      year: "2021",
      title: "First Steps into the World of AI",
      description:
        "Got introduced to AI through practical examples and real-world discussions, which sparked my curiosity to explore how intelligent systems can automate tasks—from simple workflows to more complex decision-making processes—opening my eyes to the real power behind modern automation.",
    },
    {
      year: "2022",
      title: "Internships",
      description:
        "Completed a Java-focused internship at Cognizant, where I contributed to building backend modules for an enterprise-level management system using Spring Boot, RESTful APIs, and MySQL, gaining practical experience in debugging, deployment, and working within an Agile team structure.",
    },
    {
      year: "2023",
      title: "Praogrammer Analyst Traine",
      description:
        "Joined Cognizant as a Full-Time Associate, where I worked on Java-based backend development projects in the Life Sciences domain—building and maintaining microservices with Spring Boot, integrating APIs, and supporting critical healthcare workflows. Gained valuable experience in agile delivery, unit testing, and collaborating with cross-functional teams to ensure reliable and scalable system performance.",
    },
    {
      year: "2024",
      title: "Jr.Software Engineer",
      description:
        "Promoted to Junior Software Engineer at Cognizant, where I continued working in the Life Sciences domain—focusing on debugging, resolving production issues, and implementing enhancements to existing Java-based applications. Played a key role in maintaining system stability, improving code quality, and ensuring seamless integration with backend services and APIs.",
    },
    {
      year: "2025",
      title: "Associate",
      description:
        "Promoted to Associate at Cognizant, where I took on greater responsibilities in the Life Sciences domain—actively contributing to application migration efforts, end-of-life (EOL) transitions, and version upgrades for enterprise systems. This role deepened my expertise in maintaining legacy applications, aligning with compliance standards, and modernizing backend services for improved scalability and performance.",
    }
  ];

  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="personal-info">
          <div className="profile-image">
            <img src={ProfileImage} alt="Profile" />
          </div>
          <div className="bio">
            <p>
            Hi, I’m Dangeti Tarun, a Full Stack Java Developer with a passion for building efficient and scalable applications. 
            I enjoy working across both frontend and backend, and I’ve developed solid experience using Spring Boot, React, and RESTful APIs.
            </p>
            <p>
            Over time, I also got into DevOps—automating deployments, managing CI/CD pipelines, and working with tools like Docker, Jenkins, and AWS. 
            Cloud services and infrastructure-as-code really changed the way I think about delivering software.
            </p>
            <p>
             Outside of work, I stay active by playing volleyball and often participate in community events focused on volunteering and social impact. Whether it's mentoring, helping out with local initiatives, or supporting causes I care about, I enjoy being part of efforts that make a positive difference.
            </p>
            <h3>
              If something can be built, I build it. If it needs cloud power, I deploy it. And if it’s a tough problem, I’m ready to solve it.
            </h3>
          </div>
        </div>

        <div className="journey">
          <h3>My Journey</h3>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`timeline-item fade-in ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <div className="year">{event.year}</div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
