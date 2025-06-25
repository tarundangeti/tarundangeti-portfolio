import React, { useState, useEffect } from "react";
import "./stylesheets/Socials.css";
import { FaGithub, FaLinkedin, FaCheck, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Socials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    // Email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const platforms = [
    {
      name: "GitHub",
      icon: <FaGithub className="platform-icon" />,
      description: "Check out my code repositories and projects",
      link: "https://github.com/tarundangeti",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="platform-icon" />,
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/in/tarun",
    }, 
    {
      name: "Email",
      icon: <FaEnvelope className="platform-icon" />,
      description: "Feel free to reach out to me",
      link: "mailto:tarun.dangeti2@gmail.com", // Replace with your actual email
    }
  ];

  return (
    <section className="socials-section">
      <div className={`section-content socials-content ${isVisible ? "visible" : ""}`}>
        <div className="social-platforms">
          <h3>Connect With Me</h3>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div className="platform-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {platform.icon}
                <h4>{platform.name}</h4>
                <p>{platform.description}</p>
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Get In Touch</h3>

          {!formSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <FaCheck />
              </div>
              <h4>Message Sent!</h4>
              <p>
                Thank you for reaching out. I'll get back to you as soon as
                possible!
              </p>
              <button onClick={resetForm} className="back-btn">
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Socials;
