import React from 'react';
import ReactDOM from 'react-dom/client';  // Update the import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
