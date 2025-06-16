// src/components/MyProjects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // For general screen-content styling
import './MyProjects.css'; // Specific styles for My Projects screen

function MyProjects() {
  const projects = [
    { id: 'lab-activity-1', title: 'Lab Activity 1', dueDate: 'March 25, 2025 11:00 AM' },
    { id: 'lab-activity-2', title: 'Lab Activity 2', dueDate: 'April 8, 2025 11:59 PM' },
    { id: 'lab-activity-3', title: 'Lab Activity 3', dueDate: 'April 8, 2025 11:00 AM' },
    { id: 'long-exam-1-part-2', title: 'Long Exam 1 Part 2', dueDate: 'May 1, 2025 11:59 PM' },
    { id: 'lab-activity-4', title: 'Lab Activity 4', dueDate: 'May 6, 2025 11:00 AM' },
    { id: 'lab-activity-5', title: 'Lab Activity 5', dueDate: 'May 6, 2025 11:00 AM' },
    { id: 'lab-activity-6', title: 'Lab Activity 6', dueDate: 'May 7, 2025 11:59 PM' },
    { id: 'lab-activity-7', title: 'Lab Activity 7', dueDate: 'May 28, 2025 11:59 PM' },
  ];

  return (
    <div className="screen-content my-projects-container">
      <h2>My Projects</h2>
      <p className="projects-intro-text">
        A curated collection of academic and personal projects developed during Term 3 for CTADWEBL – Advanced Web Programming
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-item-link">
            <div className="project-item">
              <h3>{project.title}</h3>
              <p className="project-due-date">Due: {project.dueDate}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/" className="back-button">Go Back Home</Link>
    </div>
  );
}

export default MyProjects;
