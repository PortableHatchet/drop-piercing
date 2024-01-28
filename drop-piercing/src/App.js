import React from 'react';
import NumbersPage from './NumbersPage';
import './App.css'; // Import your CSS file for styling



function App() {
  return (
    <div className="app-container">
      <img src="assets/droplogo.jpeg" alt="Drop Logo" className="logo" />
      <NumbersPage />
    </div>
  );
}

export default App;

