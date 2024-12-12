import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot
import './App.css';
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create the React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
