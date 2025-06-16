// src/components/SocialMediaLinks.jsx
import React from 'react';
import './SocialMediaLinks.css'; // Dedicated CSS for social media links

function SocialMediaLinks() {
  // Define your social media data: name, Font Awesome icon class, and your profile URL
  const socialLinks = [
    // IMPORTANT: Replace 'https://www.facebook.com/your-facebook-profile' with YOUR actual Facebook profile URL
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/adrianne.bleu.2025' },
    // IMPORTANT: Replace 'https://www.instagram.com/your-instagram-profile' with YOUR actual Instagram profile URL
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/adrianne_bleu/' },
    // Changed from Twitter to LinkedIn
    // IMPORTANT: Replace 'https://www.linkedin.com/in/your-linkedin-profile' with YOUR actual LinkedIn profile URL
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/adrianne-canivel-333752244/' },
    // Add more social media links here if you want, following the same pattern:
    // { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/your-github-profile' },
  ];

  return (
    <div className="social-links-container">
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className={`social-square ${link.name.toLowerCase()}`} // Add class for specific styling (e.g., 'facebook', 'linkedin')
          aria-label={`Visit my ${link.name} profile`} // Accessibility: describes the link purpose
        >
          {/* Displaying the Font Awesome icon element here */}
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
