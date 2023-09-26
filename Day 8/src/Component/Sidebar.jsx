// Sidebar.js
import React, { useState } from 'react';
 // Import useSelector from react-redux
import './Sidebar.css';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
const Sidebar = () => {
  const [isStaffDropdownOpen, setIsStaffDropdownOpen] = useState(false);
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const toggleStaffDropdown = () => {
    setIsStaffDropdownOpen(!isStaffDropdownOpen);
  };



  return (
    <div>
      <Navbar />
     
      <div className="sidebar">
        <ul className="sidebar-menu">
       
          
          <li className="sidebar-menu-item">
          <Link to ="/overview" >Overview</Link> 
          </li>
         
         <li className="sidebar-menu-item">
         <Link to = "/staff">  Staff </Link>
          </li>
          
          <li className="sidebar-menu-item">
           
          <Link to ="/company"  >Companies</Link>
          </li>
          <li className="sidebar-menu-item">
          <Link to ="/customer">  Customer</Link>
          </li>
          <li className="sidebar-menu-item">
          <Link to ="/approval"> Approval</Link>
          </li>
          <li className="sidebar-menu-item">
           <Link to="/"> Logout</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
