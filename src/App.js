import React, { useState } from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Socials from './Socials';
import ToolBox from './ToolBox';
import Chatbot from './Chatbot'
import './stylesheets/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('homepage');

  // Map of section ids to their component
  const sections = {
    homepage: <Homepage setActiveSection={setActiveSection} />,
    about: <About />,
    skills: <ToolBox />,
    experience: <Experience />,
    projects: <Projects />,
    resume: <Resume />,
    socials: <Socials />, 
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="content">
        {sections[activeSection]}
      </main>
      <Chatbot/>
    </div>
  );
}

export default App;