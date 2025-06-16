// src/App.jsx
import React, { useState } from 'react';
// Import routing components: BrowserRouter for context, Routes for defining routes, Route for individual routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Main application styles
import TagCloud from './components/TagCloud.jsx'; // Component for the interactive tags

// Import all screen components
import AboutMe from './components/AboutMe.jsx';
import MyProjects from './components/MyProjects.jsx';
import SocialMedias from './components/SocialMedias.jsx';
import ProjectDetail from './components/ProjectDetail.jsx'; // NEW: Import ProjectDetail

// HomeContent component: This encapsulates the content for your main landing page.
// It receives props to control the motto text and its toggle function.
function HomeContent({ showLatin, toggleMotto }) {
  return (
    <>
      <header className="hero-section">
        {/* Main motto with click handler to toggle between Latin and English */}
        <h1 className="main-motto" onClick={toggleMotto}>
          {showLatin ? "Dum Spiro Spero" : "While I breathe, I hope"}
        </h1>
        {/* Subtitle for the portfolio */}
        <p className="portfolio-subtitle">
          Adrianne Bleu's Portfolio
        </p>
      </header>
      <main className="tag-section">
        {/* The tag cloud that navigates to different sections */}
        <TagCloud />
      </main>
    </>
  );
}

// Main App component: Sets up the routing and the persistent top/bottom bars.
function App() {
  // State to manage the display of the Latin motto or its English translation
  const [showLatin, setShowLatin] = useState(true);

  // Function to toggle the motto state
  const toggleMotto = () => {
    setShowLatin(prevState => !prevState);
  };

  return (
    // BrowserRouter wraps the entire application to enable client-side routing
    <BrowserRouter>
      {/* React Fragment is used to return multiple top-level elements (bars + content) */}
      <> 
        <div className="top-bar"></div>

        {/* The main content area where different routes will be displayed */}
        <div className="app-container">
          {/* Routes component defines the mapping between URLs and React components */}
          <Routes> 
            {/* Home route: Renders HomeContent when path is '/' */}
            <Route path="/" element={<HomeContent showLatin={showLatin} toggleMotto={toggleMotto} />} />
            {/* Route for the 'About Me' section */}
            <Route path="/about" element={<AboutMe />} />
            {/* Main Projects list route */}
            <Route path="/projects" element={<MyProjects />} />
            {/* IMPORTANT: Dynamic route for individual project details */}
            {/* This matches paths like /projects/lab-activity-1 */}
            <Route path="/projects/:projectId" element={<ProjectDetail />} /> 
            {/* Route for the 'Social Medias' section */}
            <Route path="/social" element={<SocialMedias />} />
          </Routes>
        </div>

        <div className="bottom-bar"></div>
      </>
    </BrowserRouter>
  );
}

export default App;
