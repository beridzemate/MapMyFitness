import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import App from './App';  // Import your main app component

// Render your App into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
