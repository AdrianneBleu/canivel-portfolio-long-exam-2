// src/components/TagCloud.jsx
import React from 'react';
import Tag from './Tag.jsx'; // Make sure this is .jsx
import './TagCloud.css'; // CSS for the TagCloud layout

function TagCloud() {
  const tagsData = [
    // Add a 'to' property for each tag, pointing to its route
    { text: 'ABOUT ME', color: '#FF99CC', to: '/about' },
    { text: 'MY PROJECTS', color: '#FFEC8B', to: '/projects' },
    { text: 'SOCIAL MEDIAS', color: '#87CEEB', to: '/social' },
  ];

  return (
    <div className="tag-cloud-container">
      {tagsData.map((tag, index) => (
        // Pass the 'to' prop to the Tag component
        <Tag key={index} text={tag.text} color={tag.color} to={tag.to} />
      ))}
    </div>
  );
}

export default TagCloud;