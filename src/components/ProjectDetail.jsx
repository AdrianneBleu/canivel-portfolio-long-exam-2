// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css'; // For general styles like back-button
import './MyProjects.css'; // For specific project detail page styling

function ProjectDetail() {
  // useParams hook extracts parameters from the URL (e.g., 'projectId' from /projects/:projectId)
  const { projectId } = useParams();

  // Function to capitalize and replace hyphens for display (e.g., 'lab-activity-1' -> 'Lab Activity 1')
  const formatProjectId = (id) => id.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  let content; // Variable to hold the JSX content to be rendered

  // Define a map for project details to easily retrieve due dates
  const projectDetailsMap = {
    'lab-activity-1': {
      title: 'Lab Activity 1',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_1_todo.html"
    },
    'lab-activity-2': { // Added details for Lab Activity 2
      title: 'Lab Activity 2',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_2_welcome.html" // Link to the new HTML file
    },
    'lab-activity-3': { 
      title: 'Lab Activity 3',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_3_home.html" // Link to the new HTML file
    },
    'long-exam-1-part-2': { 
      title: 'Long Exam 1 Part 2',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "http://localhost:5175/" 
    },
    'lab-activity-4': { 
      title: 'Lab Activity 4',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_3_home.html" // Link to the new HTML file
    },
    'lab-activity-5': { 
      title: 'Lab Activity 5',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_5_login-regis.html" // Link to the new HTML file
    },
    'lab-activity-6': { 
      title: 'Lab Activity 6',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_6_dashboard.html" 
    },
    'lab-activity-7': { 
      title: 'Lab Activity 7',
      description: `
        To run this specific activity, simply click the button below to open the application in a new tab:
      `,
      launchLink: "/lab_activity_7_dashboard.html" 
    },
  };

  const currentProject = projectDetailsMap[projectId];

  if (currentProject) { // If project details are found
    content = (
      <>
        {/* Project-specific heading */}
        <h2>{currentProject.title}</h2>
        {/* Project description */}
        <p className="project-detail-text">
          {currentProject.description}
        </p>
        {/* Button to launch the standalone HTML application (if available) */}
        {currentProject.launchLink && (
          <a href={currentProject.launchLink} target="_blank" rel="noopener noreferrer" className="back-button project-launch-button">
            Launch {currentProject.title.split(':')[0].trim()}
          </a>
        )}
        {/* Optional: You could embed a screenshot here */}
        {/* <img src="/images/lab_activity_1_screenshot.png" alt="Lab Activity 1 To-Do List" style={{maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}} /> */}
      </>
    );
  } else {
    // Generic content for any other project IDs not yet detailed
    content = (
      <>
        <h2>Project: {formatProjectId(projectId)}</h2>
        <p className="project-detail-text">
          This is the detail page for **{formatProjectId(projectId)}**.
          <br />
          Here you can add project descriptions, images, technologies used, links to live demos or GitHub repos, etc.
        </p>
      </>
    );
  }

  return (
    // Main container for the project detail screen, consistent with other screens
    <div className="screen-content project-detail-container">
      {content} {/* Renders the specific or generic content */}

      {/* Navigation buttons at the bottom of the page */}
      <div className="project-detail-nav-buttons">
        {/* Link to go back to the list of all projects */}
        <Link to="/projects" className="back-button">Go Back to Projects</Link>
        {/* Link to go back to the main home page */}
        <Link to="/" className="back-button secondary-button">Go Back Home</Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
