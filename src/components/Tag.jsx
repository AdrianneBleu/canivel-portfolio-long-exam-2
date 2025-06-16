// src/components/Tag.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Tag.css';

function Tag({ text, color, to }) { // Now accepts a 'to' prop for the link destination
  const tagStyle = {
    backgroundColor: color,
  };

  return (
    // Wrap the inner div with Link, passing the 'to' prop
    <Link to={to} className="tag-link"> 
      <div className="tag" style={tagStyle}>
        {text}
      </div>
    </Link>
  );
}

export default Tag;