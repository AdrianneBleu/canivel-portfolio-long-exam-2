// src/components/AboutMe.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation back to home
import '../App.css'; // For general layout styles (like screen-content)
import './AboutMe.css'; // Specific styles for the About Me screen

// Assuming your profile image is in the public folder.
// If you moved it to 'src/assets', you would import it like this:
// import profilePic from '../assets/your-image-name.jpg';

function AboutMe() {
  return (
    // The main container for the About Me screen content
    // 'screen-content' provides general screen layout, 'about-me-container' for specific adjustments
    <div className="screen-content about-me-container"> 
      {/* Updated Greeting/Name section */}
      <h1 className="about-me-name-large">I am Adrianne Bleu R. Canivel, but you can call me AB...</h1>
      
      {/* Profile Image section */}
      <div className="profile-image-wrapper">
        {/*
          IMPORTANT: Replace '/image_3000a0.jpg' with the actual path to your profile image.
          Ensure the image file (e.g., 'image_3000a0.jpg') is placed in your 'public' folder.
        */}
        <img src="/images/AB.jpg" alt="Adrianne Bleu" className="profile-image" />
      </div>

      {/* Updated Introduction paragraph */}
      <p className="about-me-intro">
        I'm a 3rd-year BS Information Technology student with specialization in Mobile and Web Applications at National University – Manila, driven by a passion for building meaningful, user-focused digital solutions.
        <br /><br />
        My journey in IT-MWA has been both rewarding and inspiring. I’ve contributed to five research papers presented at IEEE HNICEM 2023 and gained hands-on experience through projects with organizations like Meralco. These experiences have strengthened my technical foundation and deepened my commitment to solving real-world problems through technology.
        <br /><br />
        Leadership has also been a core part of my academic life. I’ve served as Class President at San Beda University, Entrepreneurial Committee Director under the Student Council at the University of Santo Tomas, and currently, I serve as the Public Relations Officer of the Junior Philippine Computer Society (JPCS) at NU. For the upcoming academic year (2024–2025), I’ll be stepping into the role of External Vice President. These roles have shaped my ability to lead with purpose, collaborate across diverse teams, and inspire shared success.
        <br /><br />
        I believe in lifelong learning and continuous self-discovery. My mission is to create inclusive, innovative solutions that make technology more accessible and improve everyday lives. Outside of tech, I find joy in movies, music, and the art of drag—a space that constantly reminds me of the beauty of expression, resilience, and creativity.
        <br /><br />
        I am a work in progress, embracing each day with drive, curiosity, and heart. I'm excited to apply my skills and energy to projects that create real impact and to keep growing as a professional in the world of mobile and web development.
      </p>

      {/* The "Get In Touch!" section has been removed as requested */}

      {/* Button to navigate back to the home page */}
      <Link to="/" className="back-button">Go Back Home</Link>
    </div>
  );
}

export default AboutMe;
