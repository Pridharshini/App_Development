// Sidebar.js
import React, { useState } from 'react';
 // Import useSelector from react-redux
import './Sidebar1.css';
import Navbar from '../Component/Navbar';

import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import { Link } from 'react-router-dom';


const Sidebar1 = () => {
  const [isStaffDropdownOpen, setIsStaffDropdownOpen] = useState(false);

  const toggleStaffDropdown = () => {
    setIsStaffDropdownOpen(!isStaffDropdownOpen);
  };

  // Retrieve the logged-in username from the Redux store
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
 
  return (
    <div>
      <Navbar />
     
      
      <div className="sidebar">
        <ul className="sidebar-menu">
        
          <li className="sidebar-menu-item">
            <div className="username"></div>
          </li>
          <li className="sidebar-menu-item">
            <Link to ="/production">
           Production
            </Link>
          </li>
          <li className="sidebar-menu-item">
           <Link to ="/schedule">    
        Schedule
        </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to ="/organization">Organizations</Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to ="/client">
          Clientele
          </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to ="/request">
            Request </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/">
            Logout
            </Link>
           
            
          </li>
        </ul>
      </div>
       
    </div>
  );
};

export default Sidebar1;
