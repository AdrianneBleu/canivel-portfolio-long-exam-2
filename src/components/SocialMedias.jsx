// src/components/SocialMedias.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation back to home
import '../App.css'; // For general screen-content styling (like .screen-content)
import './SocialMedias.css'; // IMPORTANT: Import specific styles for this page
import SocialMediaLinks from './SocialMediaLinks.jsx'; // Component that renders the social media squares

function SocialMedias() {
  return (
    // 'screen-content' provides overall centering and padding from App.css.
    // 'social-medias-container' adds specific styling for this page.
    <div className="screen-content social-medias-container"> 
      {/* Main heading for the social media page */}
      <h2>Let's Connect!</h2>
      {/* Introductory paragraph */}
      <p>
        I'm always open to new connections and collaborations. <br />
        Feel free to reach out on any of these platforms!
      </p>
      
      {/* This is where the social media squares are rendered */}
      <SocialMediaLinks />

      {/* Button to navigate back to the home page */}
      <Link to="/" className="back-button">Go Back Home</Link>
    </div>
  );
}

export default SocialMedias;
