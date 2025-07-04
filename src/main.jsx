// src/main.jsx (or main.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this path is correct (e.g., './App.js' or './App.jsx')
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);