import React, { useState } from 'react';
import '../assets/Dashboard.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faCog, faUser } from '@fortawesome/free-solid-svg-icons';


const Dashboard = ({ username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleLogout = () => {
    // Implement logout logic here
    // You can dispatch a logout action or perform any necessary actions
    console.log("Logged out");
    
     // Replace with actual logout code
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2>Welcome, {username}!</h2>
        <div className="profile-dropdown">
          <div className="profile-icon" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="username">{username}</div>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        
      </div>
      
    
      
    </div>
  );
};

export default Dashboard;
